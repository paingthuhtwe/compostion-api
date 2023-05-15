<template>
  <div class="w-full md:w-[790px] lg:w-[1200px] mx-auto">
    <div
      class="home md:w-[790px] lg:w-[1200px] mx-auto"
      v-if="posts.length > 0"
    >
      <PostList :posts="filterPosts" :error="error"></PostList>
    </div>
    <div v-else>
      <LoadingPage></LoadingPage>
    </div>
  </div>
</template>

<script>
import LoadingPage from "../components/LoadingPage";
import PostList from "./PostList";
import { computed, ref } from "vue";
import getPosts from "../composables/getPosts";
export default {
  components: {
    LoadingPage,
    PostList,
  },
  props: ["tag"],
  setup(props) {
    let { error, posts, load } = getPosts();

    load();

    let filterPosts = computed(() => {
      return posts.value.filter((post) => {
        return post.category.includes(props.tag);
      });
    });

    return { error, posts, load, filterPosts };
  },
};
</script>

<style>
</style>