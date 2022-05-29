

# JavaScript的BOM和DOM操作

#### api和web api的总结

![image-20220522152624595](https://img.usj.cc/i/2022/05/22/6289e59fd5019.png)

## DOM

![image-20220522200437612](https://img.usj.cc/i/2022/05/22/628a26d556ed9.png)

#### getElementById

1.因为我们文档页面从上往下加载，所以先得有标签，所以我们script写到标签的下面

2.get 获得 element 元素 by 通过 驼峰命名法

3.参数 id是大小写敏感的字符串

4.返回的是一个元素对象

5.console.dir() 打印我们返回的元素对象，更好的查看里面的属性和方法

```html
<body>
    <div id="times">2022-5-22</div>
    <script>
        timer = document.getElementById('times')
        console.log(timer);
        console.log(typeof timer);
        console.dir(timer)
    </script>
</body>
```

#### getElementsByTagName

1.返回的是 获取过来元素对象的集合 以伪数组的形式储存的

2.我们想要一次打印里面的元素对象我们可以采取遍历的方式

3.如果页面中只有一个li返回的还是伪数组形式

4.如果页面中没有这个元素则返回空的伪数组的形式

#### element.getElementsByTagName

可以获取某个元素的父元素内部所有指定标签名的子元素

注意：父元素必须是单个对象（必须指明是哪一个元素对象）

获取的时候不包括父元素自己

```js
var ol = document.getElementsByTagName('ol')
        console.log(ol);
        console.log(ol[0].getElementsByTagName('li'));
```

#### document.getElementsByClassName('选择器类名')

```js
var box = document.getElementsByClassName('box')
        console.log(box);
```

这个获取的是，box这个选择器类名的集合

#### document.querySelector

h5新增的标签，但是此方法是获取document页面的第一个该元素

如果该页面有多个li标签，则获取第一个li标签

```js
var lis = document.querySelector('li')
        console.log(lis);
```

如果获取box的第一个标签，则需要加.，如果是id选择器则要加#

```js
var firstbox = document.querySelector('.box')
        console.log(firstbox);
        var nav = document.querySelector('#nav')
        console.log(nav);
```

#### querySelectorAll

返回指定选择器的所有元素对象集合

```js
var allbox = document.querySelectorAll('.box')
        console.log(allbox);
```

```js
var allli = document.querySelectorAll('li')
        console.log(allli);
```

#### 获取页面的body元素

```js
 var getbody = document.body
        console.log(getbody);
```

#### 获取页面的html元素

```js
 var gethtml = document.documentElement
        console.log(gethtml);
```

#### 事件三要素

事件是有三部分组成，分别是事件源，事件类型，事件处理程序

这里我们称为事件三要素

1.事件源 事件被触发的对象 谁 按钮

2.事件类型 如何触发 什么事件 比如鼠标点击 鼠标经过 还是键盘输入等事件都属于事件类型

3.事件处理程序 通过一个函数赋值的方式 完成

```js
   <button>普信男</button>
    <script>
        // 获取事件源
        var btn = document.querySelector('button')
        // 获取事件
        btn.onclick = function () {
            alert('真下头！')
        }
    </script>
```

#### 执行事件步骤

1.获取事件源

点击某个div，控制台输出，例如我被选中了

2.绑定事件，注册事件

例如 div.onclick

常见的鼠标事件

![image-20220524131011831](https://img.usj.cc/i/2022/05/24/628c68b4be3ff.png)

3.执行操作 function函数

#### 操作元素

我们这里修改元素的内容

例如 div里的文字 我们可以用innertext这个属性修改div原来的文字

在这里我们需要遵循事件的三要素

##### 获取事件执行某些命令

```js
    <button>获取系统时间</button>
    <div>点击botton获取最新时间哟!</div>
    <p>刷新页面获取最新时间哦</p>
    <script>
        var btn = document.querySelector('button')
        var div = document.querySelector('div')
        var ptags = document.querySelector('p')
        btn.onclick = function () {
            div.innerText = "我是时间哦"
        }
```

当我们点击btn按钮之后，改变div的值

##### 刷新页面即执行某些操作

```js
<p>刷新页面获取最新时间哦</p>
  var ptags = document.querySelector('p')
        ptags.innerText = '卧槽牛皮'
```

无需事件，刷新页面即可执行替换p标签的内容操作

#### innerText和innerHTML区别

1.innerText 不识别html标签，不是标准的，他会去除html的空格和换行

2.innerHTML 识别html标签，是属于w3c标准的，保留空格和换行的

3.这两个属性是可以读写的，可以通过log打印在控制台，也可以获取元素里面的内容

#### 修改元素的属性

比如 元素src herf属性

##### 1.获取元素

```js
 <button id="slb">史卢比</button>
    <button id="hcr">火柴人</button>
    <img src="" alt="" width="100" height="100" title="">
        var slb = document.getElementById('slb')
        var hcr = document.getElementById('hcr')
        var img = document.querySelector('img')
```

##### 2.注册事件

当点击btn按钮执行更换图片的src和title属性值

```js
    slb.onclick = function () {
            img.src = 'https://img.usj.cc/i/2022/05/24/628c72e9ec7b5.webp'
            img.title = '史卢比'
        }
        hcr.onclick = function () {
            img.src = 'https://img.usj.cc/i/2022/05/24/628c72f05eb49.webp'
            img.title = '火柴人'
        }
```

##### 3.完整源码

```html
    <button id="slb">史卢比</button>
    <button id="hcr">火柴人</button>
    <img src="" alt="" width="100" height="100" title="">
    <script>
        var slb = document.getElementById('slb')
        var hcr = document.getElementById('hcr')
        var img = document.querySelector('img')
        slb.onclick = function () {
            img.src = 'https://img.usj.cc/i/2022/05/24/628c72e9ec7b5.webp'
            img.title = '史卢比'
        }
        hcr.onclick = function () {
            img.src = 'https://img.usj.cc/i/2022/05/24/628c72f05eb49.webp'
            img.title = '火柴人'
        }
    </script>
```

#### 分时问候语案例

在不同的时间段打印输出不同的图片和文字

例如早上好 中午好 晚上好

##### 完整源码

```js
   <div id="why"></div>
    <img src="" alt="">
    <script>
        var now = new Date();
        var hour = now.getHours()
        var why = document.getElementById('why')
        var tu = document.querySelector('img')
        if (0 < hour && hour < 8) {
            tu.src = 'https://img.usj.cc/i/2022/05/24/628caa184a70f.gif'
            why.innerHTML = '早上好呀!'
        } else if (8 < hour && hour < 13) {
            tu.src = 'https://img.usj.cc/i/2022/05/24/628cac6ed22d8.gif'
            why.innerHTML = '中午好呀!'
        } else if (13 < hour && hour < 24) {
            tu.src = 'https://img.usj.cc/i/2022/05/24/628cac79141d8.gif'
            why.innerHTML = '晚上好呀!'
        }
```

#### 修改表单属性

比如修改input表单元素的值，就不能使用innertext属性，需要使用value才可以

当点击按钮之后我们可以用disabled === true，判断该按钮被点击过，在函数内部我们可以使用this指向事件函数的调用者

```js
    <button>点我</button>
    <input type="text" value="普信男">
    <script>
        // 1.找到事件源
        var btn = document.querySelector('button')
        var input = document.querySelector('input')
        // 2.注册事件
        btn.onclick = function () {
            input.value = '真下头'
            this.disabled = true
            // 这里的this 是指的是事件函数的调用者 btn
        }

    </script>
```

#### 仿京东密码输入表单

首先构造好html样式，然后css写好之后

获得事件源，眼睛，和input表单

```js
   var mm = document.getElementById('mm')
        var eye = document.querySelector('img')
```

为了保证点击之后还可以点击使其闭眼，所以我们可以用使用flag算法

```js
     var flag = 0;
        eye.onclick = function () {
            if (flag == 0) {
                flag = 1;
            }
            else {
                flag = 0;
            }
        }
```

这样eye就可以不停的点击

##### 完整源码

```html
 <style>
        .box {
            position: relative;
            width: 400px;
            margin: 100px auto;
            border-bottom: 1px solid #ccc;
        }

        .box input {
            height: 30px;
            width: 370px;
            border: 0;
            outline: none;
        }

        .box img {
            width: 24px;
            position: absolute;
            top: 8px;
            right: 4px;
        }
    </style>
</head>

<body>
    <div class="box">
        <input type="password" name="" id="mm">
        <label for="">
            <img src="https://img.usj.cc/i/2022/05/24/628cb866e6d16.png" alt="">
        </label>
    </div>
    <script>
        var mm = document.getElementById('mm')
        var eye = document.querySelector('img')
        var flag = 0;
        eye.onclick = function () {
            if (flag == 0) {
                mm.type = 'text'
                eye.src = 'https://img.usj.cc/i/2022/05/24/628cb866e6d16.png'
                flag = 1;
            }
            else {
                mm.type = 'password'
                eye.src = 'https://img.usj.cc/i/2022/05/24/628cb9a2ba6e0.png'
                flag = 0;
            }
        }
    </script>
</body>
```

#### 修改样式属性

1.我们可以通过js修改元素的颜色，大小，宽度等属性

2.js里面的样式采用驼峰命名法，比如fontSize

3.js修改style样式操作，产生的是行内样式，css的权重比较高

#### 淘宝二维码关闭示例

点击x按钮关闭

#### 完整源码

```js
    <style>
        .ewm {
            width: 250px;
            height: 250px;
            border: 1px solid #ccc;
            border-radius: 5px;
            position: relative;
        }

        .x {
            width: 33px;
            height: 22px;
            position: absolute;
            border: 1px solid #ccc;
            right: -38px;
        }
    </style>
</head>

<body>
    <div class="ewm">
        <img src="https://img.usj.cc/i/2022/05/25/628e340e03727.png" alt="">
        <div class="x">关闭</div>
    </div>
    <script>
        var x = document.querySelector('.x')
        var ewm = document.querySelector('.ewm')
        x.onclick = function () {
            ewm.style.display = 'none'
        }
    </script>
</body>
```

#### 焦点事件

##### onfocus事件

鼠标点击事件，当鼠标定点在焦点上，就执行该事件

但测试Chrome浏览器无法执行该事件

##### onblur事件

鼠标离开焦点事件 

但测试Chrome浏览器无法执行该事件

#### 使用className修改元素属性

##### className

1.如果样式修改较多，可以采取操作类名方式更改元素样式

2.class因为是个保留字，因此使用className来操作元素类名属性

3.className 会直接更改元素的类名，会覆盖原先的类名

```js
    <style>
        .change {
            font-size: 32px;
            color: blue;
        }

        .first {
            font-size: 16px;
            color: red;
        }
    </style>
</head>

<body>
    <div class="first">文本</div>
    <script>
        var text = document.querySelector('.first')
        text.onclick = function () {
            this.className = 'change'
        }
    </script>
</body>
```

#### 表单校验案例

1.首先判断事件，表单失去焦点onblur

2.然后改变p标签的文字和颜色

##### 完整源码

```js
    <style>
        .box {
            width: 600px;
            margin: 100px auto;
        }

        .massage {
            display: inline-block;
            font-size: 12px;
            color: #999;
            background: url() no-repeat left center;
            padding-left: 20px;
        }

        .wrong {
            color: red;
        }

        .right {
            color: aquamarine;
        }
    </style>
</head>

<body>
    <div class="box">
        <input type="password" class="ipt">
        <p class="massage">请输入6-16位密码</p>
        <script>
            var ipt = document.querySelector('.ipt')
            var massage = document.querySelector('.massage')
            ipt.onblur = function () {
                if (this.value.length < 6 || this.value.length > 16) {
                    massage.innerHTML = "请确保密码在6-16位哦!"
                    massage.className = 'massage wrong'
                } else {
                    massage.innerHTML = "校验正确哦!"
                    massage.className = 'massage right'
                }
            }
        </script>
    </div>
</body>
```

#### 小灯开关示例

使用flag算法

```js
<body>
    <button>小灯开关</button>
    <script>
        var btn = document.querySelector('button')
        var getbody = document.body
        var flag = 0
        btn.onclick = function () {
            if (flag == 0) {
                getbody.style.backgroundColor = '#000'
                flag = 1;
            } else {
                getbody.style.backgroundColor = '#fff'
                flag = 0;
            }
        }
    </script>
</body>
```

#### 排他思想-算法

1.首先获取所有的btn按钮元素

2.遍历所有的btn按钮

3.注册事件 当点击每一个btn按钮 会出现啥

4.排除其他元素的干扰 干掉其他元素的背景颜色

##### 总结

首先先排除其他人，然后才设置自己的样式 这种排除其他人的思想我们称为排他思想

##### 完整源码

```js
<body>
    <button>按钮1</button>
    <button>按钮1</button>
    <button>按钮1</button>
    <script>
        // 1.首先获取所有的btn按钮元素
        var btn = document.querySelectorAll('button')
        // 2.遍历所有的btn按钮
        for (var i = 0; i < btn.length; i++) {
            // 3.注册事件 当点击每一个btn按钮 会出现啥
            btn[i].onclick = function () {
                // 4.排除其他元素的干扰 干掉其他元素的背景颜色
                for (var i = 0; i < btn.length; i++) {
                    btn[i].style.backgroundColor = ""
                }
                this.style.backgroundColor = "red"
            }
        }
        // 总结：首先先排除其他人，然后才设置自己的样式 这种排除其他人的思想我们称为排他思想
    </script>
</body>
```

#### 百度换肤示例

构建基础html+css

```js
 <style>
        * {
            margin: 0;
            padding: 0;
        }

        body {
            background: url() no-repeat center top;
        }

        ul {
            margin: 0 auto;
            width: 440px;
        }

        li {
            list-style: none;
        }


        li img {
            float: left;
            width: 100px;
            margin-left: 10px;
        }
    </style>
</head>

<body>
    <ul class="baidu">
        <li><img src="images/1.jpg" alt=""></li>
        <li><img src="images/1.jpg" alt=""></li>
        <li><img src="images/1.jpg" alt=""></li>
        <li><img src="images/1.jpg" alt=""></li>
    </ul>
</body>
```

1.获取ul里面的所有img,这里我们给ul img属性

```js
 var imgs = document.querySelector('.baidu').querySelectorAll('img')
```

2.遍历所有的img，然后创建事件

```js
 for (var i = 0; i < imgs.length; i++) {
            imgs[i].onclick = function () {
                document.body.style.backgroundImage = 'url(' + this.src + ')'
            }
        }
```

##### 完整源码

```js
  <style>
        * {
            margin: 0;
            padding: 0;
        }

        body {
            background: url() no-repeat center top;
        }

        ul {
            margin: 0 auto;
            width: 440px;
        }

        li {
            list-style: none;
        }


        li img {
            float: left;
            width: 100px;
            margin-left: 10px;
        }
    </style>
</head>

<body>
    <ul class="baidu">
        <li><img src="images/1.jpg" alt=""></li>
        <li><img src="images/1.jpg" alt=""></li>
        <li><img src="images/1.jpg" alt=""></li>
        <li><img src="images/1.jpg" alt=""></li>
    </ul>
    <script>
        var imgs = document.querySelector('.baidu').querySelectorAll('img')
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].onclick = function () {
                document.body.style.backgroundImage = 'url(' + this.src + ')'
            }
        }
    </script>
</body>
```

#### 鼠标悬停tr显示选中颜色

```js
<body>

    <table border="1">
        <thead>
            <tr>
                <th>姓名</th>
                <th>年龄</th>
                <th>电话</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>小王</td>
                <td>18</td>
                <td>110</td>
            </tr>
            <tr>
                <td>小白</td>
                <td>19</td>
                <td>119</td>
            </tr>
        </tbody>
    </table>
    <script>
        // 1.首先获取tbody的所有tr元素
        var gettr = document.querySelector('tbody').querySelectorAll('tr')
        // 2.利用遍历，将所有tr元素遍历出来
        for (var i = 0; i < gettr.length; i++) {
            // 注册事件，鼠标悬停时的时候触发的事件
            gettr[i].onmouseover = function () {
                this.style.backgroundColor = 'pink'
            }
            // 注册事件，鼠标离开的时候触发的事件
            gettr[i].onmouseout = function () {
                this.style.backgroundColor = '';
            }
        }
    </script>
</body>
```

#### 表单全选或者取消全选

```js
 <style>
        thead tr {
            background-color: skyblue;
        }
    </style>
</head>

<body>
    <table border="1">
        <thead id="qx">
            <tr>
                <td><input type="checkbox" name="" id=""></td>
                <td>清单</td>
            </tr>
        </thead>
        <tbody id="ck">
            <tr>
                <td><input type="checkbox" name="" id=""></td>
                <td>iphone se</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id=""></td>
                <td>iphone 12</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id=""></td>
                <td>iphone 13</td>
            </tr>
        </tbody>
    </table>
    <script>
        // 1.获取事件源
        // 1.1 获取全选按钮的事件源
        var qx = document.querySelector('#qx').querySelector('input')
        // 1.2获取所有tbody的复选按钮
        var ck = document.querySelector('#ck').querySelectorAll('input')
        // 2.注册事件 对qx注册点击事件
        qx.onclick = function () {
            // 2.1 遍历所有的ck的input
            for (var i = 0; i < ck.length; i++) {
                // 2.2 当点击qx的input按钮然后全选ck的input按钮
                ck[i].checked = true
            }
        }
        // 3. 遍历所有的ck的input
        for (var i = 0; i < ck.length; i++)
            // 3.1 当点击ck的所有input按钮触发点击事件
            ck[i].onclick = function () {
                // 3.2 这里使用一个算法 当flag为true
                var flag = true
                // 3.3 遍历所有的ck的input
                for (var i = 0; i < ck.length; i++) {
                    // 3.4 当ck的所有input未被选中 这里!取反了的  如果有则flag=false
                    if (!ck[i].checked) {
                        flag = false
                    }
                    // 3.5 否则这里就返回true
                    qx.checked = flag
                }
            }
    </script>
</body>
```

#### 获取自定义属性值

##### getAttribute

可以获取元素的属性值的参数，例如

也可以获取自定义的属性

例如zql，可以通过该方法取到zql属性的参数"wocao"

```js
<dic id="box" class="boxs" zql="wocao"></dic>
```

该div的id的box我们可以用该方法取到box的值

##### 属性值.id 和 属性值.className

```js
 <dic id="box" class="boxs" zql="wocao"></dic>
    <script>
        var box = document.querySelector('#box')
        console.log(box.getAttribute('id'));
        console.log(box.getAttribute('zql'));
        console.log(box.id);
        console.log(box.className);
    </script>
```

#### 设置和移除自定义属性

##### setAttribute

###### 语法

```
setAttribute('属性', '值')
```

###### 示例

```js
box.setAttribute('zql', '3')
```

###### 说明

该属性主要用于修改自定义属性，例如class和id我们使用老方法修改

###### 示例

```js
  <div class="box" id="boxs" zql="1"></div>
    <script>
        var box = document.querySelector('#boxs')
        box.setAttribute('zql', '3')
        box.className = 'hello'
        box.id = 'wocao'
        box.setAttribute('id', 'rnm')
    </script>
```

##### removeAttribute

removeAttribute('属性')

用于移除自定义属性

```js
  <div class="box" id="boxs" zql="1"></div>
    <script>
        var box = document.querySelector('#boxs')
        box.removeAttribute('zql')
    </script>
```

#### tab栏目切换案例

##### 完整源码

```html
   <style>
        * {
            margin: 0;
            padding: 0;
        }

        li {
            list-style-type: none;
        }

        .tab {
            width: 978px;
            margin: 100px auto;
        }

        .tab_list {
            height: 39px;
            border: 1px solid #ccc;
            background-color: #f1f1f1;
        }

        .tab_list li {
            float: left;
            height: 39px;
            line-height: 39px;
            padding: 0 20px;
            text-align: center;
            cursor: pointer;
        }

        .tab_list .current {
            background-color: #c81623;
            color: #fff;
        }

        .item_info {
            padding: 20px 0 0 20px;
        }

        .item {
            display: none;
        }
    </style>
</head>

<body>
    <div class="tab">
        <div class="tab_list">
            <ul>
                <li class="current">商品介绍</li>
                <li>规格与包装</li>
                <li>售后保障</li>
                <li>商品评价（50000）</li>
                <li>手机社区</li>
            </ul>
        </div>
        <div class="tab_con">
            <div class="item" style="display: block;">
                商品介绍模块内容
            </div>
            <div class="item">
                规格与包装模块内容
            </div>
            <div class="item">
                售后保障模块内容
            </div>
            <div class="item">
                商品评价（50000）模块内容
            </div>
            <div class="item">
                手机社区模块内容
            </div>

        </div>
    </div>
    <script>
        var lis = document.querySelector('.tab_list').querySelectorAll('li');
        var items = document.querySelectorAll('.item');
        for (var i = 0; i < lis.length; i++) {
            // 开始给5个小li 设置索引号 
            lis[i].setAttribute('index', i)
            // 这里需要双向绑定
            items[i].setAttribute('index', i)
            // 1.创建点击事件
            lis[i].onclick = function () {
                // 1. 上的模块选项卡，点击某一个，当前这一个底色会是红色，其余不变（排他思想） 修改类名的方式
                // 干掉所有人 其余的li清除 class 这个类
                for (var i = 0; i < lis.length; i++) {
                    lis[i].className = ''
                }
                this.className = 'current'
                // 2.显示内容
                var index = this.getAttribute('index')
                console.log(index);
                for (var i = 0; i < items.length; i++) {
                    items[i].style.display = 'none'
                }
                items[index].style.display = 'block';
            }
        }
    </script>
</body>
```

#### h5自定义属性

在h5中，规定自定义属性必须使用data-开头来命名自定义属性

当然我们也可以使用getAttribute('date-time')，获取，因为此方法的兼容性更好

##### h5的新规

我们可以通过 对象.dataset.属性名获取自定义属性

例如

```html
<div data-time="520" data-list-name="andy"></div>
    <script>
        var div = document.querySelector('div')
        console.log(div.dataset.time);
    </script>
```

h5新增的获取自定义属性的方法，它只能后去data-开头的

dataset是一个集合里面存放了所有以data开头的自定义属性

如果自定义属性里面有多个-链接的单词，我们获取的时候采取，驼峰命名法

例如

```html
    <div data-time="520" data-list-name="andy"></div>
    <script>
        var div = document.querySelector('div')
        console.log(div.dataset.listName);
    </script>
```

#### 节点操作

##### 节点概述

![image-20220529162903964](https://img.usj.cc/i/2022/05/29/62932ed08ce38.png)

##### 特点

逻辑性比较强，但是兼容性不如默认获取元素方法强，例如querySelector

##### parentNode

取得父级节点的元素

例如

```html
<body>
    <div class="bigbox">
        <div class="box">
            <span class="boxs"></span>
        </div>
    </div>
    <script>
        var boxs = document.querySelector('.boxs')
        boxs.parentNode
        console.log(boxs.parentNode);
    </script>
</body>
```

只需要boxs.parentNode即可获取boxs的父级元素

##### 注意

得到的是离元素最近的父级节点（亲爸爸），如果找不到父级节点，则返回null

#### 节点操作获取子节点

##### childNodes

通过该方法可以获取该父级的所有子节点，其中包含元素节点，文本节点，例如换行也是一个文本节点

```html
    <ul>
        <li>我是第一个1</li>
        <li>我是第一个2</li>
        <li>我是第一个3</li>
        <li>我是第一个4</li>
    </ul>
    <script>
        var ul = document.querySelector('ul')
        console.log(ul.childNodes);
        console.log(ul.childNodes[1].nodeType);
    </script>
```

这个方法十分的繁琐，我们需要通过for循环里面if判断才可以筛选出元素节点

##### children

使用该方法可以直接获取元素节点，但是这个方法不被官方承认，但是被各个浏览器兼容

```html
  <ul>
        <li>我是第一个1</li>
        <li>我是第一个2</li>
        <li>我是第一个3</li>
        <li>我是第一个4</li>
    </ul>
    <script>
        var ul = document.querySelector('ul')
        console.log(ul.children);
    </script>
```

#### 节点操作之获取第一个元素节点和最后一个节点

###### firstChild和lastChild

获取父级节点的子节点的第一个和最后一个

但是这个方法是获取的子元素的第一个节点，所以不会排除文本节点

我们往往获取到的是文本节点，实际意义不大

###### firstElementChild和lastElementChild

此方法可以获取第一个元素节点和最后一个元素节点

但是兼容性较差，ie9以上版本才可以支持

##### 建议方法

###### 父级节点.children[0]

获取第一个子元素节点，且是元素节点，兼容性比较好

###### 父级节点.children[ol.children.length - 1]

获取最后一个子元素节点，且是元素节点，兼容性比较好

#### 新浪下拉菜单

##### 完整案例

```html
 <style>
        * {
            margin: 0;
            padding: 0;
        }

        li {
            list-style-type: none;
        }

        a {
            text-decoration: none;
            font-size: 14px;
        }

        .nav {
            margin: 100px;
        }

        .nav>li {
            position: relative;
            float: left;
            width: 80px;
            height: 41px;
            text-align: center;
        }

        .nav li a {
            display: block;
            width: 100%;
            height: 100%;
            line-height: 41px;
            color: #333;
        }

        .nav>li>a:hover {
            background-color: #eee;
        }

        .nav ul {
            display: none;
            position: absolute;
            top: 41px;
            left: 0;
            width: 100%;
            border-left: 1px solid #FECC5B;
            border-right: 1px solid #FECC5B;
        }

        .nav ul li {
            border-bottom: 1px solid #FECC5B;
        }

        .nav ul li a:hover {
            background-color: #FFF5DA;
        }
    </style>
<body>
    <ul class="nav">
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
    </ul>
    <script>
        var nav = document.querySelector('.nav')
        var lis = nav.children
        for (var i = 0; i < lis.length; i++) {
            lis[i].onmouseover = function () {
                this.children[1].style.display = 'block'
            }
            lis[i].onmouseout = function () {
                this.children[1].style.display = 'none'
            }
        }
    </script>
</body>
```

