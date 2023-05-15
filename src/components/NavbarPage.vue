<template>
  <nav class="bg-slate-500 mb-3">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/create">Create Post</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0px 10px;
  font-size: 1.2em;
  transition: 0.5s;
  background: #eef;
}

nav a:hover {
  background: #ddd;
  color: #42b983;
  transition: 0.5s;
}

nav a.router-link-exact-active {
  color: #42b983;
  background: #ddd;
}
</style>