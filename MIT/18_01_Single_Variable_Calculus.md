- MIT 18.01 Single Variable Calculus, Fall 2006
- https://www.youtube.com/playlist?list=PL590CCC2BC5AF3BC1

# 1. Lec 1 | MIT 18.01 Single Variable Calculus, Fall 2007

## 一、这节课主要内容

1. 本单元主要内容是求导,从几何、物理和应用三个方面来解释求导。

2. 重点解释如何求任意函数的导数,例如求e^xarctanx的导数。

3. 引入导数的概念和定义,并给出求导公式。

4. 给出求1/x函数导数的详细例子。

## 二、导数的几何意义

1. 寻找函数曲线在某点的切线,就是求导问题的几何解释。

2. 切线方程为y-y0=m(x-x0),需求出点(x0,y0)和切线坡度m。

3. 点(x0,y0)直接由函数f(x0)给出。切线坡度m即函数在该点的导数f'(x0)。

4. 首先给出切线的几何定义:切线为使Q点逼近P点的斜率极限。

5. 进而给出Secant线斜率公式Δy/Δx和切线斜率极限表达式limΔx→0(Δy/Δx)。

6. 提出常用差商表达式求导数的公式:limΔx→0[(f(x0+Δx)-f(x0)]/Δx。

7. 又给出1/x函数的详细例子,求取其在点x0的导数。

## 三、导数的物理和应用意义

1. 导数在科学技术等领域中应用广泛,与各种测量都相关。

2. 对动量、速度、加速度等物理量都有直接意义。

3. 也广泛应用于经济、统计等非技术领域。
# 2. Lec 2 | MIT 18.01 Single Variable Calculus, Fall 2007

## 定义导数的几何意义

上次我们定义导数为切线斜率,给出几何解释。我们计算了几个函数的导数,如1/x的导数为-1/x^2,xn的导数为nxn-1。

## 定义导数的速率变化意义

我们将注意力从坐标轴上的Δx和Δy转向变化率。从一个点到另一个点的平均变化率为Δy/Δx。当Δx趋于0时,称为 instantaneous rate,即微分系数dy/dx。

## 物理学中的导数例子

1. 电量Q随时间T的变化率称为电流I,写作dQ/dT。

2. 距离s随时间t的变化率称为速度v,写作ds/dt。

## 南inherited风的导数例子

1. 温度T在空间坐标x的变化率称为温度梯度,写作dT/dx。它决定空气流动的方向。

2. 测量精度的敏感性。GPS系统测量距离H误差ΔH会带来地平线距离L误差ΔL。ΔL/ΔH约等于dL/dH,通过微分可以估计ΔL。这对飞机着陆至关重要。

## 泵kin掉例子

假设从 bldg 顶部高度为80m把南瓜掉下。给出南瓜下落高度H随时间T的方程为H=-5T^2+80。

1. 平均速度为ΔH/ΔT=-20m/s。

2. 瞬时速度dH/dT|T=4=-40m/s,约等于每小时90英里。

## 总结

导数从几何、物理和其他方面都可以解释,在现实问题中应用广泛。下一步将详细探讨极限和连续性。
# 3. Lec 3 | MIT 18.01 Single Variable Calculus, Fall 2007

## 导言

这节视频将介绍微分计算的一些通用公式,其中包括具体函数如x^n和1/x的导数公式,以及通用公式如求导和与常数相乘函数的导数公式。视频还将重点介绍三角函数正弦函数和余弦函数的导数公式。

## 具体函数的导数公式

- x^n的导数公式
- 1/x的导数公式

## 通用导数公式

- 求和函数的导数等于每个函数导数之和
- 与常数C相乘函数u的导数等于C乘以u的导数

## 正弦函数导数公式的推导

1. 写出正弦函数的差商
2. 使用正弦和式将差商分解为两个项
3. 将两个项中常数项分子分母相除后极限趋于0,另一项极限趋于1
4. 得出正弦函数导数为余弦函数

## 余弦函数导数公式的推导

1. 写出余弦函数的差商
2. 使用余弦和式将差商分解为两个项
3. 进行分解和求极限,得出余弦函数导数为负正弦函数

## 极限性质A和B的证明

通过计数正弦和余弦在原点处的几何意义,给出性质A和B的几何证明。
# 4. Lec 4 | MIT 18.01 Single Variable Calculus, Fall 2007

## 产品法则

产品法则描述如何求两个函数的乘积导数。规则是:

$$
(uv)' = u'v + uv'
$$

举例:求导数$ (x^n\\sin x)$ ,使用产品法则:

- $u=x^n$ ,$u'=nx^{n-1}$
- $v=\\sin x$ , $v'=\\cos x$
- 所以 $(x^n\\sin x)'=nx^{n-1}\\sin x+x^n\\cos x$

## 理解产品法则

我们可以通过计算函数在$x+\\Delta x$处的值,与在$x$处的值的差别,来理解产品法则。

函数在$x+\\Delta x$处的值是:$u(x+\\Delta x)v(x+\\Delta x)$
函数在$x$处的值是:$uv$

它们的差即为产品的变化量$\\Delta(uv)$:

$$
\\Delta(uv)=u(x+\\Delta x)v(x+\\Delta x)-uv
$$

将其展开,取极限,可以得到产品法则。

## 商法则

商法则描述如何求两个函数商的导数。规则是:

$$
\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}
$$

理解商法则的过程与理解产品法则类似,通过计算商在$x+\\Delta x$处和$x$处的值的差别,然后取极限,可以得到这个规则。

## 高阶导数

高阶导数描述函数中各阶导数的变化规律。

如果$f(x)$的$n$阶导数存在,$f^{(n)}(x)$表示$f(x)$在$x$点的$n$阶导数。

设$f(x)=u(x)$,$u(x)$的$n$阶导数可以表示为:

$$
f^{(n)}(x)=u^{(n)}(x)
$$

即函数$f(x)$在$x$点的$n$阶导数,等于$u(x)$在该点的$n$阶导数。
# 5. Lec 5 | MIT 18.01 Single Variable Calculus, Fall 2007

## 隐式求导

隐式求导是一种可以求导很多之前不会的函数的技术。

### 例子1:求导y=x^(m/n)

1. 把函数写为等式:y=x^(m/n)

2. 将等式提到n次方:y^n=x^m

3. 对等式应用求导运算:dy/dx=(dy/dy)*(dy/dx)=(n*y^(n-1))*dx/dx

4. 使用链式法则:dy/dx=m*x^(m-1)/n*y^(n-1)

