<template>
  <p
    class="bg-slate-200 rounded-md w-64 mb-4 p-3 text-left mx-auto shadow-md border-[.5px] border-red-500 shadow-red-100"
  >
    {{ post.id }}.
    <span class="font-semibold text-red-800">{{ post.title }}</span
    ><br />
    <span>{{ cutPostBody }}</span>
  </p>
</template>

<script>
import { computed, ref } from "vue";
export default {
  props: ["post"],
  setup(props) {
    let cutPostBody = computed(() => {
      return props.post.body.substring(0, 75) + " . . .";
    });

    return { cutPostBody };
  },
};
</script>

<style>
</style>
