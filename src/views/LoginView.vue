<template>
  <div class="login-wrapper">
    <div class="login-card">


      <div class="logo-block">
        <img src="@/assets/logo.png" class="logo" alt="DMS Logo" />
        <img src="@/assets/DMS.png" class="logo_dms" alt="DMS">
      </div>

      <form @submit.prevent="handleLogin" class="form">

        <div class="field">
          <label class="field_desc">Email</label>
          <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              required
          >
        </div>

        <div class="field">
          <label class="field_desc">Password</label>
          <div class="password-wrap">
            <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Enter your password"
                required
            >
            <img
                :src="showPassword ? '@/assets/view.png' : '@/assets/hide.png'"
                class="eye"
                @click="showPassword = !showPassword"
            />

          </div>
        </div>

        <p class="forgot">Forgot your password?</p>

        <p v-if="error" class="error">{{ error }}</p>

        <button type="submit" class="btn" :disabled="loading">
          <span v-if="!loading">Sign in</span>
          <span v-else>Loading...</span>
        </button>
      </form>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import api from "../api/axios"
import router from "../router"

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')
const showPassword = ref(false)

const handleLogin = async () => {
  loading.value = true
  error.value = ''

  try {
    const res = await api.post('/login', {
      email: email.value,
      password: password.value
    })

    localStorage.setItem('token', res.data.token)

    router.push('/dashboard')

  } catch (e) {
    error.value = 'Invalid email or password'
  }

  loading.value = false
}


</script>

<style scoped>
.login-wrapper {
  background: #DCC6F5;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  background: transparent;
  text-align: center;
  width: 400px;
}


.logo-block {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.logo {
  width: 74px;
}

.logo_dms {
  height: 66px;
  width: 233px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 40px;
}

.field {
  text-align: left;
}

.field_desc {
  color: #4A00AF;
  font-size: 18px;
}

label {
  font-weight: 500;
  font-size: 14px;
  margin-left: 4px;
  margin-bottom: 4px;
  display: block;
  color: #3D3D3D;
}

input {
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid #D2D2D2;
  background: white;
  font-size: 14px;
}

input::placeholder {
  color: #8B8B8B;
}

.password-wrap {
  position: relative;
}

.eye {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.forgot {
  margin-top: -8px;
  margin-bottom: 8px;
  font-size: 13px;
  color: #5A0FC8;
  cursor: pointer;
}

.error {
  font-size: 14px;
  color: #d50000;
}

.btn {
  background: #5A0FC8;
  color: white;
  border: none;
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  font-size: 15px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;
}

.btn:hover {
  background: #4A00AF;
}

.btn:disabled {
  opacity: 0.7;
}
</style>
