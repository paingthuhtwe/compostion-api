<template>
  <div class="flex justify-center flex-wrap gap-5">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post"></SinglePost>
    </div>
  </div>
</template>

<script>
import SinglePost from "../components/SinglePost";
import { ref } from "vue";
import { db } from "../firebase/config";

export default {
  components: { SinglePost },
  setup() {
    let posts = ref([]);
    db.collection("posts")
      .orderBy("created_at", "desc")
      .onSnapshot((snap) => {
        posts.value = snap.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
      });

    return { posts };
  },
};
</script>

<style>
</style>