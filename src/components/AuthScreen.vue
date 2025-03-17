<template>
    <div class="auth-container">
      <h2>{{ isLogin ? "Login" : "Sign Up" }}</h2>
      <form @submit.prevent="handleAuth">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">{{ isLogin ? "Login" : "Sign Up" }}</button>
      </form>
      <p @click="isLogin = !isLogin">
        {{ isLogin ? "Need an account? Sign Up" : "Already have an account? Login" }}
      </p>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { auth } from "../firebase/firebase";
  import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
  
  export default {
    setup() {
      const email = ref("");
      const password = ref("");
      const isLogin = ref(true);
  
      const handleAuth = async () => {
        try {
          if (isLogin.value) {
            await signInWithEmailAndPassword(auth, email.value, password.value);
            alert("Logged in!"); // TO DO: REPLACE WITH NAV TO MAIN SCREEN
          } else {
            await createUserWithEmailAndPassword(auth, email.value, password.value);
            alert("Account created!");
          }
        } catch (error) {
          alert(error.message);
        }
      };
  
      return { email, password, isLogin, handleAuth };
    }
  };
  </script>
  
  <style scoped>
  .auth-container {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    text-align: center;
  }
  input {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
  }
  button {
    width: 100%;
    padding: 10px;
    background-color: #42b983;
    color: white;
    border: none;
    cursor: pointer;
  }
  p {
    cursor: pointer;
    color: #007bff;
  }
  </style>
  