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
