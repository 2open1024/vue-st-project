<script setup>
import Card from "./Card.vue";
const props = defineProps(["title", "summay", "productList"]);
</script>

<template>
  <div>
    <!-- 标题+描述 -->
    <div class="flex items-center">
      <img
        class="w-5 h-5"
        src="https://front.cdn.xdclass.net/images/icon_hot.webp"
      />
      <span class="text-3 ml-1">{{ props.title }}</span>

      <div class="ml-10 flex items-center justify-center text-3 mr-9 pt-1">
        {{ props.summay }}
      </div>
    </div>

    <!-- 课程产品列表 -->
    <div class="flex items-center">
      <div class="mt-3 flex gap-5">
        <Card v-for="item in props.productList" :key="index" :card="item" />
      </div>
    </div>
  </div>
</template>
