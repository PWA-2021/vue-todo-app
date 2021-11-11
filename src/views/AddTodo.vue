<template>
  <div class="card p-6">
    <b-field label="Task name">
      <b-input
        placeholder="The name of your task item"
        v-model="name"
      ></b-input>
    </b-field>
    <b-button @click="addTodo" type="is-primary">Add todo item</b-button>
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
    }
  },
  data() {
    return {
      name: ''
    }
  }
}
</script>

<style></style>
