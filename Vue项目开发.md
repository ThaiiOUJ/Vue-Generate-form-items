# Vue项目开发 

## 更改 locahost: 8000

1. 找到 `vite.config.js` 文件, 在 `plugins` 后面加入以下代码

   ```bash
     server:{
       port:8000, //这里可以更改为想要的地址比如5173等等
     },
   ```

## Tailwind CSS 配置

1. `tailwindcss.com`前往官网,获取下载命令

2. ```css
   npm install -D tailwindcss
   npx tailwindcss init
   ```

3. 找到`tailwind.config.js`文件修改成以下配置

   ```js
   // tailwind.config.js
   
   /** @type {import('tailwindcss').Config} */
   export default {
     content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
     theme: {
       extend: {
         fontFamily: {
           sans: ["Poppins", "sans-serif"],
         },
         gridTemplateColumns: {
           "70/30": "70% 30%",
         },
       },
     },
     plugins: [],
   };
   ```

4. 找到`assets`文件修改成以下配置

   ```css
   /* main.css */
   
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. `main.js`也改

   ```js
   // main.js
   
   import { createApp } from "vue";
   import App from "./App.vue";
   import "./assets/main.css"; // 引入全局 CSS 文件
   
   const app = createApp(App);
   app.mount("#app");
   ```

## 设置导航栏

1. 最外层容器

   ```css
   <nav class="bg-green-700 border-b border-green-500">
   ```

   - **bg-green-700：深绿色背景。**
   - **border-b-2：底部边框2px。**
   - **border-gray-200：边框颜色为灰色（Shade 200）**

2. 内层容器

   ```css
   <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
   ```

   - `mx-auto`：水平居中
   - `max-w-7xl`：最大宽度设为 7xl（1280px）
   - `px-2`：水平内边距为 0.5rem
   - `sm:px-6`：在小屏幕（`sm`）及以上时，水平内边距增为 1.5rem。
   - `lg:px-8`：在大屏幕（`lg`）及以上时，水平内边距增为 2rem。

3. 布局容器

   ```html
   <div class="flex h-20 items-center justify-between">
   ```

   > `flex`：将元素设为 Flex 容器。
   >
   > `h-20`：高度为 5rem。
   >
   > `items-center`：在垂直方向居中对齐子元素。
   >
   > `justify-between`：左右对齐子元素。

4. 左侧内容容器

   ```html
   <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
   ```

   > `flex`：设为 Flex 容器。
   >
   > `flex-1`：让容器占据剩余空间。
   >
   > `items-center`：垂直居中子元素。
   >
   > `justify-center`：水平居中对齐子元素。
   >
   > `md:items-stretch`：在中等屏幕及以上时，让子元素拉伸高度。

5. logo容器

   ```html
   <a class="flex flex-shrink-0 items-center mr-4" href="index.html">
   ```

   > `flex`：设为 Flex 容器。
   >
   > `flex-shrink-0`：防止在 Flex 布局中缩小。
   >
   > `items-center`：垂直居中。
   >
   > `mr-4`：右边距 1rem

6. 左侧导航栏链接容器

   ```html
   <div class="md:ml-auto">
     <div class="flex space-x-2">
   ```

   > `md:ml-auto`：在中等屏幕及以上时，自动左外边距让其靠右对齐。
   >
   > `flex`：设为 Flex 容器。
   >
   > `space-x-2`：子元素间距为 0.5rem。

### 现在来填充内容

1. `logo`区域

   ```html
   <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
   <span class="hidden md:block text-black text-2xl font-bold ml-2 pointer-events-none select-none">InstaPapers </span>
   ```

   这logo用到的`Tailwind Css`框架有以下:

   - `图片类`

     > `h-10`：将图像高度设置为 `2.5rem`。
     >
     > `w-auto`：设置图像宽度为自动，以保持图像的原始比例。

   - `文本类`

     > `hidden md:block`：在小屏幕上隐藏文本（`hidden`），在中等及以上屏幕上显示（`md:block`）。
     >
     > `text-black`：将文本颜色设置为黑色。
     >
     > `text-2xl`：将文本大小设置为 `2xl`。
     >
     > `font-bold`：设置文本为加粗。
     >
     > `ml-2`：设置左外边距为 `0.5rem`。
     >
     > `pointer-events-none`：禁用鼠标事件，防止点击和鼠标交互。
     >
     > `select-none`：禁用文本选择，防止用户可以选中文本内容。

2. 右边导航栏区域

   ```html
   <a href="index.html" class="relative text-black font-bold rounded-md px-3 py-2 hover:text-black after:absolute after:left-1/2 after:bottom-0 after:h-1 after:w-0 after:bg-gray-400 after:transition-all after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full">首页</a>
   ```

   这右边导航栏区域用到的`Tailwind Css`框架有以下:

   - `超链接整体`

     > `relative`：将链接设置为相对定位，使得 `after` 伪元素可以基于它的位置进行绝对定位。
     >
     > `text-black`：将文本颜色设置为黑色。
     >
     > `font-bold`：设置字体为加粗。
     >
     > `rounded-md`：应用中等的圆角，使按钮或链接看起来更柔和。
     >
     > `px-3`：水平内边距为 `0.75rem`。
     >
     > `py-2`：垂直内边距为 `0.5rem`。
     >
     > `hover:text-black`：当鼠标悬停时，将文本颜色保持为黑色。

   - `伪元素类`:直接理解为滑动样式

     > `after:absolute`：将 `after` 伪元素设为绝对定位，以便能够相对于 `a` 标签的底部准确定位。
     >
     > `after:left-1/2`：初始位置从 `a` 标签的底部中间开始（`left-1/2`），实现居中对齐的效果。
     >
     > `after:bottom-0`：将 `after` 伪元素放置在文本底部。
     >
     > `after:h-1`：设置伪元素的高度为 `0.25rem`，形成一条细线。
     >
     > `after:w-0`：初始宽度设置为 0，因此在非悬停状态下是不可见的。
     >
     > `after:bg-gray-400`：将线条颜色设置为灰色（`gray-400`）。
     >
     > `after:transition-all`：将所有属性添加过渡效果，以便在状态变化时应用动画。
     >
     > `after:duration-300`：设置过渡持续时间为 300 毫秒。
     >
     > `after:ease-in-out`：设置缓动效果，使动画看起来更平滑。
     >
     > `hover:after:left-0`：在鼠标悬停时，将 `after` 元素的左边对齐到链接的左侧。
     >
     > `hover:after:w-full`：在鼠标悬停时，将 `after` 元素的宽度扩展至链接宽度的 100%。

## 主页标题

使用传参来写

```js
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
```

`html`部分

```html
<template>
    <section class="bg-green-700 py-20 mb-4 h-96  flex justify-center items-center">
        <div class="max-w-1xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
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
```

> 
>
> ### **容器样式**
>
> - `max-w-1xl`: 最大宽度限制为 1xl（Tailwind 的宽度标准之一）。
>
> - `mx-auto`: 水平方向的边距自动（居中对齐）。
>
> - `px-4 sm:px-6 lg:px-8`: 设置内边距左右方向分别在小屏幕（`sm`）和大屏幕（`lg`）上的变化。
>
> - `flex flex-col items-center`: 使用 Flexbox 布局，子元素垂直排列，水平居中对齐。
>
> - `bg-green-700`背景为绿色700深度
>
>   `py-20`上下内边距,80px
>
>   `mb-4`底部外边距,16px
>
>   `h-96`容器高度384px
>
>   `flex justify-center items-center`弹性盒子,`justify-center`容器内容水平剧中,`items-center`容器垂直剧中
>
> ### **标题部分**
>
> - `text-center`: 文本水平居中。
> - `text-4xl sm:text-5xl md:text-6xl`: 标题大小依屏幕尺寸递增。
> - `font-extrabold`: 加粗字体。
> - `text-white`: 白色字体。
>
> ------
>
> ### **副标题部分**
>
> - `my-4`: 上下外边距设置为 `4`。
> - `text-xl`: 副标题字体大小为 `xl`。
> - `text-white`: 白色字体

## 底部流程图过程

方法部分

```vue
<script setup>
import logo from '@/assets/img/1.png'; //导入图标

