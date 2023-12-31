# Convex Optimization II

> <https://www.youtube.com/playlist?list=PL7DD2F5ED3D1A1514>

## 1. Lecture 1 | 非凸优化与分布式优化方法 (斯坦福大学)

### 1.1 课程简介

本课程将比364a更加无组织,主要通过教师提供的课件与详细笔记进行学习。课程将探讨以下内容:

1. 非可微优化方法。直接处理非可微问题,而不是通过变换转化为可微问题。这些方法计算效率低下,但是分布式优化的基础。

2. 分布式优化方法。多个决策者通过局部决策来实现全局最优。经典问题包括网络流控制。现有的TCP/IP协议可以重新解释为解决某个凸优化问题。

3. 其他主题包括次梯度法、线性规划等。

### 1.2 非可微优化基础

非可微优化问题中包含绝对值、最大值等项。360a中通过变量替换将其变换为可微问题求解。本课将介绍直接处理非可微项的方法,例如次梯度法。这些方法计算效率低,但在分布式优化中重要。如果问题允许变换,仍应使用可微变换求解。

### 1.3 项目要求

项目格式较为简单,约5页。内容可以采用经典例子的简化版本。重在明确表达问题定义,而不是提供实质性解决方案。

### 1.4 其他内容

课程教学内容较为松散,但提供详细笔记以补充信息。鼓励同学查阅笔记完整掌握知识点。考试将由项目完成来取代。课程介绍后,教师开始介绍次梯度法的基本原理。

## 2. Lecture 2 | Convex Optimization II (Stanford)

### 凸优化基础知识回顾

- 上课我们介绍了子梯度,子梯度是对非可导函数求导的一种推广。具有子梯度的函数在某点,子梯度可以排除该点一半空间的函数值必定高于或等于该点。

- 函数若凸,则子梯度等价于梯度。子梯度推导出的不等式具有重要性,可以用于设计简单的函数优化算法。

- 上课停留在:如果G是F在X点的一个子梯度,那么对任意Y都有F(Y)≥F(X)+G^(T)(Y-X)

### 几近凸函数概念

- 几近凸函数是其子集级集凸的函数。常见的几近凸函数例子有线性分式函数。

- 对线性分式函数,可以直接计算出它在某点的子梯度,并验证子梯度推出的不等式是否成立。

- 多项式 degrees 函数也是几近凸函数。如果优化问题涉及多项式,可以将问题分解为各阶多项式的凸容式问题,然后采用二分法寻找最小阶数。

### 优化条件

- 对可导函数, stationarity 条件为梯度为零,即∇F(x)=0

- 对非可导函数,stationarity 条件为零在其子梯度范围内,即0∈∂F(x)

- 这两种情况的充分必要条件证明很简单,基本上就是定义推理。

- 非可导函数的子梯度集合可能包含多个元素,但它们必然包括或者跨越零点。

- 弱子梯度计算法无法直接判断是否满足优化条件,需要考虑强子梯度概念或其他方式。

## 3. Lecture 3 | Convex Optimization II (Stanford)

### 子梯度下降法

子梯度下降法非常简单,每一步都在子梯度的负方向移动。

步长大小通常采用固定值,例如1/k。

#### 证明过程

将当前点到最优值的距离定义为泛函,证明随迭代步数的增多,该距离会下降。

设当前点为Xk,最优点为X*,然后有:

‖Xk+1 - X*‖^2 ≤ ‖Xk - X*‖^2 - 2αk〈g,Xk - X*〉 + αk^2‖g‖^2  

其中:

- ‖Xk+1 - X*‖^2是下一个点到最优点的距离
- ‖Xk - X*‖^2是当前点到最优点的距离
- αk是步长
- g是子梯度
- 〈g,Xk - X*〉是子梯度和搜索方向的内积

如果αk足够小,内积项可以抵消步长项,从而保证距离下降。

通过递归使用不等式可以得到:

‖Xk - X*‖ ≤ R^2 - 2∑αk〈g,Xk - X*〉

其中R是初始化点到最优点的距离上限。

因此随着迭代次数增加,距离最优点的距离会收敛于一个范围内。