5. 将y替换为函数式:dy/dx=m*x^(m-1)/n*(x^(m/n))^(n-1)=m*x^(m-1-n)

所以隐式求导得出y的导数式为:dy/dx=m*x^(m-1-n)

### 例子2:求导√(1-x^2)

1. 将函数写为等式形式:x^2+y^2=1

2. 将等式解为显式函数:y=√(1-x^2)

3. 使用链式法则:y'=1/2(1-x^2)^(-1/2)*(-2x)

4. 或直接对隐式函数求导:dy/dx=(2x)/(2y)=-x/√(1-x^2)

所以隐式求导得出y的导数式为:-x/√(1-x^2)

### 总结

隐式求导是一种直接对含义函数的定义式求导,而不是先将其写成显式函数形式再求导。它可以很简洁高效地求导一些复杂函数。关键是正确应用链式法则。
# Lec 6 | MIT 18.01 Single Variable Calculus, Fall 2007

## 指数函数

指数函数定义为:
- a^0 = 1
- a^1 = a
- a^x1+x2 = a^x1 * a^x2

指数函数图形特徵:
- 基数a为正数
- 随x增大,函数值迅速增长
- 放射状增长

## 指数函数导数

求导过程:
- 根据指数和式的性质,将指数函数分解为基数与指数函数的乘积
- 识别指数为变量Δx,基数a为常数,将其提取出限制外
- 将问题转化为计算M(a)的值

指数函数导数公式:
- d/dx(a^x) = M(a) * a^x
- 其中M(a)称为目前未知数

## 自然底数e

定义自然底数e:
- 使得M(e)=1的唯一数

e的特性:
- d/dx(e^x) = e^x
- 在x=0处的导数即坡率为1

证明e存在:
- 根据任意基数a的指数函数,在x=0处的导数定义其坡率M(a)
- 由 Bolzano监督定理,在某个基数时,其M(a)值落入区间[0, 2]之间
- 因此通过不断迭代逼近,可以找到使M(a)=1的唯一基数e

所以可以定义通用指数函数导数公式。找到e也验证了指数函数的连续性。
# 7. Lec 7: Exam 1 review | MIT 18.01 Single Variable Calculus, Fall 2007

## 一般的导数公式

- 求和函数的导数:求每个函数的导数相加。
- 数乘函数的导数:数值因子的导数为0,函数本身求导不变。
- 乘积律:求导函数的乘积的导数为导函数1乘导函数2加导函数1乘导函数2的导数。
- 商律:求导函数的商的导数=(导分子乘导分母-导分母乘导分子)/(分母的平方)。
- 链式法则:求导复合函数的导数为内函数的导数乘外函数的导数。

## 指数函数的导数

- 对任意实数R,指数函数x^R的导数为Rx^{R-1}

可以用两种方法求导:

1. 用以e为底的指数函数表示指数函数,然后利用指数函数性质进行求导.

2. 将指数函数取对数,利用对数微分的性质进行求导.

两种方法结果一致.

## 自然对数的应用

在经济学中,常用自然对数描述价格或指数的变化.因为考虑到价格比例变化的意义,而不是 absoulte 价格变化.

自然对数能很简单且直接地描述价格比例变化,其它对数底数会增加不必要的复杂性.所以自然对数是描述这类应用场景最"自然"的.

## 准备考试内容总结

考试会考核单变量微分概念、一般导数公式及其应用、指数函数及对数函数的导数计算等知识点.

需要熟记一般导数公式,掌握指数函数和对数函数的导数计算方法,能应用 chain 法则求导复杂函数.
# 8. Lec 9 | MIT 18.01 Single Variable Calculus, Fall 2007

## 线性近似

线性近似公式为:

$$f(x) \approx f(x_0)+f'(x_0)(x-x_0)$$

其中:

- $f(x_0)$是函数$f(x)$在点$x_0$的值
- $f'(x_0)$是函数$f(x)$在点$x_0$的求导值
- 这个公式仅在$x$接近$x_0$时适用

## 各函数的线性近似公式

### 正弦函数

$$sin(x) \approx x$$

当$x$接近0时,正弦函数的线性近似为正弦函数本身。

### 余弦函数

$$cos(x) \approx 1$$

余弦函数在0处为常数1,其线性近似也是常数1。

### 指数函数

$$e^x \approx 1+x$$

指数函数在0处的导数和函数值均为1,其线性近似为1+x。

### 对数函数

对数函数$f(x)=log(1+x)$,其导数$f'(x)=\frac{1}{1+x}$,函数值$f(0)=log1=0$,导数值$f'(0)=1$,则线性近似为:

$$log(1+x) \approx x$$

### 幂函数

幂函数$f(x)=(1+x)^r$,其导数$f'(x)=r(1+x)^{r-1}$,函数值$f(0)=1$,导数值$f'(0)=r$,则线性近似为:

$$(1+x)^r \approx 1+rx$$

## 图形解释

以上各函数的线性近似可以通过绘制函数图形和切线来解释和记忆。
# 9. Lec 10 | MIT 18.01 Single Variable Calculus, Fall 2007

## 近似计算

近似计算是在实际应用中常见的一种做法。特别相对论中假设地球上的卫星时钟与地球时钟的变化率与速度的平方成比例:

Δt/t ≈ 1/2(v2/C2)

这里Δt表示时钟变化率。这提供了一个很好的直观理解:变化率与速度的比例成正比。

同样地,在本课的家庭作业2b题1中,球投手投球速度与投手丘高度也呈近似线性关系。这里delta h表示投手丘高度变化,a表示变化率。

这种近似计算法适用于许多领域,如天气预报、经济预测、小行星威胁评估等。它简化了原本复杂的公式,使问题变得可以理解和设计。

## 一阶和二阶近似

一阶近似表示函数在某点的切线。具体公式为:

f(x) ≈ f(0) + f'(0)x

这里f(0)表示函数在0点的值,f'(0)表示函数在0点的导数。

二阶近似考虑函数的曲率,公式为:

f(x) ≈ f(0) + f'(0)x + f''(0)x2/2

这里新增了二阶导数项f''(0)x2/2。

## 常见函数的二阶近似

以下几个常见函数在x接近0时的二阶近似公式:

- 正弦函数sinx ≈ x
- 余弦函数cosx ≈ 1 - x2/2
- 指数函数ex ≈ 1 + x + x2/2
- 对数函数logx ≈ x - x2/2
- 幂函数(1+x)r ≈ 1 + rx + r(r-1)x2/2

