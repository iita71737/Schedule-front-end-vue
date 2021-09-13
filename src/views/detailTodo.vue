<template>
  <div class="container detail-todo">
    <form method="POST" style="display: inline;">
      <div class="input-group" v-if="getdata">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <input
              type="checkbox"
              name="isDone"
              v-model="getdata.todo.isDone"
              disabled
            />
          </div>
        </div>
        <input
          class="form-control"
          type="text"
          placeholder="name"
          name="name"
          v-model="getdata.todo.name"
          disabled
        />

        <div class="input-group-append">
          <router-link
            :to="{ name: 'editTodo', params: { id: getdata.todo._id } }"
            class="btn btn-success mr-1"
            >edit
          </router-link>
          <button type="submit" class="btn btn-danger mr-1">delete</button>
          <button type="button" class="btn btn-outline-primary mr-1">
            <a href="/">back</a>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "detailTodo",
  data() {
    return {
      getdata: ""
    };
  },
  created() {
    const todoId = this.$route.params.id;
    this.getDetail(todoId);
  },
  methods: {
    getDetail(Id) {
      console.log(Id);
      this.$axios({
        method: "get",
        url: `http://localhost:3000/todos/${Id}`
      }).then(res => {
        console.log(res);
        this.getdata = res.data;
      });
    }
  }
};
</script>