但是不同于梯度下降法,子梯度下降法无法直接 judging迭代的进展,因为泛函值无法直接获取。

## 4. Lecture 4 | Convex Optimization II (Stanford)

### 一. 平滑约束优化方法

#### 1. 规划子梯度法

规划子梯度法是在求解带约束的优化问题时常用的一种方法。它的步骤是:

1. 获取函数在当前点的子梯度
2. 沿着子梯度的反方向进行下降步
3. 投影结果回可行域内

这种方法适用于投影到可行域内非常容易实现的情况,例如单纯性半空间、非负性空间等。

#### 2. 对偶问题与规划子梯度法

我们可以将原始问题转换为对偶问题,将约束写到目标函数中。对偶问题通常具有更好的结构,可以更方便地使用规划子梯度法求解。

当原始问题的目标函数严格凸时,强对偶性就成立。这时求解对偶问题,找到对偶变量的优化值后,就可以通过拉格朗日对原始问题进行求解。

### 二. 子梯度的计算

子梯度是参考梯度的概念。我们可以通过选择目标函数在某点的最大点,来计算出该点的子梯度。

例如对偶目标函数G是极小化迹号下的函数。我们先找到这个函数在λ下的最小点X*,然后G对λ的子梯度就是X*关于λ的一阶变分。

### 三. 规划子梯度法在对偶问题中的应用

应用规划子梯度法求解对偶问题的过程如下:

1. 给定初值λ
2. 计算拉格朗日函数在当前λ下的最小点X*
3. 计算G对λ的子梯度
4. 沿着子梯度反向下降,投影回非负域
5. 重复前几步,直到收敛

这就是一个简单而高效的求解平滑约束优化问题的算法。

## 5. Lecture 5 | Convex Optimization II (Stanford)

### 随机规划问题

随机规划问题的目标和约束会依赖于一些随机变量。假设这些随机参数服从某个概率分布。然后可以最小化期望值,或者约束期望值。

### 确定等价问题

简单地用随机参数的期望值取代原始参数,转换成确定的优化问题。这种方法可以求出原始随机问题的下界。

### 概率约束

概率约束要求某个约束条件满足的概率超过一个门槛,例如99%。这类约束一般不是凸的,求解难度大。但如果约束是线性的,且随机系数服从连续分布,则可以转化成二次规划问题。

### 期望值函数

可以在期望值函数与原始函数之间添加任意单调非下降凸函数。例如可以求取约束违规的期望值或最大违规值的期望。

### 後验分析

解决确定等价问题找到解外,还可以带入随机变量验算该解是否满足原始问题。若差距在可接受范围内,则视为解决原始随机问题。这称为後验分析。

### 凸优化方法概述

介绍随机梯度下降算法可以解决含有随机参数的凸目标函数问题。重点介绍随机规划是一个广泛的研究领域,有多个专著来介绍它。

## 6. Lecture 6 | Convex Optimization II (Stanford)

### 一、定位方法

定位方法意味着将单纯形分割到较小的区域中去找解,它是二分法在多维空间中的广义化。

### 二、CG 方法

CG方法使用集合的重心点作为切面的查询点。重要的性质是:任何通过重心点的超平面都能将集合体积的37%至少切割下来。这保证了随着迭代,本地化集合的体积会迅速减小。

然而,计算重心点在高维空间时复杂度很高。可以采取近似计算重心点的方法,或使用随机方法如Hit-and-run算法计算近似重心点。

### 三、其他定位方法

其他常用的定位方法包括:最大体积椭圆、切比雪夫中心、解析中心等。每个方法都有其自身的收敛速度。

### 四、Hit-and-run算法

Hit-and-run算法是一种随机算法,用于近似计算单纯形内的均匀分布随机点。它的原理是:

1. 从当前点选择一个随机方向,并计算该方向与单纯形的两个交点;

2. 在交点区间内随机取样得到新的点;

3. 重复上述步骤,通过Markov链得到的点分布将趋于单纯形内的均匀分布。

但是,随着维度的增大,Hit-and-run算法检验点是否在单纯形内需要的计算量将呈指数级增长,不宜应用于高维优化问题。

