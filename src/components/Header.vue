<template>


  <header class="header">
    <!-- LEFT -->
    <div class="logo">
      <img src="@/assets/logo.png" class ='icon' alt="DMS icon" />
      <img src="@/assets/DMS%20(1)%201.svg" class ='logo' alt="DMS" />
    </div>

    <button class="bell">
      <img src="@/assets/bell-icon%201.svg" class ='bell' alt="notifications" />
    </button>
  </header>
</template>

<style scoped>
.header {
  height: 64px;
  background: white;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}

/* LEFT BLOCK */
.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 240px;   /* 🔥 ОГРАНИЧЕНИЕ */
}

.icon {
  width: 50px;
  height: auto;
}

.logo-text {
  height: 32px;
  width: auto;
}

.bell {
  background: transparent;
  border: none;
  cursor: pointer;
}

.bell img {
  width: 20px;
  height: 20px;
}

.logo {
  margin-left: 10px;
  margin-bottom: 5px;
}


</style>
<script setup lang="ts">
</script>