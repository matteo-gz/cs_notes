# MIT 18.02SC: Homework Help for Multivariable Calculus

> <https://www.youtube.com/playlist?list=PLF07555F3CC669D01>

## 1. Coordinate free proofs: centroid of a triangle | MIT 18.02SC Multivariable Calculus, Fall 2010

### 定义

三角形的中点是指连接三个顶点的中位线相交的点。三角形的三个中位线分别连接每个顶点到相对边的中点。

### 问题推导

用向量表达中位线的位置可以证明三个中点都指向同一个点。

设A、B、C为三角形的三个顶点,M、N、P分别为顶点A、B、C的中位线的中点。

根据定义,M是BC的中点,那么OM=1/2(OB+OC)。

类似地,可以得到N和P的位置向量表达式。

其中,OP可以写成OA+2/3(AM)。而AM可写成OM-OA。

将M和N的位置向量代入,可以得出OP的位置向量的表达式只与A、B、C的位置有关,而与三角形内各点无关。

同理,可以证明N和P的位置向量表达式也只与A、B、C有关。

由于位置向量表达式对A、B、C对称, therefore N和P的位置向量与OP一致,即三个中位线交于同一点。

这就证明了三角形三个中位线交于同一点这个几何事实,而过程中没有具体考虑三角形的任何具体形态。

## 2. Dot products and angles | MIT 18.02SC Multivariable Calculus, Fall 2010

### 用点积公式计算两个向量之间的角度

点积公式:两个向量V和W之间的角度θ,满足:

cosθ = V·W / (|V| · |W|)

其中,V·W是V和W的点积,|V|和|W|分别是它们的长度。

### 计算例一中的两个向量之间的角度

给出向量V=(1,1,2),W=(2,-1,1)

计算V·W,|V|,|W|,得出θ=π/3

### 计算例二中三点形成的角是否为直角

给出三点P、Q、R坐标

得出PQ和QR向量,计算它们的点积

当点积为0时,两个向量为正交,即形成直角

通过求解点积等于0的条件,得出a=±2时形成直角

### 总结

点积公式可以用于计算任意两个向量之间的角度大小

或判断两个向量是否正交,从而求解形成直角的条件

## 3. Components of a vector | MIT 18.02SC Multivariable Calculus, Fall 2010

### 计算向量在另一向量方向上的分量

一个向量V在另一个向量W方向上的分量,就是V在W方向上的投影长度。

投影长度可以用V·W/(|W|)表示,其中V·W是两向量的点积,|W|是W的模长。

### 解决例题

例题给出V=(2,-2,1),W=(1,1,1)

计算V·W=1,|W|=sqrt(3)

将它们代入分量公式,得出V在W方向上的分量是1/√3

### 点积与投影长度关系

向量V在W方向上的投影长度,等于V向量模长乘以W向量与V之间的角余弦值

这等于V·W/(|W|),即点积公式

所以点积可以直接计算向量在另一个向量方向上的分量

### 总结

利用点积公式可直接计算一个向量在另一向量方向上的分量大小

并通过具体例题演示了计算过程

## 4. Area of a parallelogram | MIT 18.02SC Multivariable Calculus, Fall 2010

### 计算平行四边形面积需要向量

题目给出平行四边形四个顶点坐标,但直接取坐标计算其面积是不合理的。

### 得到平行四边形构成的两个向量

将顶点1,1点作基点,分别连接到其他两个顶点,得到两个向量6,1和5,2

### 使用向量的行列式计算面积

面积等于两个构成平行四边形的向量的行列式值

### 解题过程

计算6,1和5,2的行列式值:6×2-5=7

行列式值为正数,则平行四边形面积为7

### 总结

利用向量行列式可以直接计算平行四边形面积,而无需依赖原始顶点坐标

先得到平行四边形构成的两个基本向量,然后计算其行列式值即可得到面积

## 5. Determinants | MIT 18.02SC Multivariable Calculus, Fall 2010

### 2×2矩阵式求行列式

2×2矩阵行列式计算方法为:主对角线上元素乘积减去副对角线上元素乘积。

### 3×3矩阵式求行列式

3×3矩阵使用拉普拉斯展开法计算行列式:

1.选择第一行/列

2.计算对应的次级矩阵行列式

3.按照第一行/列元素正负交替乘以次级矩阵行列式并求和

### 例题解法

1) 给出2×2矩阵,直接用定义公式计算行列式值为-10

2) 给出3×3矩阵,选择第一行,按拉普拉斯法计算各项得出行列式值为-38

### 总结

利用定义公式或拉普拉斯展开法,可以直接计算矩阵的行列式值

行列式求解有助于计算平面几何 shapes(如平行四边形)面积等问题

## 6. Volume of a parallelepiped | MIT 18.02SC Multivariable Calculus, Fall 2010

### 计算菱柱体体积使用行列式

菱柱体由三个互相垂直的边向量构成,体积等于这三个边向量所构成的3×3行列式。

### 解题步骤

1. 给定问题中的三个边向量

2. 使用拉普拉斯展开计算3×3行列式

3. 选择首行展开,计算各子式并代入公式

4. 得到行列式值为-4,但体积需要为正数

5. 所以菱柱体的体积为+4

### 总结

利用向量行列式的性质,可以直接计算菱柱体体积,而无需其他几何图像。

首先构造菱柱体三条边向量矩阵,然后利用拉普拉斯展开公式计算其行列式值,即为体积。

## 7. Finding area using cross products | MIT 18.02SC Multivariable Calculus, Fall 2010

### 题目描述

计算三角形P1P2P3在空间中的面积。

### 步骤

1. 画出三角形示意图

2. 构造P1P2、P1P3向量

3. 计算P1P2×P1P3向量积

4. 向量积结果表示相邻矩形面积

5. 三角形面积是矩形面积的一半

### 解答

1) 求P1P2=(1,2,1)、P1P3=(1,-1,1)

2) P1P2×P1P3=(3,0,-3)

3) 向量积模表示矩形面积为3√2

4) 三角形面积为矩形面积的一半,即3√2/2

### 总结

利用向量积性质,可以直接计算三维三角形面积,而无需依赖其几何图形。

首先构造三角形三条边向量,然后计算其向量积求模即得面积。

## 8. Matrix multiplication practice | MIT 18.02SC Multivariable Calculus, Fall 2010

### 题目

计算矩阵A,B,C四种组合的乘积:

1. A×B
2. B×A
3. B×C
4. A×C

### 矩阵乘法规则

- 矩阵乘积只有当内层维度匹配时才成立
- 结果矩阵的维度等于外层维度

### 计算过程

1. A×B: A是2×2,B是2×3,内层维度匹配,结果是2×3

2. B×A:内层维度不匹配,无定义

3. B×C: B是2×3,C是3×2,内层维度匹配,结果是2×2  

4. A×C:内层维度不匹配,无定义

### 计算细节

根据矩阵乘法公式,逐元素相乘相加得到结果矩阵每个元素值。

需要注意矩阵乘法不可交换性,顺序决定成立与否。

## 9. Solve a linear system using matrices | MIT 18.02SC Multivariable Calculus, Fall 2010

### 找到逆矩阵

为了解线性方程组Ax = B,首先需要找到矩阵A的逆矩阵。

计算矩阵A的行列式det(A)。如果det(A)不等于0,那么矩阵A有逆矩阵。

 then计算A的代数余子式矩阵,将其中的符号根据plus-minus规则转换为A的复因子矩阵。

将复因子矩阵转置,再乘以1/det(A),就可以得到矩阵A的逆矩阵A^{-1}。

### 使用逆矩阵求解方程组

将线性方程组Ax = B变形为:

A^{-1}Ax = A^{-1}B

由于A^{-1}A为单位矩阵,上式implies x = A^{-1}B。

所以,要求解Ax = B,只需计算出A的逆矩阵A^{-1},然后计算A^{-1}B,即为解x。

### 具体问题

给定矩阵A和向量B,分别求解线性方程组Ax = B。

直接使用已经计算得到的A的逆矩阵A^{-1},分别计算A^{-1}B,即可得到两个方程组的解。

无需再次计算A的逆矩阵。

## 10. Equations of planes | MIT 18.02SC Multivariable Calculus, Fall 2010

### 常规方式得到平面方程

- 给出一个平面上的法向量n和一个点P,平面方程为:n·(P-p)=0,其中P-p是P到任意点p的矢量
- 给出一个点P和两个与平面平行的向量u,v,平面法向量n为u×v,则平面方程为:n·(P-p)=0
- 给出三个平面上的点P1,P2,P3,取P1P2,P1P3为两个向量u,v,法向量n为u×v,则平面方程同上

### 其他方式描述平面

- 当给出一个平面与另一个平面平行时,两平面法向量相同。可直接取已知平面方程的系数作为新平面方程的系数,并求出常数项使给出点满足方程
- 或直接用该平面已知的法向量n和一个点P得到方程

### 示例解答

