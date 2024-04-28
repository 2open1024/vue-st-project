<script setup>
import { ref } from "vue";
import { useUserStore } from "@/store/user.js";
import { useModalStore } from "@/store/modal.js";

// 账号
const account = ref("");
const password = ref("");

const user = useUserStore();
const modal = useModalStore();
</script>
<template>
  <el-dialog width="400px" v-model="modal.loginVisible" class="relative">
    <h1 class="text-center c-#404040 text-22px font-normal mb-1.5">账号登录</h1>
    <div class="pb-44px flex items-center justify-center w-full">
      <el-form name="register">
        <!-- 账号 -->
        <el-form-item name="account">
          <el-input placeholder="请输入账号" v-model="account" />
        </el-form-item>
        <!-- 密码 -->
        <el-form-item name="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="password"
          />
        </el-form-item>
        <!-- 登录 -->
        <el-form-item>
          <el-button
            type="primary"
            @click="user.login(account, password)"
            class="flex w-full items-center justify-center bg-#444b52 text-white rounded-full"
          >
            <span>立即登录</span>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 跳转注册 -->
    <div
      class="absolute w-full h-44px bottom-0 left-0 bg-[rgba(77,85,93,0.1)] flex items-center justify-center"
    >
      <span>没有账号?</span>
      <span
        class="text-blue-400 cursor-pointer"
        @click="
          () => {
            modal.switchRegVisible();
            modal.switchLoginVisible();
          }
        "
      >
        立即注册
      </span>
    </div>
  </el-dialog>
</template>
