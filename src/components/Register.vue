<script setup>
import { ref } from "vue";
import { useUserStore } from "@/store/user.js";
import { useModalStore } from "@/store/modal.js";
import { ElMessage } from "element-plus";

// 账号
const account = ref("");
const password = ref("");
const rePassword = ref("");

const user = useUserStore();
const modal = useModalStore();

// 注册提交按钮
function handleFinish() {
  // 密码验证;
  if (password.value !== rePassword.value) {
    ElMessage({
      message: "两次密码不一致!",
      type: "warning",
    });
    return;
  } else {
    // 账号验证
    if (user.users.account === account.value) {
      ElMessage({
        message: "该账号已存在!",
        type: "warning",
      });
    } else {
      // 注册
      user.register(account.value, password.value);
      // 关闭注册弹窗
      modal.switchRegVisible();
      ElMessage({
        message: "注册成功!",
        type: "success",
      });
    }
  }
}
</script>
<template>
  <el-dialog width="400px" v-model="modal.regVisible" class="relative">
    <h1 class="text-center c-#404040 text-22px font-normal mb-1.5">账号注册</h1>
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
        <!-- 确认密码 -->
        <el-form-item name="re-password">
          <el-input
            type="password"
            placeholder="请再次输入密码"
            v-model="rePassword"
          />
        </el-form-item>
        <!-- 注册 -->
        <el-form-item>
          <el-button
            type="primary"
            @click="handleFinish"
            class="flex w-full items-center justify-center bg-#444b52 text-white rounded-full"
          >
            <span>立即注册</span>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 跳转登录 -->
    <div
      class="absolute w-full h-44px bottom-0 left-0 bg-[rgba(77,85,93,0.1)] flex items-center justify-center"
    >
      <span>已有账号?</span>
      <span
        class="text-blue-400 cursor-pointer"
        @click="
          () => {
            modal.switchRegVisible();
            modal.switchLoginVisible();
          }
        "
      >
        立即登录
      </span>
    </div>
  </el-dialog>
</template>
