# CS106B, Programming Abstraction in C++
>
> <https://www.youtube.com/playlist?list=PLoCMsyE1cvdWiqgyzwAz_uGLSHsuYZlMX>

## 1. 【Lecture 01】CS106B, 编程抽象与C++课程简介 Win 2018

### 1.1 课程介绍

这门课程是Stanford大学的CS106B课程。

本课程将在C++语言中进行编程。但不会着重学习C++语言本身,只会学习解决问题所需要的C++语法。如要深入学习C++,可以选择同时修读CS106L课程。

CS106B是为了掌握数据结构和算法知识而设计,能够解决更复杂的问题。同时,本课内容也常常出现在面试中的经典算法题。

### 1.2 其他相关课程

- CS106A是入门级编程课程,使用Java语言,适合没有编程基础的学生。

- CS106X课程难度更高,适合有丰富编程经验的学生。

- CS106L是一个单独的实验课程,专注深入学习C++语言本身。

### 1.3 教学形式

- 本课包含大礼堂式主讲课和小组讨论课。

- 小组讨论课由学长学姐们任教,每周50分钟,10-12人一组,学习解决问题。

- 主讲课不强制出勤,但小组课出勤将获得额外分数。

- 课堂提供录播供错过课的学生补习。录音质量一般,只能看到老师屏幕。

### 1.4 教师信息

教师Marta是一名女老师,在斯坦福任教从2013年开始。她将在本学期生子,可能请助教代课。

她养有三条狗两只猫,上课会给学生看狗狗照片。

### 1.5 学习资源

- 官方课程网站:CS 106 B.stanford.edu

- 教材为《C++编程抽象》一书,为本课程定制,允许在闭卷考试中参考。

- 班级网站会定期更新现成示例源码和习题讨论。

## 2. 【Lecture 02】CS106B, Programming Abstractions in C++, Win 2018

### 函数

函数是一段完成特定任务的代码。它允许将代码封装在一起,可以被程序中的其他部分多次调用。

#### 定义函数

函数使用关键字`void`定义返回值为无,使用其他类型定义有返回值。参数使用数据类型标识,多个参数用`,`隔开。 `{}`包含函数体语句。

例如:

```c++
void functionName(){
  //函数体语句
}
```

#### 调用函数

在主函数或其他函数中使用函数名加`()`来调用该函数。如果函数有参数,需要在`()`中按顺序传入实参。

例如:

```c++
functionName();
```

#### 函数原型

如果函数定义在调用之后,需要在调用前使用函数原型声明该函数,让编译器知道函数的存在。

函数原型仅包含函数签名,使用`;`结尾。

例如:

```c++
returnType functionName(parameterTypes);
```

#### 默认参数

可以为函数参数定义默认值,如果调用时未传递该参数则使用默认值。默认值必须定义在参数类型后面。

例如:

```c++
void function(int a, int b = 10){}
```

### 值语义与引用语义

C++中的参数传递采用值语义,意味着在函数内对参数的修改不会影响调用处的实参。

可以使用`&`修饰形参来使用引用语义,此时形参会引用实参,函数内对它的修改会影响实参。

引用语义默认用于数组和对象等复杂数据类型。

例如数组:

```c++
void func(int arr[]){} //引用数组
```

例如使用引用传参:

```c++
void func(int &a){}
```

### 数学函数

C++标准库`<cmath>`提供各种常见数学函数如绝对值`abs()`、开方`sqrt()`等。直接使用函数名即可调用。

例如:

```c++
#include <cmath>

double result = sqrt(4); // result = 2
```

以上就是CS106B第二周讲解的主要内容。

## 3. 【Lecture 03】CS106B, Programming Abstractions in C++, Win 2018

### 文件读取

在C++中,可以使用`ifstream`类从文件中读取数据。

首先需要包含`<fstream>`头文件。然后,定义一个`ifstream`对象,并使用`open()`方法打开文件。

例如:

```cpp
ifstream input;
input.open("data.txt");
```

打开文件后,可以使用`while()`循环combined with `getline()`方法一行行读取文件内容,并存储到字符串变量中。

例如:

```cpp
string line;
while(getline(input, line)) {
  cout << line << endl;
}
```

`getline()`的返回类型是布尔值,表示是否成功读取一行。在循环条件中使用它,可以控制循环的结束。

读完文件后,使用`close()`方法关闭文件。

如果打开文件失败,可以调用`fail()`方法检查错误,它返回一个布尔值表示是否出错。

### 向量

向量是一种可以动态增加缩减元素的数据结构。

在C++中,标准库提供了`vector`类实现向量。

需要包含头文件`<vector>`。

例如:

```cpp
#include <vector>
using namespace std;

vector<int> scores;
scores.push_back(80);
scores.push_back(90);
```