这些公式记忆起来需要经验,但能用于描述各种函数在某点的微小变化趋势。
# Lec 10 | MIT 18.01 Single Variable Calculus, Fall 2007

## 线性近似

- 线性近似用于描述函数在某一点附近的变化情况
- 例如狭义相对论中的时间变化公式可以近似表达为Δt=(1/2)v^2/c^2
- 这说明Δt/t与v^2/c^2成正比
- 因而可以表达为误差率约为(1/2)(v^2/c^2)
- 作业问题1也是这样,扔球速度的变化率与堆高成正比
- 这类线性近似能帮助分析复杂问题,是工程应用中的重要概念

## 二次近似

- 当线性近似无法满足需求时,使用二次近似
- 二次近似公式为:
  f(x)≈f(0)+f'(0)x+(1/2)f''(0)x^2
- 取平方项的系数为1/2,是为了使该公式对二次函数本身也恰当
- 举例解析证明系数为1/2
- 给出一些常见函数在原点附近的二次近似表达式:

```
sin(x)≈x
cos(x)≈1-(1/2)x^2
e^x≈1+x+(1/2)x^2
log(1+x)≈x-(1/2)x^2
(1+x)^r≈1+rx+(r(r-1)/2)x^2
```

- 这些近似表达式在原点附近时是稳定的,但随着x增大会出现较大误差

## 近似的应用

- 很多领域都需要使用这类近似,如天气预报、经济预测等
- 仅考虑主导项的近似公式能简化问题, otherwise 计算过于复杂无法解释
- 但近似所带来的误差也需要考虑在内
- 经验上一些次要因素对结果影响不大,可以忽略不计
- 只有掌握这类近似的经验,才能在复杂问题中找到方法
# 10. Lec 11 | MIT 18.01 Single Variable Calculus, Fall 2007

## 关于滑尺图的另一个例子

本节介绍了函数 $f(x)=x+\frac{1}{x+2}$ 的滑尺图。

首先,此函数的导数是$f'(x)=\frac{-1}{(x+2)^2}$,也就是说没有特殊点。一些学生可能会在这里放弃,但实际上还可以继续分析。

我们可以考虑函数在什么地方是不定义的,比如$x=-2$。用限值从左右两边求解$f(-2)$,可以得出$f(-2)=-\infty,+\infty$。

此外,考虑函数在极限处($x\rightarrow+\infty$或$x\rightarrow-\infty$)的取值。可以化简为$\lim_{x\to+\infty/\infty}(1+\frac{1}{x})/(1+\frac{2}{x})=1$。所以函数的两个渐近线分别是$y=1$和$x=-2$。

用已知信息,我们可以画出函数的大致形态:通过$x=-2$处下跳至$-\infty$,上跳至$+\infty$;两端都与$y=1$渐近线。且因为导数没有特殊点,函数在任意区间都不会“回溯”。

为了检查,我们又求得函数的第二导数$f''(x)=\frac{2}{(x+2)^3}>0$,证实了函数在$-2<x<+\infty$和$-\infty<x<-2$区间都呈增长态势。但我们不能说全域$x$上函数都增长,因为它在$x=-2$处“断裂”。

## 关于导数和第二导数

再次求导,我们可以用代数方法简化得出原来的导数形式$f'(x)=\frac{-1}{(x+2)^2}$。

此外,根据导数的表达式,我们也可以看出此函数实际上描述的是一个双曲线。

最后,我们注意到第二导数$f''(x)>0$,证实了函数在两个区间内都是增长的,与之前的分析结论一致。

但我们不能说函数在整个定义域上都是增长的,因为它在$x=-2$处“断裂”,这是分析此类函数时非常关键的一点。
# 11. Lec 12 | MIT 18.01 Single Variable Calculus, Fall 2007

## 最大值和最小值问题

### 给出第一个例子

例子是一个长度为1的线条被切成两段,每段线条围成一个正方形。问题是求封闭面积最大值。

### 画示意图并定义变量

将长度为1的线条画出,用x表示其中一段线的长度,则另一段为1-x。

### 写出面积函数表达式

设a为面积,则a=x^2/4+(1-x)^2/4

### 求导数找危点

求导数da/dx=x/8-(1-x)/8,令其等于0得x=1/2

### 计算关键值和检查端点

当x=1/2时,a=1/32为最小值。检查端点时,x→0或1时,a均为1/16。

### 总结例子

通过这个例子说明通过求导数找到的只是最小值位置,还要检查端点才能找到最大值。

## 最大值和最小值的概念

### 区分最小值和最小点

最小值是函数取值的最低点,最小点是函数图形上最小值对应的点。

### 问题要明确是求值还是点

避免含糊不清,应明确问最小值运算值,还是最小点位置。

## 给出第二个例子

详细省略。
# 12. Lec 13 | MIT 18.01 Single Variable Calculus, Fall 2007

## 相关率问题

教授给出第一个相关率问题:一个三角形,警察站在路边30英尺处监视,驾驶者在车道向警察驾驶,距离为D,初始为50英尺。问题是如果D的速率为-80英尺/秒,驾驶者是否超速。

通过解析几何关系式:x^2 + 30^2 = D^2,并采用隐含求导的方法,得出dx/dt = 2D*dD/dt。代入已知条件,得dv/dt=-100英尺/秒,大于速限65英里/小时,所以答案是Yes。

## 锥形水槽例题

教授给出第二个例题:一个底面半径4英尺,深10英尺的锥形水槽,水以2立方英尺/分钟的速度入槽。问题是当水深为5英尺时,水涨速dh/dt是多少。

绘制图形表示问题,得到几何关系:r/h=4/10。根据锥体体积公式V=1/3πr^2h,设置体积公式dV/dt=2,采用隐含求导的方法,得出dh/dt=1/2π英尺/分钟。

## 隐含求导方法

教授强调解这类相关率问题应采用隐含求导的方法,避免事先求解变量函数关系所浪费时间。先画图表达问题几何关系,识别已知条件,设置公式,最后通过隐含求导求解问题。
# Newton's Method

## Review Newton's Method

Newton's method is used to find the x-coordinate where a curve crosses the x-axis. We take an initial guess x0, draw the tangent line at that point, and the x-intercept of the tangent line gives us the next guess x1. We repeat this process, using the formula:

$$x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}$$

## Analyze the Accuracy

The distance between the guesses and the true root is called the error En. We have:

- E1 is the error of the initial guess x1
- E2 is the error of the next guess x2
- En is the error of the nth guess

The key observation is that E2 will be approximately the square of E1, because the separation between the curve and tangent line is quadratic near the point of tangency.

