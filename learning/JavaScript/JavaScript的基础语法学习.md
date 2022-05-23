## JavaScript学习笔记

#### if语句

```js
var 变量 = 值
        if (条件语句) {
            console.log("输出语句，可以是字符串")
        }
```

#### if else语句

```js
var 变量 = 值
        if (条件语句) {
            console.log("输出语句，可以是字符串")
        } else if (当if的bool值为FALSE则执行该if else的条件语句) {
            console.log("输出语句，可以是字符串")
        }
```

#### Switch语句

涉及到的四个单词

Switch：开关，岔路

case：方案，情况

break：打断，断开

default：默认

##### Switch的基础语法

分支语句-Switch

```js
switch(要判断的变量){
            case 情况1：
            满足情况1执行的代码
            break
            case 情况2：
            满足情况2执行的代码
            break
            default：
            所有情况都不满足的时候执行的代码
        }
```

##### Switch语法注意点

1.要判断的变量，即是var定义的值，必须和case后面的情况是相等的数据类型，才满足

2.Switch的判断，只能判断准确的等于哪一个值，不能进行范围的判断

3.Switch语句的判断，也不能进行逻辑运算的判断，例如case后面接&&，||等条件判断字符

4.default可以写，也可以不写，不写的时候，就是所有条件都不满足，就没有代码执行

5.break必须要书写，如果不书写break，那么就会进行穿透，穿透的意思就是，下一个case不管是满足还是不满足，都会执行代码，直到该Switch语句一直结束，或者中途遇到break

6.穿透的时候，会从第一个满足条件的case开始向下穿透，例如var=2，如果定义case1，case2，case3，如果都没写break跳出，则该程序到case1则不执行，到达case2，条件符合则执行，会一直往下执行case3，最后打印输出case2和case3的内容

##### 案例：计算2022年的今天是哪一天？

思路:普通闰年和世纪闰年都叫闰年,闰年的二月是29天,平年二月是28天启用月份累加,比如一月份 不用管,二月份则需要结果加上一月的月份天数,在三月份则需要累加2月份的天数，所以需要if判断一下

```javascript
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                day += 29
            } else {
                day += 28
            }
```

第一个if括号里面的就是判断是否为闰年，例如2020年就是闰年

```JavaScript
   var year = 2020
        var month = 3
        var date = 9
        var day = 0
        switch (month) {
            case 12: day += 31
            case 11: day += 30
            case 10: day += 31
            case 9: day += 30
            case 8: day += 31
            case 7: day += 31
            case 6: day += 30
            case 5: day += 31
            case 4: day += 30
            case 3: day += 31
            case 2: if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                day += 29
            } else {
                day += 28
            }
            case 1:
            // 这里不用累加
        }
        // 这里加上天数
        day += date
        alert("今天是" + year + "的第" + day + "天")

```

这里我们也可以使用if语句写法

```js
  // 分别对年，月，天进行定义变量
        var year = 2021
        var month = 3
        var date = 14
        // 写一个变量接受数值
        var result = 0
        // 因为if else语句是 if语句不符合则执行else，我们只需要使用if语句累加天数即可
        if (month > 0) result += date
        if (month > 1) result += 31
        if (month > 2) {
            if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                result += 29
            } else {
                result += 28
            }
        }
        if (month > 3) result += 31
        if (month > 4) result += 30
        if (month > 5) result += 31
        if (month > 6) result += 30
        if (month > 7) result += 31
        if (month > 8) result += 31
        if (month > 9) result += 30
        if (month > 10) result += 31
        if (month > 11) result += 30
        if (month > 12) result += 31
        console.log(result)
```

#### 三元表达式

三元表达式，也叫三目，也叫三目运算符

1.两个符合和三个数据组成的运算符

2.是一个if else 语句的简写形式

注意：这里只能简写 if else语句

##### 语法

1.条件 ？满足 ：不满足

2.如果条件满足，执行满足位置的代码

3.如果条件不满足，就执行不满足位置的代码

##### 注意

1.每一个代码执行区间，只能书写一句话

2.只能简写if else语句，不能简写其他语句

3.可以用来执行代码，也可以用来进行赋值

例如：先定义函数gender，赋值为0，然后使用三元表达式对定义的新函数sex进行定义

我们使用三元表达式，进行sex函数进行定义

```javascript
var gender = 1
var sex = gender % 2 === 0 ? console.log("女") : console.log("男")
```

#### 与页面的交互练习

##### 知识点总结

1.在html5的标准下，元素的id可以在js可以当一个天生的变量使用

2.如何在button按钮被点击之后执行一些代码，语法

```js
按钮的id.onclick = function () { }
```

当点击按钮之后将执行{}里面的代码

3.取到文本框里用户输入的数据

```js
文本框的属性id.value
```

4.这里取到的用户输入的数据一定是一个字符串类型，所以无法对数据进行相加减，所以应该对数据类型进行转换

##### 案例：制作一个计算器

思路：

1.首先构建html的骨架

```html
   <input type="text" id="first">
    <select id="method">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>
    <input type="text" id="second">
    <button id="btn">=</button>
    <input type="text" id="result">
```

2.当用户点击btn的bottom按钮 将执行以下事件

