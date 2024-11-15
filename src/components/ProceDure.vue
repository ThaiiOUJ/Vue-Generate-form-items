<!-- 底部过程模块 -->

<script setup>
import Boutt from '@/components/Boutt.vue'; //导入底部内容框
import Arrow from '@/components/Arrow.vue'; //箭头


</script>

<template>
    <section class=" border-gray-200 mb-4 h-96  flex justify-center items-center">
        <div class="mb-4  max-w-5xl mini-h-64 flex justify-between items-start space-x-4">
            <Boutt>
                <div class="flex justify-center items-center">
                    <img class="h-20 w-auto" src="@/assets/img/1.png" alt="">
                </div>
                <p class="text-center text-gray-700 font-bold mt-3">模板</p>
                <p class="text-center text-gray-400 font-bold mt-3">选择适合模板</p>
                <h5 class=" text-center text-gray-400 font-bold mt-3">选择模板</h5>
            </Boutt>
            <arrow/>
            <Boutt>
                <div class="flex justify-center items-center">
                    <img class="h-20 w-auto" src="@/assets/img/2.png" alt="">
                </div>
                <h5 class=" text-center text-gray-700 font-bold mt-3">编辑</h5>
                <p class="text-center text-gray-400 font-bold mt-3">需填写内容</p>
                <p class="text-center text-gray-400 font-bold mt-3">支持上传信息</p>
            </Boutt>
            <arrow/>
            <Boutt>
                <div class="flex justify-center items-center">
                    <img class="h-20 w-auto" src="@/assets/img/3.png" alt="">
                </div>
                <h5 class=" text-center text-gray-700 font-bold mt-3">生成</h5>
                <p class="text-center text-gray-400 font-bold mt-3">自动生成文件</p>
                <p class="text-center text-gray-400 font-bold mt-3">预览文件内容</p>
            </Boutt>
            <arrow/>
            <Boutt>
                <div class="flex justify-center items-center">
                    <img class="h-20 w-auto" src="@/assets/img/4.png" alt="">
                </div>
                <h5 class=" text-center text-gray-700 font-bold mt-3">分享</h5>
                <p class="text-center text-gray-400 font-bold mt-3">生成完可立即下载</p>
                <p class="text-center text-gray-400 font-bold mt-3">分享给他人</p>
            </Boutt>
        </div>
    </section>
</template>