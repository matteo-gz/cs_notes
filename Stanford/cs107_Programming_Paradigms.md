# Programming Paradigms (CS107)

> <https://www.youtube.com/playlist?list=PLpZDsLjaLGrFJP8tjkJ3J_BK2hxwmE_Q7>

## 1. Lecture 1 | Programming Paradigms (Stanford)

### C语言

- C语言是过程式编程范型的代表,也称为命令式编程范型。
- 主函数可以看作是五个顶层函数的大纲,每个函数内可能还有子函数。
- 程序以过程(function)为单位,使用过程的返回值和参数进行操作,通过引用和指针来共享和更新数据。
- 语句以动词为主,强调过程调用。

### C++语言

- C++加入了面向对象的概念,使首要关注点转为数据对象。
- 语句以对象为主,对象调用过程而非过程调用对象。
- 虽然语法不同,但编译后仍然是零和一组成的机器码。

### 汇编语言

- 用于解释高级语言如C/C++如何编译为对象文件和可执行文件。
- 通过示例展示变量、函数、对象等的汇编表现形式,掌握编译原理。

### 并发编程

- 一个程序中同时运行多个函数,实现并发执行。
- 实际上是快速轮流执行各个函数,产生视觉并发效果。
- 需要通过一定机制保证共享资源的原子性和一致性。

### Scheme语言

- 函数式编程范型的代表语言。
- 依赖函数的返回值而非副作用来推进程序。
- 禁止函数产生数据更新的副作用。

## 2. Lecture 2 | Programming Paradigms (Stanford)

### 二进制系统

- 一个bit可以表示0和1两个值
- 多个bit合成一组可以表示更多值
  - 8bit表示2^8=256个值,即可以表示ASCII码表中的字符
  - 16bit表示2^16=65536个值
- 计算机内存中以二进制形式存储数值
  - 例如字母A的ASCII码为65,在内存中表示为01000000

### 数据类型

- 布尔型(bool):通常占1bit,表示true和false
- 字符型(char):通常占1字节(8bit)
- 短整型(short):占2字节,可以表示0到2^16-1之间的整数
- 整型(int):通常占4字节,可以表示更大范围的整数
- 浮点型(float):占4字节,尝试用有限字节表示浮点数
- 双浮点型(double):占8字节,表示更高精度的浮点数

### 内存表示

- 各数据类型在内存中的存储形式:
  - 字符型:1个字节
  - 短整型:2个连续字节
  - 整型:4个连续字节
- 数值在内存中的二进制表示法与其十进制值对应
- 短整型的最高位可用于表示数值的正负号

### 总结

通过了解基本的数据类型和它们在内存中的存储表示方法,可以更好地编程和理解计算机内部运行原理。这对C/C++程序员尤其重要。

## 3. Lecture 3 | Programming Paradigms (Stanford)

### 数组和结构体

- 数组使用方括号[]表示,是同类型元素的集合,使用下标访问元素