```js
btn.onclick = function () {
            // 定义n1 n2两个变量，然后将用户输入first的值和second的值进行获取
            var n1 = first.value - 0
            var n2 = second.value - 0
            // 对于select的value的值进行获取，并将其命名一个新的变量type
            var type = method.value
            switch (type) {
                case "+":
                    var res01 = n1 + n2
                    // console.log(res01)
                    result.value = res01
                    break
                case "-":
                    var res02 = n1 - n2
                    // console.log(res02)
                    result.value = res02
                    break
                case "*":
                    var res03 = n1 * n2
                    // console.log(res03)
                    result.value = res03
                    break
                case "/":
                    var res04 = n1 / n2
                    // console.log(res04)
                    result.value = res04
                    break
            }


        }
```

3.我们取到用户输入的数值之后，字符型默认是str类型，所以我们需要-0，来将字符类型转换为数值型，才能进行计算

4.定义一个变量，获取select的value值，将该变量构成一个Switch语句

5.最后我们需要在最后一个input的文本框输出计算结果，我们只需要把计算好的变量赋值给输出结果文本框的value

```js
result.value = res03
```

#### 复习回顾

##### 比较运算符

这里主要解释几个等于的含义区别

= = 等于，只比较数据的值，不比较数据类型

= = = 等等于，比较数据类型和值

！ = 不等于，比较的是值不等于

！ = = 不等等，比较的是值和数据类型任意一个不等于就是不等

##### 逻辑运算符

###### && 与

1.需要左右两边都是true才能返回true

###### 短路表达式

左边为true的时候，右边的代码才会执行

###### || 或

1.需要任意一边是true，就返回true

###### 短路表达式

左边为false的时候，右边的代码才会执行

###### ！ 非（这里我们也叫取反）

1.本身是true结果就是false

2.本身是false结果就是true

双取反可以转布尔值

##### 自增自减运算符

++

使用方法：

前置 ++ ：符号在数据的前面

后置 ++ ：符号在数据的后面

共同点：

都会让变量的值改变，指的是+1

区别：在参与运算的时候

前置 ++:先把变量的值改变（+1），用改变后的值参与运算

后置 ++:先把变量本身的值参与运算，然后再改变变量的值

-- 减减

共同点和区别基本上都与++类似

#### while语句

语法：

```
while (条件) { 代码 }
```

意义：只要满足条件就执行代码

说明：执行完毕代码，再次判断条件，如果还满足，继续执行代码，执行完毕代码，再次判断条件直到不满足了，结束当前循环

##### 循环控制变量

1.在循环中，什么可以控制循环的次数

2.开始定义的变量，结束的变量，步长都可以控制循环的次数

练习：取出100以内的偶数

```js
    var number = 0
        while (number <= 100) {
            if (number % 2 === 0) {
                console.log(number)
            } else {

            }
            number++
        }
```

练习：求出十以内三的倍数的之和

```js
  // 首先定义一个变量进行结果的接收
        var result = 0
        // 然后定义循环的开始从1开始
        var number = 1
        while (number <= 10) {
            if (number % 3 === 0) {
                result += number
                console.log(result)
            }
            number++
        }
```

练习：求三次自幂数

其中三次自幂数也叫水仙花数字

必须是三位数，一个数值的每一位的三次方之和，和这个数字相等

例子:153

1^3 + 5^3 + 3^3 =1+125+27=153

```js
var number = 100
        while (number <= 999) {
            var a = parseInt(number / 100)
            var b = parseInt(number % 100 / 10)
            var c = parseInt(number % 10)
            var result = a * a * a + b * b * b + c * c * c
            if (result == number) (
                console.log(result + "是一个水仙花数字")
            )
            number++
        }
```

#### do while语句

说明：do while语句是循环语句的一种

语法：

```js
do {代码} while (条件)
```

先执行一遍代码，再开条件判断

和while循环语句的区别：

1.当你的初识变量在条件判断范围以内的时候，和while循环一样

2.当你的初识变量在条件范围外的时候，while循环一次都不执行，因为判断条件，不满足，直接结束了

3.do while会执行一次，因为后判断，所以先执行一次

#### prompt 弹出层函数

语法：

```js
prompt("提示文本")
```

表现：有一个输入框

返回值：

1.当你点击确定的时候，就是输入框的内容，一定是一个字符串类型

2.当你点击取消的时候，就是null

```js
do {
            var password = prompt("请输入你的密码")
        } while (password !== "1")
```

#### for循环

说明：for循环是循环语句的一种

语法：

```js
for(定义初始变量；条件判断；步长){代码}
```

案例：使用for循环判断1998-2030年那些是闰年

```js
      for (var year = 1998; year <= 2030; year++) {
            if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                document.write(year + "是闰年\n")
            } else {

            }
        }
```

#### document.write

说明：是指的是将结果打印输出在html页面

语法：

```js
document.write(需要打印输出的内容)
```

案例：计算出两个数字的最大公约数是多少？

思路：

1.首先定义一个var函数用来接受最终的公约数的值

2.两个数的最小公约数始终是1，最大公约数就是两个数最小的那一个

3.利用for循环，定义一个值var=i，然后步长为1，即可

```js
        var result = 0
        // 定义一个函数来接受结果
        var min = 12
        var max = 24
        for (var i = 1; i <= min; i++) {
            if (max % i === 0 && min % i === 0) {
                result = i
                console.log(result)
            } else {

            }
        }
        console.log(min + "和" + max + "的最大公约数是" + result)
```

案例：计算出10和15的最小公倍数

什么时是公倍数？

能同时整除两个数字的数

例子：10和15

公倍数：30 60 90 120 150 ...

在若干的公倍数中，最小的那个数字，就是最小公倍数

所以可得10和15的最小公倍数是30

思路分析：

1.取值范围的最小值是多少：相比比较大的那个数字

2.取值范围的最大值是多少：两个数字的乘积

