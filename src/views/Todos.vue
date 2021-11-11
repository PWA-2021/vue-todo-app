<template>
  <div class="home">
    <b-modal
      :active="$route.name === 'AddTodo'"
      :on-cancel="() => handleCancel()"
    >
      <router-view />
    </b-modal>

    <section>
      <b-table
        :data="data"
        :columns="columns"
        :checked-rows.sync="checkedRows"
        :is-row-checkable="(row) => row.checkable"
        checkable
      >
        <template #bottom-left>
          <b>Total checked</b>: {{ checkedRows.length }}
        </template>
      </b-table>
    </section>

    <router-link class="button is-primary" to="/add" type="is-primary">
      Open modal
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {
    addTodo() {
      this.data.push({
        first_name: this.name,
        checkable: true
      })
      this.name = ''
    },
    handleCancel() {
      this.$router.push({ path: '/' })
    }
  },
  data() {
    return {
      data: [
        {
          id: 1,
          first_name: 'Jesse',
          last_name: 'Simmons',
          date: '2016-10-15 13:43:27',
          gender: 'Male',
          checkable: true
        },
        {
          id: 2,
          first_name: 'John',
          last_name: 'Jacobs',
          date: '2016-12-15 06:00:53',
          gender: 'Male',
          checkable: true
        },
        {
          id: 3,
          first_name: 'Tina',
          last_name: 'Gilbert',
          date: '2016-04-26 06:26:28',
          gender: 'Female',
          checkable: false
        },
        {
          id: 4,
          first_name: 'Clarence',
          last_name: 'Flores',
          date: '2016-04-10 10:28:46',
          gender: 'Male',
          checkable: false
        },
        {
          id: 5,
          first_name: 'Anne',
          last_name: 'Lee',
          date: '2016-12-06 14:38:38',
          gender: 'Female',
          checkable: true
        }
      ],
      checkedRows: [],
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '40',
          numeric: true
        },
        {
          field: 'first_name',
          label: 'First Name'
        },
        {
          field: 'last_name',
          label: 'Last Name'
        },
        {
          field: 'date',
          label: 'Date',
          centered: true
        },
        {
          field: 'gender',
          label: 'Gender'
        }
      ]
    }
  }
}
</script>
