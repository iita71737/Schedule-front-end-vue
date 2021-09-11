<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div v-for="todo in todos" :key="todo.id">
      <h5>{{ todo.name }}</h5>
    </div>

    <button type="button" name="button" v-on:click="getmsg">get</button>
    <button type="button" name="button" v-on:click="postmsg">post</button>
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
    postmsg() {
      this.$axios.post("/api/favorite", { name: "money" }).then(res => {
        console.log("post res = ", res);
      });
    }
  }
};
</script>