```js
    // 案例：求两个数字的最小公倍数
        var min = 12
        var max = 24
        // 定义一个变量接收结果
        var result = 0
        for (var i = max * min; i >= 1; i -= 1) {
            if (i % max === 0) {
                result = i
            }
        }
        console.log(max + "和" + min + "的最小公倍数是" + result)   
```

#### 循环控制语句

##### break语句

说明：当循环内执行到这句代码的时候，会直接结束整个循环

##### continue语句

说明：当循环内执行到这句代码的时候，就会跳过循环的本次，继续循环的下一次

#### 循环的嵌套

说明：这里的循环嵌套是指的是一个循环里面再次书写一个循环

注意：**里外层循环不要用一个变量控制**

建议：看到循环嵌套，从里向外看

##### 案例：写一个正方形的矩阵

分析：这个是一个循环嵌套，我们可以先输出一个*，利用for循环将该*输出九次，因为需要是个矩阵，最后我们需要加上以br标签才行

```js
      for (j = 1; j <= 8; j++) {
            for (i = 1; i <= 8; i++) {
                document.write("* ")
            }
            document.write("<br>")
        }
```

实际上就是两个for循环的嵌套

##### 案例：写一个三角形矩阵

要求：输出一个三角形的矩阵

分析:

1.我们发现在一个三角形中，的行数类似于正方形矩阵，所以行数不用改变

2.而变量i是对一行有多少个进行控制所以，我们只需要对变量i进行改版

3.我们发现一行输出一个*与行数j的变量值一一对应，那么我们可以控制i的范围来控制一行输出几个星号

所以代码应该这样书写

```js
    for (j = 1; j <= 8; j++) {
            for (i = 1; i <= j; i++) {
                document.write("* ")
            }
            document.write("<br>")
        }
```

这里我们只需要对变量i进行控制，将i的取值范围改成j的值即可实现三角形矩阵

##### 案例:写一个倒置的三角形矩阵

这个原理很简单，我们行数不变，只需要将上个案例的代码改良

所以我们只需要控制外层嵌套的j的值，将初值设为9，取值为j大于等于1，步长为j--

即可实现倒置的三角形矩阵的效果

```js
        for (var i = 9; i >= 1; i--) {
            for (var j = 1; j <= i; j++) {
                document.write("* ")
            }
            document.write("<br>")
        }
```

##### 案例：写一个9*9的乘法表

说明:此案例类似三角形案例，所以我们可以先不管里面的数值可以先参考三角形的的代码

1.因为9 * 9乘法表的规律是每个*号后面对应的数字是一个固定的行数，所以我们可以直接使用变量j

2.因为i控制的是一行输出几个，当i等于1的时候就输出1，所以*的前面的数值使用变量i

这样即可实现一个简单的9*9的乘法口诀表

```js
        for (var j = 1; j <= 9; j++) {
            for (var i = 1; i <= j; i++) {
                document.write("<span>" + i + "*" + j + "=" + i * j + "</span>")
            }
            document.write("<br>")
        }
```

因为需要对每个小块进行自定义样式我们可以把内容使用span标签进行包裹，然后使用css进行控制样式

```css
       span {
            display: inline-block;
            width: 100px;
            height: 20px;
            border: 2px solid #333;
            text-align: center;
        }
```

#### 判断一个数值是否为质数

##### 计数法

判断一个数字是否为质数？

首先：质数指的是自己只能被1和本身整除的数字，我们称为质数

常见的质数有 2 3 5 7 11 13 17

其中最小的质数是2

```js
 // 定义一个计数器
        var result = 0
        var n = 18
        for (var i = 1; i <= n; i++) {
            // 因为质数指的是只能由1和它本身整除的数字，因为初值从2开始可以直接忽略1
            if (n % i === 0) {
                result++
            }
        }
        if (result === 2) {
            console.log(n + "是质数")
        } else {
            console.log(n + "不是质数")
        }
```

##### 假设法

思路：

1.不管这个数字是不是质数，我都定义一个变量

2.假设这个数字是一个质数

3.通过循环去验证我都假设是否成立

```js
        // 定义一个变量假设这个函数就是质数
        var flag = true
        // // 定义一个质数变量
        var n = 23
        // 因为这里没有必要循环到头，只需要到自己的本身的一半即可
        // 所以使用 n / 2
        for (var i = 2; i <= n / 2; i++) {
            if (n % i === 0) {
                flag = false
                break
            }
        }
        if (flag) {
            console.log(n + "是质数")
        }
        else {
            console.log(n + "不是质数")
        }
```

#### 最大公约数

```js
      var a = prompt("请输入一个数字")
        var b = prompt("请输入另一个数字")
        // 对a，b数字进行比较大小
        if (a > b) {
            max = a
            min = b
        } else {
            max = b
            min = a
        }
        // 求两个数的最大公约数
        // 我们可以使用辗转相除法
        // 当max取余min不能整除的时候
        // 用小的数字代替max
        // 用余数代替min
        while (max % min !== 0) {
            var tmp = max % min
            max = min
            min = tmp
        }
        console.log(a + "和" + b + "的最大公约数是" + min)
```

#### 练习

##### 求100-200的所有质数

```js
   for (var i = 100; i <= 200; i++) {
            // 需要判断每个数字j是不是质数
            // 如果是，则打印在控制台
            for (var j = 2; j <= i / 2; j++) {
                if (i % j === 0) break
            }
            if (j > i / 2) console.log(i + "是质数")
        }
```

##### 四个一行输出1000-2000的闰年