总体来说,这节课主要介绍了定位方法在凸优化中的应用,以及CG方法和Hit-and-run算法在此中的概念。给出了不同定位方法之间的比较,探讨了它们在高维情况下的技术困难。

## 7. Lecture 7 | Convex Optimization II (Stanford)

本次视频讲授了分析中心剪切面方法和椭圆体方法在凸优化中的应用。

分析中心剪切面方法的主要思路是:

1.给定一个初等多面体,这个多面体已知包含目标集合。

2.找到多面体的分析中心,即线性不等式表达的分析中心。

3.在分析中心点查询剪切面 oracle,如果在目标集合内则结束,否则添加新剪切面。

4.添加新剪切面后,多面体缩小了,需要重新计算新的分析中心点。

5.重复上述过程,通过不断添加剪切面和计算分析中心点,逐步缩小多面体范围,找到目标值。

这个方法相比子梯度法,每个迭代步骤需要更多的计算和存储,但聚合程度更高,收敛速度更快。

视频给出了一个具体例子说明分析中心剪切面方法在20变量100项凸最小化问题上的应用,平均每个迭代需要11步牛顿法计算分析中心。

视频还介绍了椭圆体方法。其思路是:用一个球形或椭圆形的初等多面体包围目标集合,然后通过添加紧密平面不断收缩这个多面体,找到目标值。

两种方法都展示了很好的几何收敛特性,比子梯度法快得多。视频通过例子详细说明了这两个方法在凸优化问题中的应用。

## 8. Lecture 8 | Convex Optimization II (Stanford)

### 源头授课机构

本次视频由斯坦福大学的专业发展中心提供。

### 第一部分内容概述

第一部分主要讲授非微分可优化方法,其中重点讲解了提式法(Ellipsoid Method)。

### 提式法概述

提式法是一种处理非微分可优化问题的方法。它通过构建包含最优解可能区域的椭圆来近似该区域,然后通过评估局部下梯度来剔除不可能包含最优解的一半区域,从而不断缩小搜索范围。

### 提式法步骤

1. 初始化一个球形区域,包含可能的最优解区域
2. 计算当前点的下梯度
3. 根据下梯度信息,剔除不包含最优解的区域一半,更新搜索范围为剩余区域
4. 拟合包含更新区域的最小体积椭圆
5. 重复执行2-4步,直到收敛

### 提式法性能

提式法每个迭代需要O(n^2)的时间复杂度,但实际上仅适用于小规模问题,对大规模问题计算时间过长。它保证可以找到近似最优解。

### 第二部分概述

第二部分将讨论分布式和去中心化优化问题,将介绍这一课题的重要性以及相关的前沿研究方向。

## 9. Lecture 9 | Convex Optimization II (Stanford)

### 一、 项目提案要求

1. 论文标题必须统一格式,可以全大写或首字母大写。

2. 尽量使用提供的论文模板,包含各部分标题的统一格式。

3. 必须明确声明变量和数据。

4. 提交的论文中不得出现乱七八糟的版式,比如两列格式或特别设计的分隔线。

5. 必须使用BibTex进行参考文献管理,参考文献格式不能有错误。

6. 数学符号必须使用正确的格式,比如变量不能直接使用罗马体。含有英语含义的下标或上标需要使用罗马体表示。

7. 论文不能出现拼写或标点错误。

8. 语句与公式之间不能留空行,公式后的结束符号也不能错误。

9. 问题描述部分必须采用统一格式清楚说明变量和数据。

### 二、 项目提案改进要求

1. 中期评审截止日期为下周五。

2. 改进的内容不能简单修改,应实际进行尝试获得结果。

3. 提交修改后版,审阅员将对比之前版本判断改进程度。

4. 下次截止前请及时提交格式不合格的论文,以便修改。

5. 使用提供的LATEX模板,且内容格式与课件保持一致。

### 三、 LATEX写作技巧

1. 数学符号必须采用正确的字体,变量符号使用 Italic 体,英文含义的下标采用 Roman 体表示。

2. 语句与公式不能直接连接,公式前后需要适当地用逗号或句号分隔。

3. 禁止在公式后留空行,这会产生换行的错误意义。

