<template>
  <div>
    <form id="search">
      Search <input name="query" v-model="filterKey">
    </form>
    <table v-if="filteredData.length">
      <thead>
        <tr>
          <th v-for="key in columns"
            :key="key"
            @click="sortBy(key)"
            :class="{ active: state.sortKey == key }">
            {{ capitalize(key) }}
            <span class="arrow" :class="state.sortOrders[key] > 0 ? 'asc' : 'dsc'">
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, index) in filteredData" :key="index">
          <td v-for="key in columns" :key="index + key">
            {{entry[key]}}
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>No matches found.</p>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    const columns = ['name', 'power']
    return {
      filterKey: '',
      columns,
      data: [
        { name: 'Chuck Norris', power: Infinity },
        { name: 'Bruce Lee', power: 9000 },
        { name: 'Jackie Chan', power: 7000 },
        { name: 'Jet Li', power: 8000 }
      ],
      state: {
        sortKey: '',
        sortOrders: columns.reduce((o, key) => {
          o[key] = 1
          return o
        }, {})
      }
    }
  },
  computed: {
    filteredData () {
      let _data = this.data
      const state = this.state
      if (this.filterKey) {
        const _filterKey = this.filterKey.toLowerCase()
        _data = _data.filter(row => {
          return Object.keys(row).some(key => {
            return String(row[key]).toLowerCase().indexOf(_filterKey) > -1
          })
        })
      }
      const { sortKey } = state
      if (sortKey) {
        const order = state.sortOrders[sortKey]
        _data = _data.slice().sort((a, b) => {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return _data
    }
  },
  methods: {
    sortBy (key) {
      this.state.sortKey = key
      this.state.sortOrders[key] *= -1
    },
    capitalize (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  }
})
</script>
<style scoped>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>
