<script setup>
import ClassifyItem from "./ClassifyItem.vue";

const list = [
  "后端 | 架构",
  "前端 | 全栈",
  "前端 | 全栈",
  "前端 | 全栈",
  "前端 | 全栈",
  "前端 | 全栈",
  "前端 | 全栈",
];
</script>
<template>
  <div
    class="rounded shadow-[0_0_10px_0_#d7d7d7]"
    :style="{ height: '380px', width: '160px' }"
  >
    <ul class="py-5">
      <ClassifyItem v-for="(item, index) in list" :key="index" :item="item" />
    </ul>
  </div>
</template>