4. 参考文献必须使用BibTex正确引用,注意 escape 特殊字符以防错字母变小写的问题。

5. 论文结构与格式不能随意更改,必须使用提供的课件模版。

6. 文字错误包括拼写错误和标点符号错误都不被接受。

7. 查看范文可以参考Newt写作,风格规范没有问题。

## 10. Lecture 10 | Convex Optimization II (Stanford)

### 速率控制

网络中的流量控制就是如何为多个流分配带宽。

假设有n个流,每个流通过固定路径传输。流量通过路径上的链路求和得到链路上的总流量。

每个流都有一个增长且凹函数的效用函数,表示流的带宽和取得的效用关系。

目标是最大化所有流的总效用,但需要满足链路上总流量不能超过链路容量限制。

这是一个凸优化问题,因为目标函数是 separable 的,而限制条件是线性的。

### Lagrangian 方法

使用 Lagrangian 方法,构建目标函数和约束条件的 Lagrangian:

L(f, λ) = -∑U(fj) + λT(Rf - c)  

其中 λ 是链路容量限制的 Lagrangian 乘子。

取洛日对 f 和 λ 的导数为零,可以得到:

∇fU(fj) = RjTλ

即流 j 上的效用函数的梯度等于该流通过的链路价格(λ)之和。

### 截面分解

注意到目标函数对每个流都完全分离,我们可以对其进行截面分解。

每个子问题只与一个流有关,目标是在固定λ下最大化该流单独的效用,同时满足通过路径对λ的线性限制。

这允许我们对问题进行分布式的求解。通过迭代更新λ,子问题迭代求解就可以找到最优解。

### 小结

 Lagrangian 方法可以变形原问题,将局部优化问题分解成独立的子问题。这里充分利用了目标函数和Hessian矩阵的结构,实现了问题的分解求解。

这提供了一种系统性的方法来分解优化问题,寻找其内在结构以实现分布式求解。

## 11. Lecture 11 | Convex Optimization II (Stanford)

本节视频主要讲述了非凸最优化问题的SEQUENTIAL CONVEX PROGRAMMING(顺序凸程序)方法。

顺序凸程序方法是一种局部优化方法。它通过迭代求解一系列凸近似问题来寻找非凸问题的解。

具体步骤为:

1. 初始化一个解近似值xk。

2. 生成一个信任域Tk,它包含xk。信任域决定搜索范围的大小。

3. 在信任域Tk内,对目标函数和不等式约束函数进行凸近似。等式约束使用仿射近似。

4. 使用近似函数构建出一个凸问题。同时添加保证近似有效的信任域约束。

5. 求解这个凸问题,得到一个解xk+1。

6. 更新xk=xk+1,扩大或调小信任域Tk,进入下一次迭代。

序列凸程序方法的优点是可以有效求解问题中的凸部分。但同时它也有以下缺点:

1. 求解的结果可能不是全局最优,也不一定能找到一个可行点。

2. 求解结果会受初始化点影响。

3. 近似错误会影响结果。

4. 不能给出精确的可优性证明。

除上述方法外,视频还简要介绍了其他非凸优化方法,如全局优化方法能找到全局最优但速度较慢。视频还阐述了优化问题的逐级求解框架。

## 12. Lecture 12 | Convex Optimization II (Stanford)

### 差的凸优化

差的凸优化是一种方法,可以解决非凸问题。其思路是:

1. 将目标函数和约束函数写成凸函数与凹函数之差。

2. 将凹函数部分进行线性化处理,使其成为一个线性函数。这样优化问题就转化为一个凸优化问题了。

### 例子

举例来说,估计协方差矩阵从样本中的最大似然估计问题就是一个非凸问题。但是可以将其写成目标函数对策略矩阵的求逆后的形式,这样目标函数就变成了对策略矩阵逆的凸函数,从而实现凸化。

### 交替凸优化

交替凸优化假设变量可以分组,每组内变量使问题凸,然后交替优化每组变量,使整体问题趋于最优解。

具体做法是:

1. 将变量分组,每个组内问题相对于该组变量都是凸的。

2. 固定某组变量值,优化其他组变量,得到新的解。