This means that at each step, the number of accurate digits doubles. So the method converges rapidly.

## Conditions for Newton's Method to Work

Newton's method works well if:

1. The derivative f'(x) is not too small. If f'(x)=0, the tangent line will be horizontal and x1 is undefined.

2. The second derivative f''(x) is not too large. This relates to how curved the curve is.

3. The initial guess x0 is close to the true root. Otherwise we may converge to the wrong root.

4. The function does not have certain pathological behaviors like repeated roots that cause the iteration to cycle.

## Mean Value Theorem

The mean value theorem, abbreviated MVT, informally states that if you travel between two points, your average speed during the journey must be between the minimum and maximum speeds you traveled at.

This simple observation forms the foundation for conceptualizing integration as computing averages. In a couple lectures, we will see how MVT allows us to launch into the concept of integration.
# 14. Lec 15 | MIT 18.01 Single Variable Calculus, Fall 2007

## 微分

微分dy代表函数y对x的那个增量的增量。也就是f'(x) dx。

dy/dx代表导数,是这两个增量的比值。

微分的概念源自莱布尼茨。它代表无限小的增量,让我们可以更容易地思考极限和导数的概念。

## 线性近似

如果函数在点a处满足f'(a)=m,那么函数在该点的线性近似为:

f(x) ≈ f(a) + m(x - a)

使用微分的记号,更具体地说是:

y ≈ Y + dy/dx * DX

其中,Y代表函数在x=a时的函数值,dy/dx代表函数在该点的导数,DX代表x相对a的变化量。

## 反导函数

反导函数,也称为不定积分,用以下符号表示:

∫g(x)dx

它代表的是使得导函数等于g(x)的任何函数F(x),加上一个常数项。

例如:

∫sinxdx = -cosx + C

∫x^adx = (1/(a+1))x^(a+1) + C , a≠-1

∫dx/x = ln|x| + C

## 其他主题

介绍微分的历史背景,以及莱布尼茨与牛顿在符号上的区别。

介绍了无限小量的概念,以及为何它比差分更好地描述导数和极限。

举了更多反导函数的例子,如 ∫e^xdx等。
# 15. Lec 16 | MIT 18.01 Single Variable Calculus, Fall 2007

## 使用变量对微分方程进行分解

微分方程的一种形式是:

f(x) * g(y) = dy/dx

这种形式的微分方程可以使用变量分解法解决。具体步骤是:

1. 将方程分解为独立变量两边:

   dy/dx = f(x) * g(y)

   由于Leibniz定下的微分符号规则,可以将g(y)除以分离变成:

   dy/g(y) = f(x) * dx

2. 对分离后的变量求导数:

   ∫ dy/g(y) = ∫ f(x) dx

3. 求导得到函数H(y), F(x):

   H(y) = ln|y|
   F(x) = -x^2/2

4. 两个函数必须除常数相等:

   H(y) = F(x) + C

5. 求反函数得出最终方程形式:

   y = ±e^(-x^2/2)

这种方法称为变量分离法,适用于微分方程形式为f(x)·g(y)的情况。它利用微分符号的属性,将方程分解为独立变量,然后求导得出隐式或显式解。

## 结论

1. 使用变量分解法可以解决dy/dx = f(x)·g(y)形式的微分方程。

2. 关键步骤是利用微分符号规则,将方程分解为独立变量两边。

3. 求导后得到两个只含一变量的函数,利用它们必须除常数等关系得到隐式或显式解。

4. 这种方法很适用于实际问题,如波动方程等。
# 16. Lec 18 | MIT 18.01 Single Variable Calculus, Fall 2007

## 最初内容

视频提供内容是根据知识共享授权使用的。支持 MIT 开放课程会继续提供高质量的教育资源。可以到 MIT 开放课程网站查看更多课程材料。

## 集成引入

集成(Integration)是微积分的第二部分,在微分之后。今天将介绍定积分的概念。

## 定积分的几何意义

定积分从几何上表示求函数下面区域的面积。

## 定积分符号

用积分符号表示定积分,在积分符号内加入函数和间切变量,并在上下限指定函数下界和上界。

## 计算定积分的三个步骤

1. 将区域分割为矩形。实际上无法完全将弧形区域分成矩形,这里将弯曲区域看作“近似矩形”。

2. 求各小矩形的面积并加起来。

3. 让矩形趋于无限细,通过极限来确切得到函数下区域的面积。

## 第一个例子

以f(x)=x^2作为例子,从a=0开始,b任意。

1. 画出函数曲线。

2. 将x轴分成n等分,形成n个矩形。选择矩形右边界贴合曲线。

3. 写出各矩形宽度(底边)和高度公式。

4. 求矩形面积之和公式。

5. 分解公式,引入极限看清规律。

6. 通过建立阶梯形金字塔模型理解项与项之间的关系。

7. 推导出定积分的标准公式形式。

## 人: 可以加入一些定积分应用的介绍吗?
# 17. Lec 19 | MIT 18.01 Single Variable Calculus, Fall 2007

## 基本定理

基本定理说,如果 F' = f,那么从a到b的积分值等于F(b) - F(a)。

换句话说,如果函数f的导数等于F,那么与它的不定积分F之间存在关系:

∫ab f(x)dx = F(b) - F(a)

这就是基本定理。它把积分与导数联系起来,是积分学最重要的定理之一。

## 例一

如果F(x) = x^3/3,它的导数f(x) = x^2。

根据基本定理:

∫01 x^2dx = F(1) - F(0) = 1^3/3 - 0^3/3 = 1/3

## 例二

如果函数是正弦曲线上的一段,从0到π:

∫01 sinxdx

它的不定积分是-cosx。根据基本定理:

∫01 sinxdx = -cosπ - (-cos0) = 2

## 例三

任意高次幂的函数都可以进行积分。

如∫01 x^100dx,它的不定积分是x^(101)/101。应用基本定理得1/101。

## 积分的直观解释

如果看作是时间与速度的关系,当速度积分值代表行驶距离。

基本定理说明从开始点到终点的总行驶距离,等于终点位置减开始位置。

## 负函数的积分

基本定理也适用于负函数。如果速度方向有时是正有时是负,正负抵消后得到的总行驶距离应该是0。

所以积分定义可以扩展到负函数,公式形式不变。如果导数值是负数,就写在积分中。
# 18. Lec 20 | MIT 18.01 Single Variable Calculus, Fall 2007

## 基本积分定理

基本积分定理中我们称为FTC1,是指:如果F' = f,那么从a到b的f(x)dx积分等于F(b) - F(a)。