- 结构体使用struct定义一个自定义的数据类型,包含不同类型的成员。结构体变量分配的内存,等于其所有成员大小之和

  - 例如:

    ```c
    struct fraction {
      int Num;
      int Den;
    };

   ````

  - 结构体变量会连续打包所有成员占用的内存,第一个成员的地址等于整个结构体的地址

  - 可以使用.访问结构体成员

  - 取结构体指针,指针指向整个结构体,通过->访问成员

### 指针与引用

- 指针使用*取地址操作符获取变量地址,&取值操作符解引用指针获取实际值

  - 例如:

    ```c
    int a = 10;
    int *p = &a; // p指向a的地址
    ```

- 引用是另一个名字绑定到同一个变量。初始化后同名意思

  - 例如:

    ```c
    int a = 10;
    int &b = a; // b和a引用同一个变量
    ```

- 取地址与引用可以作用在结构体上,获取结构体整体或成员的地址

- 可以通过移位操作符*和->从指针访问结构体成员

- 直接取值与引用值没有区别,都获得相同的实际值

- 不当移动内存会导致非法访问和崩溃问题

### 数组与结构体间的转换

- 可以将结构体强制转换成其他类型来访问内存

  - 例如将结构体转换成字符型取整个结构体的地址

    ```c
    struct Test *p = &test;
    char *pc = (char*)p;
    ```

- 也可以通过指针arithmatic移动指针内存地址来解引用不同类型

  - 例如通过字符串指针偏移解引用结构体

    ```c
    struct Test *p = &test;
    char *pc = (char*)p;
    struct Test *pt = (struct Test*)(pc + sizeof(int));
    ```

- 这类操作存在安全隐患,只有在确定内存布局情况下才可以这样做

- 一般通过结构体和数组的定义来正确访问他们之间的转换

## 4. Lecture 4 | Programming Paradigms (Stanford)

### 函数与指针

- `swap` 函数通过指针交换两个整数的值。指针会存储整数的地址,而不关心整数本身是什么。
- `swap` 函数只关心交换两个数的四字节二进制表示,不管它们是整数还是其他类型。

### 泛型swap函数

- 为了支持任意类型和大小,`swap` 函数需要添加第三个参数`size`来明确表示需要交换对象的字节数。
- 用`void*`定义泛型指针可以接受任意类型的地址,但无法进行解引用操作,因为不知道对象的字节大小。
- 函数中利用类型无关的`memcpy`函数拷贝内存,实现泛型对象的字节级别交换。

### 模板实现泛型函数

- C++可以使用模板实现泛型`swap`函数,可以推断类型而无需显式声明大小。
- 模板函数通过隐式参数推断出对象类型和大小,内部机制与显式声明大小类似,依然通过拷贝内存实现泛型对象交换。

### 总结

- 通过指针和内存操作实现函数的参数传递与值赋值。
- 泛型编程需要考虑类型信息的传递,让函数可以处理不同类型的参数。
- C使用显式指定大小实现泛型,C++使用模板实现类型推断实现泛型。

## 5. Lecture 5 | Programming Paradigms (Stanford)

### 介绍

这节课主要讲解函数调用机制和泛型实现,详细介绍了C语言中的泛型实现方法。

### 线性搜索算法实现

讲师先实现了一个类型特定的线性搜索算法,然后改进为通用版本,可以处理任何数据类型。

具体实现过程如下:

1. 定义函数 prototypes
2. 使用 void* 指针表示泛型
3. 需要传入元素大小和比较函数
4. 在循环内计算每个元素地址
5. 使用类型回调函数做比较

实现难点在于:

- void* 无法进行指针运算,需要临时强制类型转换
- 比较函数需要符合特定原型

它利用回调函数的方式,将类型相关操作交给函数调用者实现,使算法本身保持类型无关。

### 实例化为整数搜索

给出具体实例,搜索整数数组中的元素。

需要:

1. 定义键值存储整数
2. 设置元素地址和大小
3. 定义整数比较函数
4. 调用泛型搜索函数

实现过程利用强制类型转换方便操作,但保持函数原型一致。

### 字符串搜索实例

介绍处理字符串数组更复杂,需要考虑:

- 元素为字符指针数组
- 字符串以null结尾
- 指针运算代替数值运算

总体思路相同,但细节上需要搞清空间布局关系。

它说明泛型设计能很好解耦算法本身,但实际应用难度也跟随增加。

## 6. Lecture 6 | Programming Paradigms (Stanford)

### 介绍

这节课讨论了在纯C语言下实现一个整型栈的具体做法。

### 栈接口

栈定义在头文件中,暴露整个结构体。函数包括:

- stack_new: 初始化栈结构
- stack_push: 往栈里推入一个整型元素
- stack_pop: 从栈里弹出一个整型元素
- stack_dispose: 释放栈占用的内存

### 栈初始化

stack_new函数首先将长度length设置为0,表示空栈。
然后分配内存给长度为4的数组来存储元素,使用malloc函数从堆中获取内存。
利用assert宏检查malloc是否成功。

### 栈推入

stack_push首先检查当前长度是否等于已分配长度,若否直接在下一个位置插入元素即可。
若已满,需要重新分配内存:

1. 用realloc函数对原有内存进行重新分配,参数为指针和需要的字节数
2. 实际分配的字节数为需求乘以元素大小
3. realloc可能在原内存后继续扩展,也可能移动到另一块更大的内存返回
4. 分配成功后长度加1

### 栈弹出

stack_pop直接从数组尾出弹出顶部元素,同时长度减1。

### 栈释放

stack_dispose用free释放原malloc分配的内存,但不释放结构体本身,因为它可能没有动态分配。

### 小结

通过对整型栈的实现,了解了C语言进行内存管理的一些基本方法,如malloc、realloc、free等函数。这也为将来对更通用的数据结构设计奠定了基础。

## 7. Lecture 7 | Programming Paradigms (Stanford)

### 基本概念

- 函数栈new用于申请内存并初始化数据结构,需要传入内存大小和释放函数指针
- 释放函数用来在释放内存前清理动态内存
- 当函数pop出数据时会将数据复制到本地变量,同时栈深度减1
- 函数dispose会检查释放函数指针,如果不为空就循环调用释放每个元素

### 字符串栈示例

1. 声明字符串数组friends作为例子数据
2. 声明字符串栈对象string_stack
3. 使用for循环把friends的数据push到字符串栈中
4. 再使用for循环从栈中pop数据到本地变量名中打印输出
5. 最后调用dispose释放字符串栈内存

### 关键点

- push操作会将数据地址复制到栈中,实现深拷贝所有权转移
- pop操作会将最近的数据地址复制回本地变量
- dispose通过之前传入的释放函数指针循环清理每个元素
- 释放函数需要根据数据类型重新解释void*进行清理
- 若元素无需清理,则传入空函数指针

### 总结

函数栈通过新建、入栈、出栈操作实现类似数组的功能,同时支持元素释放功能。它将所有权管理交给了底层数据结构,让上层代码更简单高效地使用和释放资源。

## 8. Lecture 8 | Programming Paradigms (Stanford)

### 内存管理

操作系统会为每个进程分配一块内存区域,称为堆内存。堆内存的起始地址和结束地址会告诉malloc、free和realloc库。

malloc函数会从堆内存中分配内存块,并返回一个指针。实际分配的内存比请求的稍大,留有预留空间记录内存块大小。这样free函数就能知道需要释放的内存大小。

内存块开始的几个字节作为头部信息储存内存块真实大小。因此返回给用户的指针其实指向内存块内容区域,用户无法访问头部信息。

free函数会通过指针回溯到头部,读取真实大小信息,正确释放内存。如果指针错误,free可能会误释放无效区域甚至崩溃。

malloc优先从刚释放的小内存块处分配,避免内部碎片。为提高效率,也会将堆内存划分为不同尺寸区域分配。

### 数组越界

数组下标超出范围访问元素,可能会修改其他变量值或造成程序异常。

最常见的数组越界发生在数组末尾,比如for循环条件写成i<=length而不是i<length。

数组下标小于0也可能触发越界。这时访问的数据可能是其他变量。

### 内存泄漏

如果手动释放动态分配内存后忘记,或者指针错误传给free,就可能导致内存泄漏。随着程序运行,未释放的内存将越积累越多。

一个常见原因是分配结构体数组,使用部分元素后只释放部分内存。正确做法应该一次性释放整个数组。

### 常见问题

- 不能假设malloc分配的内存刚好等于请求大小。应该只管内存是否足够使用。

- 不能将动态分配内存的指针直接传给free。必须确保指针来源于之前的malloc等调用。

- 数组下标访问必须在合法范围内。不能假设某个特定值一定安全。

- 动态内存必须在不再使用后及时释放,避免内存泄漏。

## 9. Lecture 9 | Programming Paradigms (Stanford)

### 存储空间(Stack Segment)

- 函数调用产生的变量都放在称为"栈段"(Stack Segment)的内存区域中。
- 局部变量被打包成一个"调用记录"(Activation Record),每个变量占据固定的内存位置。
- 调用记录的起始地址存储在寄存器(如r1)中。寄存器可以访问记录中每个变量的偏移地址。

### 汇编语言指令

- load指令从内存载入值到寄存器中。
- store指令将寄存器的值写入内存。
- ALU操作在寄存器之间进行计算。

### 代码翻译示例

```c
int i;
int j;
i = 10;
j = i + 7;
j++;
```

对应汇编代码:

1. store指令将10写入i的内存位置
2. load指令将i的值读入寄存器r2
3. ALU操作在r2上加7,结果存入r3
4. store指令将r3的值写入j的内存位置
5. 重复1-4,对j++进行汇编

### 其他说明

- 汇编默认处理4字节。可处理其他数据类型但效率可能下降。
- load-operate-store顺序保证代码通用性,不依赖具体值。
- 不可将load和store合成一个指令,且不支持内存地址的ALU操作。

### 短整型示例

以short类型s1, s2为例,说明汇编处理其他数据类型。

- load将200读入r2
- store只写入s1的前2字节,与C/C++语义一致。

## Lecture 10 | Programming Paradigms (Stanford

### 活动记录布局

函数调用会产生活动记录,里面包含以下内容:

- 参数:按从高地址到低地址的顺序排列,第一个参数地址最低。
- 本地变量:和参数相邻,按定义顺序从高地址到低地址排列。
- 返回地址:记录调用位置的程序计数器值,当函数返回时使用。

### 活动记录创建过程

当主函数调用其他函数时,会执行以下步骤创建活动记录:

1. 为本地变量分配内存,将堆栈指针SP下移相应字节数。

2. 将参数值复制到活动记录参数部分。

3. 保存返回地址,也就是主函数将跳转到的下一次指令地址。

4. 执行函数体代码。

5. 函数返回前将堆栈指针SP重新上移还原为调用前值,释放本地变量内存。

6. 返回到 saved PC 地址,即主函数将跳转到的下一条指令继续执行。

### 范例函数活动记录

如 int foo(int bar, int *baz) 函数:

- 参数 bar 地址最低,baz 地址高于 bar
- 本地变量 snake、y 顺序排列其上
- 返回地址区域记录调用位置
- 参数和本地变量统一叠加生成完整活动记录

调用 foo 会执行如下步骤:

1. 为 foo 分配参数/变量内存,将 SP 下移
2. 将实参值赋值到参数位置
3. 跳转执行 foo 函数体
4. 函数返回将 SP 上移还原
5. 返回到调用位置继续执行

### 讨论小结

通过具体例子讲解了函数调用时活动记录的布局规则和创建过程,帮助理解函数调用堆栈的工作原理。

## 11. Lecture 11 | Programming Paradigms (Stanford)

### 函数调用和返回工作原理

上次讲授函数调用和返回时,给出了两个例子。这次将给出一个更简单的例子,从C代码生成到汇编代码,说明两者最终在汇编层面的相似性。

#### 例子一:无参数和返回的foo函数

定义一个无参数和返回的foo函数。在函数内部声明两个局部变量int x=11, int y=17,并调用swap函数交换两个变量的值。

函数调用时,栈指针会下移8字节为局部变量分配空间。函数内局部变量的地址,分别是SP+0 和 SP+4。

通过 evaluating &x 和 &y,可以得到它们的地址,分别存入寄存器R1和R2。调用swap函数时,将R1和R2的值放在栈框上为参数传递。

swap函数返回后,会恢复栈指针,完成整个调用过程。

#### 例子二:无参数交换函数swap

swap函数定义为void swap(int*a, int* b)。

进入函数时,会进一步下移8字节为一个临时变量temp分配空间。此时a和b的地址分别是SP+8 和 SP+12。

将a和b的值(实际是它们地址)分别加载到寄存器R1和R2。将R1处的值赋给temp,将R2处的值赋给*a,完成值交换。

最后恢复栈指针,返回调用点,完成整个交换过程。

### C和C++代码编译到汇编的相似性

以上例子演示了基于值和引用传参的swap函数在C和C++中,其汇编代码是完全相同的。

两者在编译阶段最终都会生成相同的底层汇编指令,实现相同的调用和返回机制。这表明在底层,C和C++的语法差异不会影响程序的执行。

## 12. Lecture 12 | Programming Paradigms (Stanford)

### 预处理与编译与链接

预处理主要是替换预处理指令`#define`定义的宏,这仅仅是简单地搜索并替换文本,不做编译检查。