可以使用`[]`访问元素,使用`size()`查看长度。向量会自动管理内存。

常用方法包括:`push_back()`添加元素、`pop_back()`删除元素、`clear()`清空等。

向量提供了一个动态数组,比C风格的静态数组更易于使用。

## 4. 【Lecture 04】CS106B, Programming Abstractions in C++, Win 2018

### 1. 向量

向量是一种简单的集合数据结构,允许添加、访问和修改其中的元素。向量通过构建一块内存用于存储所有元素来实现。向向量添加元素时,会向内存中添加元素,并自动扩展内存以适应添加的元素。通过下标访问向量中的元素。

向量操作快速但随元素增加需要进行元素移动来插入或删除元素,效率会下降。一般建议从尾部添加元素。

### 2. 链表

链表也是一种集合数据结构。它通过结点链接而成一个链式结构来存储元素,不同于向量以数组形式存储。

链表插入元素时无需移动其他元素,效率高,但随机访问元素速度慢,需要从头遍历查找。链表占用更多内存来存储每个结点。

### 3. 嵌套集合

可以将集合作为元素放入另一个集合中,形成嵌套结构。例如向量中的元素也可以是向量,即向量向量。

### 4. 抽象数据类型

抽象数据类型(Abstract Data Type, ADT)描述一个数据结构或算法的接口,即它允许进行的一组操作,但不涉及其实现细节。使得同样的抽象接口可以有不同的实现。

向量和链表都实现了列表抽象数据类型,即支持相同的添加、访问、删除等基本操作。

### 5. 栈和队列

栈是限制操作方式的线性集合。只允许在一端进行插入和删除操作,称为LIFO(后进先出)。 populalar比方有餐厅的餐盘栈。

队列也是线性集合,但只允许在两端进行不同的操作。一端进行插入,一端进行删除,称为FIFO(先进先出)。常见比方有售票队列。

与向量比较,栈队列功能更简单但效率更高。少量固定操作也更易实现抽象数据类型。

## 5. 【Lecture 05】CS106B, Programming Abstractions in C++, Win 2018

### 一. 集合的引入

在上一次课中,教授利用计算圣经或莫比迪克一书中的独特词汇数量来介绍集合这个数据结构。

教授首先利用向量来实现这个功能,但是运行效率很低,圣经一书需要20多秒才能计算完成。

于是教授介绍了集合这一抽象数据类型。集合是一个可以存储元素但不允许重复的集合,它只支持添加、删除和判断元素是否存在三种基本操作。

### 二. 集合的两种实现

C++标准库提供了两种集合的实现:

1. set:查询速度较快,但不保证元素顺序;

2. unordered_set:插入和删除速度较快,但查询速度比set慢,同样不保证元素顺序。

set采用红黑树实现,查询效率高,但插入和删除速度慢;unordered_set采用哈希表实现,插入和删除速度快,但查询效率差。

### 三. 集合word count的实现

利用unordered_set实现word count:

1. 打开文件,读取每个单词;

2. 判断单词是否已经存在于unordered_set中;

3. 如果不存在添加到unordered_set,存在则跳过;

4. 统计unordered_set的大小,即为独特单词数量。

与使用向量相比,利用集合实现word count功能,运行效率大大提升。

### 四. 集合支持的操作

集合只支持三种基本操作:

1. 插入(insert):将元素添加到集合中;

2. 删除(erase):从集合中删除一个元素;

3. 判断包含(contains):判断一个元素是否在集合中。

集合不支持随机访问,不允许通过下标访问元素。

## 7. 【Lecture 07】CS106B, Programming Abstractions in C++, Win 2018

### 递归介绍

老师继续讲解递归的概念。递归是一种需要计算机自己调用自己来解决问题的技术。

老师表示 recursiion 很难理解,需要多听不同老师的解释,以及多练习例题来 grasp 递归的思想。

### 分形

分形是一种自相似的几何图形,其模式在任意尺度下都保持不变。它们在自然界中常见,如树枝、树叶等。

分形通过递归函数来绘制。函数调用自身,制造出更多相似但缩小尺寸的图形模式。参数包括绘制位置和图形等级。等级低表示模式简单,等级高图形细节更多。

常见的分形有:历曲线、科赫雪花线、曼德布集合等。它们都展示出自身重复的结构特征。

### 绘制图形

老师介绍了两个简单的图形绘制函数:

- GW_line(x1,y1,x2,y2) - 绘制一条从(x1,y1)到(x2,y2)的线段
- GW_square(x,y,size) - 绘制一个以(x,y)为中心,边长为size的正方形

这些函数来自Stanford库中GW(Graphical Window)部分。

### 分形实例 - 坎托集合

老师给出了一个计算坎托集合分形的递归函数示例:

函数接收窗口对象,起点坐标,结束坐标,以及迭代等级作为参数。每次迭代会绘制当前线段的1/3长度线段,同时下移20像素绘制下一级。

