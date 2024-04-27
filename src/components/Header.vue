<script setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";

const input = ref("");

const login = () => {};

const register = () => {};
</script>

<template>
  <div class="flex items-center gap-2">
    <img
      class="h-16 w-36"
      src="https://img.open1024.top/lionblog/mfile/open1024icon2.png"
    />
    <div class="flex items-center justify-between flex-[1]">
      <a href="#">首页</a>
      <a href="#">课程中心</a>
      <a href="#" class="flex items-center justify-center">
        <img
          src="https://front.cdn.xdclass.net/images/vip_icon.webp"
          class="w-5 h-5"
        />
        <span>超级会员</span>
      </a>
      <a href="#">工具</a>
      <a href="#">
        <span>自学路线</span>
        <el-icon>
          <ArrowDownBold />
        </el-icon>
      </a>
      <a href="#">
        <span>一对一辅导</span>
        <el-icon>
          <ArrowDownBold />
        </el-icon>
      </a>
      <a href="#">
        <el-input v-model="input" class="w-60" placeholder="请输入搜索内容">
          <template #append>
            <!-- <el-button :icon="Search" /> -->
            <el-icon>
              <Search />
            </el-icon>
          </template>
        </el-input>
      </a>
      <a href="#">兑换码</a>
      <a href="#">云服务器</a>
    </div>
    <div>
      <el-button link size="large" @click="login">登录</el-button>
      <el-button link size="large" @click="register">注册</el-button>
    </div>
  </div>
</template>