编译器会检查语法及语义,转变源代码成目标代码。

链接器会链接多个目标文件成可执行文件。

### C预处理器

预处理器使用`#define`可以给标识起名,以后用名代替原文本,如定义`WIDTH`和`HEIGHT`后,源代码中wherever出现`WIDTH`和`HEIGHT`会替换成相应数字。

`#define`也可以带参数,像函数一样调用,这叫宏,如定义`max(a,b)`后再用就会替换参数。

宏替换只在预处理阶段进行,不考虑类型,后期可能因类型问题报错。

宏调用比函数调用效率高,函数调用开销大,而宏直接文本替换。

### 程序编译流程

1. 预处理:使用宏进行文本替换

2. 编译:检查语法语义,转成目标代码

3. 链接:链接目标文件成可执行文件

这三步常常被合成一个"编译"过程,但它们职责不同。如果出错需要区分是哪一步出的问题。

### 常用C标准宏

`<assert.h>`头文件定义的`assert`宏用来检查条件是否成立,不成立就abort。

`<stddef.h>`头文件定义了`NULL`等标准宏。

这些标准宏都只在预处理阶段被替换成相应值,用来简化书写和读ability。

### 习题解答5及考试准备

提供习题解答5和测试考试练习内容,以帮助学习总结课堂知识,准备考核。考试包含程序生成部分内容,需要确保理解相关知识点。

