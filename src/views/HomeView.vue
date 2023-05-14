<template>
  <div class="home">
    <PostList :posts="posts"></PostList>
    <button
      @click="posts.pop()"
      class="bg-red-500 hover:bg-red-600 rounded-md px-3 py-1 text-slate-100"
    >
      Delete Lastst Post
    </button>
  </div>
</template>

<script>
import PostList from "./PostList";
import { ref } from "vue";
export default {
  components: { PostList },
  setup() {
    let posts = ref([
      {
        id: 1,
        title: "Title One",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste, voluptate consequuntur fugit suscipit ratione ut libero. Ut modi deserunt inventore, sapiente blanditiis reiciendis aliquam et, excepturi, doloribus saepe cum.",
      },
      {
        id: 2,
        title: "Title Two",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste, voluptate consequuntur fugit suscipit ratione ut libero. Ut modi deserunt inventore, sapiente blanditiis reiciendis aliquam et, excepturi, doloribus saepe cum.",
      },
      {
        id: 3,
        title: "Title Three",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste, voluptate consequuntur fugit suscipit ratione ut libero. Ut modi deserunt inventore, sapiente blanditiis reiciendis aliquam et, excepturi, doloribus saepe cum.",
      },
    ]);

    return { posts };
  },
};
</script>
