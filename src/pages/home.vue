
<script setup>
    import useUserStore from "../store/user.js";
    
    const user = useUserStore();
</script>

<template>
    <div class="text-xs text-red-500">open1024</div>
    <div>{{ user.token }}</div>
    <el-button type="primary">按钮</el-button>
    <el-icon><Search/></el-icon>
</template>