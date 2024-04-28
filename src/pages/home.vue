<script setup>
import Header from "@/components/Header.vue";
import Classify from "../components/Classify.vue";
import Swiper from "../components/Swiper.vue";
import UserOrUnlogin from "../components/UserOrUnlogin.vue";
import CourseList from "../components/CourseList.vue";
</script>

<template>
  <div class="w-full">
    <!-- {/* 海报图 */} -->
    <img
      src="https://file.xdclass.net/video/2023/banner/618/QD.gif"
      class="w-[100%] h-full"
    />
    <!-- {/* 头部导航 */} -->
    <div class="shadow mb-[10px]">
      <div class="w-[1200px] mx-auto">
        <Header />
      </div>
    </div>
    <!-- {/* 主要内容部分 */} -->
    <div class="w-[1200px] mx-auto mt-4 mb-4">
      <div class="flex items-center justify-between">
        <!-- {/* 分类导航 */} -->
        <Classify/>
        <!-- {/* 轮播图 */} -->
        <Swiper/>
        <!-- {/* 新人福利 */} -->
        <UserOrUnlogin/>
      </div>
      <!-- {/* 高单价导航 */} -->
      <!-- {/* 课程分类列表 */} -->
      <CourseList/>
    </div>
    <!-- {/* 底部的内容导航 */} -->
  </div>
  <!-- {/* 提醒登录浮层组件 */} -->
</template>