这是一个绘制单纯线段型分形的示例。老师希望学生能够掌握分形绘制的基本概念和递归思想。

## 8. 【Lecture 08】CS106B, Programming Abstractions in C++, Win 2018

### 回溯概念

回溯(Backtracking)是一种使用递归来搜索所有可能解决方案的方法。它会检查每个可能的选项或值,以寻找问题的解决方案。

许多问题都可以使用递归来进行全面搜索。例如打印目录下所有文件,就可以使用递归方式遍历每一个目录。如果需要搜索某个特定文件名,也可以使用if-else语句判断是否找到目标文件。

### 穷尽搜索

穷尽搜索(Exhaustive Search)是检查每个可能的选项、选择或值,以确认其中哪一个是正确的,来解决问题。

常用的穷尽搜索策略包括:

1. 定义一个函数来探索选择空间中的每一个选择。

2. 如果没有更多的选择需要作出,则为基准情况。否则递归调用自己,处理下一个选择,并探索其后的所有选择。

3. 一个典型的穷尽搜索问题是打印所有n位二进制数。可以先打印n-1位二进制数前加0,然后打印n-1位二进制数前加1。

4. 由于需要保存输出,可以使用字符串来存储输出,并在函数之间传递。这样可以在递归调用中共享输出字符串。

### 打印二进制数示例

以下是一个使用递归来打印所有n位二进制数的函数print_all_binary的实现:

```cpp
void print_all_binary(int n, string binary_so_far) {

  if (n == 0) {
    cout << binary_so_far << endl;
    return; 
  }

  print_all_binary(n-1, binary_so_far + '0');
  print_all_binary(n-1, binary_so_far + '1');

}
```

首先判断是否到基准情况n==0,然后递归调用自己,每次在原有字符串基础上加0或1,这样就可以Print出所有的情况。

回溯和穷尽搜索都需要掌握递归思想,会出现在许多算法问题中。通过练习更多示例可以掌握这一概念。

## 9. 【Lecture 09】CS106B, Programming Abstractions in C++, Win 2018

### 回溯算法

此次课程主要讨论回溯算法。

回溯算法是一种解决问题的常用算法,用于寻找所有可能的解决方案。它的基本思路是:

1. 定义选择列表,即问题的所有可能选择;

2. 对选择列表进行排列组合,尝试所有可能的路径;

3. 当发现不满足条件的路径时,回溯撤销选择,转向其他路径;

4. 找到满足条件的路径时输出结果。

回溯算法适用于求解组合optimizer问题,如迷宫寻路、八皇后问题等。

### 回溯算法实例-骰子点数求和

上次课程给出一个例子,即使用回溯算法寻找三个骰子点数总和为7的所有可能情况。

这个算法分三步:

1. 选择:选择第1个骰子,可能点数为1-6;

2. 探索:枚举后续可能点数,递归调用算法;

3. 回溯:当路径不可能得到结果时,回到上一步撤销选择。

此例优化了算法,提前判断是否可能得到结果,避免不必要的递归调用,减少运行时间。

### 回溯算法实例-迷宫寻路

此次课程给出一个新的例子:使用回溯算法让移动物体从迷宫出口逃脱。

1. 定义迷宫类Maze,表示迷宫状态和操作;

2. 移动物体在每个坐标点上做选择:上下左右4个方向;

3. 选择一个方向后标记为已走过,递归调用算法继续移动;

4. 当该路径不能导致出口,撤销选择,回溯到上一步选择其他方向;

5. 找到出口路径后输出和标记结果。

回溯算法的核心是定义问题的选择结构,全面探索每个选择后的可能结果,并在无果时回溯切换选择,以求解问题的所有可能结果。

## 10. 【Lecture 10】CS106B, Programming Abstractions in C++, Win 2018

### 递归回溯

递归回溯算法通常包含以下步骤:

1. 选择一个可能的选择
2. 检查这个选择是否合法
3. 如果合法,则递归探索下一个选择
4. 如果不合法,回溯至上一步选择下一个选择
5. 直至找到合法解或试尽所有选择

### 草编风格

学生在编写递归代码时,可能会添加过多的非必要条件判断语句,形成“长臂递归”的不良编程风格。

例如在解决迷宫问题时,可能会添加“如果右边有墙,则不向右递归”等判断。实际上,无需额外判断,直接向所有方向递归即可。这样可以简化代码结构。

### 违规操作

 teachers提醒学生不要将其他人的作品直接拷贝或抄袭提交作业。学校会采用类似Turnitin软件进行相似度检测来检查作业是否抄袭。

如果实在无法完成作业,teacher建议同学寻求帮助,可以向助教或同伴请教,也可以主动申请撤回已经提交但存在问题的作业,以避免后续麻烦。

