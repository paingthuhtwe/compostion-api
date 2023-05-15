<template>
  <div v-if="post">
    <div
      class="bg-slate-100 rounded-sm w-96 md:w-[720px] mb-4 p-3 text-left mx-auto shadow-md border-[.5px] border-yellow-900 shadow-yellow-50"
    >
      <span
        class="text-md py-1 px-3 font-medium bg-yellow-400 inline-block -rotate-[7.5deg] -translate-x-6 mb-2"
        >#Title</span
      >
      <span class="float-right">
        <span
          class="text-sm py-1 px-3 font-bold rounded-sm bg-sky-300 inline-block mr-2"
          >{{ formatDate(post.created_at) }}</span
        >
        <span
          class="text-sm py-1 px-3 font-bold rounded-sm bg-red-700 text-slate-100 inline-block hover:bg-red-800 cursor-pointer"
          @click="deletePost(post.id)"
          >X</span
        >
      </span>
      <br />
      <span class="text-2xl font-semibold text-teal-800">{{ post.title }}</span>
      <hr class="border-b-1 border-slate-500 my-3" />
      <span
        class="text-md py-1 px-3 font-medium bg-yellow-400 inline-block -rotate-[7.5deg] -translate-x-6 mb-2"
        >#Description</span
      >
      <br />
      <span class="text-lg">{{ post.body }}</span>
      <hr class="border-b-1 border-slate-300 my-3" />
      <span
        class="text-md py-1 px-3 font-medium bg-yellow-400 inline-block -rotate-[7.5deg] -translate-x-6"
        >#Tags</span
      >
      <span class="flex flex-wrap mt-2">
        <span
          class="text-sm mx-1 rounded-sm px-3 py-1 bg-red-200 mb-2 font-medium hover:bg-red-300 cursor-pointer inline-block"
          v-for="arr in array"
          :key="arr"
          >{{ arr }}</span
        >
      </span>
    </div>
  </div>
  <div v-else>
    <LoadingPage></LoadingPage>
  </div>
</template>

<script>
import LoadingPage from "../components/LoadingPage";
import getPost from "../composables/getPost";
import moment from "moment";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  components: { LoadingPage },
  props: ["id"],
  setup(props) {
    let route = useRoute();
    let { array, post, error, load } = getPost(route.params.id);
    load();

    let formatDate = (date) => {
      return moment(date).fromNow();
    };

    // delete method for post
    let url = ref("http://127.0.0.1:8000/api/posts/");
    let router = useRouter();
    let deletePost = (id) => {
      let deleting = async () => {
        let res = await fetch(url.value + id, {
          method: "DELETE",
        });

        if (res.ok) {
          router.push({ name: "home" });
        }
      };
      deleting();
    };

    return { array, post, error, formatDate, deletePost };
  },
};
</script>

<style>
</style>