可以携带任何学习资料参考,但考核范围限于课程讲义和习题内容。

## 13. Lecture 13 | Programming Paradigms (Stanford)

### 编译和连接

老师使用一个简单的程序来演示GCC编译器如何工作。

这个程序申请并释放400字节的内存,只包含`malloc()`、`free()`和`printf()`这几个系统调用。

把这个程序用GCC编译会生成一个object文件(.o文件)。默认情况下,即使只有一个.o文件,GCC也会自动进行链接。

链接实际上是将这个.o文件与标准库中的其他对象文件合并为一个可执行文件。标准库里包含了`printf()`、`malloc()`等函数的对象代码。

链接器会检查每个函数调用,并把对应的对象代码连接进可执行文件,以便程序运行时可以跳转到这些函数调用处。

### 不包含头文件对编译的影响

老师注释掉了`#include <stdio.h>`这行,观察没有包含头文件的影响。

对一些编译器来说,这可能会报错,因为没有`printf()`的原型信息。但GCC会自动推断`printf()`的原型。

它会假设`printf()`以一个字符串作为参数,返回类型为`int`。这正好与`printf()`在标准库中的真实定义一致。

因此程序依然可以成功编译,但会有未定义函数原型的警告。生成的对象文件内容也不会有任何变化。

头文件只包含数据结构定义和原型声明,不产生任何代码。它主要是让编译器了解语法正确性。

所以即使没有包含头文件,链接过程也不会出现问题。标准库中的对象文件依然可以提供`printf()`的实现代码。

### 考试安排

中期考试安排在一周后的周三晚上,地点在Hewlett 200教室。考试时间可以在当天9点至5点任意三小时内开始。

考生可以参加这门课的一位Facebook同事在同一个教室的周五中午给的技术演讲,学习考场环境。

考试大纲来自过去三年的真题,一般每题2-4小题,答案可以较短。考试会着重检测操作符、引用等细节。

提供一个Representative练习考题和答案,建议考生亲自作答而不仅仅看答案。考后自行检查可以更有效学习。

课后将提供披萨和饮料。感兴趣的同学可以在网站上预订,以便准备食物分量。

## 14. Lecture 14 | Programming Paradigms (Stanford)

### 段落 1

本课程由斯坦福大学职业发展中心提供。

### 段落 2

讲师介绍自己今天不提供任何手册,而是要完成本课程的实践部分内容。计划今天完成。从下周起将开始讨论多线程编程,今天也将提前简要介绍。

### 段落 3

考试内容开卷,考生可携带打印的程序。考试时间为周三晚7点至10点在Hewlett 200教室进行,考试时长三小时,应足以完成考试。

### 段落 4

本课结束后在Hewlett 201教室将举办技术报告,时间为中午12点至1点。

### 段落 5

上次课程留下一个例子,但有几个学生对例子中的工作原理提出了问题。可能是因为最后五分钟讲解的过快。此例中定义了一个长度为4的整数数组,并使用一个循环变量i遍历数组,直接对数组元素赋值,但由于数组未初始化,程序将会无限递归。

### 段落 6

由于只定义了局部变量,程序在一次循环调用中创建了一个活动记录,长度为数组长度加循环变量长度。在调用函数内,将这些变量的值减去4,因而导致执行调度回溯4个字节,实际上调回到函数调用指令前,从而造成无限递归。

### 段落 7

示意另一个例子。主函数中定义但未初始化整数数组,直接调用打印数组函数打印。这时打印数组函数创建的活动记录和主函数完全重合,因而可以访问主函数中的数组,从而成功打印出元素值。这实质上利用栈式内存分配制造了“通道”,在不同函数间传递信息。

### 段落 8

更正一点,如果在函数调用之间插入其他函数如printf,将破坏上述活动记录,打印出的结果将不一致。这是因为新的函数创建不同的活动记录,覆盖掉原有记录中的数组值。