## 12. 【Lecture 12】CS106B, Programming Abstractions in C++, Win 2018

### 一、指针

- 指针可以储存其他变量的内存地址。 比如利用`int *p`定义一个指针`p`,它可以存储`int`类型变量的内存地址。

- 使用`&`运算符可以获得变量的内存地址。例如`int x = 42; int *p = &x;`就把变量`x`的内存地址存入指针`p`中。

- 通过`*`运算符可以访问指针指向的内存地址中的值。例如`*p`就可以访问`x`中的值。

- 使用指针可以修改它指向的变量的值。例如`*p = 99;`就会把`x`的值修改为99。

- 不加`*`直接对指针赋值,只是改变指针自身存储的地址,而不影响原始变量。

### 二、链表

- 链表是一种通过内存地址将节点链接在一起的集合数据结构。每个节点包含一个数据项和一个指向下一个节点的指针。

- 可以使用结构体定义链表节点。例如:`struct Node{ int data; Node *next; };`定义每个节点包含一个`int`数据和一个`Node`类型的指针。

- 链表相比数组更适合动态增长,但随机访问效率较低。插入和删除数据时无需移动其他节点,更高效。

- 链表通过每个节点存储下一个节点的地址,从而实现将节点链接在一起。首节点指针指向链表头,其他节点通过`next`指针链接形成链式结构。

### 三、递归和指针

- 递归和指针都很难正确理解。需要多练习,直到理解其中的逻辑关系。

- 后期会用递归和指针一起来实现二叉树的数据结构。递归用于遍历树,指针用于实现树的结点之间的链接关系。

## 13. 【Lecture 13】CS106B, Programming Abstractions in C++, Win 2018

### 课程介绍

这次课主要讲解C++关于链表的概念,包括:

- 链表节点的结构,每个节点包含一个数据元素和指向下一个节点的指针。

- 如何使用指针将节点连接成链表。

- 使用临时指针current来遍历链表,以免改变首节点指针。

- 如何在链表头部添加新节点。

### 申请成为助教

CS 198项目负责招募和培养助教。106A-X课程都需要助教。

招募条件:

- 当前106A或106X学生
- 各学科都可以申请
- 兴趣渴望帮助其他学生

工作要求:

- 第一个学期每周约15小时,报酬17美元/小时
- 最少担任两个学期
- 第一个学期需要参加培训班

申请截止日期为2月16日。

### 链表操作demo

老师通过示例代码演示如何:

- 定义Node结构包含数据和指针
- 将节点通过指针连接成链表
- 使用current指针遍历链表
- 在链表头部添加新节点

具体操作包括:

1. 设置新节点的数据和指向下一节点的指针
2. 将新节点的指针指向原链表首节点
3. 更新链表首节点指向新添加的节点

如此才能成功添加节点到链表头部。

### 快速复习

老师通过复述和画图再次强调链表的关键概念:

- 节点包含数据和指向下一节点的指针
- 使用current指针来遍历链表,避免改变首节点指针
- 将函数化添加节点代码以方便调用
- 函数中的this指针传递问题如何解决

通过问答与互动解答学生提出的疑问,帮助加深理解链表相关知识。

## 14. 【Lecture 14】CS106B, Programming Abstractions in C++, Win 2018

### const

`const`关键字用来修饰变量或函数,表示该变量或函数不允许被修改。在函数形参和返回值类型前加`const`可以防止函数修改参数或返回值。

在类中,`const`方法表示该方法不会修改类的状态。将方法声明为`const`后,只能调用其他`const`方法。

### 运算符重载

C++支持操作符重载,可以为类重新定义操作符的功能。例如为`vector`类重载`+`操作符,可以实现`vector`之间的相加操作。

实现操作符重载需要定义一个名为`operator`加上操作符的函数,如实现`+`操作符重载需定义`operator+()`函数。在函数中实现重载后的操作函数。

### 集合类设计

常用数据结构如链表和数组都可以用来实现集合类。

以数组方式实现的栈`arrayStack`类包含`push()`、`pop()`、`peek()`等方法。这些方法中,只有`peek()`是`const`方法,因为它不会修改栈的状态。

链表实现需考虑每个节点如何连接成链式结构。链表相比数组可提供更好的增删性能但查找性能较差。

创建集合类时,需要设计支持各种操作的公共接口,并以内部相关数据结构实现各个方法。

## 15. 【Lecture 15】CS106B, Programming Abstractions in C++, Win 2018

### 大O记法

- Big O记法主要用于描述算法的时间复杂度,即随输入数量的增加,算法运行时间的增长率。

- 简化计算,假设每条语句执行时间为1单位。那么for循环内n条语句的执行时间为n,函数内有m条语句的调用时间为m等。

