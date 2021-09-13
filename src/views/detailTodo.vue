<template>
  <div v-if="getdata" class="detail-todo">
    <input
      type="checkbox"
      name="isDone"
      v-model="getdata.todo.isDone"
      disabled
    />
    <p>{{ getdata.todo.name }}</p>
    <a href="/">back</a>
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
