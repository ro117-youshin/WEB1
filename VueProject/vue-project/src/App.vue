<template>
  <nav>
    <router-link to="/">후보등록</router-link> |
    <router-link to="/voting">투표하기</router-link> |
    <router-link to="/result">개표결과</router-link>
  </nav>
  <router-view />
</template>
<style>
body {
  background-image: url('@/assets/votes.png');
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
