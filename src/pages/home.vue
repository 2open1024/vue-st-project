
<script setup>
    import useUserStore from "../store/user.js";
    
    const user = useUserStore();
</script>

<template>
    <div>open1024</div>
    <div>{{ user.token }}</div>
</template>