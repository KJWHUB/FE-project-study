<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/">home</NuxtLink></li>
        <li><NuxtLink to="/main">main</NuxtLink></li>
        <li><NuxtLink to="/cart">cart</NuxtLink></li>
        <li><NuxtLink to="/product/1">product 1</NuxtLink></li>
        <li><NuxtLink to="/product/2">product 2</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: brown;
  color: $primary;
}
</style>