第1题给出法向量n和点P直接求方程。
第2题取u,v为两向量,n为其叉积,用已知点求方程。
第3题 similarly取两向量求法向量后求方程。
第4题直接用已知平面方程系数与一个点求方程或法向量直接求方程均可。

整节课通过4个例子,介绍了用不同信息(法向量与点、两向量、三点、另一平行平面)描述平面并求解平面方程的方法。

## 11. Distance of a point to a plane | MIT 18.02SC Multivariable Calculus, Fall 2010

### 计算点到平面距离

- 点到平面距离指的是垂直距离,即最短距离
- 给出点P和平面方程,可以通过以下步骤计算点到平面距离:
  1. 根据平面方程求出法向量n
  2. 任选平面上的一点Q
  3. 求向量PQ
  4. 求向量PQ在法向量n方向上的分量,即PQ·n
  5. 距离等于|PQ·n|/‖n‖

### 具体解题步骤

- 本题给出点P为原点,平面方程为2x+y-2z=4
- 根据方程求平面法向量n为(2,1,-2)
- 任取平面上一点Q为(2,0,0)
- 求PQ向量为(2,0,0)
- 求PQ·n=4,‖n‖=√9=3
- 距离=|PQ·n|/‖n‖=4/3

通过给出点和平面方程,利用平面法向量属性以及任选平面上的一点,将问题转化成求两个向量的分量问题,求出了点到平面距离为4/3。

## 12. Systems of linear equations | MIT 18.02SC Multivariable Calculus, Fall 2010

### 求特解值C

给出线性方程组:

2x + Cz = 4
x - y + 2z = π  
x - 2y + 2z = -12

求使以下条件满足的C值:

1. 该系统具有唯一解
2. 对应同型系统具有唯一解

### 求解方法

1. 确定系数矩阵M为:

   [0 C 1;-1 1 2;-2 1 2]

2. 计算矩阵M的行列式为4-C

3. 当C≠4时,行列式非零,M可逆。此时原系统和同型系统均具有唯一解。

4. 当C=4时,行列式为0,M不可逆。同型系统具有无限解。

### 求同型系统其他解

1. 同型系统方程为:

   2x + Cz = 0
   x - y + 2z = 0
   x - 2y + 2z = 0

2. 取其中两行作为法矢量,叉积得到垂直于两者的矢量,即为其他解。

以计算行列式确定系统特征求解。取叉积法求同型系统无限解情况下的其他非平凡解。

## 13. Parametrized lines and intersections | MIT 18.02SC Multivariable Calculus, Fall 2010

### 问题定义

给定两个线段l1和l2:

l1: x=2-T, y=1+T  
l2: x=2+U, y=4+2U

求l1和l2的交点。

### 判断是否相交

1. 根据参数方程求出几个点,画出l1和l2图示。

2. 分析参数方程导数,发现导数方向不平行,说明l1和l2必定相交。

### 求交点

1. 为了方便计算,将l2用新的参数U表示。

2. 交点满足:l1和l2在同一点上x坐标和y坐标相同。

3. 设置方程组:

   x1=x2
   y1=y2

4. 得到T=1,U=-1。

5. 拉回原参数方程,验证交点为(1,2)。

以参数方程画图判断线段关系,设置坐标方程组求交点,最后回 substitution 原方程验证结果。

## 14. Parametric line intersecting a plane | MIT 18.02SC Multivariable Calculus, Fall 2010

### 问题描述

给定一条线段和一个平面。线段通过点P1(0,-1,1)和P2(2,3,3)定义。平面给定为2x+y-z=1的方程。求线段与平面相交的点。

### 参数化线段

将线段P1P2参数化为:

P(T) = P1 + T(P2-P1)
   = (0,-1,1) + T*(2,-1,2)
   = (2T, -1+4T, 1+2T)

### 检验平面方程

1. 将参数化线段坐标代入平面方程:

    2×2T + (-1+4T) - (1+2T) = 1

2. 展开简化得:6T = 1

3. 得到T = 1/2

### 求交点

将T = 1/2代回参数方程,得交点为(1,1,2)

首先根据两个点参数化线段,然后将参数化结果代入平面方程求得相交参数值,最后代回参数方程得到实际交点坐标。

## 15. Differentiating a vector valued function | MIT 18.02SC Multivariable Calculus, Fall 2010

### 基本信息

在这个问题中,给出了一个位置向量R(T),它满足两个条件:

1. R(T)的长度为常数。
2. 加速度a(T)等于一个常数乘以R(T)。

需要使用向量微分来证明:

1. R(T)与速度V(T)的点乘为0。
2. R(T)与V(T)的叉乘为常数。

最后要给出一个位置向量R(T)的例子,满足上述两个性质。

### 证明R(T)与V(T)的点乘为0

位置矢量R(T)与自身的点乘R(T)·R(T)为常数c1。

将其导数,得到:

d/dt(R(T)·R(T)) = 2R(T)·V(T)

由于R(T)·R(T)为常数,其导数为0。则有:

0 = 2R(T)·V(T)

即R(T)·V(T) = 0

由于它们的点乘为0,说明它们在所有的T处都相互垂直。

### 证明R(T)与V(T)的叉乘为常数

假设R(T)与V(T)的叉乘为常数,则其导数应为0。

计算导数:

d/dt(R(T)×V(T)) = V(T)×V(T) + R(T)×a(T)

由于V(T)与自身的叉乘为0,加上a(T)等于常数乘以R(T),得出其导数也为0。

所以R(T)与V(T)的叉乘为常数。

### 一个例子

让R(T) = [cos(T), sin(T), 0]

计算其速度V(T)和加速度a(T),可以验证此例满足两个性质。

### 总结

通过向量微分,证明了给定位置矢量R(T)的两个性质。最后举例验证。

## 16. Parametric curves: velocity, acceleration, length | MIT 18.02SC Multivariable Calculus, Fall 2010

### 位置向量

给出位置矢量R(T):

R(T) = (1 - 2T^2)i + T^2j + (-2 + 2T^2)k

### 问题

1. 计算位置矢量R(T)的速度V(T)、速度大小、加速度a(T)

2. 计算单位切线向量

3. 计算轨迹弧长,从T=0到T=2

### 解题步骤

1. 速度V(T) = R'(T) = (-4T, 2T, 4T)  

2. 速度大小 = √(V·V) = √(16T^2 + 4T^2 + 16T^2) = 6T

3. 加速度a(T) = V'(T) = (-4, 2, 4)  

4. 单位切线向量 = V(T)/‖V(T)‖ = (-2/3, 1/3, 2/3)

5. 轨迹弧长 = ∫_{0}^{2} ‖V(T)‖dT = ∫_{0}^{2} 6TdT = 12

### 总结

通过求导计算位置向量R(T)相关物理量,最后得到轨迹弧长。

## 17. Graphing surfaces | MIT 18.02SC Multivariable Calculus, Fall 2010

### 两个表面函数

1. Z = √(x^2 + y^2)

2. Z = x^2

### 画图方法

1. 考虑特殊情况,如将x或y等于0时的曲线。

2. 将Z等于常数时的截面,如Z=2时得到一个半径为2的圆。

3. 分析函数中x和y的关系,判断是否存在对称性。

### 结果

1. 函数1表现为一个圆锥面。它只与距离原点的距离R有关,表示转动对称。

2. 函数2为Z=x^2,它不依赖于y。在各个y平面下都是同样的抛物面,形成一个抛物线棱柱体。

### 总结

通过考虑函数中变量的关系,画出关键截面,能直观描述多变量函数定义的几何形状。

## 18. Level curves | MIT 18.02SC Multivariable Calculus, Fall 2010

### 三个函数

1. Z = 2x + y
2. Z = x^2 + y^2  
3. Z = x^2 - y^2

### 画级曲线方法

1. 先画出坐标轴xy平面
2. 选择一些常量值Z,等于这个常量时的方程即为级曲线方程
3. 根据方程画出曲线

### 函数1结果

函数1为平面,所有级曲线都是直线。

### 函数2结果  

函数2为圆锥面,所有级曲线都是同心圆。圆的半径与Z的值成正比。

### 函数3结果

1. Z=0时,级曲线为y=±x直线。

2. Z≠0时,级曲线为双曲线。随Z值变化,双曲线趋向于y=±x。

3. 函数三维图形为马鞍面。级曲线投影为双曲线。

### 总结

通过计算不同Z值对应的方程,能清晰绘出多变元函数的级曲线,查看其几何性质。

## 19. Level curves and critical points | MIT 18.02SC Multivariable Calculus, Fall 2010

### 任务1:标识图上的点

给定一幅等值线图,需要标识:

1. 鞍点a
2. 两个极值点B和C(无需区分最大值点和最小值点)

### 任务2:考虑可能的情况

1. B和C是否同时可能为最大值点?

2. B是否可能为最大值点,C是否可能为最小值点?

### 任务3:给出例子图解

1. 给出B和C同为最大值点的例子三维函数图解。