### 段落 9

给出一种应用上述技巧的场景。在中断服务例程中,需要将预处理的数据存入活动记录中,为下次中断服务做准备。这实际上利用活动记录在函数调用间的重合性,实现类似全局变量的作用。

### 段落 10

打印函数printf的原型是const char * ,后跟不定数量的任意类型参数。编译器不对参数类型做检查,只要格式字符串匹配参数个数就可以。这给printf带来很强的灵活性。

## 15. Lecture 15 | Programming Paradigms (Stanford)

### 介绍

这个课程由斯坦福大学职业发展中心提供。讲师准备了三份手册,放在黑板上,因为顺序不一致,所以用上次任务5给出的编号标注。

### 考试信息

期中考试将于周三晚上7点到10点在Hewlett 200室进行。该教室空间宽敞,考生可以轻松应对3个小时的考试时间。考试将涵盖C语言生成,但不会涉及C++相关特性,如引用、对象导向等。也不会测试预处理器、链接器和编译器知识。

### 票务代理模拟程序

原来模拟150张机票出售的程序采用顺序实现,每个代理卖完自己的票后下一个 agent 才开始工作,这不符合实际情况。为此,需要使用多线程技术,使各代理同时工作。

但是,C/C++标准线程库在不同平台上不兼容,使用复杂。因此CS107提供了一个包装层,用更简单的接口实现多线程。

它包含三个核心函数:

- thread_init(bool): 初始化多线程环境,参数决定是否打印调试信息
- thread_new(name, func, arg1, arg2...): 创建新线程执行func函数
- thread_join(): 等待所有线程完成

使用它可以实现各代理同时工作的效果:

1. 使用for循环为每个agent创建线程
2. 给线程取名,格式为"agentN"
3. 各线程执行相同的sell_tickets函数
4. sell_tickets函数体现每个agent的工作流程
5. 所有线程结束,表示工作完毕

### 票务代理函数

sell_tickets函数原型为:

void sell_tickets(int agent_id, int tickets_to_sell)

它使用while循环出售指定数量的票:

```c
while(tickets_to_sell>0) {
  printf("Agent %d sells a ticket\n", agent_id);
  tickets_to_sell--;
}
```

各线程invoke此函数体现代理工作,保证结果一致但实现并发效果。

## 16. Lecture 16 | Programming Paradigms (Stanford)

### 介绍

这次讲座由斯坦福大学专业发展中心提供。教授没有任何手写笔记,学生从周一开始有大量打印资料。这次没有作业,给予学生阶段时间从今天晚10点至周五完成之前作业。

### 考试通知

考试将在今晚7点在Hewlett 200教室进行。这是一个巨大的讲堂,位于校舍外环路边的喷泉附近。教授将在7点01分在网上提供考试资料。远程学生可以下载后自行完成,如果有问题可以联系教授。教授假设学生有能力独立完成考试,不需要监考。SCPD学生可以选择明天完成考试,并在下午5点前传真结果。

### 多线程编程

上次课讲解了第一个多线程例子,介绍了信号量用于控制共享资源的访问。信号量可以看作一个从不小于0的原子计数器。调用信号量wait时会原子地将计数器减1,如果计数器为0则阻塞。调用信号量signal时会原子地将计数器加1,可能唤醒阻塞的线程。

多个线程运行同一个函数卖票时,需要控制访问资源num_tickets的并发。函数会先调用信号量wait锁定共享变量,修改num_tickets值,执行打印等操作,最后调用signal解锁。这保证了共享变量仅有一个线程在访问。

### 信号量机制

信号量wait将计数器减1,如果为0则阻塞线程。当其他线程调用signal时,唤醒等待的线程。多个wait和signal交错执行能很好控制计数器在0和1之间来回变化,实现锁定效果。

实现上,当wait遇到计数器为0直接阻塞其运行,保存信息进入等待队列。其他线程可维持计数器状态。被唤醒线程重新获取cpu运行。

关键区域应尽量短小,仅包含共享访问代码。非关键代码如打印可以在解锁后执行。

### 问题解答

有学生问出现问题的情况是num_tickets减为0时,但实际上不止如此。如果没有锁,从初始100减少也有同步问题。

每个线程的栈框架都指向共享变量num_tickets。在不同时序,多个线程都可能同时减1操作。因此需要锁定控制访问,以避免并发冲突。

## 17. Lecture 17 | Programming Paradigms (Stanford)

### 全局资源

本课程使用了五个信号量和一个长度为五的数组来模拟五个叉子。每个信号量初始值为1,代表每个叉子的可用状态。

### 哲学家线程

每个哲学家线程都知道自己的编号,根据编号选择左右两边的叉子。其行为模式为:思考 -> 获取左右叉子 -> 进食 -> 释放叉子 -> 思考。

获取叉子通过给对应的信号量执行等待操作。释放叉子通过给对应的信号量执行发送操作。

### 避免死锁

如果同时有五个线程获取叉子,可能会导致死锁。需要添加 synchronized 区域限制同时只有两名哲学家可以进食。

使用单个信号量 minimal_allowed_to_eat,初始值设为4。每个哲学家在获取叉子前,需要等待这个信号量。这样就限制了同时最多两名哲学家在获取叉子和进食。

释放叉子后,会给这个信号量发送一个信号,通知其他线程可以进入获取叉子阶段。

### 小结