- 实际运行时间会受计算机性能影响,但我们关注的是随输入规模的增长,算法运行时间的增长率。

- 算法的时间复杂度取决于变量N次方项的最高次方。如0.4N+N^3,当N很大时,N^3项 dominates,时间复杂度为O(N^3)。

- 常见的时间复杂度有O(1)、O(N)、O(N^2)、O(N^3)等。

### 链表与向量操作时间复杂度

- 向向量尾部添加元素的时间复杂度是O(1)。

- 获取或设置向量特定索引元素的时间复杂度也是O(1)。

- 但向向量头部或中间添加元素需要移动其他元素,时间复杂度是O(N)。

- 即使是在中间添加,也可以看成是将后面一半元素移动一位,时间复杂度仍为O(N)。

### 提升算法效率技巧

- 选择复杂度低的数据结构如链表或向量。避免使用复杂数据结构。

- 查找是否可以使用更高效的算法,如使用哈希表替代线性查找。

- 尽量减少循环内的操作,避免重复计算。

- 及时优化程序瓶颈部分。对性能critial代码进行优化。

- 避免使用过多高层次的函数或方法调用。这可能导致额外的开销。

## 16. 【Lecture 16】CS106B, Programming Abstractions in C++, Win 2018

### 二叉搜索树

二叉搜索树(BST)是一种特殊的二叉树,它有一个特殊的顺序属性:每个节点左子树中的值都小于节点本身,右子树中的值都大于节点本身。

这种顺序可以实现查找、插入和删除操作的时间复杂度为O(logn)。

#### 遍历

树常用的三种遍历方式为:

- 先序遍历:先访问节点本身,然后遍历左子树,最后遍历右子树。
- 中序遍历:先遍历左子树,然后访问节点本身,最后遍历右子树。
- 后序遍历:先遍历左子树,然后遍历右子树,最后访问节点本身。

#### 查找元素

使用先序遍历实现 contains 函数来查找元素是否存在于树中:

1. 检查节点是否为 null
2. 比较节点值与查找值
3. 递归调用左右子树的 contains 函数
4. 如果左右子树任意一递归调用返回 true,整个函数返回 true

时间复杂度为 O(n)。

### 实现二叉搜索树

具体实现二叉搜索树需要:

1. 结构体定义节点信息
2. 插入新节点时维护顺序属性
3. 删除节点时处理子树链接
4. 对界面进行遍历操作

以上内容将在后续课程中详细学习和实现。

## 17. 【Lecture 17】CS106B, Programming Abstractions in C++, Win 2018

### 二叉搜索树删除节点

#### 叶子节点删除

如果要删除的节点是叶子节点,可以直接将节点设置为null即可。

#### 只有一个子节点的节点删除

如果节点只有一个子节点,可以直接使用子节点来替换该节点。

#### 有两个子节点的节点删除

如果节点有两个子节点,可以使用该子树中值最小的节点来替换要删除的节点。

具体操作为:

1. 使用getMin(node->right)函数获取子树中值最小的节点
2. 将最小节点的值赋值给要删除的节点
3. 删除原来最小节点所在位置

#### 二叉搜索树删除节点函数实现

删除节点需要考虑4种情况:

1. 节点是叶子节点
2. 节点只有一个子节点
3. 节点有两个子节点
4. 找到需要删除的节点

具体实现时需要:

1. 使用临时指针存储节点信息
2. 递归调用删除子节点
3. 返回删除节点后的二叉搜索树

### 二叉搜索树应用

二叉搜索树可以实现映射(map)和集合(set)两种数据结构。

### 树的平衡

为了达到日志时间复杂度,需要将树保持平衡。常见的平衡二叉搜索树有AVL树和红黑树。

### 字典树

字典树是一种用于存储字符串的多叉树。它可以用于很好地支持字符串的查找、插入和删除操作。

### 作业建议

给出第六次作业的一些提示,内容包括使用函数展示树的结构、实现二叉搜索树的插入和删除等。

## 18. 【Lecture 18】CS106B, Programming Abstractions in C++, Win 2018

### 图的概念

图是一种数据结构,用来表示由节点(vertexes)和边(edges)组成的关系网络结构。

- 节点代表具体的对象
- 边代表两个节点之间的连接关系
- 每个节点都有一个叫做度(degree)的属性,表示与该节点相连的边的数量

### 图的应用场景

图结构广泛应用在以下场景:

- 社交网络,如Facebook,节点代表用户,边代表关系
- 交通网络,如地图,节点代表城市,边代表道路或航线
- 课程关系,节点代表课程,边代表先修关系
- 电路网络,节点代表电路元件,边代表线路连接  
- 生物学网络,节点代表基因或蛋白质,边代表功能关系

### 图的关键概念

