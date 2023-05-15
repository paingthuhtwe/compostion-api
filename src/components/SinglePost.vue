<template>
  <p
    class="bg-slate-200 rounded-md w-96 p-3 text-left mx-auto shadow-md border-[.5px] border-red-500 shadow-red-100"
  >
    <span class="font-semibold text-red-800">{{ post.title }}</span
    ><br />
    <span>{{ cutPostBody }}</span
    ><br />
    <router-link
      class="underline text-blue-700 hover:text-blue-800"
      :to="{ name: 'PostDetail', params: { id: post.id } }"
      >Detail</router-link
    >
  </p>
</template>

<script>
import { computed, ref } from "vue";
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
