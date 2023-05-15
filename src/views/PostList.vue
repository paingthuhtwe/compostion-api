<template>
  <div
    v-if="error"
    class="bg-red-100 rounded-md px-9 py-3 text-center w-96 mx-auto"
  >
    {{ error }}
  </div>
  <div class="flex justify-center md:justify-start flex-wrap gap-5">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post"></SinglePost>
    </div>
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