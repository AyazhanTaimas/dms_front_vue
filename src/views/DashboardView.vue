<template>
  <MainLayout>
    <div>
      <h1>Новости</h1>

      <div v-for="item in news" :key="item.id">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "../api/axios";
import MainLayout from "@/layout/MainLayout.vue";

const news = ref([]);

onMounted(async () => {
  try {
    const res = await api.get("/news");
    news.value = res.data;
  } catch (e) {
    console.error("401 или ошибка загрузки", e);
  }
});
</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 32px;
}

/* CARD */
.news-card {
  background: white;
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

/* TITLE */
.news-title {
  margin: 0 0 12px;
  font-size: 18px;
  font-weight: 600;
}

/* TEXT */
.news-text {
  margin: 0 0 12px;
  color: #555;
  line-height: 1.5;
}

/* DATE */
.news-date {
  font-size: 13px;
  color: #999;
}
</style>
