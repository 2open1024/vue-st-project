<script setup>
import { useUserStore } from "@/store/user.js";
import { useModalStore } from "@/store/modal.js";

const user = useUserStore();
const modal = useModalStore();
</script>

<template>
  <div
    class="rounded shadow-[0_0_10px_0_#d7d7d7] flex items-center"
    :style="{ height: '380px', width: '160px' }"
  >
    <div class="w-40 h-60">
      <div
        v-if="user.isLogin"
        class="flex flex-col items-center justify-center h-full"
      >
        欢迎你:
        <span class="text-orange font-bold">{{ user.users.account }}</span>
        <el-button
          class="text-center bg-#ff602a cursor-pointer rounded leading-2"
          @click="user.logout"
        >
          退出登录
        </el-button>
      </div>

      <div v-else class="flex flex-col items-center justify-center h-full">
        <img
          class="cursor-pointer mb-1 mt-10 w-50 h-50"
          src="https://front.cdn.xdclass.net/images/new.webp"
        />
        <el-button
          @click="modal.switchLoginVisible()"
          class="text-center bg-#ff602a cursor-pointer rounded-71px w-130px h-24px text-12px p2 leading-10px"
        >
          登录 / 注册
        </el-button>
      </div>
    </div>
  </div>
</template>