```js
      // 定义一个计数器
        var count = 0
        for (var i = 1000; i <= 2000; i++) {
            if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
                document.write(i + "&nbsp;")
                count++
                if (count % 4 === 0) document.write("<br>")
            }
        }
```

#### 函数function

##### 认识函数

1.是一个js内的数据类型，并且是一个复杂数据类型

2.函数在js内叫做"一等公民"

##### 函数(个人理解)

1.函数就是一个盒子，能承载一段代码

2.当你需要执行这一段代码的时候，就要告诉盒子

函数分为两个阶段

1.把代码放在盒子里面的过程，叫做函数定义阶段

2.把盒子里面的代码执行的过程，叫做函数的调用阶段

##### 函数定义阶段

###### 声明式函数

语法：

```js
function 名字() { }
```

function 定义函数的关键字

名字      函数名(变量名),遵循变量的命名规则和规范

()       必须写，书写参数的位置

{}       代码段，你需要放在盒子里面的所有代码

注意：函数的定义阶段，{}内的代码不会执行

###### 赋值式函数

语法：

```js
var 名字 = function () {}
```

##### 函数调用阶段

语法：函数名()

意义：找到函数名对应的那个函数盒子，把里面的代码执行一遍

###### fn和fn()的区别

1.fn表示的是一个变量，储存的盒子的名字

2.fn()表示的是把盒子内的代码执行了

##### 函数的参数

###### 第一种：形参

1.是书写在函数定义阶段的小括号内

2.就是一个只能在函数内部使用的变量

3.可以书写多个，中间使用逗号分割

4.形参的值，是由函数的实参决定的

###### 第二种：实参

1.是书写在函数调用阶段的小括号内

2.按时从左到右的顺序依次给每一个形参进行赋值

##### 函数的注意点

###### 调用时注意

1.声明式函数可以先调用，也可以后调用

2.赋值式函数只能后调用，先调用会报错

###### 参数数量的注意点

1.形参和实参一样多

按照从左到右的顺序依次给每一个形参赋值

2.形参多

前面按照从左到右的顺序依次赋值

多出来的形参，没有实参进行赋值

在函数内使用的时候就是undefined

3.实参多

前面的按照从左到右的顺序依次赋值

多出来的实参，在函数内没有形参接收

在函数内不能直接使用(需要利用 arguments 来进行访问和使用)

#### arguments函数

1.是一个函数内天生自带的变量

2.是一个盒子，盒子内部存放的不是代码，是你所有的实参

3.你调用函数的时候，传递了多少个实参，这个盒子里面就有多少个数据

4.叫做实参的集合

##### arguments的排列

说明：arguments内所有的数据都是按照序号排列的

注意：序号从0开始，依次+1

我们管序号叫做索引或者下标

arguments内的数据是按照索引进行排序的

索引：从0开始依次+1

##### arguments的访问

说明：访问arguments内的每一个数据

利用：索引(下标)来进行访问

语法：arguments[索引]

1.表示你需要访问arguments这个盒子内部索引为几的数据

2.如果arguments内有对应的索引，那么就是对应索引位置的数据

3.如果arguments内没有对应的索引，那么就是undefined

##### arguments的长度

说明：指的是需要知道arguments内有多少个数据

语法：arguments.length

得到的就是一个数字，表示arguments的长度，也就是arguments内有多少个数据

换句话说，也就是你传递了多少个实参

长度与索引的关系

最后一个数据的索引一定是长度-1

##### arguments注意点

arguments内每一个数据的索引放在一起，是一组有规律的数字

依靠之前的循环语句可以，给我们提供一组有规律的数字

利用循环拿到一组有规律的数字，把这个数字当做arguments的索引来访问每一个数据

arguments的遍历

说明：我们需要访问到arguments的数据，我们称为遍历

利用循环拿到一组有规律的数字

确定循环的开始：0 因为索引是从0开始

确定循环的结束：length-1 因为最后一位数据的索引一定是length-1

确定循环的步长：1，因为索引是依次+1

##### arguments的案例

写一个函数用来计算所有实参的总和

```js
      var result = 0
        function js() {
            for (var i = 0; i < arguments.length; i++) {
                result += arguments[i]

            }
            console.log(result)
        }
        js(1, 2, 2, 5)
```

#### 函数的返回值

1.在一个函数内，以 return 关键字来给函数定义一个返回值

2.会在函数执行完毕得到一个结果

![微信图片_20220326173759.png](../source/images/JavaScript学习笔记/V2vr1d3q.png)

#### 冒泡排序

```js
// 冒泡排序
        var arr = [10, 30, 46, 654, 69];
        // 此外层for循环我们进行计算该比较为多少趟
        for (i = 0; i <= arr.length - 1; i++) {
            for (var j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }

            }
        }
        console.log(arr)
```

##### 值的顺序颠倒

定义一个新的变量n，将a值赋值给新变量n，b变量赋值给a变量

然后将新变量n赋值给b变量

```js
                    var n = a;
                    a = b;
                    b = n;
```

#### return返回值

##### 1.return会终止函数运行

指的是return返回的时候，后面的代码不会被执行

##### 2.return只能返回一个值

也就是return只能返回一个值，如果是数组，我们利用一个变量将数组赋值给变量即可

##### 3.return是返回后面的值，如果没有return，则返回undefined

这里解释一下，我们的函数如果有return，则返回的是return后面的值，如果函数没有return则返回的是undefined

#### 区别retrun，break，continue

##### 1.break

结束当前的循环体（如for，while）

##### 2.continue

跳出本次循环，继续执行下次循环（如for，while）

