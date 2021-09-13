<template>
  <div>
    <div>
      <h1>{{ msg }}</h1>
    </div>
    <router-link to="/new">
      <button>
        Create New Todo
      </button>
    </router-link>

    <div>
      <ul>
        <li v-for="todo in todos" :key="todo.id" class="mr-3">
          <input type="checkbox" name="isDone" v-model="todo.isDone" disabled />

          {{ todo.name }}
          <router-link
            :to="{ name: 'detailTodo', params: { id: todo._id } }"
            class="mr-2"
            >detail</router-link
          >
          <router-link
            :to="{ name: 'editTodo', params: { id: todo._id } }"
            class="mr-2"
            >edit</router-link
          >
          <form
            method="POST"
            style="display: inline;"
            @submit.stop.prevent="deleteTodo(todo._id)"
          >
            <button type="submit">delete</button>
          </form>
        </li>
      </ul>
      <button type="button" name="button" v-on:click="getmsg">get</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      todos: ""
    };
  },
  created() {
    this.getmsg();
  },
  methods: {
    getmsg() {
      this.$axios.get("http://localhost:3000/").then(res => {
        const response = res.data;
        console.log(response);
        this.todos = response.todos;
      });
    },
    deleteTodo(todoId) {
      //console.log(todoId);
      this.$axios
        .post(`http://localhost:3000/todos/${todoId}/delete`, { todoId })
        .then(res => {
          const response = res.data;
          console.log(response);
          this.getmsg();
        });
    }
  }
};
</script>
