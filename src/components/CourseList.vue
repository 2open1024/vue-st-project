<script setup>
import CardContainer from "./CardContainer.vue";
import axios from "axios";
import { ref, onMounted } from "vue";
const data = ref("");

onMounted(async () => {
  try {
    const response = await axios.get(
      "https://api-v2.xdclass.net/api/card/v1/list"
    );
    data.value = response.data.data; // 将请求到的数据赋值给cards
  } catch (err) {
    console.error(err); // 打印错误信息到控制台
  }
});
</script>

<template>
  <div class="flex flex-col gap-8 mt-10">
    <CardContainer
      v-for="item in data"
      key="{index}"
      :title="item.name"
      :summay="item.summay"
      :productList="item.productList.slice(0, 4)"
    />
  </div>
</template>