##### 3.return

不仅可以退出循环，还能够返回return语句中的值，同时还可以结束当前的函数体内的代码

#### arguments补充知识点

##### 1.里面存储了所有传递过来的实参

##### 2.arguments的展示形式只是一个伪数组

##### 3.我们可以对arguments进行遍历

##### 4.arguments具有length属性，可以按照索引的方法储存数据

##### 5.不具有数组的push，pop等方法

#### 求任意个数的最大数

```js
     function getmax() {
            var max = arguments[0];
            for (i = 1; i < arguments.length; i++) {
                if (arguments[i] > max) {
                    max = arguments[i]
                }
            }
            return max
        }
```

#### 翻转数组函数

```js
    // 利用函数封装的方式，翻转任意一个数组
        function changearr(arr) {
            //定义一个形参 arr
            var newarr = []
            //定义一个新的空数组
            for (i = arr.length - 1; i >= 0; i--) {
                //对旧数组进行for循环遍历
                newarr[newarr.length] = arr[i]
                //将数组arr的值复制给新数组newarr，这里的newarr的数组长度为newarr.length
            }
            return newarr
        }
```

#### 冒泡排序

```js
 //这里sort是排序的意思
        function sort(arr) {
            //首先确定该数组一共要跑几趟
            for (i = 0; i < arr.length - 1; i++) {
                //确定数组里面的元素一共要交换几次
                for (j = 0; j < arr.length - 1 - i; j++) {
                    //对数据进行交换
                    if (arr[j] > arr[j + 1]) {
                        temp = arr[j]
                        arr[j] = arr[j + 1]
                        arr[j + 1] = temp
                    }
                }
            }
            return arr
        }
        var arr1 = sort([1, 56, 64, 94, 89])
        console.log(arr1);

```

#### 变量的作用域

根据作用域的不同我们我们变量分为全局变量和局部变量

##### 全局变量

在全局作用域下的变量，在全局下都可以使用

###### 注意

如果在函数内部，没有声明直接赋值的变量也属于全局变量

```js
  function getdata(){
            var n = 56
            s = 30
        }
```

其中s就是全局变量

##### 局部变量

在局部作用域下的变量，后者在函数内部的变量就是局部变量

###### 注意

函数的形参也可以看做是局部变量

#### 作用域链

内部函数访问外部函数的变量的变量，采取的是链式查找的方式来决定取那个值，这种结构我们称为作用域链

#### js的预解析

js引擎运行js会分为两步：预解析和代码执行

预解析js引擎会把js里面的所有var和function提升到当前作用域的最前面

代码执行 安装代码书写的顺序，从上往下执行

##### 预解析

分为变量预解析和函数预解析

##### 变量提升

就是把所有的变量声明提升到当前的作用域最前面，但是不提升赋值操作

##### 函数提升

就是把所有的函数声明提升到当前作用域的最前面，但是不调用函数

##### 特别注意(重要！)

```js
var a = b = c = 9
```

相当于

```js
var a = 9;b = 9;c = 9
```

在函数内部中如果对b和c只赋值，并没有声明，我们把b和c当做全局变量看待

#### 对象

##### 为什么需要对象？

保存一个值我们可以使用变量，保存一组值我们可以使用数组，如果保存一个人的所有信息我们则需要使用对象

##### 对象的组成

对象是由属性与方法组成，属性是一个名词，方法则是一个分类词

##### 对象的创建方法

###### 1.利用字面量创建对象

```js
  var xzh = {
            username: "徐子豪",
            age: 20,
            sex: "男",
            tag: function () {
                console.log("我都不想骂你！");
            }
        }
        xzh.tag()
```

注意：

1.里面的属性或者方法我们采取键值对的形式，键是指的属性名：值是指的属性值

2.多个属性或者方法中间用逗号隔开的

3.方法冒号后面跟的是一个匿名函数

4.使用对象，调用对象的属性，我们采取对象名.属性名

这里的.我们理解为的

5.其中调用对象的属性我们还有一种方法，即是 对象名["属性名"]

6.调用对象的方法 tag  对象名.方法名() 这里记住千万别忘记添加小括号

###### 2.利用new object创建对象

```js
        var xzh = new Object()
        xzh.name = "徐子豪"
        xzh.age = 20
        xzh.sex = "男"
        xzh.tag = function () {
            console.log("我都不想骂你");
        }
        xzh.tag()
```

注意：

1.我们是利用等号=，赋值的方法，添加对象的属性和方法

2.每个属性和方法之间用分号结束

###### 3.利用构造函数创建对象

#### 变量，属性，函数，方法的区别

##### 变量

单独声明并赋值，使用的时候直接写变量名，且单独存在

##### 属性

在对象里面的不需要声明，使用的时候必须是 对象.属性

##### 函数

函数是单独声明，并且调用的函数名()单独存在的

##### 方法

在对象里面调用的时候是 对象.方法()

#### 构造函数

##### 为什么要构造函数

我们一次创建一个对象，里面有很多的属性和方法是大量相同的，我们只能复制，因此我们可以利用函数的方法重复这些相同的代码，我们就把这个函数成为构造函数

##### 构造函数和函数的区别

这个构造函数，和函数是不一样的，里面封装的普通代码，而是对象，构造函数，就是把我们对象里面的一些相同的属性和方法抽象出来封装到函数里面

##### 构造函数语法格式

```js
 function 构造函数名() {
            this.属性 = 值;
            this.方法 = function () {
            }
        }
        new 构造函数名();
```

##### 示例