使用信号量和线程同步可以很好模拟多线程问题。为避免潜在的死锁,需要对共享资源设置合理的同步限制。本例通过单独限制同时进食哲学家的数量,避免了死锁的产生。

## 18. Lecture 18 | Programming Paradigms (Stanford)

### 项目描述

项目是模拟一家冰淇淋店的业务流程。

主要角色有:

- 10个顾客,每个顾客购买1-4个冰淇淋。
- 营业员,负责收银。
- 1个经理,负责检查冰淇淋质量。
- 根据顾客需求产生的10-40个员工,负责制作冰淇淋。

流程:

1. 顾客进入后选择购买的冰淇淋数量。
2. 产生对应的员工数量进行制作。
3. 每个员工完成后需要经理检查。
4. 经理同时只允许检查一个员工。
5. 经理检查通过后员工给顾客发货。
6. 顾客待所有冰淇淋都收到后到收银台结账。
7. 保证顾客入店顺序与结账顺序一致。

### 主函数

主函数负责:

1. 初始化全局变量如总冰淇淋数等
2. 随机产生每个顾客的冰淇淋数量
3. 启动所有线程,包括10个顾客线程、1个营业员线程和1个经理线程
4. 回收资源

### inspection结构

用于存放经理和员工之间的同步变量:

- bool pass,表示冰淇淋是否合格
- sem_t requested,经理等待员工请求inspect的信号量
- sem_t finished,员工等待inspect结束的信号量

### 功能分析

- 经理等待requested被唤醒开始inspect
- 员工完成冰淇淋后signal(requested)请求inspect
- 经理inspect后signal(finished)通知员工
- 员工等待finished复位后回复顾客

以上通过信号量来协调经理和员工的同步。

### 其他待实现

- 顾客和员工之间的同步
- 顾客和收银台的同步
- 全局变量访问控制

## Lecture 19 | Programming Paradigms (Stanford)

### 顺序与并发编程

- 顺序编程采取线性思考方式,按顺序执行每一步任务。
- 并发编程需要考虑多个任务同时执行,以及线程交互造成的死锁问题。会采取更宽泛的思考方式。

### 过程导向与面向对象编程

- 过程导向语言(如C)以函数为核心,首先关注函数名称。主函数通过调用一系列函数完成任务。
- 面向对象语言(如C++)首先声明对象,每个语句都围绕对象进行操作,如对向量V执行push_back或sort等方法。

### 函数式编程

- 函数式编程注重函数的返回值。可以将复杂任务分解为许多简单函数,通过串联这些函数来求解问题。
- 例如可以定义F、G等辅助函数,再通过调用这些函数组合求解最终结果H。

### 方案语言

- 方案语言以函数式编程为代表。它假设有许多小功能性函数,通过连接这些函数来求解问题。
- 程序给主函数提供一组数据,主函数通过内部调用其他函数,计算最终结果并返回。

### 各种编程范式的区别

- 过程导向注重过程的执行顺序,面向对象以对象为中心组织代码。
- 函数式编程强调函数之间的联系,通过组合小函数得到大函数。
- 并发编程需要考虑多个线程交互问题。
- 每个范式都有其各自的思考模式,但同一编程语言也可能支持多种范式。

## 20. Lecture 20 | Programming Paradigms (Stanford)

### 函数和递归

介绍了Scheme语言中的函数定义和递归调用。以求和问题为例,定义了sum-list函数来求列表中所有元素的和:

```scheme
(define (sum-list num-list)
  (if (null? num-list)
      0
      (+ (car num-list) (sum-list (cdr num-list)))))
```

递归调用sum-list重复地求取列表的头元素与尾列表元素之和,实现了列表元素求和的功能。

### 编译与执行时机

Scheme语言进行编译时仅进行简单的语法解析,匹配括号等,不进行类型检查。类型检查发生在运行时,当函数实际调用时如果参数类型不匹配就会报错。这与C语言在编译时进行类型检查不同。

以sum-list函数为例,即使传入一个包含字符串的非数值列表,Scheme也会尝试递归求和,只有在实际调用plus函数时如果参数类型不匹配,才会报错。这类运行时错误报告更明确。

### 斐波那契数列

使用递归定义斐波那契数列:

```scheme
(define (fib n)
  (if (or (= n 0) (= n 1))
      n
      (+ (fib (- n 1)) (fib (- n 2)))))
```

增加两个基线情况(n=0和n=1)的判断,才能正确定义该递归函数。

### if特殊形式

if不是函数,是Scheme的特殊形式。它接受一个测试表达式和两个子表达式。如果测试表达式为true,执行第一个子表达式;否则执行第二个子表达式。

### 运行时间类型检查

通过一个例子演示,Scheme在运行时才会检查子表达式类型,不会提前报错。这与编译语言不同,是一个运行时检查的特征。

## 21. Lecture 21 | Programming Paradigms (Stanford)

### 开篇信息

这次讲座由斯坦福大学职业发展中心提供。

### 本次课件内容

教授发放了本次课程和上次课程的内容笔记,并为本次作业内容提供了详细说明。

### Scheme开发环境Kawa的介绍

教授详细介绍了如何使用Kawa Scheme开发环境编写和测试代码。开发人员可以将Scheme函数定义在.scm文件中,然后使用load命令将其加载到Kawa解释器中进行测试。

### 递规排序算法的实现

上次课程教授给出了使用递归方式实现排序算法的框架,采用一个判断函数来判断两个元素的大小关系。

