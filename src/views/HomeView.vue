<template>
  <div class="home">
    <input
      type="text"
      id="first_name"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 mx-auto"
      placeholder="Search"
      v-model="search"
    />
    <h1 class="text-center text-3xl font-semibold">{{ search }}</h1>
    <div class="border-b-2 py-9" v-for="name in filterNames" :key="name">
      <h1 class="text-center text-3xl font-semibold">{{ name }}</h1>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from "vue";
export default {
  setup() {
    let search = ref("");
    let names = ref(["Panda", "Thet Hnin Phyu", "Paing Thu Htwe", "Htar"]);

    let filterNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });
    return { names, search, filterNames };
  },
};
</script>