- 有向图和无向图:边是否有方向
- 连通图:任意两个节点是否都可以通过路径相通
- 子图:图中的一部分结构
- 路径:两个节点之间通过边相连的节点序列
- 环:节点可以通过路径回到自身

### 图在算法中的应用

图数据结构广泛应用在算法领域,如:

- 最短路径问题
- 最小生成树问题
- 拓扑排序
- 强连通分量
- 差分算术编码

以上内容系统介绍了图这个重要的数据结构概念及其应用场景。

## 19. 【Lecture 19】CS106B, Programming Abstractions in C++, Win 2018

今天讲完宽度优先搜索(BFS)的重构路径问题后,将会介绍弗洛伊德算法,找到图中任意两点之间最短路径。

BFS每次从队列中取出节点后,会查找其所有邻节点,并将其加入队列。但这样无法重构实际取路径顺序。为此,需要记录每个节点的前一个节点信息。

图中的边可能有权重,即代表两节点间的"代价"。这时BFS找出的可能不是最优路径。弗洛伊德算法就是为了解决这类带权图中寻找最短路径的问题。

弗洛伊得算法的基本思路是:每遇到新节点时,计算其通过前面节点得出的"代价",并与当前记录的“代价”进行对比。如果新得出的代价更小,则更新该节点的前驱节点和代价值。

以A到F为例,按照1步1步执行弗洛伊德算法:

1. 将A入队,A的初始代价为0
2. 取出D,将D的邻节点C,E,F加入队列,其代价分别为1+边权,记录D为它们的前驱节点
3. 取出B,但B的邻节点D的代价不需要更新
4. ...

如此反复,最终队列中节点记录的就是从起点到它们的最短路径代价了。

弗洛伊德算法的时间复杂度为O(V+E),空间复杂度为O(V),但相对BFS,路径的重构需要额外的前驱节点记录。

## 20. 【Lecture 20】CS106B, 程序抽象班级,Win 2018

### 最小生成树

最小生成树是一种生成树,它具有所有边的最小总权值。

生成树是指图中的一组边,这些边可以连接图中的所有节点,但不包含回路。

克鲁斯卡尔算法可以用来计算图中的最小生成树。算法步骤如下:

1. 将所有边按权值从小到大排序,放入优先级队列中
2. 从优先级队列中取出边的一端还没有被包含在最小生成树中的
3. 如果这条边不形成环,则将其加入最小生成树
4. 重复步骤2和3,直到所有节点都被连接

在实际计算过程中,可以使用联通分量来判断两个节点是否已经通过其他边连接。

最小生成树广泛应用于电力线路规划、通信网络等领域,可以以最小成本将所有节点连接起来。

### 图联通性与连通分量

可以使用联通分量来表示图中各个独立连接的子图。

图遍历算法如深度优先搜索或者广度优先搜索可以用来判断两个节点是否在同一连通分量中,即是否存在从一个节点可以到达另一个节点的路径。

在克鲁斯卡尔算法中,使用联通分量判断正在考虑添加的边两个端点是否已经通过其他边连通,如果连通则不加入,否则加入并合并两个端点所在的联通分量。

### 图与最小生成树的应用

最小生成树广泛应用于电力线路、道路网等场景。通过求解最小生成树,可以有效连接多个区域但成本最小。

其他应用包括:

- 生成迷宫结构
- 生物信息学中的序列比对
- 计算机网络拓扑优化
- 数据挖掘与社交网络分析


## 21. 【Lecture 21】CS106B, Programming Abstractions in C++, Win 2018

### 本次作业

- 第七次作业已经上线,名叫“Trailblazer”,是一款需要编写图遍历算法找到迷宫通道的程序。

- 本次作业截止日期是3月12日周一。

### 成绩查询

- 老师之前在网站上发布的成绩仅基于前三次作业、中期考试和部分章节练习得出,未包含后面的作业与练习数据,所以当前显示的成绩可能需要升高。

### 退课截止日期

- 3月5日下午5点是本学期最后一天可以申请退课。

### Hash Set和Hash Map

哈希集合与哈希映射的实现思路是使用哈希函数将键值映射到数组中的某个索引位置存储,具有随机访问的优点。

- 直接使用数组存储方式,添加元素时间复杂度O(1),但是包含和删除需要O(n)时间。

- 使用二叉搜索树存储,添加、包含和删除元素时间复杂度都为O(logn)。

- 使用排序数组存储,添加元素平均时间复杂度O(n),但是包含和删除元素时间复杂度都降低到O(logn)。

- 使用哈希函数将键值映射到数组索引位置存储,实现添加、包含和删除元素的时间复杂度统一为O(1),这就是哈希集合和哈希映射的原理。

### 可能的哈希冲突

- 不同键值可能哈希到同一个索引位置上,这就是哈希冲突。一般通过开放寻址或链地址法解决冲突问题。

## 22. 【Lecture 22】CS106B, Programming Abstractions in C++, Win 2018