## 基本积分定理与平均值定理的比较

为了比较基本积分定理与平均值定理,我引入了ΔF和Δx的符号:

ΔF=F(b)-F(a)

Δx=b-a

基本积分定理可以写成:

ΔF= (1/Δx) * ∫从a到b f(x)dx

这里右端的表达式就是f的平均值。

平均值定理说ΔF=F'(c)Δx,但是c位置不确定,只知道在a到b区间内某处,所以无法较为具体地得出结论。

而基本积分定理给出的结论要更具体和强硬,它告诉我们ΔF实际上等于f在该区间的平均值,这一点比平均值定理强多了。

## 极值定理与基本积分定理的联系

利用基本积分定理,我们可以得出ΔF在f的最大值和最小值之间:

ΔF ≥ ∫从a到b极小f(x) dx

ΔF ≤ ∫从a到b极大f(x) dx

这就等价于利用平均值定理得到的结论ΔF在F'(c)Δx的最大极小值之间。

## 应用基本积分定理解决考试例题

考试例题给出F'(x)=1/(1+x),求F(4)-F(0)的范围。

使用基本积分定理,有:

F(4)-F(0)=∫从0到4 1/(1+x) dx

通过求解此积分的上下Riemann极限,可以得到结论为5-4/5之间。

这与使用平均值定理得出的结论是一致的。

## 总结

基本积分定理比平均值定理给出的结论更加具体和强硬,同时它可以用Riemann求积来求出更精确的数值范围。所以一旦掌握了基本积分定理,就可以放弃使用平均值定理。
# 19. Lec 21 | MIT 18.01 Single Variable Calculus, Fall 2007

## 正确平均值公式

教授提醒上次讲平均值公式忘记了一个重要因子n,分母应该除以总数n。

## 导数定积分关系

### 普适定理

基础定理公式二:$f'(x)=\frac{d}{dx}\int_{a}^{x}f(t)dt$

### 用在解微分方程

可以用此公式解如$y'=1/x$的微分方程:$L(x)=\int_{1}^{x}\frac{1}{t}dt$

## 以对数函数为例

### 对数函数定义

将$L(x)=\int_{1}^{x}\frac{1}{t}dt$定义为对数函数$\ln x$

### 对数函数性质

1. 导数$L'(x)=\frac{1}{x}$

2. $L(1)=0$

3. 画出对数函数图,可知单调增加,原点为$(1,0)$

4. 将$L(e)=1$定义为底数e

### 其他性质推导

通过导数与原点值,推导出$\ln x<0$ 当$x<1$

通过改变原分式顺序,也可以推导出此结论

证明$\ln(ab)=\ln a + \ln b$

## 其他函数例子

### F(x) = ∫ from 0 to x of e^-t^2 dt

1. 导数$F'(x)=e^{-x^2}$

2. 原点为$(0,0)$

3. 二导数$F''(x)=-2xe^{-x^2}$

可知单调增加但无解析表达式
# 20. Lec 22 | MIT 18.01 Single Variable Calculus, Fall 2007

## 单变量积分介绍体积积分

教授开始继续上一次的讨论,介绍了体积积分的概念。

### 取食物为例说明切片方法计算体积

以一块面包为例,教授解释如何通过切片的方法计算面包的体积。面包可以切成很多薄片,每个片的体积约为片面积与厚度的乘积。将所有片的体积相加就可以求出整块面包的体积。

### 定积分表示体积积分公式

将切片的方法总结成一个公式:体积=∫体积增量dv=∫面积dA×厚度dX。而dA和dX会随X的变化而变化,所以整体积分才能求出总体积。

### 旋转体积的概念

介绍旋转体积的概念。如果将一个图形旋转一个轴,就可以得到一个三维立体。教授给出了一个例子:将一个图形旋转x轴,就可以得到一个“足球”形状。

### 盘积分法计算旋转体积

给出了利用盘积分法计算旋转体积的方法。通过考虑各个“盘状切片”,计算出该切片的体积,然后将所有切片体积相加,就可以求出整体旋转体积。

### 例题:球体积的计算

以计算一个球体积为例。利用旋转体积概念将球看作是将一个圆形曲线绕x轴旋转得到。给出公式π∫(球面积)dx,并求解得到球体积公式V=4/3πr^3

### 公式能计算部分体积

进一步解释该公式不仅可以计算整个球的体积,也可以计算球部分体积。给出了位置参数x的函数表示部分球体积,并验证当x=r时结果是半球体积。

## 问题集中给出的例题与公式相关

教授提到问题集会给出一个与此课程相关的真实问题,需要利用刚讲解的公式加以解答。
# Lec 23 | MIT 18.01 Single Variable Calculus, Fall 2007

## 平均值

平均值是积分的一个重要应用。如果将函数在某个区间内平均值表示为微分形,那么它就是:

$$
\int_a^b f(x)dx / (b-a)
$$

这里的分母(b-a)保证了常量函数的平均值等于该常量。

### 例1:常量函数

如果f(x)是一个常量c,那么它的平均值就是c。

### 例2:半圆弧上的点的平均高度

如果考虑半圆弧上的点,其高度函数为$\sqrt{1-x^2}$,那么希望从-1到1区间上的平均高度就是π/4。

## 坐标轴变换

如果考虑半圆弧上点的平均高度,但采用弧长θ而不是x作为变量,那么平均高度的表达式为:

$$\int_0^\pi \sin{\theta} d\theta /\pi$$

因为高度函数用θ表示时为$\sin{\theta}$,弧长从0到π。通过求导积分,平均高度为2/π,小于π/4。

这表明采用不同变量来计算平均值会得到不同结果。变量的选择决定了函数值在区间内的权重分布。用θ作为变量会更强调弧线低处的函数值。
# Dartboard Example
## The setup
This example is calculating the probability that someone's little brother gets hit by a dart on a dartboard. We assume:

1. The number of hits is proportional to C * e^(-R^2), following a normal distribution. R is the radius from the center.

2. We define two concentric circles with radiuses r1 and r2. The region between them is called the "part".

3. The likelihood of hits is measured as the volume of revolution obtained by rotating the curve between r1 and r2 around the x-axis.

4. The probability is calculated as the ratio of the "part" volume to the total possible volume.

We will use the method of shells to calculate the volume. The integral is from r1 to r2, with shell height e^(-R^2), circumference 2πR, and thickness dR.

## Interpreting the model

- This distribution approximates someone aiming for the center but missing randomly. Most hits will be near the center, but the total volume comes from farther out due to more area.

