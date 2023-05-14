<template>
  <div v-if="post">
    <p
      class="bg-slate-200 rounded-md w-[460px] mb-4 p-3 text-left mx-auto shadow-md border-[.5px] border-teal-500 shadow-teal-100"
    >
      <span class="text-2xl font-semibold text-teal-800"
        >{{ post.id }}. {{ post.title }}</span
      ><br />
      <span class="text-lg">{{ post.description }}</span>
    </p>
  </div>
  <div v-else>Loading . . .</div>
</template>

<script>
import getPost from "../composables/getPost";
export default {
  props: ["id"],
  setup(props) {
    let { post, error, load } = getPost(props.id);

    load();

    return { post, error };
  },
};
</script>

<style>
</style>