```js
        function Star(username, age, sex) {
            this.name = username
            this.age = age
            this.sex = sex
        }
        var ldh = new Star("刘德华", 18, "男");
        console.log(ldh.name);
        console.log(ldh.age);
        console.log(ldh['sex']);
```

我们需要批量使用对象只需要var 一个对象名，然后new一下构造函数名就可以了

##### 构造函数的注意

1.构造函数名字的首字母要大写

2.我们构造函数不需要return就可以返回结果

3.我们调用构造函数，必须使用new

4.我们只要new star()调用函数就创建一个对象 ldh {}

5.我们的属性和方法前面必须添加this

#### 构造函数与对象

##### 构造函数

如stars(),抽象了对象的公共部分，封装到了函数里面，它泛指某一大类

##### 创建对象

如new starsz(),特指某一个，通过new关键字创建对象的过程我们也称为对象的实例化

#### 遍历对象

##### for in

我们主要通过 for in遍历我们的对象

语法格式

```js
for (变量 in 对象名) {
    
        }
```

##### 示例

```js
        var obj = {
            name: "彭于晏",
            age: 18,
            sex: "男"
        }
        for (var n in obj) {
  console.log(n);   //输出变量n，是遍历对象obj的所有属性名
  console.log(obj[n]);  //对象名ob[变量]，.可以遍历obj的所有属性
        }
```

##### 注意

我们使用for in里面的变量，我们喜欢写k或者key来定义此变量

#### 内置对象

分为三种：自定义对象，内置对象，浏览器对象

其中前两种对象是js基础内容，属于ECMAscript；第三个浏览器对象属于我们js独有的，我们js API讲解

##### 优点

帮助我们快速开发

#### Math对象

不是一个构造函数，所以我们不需要new来调用，而是直接使用里面的属性和方法即可

```js
        console.log(Math.max(16, 65));  // 65
        console.log(Math.max("小赵", 66, 69, 32));// NaN
        console.log(Math.PI); // 3.141592653589793
        console.log(Math.max()); //  - Infinity
```

##### Math.floor

floor是地板的意思，此方法是往小了取值，所以是取最小值

##### Math.ceil

ceil是天花板的意思，此方法是往大了取值，所以是取最大值

##### Math.round

四舍五入，注意这里 .5是具有特殊性的，.5会偏向大的取

也就是-2.5，会往大的取所以是-2

```js
        console.log(Math.floor(8.1));//8
        console.log(Math.ceil(8.9));//9
        console.log(Math.round(1.5));// 2 
        console.log(Math.round(-1.5));// -1
```

#### 猜数字游戏

##### 思路

1.利用while循环或者for循环

2.利用取随机整数的内置对象math

```js
      function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
        }
```

##### 游戏源码

```js
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
        }
        // 猜数字游戏
        var csz = getRandomIntInclusive(1, 50)
        for (var i = 0; i < 3; i++) {
            var number = prompt("快来猜数字吧！这个数字是1-50之间的数字")
            if (number > csz) {
                alert("亲爱的，你猜的数字太大了哦！")
            } else if (number < csz) {
                alert("亲爱的，你猜的数字太小了哦！")
            } else if (number = csz) {
                alert("你也太帅了吧！居然猜对了")
                break
            } else {
                break
            }
        }
        alert("亲爱的，次数已经上限了哦！")
```

#### Date对象

##### 1.必须实例化

Date对象跟Math对象不一样，Data需要new创建才可以

##### 2.Date构造函数的参数

如果括号里面有时间，就返回参数里面的时间。

例如日期格式为字符串 '2020-5-17'

##### 3.建议使用字符串类型书写参数

例如 '2020-5-20 8:0:0'

如果使用 2020,5,20 这样返回的是六月，而不是五月

往往会比普通的月份要大，所以建议使用字符串类型的参数格式

#### 格式化时间格式

我们每次在调用这个内置对象 Date的时候，我们都需要new一下，也就是对象实例化

```js
var date = new Date() //我们首先需要new Date 将这个对象实例化
```

##### getMonth()

我们在利用此方法获取月份的时候，都需要月份+1

因为moth是 0-11 月，比实际月份少一个月

```js
var moth = date.getMonth() + 1
```

##### getDay()

我们获取星期的时候只返回阿拉伯数字0-6，在外国，每个星期的第一天是星期日，所以0就是星期日

为了符合中国人习惯，我们需要var 一个数组储存周一到周日这些数据

```js
var arr = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
```

所以，这样就可以获取 arr[date.getDay()]

```js
arr[date.getDay()]
```

##### 完整源码

```js
     // 格式化时间格式
     // 写出 2022年5月17日 星期二
        var date = new Date()
     //我们首先需要new Date 将这个对象实例化
        var year = date.getFullYear()
        var moth = date.getMonth() + 1
        var dates = date.getDate()
        var arr = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
        var day = date.getDay()
        console.log("今天是" + year + "年" + moth + "月" + dates + "日 " + arr[date.getDay()]);
```

##### 格式化时间日期

获取系统的时间函数 返回格式是 14: 21: 08

```js
        function gettime() {
            var time = new Date
            var h = time.getHours()
            h = h < 10 ? "0" + h : h
            var m = time.getMinutes()
            m = m < 10 ? "0" + m : m
            var s = time.getSeconds()
            s = s < 10 ? "0" + s : s
            return h + ":" + m + ":" + s
        }
        console.log(gettime());
```

因为如果只显示3，不太美观，需要在s小于10的时候给它加个0在前面

会美观很多，此方法可以使用三元表达式完成