2. 给出B为最大值点,C为最小值点的例子三维函数图解。

### 鞍点识别标准

鞍点位于等值线形成的“8”字形中点,沿两个方向值分别增大和减小。

### 等值线图局限性

等值线图本身无法判断极值点类型,需参考额外信息才能判断。同一等值线图可能对应不同三维函数图形。

## 20. Partial derivatives | MIT 18.02SC Multivariable Calculus, Fall 2010

### 问题1

给出函数:

F(x,y)=xy^2+x^2y

1. 计算偏导数∂F/∂x
2. 计算偏导数∂F/∂y  
3. 在点(1/2)计算∂F/∂x

### 问题2

给出同样的函数F(x,y),计算:

1. 第二偏导数∂^2F/∂x^2
2. 第二偏导数∂^2F/∂y^2
3. 交叉偏导数∂^2F/∂x∂y
4. 交叉偏导数∂^2F/∂y∂x

### 计算方法

1. 把另一变元看作常数,使用单变量导数公式计算偏导数
2. 计算第二偏导数时,利用第一偏导数再进行导数计算
3. 多项式函数中,交叉偏导数结果相同

## 21. Tangent plane approximation | MIT 18.02SC Multivariable Calculus, Fall 2010

### 问题1

给出矩形面积函数A(x,y)=xy,近似计算A(2.1,2.8)

近似点取(2,3)

### 问题2

近似点(2,3)时,等量改变x和y哪个对A的影响更大?

### 基本过程

1. 记下需要近似的函数A(x,y)

2. 记下泰勒公式形态的切面近似表达式

3. 计算A(2,3)、∂A/∂x|_{(2,3)}、∂A/∂y|_{(2,3)}

4. 填入切面近似表达式并求值

5. 比较系数大小得出结论

### 结论

1. A(2.1,2.8)的近似值为5.9

2. 等量改变x对A的影响大于改变y

## 22. Least squares | MIT 18.02SC Multivariable Calculus, Fall 2010

### 问题1

用最少平方法拟合三组数据点(0,1)、(2,1)、(3,4)成一条直线。

### 最少二乘法原理

1. 定义待拟合函数为y=ax+b

2. 求函数F对a和b的偏微分,并令偏微分等于0形成方程组

3. 求方程组的解即为a和b的值

### 具体步骤

1. 记录数据点坐标值

2. 求Σxi、Σyi、Σxi^2、Σxiyi等项的值

3. 根据方程组F'a=0和F'b=0求解a和b,得到最佳拟合直线公式

### 结果

最佳拟合直线为:y=6/7x+4/7

### 问题2

同样数据拟合二次曲线,求解过程使用三个变量a,b,c。

## 23. Second derivative test | MIT 18.02SC Multivariable Calculus, Fall 2010

### 函数

W(x,y) = x^3 - 3xy + y^3

### 寻找极值点

1. 计算第一个导数W_x,W_y
2. 求解方程组W_x=0, W_y=0,找到极值点(0,0),(1,1)

### 第二导数测试

1. 计算第二个导数W_{xx},W_{yy},W_{xy}
2. 计算Δ=W_{xx}W_{yy}-W_{xy}^2
3. 当Δ>0时,判断极值点类型看W_{xx}号
4. 当Δ<0时,极值点是鞍点

### 结果

(1,1)点Δ>0,W_{xx}>0,所以是极小点
(0,0)点Δ<0,所以是鞍点

第二导数测试分别判断出(1,1)是极小点,(0,0)是鞍点。

## 24. Max/Min | MIT 18.02SC Multivariable Calculus, Fall 2010

### 问题描述

设计一个开口纸箱,纸箱体积为3立方单位。底部使用3层纸张,前后侧壁使用1层纸张,左右侧壁使用2层纸张。目标是用最少纸张来设计这个纸箱。

### 问题建模

用X,Y,Z表示纸箱三个维度。 volume等于XYZ,等于3立方单位。求导 cardboard使用量 F(X,Y)对X,Y,得出唯一临界点(2,1)。

### 求解

1. 分析函数F(X,Y)当X,Y趋于0或无穷大时,函数值会趋于无穷大
2. 因此全局极值只可能出现在临界点
3. 通过计算,证明(2,1)是函数F(X,Y)的全局最小值
4. 所以最优纸箱尺寸是:长2单位,宽1单位,高1.5单位
5. 所使用的纸张量为18单位

### 总结

通过建模、求导数法求临界点,同时考虑边界情况,最终找到问题的全局极值点并求出最优解。

## 25. Total differentials and the chain rule | MIT 18.02SC Multivariable Calculus, Fall 2010

### 问题描述

函数Z是x^2和y^2的和,同时x和y又是u和v的函数。求求解:(1)总微分dZ的表达 (2)利用链式法则和总微分法求偏微分∂Z/∂u

### 求解方法一:利用链式法则

1. 画出变量依赖关系图
2. 根据图依次求微分∂Z/∂x、∂x/∂u等项
3. 结合链式法则得出∂Z/∂u的表达式

### 求解方法二:利用总微分法

1. 求dZ、dx、dy等总微分表达
2. 将dx、dy中的u、v用总微分法替换
3. 展开代换得出dZ对du、dv的系数,即∂Z/∂u

### 结果及比较

两种方法都能得出正确结果∂Z/∂u=4xu+2yv  
链式法则计算更快,总微分法理解概念更清楚,但计算步骤更多,易出错

## 26. Tangent planes | MIT 18.02SC Multivariable Calculus, Fall 2010

### 问题一:求平面Z=x^3+3xY^2在点(1,2,13)处的切平面方程

1. 将Z写成函数W(x,y,z)的零等高面形式  
2. 计算W(x,y,z)在点(1,2,13)处的梯度向量∇W
3. 使用梯度向量∇W和点(1,2,13)求切平面方程

### 问题二:求曲线x^3+2xy+y^2=9在点(1,2)处的切线方程  

1. 将曲线写成函数F(x,y)的零等值线形式
2. 计算F(x,y)在点(1,2)处的梯度向量∇F
3. 使用梯度向量∇F和点(1,2)求切线方程

### 总结

1. 将曲面/曲线写为函数的零等值形态
2. 计算函数在对应点的梯度向量
3. 用梯度向量求切平面/线方程

利用函数的梯度向量属性得到切线/平面,计算过程与求导规则相符。

## 27. Gradient and directional derivative | MIT 18.02SC Multivariable Calculus, Fall 2010

### 问题一

1. 给出函数f(x,y)=x^2y+xy^2
2. 计算函数在点(-1,2)的梯度∇f
3. 计算函数在点(-1,2)在方向u=(3/5,4/5)的方向导数

### 问题二

1. 给出函数G(x,y,z)=√(x^2+y^2+z^2)
2. 计算函数在点(2,6,-3)的梯度∇G
3. 计算函数在点(2,6,-3)在方向u=(1/√3,(1,1,1))的方向导数

### 问题三

1. 给出函数H(w,x,y,z)=wx+wy+wz+xy+xz+yz
2. 计算函数在点(2,0,-1,-1)的梯度∇H  
3. 计算函数在点(2,0,-1,-1)在方向u=(1/2,(1,-1,1,-1))的方向导数

### 计算步骤

1. 计算函数的偏导数得到梯度∇F
2. 计算梯度在指定点的值
3. 将方向写为单位向量
4. 计算梯度点积方向单位向量得到方向导数

## 28. Lagrange multipliers | MIT 18.02SC Multivariable Calculus, Fall 2010

### 问题

求将矩形嵌入椭圆x^2+4y^2=4内,使其周长最大。

### 方法

1. 用矩形的右上角点(x,y)表示矩形
2. 周长函数P(x,y)=4x+4y
3. 搜索区域限制函数G(x,y)=x^2+4y^2-4
4. 根据拉格朗日乘子法,求导数∇P和∇G平行,得三个方程组
5. 求解方程组得到拉格朗日乘子法给出的可能极值点(4/√5,1/√5)
6. 检查边界点(0,1),(2,0)的周长函数值
7. 比较三点周长函数值,得极值点为(4/√5,1/√5),极值为4√5

### 总结

1. 用拉格朗日乘子法处理极值点问题  
2. 得到拉格朗日解以外,还需检查边界点
3. 比较所有点的目标函数值,求得真正的极值点

## 29. Lagrange multipliers (3 variables) | MIT 18.02SC Multivariable Calculus, Fall 2010

本节视频使用拉格朗日乘子法解决一个含三变量的极值问题。

问题是:给定函数F(x,y,z)=x^2+x+2y^2+3z^2,在圆面x^2+y^2+z^2=1上求极值。

步骤如下:

1. 根据拉格朗日乘子法,写出函数F和约束函数G的偏导数方程组:

    ∂F/∂x = λ∂G/∂x
    ∂F/∂y = λ∂G/∂y
    ∂F/∂z = λ∂G/∂z

2. 通过分析方程组,得到三种可能情况:y=z=0;y=0,λ=3;λ=2,z=0

