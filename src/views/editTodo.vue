<template>
  <div class="edit-todo">
    <form method="POST" @submit.stop.prevent="editTodo">
      <input type="text" placeholder="name" name="name" v-model="text" />
      <button type="submit">Save</button>
      <a href="/">back</a>
    </form>
  </div>
</template>

<script>
export default {
  name: "editTodo",
  data() {
    return {
      getdata: "",
      text: "",
      todoId: ""
    };
  },
  created() {
    const todoId = this.$route.params.id;
    this.getTodo(todoId);
    this.todoId = todoId;
  },
  methods: {
    getTodo(Id) {
      //console.log(Id);
      this.$axios({
        method: "get",
        url: `http://localhost:3000/todos/${Id}`
      }).then(res => {
        console.log(res);
        this.getdata = res.data.todo;
        this.text = this.getdata.name;
      });
    },
    editTodo() {
      const self = this;
      console.log("editid", this.todoId);
      this.$axios({
        method: "post",
        url: `http://localhost:3000/todos/${this.todoId}/edit`,
        data: { name: this.text }
      }).then(res => {
        console.log("success", res);
        self.$router.push("/");
      });
    }
  }
};
</script>