import Boutt from './Boutt.vue'; //导入底部内容框


</script>
```

`html`部分

```html
<template>
    <section class=" border-gray-200 mb-4 h-96  flex justify-center items-center">
        <div class="mb-4  max-w-5xl mini-h-64 flex justify-between items-start space-x-4">
            <Boutt>
                <div class="flex justify-center items-center">
                    <img class="h-20 w-auto" src="@/assets/img/1.png" alt="">
                </div>
                <p class="text-center text-gray-500 font-bold mt-3">模板</p>
                <p class="text-center text-gray-400 font-bold mt-3">选择适合模板</p>
                <h5 class=" text-center text-gray-400 font-bold mt-3">选择模板</h5>
            </Boutt>
            <arrow/>
            <Boutt>
                <div class="flex justify-center items-center">
                    <img class="h-20 w-auto" src="@/assets/img/2.png" alt="">
                </div>
                <h5 class=" text-center text-gray-500 font-bold mt-3">编辑</h5>
                <p class="text-center text-gray-400 font-bold mt-3">需填写内容</p>
                <p class="text-center text-gray-400 font-bold mt-3">支持上传信息</p>
            </Boutt>
            <arrow/>
            <Boutt>
                <div class="flex justify-center items-center">
                    <img class="h-20 w-auto" src="@/assets/img/3.png" alt="">
                </div>
                <h5 class=" text-center text-gray-500 font-bold mt-3">生成</h5>
                <p class="text-center text-gray-400 font-bold mt-3">自动生成文件</p>
                <p class="text-center text-gray-400 font-bold mt-3">预览文件内容</p>
            </Boutt>
            <arrow/> 
            <Boutt>
                <div class="flex justify-center items-center">
                    <img class="h-20 w-auto" src="@/assets/img/4.png" alt="">
                </div>
                <h5 class=" text-center text-gray-500 font-bold mt-3">分享</h5>
                <p class="text-center text-gray-400 font-bold mt-3">生成完可立即下载</p>
                <p class="text-center text-gray-400 font-bold mt-3">分享给他人</p>
            </Boutt>
        </div>
    </section>