```js
s = s < 10 ? "0" + s : s
```

#### 获得Date总的毫秒数

此获得不是当前时间的毫秒数，而是距离1970.1.1的总毫秒数

因为时间在不断流失，所以每一段数字都不一样，我们称为时间戳

##### 1.通过 valueOF() gettime()

```js
        var time = new Date()
        console.log(time.valueOf());
        console.log(time.getTime());
```

##### 2.简单的写法

此写法比较常用

```js
        var time1 = +new Date()
        console.log(time1);
```

##### 3.h5的新写法

```js
console.log(Date.now());
```

#### 倒计时写法

##### 思路

主要利用时间戳，利用new Date()获取当前的时间

在()里定一个变量用于获取用户输入的时间我们times

```js
var nowtime = +new Date() //获取当前的时间
var inputtime = +new Date(times) //获取用户输入的时间
```

将未来时间减去当前时间，并结果除以1000，获取距离倒计时还有多少秒

```js
var result = (inputtime - nowtime) / 1000 
//获取距离用户输入时间还有多少秒
```

利用公式将数据转换一下

```js
   // 将数据转换为正确格式
            var d = parseInt(result / 60 / 60 / 24)//天
            d = d < 10 ? "0" + d : d
            var h = parseInt(result / 60 / 60 % 24)
            h = h < 10 ? "0" + h : h
            var m = parseInt(result / 60 % 60)
            m = m < 10 ? "0" + m : m
            var s = parseInt(result % 60)
            s = s < 10 ? "0" + s : s
            return d + "天" + h + "时" + m + "分" + s + "秒"
```

##### 完整源码

```js
        // 写一个倒计时页面 用现在的时间戳减去将来的时间戳00000
        function countdown(times) {
            var nowtime = +new Date() //获取当前的时间
            var inputtime = +new Date(times) //获取用户输入的时间
            var result = (inputtime - nowtime) / 1000 //获取距离用户输入时间还有多少秒
            // 将数据转换为正确格式
            var d = parseInt(result / 60 / 60 / 24)//天
            d = d < 10 ? "0" + d : d
            var h = parseInt(result / 60 / 60 % 24)
            h = h < 10 ? "0" + h : h
            var m = parseInt(result / 60 % 60)
            m = m < 10 ? "0" + m : m
            var s = parseInt(result % 60)
            s = s < 10 ? "0" + s : s
            return d + "天" + h + "时" + m + "分" + s + "秒"
        }
        console.log(countdown("2022-5-18 20:00:00"));
```

#### 创建数组的两种方式

##### 1.利用数组字面量

```js
var arr = [1,2,3]
```

##### 2.利用new Array()

###### 1.创建一个空数组

```js
var arr1 = new Array()
```

###### 2.创建一个两个元素的空数组

```js
var arr2 = new Array(2)
```

###### 3.创建一个数组包含元素1,2,3

```js
var arr3 = new Array(1, 2, 3)
```

#### 检测是否为数组

##### instanceof 运算符 

他可以用来检测是否为数组

```js
     var arr1 = new Array()
     console.log(arr1 instanceof Array);
```

##### Array.isArray(参数)

只在ie9以上才支持，优先级优于instanceof

#### 添加删除数组元素

##### 1.push()

在我们的数组的末尾，添加一个或者多个数组元素

1.1 push 是可以给数组追加新的元素

1.2 push 里面的参数可以直接写，数组元素就可以了

1.3 push 完毕之后，返回的结果是 新数组的长度

1.4 原数组也会发生变化

##### 2.unshift()

2.1 push 是可以给数组追加新的元素

2.2 push 里面的参数可以直接写，数组元素就可以了

2.3 push 完毕之后，返回的结果是 新数组的长度

2.4 原数组也会发生变化

##### 3.pop()

3.1 pop是可以删除数组的最后一个元素 记住一次只能删除一个元素

3.2 pop() 没有参数

3.3 pop完毕之后，返回的结果是 删除的那个元素

3.4 原数组也会发生变化

##### 4.shift()

4.1 shift是可以删除数组的最开始一个元素 记住一次只能删除一个元素

4.2 shift() 没有参数

4.3 shift完毕之后，返回的结果是 删除的那个元素

4.4 原数组也会发生变化

#### 筛选数组 新写法

利用push()

```js
        var arr = [1500, 1900, 2000, 1800, 1700]
        console.log(arr.length);
        var newarr = []
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < 2000) {
                newarr.push(arr[i])
            }
        }
        console.log(newarr)
```

#### 翻转数组

##### 变量.reverse()

```js
  var arr = [1500, 1900, 2000, 1800, 1700]
  arr.reverse()
  console.log(arr);
```

##### 变量.sort()

```js
var arr = [6, 3, 5, 4, 1, 2];
arr.sort();
console.log(arr);
```

但是bug，并不能完美处理数组正常排序

```js
var arr = [2, 25, 9, 32, 35, 98];
        arr.sort();
        console.log(arr);
```

返回的值为

```js
[2, 25, 32, 35, 9, 98]
0: 2
1: 25
2: 32
3: 35
4: 9
5: 98
length: 6
```

需要使用以下方法

```js
变量.sort(function (a, b) {
            return a - b //这里是升序排列
            // return b - a //这里是降序排列
        });
```

##### 示例

```js
 var arr = [2, 25, 9, 32, 35, 98];
        arr.sort(function (a, b) {
            return a - b //这里是升序排列
            // return b - a //这里是降序排列
        });
        console.log(arr);
```

#### 查找数组的索引号

##### 变量.indexOf()