- The constant C is ambiguous since it depends on number of attempts. But it will cancel out in the part/whole ratio.

- We approximate where the little brother stood as some sector between r1 and r2. His location probability will be this sector's volume ratio.

So in summary, this setup models the dart throwing as a normal distribution, and calculates the probability of a given target region using a volume of revolution integral.
# 23. Lec 25 | MIT 18.01 Single Variable Calculus, Fall 2007

## 数值积分方法

### 矩形法
采用矩形近似求定积分。将区间分成若干小段,假设每个小段的函数值等于该小段中的某一个点的值,然后求面积 sum of (函数值×段宽)。

### 梯形法
将每个小段看作一个梯形来近似,梯形的高度为两个端点函数值的平均值,然后求面积。

### 辛普森法则
将每个小段看作一个抛物线来近似,抛物线通过三个点(端点和中点),由这三点函数值确定抛物线,然后求面积。相比梯形法,精度更高。

## 例子

取积分 ∫ from 1 to 2 of (1/x) dx ,知道真实解为ln2.

### 矩形法
将区间分为两个段[1, 1.5],[1.5, 2],求每个段内近似矩形面积相加。结果误差大约0.3。

### 辛普森法则
将区间分为两个段,采用抛物线近似,结果为0.6931,误差小很多,近似真实解。

## 数值积分误差分析

### 辛普森法则误差分析

采用n个均匀分段,若函数在每个段内可以通过二次多项式拟合,则误差与分段宽度Δx的4次方成比例,即O(Δx^4)。

即当Δx减小一半,误差将减少16倍。

### 使用条件

1函数必须光滑,否则高阶导数失去意义

2近 singular点(如0点),误差难以控制

## 计算常数π/2的方法

利用已知积分∫ from -∞ to +∞ of e^(-x^2) dx = √π

将求面积问题转化为求体积问题,利用球坐标积分变换公式。

End
# 24. Lec 27 | MIT 18.01 Single Variable Calculus, Fall 2007

## 基础知识概述

- 三角函数的定义来源于圆周率为1的单位圆上,将点P投影到X轴的值定义为余弦θ,Y轴的值定义为正弦θ.

- 正弦函数的导数为余弦函数,积分为正弦函数.余弦函数的导数为负弦函数,积分为负余弦函数.

- 三角函数的基本恒等式:

  正弦θ平方等于1-余弦θ平方

  余弦2θ等于余弦θ平方-正弦θ平方

  正弦2θ等于2正弦θ余弦θ

- 半角公式:余弦θ等于(1+余弦2θ)/2,正弦θ平方等于(1-余弦2θ)/2.

## 三角函数积分

### 1. 当指数中包含奇数时候

可以利用三角函数的导数性质,将积分变形成常数函数积分即可直接求解.

例如:∫sin^n(x)cos(x)dx = sin^(n+1)(x)/(n+1)+C

### 2. 当指数中所有都是偶数时

需要使用三角恒等式化简函数,再利用奇函数中一个指数为奇数的情况进行求解.

例如:∫sin^3(x)cos^2(x)dx = ∫[sin^2(x)(1-cos^2(x))]cos^2(x)dx
= ∫(cos^2(x)-cos^4(x))dx

## 三角函数变换求微分

利用三角函数的性质,设定新的变量替换原函数,使积分变形为无 FUNCTIONS的形式从而求解.

例如:∫sin^n(x)cos(x)dx, 设u=sin(x),则du=cos(x)dx.求得∫u^n du=\frac{u^{n+1}}{n+1}+C

## 问题与解决

- 变量替换后需要将结果还原为原变量

- 注意变量替换的df/dx关系

- 可以利用导数核对求积分结果
# 25. Lec 28 | MIT 18.01 Single Variable Calculus, Fall 2007

## 函数导数与积分

### 三角函数的导数

- 其中一个重要的三角函数导数公式:假设y=tan(x),那么y' = sec^2(x)
- 根据导数定义,可以计算出其它三角函数的导数,如sec(x)的导数是sec(x)tan(x)

### 三角函数的积分

- 根据导数公式,可以推导出对应的三角函数积分:

- ∫sec^2(x)dx = tan(x) + C
- ∫sec(x)tan(x)dx = sec(x) + C
- ∫tan(x)dx = -ln|cos(x)| + C
- ∫sec(x)dx = ln|sec(x)+tan(x)| + C

### 三角代换

可以利用三角函数关系将更复杂的积分转化为简单积分,示例:

- ∫DX/(x^2√(1+x^2))
- 设x=tanθ,则dx=sec^2θdθ,1+x^2=sec^2θ
- 将题中积分转化为∫secθdθ,进而得到答案

### 三角多项式的积分

利用三角函数导数公式和三角恒等式,可以求解包含三角函数多项式的积分。

例如:
∫sec^4(x)dx = tan(x)+tan^3(x)/3 + C

第一个等式利用sec^2(x)=1+tan^2(x)将sec^4(x)展开,然后设tan(x)=u进行代换。

## 三角函数应用

三角函数在微积分中有广泛应用。正确掌握其导数公式和三角恒等式,能很好地解决相关积分问题。
# 26. Lec 29 | MIT 18.01 Single Variable Calculus, Fall 2007

## 分数分解(Partial Fractions)

教授表示今天的主题是将有型如P(x)/Q(x)的分数函数用分数分解的方法进行求积分。

分数分解的意思是将P/Q分解成更简单的部分。

### 例子

考虑函数1/(x-1)+3/(x+2)的积分。
此时很明显知道其积分答案是ln(x-1)+3ln(x+2)+c。

但是如果将两个分数相加,即(1/(x-1)+3/(x+2))/(x^2+x-2),则不再明显如何直接求积分。此时需要分数分解将其分解成简单的部分。

### 分数分解方法

分数分解的主要步骤如下:

1. 分解分母Q(x)成因子形态。

2. 设置未知数,根据已经知道的结果假设函数可以分解成与每一项分母对应的未知项。

3. 使用遮蔽法(Cover-up Method)来解出未知数。

遮蔽法的思想是:将一个分母因子乘到分子上,使其 canceled,这样可以直接求得对应未知项。例如将(x-1)乘到上式,可直接求得A=1。同理,将(x+2)乘到上式,可以求得B=3。

通过这个方法,很巧妙地将加性函数分解成乘性函数,从而转化成直接可积函数。

## 例子解析

考虑函数(4x-1)/(x^2-x-2)。

1. 将分母分解为(x-1)(x+2)

2. 设置A/(x-1)+B/(x+2)

3. 使用遮蔽法:

- 将(x-1)乘到原方程,可得A=1

- 将(x+2)乘到原方程,可得B=-1

所以该函数的分数分解结果是1/(x-1)-1/(x+2)

教授指出,遮蔽法相比直接求解未知数会更简洁高效。关键是通过相乘系数项将其他未知项与分母因子 canceled,从而直接求出该未知项。

## 其他问题

1. 教授说明多项式函数仅含整指数项,不包含平方根等项。

2. 教授说明取特定值如x=1的目的是为了最快求出解,若直接替代可能导致零因子问题。实际上应理解为极限操作。

3. 遮蔽法实质上是将一个分母因子乘到式子上,从而"遮蔽"其他未知项,使其 canceled,进而直接求出该未知项。
# 27. Lec 30 | MIT 18.01 Single Variable Calculus, Fall 2007

## 分数分解
分数分解(Partial Fractions)是将有理函数(即多项式的比率)分解为简单分数的方法。它可以证明任何有理函数都可以求无限德分。

分数分解分为几个步骤:

### 0. 剩余式除法
将多项式除以其他多项式,得到商数与余数。余数的次数必须小于除数。

### 1. 因式分解除数
将分母的多项式因式分解。对于低次多项式,人工分解;高次多项式则需要机器进行。

### 2. 设置分数分解形式
根据除数的各项因子,设置分数分解公式模板。

### 3. 得到方程组
将分数分解代入原函数,得到一个多项式等式。根据各项次数,将其等分为多个方程组。

### 4. 求解方程组
求出分数分解中各未知因子的值。

### 5. 积分
将分数分解后各项分别求积分。其中可能需要一些高级技巧,如三角替代法等。

## 例题
给出一个三次分母的分数分解例子,详细说明每个步骤。指出人工操作分数分解的困难之处,例如高次多项式的分式分解和求解大方程组等。

## 难点与注意事项
- 高次多项式的因式分解通常需要机器辅助
- 方程组数量与多项式的最高次数直接对应,对人来说12次方程组已非常难以直接求解
- 分数分解后各项的积分也可能需要利用更高级的技巧
# 28. Lec 31 | MIT 18.01 Single Variable Calculus, Fall 2007

## 弧长

弧长是一个累加性函数,它和几何有关。我们可以把弧长想象成从一点到另一点沿曲线的里程。

若有一条道路从标点s1到标点sn,则弧长用s表示。

若曲线从点a到点b,可以把它分成许多小段,每个小段从点xi到xi+1。当这些段越来越小时,近似看成是直线段。所以我们可以用一系列直线段来近似整条曲线。

每个小段的弧长记作Δs。弧长Δs等于小段的巨头。小段的水平距离是Δx,垂直距离是Δy。利用毕达哥拉斯定理,我们有:

Δs^2 = Δx^2 + Δy^2

取极限后,弧长公式为:

s = ∫ from a to b √(1 + (dy/dx)^2) dx

或 ∫ ds

## 弧长例子

### 1. 直线 y=mx

dy/dx = m

弧长Ds = √(1 + m^2)dx

直线从0到10,弧长为10√(1 + m^2)

### 2. 半圆弧 y=√(1-x^2)

计算dy/dx得出为-x/√(1-x^2)

弧长元素ds = √(1+(dy/dx)^2)dx = √(1/(1-x^2))dx

半圆弧从0到a,弧长为arcsin(a)

## 总结

利用弧长公式,我们可以计算任意曲线的弧长。分别给出直线和半圆弧两种常见曲线的弧长计算 exemple。
# 29. Lec 32 | MIT 18.01 Single Variable Calculus, Fall 2007

## 角度和弧长

上次讲了圆的参数化表示方法,如x=cosT,y=sinT。

弧长的公式是ds^2=dx^2+dy^2。用参数化形式写为:

ds/dT=√(dx/dT)^2+(dy/dT)^2

对圆来说,dx/dT=-sinT,dy/dT=cosT。所以ds/dT=1,弧长率恒定,弧长计算公式是:

s=∫ds=∫1dT=T

## 改变速度

如果新的速度为aK,参数化表达式保持不变,只需要将弧长率改写为aK。

## 弧长的性质

利用Δs^2≈Δx^2+Δy^2推导出弧长公式时,实际上是将Δs/ΔT写成极限后平均值,而不是真除。

## 例子

### 1. 圆 x=cosT,y=sinT

该表示法的参数化了圆,弧长率ds/dT等于1。

### 2. 椭圆 x=2sinT,y=cosT

对应方程为1/4x^2+y^2=1,描述一个长轴为2,短轴为1的椭圆。
starts from (0,1),at T=π/2 is (2,0), travels clockwise along the ellipse.

Speed is √(4cos^2T + sin^2T), but arc length has no elementary integral.

### 3. 曲面积分

考虑曲面S的参数表示为函数φ和ψ。它们关于参数u和v的微分就可以计算曲面元素。从而得到曲面积。
# 30. Lec 33 | MIT 18.01 Single Variable Calculus, Fall 2007

## 面积计算

极坐标下计算区域面积的公式为:

Δa = 1/2 R^2 Δθ

其中R为半径,Δθ为弧长。

若半径R随θ变化,则总面积的公式为:

∫\_[θ1]^{θ2} 1/2 R^2 dθ

## 例一:圆形区域

考察R=2aCosθ的式子,其对应一个半径为a的圆形区域。

该区域的θ取值范围为-π/2至π/2。

则该区域的面积为:

∫_{-π/2}^{π/2} 1/2 (2aCosθ)^2 dθ = πa^2

## 细分计算面积

若半径R随θ变化,可将区域细分为若干小扇形,每个小扇形的近似面积为:

Δa ≈ 1/2 R^2 Δθ

累加所有小扇形面积即为总面积。

在Δθ趋于0时,可得区域面积的确切公式。

## 极坐标与直角坐标的转换

通过极坐标下的x=Rcosθ, y=Rsinθ关系,可将直角坐标下的区域描述转化为极坐标描述,进而计算面积。
# 31. Lec 35 | MIT 18.01 Single Variable Calculus, Fall 2007

## 提要

- 介绍拉比尔法则,可以解决因式分解导致分母分子都为0的情况,从而计算极限。
- 拉比尔法则版本1:如果 lim(x→a) f(x)/g(x) 为模糊不定型,且f(a)=g(a)=0,则lim(x→a) f(x)/g(x) = lim(x→a) f'(x)/g'(x)
- 给出了两例进行解释:
    1. sin5x/sin2x 的极限为x→0时为5/2
    2. cosx-1/x^2 的极限为x→0时为-1
