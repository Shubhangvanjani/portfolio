<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/group.jpeg" height="200px" width="300px">
    <HelloWorld msg="Welcome to Abu "/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
