<template>
  <div class="home" v-if="posts.length > 0">
    <PostList :posts="posts" :error="error"></PostList>
  </div>
  <div v-else>Loading . . .</div>
</template>

<script>
import PostList from "./PostList";
import getPosts from "../composables/getPosts";
export default {
  components: { PostList },
  setup() {
    // composable function
    let { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>