3. 固定新的解,优化前一组变量,并此循环。

### 小结

差的凸优化和交替凸优化都是常用的非凸问题优化方法。它们利用问题的某些性质,将非凸问题分解或近似为多个凸子问题,从而实现难题的求解。

## 13. Lecture 13 | 凸优化II (斯坦福)

本课程将继续介绍共轭梯度法。上课介绍了共轭梯度法用于求解对称正定矩阵系统方程的基本思想。

共轭梯度法与传统的矩阵分解法不同,它不需要矩阵本身,而只需要一个计算矩阵与向量乘积的函数。这在许多实际问题中矩阵过大难以存储时特别有用。

共轭梯度法利用克罗诺夫子空间进行迭代求解。克罗诺夫子空间是通过矩阵A作用于B矩阵而构成的子空间。随着迭代步数的增加,子空间维数增大,所求解的目标函数值也会下降。

介绍了两个测量误差的方法:一个是tau,表示函数值下降与原始子优化值下降的比例;另一个是残差,即Ax-b的大小。

若对矩阵A进行特征值分解,可以更清楚地理解共轭梯度法何时效率高。若A的特征值集中于较小的区域内,或解是一个线性组合的少量特征值对应的特征向量,都有可能得到很好的近似解。

共轭梯度法的两项递推关系可以高效地计算克罗诺夫子空间中每个向量,这是它工作良好的重要原因。并给出了矩阵条件数与迭代收敛速度的经典上界。

以一个7×7矩阵为例,说明共轭梯度法对小矩阵不太适用,但可以很直观地展示其工作机制。

## 14. Lecture 14 | Convex Optimization II (Stanford)

本节课主要介绍了截断牛顿方法和内点截断牛顿方法。

截断牛顿方法是在优化一个平滑的非线性凸函数时,用CG或PCG大约求解牛顿方程,而不是精确求解。这种方法可以快速得到一个合理的搜索方向。

研究者给出一个 logistic回归问题的例子。直接法在这个问题下需要很长时间,而截断牛顿法仅需很少的CG步数即可获得近似于直接法的精度。

研究者提出了10步、50步和250步三种截断牛顿方法。结果显示,仅10步CG就能获得非常好的近似解,优于直接法400倍。使用预条件的PCG,10步CG后即能获得足够好的搜索方向。

最后研究者补充说,截断牛顿方法也可以应用于等式约束问题。利用横向渐进障碍函数法或更复杂的原偏方法也可以实现。直接法与间接法之间实际上是一个灰色区域,因为在实际应用中,许多所谓的直接法也会进行一定步数的迭代修正。

## 15. Lecture 15 | Convex Optimization II (Stanford)

### 一元凸函数的凸包

如果函数f(x)在凸集C上定义,但f(x)本身不一定是凸函数,那么f(x)在C上的最大凸函数近似被称为f(x)在C上的凸包。

例如,计数函数 cardinality(x) 在区间[-1,1]上定义,它等于0或者1。cardinality(x)的凸包就是绝对值函数|x|。

### L1正则化方法的物理意义

我们可以通过将计数问题转换成0-1布尔凸问题来理解L1正则化方法的物理意义:

1. 使用布尔变量Z表示各维度是否为0

2. 引入限制条件|x| ≤ RZ,其中R是集合C上的上限

3. 将0-1布尔问题向上逼近成左右区间[0,1]的连续凸问题

4. 这就是经典L1正则化中minimizing ||x||_1的形式

所以,L1正则化实际上是布尔凸问题的凸松弛,其最优值给出了原问题解的下界。

### 回归选择问题

回归选择问题要求以尽可能少的特征数量近似拟合目标值B,可以用L1正则化形式解决:

min ||Ax - B||_2 + λ||x||_1

其中A是特征矩阵,x是特征权重。通过适当调节λ,可以得到非零权重少于K的稀疏解。

数值例子表明,L1正则化方法得到的解非常接近全局最优解,但计算成本远低于经典枚举法。

### 稀疏信号重构

重构一个稀疏信号同样可以用L1正则化解决:

min ||Ax - y||_2 + λ||x||_1

