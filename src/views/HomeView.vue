<template>
  <div class="home">
    <div class="border-b-2 py-9">
      <h1 class="text-center text-3xl font-semibold">{{ userOne.name }}</h1>
      <h1 class="text-center text-3xl font-semibold">{{ userOne.age }}</h1>
      <button
        @click="change('one')"
        class="px-3 py-1 bg-slate-700 hover:bg-slate-800 rounded-md text-slate-100 mt-9 m-3"
      >
        Change Name
      </button>
      <button
        @click="userOne.age++"
        class="px-3 py-1 bg-slate-700 hover:bg-slate-800 rounded-md text-slate-100 mt-9 m-3"
      >
        Increase Age
      </button>
    </div>
    <!-- end userOne -->
    <div class="border-b-2 py-9">
      <h1 class="text-center text-3xl font-semibold">{{ userTwo.name }}</h1>
      <h1 class="text-center text-3xl font-semibold">{{ userTwo.age }}</h1>
      <button
        @click="change('two')"
        class="px-3 py-1 bg-slate-700 hover:bg-slate-800 rounded-md text-slate-100 mt-9 m-3"
      >
        Change Name
      </button>
      <button
        @click="userTwo.age++"
        class="px-3 py-1 bg-slate-700 hover:bg-slate-800 rounded-md text-slate-100 mt-9 m-3"
      >
        Increase Age
      </button>
    </div>
    <!-- end userTwo -->
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  setup() {
    let userOne = ref({ name: "User One", age: "20" });
    let userTwo = reactive({ name: "User Two", age: "30" });
    let change = (value) => {
      if (value === "one") {
        userOne.value.name = "User One Change";
      }
      if (value === "two") {
        userTwo.name = "User Two Change";
      }
    };

    return { userOne, userTwo, change };
  },
};
</script>
