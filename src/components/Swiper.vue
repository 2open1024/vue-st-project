<template>
  <el-carousel
    :interval="5000"
    arrow="always"
    :style="{ height: '380px', width: '800px' }"
    indicator-position="none"
  >
    <el-carousel-item>
      <img
        class="rounded"
        src="https://file.xdclass.net/video/2023/banner/618/HD.png"
      />
    </el-carousel-item>
    <el-carousel-item>
      <img
        class="rounded"
        src="https://file.xdclass.net/video/2023/banner/618/JD.png"
      />
    </el-carousel-item>
    <el-carousel-item>
      <img
        class="rounded"
        src="https://file.xdclass.net/video/2022/22-11.11/aly.jpeg"
      />
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel__item h3 {
  opacity: 0.75;
  line-height: 380px;
  margin: 0;
  text-align: center;
}

::v-deep .el-carousel__container {
  height: 380px !important;
}
::v-deep .el-carousel__item {
  background-color: white !important;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
