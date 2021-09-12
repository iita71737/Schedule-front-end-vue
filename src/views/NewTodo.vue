<template>
  <form method="POST" class="create-new-btn" @submit.stop.prevent="postmsg">
    <input type="text" placeholder="name" name="name" v-model="text" />
    <button type="submit">Create</button>
  </form>
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
