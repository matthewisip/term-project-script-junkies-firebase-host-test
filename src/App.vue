<template>
  <div class="app-container">
    <AuthScreen v-if="!isAuthenticated" @authenticated="isAuthenticated = true" />
    <MainScreen v-else />
  </div>
</template>

<script>
import AuthScreen from './components/AuthScreen.vue'
import MainScreen from './components/MainScreen.vue'


export default {
  components: {
    AuthScreen,
    MainScreen
  },
  data() {
    return {
      isAuthenticated: false
    }
  }
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  gap: 20px;
}
</style>