3. 在每种情况下,分别求解xy方程组,得到六组可能极值点坐标。

4. 在六组点处计算函数F的值,求最大值和最小值。这里最大值是25/8,最小值是0。

5. 所以函数F在圆面上的全局最大值点是(1/4,0,±√15/4),最小值点是(-1,0,0)。

本例展示了拉格朗日乘子法解决多元极值问题的整体流程:写导数方程组→分析求解→定位极值点→求极值。关键是如何换元解导数方程组,以找出所有可能极值点。

## 30. The chain rule with constraints | MIT 18.02SC Multivariable Calculus, Fall 2010

本节视频主要讨论在存在约束条件的情况下,如何使用链式法则计算偏导数。

首先给出一个含有四个变量的函数w,但由于存在约束条件xy=zt,所以w实际上只与三个变量有关。

接着使用总微分法计算函数w和约束条件的总微分方程。由于x和y保持不变,总微分方程中的dx和dy项都为0。这样获得w的第一个微分方程。

其次计算约束条件的总微分,得到一个dt与dz的关系方程。

通过结合上述两个微分方程,消去dt项,得到∂w/∂z的表达式。

该表达式给出了在x和y保持不变的情况下,函数w对z的偏导数。

视频还提出使用链式法则的“捷径”。直接对原始函数w取偏导,但遇到∂t/∂z时需要使用约束条件来求解。

通过这种方法同样能得到∂w/∂z的表达式。最后强调需要指定x和y在计算偏导数时保持不变。

总之,视频说明在存在约束条件的情况下,应该如何合理利用总微分或链式法则来计算函数的偏导数。

## 31. Gradients - composition | MIT 18.02SC Multivariable Calculus, Fall 2010

给出一个三元函数F,其在点P处满足特定条件。定义一个二元函数G,即F在满足约束条件下的特殊情况。

计算G在点(1,1)处的梯度。首先写出F和约束条件的总微分方程。

由于G定义时使用了约束条件,计算∂G/∂X等价于在X固定Z变化时求∂F/∂X。

将F和约束条件的总微分方程结合,消去不相关变量,得出DF形式。

根据总微分中各项系数即为相关偏导数,得出DG形式。且G定义时已经固定约束,所以DG=DF。

比较DG和DF系数,得 Gradient of G = (0, -2)。

整个过程利用函数定义关系,将问题转化为偏导数与约束的计算。通过总微分方程统一处理,消去变量得到最终结果。

## 32. Regions of integration | MIT 18.02SC Multivariable Calculus, Fall 2010

### 部分A: 三角形区域

三角形的顶点为原点、(0,2)、(-1/2)

#### 按顺序 DX dy 积分

内积分边界:

- X 的下限为 -1/2Y
- X 的上限为 0

外积分边界:

- Y 的下限为 0
- Y 的上限为 2

#### 按顺序 dy DX 积分

内积分边界:

- Y 的下限为 -2X  
- Y 的上限为 2

外积分边界:

- X 的下限为 -1
- X 的上限为 0

### 部分B: 圆形扇形区域

圆心在原点,半径为2。区域包括圆弧在x轴和y=x线之间。

#### 按顺序 DX dy 积分

内积分边界:

- X 的下限为 Y
- X 的上限为 √(4-y^2)

外积分边界:  

- Y 的下限为 0
- Y 的上限为 √2

#### 按顺序 dy DX 积分

由于边界不连续,需要将区域分成两部分:

左边部分:

内积分边界:

- Y 的下限为 0
- Y 的上限为 X

外积分边界:

- X 的下限需要确定
- X 的上限需要确定

右边部分:

内积分边界和外积分边界与左边部分类似。

## 33. Changing the order of integration | MIT 18.02SC Multivariable Calculus, Fall 2010

### 积分问题

求下列二重定积分:

∫∫R e^u/u dR

R为T从0到1/4,U从√T到1/2的区域

### 变换积分顺序

将积分顺序变换为对U积分然后对T积分。

根据区域R的范围,重写积分为:

∫_0^(1/2) ∫_0^(u^2) e^u/u dT dU

### 解决内层积分

内层对T的积分仅含T,积分后的结果为e^u/u _T |^u^2_0 = e^u/u_ u^2

### 使用分部积分法

应用分部积分法,有:

∫u*e^u dU = u*e^u - ∫e^u dU

### 求解外层积分

求解外层积分后,最终结果为:

-(1/2)e^(1/2) + 1

## 34. Integration in polar coordinates | MIT 18.02SC Multivariable Calculus, Fall 2010

### 题目A

求下列二重定积分:

∫∫R x^(3/2) dx dy

R为x从1到2,y从0到x区域

### 将区域R表达为极坐标

将坐标原点移动到(1,0),构造等θ射线。

θ从0到π/4,R从seek(θ)到2seek(θ)

函数变为1/R^(3)

### 计算内层积分

内层积分对R求积分,结果为-1/R|^{2seek(θ)}_{seek(θ}}

### 求外层积分

外层积分对θ求积分,结果为√2/4

### 题目B

求∫∫R x dy/dx

R为x从0到1,y从x^2到2x区域

### 将区域R表达为极坐标

θ从0到π/4
R从0到tanθ/seeksecθ

将函数保留为f,设置为dR/dθ形式

### 题目C

求∫∫R f(x,y) dx dy

R为y从0到2,x从0到√(2y-y^2) Semicircle

### 将区域R表达为极坐标  

θ从0到π/2
R从0到2sinθ

函数保留为f,设置为dR/dθ形式

## 35. Integrals with density | MIT 18.02SC Multivariable Calculus, Fall 2010

### 计算区域R的质量

1. 区域R为原点到(1,1)单位正方形。

2. 密度函数为f(x,y)=xy。

3. 将区域R分为无限多个小片 dA,其质量为Δ×dA。

4. 区域R的总质量等于所有小片dA质量的和,即∫∫R f(x,y) dA。

5. 计算后 regional 质量为1/4。

### 计算中心质量

1. 中心质量的公式:平均x坐标 = ∫∫R x×f(x,y)dA / ∫∫R f(x,y)dA

2. 这里密度函数对x和y对称,所以平均x坐标等于平均y坐标。

3. 计算平均x坐标为2/3。所以区域R的中心质量坐标为(2/3,2/3)。

### 计算旋转惯量

1. 以原点为轴:di=R^2×ΔdA,R为距离原点距离。积分后为1。

2. 以x轴为轴:di=y^2×ΔdA,y为距离x轴距离。积分后为1/8。

3. 计算过程中,找出ΔdA对应的微小物理量是一个关键步骤。

## 36. Change of variables | MIT 18.02SC Multivariable Calculus, Fall 2010

### 计算区域R的积分

1. 区域R由三条线段组成,分别为y轴、2x-y=0线和2x+y=2线。

2. 把积分变量改为U=2x-y,V=2x+y。

3. 绘制UV坐标系下的区域为矩形,求得 Jacobian 是4。

4. 函数4x^2-y^2在UV坐标下变为UV^4。

5. 积分bounds为U从-V到0,V从0到2。

6. 变量变换把复杂区域R简化为矩形,函数也简单为UV^4,积分更容易计算。

7. Jacobian计算正确表示变量变换前后面积比例,这里为4。

### 关键步骤

1. 确定变量变换函数。

2. 在UV坐标下绘制简化后的区域。

3. 计算Jacobian判断变量变换是否成立。

4. 写出在UV坐标下的函数与积分bounds。

5. 比较变换前后区域和函数的复杂性。

## 37. Integral of exp(-x^2) | MIT 18.02SC Multivariable Calculus, Fall 2010

### 求积分I=∫from -∞ to ∞exp(-x^2)dx

1. 定义I为要求的积分

2. 将I改写为∫from -∞ to ∞exp(-x^2)exp(-y^2)dxdy

3. x与y分离,I=∫from -∞ to ∞exp(-x^2)dx * ∫from -∞ to ∞exp(-y^2)dy

4. 两个积分的值都等于√π,所以I=(√π)^2=π

5. 将坐标系变换到极坐标,将变量改为r,θ  

6. 函数变为exp(-r^2),积分范围为θ从0到2π,r从0到∞

7. 先积分θ,得到2π;再积分r,得到-1/2

8. 所以原积分I的结果为π

### 关键步骤

1. 将问题扩充为二维问题

2. 利用变量分离的思路简化问题

3. 将坐标系变换到极坐标

4. 计算变变量后的积分并求解

5. 从结果推回原问题的答案

## 38. Change of variables | MIT 18.02SC Multivariable Calculus, Fall 2010

### 把问题改写为变数问题

我们要计算下面的double积分:

∫∫_R 1/x^2 dxdy

R是第一象限内满足以下两个条件的区域:

1. 在曲线y=1/x下方
2. 在曲线x^2-y^2=1右边

将这个问题改写为变数问题:

设U=x^2-y^2,V=y/x

### 画出原区域R在xy平面和UV平面中的形状

