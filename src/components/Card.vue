<script setup>
const props = defineProps(["card"]);

const convertLevel = (level) => {
  switch (level) {
    case "JUNIOR":
      return "初级";
    case "MIDDLE":
      return "中级";
    case "SENIOR":
      return "高级";
    default:
      return "未知";
  }
};
</script>

<template>
  <div class="cursor-pointer w-70 rounded-xl shadow-[5px_5px_10px_0_#d5d5d5]">
    <img class="rounded-t-lg" :src="card.coverImg" />

    <div class="p-2">
      <div class="h-10">
        <span
          class="text-sm w-60 text-ellipsis of-hidden break-all line-clamp-2"
        >
          {{ props.card.title }}
        </span>
      </div>

      <div class="flex items-center my-2 text-xs">
        <span class="text-red-500">
          级别：{{ convertLevel(props.card.courseLevel) }}
        </span>
        <span class="flex items-center">
          <img
            class="mr-1 w-3 h-3"
            src="https://front.cdn.xdclass.net/images/fire.webp"
          />
          <img
            class="mr-1 w-3 h-3"
            src="https://front.cdn.xdclass.net/images/fire.webp"
          />
          <img
            class="mr-1 w-3 h-3"
            src="https://front.cdn.xdclass.net/images/fire.webp"
          />
          <img
            class="mr-1 w-3 h-3"
            src="https://front.cdn.xdclass.net/images/fire.webp"
          />
          <img
            class="mr-1 w-3 h-3"
            src="https://front.cdn.xdclass.net/images/fire.webp"
          />
        </span>
      </div>

      <div class="flex items-center justify-between mt-5px">
        <span class="peoples text-2 c-#7f7f7f">
          <el-icon><User /></el-icon>
          {{ card.uv }}
        </span>
        <div class="flex items-center justify-center">
          <div class="c-#aaa">
            ¥<span class="mr-1 line-through">{{ card.oldAmount }}</span>
          </div>
          <div class="c-#e51b11">
            ¥<span class="mt-1 text-16px text-red-500">{{ card.amount }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
