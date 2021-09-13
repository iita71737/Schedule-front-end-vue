<template>
  <div class="container edit-todo">
    <form
      method="POST"
      @submit.stop.prevent="editTodo"
      style="display: inline;"
    >
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <input
              type="checkbox"
              name="isDone"
              :class="{ checked: this.getdata.isDone }"
              v-model="getdata.isDone"
            />
          </div>
        </div>
        <input
          class="form-control"
          type="text"
          placeholder="name"
          name="name"
          v-model="text"
        />
        <div class="input-group-append">
          <button type="submit" class="btn btn-success">Save</button>

          <button type="button" class="btn btn-outline-primary">
            <a href="/">back</a>
          </button>
        </div>
      </div>
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
        data: { name: this.text, isDone: this.getdata.isDone }
      }).then(res => {
        console.log("success", res);
        self.$router.push("/");
      });
    }
  }
};
</script>
