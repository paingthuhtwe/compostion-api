<template>
  <nav class="bg-slate-500 mb-3">
    <div
      class="w-full md:w-[790px] lg:w-[1200px] mx-auto md:flex justify-between items-center"
    >
      <div>
        <h1 class="text-4xl font-bold text-slate-100 mb-9 md:mb-0">
          Bloggy Vue
        </h1>
      </div>
      <div>
        <router-link to="/">Home</router-link>
        <router-link class="ml-2" to="/create">Create Post</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav {
  padding: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  border-radius: 5px;
  padding: 7.5px 12px;
  font-size: 1.1em;
  transition: 0.5s;
  background: #eef;
}

nav a:hover {
  background: #fff;
  color: #42b983;
}

nav a.router-link-exact-active {
  color: #42b983;
  background: #fff;
}
</style>