在xy平面中,R区域下边是y=1/x曲线,右边是x^2-y^2=1曲线。

在UV平面中,原区域R对应的:

1. U=1曲线对应的是x^2-y^2=1曲线。R只包含一部分此曲线。
2. y=1/x曲线对应的是U=1/V-V曲线。

### 计算边界条件

1. y=1/x曲线对应U=1/V-V。
2. x^2-y^2=1曲线中x=1,y=0点,对应的是U=1,V=0。
3. 两曲线交点时的V值是a=-1+√5/2。

所以U的范围是1到1/V-V,V的范围是0到a。

### 计算Jacobian确定积分中函数

Jacobian计算公式为:

J=(∂U/∂x ∂U/∂y)/(∂V/∂x ∂V/∂y)

原问题积分函数为1/x^2,利用Jacobian可得到变数问题中的积分函数。

### 求解变数问题求原问题的解

利用边界条件和积分函数,可以直接写出变数问题中的定积分表达式,而不需要求解数值结果。

## 39. Line integrals: path dependence | MIT 18.02SC Multivariable Calculus, Fall 2010

### 线积分的基本思路

计算线积分的基本思路是参数化曲线,从而将问题转化为单变量积分问题。

具体步骤如下:

1. 根据给定的起点和终点,选择合适的参数来描述曲线。

2. 根据参数化表达式求出位向量场表达式函数F和微分dR。

3. 将F和dR代入线积分公式∫_C F⋅dR计算积分。

4. 指定积分界限后,计算单变量积分获得线积分结果。

### 问题一

给定向量场F=(x,y)和两点(1,1)、(2,4)。

1. 部分A曲线为直线,采用参数t(1≤t≤2),得到线积分结果为32。

2. 部分B曲线为两个矩形边形成的折线,分为两个部分C1和C2单独积分再相加。

   - C1:(1,1)→(1,4),采用参数y(1≤y≤4),线积分结果为24。

   - C2:(1,4)→(2,4),采用参数x(1≤x≤2),线积分结果为6。

   整条曲线C的线积分和为24+6=30。

3. 两条曲线连接同样两个点,但线积分结果不同,表明线积分取值与路径有关。

### 计算线积分的通用步骤

1. 根据给定曲线,选取合适的参数来描述各部分。

2. 计算每个部分的参数下的位向量场F和微分dR。

3. 将F和dR代入线积分公式分别计算每个部分的线积分。

4. 对所有部分线积分求和,即为原问题的线积分。

## 40. Line integrals: parametrization independence | MIT 18.02SC Multivariable Calculus, Fall 2010

### 计算线积分的通用步骤

1. 根据给定曲线,选取参数来描述各部分。

2. 计算每个部分的参数下的位向量场F和微分dR。

3. 将F和dR代入线积分公式分别计算每个部分的线积分。

4. 对所有部分线积分求和,即为原问题的线积分。

### 问题

给定向量场F=(x,y,x^2+y^2),曲线C为y=x^2从(1,1)到(2,4)。

1. 使用参数化T=x,y=x^2计算线积分,得129/4。

2. 使用参数化T=ln(x),y=e^{2T}再次计算,也得129/4。

### 分析

计算线积分时,选择不同的参数化表达曲线都会得到同样结果。

这是因为线积分仅与曲线及向量场有关,与参数化方式无关。

在计算线积分时,应选择最简单的参数化,而不是任意更复杂的表达。

## 41. Line integrals by geometric reasoning | MIT 18.02SC Multivariable Calculus, Fall 2010

### 问题描述

给出曲线C为圆心在原点的半径为B的单位圆,沿逆时针方向定向。

将向量场F分成三种情况计算C上F·dR:

1. F=(x,y)

2. F=G(x,y)*(x,y),G为未知函数

3. F=(-y,x)

### 解决方法

1. F为径向向量场,与曲线方向正交,则F·T=0,integral值为0。

2. F缩放但不改变方向,仍为径向向量场,同理integral值为0。

3. F为 tangential 向量场,在同一点F和T向量同向,长度分别为B和1,则F·T=B为常数。integral值为2πB^2。

### 解法思路

通过观察向量场与曲线的几何关系:

- 当F和T正交时,integral值为0

- 当F和T方向一致且长度成比例时,integral值为常数乘弧长

thus能避免参数化计算,直接推导出结果。

这种思路适用于利用几何知识简化计算的线积分问题。

## 42. Fundamental theorem of line integrals | MIT 18.02SC Multivariable Calculus, Fall 2010

## 问题描述

给出向量场F = x^5 + 3xy^3, 曲线C为半径1的半圆从(1,0)到(-1,0)。

计算C上F的线积分:

1. 直接使用定义式

2. 使用线积分不变性替换路径

3. 使用线积分基本定理

## 直接计算

1. 给出C的参数化R(t)=(cos(t),sin(t)),t∈[0,π]

2. 计算dR/dt=(−sin(t),cos(t))

3. 设置线积分式∫_C F·dR,并将F,dR写为t变量

4. 得到极其复杂的单变量积分

## 使用路径不变性

1. 替换C为线段C': R(t)=(-t,0),t∈[-1,1]

2. 在C'上y=0,使F简化为x^5

3. 计算线积分∫_{-1}^{1}-x^5dt,得值-2

## 使用基本定理

由F为 gradient 函数,线积分值等于终点函数值与起点函数值之差。

计算F(-1,0)-F(1,0)得-2,与上述结果一致。

采用不同方法对比计算,演示线积分运算法则的应用。

## 43. Non-conservative vector fields | MIT 18.02SC Multivariable Calculus, Fall 2010

### 问题描述

考虑矢量场F=-y/x^2+y^2 I + x/x^2+y^2 J,目标是证明它不是保守场。

### 第一反应

计算场的螺旋度是否为0:

M_y=y^2-x^2/(x^2+y^2)^2
N_x=M_y,故螺旋度为0。

但场F在(0,0)点未定义,无法应用结论:若螺旋度为0则为保守场。

### 找到封闭曲线

取曲线C为单位圆参数化为:

X=cosθ,Y=sinθ,θ∈[0,2π]

计算C上F的线积分:

∫_C F·dR = ∫_0^2π (sin^2θ+cos^2θ)dθ = 2π ≠ 0

因此F不是保守场。

### 总结

通过找到使线积分不等于0的封闭曲线,证明了场F不是保守场,而不是直接依赖螺旋度为0的结论。体现了证明非保守场的重要方法。

## 44. Potentials of gradient fields | MIT 18.02SC Multivariable Calculus, Fall 2010

### 问题描述

给出矢量场 F=e^x+y(X+B)i + xe^x+yj ,要求找到使F成为梯度场的B值,并使用两种方法求出F的势函数f。

### 确定B值

计算M_y和N_x:

M_y=e^x+y(X+B)

N_x=xe^x+y

令两者相等,得B=1

### 方法一:路径积分

选择路径C1和C2,将整条路径C分解为C=C1+C2

利用边函数性质计算C1和C2上的路径积分,相加得到F(x1,y1)

取势函数f(x,y)=Xe^x+y

### 方法二:导数操作

令M=F_x,求其叶函数F

求F_y与N比对,证明二者相等

得出势函数f(x,y)=Xe^x+y

### 总结

两种方法得到的势函数都是同样的形式,验证了F indeed是梯度场。

## 45. Green's Theorem: an off center circle | MIT 18.02SC Multivariable Calculus, Fall 2010

### 问题描述

利用Green定理计算LINE积分:

∫C(3x^2y^2dx + 2x^2(1+xy)dy)

其中C为以点(a,0)为中心,半径为a的圆形曲线。

### 应用Green定理

选取曲线C围绕的区域R,根据Green定理,线积分等价于区域积分:

∫C Mdx + Ndy = ∫∫R (N_x - M_y)dA

### 计算M,N和它们的导数

M = 3x^2y^2
N = 2x^2(1+xy)

M_y = -6x^2y
N_x = 6x^2y + 4x

### 计算区域积分

区域积分简化为∫∫R 4x dA

利用质心公式化简求解,得Integral R 4x dA = 4πa^3

### 结果

所以原线积分的结果为4πa^3

## 46. Green's Theorem: area under an arch | MIT 18.02SC Multivariable Calculus, Fall 2010

### 问题描述

求曲线x=aθ-sinθ, y=a(1-cosθ)描述的心形曲线的一个拱顶与x轴之间的面积。

### 画图分析

将心形曲线和x轴画出来,确定θ取值区间为0-2π。

### 应用Green定理

选定曲线C为心形曲线和x轴围成的闭合曲线,根据Green定理,面积积分等价于区域积分:

∫C Mdx + Ndy = ∫∫R (N_x - M_y)dA

### 选取M和N

M取-y,N取x

### 计算区域积分

将问题转化为∫∫R dx方程,利用符号θ进行积分,结果为3πa^2

所以原问题的面积为3πa^2

