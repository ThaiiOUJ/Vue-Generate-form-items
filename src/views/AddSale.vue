<!-- 销售合同界面 -->
<script setup>
import { reactive } from 'vue';
import tableContentsData from '@/tableContents.json';
// 定义表头
const ProductHeader =reactive({
    Headers1:'序号',
    Headers2:'产品规格',
    Headers3:'材质',
    Headers4:'工艺',
    Headers5:'模数',
    Headers6:'数量',
    Headers7:'单价含税(13%)',
    Headers8:'金额',
    Headers9:'交货日期',
    Headers10:'备注',
});

// 定义进tableContents.json里
const Table_Contents = reactive(tableContentsData);
/**
 * 序号
 * 产品规格
 * 材质
 * 工艺
 * 模数
 * 数量
 * 单价
 * 金额
 * 交货日期
 * 备注
 * **/
// 添加内容,添加到json数据里
const addTable_Contents = () => {
    Table_Contents.push({
        num: '',
        product: '',
        Material: '',
        Technology: '',
        Modulus: '',
        quantity: '',
        unit_price: '',
        Amount: '',
        delivery_date: '',
        Remark: ''
    });
};

</script>

<template>
    <section class=" bg-green-100">
        <!--max-w-10xl用来修改页面的宽度  -->
        <div class="container m-auto max-w-10xl py-24">
            <div class=" bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                <form @submit.prevent="addTable_Contents">
                    <h2 class="text-2xl text-center font-semibold mb-6"> 销售合同</h2>
                    <p class=" text-black font-bold">表格部分</p>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-1xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <!-- 表格表头 -->
                                <tr>
                                    <th 
                                    scope="col" 
                                    v-for="(col,index) in ProductHeader" :key="index" 
                                    class="px-2 py- text-center w-30">
                                        {{ col }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <!-- 外层 v-for 遍历每一行数据 -->
                                <tr
                                    v-for="(row, rowindex) in Table_Contents"
                                    :key="rowindex"
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <!-- 内层 v-for 遍历每行对象的每个字段 -->
                                    <td
                                        v-for="(value, colKey) in row"
                                        :key="colKey"
                                        class="px-2 py-4 text-center">
                                        {{ value }}

                                        <input type="text" class="w-16">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button type="submit" 
                        class="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-2 px-4 rounded transition transform duration-200 active:scale-95">
                        添加行
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>