### 哈希表(哈希映射)的再散列

哈希表是一种将键映射到值得数据结构。当元素被加入到哈希表时,其键值被散列成一个整数哈希码,然后根据该哈希码在数组中的位置插入元素。

当哈希表的装载因子过高时,将导致链表过长影响查询效率。此时需要对哈希表进行再散列,即将原数组大小翻倍,然后重新计算每个元素在新数组中的位置,将元素转移过去。

具体操作包括:

1. 计算现有哈希表的装载因子。

2. 当装载因子大于预设的最大值时,进行再散列。

3. 新建一个数组,其大小为原数组的两倍。

4. 遍历原哈希表中的每个元素,重新计算其哈希码,插入到新数组对应位置。

5. 将新哈希表赋值给原哈希表指针。

6. 释放原哈希表数组内存。

### 哈希表与哈希映射的区别

哈希表用于存储唯一键值对,其键不允许重复。

哈希映射允许对同一个键重复赋值,可以实现“键-值”的映射关系。相比哈希表,哈希映射在插入元素时需要检查键是否已存在,如果存在需要更新其对应值。

### 字符串哈希

与整数不同,字符串无法直接转化为唯一的整数哈希值。良好的哈希函数需要满足:

1. 对相同对象返回相同哈希值

2. 不同对象哈希值分布均匀

常用的字符串哈希函数有:

- 采用每个字符ASCII码值相加

- Jenkins散列函数

- xxHash函数

由于哈希值空间有限,不可避免地会出现哈希冲突。而哈希函数设计越好,冲突概率越低。

## 23. 【Lecture 23】CS106B, Programming Abstractions in C++, Win 2018

### 排序算法

排序是将数据按照某种顺序排列的过程。存在不同的排序方式,比如数字可以从小到大排列,字符串可以根据字母顺序排列等。

排序算法的好处是它可以帮助我们更好地理解和处理数据。常见的排序算法包括:

#### 选择排序

选择排序的过程是:

1. 扫描整个无序列表,找到其中最小(或最大)的元素。

2. 将其与列表开头的元素进行交换。

3. 然后对剩余部分列表重复第一和第二步。

选择排序每次只能找到一个元素的正确位置,因此效率不高。但是原理简单,编码少。

#### 插入排序

插入排序的基本思想是:

1. 将第一待排元素看成一个有序序列,且只包含一个元素;

2. 从第二个元素开始,与有序序列进行比较,如果当前元素小于有序序列的第一个元素,则将它插入到有序序列的开头;

3. 否则,与其他元素同样进行比较,直到找到插入位置插入此元素,使得这部分元素排好序。

4. 重复2和3直到所有元素均排序完毕。

插入排序每次只把一个元素插入到有序数列的适当位置,通常比选择排序效率高。

#### 希尔排序

希尔排序是插入排序的优化版本。它通过增量来改变插入排序算法的实现方式,使得国际站位置更远,然后逐步缩减增量,达到最终的插入排序。

### 算法效率分析

评估算法效率有如下方法:

- 最好、平均、最坏情况;

- 时间复杂度分析(Big-O):采用渐进数量级来描述算法随输入规模增大时所需时间增长的速率。

常见时间复杂度包括:

1. O(1):执行时间与输入规模无关。

2. O(logn):按对数增长。

3. O(n):按线性增加。

4. O(nlogn):接近线性地增长。

5. O(n^2):按次数与平方。

6. O(2^n):按指数增长。

7. O(n!):这个约等于阶乘的增长。

通常情况下,时间复杂度越低,算法效率越高。

## 24. 【Lecture 24】CS106B, Programming Abstractions in C++, Win 2018

### 面向对象与继承

面向对象程序设计的一个重要思想是继承。继承允许一个子类继承父类的属性和行为,从而减少重复代码,同时允许使用不同的类进行一致的操作。

在C++中,通过关键字`class`来定义类,通过`:`来表示一个类继承了另一个类,例如:

```cpp
class 子类名: public 父类名{}
```

这样子类就可以继承父类的所有成员函数和数据成员。

父类被称为超类,子类被称为子类。一个子类可以覆盖父类中的方法,通过`:virtual`实现方法的覆盖。

### 员工类设计案例

以员工类为例,设计了`Employee`基类,表示所有员工的公共行为,如薪水、工作时间等。再设计`Lawyer`和`Programmer`等子类,表示不同类型员工的特有行为。

例如`Lawyer`类可以追加`sue()`方法;`Programmer`类可以追加`writeCode()`方法。

最后设计`PatentLawyer`类继承`Lawyer`类,表示拥有律师和专利申请能力的专利律师。

通过继承实现性能,只需要极少的代码就可以定义出丰富的员工层次结构。

### 方法覆盖