</template>
```

> ## 容器部分
>
> - `border-gray-200`:背景颜色
> - `h-96`:高度
> - `flex justify-center items-start space-x-4`:弹性盒子,`justify-between`:容器内容子元素之间均匀分布空白，保持内容的对齐和间隔,`items-center` :容器顶部对齐 `space-x-4`: 子元素之间添加水平间距（`4` 表示 `1rem` 的间距）
> - `mb-4`:底部外边距 `mt-3`头部边距
> - `max-w-5xl`:最大宽度-1024px
> - `mini-h-64`:最小高度
> - `text-center`:文本剧中
> - `font-bold`:字体粗细
>
> ## 箭头部分`<arrow/>`

### 箭头部分

```vue
<script setup>
import arrow from '@/assets/img/arrow.png';
</script>

<template>
    <div class=" w-[61px] h-[15px] pt-10 mx-5" >
        <img :src="arrow" alt="箭头图标">
    </div>
</template>
```

> `w-[61px] h-[15px] pt-10 mx-5`: 定义了这个容器宽度为61px 高度为15px,内边填充为40px
>
> 左右外边填充为20px
>
> 用了动态去绑定箭头这个照片

## 销售合同表格部分

### 表头部分

> 刚开始是用了,组件成品来嵌套,的表格部分,然后发先重复的代码,有很多,![image-20241115202622766](https://gitee.com/ActonT/pic-go_img/raw/master/image-20241115202622766.png)
>
> 起初，我愚蠢地复制了 10 个 `<th></th>` 标签，导致代码重复率非常高，页面代码显得非常冗长。经过一番思考，我发现可以使用 `v-for` 来简化这一过程。于是，我定义了一个 `ProductHeader` 对象，用于存储这 10 个表头信息。
>
> 我将表头信息定义为一个响应式对象 `ProductHeader`，结构如下：
>
> ```js
> codeconst ProductHeader = reactive({
>     Headers1: '序号',
>     Headers2: '产品规格',
>     Headers3: '材质',
>     Headers4: '工艺',
>     Headers5: '模数',
>     Headers6: '数量',
>     Headers7: '单价含税(13%)',
>     Headers8: '金额',
>     Headers9: '交货日期',
>     Headers10: '备注',
> });
> ```
>
> 在 HTML 部分，我使用了 `v-for` 来遍历 `ProductHeader`，并将 `col` 表示为值，`index` 表示索引，这样就可以根据 `index` 来设置 `key`，实现动态生成表头。
>
> ```html
> code<th 
>     scope="col" 
>     v-for="(col, index) in ProductHeader" 
>     :key="index" 
>     class="px-2 py- text-center w-16">
>     {{ col }}
> </th>
> ```
>
> 这样，`v-for` 遍历 `ProductHeader` 对象中的每个值，并生成对应的 `<th>` 标签。通过 `key="index"` 来保持元素的唯一性，使表头更简洁，代码也更清晰。

### 表格内容部分

> 这里还不是很明白,应为这里我发现原理好像跟上面的一样差不多,的想法,但是我写了一遍发现
>
> ![image-20241115213035704](https://gitee.com/ActonT/pic-go_img/raw/master/image-20241115213035704.png)
>
> 变成了这样,还不是我想要的,想要的是这些定义的空数据每个都给对应的表头下
>
> 定义表格内容是这样的
>
> ```js
> const Table_Contents = reactive([
>  {
>      num: '',
>      product: '',
>      Material: '',
>      Technology: '',
>      Modulus: '',
>      quantity: '',
>      unit_price: '',
>      Amount: '',
>      delivery_date: '',
>      Remark: '',
>  }
> ]);
> ```
>
> 为了节省代码,所以需要用到v-for循环
>
> ```html
> <!-- 外层 v-for 遍历每一行数据 -->
> <tr
>     v-for="(row, rowindex) in Table_Contents"
>     :key="rowindex"
>     class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
>     <!-- 内层 v-for 遍历每行对象的每个字段 -->
>     <td
>         v-for="(value, colKey) in row"
>         :key="colKey"
>         class="px-2 py-4 text-center">
>         {{ value }}
>     </td>
> </tr>
> ```
>
> 先遍历每行数据,然后内层对应起来每个对象
>
> ![image-20241115220429724](https://gitee.com/ActonT/pic-go_img/raw/master/image-20241115220429724.png)
>
> 这样就是所需要的每个对象对应每个表头
>
> ## 代码理解
>
> **定义的数据是数组**：
>
> - `Table_Contents` 是一个数组，每个元素代表表格的一行数据。
> - 每行数据是一个对象，其中包含了该行的所有字段及其对应的值。
> - 由于是数组，所以在模板中需要先遍历数组的每个元素。
>
> **外层循环遍历每行数据**：
>
> - 使用 `v-for="(row, rowindex) in Table_Contents"` 遍历 `Table_Contents` 数组。
> - `row` 是当前行的数据对象，`rowindex` 是当前行的索引。
> - 每次循环都会生成一个 `<tr>`，代表表格中的一行。
> - **目的**：创建每一行 `<tr>` 标签，作为每行数据的容器。
>
> **内层循环遍历行中的字段**：
>
> - 在每个 `<tr>` 中，再次使用 `v-for="(value, colKey) in row"` 遍历 `row` 对象的每个字段。
> - `row` 是一个对象，`value` 表示字段的值，`colKey` 表示字段的键（如 `num`、`product` 等）。
> - 这样每个字段会生成一个 `<td>`，代表表格的一个单元格。
> - **目的**：将每行对象中的所有字段作为 `<td>` 单元格添加到 `<tr>` 中。
>
> **总结**：
>
> - **外层循环**：遍历数组中的每个对象，每个对象表示表格的一行，生成 `<tr>` 标签。
> - **内层循环**：遍历对象中的每个字段，每个字段表示表格的一列，生成 `<td>` 标签。
> - `value` 是每个字段的值（即单元格内容），`colKey` 是字段名，用作内层循环的唯一键。

## 内容添加按钮

> 这里是直接把原本定义的内容部分,直接改为放到一个json数据文件里
>
> ```json
> [
>     {
>         "num": "",
>         "product": "",
>         "Material": "",
>         "Technology": "",
>         "Modulus": "",
>         "quantity": "",
>         "unit_price": "",
>         "Amount": "",
>         "delivery_date": "",
>         "Remark": ""
>     }
> ]
> ```
>
> 然后导入`import tableContentsData from '@/tableContents.json';`
>
> 再定义`const Table_Contents = **reactive**(tableContentsData);`
>
> 这样就简洁很多
>
> 添加内容行的话定义一个`addTable_Contents` 然后用箭头函数进行`push`上传到`Table_Contents`里
>
> ```js
> const addTable_Contents = () => {
>     Table_Contents.push({
>         num: '',
>         product: '',
>         Material: '',
>         Technology: '',
>         Modulus: '',
>         quantity: '',
>         unit_price: '',
>         Amount: '',
>         delivery_date: '',
>         Remark: ''
>     });
> };
> ```
>
> 表单这里绑定一个`<form @submit.prevent="addTable_Contents">`点击事件,在底部添加一个按钮,该按钮绑定了`submit`



---

## 重新写销售合同表格

```html
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
```

> 表格的行不用v-for了,因为我调不出来,太麻烦了,

## json - server

```js
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
```

> 添加了上面的功能