- 总结拉比尔法则可以将复杂问题化归为求导数的问题,从而更简单地计算极限。

## 1. 拉比尔法则原理

假设考察极限 lim(x→a) f(x)/g(x) ,且f(a)=g(a)=0,导致分母分子均为0,为模糊不定型。

则该极限等价于lim(x→a) f'(x)/g'(x),也就是将f(x)和g(x)分别求导数后求其比值的极限。

这样可以将原先复杂的分数式简化为求导数,进而更简单计算极限。

## 2. 例1: lim(x→0) sin5x/sin2x

根据拉比尔法则,该极限等价于lim(x→0) 5cos5x/2cos2x=5/2

## 3. 例2: lim(x→0) cosx-1/x^2

根据拉比尔法则,该极限等价于lim(x→0) -sinx/2x=-1
# 32. Lec 36 | MIT 18.01 Single Variable Calculus, Fall 2007

## L'Hopital法则

L'Hopital法则描述当f(x)和g(x)都在a点趋于无限大时,其比率的极限。

条件:

1. f(x) 在a点趋于无限大
2. g(x) 在a点趋于无限大
3. f'(x)/g'(x) 的极限L存在

结论:f(x)/g(x) 在a点也趋于L。

值得注意的是,a和L都可以是无限大,这也符合本节主题“处理无限”。

## 增长率

可以用语“f(x)远小于g(x)”描述函数在无限大时的增长率:

lim(f(x)/g(x)) = 0

常见函数的增长率由快到慢依次是:

e^x^2 > e^x > x^p > ln x

## 衰减率

函数趋向0的速度可以看作是增长率的相反,也存在由快到慢的顺序:

1/e^x^2 < 1/e^x < 1/x^p < 1/ln x

## 不定积分

不定积分的定义是:

∫_a^∞ f(x)dx = lim_{n→∞} ∫_a^n f(x)dx

它是否收敛取决于极限是否存在。

具体来说,当面积总和有限时收敛,当面积总和无限时发散。

## 例1: ∫_0^∞ e^-kx dx

此积分为1/k,代表放射性物质衰变 particule的平均数。

## 例2: ∫_1^∞ 1/x^p dx

将积分分成两部分:

∫_1^n 1/x^p dx + ∫_n^∞ 1/x^p dx

当n→∞时前一项保持常数,后一项利用1/x^p的衰减率收敛于有限值,因此此积分收敛。

## 例3: ∫_1^∞ 1/ln x dx

利用1/ln x的较慢衰减率,此积分不收敛,面积总和为无限。

所以判断不定积分是否收敛,需考虑函数在无限大时候的衰减率。只有衰减足够快,不定积分才可能收敛。
# 33. Lec 37 | MIT 18.01 Single Variable Calculus, Fall 2007

## 不当积分

上次讨论的最后一个主题是不当积分,即积分区间中的下限或上限在函数处发生奇异点。

### 第二类不当积分

第二类不当积分指其奇异点在有限处,如从0到1的不当积分∫01f(x)dx。定义为极限:

lim_{a→0^+} ∫_a^1 f(x) dx

这里将区间下限从0切为a,然后让a趋于0从正数方向取极限。

### 几个基本例子

#### ∫01 1/√x dx

此积分奇异点在0处,但积分值有限,等于2。

#### ∫01 1/x dx

此积分在0处奇异,取极限结果为正无穷,故此积分不收敛。

#### 总结规律

对于∫01 x^p dx,当p<1时积分收敛,值为1/(1-p);当p≥1时积分不收敛。

## 几何意义

可以通过图形来理解不同不当积分的收敛情况:

- 1/x图形对称,分成两半,两半面积均为正无穷;
- 1/√x图形一半面积有限(值为2),一半面积无限;
- 1/x^2图形近原点处面积无限,远离原点面积有限。

总的来说,函数值近奇异点越小,对应积分越易收敛。

## 示例

考虑∫01 1/(x-3)^2 dx,将其分成两部分:

- 从0到5部分,对应红色区域,近3点处无限;
- 从5到无限部分,对应绿色区域,有限。

且红绿两部分和为无限,因此此积分整体不收敛。
# 34. Lec 38 | MIT 18.01 Single Variable Calculus, Fall 2007

## 随堂投票
教授先询问学生是否认为可以用块依次堆叠,将顶部块移到更远的地方,大多数学生认为只能堆三块。

## 堆叠实验
教授用块进行实验,采用从上到下的方式依次堆叠,每次都使块移到最远。最终成功堆到8块。

## 堆叠计算模型
1. 设置长度单位为块长度
2. 第一块中心在1处
3. 第二块中心在1+1/2处
4. 接着推导出公式:第n块中心Cn=1+1/2+1/3+...+1/n

## 中心点的数学原理
1. 任何n块的质心位置定义为Cn
2. 加入第n+1块后,新的质心Cn+1受n块和新增块影响,计算公式为:
   Cn+1=(n×Cn+1)/(n+1)
3. 带入公式可得递推关系:Cn+1=Cn+1/(n+1)

## 继续堆叠实验
教授再询问是否认为可以堆到教室末尾,大多数学生表示不能。继而使用推导出的公式进一步验证堆叠高度。


# 35. Lec 39 | MIT 18.01 Single Variable Calculus, Fall 2007

## 数列

数列(power series)是一种用指数次方的形式表示函数的方法,形式如下:

f(x) = a0 + a1x + a2x^2 + a3x^3 + ...

这些a0, a1, a2等称为数列项系数。

一些重要特点:

- 数列收敛半径R:当|x|<R时,数列项和收敛于有限值;当|x|>R时,数列项和发散。

- 当|x|<R内,函数具有所有求导数,且导数值等于相应导数项系数。例如a1等于函数在x=0处的一阶导数值。

- 常见函数如e^x, 1/(1+x)等都可表示为数列形式。

## 欧拉数列

e^x的数列项系数全为1。数列项为:

e^x = 1 + x + x^2/2! + x^3/3! + ...

## 托马斯公式

当|x|<R内,函数可以表示为:

f(x) = f(0) + f'(0)x + f''(0)x^2/2! + f'''(0)x^3/3! + ...

数列项系数即为函数在x=0处各阶导数值。

## 正弦函数数列

sinx的高阶导数周期性为1,-1,以此循环。将导数值代入托马斯公式,得到:

sinx = x - x^3/3! + x^5/5! - x^7/7! + ...

## 收敛半径

1/(1+x)数列的收敛半径为1。原因是函数在x=-1处发散为无穷大。