<template>
  <div class="container new-todo">
    <form method="POST" @submit.stop.prevent="postmsg">
      <div class="input-group mb-3">
        <input
          type="text"
          placeholder="name"
          name="name"
          v-model="text"
          class="form-control"
        />
        <div class="input-group-append">
          <button type="submit" class="btn btn-success">Create</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewTodo",
  data() {
    return {
      text: ""
    };
  },
  methods: {
    postmsg() {
      const self = this;
      this.$axios({
        method: "post",
        url: "http://localhost:3000/todos",
        data: { name: this.text }
      }).then(function(res) {
        console.log(res);
        self.$router.push("/");
      });
    }
  }
};
</script>
