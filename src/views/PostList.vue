<template>
  <h1 class="text-xl font-medium mb-3">Post List</h1>
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post"></SinglePost>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "vue";
import SinglePost from "../components/SinglePost";
export default {
  components: { SinglePost },
  props: ["posts"],
  setup(props) {
    onMounted(() => console.log("Mounted"));
    onUnmounted(() => console.log("Unmounted"));
    onUpdated(() => console.log("Updated"));
  },
};
</script>

<style>
</style>