## 47. Application of Green's theorem | MIT 18.02SC Multivariable Calculus, Fall 2010

### 问题描述

求某简闭曲线C上的路径积分∫C(-x^2y+3x-2y)dx+(4y^2x-2x)dy达到最小值时,C是什么曲线。

### 使用Green定理

将路径积分化为区域积分:∫∫R(∂N/∂x - ∂M/∂y)dAdxdy

其中,M=-x^2y+3x,N=4y^2x-2x

### 计算∂N/∂x - ∂M/∂y

得出∂N/∂x - ∂M/∂y=x^2+4y^2-4

### 确定最小值条件

要使区域积分最小,需要使整个区域内x^2+4y^2-4都小于0,边界上等于0。

### 得出边界方程

可以得出边界方程x^2+4y^2=4,即为椭圆方程。

### 答案

所以C的形状是椭圆,即满足x^2+4y^2=4的简闭曲线。

## 48. Flux across a curve | MIT 18.02SC Multivariable Calculus, Fall 2010

### F1的情况

- F1是在单位圆上的标量函数G(r)乘以位置矢量(x,y)。
- 因为r在单位圆上一直都是1,所以G(r)是常数。
- F1与曲线的法向量方向一致。
- 计算F1在曲线上的通量,等于G(1)乘以曲线长度2π。

### F2的情况  

- F2是在单位圆上标量函数G(r)乘以(-y,x)。
- F2与F1正交。
- F2与曲线的法向量方向正交,计算通量结果为0。

### F3和C的情况

- C是从(0,0)到(1,1)的线段。
- F3是3乘以(1,1)的向量。
- F3与C在每个点 directions正交,计算通量结果为0。

### F4和C的情况

- F4是3乘以(-1,1)的向量。  
- F4与C在每个点的法向量方向正反,长度为3sqrt(2)
- 计算F4在C上的通量为3sqrt(2)乘以C的长度1。

以上通过分析每个矢量场与曲线法向量的关系,而没有详细求参数,就能较简单计算出不同情况下的通量。

## 49. Green's Theorem in normal form | MIT 18.02SC Multivariable Calculus, Fall 2010

### 任务

验证Green定理在正常形式下对于向量场F=x*i+y*j和曲线C的情况。

### 向量场F和曲线C

C由单位半圆和从-1到1的x轴线段组成,形成闭合曲线,将区域包围。
向量场F为F=x*i+y*j。

### Green定理正规形式

表述为:国际线积等于区域内散度的双重积分。

### 计算双重积分

散度为∂x/∂x + ∂y/∂y = 1 + 1 = 2
区域为半圆,面积为π/2
所以双重积分结果为2×π/2=π

### 计算线积分

将C划分为两部分:半圆C2和线段C1
C1上的线积分为0
C2用参数(cosT,sinT)表示,从0到π积分
计算后线积分结果也为π

### 结果

双重积分结果和线积分结果均为π,符合Green定理预测,因此在此情况下验证了Green定理正常形式的正确性。

## 50. Extended Green's Theorem | MIT 18.02SC Multivariable Calculus, Fall 2010

### 问题概括

本视频考察了一个矢量场F,F定义为R^N _X i + R^N_ Y j,其中R为x^2 + y^2的1/2次方。

视频分为两个部分:

1. 证明矢量场F对任何整数N都是可积的。

2. 找出F的势函数。

### 证明F是可积的

若计算F的旋度curl F,可以得到curl F = 0。

