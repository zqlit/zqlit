

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
