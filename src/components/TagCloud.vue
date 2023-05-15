<template>
  <span class="flex flex-wrap px-5">
    <span
      class="text-sm mx-1 rounded-full px-3 py-1 bg-red-200 mb-2 font-semibold text-slate-700 hover:bg-red-300 cursor-pointer inline-block"
    >
      <router-link class="py-1 px-3" :to="{ name: 'home' }">
        All Tags
      </router-link>
    </span>
    <span
      class="text-sm mx-1 rounded-full px-3 py-1 bg-red-200 mb-2 font-semibold text-slate-700 hover:bg-red-300 cursor-pointer inline-block"
      v-for="tag in filterTags"
      :key="tag"
    >
      <router-link
        class="py-1 px-3"
        :to="{ name: 'TagPost', params: { tag: tag } }"
      >
        {{ tag }}
      </router-link>
    </span>
  </span>
</template>

<script>
import { computed, ref } from "vue";
export default {
  props: ["posts"],
  setup(props) {
    let tags = ref([]);
    props.posts.forEach((post) => {
      post.category.split(",").forEach((category) => {
        tags.value.push(category);
      });
    });
    let filterTags = computed(() => {
      return tags.value.filter((tag, index, array) => {
        return array.indexOf(tag) === index;
      });
    });

    return { filterTags };
  },
};
</script>

<style>
a.router-link-active {
  color: red;
}
</style>