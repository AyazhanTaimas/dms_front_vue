<template>
  <div class="layout">
    <Header />

    <div class="body">
      <Sidebar />
      <main class="content">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
</script>

<style scoped>
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.body {
  flex: 1;
  display: flex;
}

.content {
  flex: 1;
  padding: 32px;
  background: #f5f5f5;
  overflow-y: auto;
}
</style>