其中A是测量矩阵,y是采样信号,通过最小二乘与L1正则化的综合优化可以重构原始稀疏信号x。

## 16. Lecture 16 | 凸优化 II (斯坦福)

### 凸优化问题

- 凸优化问题描述为:给定一组不等式或等式约束,求解目标函数的最小值。

- 目标函数和约束必须是凸的。

- 凸优化问题的最优值是一个可是凸函数,即随着不等式或等式右边的值变化,最优值也是凸变化的。

### 动态规划

- 动态规划用来求解优化控制问题。给定动态系统的状态转移方程和各状态下的期望代价,求解控制输入序列使总代价最小。

- 定义动态系统状态Z在t时刻对应的最优值函数为V(Z)。也称为贝尔曼函数。

- V(Z)满足贝尔曼方程或动态方程:

  V(Z) = min_{W}{L(Z,W) + V(aZ + bW)}

  即当前状态Z采取动作W后总代价为本期代价加上下一期状态的最优值函数。

- 贝尔曼方程描述了动态优化问题的递归性质,可以用来迭代求解最优控制策略。

### 贪婪法

- 贪婪法求解动态优化问题的简单方法。

- 在每个时间点t,仅考虑本期代价函数L(Z,W),选择使其最小的控制输入W。

- 贪婪法忽略控制对未来状态和代价的影响。只保证下一时刻状态满足约束。

- 贪婪法通常效果不好。但如果动态系统具有强烈的记忆衰减(前一时刻状态对后续状态影响很小),那么贪婪法效果会很好。

## 17. Lecture 17 | Convex Optimization II (Stanford)

### 随机模型预测控制

这节课主要介绍随机模型预测控制。

线性动力学系统的状态更新过程受随机扰动项的影响:

```
x(t+1) = A x(t) + B u(t) + w(t)
```

其中`w(t)`代表随机扰动项。

控制输入`u(t)`必须是可观测状态序列`x(0)~x(t)`的函数,也就是反馈控制。这样可以利用随后的信息来更好的选择控制输入。

目标函数考虑控制每个时期的成本以及结束时的状态成本:

```
J = E[ΣL(x(t),u(t)) + Φ(x(T))]  
```

这里`L()`代表每个时期的成本,`Φ()`代表结束时的状态成本。

随机模型预测控制问题就是选择控制策略`φ(x(0)~x(t))`,使目标函数`J`最小。这里策略代表不同时期根据观测状态选择控制输入的函数。

这与普通最优控制问题不同,后者直接找到最优输入序列,而不是选择策略函数。策略函数引入了“追回机会”的概念,可以根据后续信息来改进决策,从而优化效果。

一般通过限制策略函数形成有限维抽取,然后迭代优化来求解这个问题。

### 17. Lecture 17 | Convex Optimization II (Stanford)

## 18. Lecture 18 | 双凸优化II (斯坦福大学)

这次课将介绍全局优化的分支定界法。

全局优化的目标是求解非凸问题的全局最优解,而不是局部最优解。分支定界法通过重复获取子区域的上下界,来逼近全局最优解。

分支定界法包含两个核心方法:

1. 下界计算方法。给目标函数在某个区域内提供一个下界。通常通过对偶性拉格朗日法求解。

2. 上界计算方法。给目标函数在某个区域内提供一个上界。方法包括直接计算区域中心点的值,也可以运行局部优化方法获取更优解。

算法步骤:

1. 对初始区域调用上下界计算方法,获取上下界U1、L1。

2. 判断上下界间隔U1-L1是否小于误差ε。如果满足,算法结束。

3. 如果不满足,选择变量切分区域,生成两个子区域。

4. 对每个子区域重复执行上下界计算和判断。

5. 算法结束条件:所有子区域上下界间隔均小于ε。

此外,下界计算最简单的方法是利用目标函数的利普希茨常数,直接下调区域中心点的值。这样可以保证随着区域缩小,上下界会逐渐收敛。

总之,分支定界法通过重复细分搜索空间和判断上下界,逐步逼近全局最优解,最终收敛到设定的误差范围内。它可以找到非凸问题的全局最优,但计算速度比局部方法慢。
