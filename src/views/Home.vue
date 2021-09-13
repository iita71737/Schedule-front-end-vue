<template>
  <div class="todo-list">
    <div>
      <h1>{{ msg }}</h1>
    </div>
    <router-link to="/new">
      <button class="btn btn-primary m-2">
        Create New Todo
      </button>
    </router-link>

    <div class="container">
      <ul>
        <li v-for="todo in todos" :key="todo.id" class="list-group-item">
          <div class="row">
            <div class="col-auto mr-auto">
              <input
                style="vertical-align: middle;"
                type="checkbox"
                name="isDone"
                v-model="todo.isDone"
                disabled
              />
              <h4 style="display: inline; vertical-align: middle;">
                {{ todo.name }}
              </h4>
            </div>
            <div class="col-auto">
              <router-link
                :to="{ name: 'detailTodo', params: { id: todo._id } }"
                class="btn btn-secondary m-2"
                >detail
              </router-link>
              <router-link
                :to="{ name: 'editTodo', params: { id: todo._id } }"
                class="btn btn-success m-2"
                >edit
              </router-link>
              <form
                method="POST"
                style="display: inline;"
                @submit.stop.prevent="deleteTodo(todo._id)"
              >
                <button type="submit" class="btn btn-danger m-2">delete</button>
              </form>
            </div>
          </div>
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
