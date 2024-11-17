<!-- 销售合同界面 -->
<!-- 销售合同界面 -->
<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'; // 导入 useRoute 和 useRouter
import axios from 'axios';

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const state = reactive({
    // 订单信息
    OrderNumber: '',           // 订单编号
    SigningDate: '',           // 签订日期
    // 公司信息
    company: {
        CompanyName: '',         // 单位名称
        LegalRepresentative: '', // 法定代表人
        Address: '',             // 地址
        Telephone: '',           // 电话
        Bank: '',                // 开户行
        Account: ''              // 账号
    },
    // 需方公司信息
    company2: {
        CompanyName2: '',         // 单位名称
        LegalRepresentative2: '', // 法定代表人
        Address2: '',             // 地址
        Telephone2: '',           // 电话
        Bank2: '',                // 开户行
        Account2: ''              // 账号
    },
    // 表格内容
    Table_Contents: []
});

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

// 删除行
const deleteRow = () => {
    if (state.Table_Contents.length > 0) {
        state.Table_Contents.splice(state.Table_Contents.length - 1, 1);
    } else {
        alert('没有多余的数据可以删除');
    }
};

// 获取挂载数据
onMounted(async () => {
    if (id) {
        // 如果存在 id，则获取数据
        try {
            const response = await axios.get(`http://localhost:3000/SalesContractInterfaces/${id}`);
            const data = response.data;

            // 将数据赋值到 state 中对应的属性
            state.OrderNumber = data.OrderNumber;
            state.SigningDate = data.SigningDate;
            state.company = data.company;
            state.company2 = data.company2;
            state.Table_Contents = data.Table_Contents;
        } catch (error) {
            console.error('Error fetching SalesContractInterface', error);
        }
    }
});

// 提交表格数据
const handleSubmit = async () => {
    try {
        // 深拷贝并移除 id 字段，同时为每项分配序号 num
        const tableContentsCopy = JSON.parse(JSON.stringify(state.Table_Contents));
        tableContentsCopy.forEach((item, index) => {
            delete item.id;
            item.num = (index + 1).toString();
        });

        const dataToSubmit = {
            OrderNumber: state.OrderNumber,
            SigningDate: state.SigningDate,
            company: state.company,
            company2: state.company2,
            Table_Contents: tableContentsCopy
        };

        let response;
        if (id) {
            // 更新数据（PUT 请求）
            response = await axios.put(`http://localhost:3000/SalesContractInterfaces/${id}`, dataToSubmit);
            alert('更新成功');
        } else {
            // 创建新数据（POST 请求）
            response = await axios.post('http://localhost:3000/SalesContractInterfaces', dataToSubmit);
            alert('提交成功');
            // 获取新创建的资源ID（数字类型）
            const newId = response.data.id;
            // 跳转到新页面
            router.push(`/addsale/${newId}`);
        }
    } catch (error) {
        console.error('提交错误', error);
        alert('提交失败');
    }
};

</script>



<template>
    <section class="bg-green-100">
        <div class="container m-auto max-w-10xl py-24">
            <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                <h2 class="text-2xl text-center font-semibold mb-6">销售合同</h2>

                <!-- 将整个内容包含在表单内 -->
                <form @submit.prevent="handleSubmit">
                    <!-- 头部信息 -->
                    <div class="bg-gray-50 rounded-lg shadow-sm p-6 mb-6">
                        <!-- 公司名称 -->
                        <div class="flex justify-center mb-4">
                            <h1 class="text-xl font-bold text-gray-700 tracking-wider">
                                <input v-model="state.company.CompanyName" type="text"
                                    class="border border-gray-300 rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center w-[20ch]"
                                    placeholder="请输入公司名称">
                            </h1>
                        </div>

                        <!-- 单号和日期 -->
                        <div class="flex justify-between items-center px-4">
                            <div class="flex items-center space-x-2">
                                <span class="text-gray-600">订单编号：</span>
                                <input v-model="state.OrderNumber"
                                    class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    type="text" placeholder="请输入订单编号">
                            </div>
                            <div class="flex items-center space-x-2">
                                <span class="text-gray-600">签订日期：</span>
                                <input v-model="state.SigningDate" type="date"
                                    class="text-gray-800 font-medium bg-white px-3 py-1 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none w-36">
                            </div>
                        </div>
                    </div>

                    <!-- 表格部分 -->
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
                                <tr v-for="(row, rowIndex) in state.Table_Contents" :key="rowIndex">
                                    <!-- 序号 -->
                                    <td class="px-4 py-2">{{ rowIndex + 1 }}</td>

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
                                            placeholder="金额" />
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
                        <!-- 按钮区域 -->
                        <div class="flex justify-end mt-4 space-x-4">
                            <button @click="addTable_Contents" type="button"
                                class="bg-blue-400 text-white px-4 py-2 rounded">
                                添加新行
                            </button>

                            <button @click="deleteRow" type="button" class="bg-red-400 text-white px-4 py-2 rounded">
                                删除
                            </button>
                        </div>
                    </div>

                    <!-- 供需方信息 -->
                    <div class="grid grid-cols-2 gap-8 mt-8">
                        <!-- 供方信息 -->
                        <div class="border p-4 rounded-lg">
                            <h3 class="font-bold mb-4">供方（签章）：</h3>
                            <div class="space-y-2">
                                <p>单位名称：
                                    <input v-model="state.company.CompanyName" type="text"
                                        class="border px-2 py-1 w-full" placeholder="单位名称">
                                </p>
                                <p>法定代表人：
                                    <input v-model="state.company.LegalRepresentative" type="text"
                                        class="border px-2 py-1 w-full" placeholder="法定代表人">
                                </p>
                                <p>地址：
                                    <input v-model="state.company.Address" type="text" class="border px-2 py-1 w-full"
                                        placeholder="地址">
                                </p>
                                <p>电话：
                                    <input v-model="state.company.Telephone" type="text" class="border px-2 py-1 w-full"
                                        placeholder="电话">
                                </p>
                                <p>开户行：
                                    <input v-model="state.company.Bank" type="text" class="border px-2 py-1 w-full"
                                        placeholder="开户行">
                                </p>
                                <p>账号：
                                    <input v-model="state.company.Account" type="text" class="border px-2 py-1 w-full"
                                        placeholder="账号">
                                </p>
                            </div>
                        </div>

                        <!-- 需方信息 -->
                        <div class="border p-4 rounded-lg">
                            <h3 class="font-bold mb-4">需方（签章）：</h3>
                            <div class="space-y-2">
                                <p>单位名称：
                                    <input v-model="state.company2.CompanyName2" type="text"
                                        class="border px-2 py-1 w-full" placeholder="单位名称">
                                </p>
                                <p>法定代表人：
                                    <input v-model="state.company2.LegalRepresentative2" type="text"
                                        class="border px-2 py-1 w-full" placeholder="法定代表人">
                                </p>
                                <p>地址：
                                    <input v-model="state.company2.Address2" type="text" class="border px-2 py-1 w-full"
                                        placeholder="地址">
                                </p>
                                <p>电话：
                                    <input v-model="state.company2.Telephone2" type="text"
                                        class="border px-2 py-1 w-full" placeholder="电话">
                                </p>
                                <p>开户行：
                                    <input v-model="state.company2.Bank2" type="text" class="border px-2 py-1 w-full"
                                        placeholder="开户行">
                                </p>
                                <p>账号：
                                    <input v-model="state.company2.Account2" type="text" class="border px-2 py-1 w-full"
                                        placeholder="账号">
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- 提交按钮 -->
                    <div class="flex justify-end mt-4">
                        <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded">
                            提交
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
