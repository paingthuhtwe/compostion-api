<template>
  <div
    class="home w-full md:w-[790px] lg:w-[1200px] mx-auto"
    v-if="posts.length > 0"
  >
    <div class="grid grid-cols-12">
      <div class="lg:col-span-8 md:col-span-6 col-span-12">
        <h1 class="text-2xl font-semibold text-slate-800 my-4 text-left">
          Post Lists
        </h1>
        <PostList :posts="filterPosts" :error="error"></PostList>
      </div>
      <div class="lg:col-span-4 md:col-span-6 col-span-12">
        <h1 class="text-2xl font-semibold text-slate-800 my-4">Tag Cloud</h1>
        <TagCloud :posts="posts"></TagCloud>
      </div>
    </div>
  </div>
  <div v-else>
    <LoadingPage></LoadingPage>
  </div>
</template>

<script>
import TagCloud from "../components/TagCloud";
import LoadingPage from "../components/LoadingPage";
import PostList from "./PostList";
import { computed, ref } from "vue";
import getPosts from "../composables/getPosts";
export default {
  components: {
    TagCloud,
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