### 函数式编程思想

教授引入了map函数来实现元素变换操作。map函数可以将一个函数映射到列表的每个元素上,生成一个长度与原列表一致且每个元素已变换的新列表。

还以double和incr两个例子函数来演示map函数的使用。double函数将数字元素乘以2,incr函数将数字元素加1。随后教授以car和cons等函数来举例说明map函数的更广泛用法。

### 课后作业介绍

教授详细解释了本次课后作业要求,并提供了一份示例Scheme代码文件。学习者需要根据要求完成功能并通过Kawa测试。

## 22. Lecture 22 | Programming Paradigms (Stanford)

### 动态规划

这个问题可以使用动态规划来解决。动态规划是一个计算或求解一个给定问题的优化方法,它会将复杂问题分解成一些相对简单和重复的子问题。

动态规划解决这个问题需要以下步骤:

1. 确定问题的子问题。在这个问题中,每个位置i上的所有子集个数就是一个子问题。

2. 确定子问题与原问题的关系。原问题是求所有位置的子集个数之和,它可以由各个位置子问题的解得到。

3. 确定子问题的求解顺序。从位置0开始,依次求解每个位置的子问题。

4. 找出子问题的性质。子问题 exhibits optimal substructure和overlapping subproblems两个特征。

5. 记录子问题的解避免重复计算。使用一个数组记录每个位置子问题的解。

6. 反向构造原问题的解。依次累加各位置子问题解就得到原问题解。

使用动态规划,这个问题的时间复杂度可以降低到O(N)。

### 递归与回溯法

这个问题也可以使用递归与回溯法解决。

回溯法的主要思想是:

1. 使用递归来构造子集。

2. 在递归中每个位置都有两种选择,要这个元素或不要。

3. 在选择某个元素后,回溯法会把选择撤销,试其他选择。

具体实现:

1. 使用递归函数powerset先求空集。

2. 然后递归选取每个元素时,分别选择该元素与不选择。

3. 选择该元素时,用cons把它加到集合里递归求子集。

4. 不选择时,直接递归求子集。

5. 递归底部是确定所有元素选择情况后,将结果集返回。

6. 回溯法保证了组合所有的选择情况。

时间复杂度是O(2^N),因为最坏情况下需要考察所有可能的子集组合。

这种方法更清晰直观,但动态规划利用重叠子问题性质更高效。

### 将算法描述成程序

这个问题可以使用以下方案将算法描述成Scheme函数:

定义函数power-set接受集合set:

- base case:如果set为空,返回单元素集合包含空集

- 否则,使用let结合函数求解:

  1. 计算set减去第一个元素的子集ps-rest

  2. 定义匿名函数,将第一个元素加到子集前面

  3. 将ps-rest映射到匿名函数,得到包含第一个元素的子集

  4. 将两部分结果连接起来返回

关键点在于:

- 使用let避免重复计算子集

- 定义匿名函数处理子集中元素的加入

- map/append组合子集两部分得到最终结果

这种递归内定义函数的方法巧妙地利用了Scheme支持的特性,将算法实现得比较高效。

## 23. Lecture 23 | Programming Paradigms (Stanford)

### 记忆模型

计算机在执行Lisp语句时,会在内存中创建节点来表示数据结构。

比如 `(list 1 2 3)`,会创建一个头节点,指向三个元素节点1、2、3组成的链表。打印该链表的时候,会遍历这个头节点,逐个打印元素。

定义变量如 `(define seq (list 1 2))`时,会将seq与该链表对应的地址关联,这样后续调用`(car seq)`就可以获取第一个元素了。

cons操作会创建新的节点,将第一个参数放入car字段,第二个参数放入cdr字段,返回该新节点的地址。例如`(cons 4 (list 1 2 3))`会创建一个新节点,car是4,cdr是原来的(1 2 3)链表,最终输出为`(4 1 2 3)`。

Scheme中的列表可以看作由链表节点组成的DAG结构,元素的共享引用不会产生重定义问题。

### 虚拟机实现

Scheme语句都可以看作对内存结构的操作指令。比如列表操作会在内存追加或修改节点,定义会将变量与结构地址关联等。

打印功能根据节点类型决定如何展示,如遇到头节点会在前面加上括号。Scheme虚虚拟机只负责内存操作,不 care 具体的内存管理方式。

Scheme允许创建不完全列表,例如 `(cons 1 5)` 中5位单独的节点不在列表中。也支持向量和Map等其他数据结构。

### map函数

map函数可以将一个函数作用在多个列表上,生成新列表。

例如`(map car (list 1 2 3) (list 4 5 6))`会使用car函数分别作用在两个列表上,生成`(1 4)`。

我们实现的map可以支持1-n个列表,自动识别函数的参数个数。也可以映射到非列表数据类型,如映射到标量。

## 24. Lecture 24 | Programming Paradigms (Stanford)

### Python环境

Python可以在任何有Unix系统的机器上运行,在终端输入Python即可启动解释器。解释器可以与用户进行交互,显示输入的表达式结果。

### 字符串

Python使用单引号或双引号表示字符串,允许在字符串中混用单双引号。

### 整数和浮点数

Python支持整型和浮点数。

### 逻辑值

Python用true和false表示逻辑真假,需用关键字全部字母小写书写。

### 数据类型

Python是动态语言,运行时会记录每一项数据的类型信息。

### 区块结构

