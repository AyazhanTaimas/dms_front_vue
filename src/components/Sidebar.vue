<template>
  <aside class="sidebar">
    <nav>
      <button
          v-for="item in menu"
          :key="item.title"
          :class="{ active: item.active }"
          class="menu-item"
      >
        <img :src='item.icon' class="menu-icon" />
        {{ item.title }}
      </button>
    </nav>
  </aside>
</template>

<script setup>
const menu = [
    { title: "Главная",
    icon: new URL("@/assets/home 1.svg", import.meta.url).href,
    active: true,
    },
  { title: "Личная информация",
    icon: new URL("@/assets/personal-info 1.svg", import.meta.url).href,
  },
  { title: "Проживание",
    icon: new URL("@/assets/housing 2.svg", import.meta.url).href, },
  { title: "Финансовый кабинет",
    icon: new URL("@/assets/finance 1.svg", import.meta.url).href,
  },
  { title: "Мои запросы",
    icon: new URL("@/assets/doc 2.svg", import.meta.url).href,
  },
];
</script>

<style scoped>
.sidebar {
  width: 260px;
  background: #ffffff;
  border-right: 1px solid #e0e0e0;
  padding: 20px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 30px;
  color: #6c5ce7;
}

.menu-item {
  width: 100%;
  text-align: left;
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  background: transparent;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
}

.menu-item:hover {
  background: #f0f0ff;
}

.menu-item.active {
  background: #a29bfe;
  color: white;
}

.menu-icon {
  width: 30px;
}
</style>
