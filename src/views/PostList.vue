<template>
  <h1 class="text-xl font-medium mb-3">Post List</h1>
  <div
    v-if="error"
    class="bg-red-100 rounded-md px-9 py-3 text-center w-96 mx-auto"
  >
    {{ error }}
  </div>
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post"></SinglePost>
  </div>
</template>

<script>
import SinglePost from "../components/SinglePost";
export default {
  components: { SinglePost },
  props: ["posts", "error"],
  setup(props) {},
};
</script>

<style>
</style>