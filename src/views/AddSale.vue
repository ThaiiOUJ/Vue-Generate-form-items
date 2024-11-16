<!-- 销售合同界面 -->
<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';



// const Table_Contents = reactive([]);
const state = reactive({
    Table_Contents: []
})

// 表头
const ProductHeader = ref([
    '序号',
    '产品规格',
    '材质',
    '工艺',
    '模数',
    '数量',
    '单价含税(13%)',
    '金额',
    '交货日期',
    '备注'
]);

// 添加新行
const addTable_Contents = () => {
    state.Table_Contents.push({
        num: (state.Table_Contents.length + 1).toString(),
        product: '',
        Material: '',
        Technology: '',
        Modulus: '',
        quantity: '',
        unit_price: '',
        Amount: '',
        delivery_date: '',
        Remark: '',
        id: Date.now().toString()
    });
};

// 删除行
const deleteRow = () => {
    if (state.Table_Contents.length > 0) {
        state.Table_Contents.splice(state.Table_Contents.length - 1, 1);
    } else {
        alert('没有多余的数据可以删除')
    }
};

//获取挂载数据
onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:3000/Table_Contents')
        state.Table_Contents = response.data;
    } catch (error) {
        console.error('Error fetching Table_Contents', error);

    }
})

// // 提交数据
// const handleSubmi = async () => {
//     const newTable_Contents = {
//         num: row.num,
//         product: row.product,
//         Material: row.Material,
//         Technology: row.Technology,
//         Modulus: row.Modulus,
//         quantity: row.quantity,
//         unit_price: row.unit_price,
//         Amount: row.Amount,
//         delivery_date: row.delivery_date,
//         Remark: row.Remark
//     };
//     try {
//         const response = await axios.post('http://localhost:3000/Table_Contents', newTable_Contents)
//         alert('成功')
//         router.push(`/addsale/${response.data.id}`)
//     } catch (error) {
//         console.error('Error addsale', error);
//         alert('没成功')
//     }
// }
</script>


<template>
    <section class="bg-green-100">
        <div class="container m-auto max-w-10xl py-24">
            <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                <h2 class="text-2xl text-center font-semibold mb-6">销售合同</h2>
                <!-- 头部信息 -->
                <div class="bg-gray-50 rounded-lg shadow-sm p-6 mb-6">
                    <!-- 公司名称 -->
                    <div class="flex justify-center mb-4">
                        <h1 class="text-xl font-bold text-gray-700 tracking-wider">
                            深圳 xxxxxxxxxx 制品有限公司
                        </h1>
                    </div>

                    <!-- 单号和日期 -->
                    <div class="flex justify-between items-center px-4">
                        <div class="flex items-center space-x-2">
                            <span class="text-gray-600">订单编号：</span>
                            <span class="text-gray-800 font-medium bg-white px-3 py-1 rounded border">
                                LH2024010290001
                            </span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <span class="text-gray-600">签订日期：</span>
                            <span class="text-gray-800 font-medium bg-white px-3 py-1 rounded border">
                                2024.10.29
                            </span>
                        </div>
                    </div>
                </div>


                <!-- 表格部分 -->
                <form @submit.prevent="handleSubmi">
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead class="text-1xl text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" v-for="(col, index) in ProductHeader" :key="index"
                                        class="px-2 py-2 text-center w-30">
                                        {{ col }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, rowIndex) in state.Table_Contents" :key="row.id">
                                    <!-- 序号 -->
                                    <td class="px-4 py-2">{{ row.num }}</td>

                                    <!-- 产品规格 -->
                                    <td>
                                        <input v-model="row.product" class="border px-2 py-1 w-full"
                                            placeholder="产品规格" />
                                    </td>

                                    <!-- 材质 -->
                                    <td>
                                        <input v-model="row.Material" class="border px-2 py-1 w-full"
                                            placeholder="材质" />
                                    </td>

                                    <!-- 工艺 -->
                                    <td>
                                        <input v-model="row.Technology" class="border px-2 py-1 w-full"
                                            placeholder="工艺" />
                                    </td>

                                    <!-- 模数 -->
                                    <td>
                                        <input v-model="row.Modulus" class="border px-2 py-1 w-full" placeholder="模数" />
                                    </td>

                                    <!-- 数量 -->
                                    <td>
                                        <input v-model="row.quantity" type="number" class="border px-2 py-1 w-full"
                                            placeholder="数量" />
                                    </td>

                                    <!-- 单价含税 -->
                                    <td>
                                        <input v-model="row.unit_price" type="number" class="border px-2 py-1 w-full"
                                            placeholder="单价" />
                                    </td>

                                    <!-- 金额 -->
                                    <td class="px-4 py-2 text-center">
                                        <input v-model="row.Amount" type="number" class="border px-2 py-1 w-full"
                                            placeholder="单价" />
                                    </td>

                                    <!-- 交货日期 -->
                                    <td>
                                        <input v-model="row.delivery_date" type="date"
                                            class="border px-2 py-1 w-full" />
                                    </td>

                                    <!-- 备注 -->
                                    <td>
                                        <input v-model="row.Remark" class="border px-2 py-1 w-full" placeholder="备注" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <button @click="addTable_Contents" class="mt-4 bg-blue-400 text-white px-4 py-2 rounded">
                            添加新行
                        </button>

                        <button @click="deleteRow()" class="mt-4 bg-red-400 text-white px-4 py-2 rounded">
                            删除
                        </button>
                        <!-- <button @click="handleSubmi(row)" class="bg-green-500 text-white px-4 py-2 rounded">提交</button> -->
                    </div>
                </form>

                <!-- 供需方信息 -->
                <div class="grid grid-cols-2 gap-8 mt-8">
                    <!-- 供方信息 -->
                    <div class="border p-4 rounded-lg">
                        <h3 class="font-bold mb-4">供方（签章）：</h3>
                        <div class="space-y-2">
                            <p>单位名称：深圳xxxxxxx制品有限公司</p>
                            <p>法定代表人：xxxx</p>
                            <p>地址：深圳市坪地街道六联社区六联一路一号</p>
                            <p>电话：15xxxxxx114</p>
                            <p>开户行：xxx,dsa,dsad,das</p>
                            <p>账号：5231001001301</p>
                        </div>
                    </div>

                    <!-- 需方信息 -->
                    <div class="border p-4 rounded-lg">
                        <h3 class="font-bold mb-4">需方（签章）：</h3>
                        <div class="space-y-2">
                            <p>单位名称：深xxxxx科技有限公司</p>
                            <p>法定代表人：</p>
                            <p>地址：深圳市宝安区xx路xx号xx工业园402</p>
                            <p>电话：13722222222245</p>
                            <p>开户行：</p>
                            <p>账号：</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>