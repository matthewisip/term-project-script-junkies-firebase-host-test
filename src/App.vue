<template>
  <div class="app-container">
    <h1>Welcome!</h1>
    <AuthScreen />
  </div>
</template>

<script>
import AuthScreen from "./components/AuthScreen.vue";

export default {
  components: {
    AuthScreen
  }
};
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
