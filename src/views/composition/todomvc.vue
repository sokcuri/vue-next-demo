<template>
  <div>
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input class="new-todo"
                autofocus autocomplete="off"
                placeholder="What needs to be done?"
                v-model="state.newTodo"
                @keyup.enter="addTodo">
      </header>
      <section class="main" v-show="state.todos.length">
        <input id="toggle-all" class="toggle-all" type="checkbox" v-model="state.allDone">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li v-for="todo in state.filteredTodos"
              class="todo"
              :key="todo.id"
              :class="{ completed: todo.completed, editing: todo === state.editedTodo }">
            <div class="view">
              <input class="toggle" type="checkbox" v-model="todo.completed">
              <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
              <button class="destroy" @click="removeTodo(todo)"></button>
            </div>
            <input class="edit" type="text"
                    v-model="todo.title"
                    v-todo-focus="todo === state.editedTodo"
                    @blur="doneEdit(todo)"
                    @keyup.enter="doneEdit(todo)"
                    @keyup.escape="cancelEdit(todo)"
            >
          </li>
        </ul>
      </section>
      <footer class="footer" v-show="state.todos.length">
          <span class="todo-count">
            <strong>{{ state.remaining }}</strong>
            <span>{{ state.remainingText }}</span>
          </span>
        <ul class="filters">
          <li><a href="javascript:;" @click="state.visibility = 'all'" :class="{ selected: state.visibility === 'all' }">All</a></li>
          <li><a href="javascript:;" @click="state.visibility = 'active'" :class="{ selected: state.visibility === 'active' }">Active</a></li>
          <li><a href="javascript:;" @click="state.visibility = 'completed'" :class="{ selected: state.visibility === 'completed' }">Completed</a></li>
        </ul>

        <button class="clear-completed" @click="removeCompleted" v-show="state.todos.length > state.remaining">
          Clear completed
        </button>
      </footer>
    </section>
  </div>
</template>
<script>
import { defineComponent, reactive, computed, watchEffect } from 'vue'

const STORAGE_KEY = 'todos-vuejs-3.x'
const todoStorage = {
  fetch () {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach((todo, index) => {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

const filters = {
  all (todos) {
    return todos
  },
  active (todos) {
    return todos.filter((todo) => {
      return !todo.completed
    })
  },
  completed (todos) {
    return todos.filter(function (todo) {
      return todo.completed
    })
  }
}

function pluralize (n) {
  return n === 1 ? 'item' : 'items'
}

export default defineComponent({
  setup () {
    const state = reactive({
      todos: todoStorage.fetch(),
      editedTodo: null,
      newTodo: '',
      beforeEditCache: '',
      visibility: 'all',
      remaining: computed(() => {
        return filters.active(state.todos).length
      }),
      remainingText: computed(() => {
        return ` ${pluralize(state.remaining)} left`
      }),
      filteredTodos: computed(() => {
        return filters[state.visibility](state.todos)
      }),
      allDone: computed({
        get: function () {
          return state.remaining === 0
        },
        set: function (value) {
          state.todos.forEach((todo) => {
            todo.completed = value
          })
        }
      })
    })

    watchEffect(() => {
      todoStorage.save(state.todos)
    })

    function addTodo () {
      const value = state.newTodo && state.newTodo.trim()
      if (!value) {
        return
      }
      state.todos.push({
        id: todoStorage.uid++,
        title: value,
        completed: false
      })
      state.newTodo = ''
    }

    function removeTodo (todo) {
      state.todos.splice(state.todos.indexOf(todo), 1)
    }

    function editTodo (todo) {
      state.beforeEditCache = todo.title
      state.editedTodo = todo
    }

    function doneEdit (todo) {
      if (!state.editedTodo) {
        return
      }
      state.editedTodo = null
      todo.title = todo.title.trim()
      if (!todo.title) {
        removeTodo(todo)
      }
    }

    function cancelEdit (todo) {
      state.editedTodo = null
      todo.title = state.beforeEditCache
    }

    function removeCompleted () {
      state.todos = filters.active(state.todos)
    }

    return {
      state,
      addTodo,
      removeTodo,
      editTodo,
      doneEdit,
      cancelEdit,
      removeCompleted
    }
  },

  directives: {
    'todo-focus': (el, { value }) => {
      if (value) {
        el.focus()
      }
    }
  }
})
</script>

<style scoped>
@import url('~todomvc-app-css/index.css');
.todoapp {
  position: relative;
  line-height: 1.4em;
  background: #f5f5f5;
  color: #111111;
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
  font-weight: 300;
}
</style>