Python使用缩进来决定区块结构,没有使用{}或()。这是Python语法的一个吸引但也很棘手的地方。

### 脚本语言特征

Python解释器将函数定义和语句顺序执行,这给人一种随意录入的脚本感觉。

### 对象导向

Python支持面向对象编程,内置丰富的类库。许多软件采用Python进行网络服务编程。

### 函数定义

Python函数定义只需写出函数名和参数,无需指定返回类型。函数体中的语句依靠缩进进行区分。

### 映射函数

Python内置map()函数,可以对序列进行函数映射操作,与Scheme中的map功能相类似。

### 动态特性

Python在运行时会记录变量及对象的类型信息,开发者可以访问这些类型信息。

### 常见使用场景

Python适用于自动化脚本,WEB开发,科学计算和机器学习等领域。许多Internet公司也采用Python进行网络服务编程。

## 25. Lecture 25 | Programming Paradigms (Stanford)

### 字典

- 字典是Python的主要数据结构之一,实质是一个哈希表。
- 字典使用`{}`表示,键可以是任何可哈希的对象,值可以是任何类型。
- 可以用不同类型的键和值,比如整数键和字符串值。
- 字典是非常混杂和杂糅的,跟json或xml的结构类似,可以放置任何类型的数据。

### RSG例子

- 将RSG例子用字典表示语法规则:
  - 非终结符作为键,展开产生式作为值,使用列表表示
  - 例如:`'S': [[' miserable']], 'NP': ['this', 'bar']]`
- 选择产生式使用`choice()`函数从列表中随机选择一个元素
- 递归函数`expand()`来展开非终结符为终结符串
- 对产生式列表使用`map()`映射`expand()`进行展开
- 终结符直接打印

### 类和对象

- 类定义使用`class`,对象使用类实例化。
- 类属性定义在`__init__()`构造函数中,也可以在类体外定义。
- 方法使用`def`定义在类内,第一个参数 always是实例对象`self`。
- 可以从其他类继承,重写方法。
- Python支持多继承。

### 函数定义

- 使用`def`关键字定义函数
- 形式参数使用圆括号定,多个使用逗号分隔
- 函数体使用冒号和缩进定义
- 返回值使用`return`语句返回

### 对象模型

- Python对象模型非常灵活,允许自定义类的各个方面。
- 类可以classmethod或staticmethod定义不同类型的方法。
- 特殊方法例如`__str__()`可以定制类的字符串输出等行为。

### 其他

- Python支持三种编程范式:面向对象、函数式和命令式
- 内置很多有用的函数如map、filter、reduce等
- 包管理使用pip
- 测试使用unittest库

## 26. Lecture 26 | Programming Paradigms (Stanford)

### XML解析的现代方法

Python内置了处理Internet连接和XML解析的功能。他可以通过URLLib和XML.SIx包来实现XML文档的解析。

URLLib可以 analogous于F open打开一个URL地址。XML.SIx提供两个重要函数:

- make_parser(): 生成一个XML解析器对象
- content_handler: 一个内容处理器接口类,需要子类实现特定方法来处理不同标签事件

### RSS新闻摘要简单解析示例

这个Python程序将读取一个RSS源URL,提取其中所有item标签里的title,并打印到标准输出。

主要步骤:

1. 使用URLLib.urlopen打开URL,获得文件对象
2. 调用make_parser生成XML解析器对象
3. 实现 content_handler 的子类RSSHandler
4. 在RSSHandler中实现各标签事件处理方法,如打印title文本
5. 设置RSSHandler作为内容处理器传入解析器
6. 解析开始,解析器按顺序调用处理器的相应方法

这样就实现了基于内容处理器模式的XML文档流解析,解析出了所需标题元素。

与C++不同,Python天生支持面向对象和网络编程特性,为XML和Internet编程提供更简洁优雅的解决方案。

## 27. Lecture 27 | Programming Paradigms (Stanford)

### 编程范式概述

在本次讲座中,Stanford主讲老师邀请Facebook同事Sascha Rush演讲了函数式编程语言Haskell。

#### Haskell语言简介

Haskell是一种函数式编程语言,它和Lisp、Scheme属于同一语言族。Haskell强调使用函数来处理任务,而不鼓励设置变量。

Haskell源于Miranda语言,Miranda引入了惰性求值这一概念。随后研究人员合作开发了开源版的Haskell,最新版本是2003年发布的Haskell 98。

#### Haskell特点

- 类型安全。Haskell通过静态类型检查,使程序难以出现在编译后失败的情况。

- 表达력强。它提供map、sort等高阶函数来操作列表。

- 性能接近C。静态类型提高了效率。

- 具有趣味性。Haskell支持复杂的列表推导等特性,开发体验较好。

#### Fibonacci数列示例

以Fibonacci数列为例,对比了Haskell和Java实现Fibonacci函数的代码。Haskell版本比Java简洁明了很多,采用更函数式的写法。

### ML语言系列

Haskell源于ML语言系列。ML语言采用类C语法,但可以自动推断类型,开发者不必声明类型。这解决了C面临的类型安全和便利性问题。

Ocaml是ML语言的现代版本,它也很流行。将来C#和JavaScript可能会采用ML的这些思想。

### 总结

本次演讲总结了函数式编程语言Haskell的来源与特点,通过Fibonacci示例对比了它与面向对象语言Java在代码风格上的区别,并介绍了Haskell源于的ML语言系列的思想。
