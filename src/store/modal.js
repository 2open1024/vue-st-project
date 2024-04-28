import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modal", () => {
  // 注册弹窗状态
  const regVisible = ref(false);
  // 登录弹窗状态
  const loginVisible = ref(false);

  // 修改注册弹窗状态
  const switchRegVisible = () => {
    regVisible.value = !regVisible.value;
  };
  // 修改登录弹窗状态
  const switchLoginVisible = () => {
    loginVisible.value = !loginVisible.value
  };
    
  return {
    regVisible,
    loginVisible,
    switchRegVisible,
    switchLoginVisible,
  };
});