由格林公式知,对于任意封闭曲线C,∮C F⋅dr = ∫∫_('R) curlF dA = 0。

然而,这里R^2中的原点正是F不可微的点,无法直接使用格林公式。

所以需要考虑R^2中两种可能的封闭曲线:

1. 不包含原点的封闭曲线C1。对C1直接使用格林公式即可得到结果。

2. 包含原点的封闭曲线C2。画一个包含C2的圆C3。由于F relative to C3是正交矢量场,∮_{C3} F⋅dr = 0。

然后考虑C3和C2之间的区域R,在R中F定义且可微。利用扩展格林公式,∮_{C3} F⋅dr = ∮_{C2} F⋅dr,即C2上的线积也等于0。

因此,对任何封闭曲线,线积均为0。从而F对所有的整数N都是可积的。

### 找出F的势函数

采用从(1,1)起点积分得到F的势函数方法:

1. 径向分量P = R^N _X,切向分量Q = R^N_ Y。

2. 沿Y轴积分,得到C1上的线积表达式。

3. 沿X轴积分,得到C2上的线积表达式。

4. 两条积分路径连接成一个闭合路径,证明其线积和为0,从而找到F的势函数表达式。

## 51. Domains of vector fields | MIT 18.02SC Multivariable Calculus, Fall 2010

### 向量场的定义域

 lecturer介绍了4个平面向量场,分别是:

1. √X i + √Y j
2. (i + j)/√(1 - x^2 - y^2)  
3. (i + j)/√(x^2 + y^2 - 1)
4. (i + j)ln(x^2 + y^2)

对每一个向量场,需要分两步:

1. 确定其定义域,即值域内向量场既定义又连续可导的区域。

2. 判断该区域是否简单连通。

### 每个向量场的定义域和简单连通性

1. √X i + √Y j:
   - 定义域为第一象限(X>0,Y>0)
   - 定义域是简单连通的

2. (i + j)/√(1 - x^2 - y^2):  
   - 定义域为内圆里点(x^2 + y^2 < 1)
   - 定义域是简单连通的

3. (i + j)/√(x^2 + y^2 - 1):
   - 定义域为外圆外点(x^2 + y^2 > 1)  
   - 定义域不是简单连通的

4. (i + j)ln(x^2 + y^2):
   - 定义域为原点除外的全部点集
   - 定义域不是简单连通的

通过确定每个向量场的定义域和判断定义域的简单连通性,理解了向量场定义的区域以及简单连通概念。

## 52. Volume in cylindrical coordinates | MIT 18.02SC Multivariable Calculus, Fall 2010

### 计算一个区域的体积

要求计算一个区域的体积,该区域被定义在以下两个面之间:

- Z=x^2 + y^2 ,这个面是一束抛物面。
- Z=2y ,这个面是一个平面。

区域的边界是这两个面的交点构成的曲线。

### 确定积分边界

为了设置三重积分,我们需要确定积分变量的边界。

1. Z轴的边界很容易确定,从抛物面Z=x^2 + y^2 到平面Z=2y。

2. 然后我们需要获得区域在XY平面上的投影,也就是确定X和Y之间的关系。

3. 由两个面交点得到边界曲线方程:x^2 + (y-1)^2 = 1,这是一个圆方程。边界是半径为1,中心在(0,1)的圆。

4. 将坐标系变换为极坐标,圆的方程为:R=2sinθ,θ从0到π,R从0到2sinθ。

### 设置三重积分

采用极坐标,三重积分表示为:

V = ∫∫∫ dV
   = ∫_0^π ∫_0^{2sinθ} ∫_{R^2}^{2Rsintheta} R dZdRdθ

通过求解此积分,我们就可以得到该区域的体积。

## 53. Average height | MIT 18.02SC Multivariable Calculus, Fall 2010

### Average值公式

若需求区域R内函数f的平均值,则公式为:

平均值 = 1/V * ∫∫∫_R f(x,y,z) dV

其中V为区域R的体积。

### 三重积分设置

本题求一个四面体内点与XY平面的平均距离。

函数f(x,y,z)=z,即距离就是z值。

四面体顶点为(0,0,0)、(1,0,0)、(0,1,0)、(0,0,1)。

设置三重积分顺序为 dZdydx。

### 积分限制

1. 对Z积分限制:
   - 下限为0,等价于XY平面
   - 上限为1-x-y,为通过三个顶点除原点外的平面方程

2. 对Y积分限制:
   - 下限为0  
   - 上限为1-x

3. 对X积分限制:
   - 下限为0
   - 上限为1

### 积分求解

1. 内积分 dZ,积分Z^2/2,得到上下限函数。

2. 次积分 dY,积分上一步函数,得到上下限函数。

3. 外积分 dX,积分上一步函数,得1/24。

4. 考察四面体体积为1/6,则平均距离为1/24×1/6=1/4。

### 结束语

总结了平均值公式,以及本题三重积分的设置和求解步骤。

## 54. Moment of inertia of a cylinder | MIT 18.02SC Multivariable Calculus, Fall 2010

### 计算惯量的公式

物体的惯量I等于体积元素ΔV乘以R2再积分得到。

### 设定圆柱坐标系

给了一个高H,半径B的圆柱体。考虑圆柱体沿轴对称特性,将z轴设为圆柱体的轴线。

### 三重积分设置

计较R^2Δ,Δ等于1。定积分顺序为dZdrdθ。

### 确定积分限制

Z从0到H
R从0到B
θ从0到2π

### 分层计算三重积分

1. 内积分dZ,得到ZR^3
2. 次积分dR,得到HR^4/4  
3. 外积分dθ,乘以2π,得出HR^4π/2

### 另外表达

也可以写成M×B^2/2,其中M为圆柱体质量πHB^2

以上总结了计算圆柱体周长轴线上的惯量的公式及计算步骤。

## 55. Average distance on a sphere | MIT 18.02SC Multivariable Calculus, Fall 2010

### Problem description

The problem asks us to determine the bounds of the region D in spherical coordinates and set up the integral to calculate the average distance of a point in D from the origin.

Region D refers to the part of a unit sphere centered at (0,0,1) that lies above the plane z=1.

### Determining the bounds of D

We first draw a picture of the region to gain intuition.

The θ bounds are easy, ranging from 0 to 2π since we cover the entire circular direction at each height.

The φ bounds range from 0 to π/4 since φ is the angle made from the z-axis and we include points where φ is 0 and up to 45 degrees.

To find the ρ bounds, we write the sphere boundary equation in spherical coordinates and simplify to get ρ=2cosφ as the outer boundary. The inner boundary ρ=secφ comes from recognizing the triangle formed by the plane z=1.

Therefore, the ρ bounds are secφ < ρ ≤ 2cosφ.

### Setting up the average distance integral

The average distance is defined as the integral of the ρ function over D, divided by the volume of D.

The volume of D is 1/2π since it is half a unit sphere.

In spherical coordinates, the differential element is ρ^2sinφ dρ dθ dφ.

Substituting the bounds found earlier gives the final integral as:

∫_secφ^{2cosφ} ∫_0^{2π} ∫_0^{π/4} ρ^3 sinφ dφ dθ dρ / (1/2π)

## 56. Gravity and a half-sphere | MIT 18.02SC Multivariable Calculus, Fall 2010

### Problem Description

The problem asks us to calculate the gravitational attraction of an upper solid half sphere of radius a and center O on a mass M0 located at O.

### Setup

The density δ is given as δ=√(x2+y2). To solve this using spherical coordinates, we choose O as the origin.

### Components of Force

The force F has components Fx, Fy, Fz. Due to symmetry, Fx and Fy will be 0. We only need to calculate Fz.

### Magnitude and Direction

The magnitude of the force is given as G*M0/ρ2.
The direction of Fz is Z/ρ to make it a unit vector.

### Volume Element

The density δ is replaced with R. The volume element dV in spherical coordinates is Rρ2sinφdρdφdθ.

### Integral in Spherical Coordinates

Converting to spherical coordinates, Z = ρcosφ, R = ρsinφ, dV = ρ2sinφdρdφdθ. The bounds for the solid half sphere are 0 to a for ρ, 0 to π/2 for φ, and 0 to 2π for θ.  

### Integration  

The integral is solved in steps, first integrating ρ from 0 to a to get a2/2. Then integrating φ from 0 to π/2 gives 1/3. Finally integrating θ from 0 to 2π gives 2π. Simplifying the final expression yields the gravitational force Fz = G*M0*a2π/3.

## 57. Flux through easy surfaces | MIT 18.02SC Multivariable Calculus, Fall 2010

### Problem 1

Find the flux of the vector field K through an infinite cylinder with equation x2 + y2 = 1.

The cylinder stretches infinitely in the z direction. The normal vector only has x and y components as it does not depend on z. Meanwhile, K points purely in the z direction. Therefore, the flux is 0 since the normal and K are perpendicular.

### Problem 2  

Find the flux of the vector field J through a square of side length 1 in the XZ plane.

The normal vector n of the square can either be J or -J. J · n is either 1 or -1. The flux is therefore equal to the area of the square, which is 1, or -1.

### Summary

By considering the geometric relationship between the vector field and surface normals, we can sometimes evaluate the flux without extensive calculation, as demonstrated in these examples. Where the vectors are parallel or perpendicular, the flux is easy to determine.

## 58. Flux through a square | MIT 18.02SC Multivariable Calculus, Fall 2010

### Problem

Find the upward flux of the vector field F through the surface s, where:

- s is the graph of the function z=x^2+y over the unit square in the xy-plane.  
- F=zi+xk

### Solution

1. Express s as a function of x and y: z=f(x,y)=x^2+y
2. Compute the normal vector to s: NDS=-f_x,-f_y,1=-2x,-1,1
3. Express the flux integral as a double integral over the unit square region in xy-plane: ∫∫_R F⋅NDS dxdy  
4. Evaluate F⋅NDS: -2x^3-2xy+x
5. Integrate from 0 to 1 with respect to x and y: -1/2

Therefore, the upward flux of F through the surface s is -1/2. The downward flux would be 1/2.

## 59. Flux through surfaces | MIT 18.02SC Multivariable Calculus, Fall 2010

### Problem 1

Find the outward flux of the vector field F=(Z,X,Y) through the piece of cylinder of radius a from z=0 to z=H in the first octant.  

1. The normal vector N at any point on the cylinder surface is (X/a, Y/a, 0).
2. F dot N = ZX/a + XY/a  
3. Parameterize the surface using cylindrical coordinates: x=acosθ, y=asinθ, z=z
4. Ds = dθdz
5. F dot NDs = (Zacosθ + a sinsθ)dθdz
6. Integrate from θ=0 to π/2, z=0 to H.
7. The outward flux is H2/2 + a2H/2

### Problem 2  

Find the outward flux of the vector field F=(XZ,YZ,Z2) through the piece of sphere of radius a in the first octant.

1. The normal vector N at any point on the sphere is (X/a, Y/a, Z/a)  
2. F dot N = aZ/a = Z
3. Parameterize the sphere using spherical coordinates: x=acosφsinsθ, y=asinφsinsθ, z=cosφ  
4. Ds = a2sinsφdθdφ
5. F dot NDs = a4cosφsinsφdθdφ
6. Integrate from θ=0 to π/2, φ=0 to π/2
7. The outward flux is a4/4π

## 60. Flux | MIT 18.02SC Multivariable Calculus, Fall 2010

### Problem

Given a hemisphere surface S of radius R centered at the origin, and a vector field F=(Y,0,0). Find the outward flux of F through S.

### Solution

1. The hemisphere S encloses a solid hemisphere region D, with another part of the boundary being a disk S2 in the XZ plane.
2. By the divergence theorem:
   Integral of F·N ds over S + S2 = Integral of divF dV over D
3. F=(Y,0,0), so divF=1. The triple integral of 1 over D is the volume of D, which is 2πR3/3.  
4. F=(0,0,0) on S2 since it lies in the y=0 plane. The surface integral of F·N over S2 is 0.
5. Therefore, the surface integral over S is 2πR3/3.

The outward flux of F through the hemisphere S is 2πR3/3. The divergence theorem relates the surface integral over S to easier triple and surface integrals by introducing the solid hemisphere region D.

## 61. Flux and the divergence theorem | MIT 18.02SC Multivariable Calculus, Fall 2010

### Problem

Given a vector field F=(X^4, -2X^3Y^2, Z^2) passing through the surface of a solid bounded by the plane Z=0, Z=H and the surface x^2 + y^2 = R^2. Compute the flux of F through the solid.

### Solution

1. The solid is a cylinder with bottom at Z=0, top at Z=H and circular base of radius R.
2. By the divergence theorem, the surface integral of F·N over the bounding surface equals the triple integral over the solid region D of divF.
3. Compute divF = 4X^3 + (-4X^3Y) + 2Z
4. Write the flux as a triple integral over D of -Z using cylindrical coordinates (Z, R, θ).  
5. The bounds are: Z from 0 to H, R from 0 to R, θ from 0 to 2π.
6. Evaluate the triple integral to get the flux πH^2R^2.

The divergence theorem relates the difficult original surface integral to an easier triple integral over the solid region D. Using cylindrical coordinates, the triple integral of the divergence -Z is evaluated to get the final flux.

## 62. Extended Gauss' Theorem | MIT 18.02SC Multivariable Calculus, Fall 2010

### 部分A

计算F=(x/ρ^3, y/ρ^3, z/ρ^3)的散度.
这里ρ代表球坐标ρ,定义为ρ=(x^2+y^2+z^2)^(1/2).
首先计算∂ρ/∂x, ∂ρ/∂y, ∂ρ/∂z.
然后分别计算∂F/∂x, ∂F/∂y, ∂F/∂z.
将三项求和得到∇·F=(3ρ^2-x^2-y^2-z^2)/ρ^5. 由于ρ^2=x^2+y^2+z^2,故∇·F=0.

### 部分B

根据定理的假设,场F在立方体内部没有定义,无法直接使用散度定理推断通量为0.

### 部分C

1. 以大球面S2作为外包围面,将立方体S和内部包在球形区域D内。
2. 根据扩展高斯定理:
   ∫∫∫∇·FdV=∫Φ·nda(S2)-∫Φ·nda(S)  
3. 已知∇·F=0,左端为0
4. 可得通量积分等式求出立方体S上的通量

所以使用扩展高斯定理,可以通过计算容积积分间接计算立方体表面通量。

## 63. Del and the product rule | MIT 18.02SC Multivariable Calculus, Fall 2010

### 思路

假设F为矢量场,u为标量函数。
证明:
del·(uF) = ∇u·F + u(del·F)

### 具体证明过程

1. 设F的分量为P,Q,R
2. 用下标表示导数,将uP视为函数形式
3. 对uP,uQ,uR使用一元函数的乘法导数公式
4. 得到∇u·F这一项
5. 注意uP_x等项含有导数的函数性质
6. uP_x等项正好构成del·F这一项

7. 所以整体表达式可以分解为两项,即为右侧

所以证明完成del·(uF)满足这个称为“乘法导数公式”的关系。

这是将多元导数问题理解成一元导数问题的一个实例,利用一元函数的乘法导数公式,从而得到像乘法导数公式这样的多元导数关系。

## 64. Line integral on a helix | MIT 18.02SC Multivariable Calculus, Fall 2010

### 问题描述

给出一个矢量场F=(Zx,Zy,X)和一个螺旋曲线c(T)=(cosT,sinT,T),T值从0到π。

### 问题一:描述曲线c的形状

1. 观察曲线c的各分量参数表述
2. 认识到曲线c实际描述一个半径为1的圆柱面上的螺线
3. 绘制坐标轴作为参考架,画出曲线c从(1,0,0)到(-1,0,π)的形状

### 问题二:计算矢量场F在曲线c上的线积分

1. 得到曲线c在T参数下的微分dX,dY,dZ
2. 得到矢量场F在XYZ下的表达式P,Q,R
3. 将线积分写成参数积分的形式
4. 计算参数积分,结果为0

所以该问题通过描述曲线形状,将多维问题转化为参数积分問題,求解线积分,与二维情况方法一致。

## 65. Conservative fields and exact differentials | MIT 18.02SC Multivariable Calculus, Fall 2010

### 一、为什么B值等于2时向量场F才是保守的

1. 我们需要计算向量场F的旋度curl F
2. F定义为:
   - P = Y
   - Q = X + 2YZ
   - R = Y^2 + 1
3. 根据公式,curl F 为:
   - I部分:∂R/∂Y - ∂Q/∂Z
   - J部分:∂P/∂Z - ∂R/∂X
   - K部分:∂Q/∂X - ∂P/∂Y
4. 计算各导数后,只有I部分与B有关,为2Y - BY
5. 要使curl F为0,即F保守,B必须等于2

### 二、找到B=2时向量场F的势函数

1. 从原点随着曲线C1(参数为x)积分F·dr,只积分P分量
2. 从原点随着曲线C2(参数为y)积分F·dr,只积分Q分量  
3. 从原点随着曲线C3(参数为z)积分F·dr,只积分R分量
4. 分别计算P,Q,R于各段积分曲线的表达式
5. 积分得出势函数为:φ=X1Y1+Z1(Y1^2+1)

### 三、解释为什么F·dr是精确微分

如果向量场F保守,在简单连通域上F·dr就是精确微分。由于此问题中F定义域为所有XYZ,且F对XYZ可导,所以F·dr是精确微分。

## 66. Stokes' Theorem | MIT 18.02SC Multivariable Calculus, Fall 2010

### 生物概要

教师介绍一个利用斯托克斯定理验证的例子。考察一个场F,其分量为2z,x,y。以及一个面S,它是单位半球的上表面。教师要求计算这个表面和这个边界的线积分,验证斯托克斯定理是否成立。

### 计算线积分

1. 找出边界C的参数化,它是单位圆在XY平面上的参数化形式:
   - x = cos(T)
   - y = sin(T)
   - z = 0
   - T从0到2π

2. 将场F代入线积分公式:
   - F·dr = xdy = cos(T)sin(T)dT

3. 使用半角公式化简成:
   - cos^2(T) = (1+cos(2T))/2
   - 于是线积分的值为π

### 计算面积积分

1. 找到场F的旋度:
   - curlF = (0, 0, 1)

2. 找到单位法向量n:
   - n等于位置向量(x,y,z)

3. 利用球坐标参数化半球面:
   - x = cosθsinφ
   - y = sinθsinφ
   - z = cosφ
   - φ从0到π/2, θ从0到2π

4. 代入面积积分公式,利用半球面的对称性,可以简化成面积上Z的积分。

5. 最后面积积分的值也等于π,与线积分的值一致,验证了斯托克斯定理。

## 67. Extended Stokes' Theorem | MIT 18.02SC Multivariable Calculus, Fall 2010

### 一、问题描述

求某曲线C上的场积分:

$$
\int_C \mathbf{F} \cdot d\mathbf{r}
$$

其中场为:

$$\mathbf{F}=(2xz-2y,2yz+2x,x^2+y^2+z^2)$$

曲线C很复杂,难直接求参数化。

### 二、应用扩展斯托克斯定理

1. 找一个界面S,它的边界包含曲线C

界面S取一个半径为B的圆柱面片,上边界为原曲线C,下边界为半径B,位于平面z=0中的圆C1

2. 按定向计算定理右侧各项

    (1) 面积形式:

    ![](https://latex.codecogs.com/gif.latex?\iint_S\nabla\times\mathbf{F}\cdot\text{d}\mathbf{S})

    计算发现![](https://latex.codecogs.com/gif.latex?\nabla\times\mathbf{F}=4k),而定向法向量与k垂直,所以面积式为0

    (2) 曲线积分1:

    ![](https://latex.codecogs.com/gif.latex?\oint_{C_1}\mathbf{F}\cdot\text{d}\mathbf{r})

    参数化C1,substitude求得值为4\pi B^2

3. 根据定理,得原问题的解为:-4\pi B^2

### 三、重点和难点

1. 找一个合适的界面S替换曲线C

2. 计算面积式和曲线积分需要熟练参数化与微分运算技巧

3. 注意定向的正负性

## 68. Simply connected regions | MIT 18.02SC Multivariable Calculus, Fall 2010

### 概述

本视频讨论了简单连通区域在三维空间中的概念。介绍了6个三维空间区域,要求判断每个区域是否为简单连通区域,并给出理由。

### 区域1:R3

R3为简单连通区域。任意闭包曲线都可以收缩为一个点,并始终保持在R3内。

### 区域2:R3减去整个z轴

不为简单连通区域。存在无法收缩为点的曲线,例如围绕z轴的环面。

### 区域3:R3减去原点

为简单连通区域。任意闭包曲线可以在三维空间内稍微移动后收缩为点,且没有其他障碍物阻止其收缩。

### 区域4:R3减去一个圆

不为简单连通区域。存在无法收缩为点的曲线,例如围绕圆的环面,圆会阻止其收缩。

### 区域5:R2减去一线段

在二维情况下不为简单连通区域。存在无法收缩为点的曲线,例如围绕线段的环面。但如果考虑三维情况,则为简单连通区域,可以将环面提升到空间外心,不与线段相交。

### 区域6:实心环面体

不为简单连通区域。存在无法收缩为点的曲线,例如环绕环面体洞口的环面,任何含有该环面作为边界的曲面都会离开实心环面体。

## 69. More Stokes' Theorem | MIT 18.02SC Multivariable Calculus, Fall 2010

### 问题描述

给出一个矢量场F:

F=ρ^n×(Xî+Yŷ+Zk)+,其中ρ为球坐标ρ,n可以是任意常数.

要求证明这个矢量场F对任意n都是某一个函数的梯度场.

### 梯度场判别条件

一个矢量场如果定义在简单连通区域内,且其旋度为0,那么这个矢量场就是某个函数的梯度场.

### 矢量场F的旋度计算

计算F中各组分的偏导数,得出F的旋度为0向量.

### 矢量场F的定义域

如果n>0,F 定义在所有空间;如果n<0,F除了原点外定义在整个空间,但原点也只是单一的一个点,不影响简单连通性.

### 结论

由于F定义在简单连通区域内,且其旋度为0,所以F就是某个函数的梯度场.补充练习是找到这个函数.

## 70. Consequences of Stokes' Theorem | MIT 18.02SC Multivariable Calculus, Fall 2010

### 问题描述

给定一个矢量场F,其分量为X,Y,Z.需要证明这个矢量场F不是任何矢量场G的旋度.

### 证明方法

采用反证法。假设F是某矢量场G的旋度,即F = curlG.

将证明分成以下步骤:

1. 取一个单位球面S,其边界为闭曲线C。

2. 根据斯托克斯定理,将C上G的线积分分解为两个表面积分。

3. 由于F = curlG,将两个表面积分分别表示为球面两个部分表面积分中F的向量积。

4. 计算结果发现,两个表面积分的值相等但符号不同,这与数学逻辑矛盾。

5. 因此原假设F是某G的旋度是错误的。得证F不是任何G的旋度。

### 结论

通过用到斯托克斯定理,证明了一些矢量场不可能是另一矢量场旋度的限制条件。这说明斯托克斯定理可以用于判断矢量场是否满足旋度条件。
