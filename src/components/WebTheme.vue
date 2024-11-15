<script setup>
// 标题传参props
import { defineProps } from 'vue';
defineProps({
    title:{
        type:String,
        default:"InstaPapers - 智能文档管理",
    },
    subtitle:{
        type:String,
        default:'帮助您轻松管理文档，快速生成报价单、销售合同等内容'
    }
})

</script>

<template>
    <section class="bg-green-700 py-20 mb-14 h-96  flex justify-center items-center">
        <div class="max-w-1xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center ">
            <div class="text-center">
                <h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                    {{ title }}  <!-- 主标题 -->
                </h1>
                <p  class="my-4 text-xl text-white">
                    {{ subtitle }} <!-- 副标题 -->
                </p>
            </div>
        </div>
    </section>
</template>