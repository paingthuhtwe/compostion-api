<template>
  <div class="w-[460px] mx-auto bg-slate-200 py-9 px-5 rounded-md">
    <form @submit.prevent="create">
      <h1 class="text-2xl font-medium mb-3">Create New Post</h1>
      <label for="title" class="block text-left">Title</label>
      <input
        type="text"
        id="title"
        class="bg-slate-50 rounded-md w-full block px-2 py-1 mb-3"
        v-model="title"
        required
      />
      <label for="body" class="block text-left">Body</label>
      <textarea
        id="body"
        class="bg-slate-50 rounded-md w-full block px-2 py-1 mb-3"
        v-model="body"
        required
      ></textarea>
      <label for="category" class="block text-left"
        >Category (<span class="text-red-600 text-sm"
          >Hit enter to add category</span
        >)</label
      >
      <div
        class="bg-slate-300 rounded-md w-full block p-2 my-2 flex flex-wrap"
        v-if="tags.length > 0"
      >
        <span v-for="tag in tags" :key="tag" class="my-2">
          <span class="bg-red-50 rounded-md px-2 py-1 my-2 mr-2">{{
            tag
          }}</span>
        </span>
      </div>
      <input
        type="text"
        id="category"
        class="bg-slate-50 rounded-md w-full block px-2 py-1 mb-6"
        v-model="tag"
        @keydown.enter.prevent="addTag"
      />
      <button
        type="submit"
        class="w-full bg-teal-400 hover:bg-teal-500 rounded-md py-2 font-medium"
      >
        Add Post
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { db } from "../firebase/config";
export default {
  setup() {
    let title = ref("");
    let body = ref("");
    let tags = ref([]);
    let tag = ref("");

    let addTag = () => {
      if (tags.value.includes(tag.value)) {
        tag.value = "";
      } else {
        tags.value.push(tag.value);
        tag.value = "";
      }
    };

    // for create post to firebase
    let router = useRouter();
    let error = ref("");

    let create = async () => {
      try {
        let res = await db.collection("posts").add({
          title: title.value,
          body: body.value,
          tags: tags.value,
        });
        console.log(res);
        router.push({ name: "home" });
      } catch (err) {
        error.value = err.message;
      }
    };

    return { title, body, tag, tags, error, create, addTag };
  },
};
</script>

<style>
</style>