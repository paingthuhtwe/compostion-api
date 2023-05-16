<template>
  <p
    class="bg-slate-200 rounded-md w-96 p-3 text-left mx-auto shadow-md border-[.5px] border-red-500 shadow-red-100"
  >
    <div class="font-semibold text-red-800 text-xl mb-2">{{ post.title }}</div
    >
    <div class="text-lg">{{ cutPostBody }}</div>
    <router-link
      class="underline text-sky-500 hover:text-blue-800 text-lg"
      :to="{ name: 'PostDetail', params: { id: post.id } }"
      >Detail</router-link
    >
    <span class="flex flex-wrap mt-2">
      <span
        class="text-sm mr-1 rounded-full px-3 py-1 bg-blue-200 mb-1 font-medium hover:bg-red-300 cursor-pointer inline-block"
        v-for="tag in post.tags"
        :key="tag"
      >
        <router-link
          class="px-3 py-1"
          :to="{ name: 'TagPost', params: { tag: tag } }"
        >
          {{ tag }}
        </router-link>
      </span>
    </span>
  </p>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["post"],
  setup(props) {
    let cutPostBody = computed(() => {
      if (props.post.body.length > 75) {
        return props.post.body.substring(0, 75) + " . . .";
      } else {
        return props.post.body;
      }
    });

    return { cutPostBody };
  },
};
</script>

<style>
</style>
