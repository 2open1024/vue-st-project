<script setup>
const props = defineProps(["item"]);
</script>

<template>
  <li
    :style="{ lineHeight: '50px' }"
    class="relative w-full cursor-pointer text-base pl-5 hover:bg-#3b4248 hover:text-red-500"
  >
    <span>{{ props.item }}</span>
    <div
      class="absolute top-0.5 right-3 text-black text-sm"
      :style="{ lineHeight: '50px' }"
    >
      <el-icon>
        <CaretRight />
      </el-icon>
    </div>
  </li>
</template>