如果子类需要覆盖父类的方法,需要使用`virtual`关键字声明虚函数。

例如,`Employee`类定义一个虚函数`virtual string vacationForm()`,然后`Lawyer`类可以重写这个方法改变表格颜色。

不使用`virtual`会导致在子类实例上调用覆盖后函数时,实际调用的是父类版本的函数。

所以最佳实践是所有可能被重写的函数都使用`virtual`声明,避免错误。

## 25. 【Lecture 25】CS106B, Programming Abstractions in C++, Win 2018

### 期末考试概述

- 期末考试将包含大约10道问题,包含阅读代码和书写代码两种类型。

- 考题将排除递归绘图等非本学期重点内容,主要考察链表、树、图、继承等课后重点知识。

- 提供参考手册,考试开卷。考试地点将提供20本参考书供考生使用。

- 将提供许多与期中类似的模拟考题,强烈建议尽量完成练习。直接在笔记本上解决问题比只编码更有利于学习。

### 考试样题

- 可能需要进行二分搜索,在每次搜索中将数组进行一半划分。

- 需要理解选择排序、归并排序操作过程,但不用亲自书写代码。

- 需要阅读链接列表代码并跟踪指针移动过程。也可能需要自行编写链接列表代码。

- 需要添加/删除节点在二叉搜索树,或完成二叉树遍历。

- 需要理解堆插入/删除节点的升降堆操作。

- 需要掌握图相关概念和广度优先、迪杰斯特拉算法的运作机制。

- 可能需要编写以图为输入的函数,需要会访问顶点和边,以及搜索算法的实现。

- 可能需要完成继承和多态相关问题,如读写父子类对象。

### 不考核内容

- 不考核递归绘制分形等。但可能含递归回溯问题。

- 不考核多重继承和私有继承。一般公有继承将被考察。

- 不考核重载运算符或非Stanford库类内容。

## 26. 【Lecture 26】CS106B, Programming Abstractions in C++, Win 2018

这次课程主要介绍C++中的模板特性。

先通过一个具体的例子来说明在C++中解决最小值问题时存在的问题。如果仅定义一个求取两个整数最小值的函数,那么当传入实数参数时,会直接将实数截断为整数,导致错误结果。一种方法是定义多个同名函数,分别处理不同类型的参数。但这种方式不便于维护,如果函数实现有变化,就需要同时修改所有的同名函数。

为了解决这个问题,C++里引入了模板机制。模板允许定义一个通用函数,使用泛型类型参数代替具体类型。例如,可以定义一个模板函数`template <typename T> T min(T a, T b)`,它可以处理任何类型`T`的参数。

在调用模板函数时,需要明确指定getType的参数,例如`min<int>(1, 2)`表示求两个整数的最小值。编译器会根据类型参数生成实际的函数定义。这样就解决了针对不同类型 needing定义多个相同函数的问题。

此外,还介绍了C++标准库中的常用容器,如vector、map等,以及算法算法库。结合具体代码示例,详细解释了这些抽象数据类型和算法的应用。

最后讨论了如何阅读和理解真实C++源码的写法 convention。总体上介绍了在106B课程基础上,应如何运用C++更高级的语言特性来编程。

## 27. 【Lecture 27】CS106B, Programming Abstractions in C++, Win 2018

### 一、关于期末考试

- 期末考试时间在周一上午8:30。

- 根据姓氏字母顺序分为两个考场:A-G在这里考,H-Z在Dinkelspiel空教室考。

- 考试题型包括:链表、二叉树、排序、查找、图等知识点。会提供练习题供学习。

- 考试内容包括期中后讲授的知识,同时也包括期中前知识点,如递归、指针等。

- 主要考查点包括:链表、二叉树、回溯、集合实现、图、哈希、排序和继承。

- 常见题型有:阅读代码并回答问题、编写代码处理数据结构等。

### 二、期末考试知识点剖析

#### 1. 链表

可能问阅读链表代码及其效果,编写代码实现链表操作,如遍历、插入、删除等。

#### 2. 二叉树

可能问阅读或编写二叉树代码,操作包括遍历、插入、删除、判断平衡等。区分普通二叉树和二叉搜索树。

#### 3. 排序算法

可能问选择排序、插入排序、归并排序的过程。

#### 4. 图

可能问阅读图表示形式(邻接表、邻接矩阵)及性质(连通性等),以及BFS、Dijkstra算法的过程。

#### 5. 堆

可能问阅读堆表示和操作,如添加、删除。

#### 6. 哈希

可能问哈希表的基本操作。

### 三、其他注意事项

- 准时上考,多个闹钟提醒。

- 考前多练习题,熟悉各数据结构基本操作。

- 工作fakenote会提供阅读考试必需知识。

- 考前复习知识点及常用算法流程。

- 放松心情,冷静应对各种可能出现的问题。
