<!-- 导航栏配置 -->
<script setup>
//   导入logo
import logo from '@/assets/img/logo.png';
</script>

<template>
  <nav class="bg-white-700 border-b-2 border-gray-200  shadow-md" > <!--最外容器-->
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">  <!--内层容器-->
      <div class="flex h-20 items-center justify-between"> <!--布局容器-->
        <!-- 左侧 Logo 和导航链接 -->
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"> 
          <!-- Logo 区域 -->
        <div class="flex flex-shrink-0 items-center mr-4">
            <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
            <span class="hidden md:block text-black text-2xl font-bold ml-2 pointer-events-none select-none">InstaPapers </span>
        </div>

          <!-- 导航链接区域 -->
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink to="/" class="relative text-black font-bold rounded-md px-3 py-2 hover:text-black after:absolute after:left-1/2 after:bottom-0 after:h-1 after:w-0 after:bg-gray-400 after:transition-all after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full">首页</RouterLink>
              <RouterLink to="/addsale" class="relative text-black font-bold px-3 py-2 hover:text-black after:absolute after:left-1/2 after:bottom-0 after:h-1 after:w-0 after:bg-gray-400 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full">销售合同</RouterLink>
              <RouterLink to="index.html" class="relative text-black font-bold rounded-md px-3 py-2 hover:text-black after:absolute after:left-1/2 after:bottom-0 after:h-1 after:w-0 after:bg-gray-400 after:transition-all after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full">报价单</RouterLink>
              <RouterLink to="index.html" class="relative text-black font-bold rounded-md px-3 py-2 hover:text-black after:absolute after:left-1/2 after:bottom-0 after:h-1 after:w-0 after:bg-gray-400 after:transition-all after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full">金额转换</RouterLink>
              <RouterLink to="index.html" class="relative text-black font-bold rounded-md px-3 py-2 hover:text-black after:absolute after:left-1/2 after:bottom-0 after:h-1 after:w-0 after:bg-gray-400 after:transition-all after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full">添加新功能</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