查找数组的元素的索引号，如果查找不到该元素，返回-1

```js
var arr = [2, 25, 9, 32, 35];
        arr.indexOf(98)
        console.log(arr.indexOf(98));
```

##### 变量.lastIndexOf()

查找元素的索引号，这个和indexof的区别是，他是从后往前查找索引号，如果没有该元素，直接返回-1

```js
var arr = [2, 25, 9, 32, 35, 98];
        arr.lastIndexOf(98)
        console.log(arr.indexOf(98));
```

#### 数组去重 新写法

首先遍历一下旧数组，然后if判断在新数组里，indexof的索引是否为-1，如果是就将旧数组的元素push到新数组即可 newarr.push(arr[i])

```js
  var arr = ['blue', 'red', 'blue', 'red', 'blue']
        var newarr = []
        for (var i = 0; i < arr.length; i++) {
            if (newarr.indexOf(arr[i]) === -1) {
                newarr.push(arr[i])
            }
        }
        console.log(newarr);
```

#### 数组转为字符串

##### 变量.toString()

```js
var arr = [1, 2, 3, 5]
        console.log(arr.toString());
```

##### 变量.join()

```js
var arr = [1, 2, 3, 5]
        console.log(arr.join("_"));
```

##### 区别

两个功能都一样，但是第二个可以给字符串加分隔符

#### 字符串对象

##### 变量.indexOf()

str.indexOf("要查找的字符",起始的位置)

假如索引号是3，就从3位置开始查找字符串

#### 练习 数组查找索引和执行次数

```js
var arr = ['red', 'blue', 'red', 'green', 'pink', 'red']
```

查找red出现的次数和索引号，打印在控制台

```js
        var arr = ['red', 'blue', 'red', 'green', 'pink', 'red']
        var found = arr.indexOf('red')
        var number = 0
        var newarr = []
        while (found !== -1) {
            newarr.push(found)
            found = arr.indexOf('red', found + 1)
            number++
        }
        console.log(newarr);
        console.log("这个red一共出现" + number + "次")
```

#### 根据位置返回字符

##### 1.charAt(index) 根据位置返回字符

##### 2.charCodeAt(index) 根据位置返回对应的ASCII值

```js
var str = "imzql"
        console.log(str.charCodeAt(2));
```

##### 3.str[index] 根据索引返回对应的字符

#### 统计出现最多次数的字符

```js
        var str = 'helloworld'
        var obj = {}
        for (var i = 0; i < str.length; i++) {
            var n = str.charAt(i) //n是字符串的每一个字符
            if (obj[n]) {
                obj[n]++
            } else {
                obj[n] = 1
            }
        }
        console.log(obj);
        var number = 0
        var ch = ""
        for (var k in obj) {
            if (obj[k] > number) {
                number = obj[k]
                ch = k
            }
        }
        console.log("出现最多的次数的字母是" + ch);
        console.log(ch + "出现的次数是" + number);
```

#### 字符串操作方法 重点

![微信图片_20220522123328](https://img.usj.cc/i/2022/05/22/6289e11d1c50b.png)

##### 1.concat()

在字符串后面拼接字符

```js
var str = "vaica"
        console.log(str.concat("111111"));
```

##### 2.substr()

取索引号位置的，长度的，字符

```js
var str = "若不是生活所迫"
        console.log(str.substr(3, 2));
```

##### 3.slice()

在对应的索引号截取所对应的字符串

```js
       var str = "若不是生活所迫"
        console.log(str.slice(3, 5));
```

##### 4.substring()

截取字符

##### 5.replace()

```js
 var str = "vaica"
        console.log(str.replace('v', 'f'));
```

##### 6.split()

将字符串转换为数组

```js
 var str = "red, blue, red, green, pink, red"
        console.log(str.split(','));
```

#### 作业练习

![微信图片_20220522143529](https://img.usj.cc/i/2022/05/22/6289e103357fb.png)

##### 解答

```js
   var str = 'abaasdffggghhjjkkgfddsssss3444343'
        console.log(str.length);
        console.log(str.charAt(0));
        console.log(str.charAt(3));
        console.log(str.charAt(5));
        console.log(str.charAt(9));
        console.log(str.indexOf('i'));
        console.log(str.indexOf('c'));
        console.log(str.indexOf('b'));
        console.log(str.replace('g', '22'));
        console.log(str.replace('ss', 'b'));
        console.log(str.slice(1, 5));
        var obj = {}
        for (var i = 0; i < str.length; i++) {
            var n = str.charAt(i) //n是字符串的每一个字符
            if (obj[n]) {
                obj[n]++
            } else {
                obj[n] = 1
            }
        }
        console.log(obj);
        var number = 0
        var ch = ""
        for (var k in obj) {
            if (obj[k] > number) {
                number = obj[k]
                ch = k
            }
        }
        console.log("出现最多的次数的字母是" + ch);
        console.log(ch + "出现的次数是" + number);
```

#### 简单类型与复杂类型

##### 知识点

##### ![微信图片_20220522144451](https://img.usj.cc/i/2022/05/22/6289e0f5bc070.png)

##### 技巧

![微信图片_20220522144624](https://img.usj.cc/i/2022/05/22/6289e0e4e7536.png)

#### 堆和栈

![image-20220522145218772](https://img.usj.cc/i/2022/05/22/6289dda1f3fb8.png)

1.简单数据类型 是存放在栈里面 里面直接开辟一个框架存放的是值

2.复杂数据类型 首先在栈里面存放地址 十六进制表示 然后这个地址指向堆里面的数据
