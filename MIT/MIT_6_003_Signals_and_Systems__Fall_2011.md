# MIT 6.003 Signals and Systems, Fall 2011
>
> <https://www.youtube.com/playlist?list=PLUl4u3cNGP61kdPAOC7CzFjJZ8f1eMUxs>

## 1. Signals and Systems

### 1.1 信号类型

信号可以分为连续时间信号和离散时间信号。

连续时间信号是随时间的连续变化的函数,例如音频信号。离散时间信号是在一系列离散时间点取值的序列,例如数字图像中的像素值。

### 1.2 系统类型

系统被定义为将输入信号映射到输出信号的任何设备或过程。

线性时间不变系统(LTI系统)是信号处理的重要模型。LTI系统具有线性性和时间不变性,意味着系统的输出为输入信号的线性组合,且系统属性与时间无关。

非线性系统的输出不一定为输入的线性组合。时间变化系统的属性会随时间变化。

### 1.3 信号的复合

连续时间信号可以用微积分来描述,离散时间信号可以用数学序列来表示。

信号可以通过阶乘、求和和积分等运算进行组合,从而形成新的复合信号。这些运算反映了系统的线性性质。

### 1.4 系统函数

直传函数可以描述LTI系统对输入信号的响应。它表征了系统在各个时间点对δ函数输入的响应。

频率响应函数描述了LTI系统对各频率成分的响应,它是直传函数的傅立叶变换。可以用来分析系统对不同频率信号的响应。

## 2. Discrete-Time (DT) Systems

### 2.1 离散时间信号

离散时间信号是数字信号的基本形式,它定义在离散的时间点取值。可以用索引n表示取值时刻,信号表示为x[n]。

### 2.2 离散时间线性时不变系统

离散时间线性时不变系统(DT LTI系统)接受离散时间信号作为输入,产生离散时间信号作为输出。它具有线性性和时间不变性。

### 2.3 系统响应

DT LTI系统的响应描述它对δ[n]单位脉冲输入的反应。系统响应也称为脉冲响应,表示为h[n]。

系统输出可以表示为输入信号同系统响应的卷积:

y[n]=x[n]*h[n]=Σx[k]h[n-k]

### 2.4  z-变换

z-变换是离散时间信号的傅立叶分析工具。它将信号从时域映射到复数z域。

通过z-变换可以得到系统的传递函数H(z),它描述了系统在不同频率下的响应特性。H(z)等于系统响应h[n]在z域的表示。

### 2.5 常用DT系统

常见的DT系统有单位延迟、滑移寄存器、积分器等。它们具有不同的传递函数形态。

## 3. 回馈、极点和基本模式

### 3.1 反馈系统

反馈系统包含前馈路径和回馈路径。回馈路径使系统输出被反馈到输入端,从而影响系统的动态响应。

### 3.2 极点

系统函数H(z)的极点指其泛函分数分母的零点。它们决定了系统在输入信号减少后输出的衰减率。

单位圆内极点决定系统输出是否衰减为0。单位圆外极点决定输出在输入结束后是否将收敛到0。

### 3.3 模式

系统的模式指其内在振荡形式。由极点决定。

若所有极点在单位圆内,系统属于衰减模式,输出随时间衰减到0。

若有极点在单位圆外,系统属于非衰减模式,输出将永久振荡下去。

### 3.4 基本模式

系统的基本模式与极点数量相关。它反映系统在初始条件下的动态特性。

第一基本模式决定系统初次反应,第二基本模式决定后续反应,依此类推。

## 4. 连续时间(CT)系统

### 4.1 连续时间信号

连续时间信号是时间变量t的连续函数。它可以用微积分来描述,定义于连续时间域上。

### 4.2 连续时间线性时不变系统

连续时间线性时不变系统(CT LTI系统)接受连续时间信号作为输入,产生连续时间信号作为输出。具有线性和时间不变性。

### 4.3 系统响应

CT LTI系统的响应描述它对δ(t)单位冲激函数输入的反应。系统响应也称为冲激响应,表示为h(t)。

系统输出可以表示为输入同系统响应的接口积分:

y(t)=∫x(τ)h(t-τ)dτ

### 4.4 拉普拉斯变换

拉普拉斯变换是连续时间信号的频域分析方法。它将信号从时域映射到复频域s下。

通过拉普拉斯变换能得到系统的传递函数H(s),描述系统在不同频率下的响应特性。H(s)是系统响应h(t)在s域下的表示。

### 4.5 常用CT系统

常见CT系统包括一阶系统如低通滤波器、积分器等。它们具有不同形式的传递函数H(s)。

## 5. Z变换

### 5.1 Z变换的定义

Z变换将离散时间序列映射到Z域复数空间。它表示为:

X(z)=Σn=0∞x[n]z-n

其中,z是一个复数,代替连续时间中的jw。

### 5.2 Z变换的性质

Z变换具有线性性、时间延移性等性质。它可以用于分析LTI离散时间系统。

### 5.3 Z变换常用公式

常用Z变换公式包括:

单位冲激函数δ[n]的Z变换为1。
时间延移x[n-k]的Z变换为z-kX(z)
连乘x[n]y[n]的Z变换为X(z)Y(z)

### 5.4 系统函数与Z变换

通过Z变换可以得到系统的传递函数H(z),它相当于连续系统中的频率响应。

H(z)可以直接从脉冲响应h[n]的Z变换得到,也可以通过其他方法求得。

### 5.5 Z变换的应用

Z变换广泛应用于LTI离散时间系统的分析,如对稳定性、常值响应和模式分析都很有帮助。

## 6. 拉普拉斯变换

### 6.1 拉普拉斯变换的定义

拉普拉斯变换将一个连续时间函数映射到复数s域,定义为:

F(s)=L{f(t)}=∫_0^+∞ f(t)e^{-st}dt

### 6.2 拉普拉斯变换的性质

拉普拉斯变换具有线性性、周期性、偏移性等性质。

### 6.3 拉普拉斯变换常用公式

常用公式包括:

单位导函数u(t)的拉普拉斯变换为1/s
指数函数e^{at}的拉普拉斯变换为1/(s-a)

### 6.4 系统函数与拉普拉斯变换

通过拉普拉斯变换可以得到连续时间LTI系统的传递函数H(s)。

H(s)可以直接从冲激响应h(t)的拉普拉斯变换得到,也可以通过其他方法求得。

### 6.5 拉普拉斯变换的应用

拉普拉斯变换广泛应用于分析LTI连续时间系统,如积分方程的解法、稳定性分析等。

## 7. 离散化近似连续时间系统

### 7.1 离散化原理

离散化是将连续时间系统近似为离散时间系统的过程。

其基本思想是采样连续时间系统的输入和输出,这样将系统变换到离散时间域。

### 7.2 采样定理

若连续信号的频域bandwidth小于采样频率的一半,则可以通过低通滤波器加采样准确重构原信号。

采样频率需满足nyquist条件fm<fs/2,以避免频率混叠。

### 7.3 采样连续系统

将连续系统的输入采样后通过系统,再采样输出就转变为离散系统。

得到的离散系统采用离散时间方法分析,如Z变换方法。

### 7.4 采样误差

实际采样存在时钟偏移和量化误差。若信号带宽太大也无法完美重构。

高阶掐头舍尾滤波可以减小离散化误差。

### 7.5 离散化设计

正确选择采样频率fs、滤波器参数可以有效近似原系统,在满足nyquist条件的前提下尽可能小地选择fs。

## 8. 卷积

### 8.1 卷积定义

卷积用于描述两个信号的混合关系。

对于离散时间信号x[n]和h[n],它们的卷积定义为:

y[n] = (x * h)[n] = Σx[k]h[n-k]

### 8.2 混合性质

卷积描述线性时不变系统对输入信号的响应。

LTI系统的输出等于输入信号同其脉冲响应函数的卷积。

### 8.3 卷积定理

傅立叶变换可以将卷积运算转换为乘积运算:

L{x*h} = X(jω)H(jω)

其中L为拉普拉斯变换,X和H为变量的频域表示。

### 8.4 卷积求解

直接求解卷积需要O(N^2)的计算量。用傅立叶变换加上操作可以降低到O(NlogN)。

也可以采用含卷积的转移函数形式或者递推关系表示卷积关系。

### 8.5 常见例子

低通滤波等基本LTI系统都可以用卷积关系描述其输入输出关系。

## 9. 频率响应

### 9.1 频率响应定义

频率响应描述系统对不同频率信号成分的响应强弱。

它是系统函数在傅立叶变换下的表示,例如连续系统的H(jω),离散系统的H(e^jω)。

### 9.2 频率响应特性

频率响应可以直接看出系统对某个频率的增益和相移情况。

原点的值表示常量项的响应,频率轴上其他点表示不同频率分量的响应。

### 9.3 典型频率响应

低通滤波器频率响应下降于频率升高。高通恰好相反。

带通让中间一段频率通过,其余截止。带阻剩余频段通过。

### 9.4 总局频带

总局频带又称通带,指频率响应大于一定值ε的连续频率范围。

滤波器的截止频率通常定为频率响应半功率点。

### 9.5 频率响应分析系统

通过频率响应可以直接看出系统在频域上的特性,比时域分析更直观。

## 10. 回授与控制

### 10.1 回授系统

回授系统包含前馈和回授路径,回授路径将输出反馈到输入。

### 10.2 回授类型

根据回授信号是否进行处理,可分为直接回授和间接回授。

### 10.3 回授效应

正回授可提高系统频率选择性和稳定性。负回授可改变系统动态特性。

### 10.4 控制理论基础

控制理论研究如何设计回授控制系统满足闭环性能指标,如冲涌抑制等。

### 10.5 稳定性分析

尼古尔图可直接判断线性回授系统的绝对稳定性。

增益和相位关系也可以分析系统稳定性。

### 10.6 控制系统设计

设计光控制系统需要考虑闭环传递函数、控制原理以满足技术指标。

feedback和时延也需适当设计保证系统性能。

## 11. 连续时间频率响应和博得图

### 11.1 频率响应

频率响应描述系统对各频率信号成分的响应强弱,表示为H(jω)。

### 11.2 对数频率响应

对数频率响应以対数坐标描述频率响应,定义为:

A(ω)=20log|H(jω)|
φ(ω)=arctan[Im(H(jω))/Re(H(jω))]

### 11.3 博得图

博得图是一个对数对数坐标系统,分别绘出A(ω)和φ(ω)曲线。

### 11.4 博得图特点

横轴使用对数频率,纵轴使用对数增益和相移。

可直观反映系统在不同频率下的增益和相移特性。

### 11.5 博得图分析

从博得图可以读出系统的增益和相移在各频段,判断其稳定性等性质。

对设计控制系统很有帮助。

## 12. 连续时间(CT)反馈与控制(第一部分)

### 12.1 反馈系统概念

反馈系统包含前馈路径和回授(反馈)路径,后者对系统输出进行采样并反馈到输入端。

### 12.2 闭环传递函数

闭环传递函数是从系统输入到输出的总传递函数,考虑了反馈效应。

### 12.3 环路增益

环路增益定义为从错误信号e(t)到反馈信号r(t)的传递函数值。

### 12.4 稳定性判据

若环路增益的最大模值在所有ω处均小于1,则系统 Globally Asymptotically Stable。

等边形判据基于对零频率增益和相移的限制也可以判断稳定性。

### 12.5 PID控制器

PID控制器包含比例、积分和微分控制作用。它被广泛应用于工业控制。

通过调节三个参数可以灵活控制系统的响应特性。

### 12.6 样条回授

样条回授通过插值生成连续时间控制输入函数,有效实现数字控制。

## 13. 连续时间(CT)反馈与控制(第二部分)

### 13.1 传递函数分解

可以将系统传递函数分解为前馈传递函数和反馈传递函数的乘积。

### 13.2 位移规则

通过传递函数分解和位移规则可以计算获得闭环传递函数。

### 13.3 Nyquist图

尼奎斯特图在复数ω平面上绘制环路增益的轨迹,用于判断系统稳定性。

### 13.4 PID控制器设计

根据对控制对象动态模型,选择PID参数满足定位时间、过shoot和带宽要求。

### 13.5 样条回授控制

采样后通过插值生成连续控制信号,在保证系统连续性的基础上实现数字控制。

### 13.6 状态空间方法

使用状态空间描述系统,以状态反馈的形式实现控制,与传递函数方法等效。

## 14. 傅立叶表示法

### 14.1 傅立叶级数

任何周期信号都可以用无限个正弦波的和来表示,这称为傅立叶级数。

### 14.2 傅立叶级数共轭

级数中正弦波和余弦波的系数与原信号在对应频率下的傅立叶变换成分有关。

### 14.3 傅立叶转换

傅立叶转换将信号从时域表示转为频域表示,completely and unambiguously。

它考虑所有可能的频率成分,能精确描述信号。

### 14.4 其它傅立叶表示

常用的还有傅立叶变换、短时傅立叶转换等,都可以将信号从时频域转为频率域表示。

### 14.5 应用

傅立叶表示法广泛应用于信号处理领域,如过滤、缩小、识别等,为后续分析提供基础。

## 15. Fourier级数

### 15.1 定义

如果一个周期函数f(t)在周期T内可收敛,可以用正弦波与余弦波的无限和表示:

f(t) = a0/2 + ∑ancos(nω0t) + ∑bnsin(nω0t)

### 15.2 傅立叶系数

a0,an,bn称为傅立叶系数,与函数f的形态有关。

### 15.3 有限级数近似

实际通常仅考虑前N项,构成有限级数近似。

### 15.4 性质

傅立叶级数满足唯一定理和正交性等性质。

### 15.5 计算傅立叶系数

可以通过内积法和特征值法计算傅立叶系数。

### 15.6 应用

分析物理振动问题,电路信号等周期性问题。

### 15.7 与傅立叶变换关系

级数可看作是周期信号在频率域的傅立叶变换表示。

## 16. 傅立叶变换

### 16.1 定义

连续傅立叶变换将时域的信号函数f(t)变换到频域,定义为:

F(ω) = ∫−∞^+∞ f(t)e^(-jωt)dt

### 16.2 逆变换

逆变换可将频域表示恢复到时域:

f(t) = (1/2π)∫−∞^+∞ F(ω)e^(jωt)dω

### 16.3 傅立叶变换特性

线性性、时移性、频移性等。

### 16.4 傅立叶变换对偶性

频率F(ω)和时间f(t)作为函数变量的傅立叶变换互为对偶。

### 16.5 傅立叶分析定理

能够将时域的卷积运算变成频域的乘积运算,大大简化计算。

### 16.6 傅立叶变换应用

广泛应用于信号处理、通信、图像处理等领域。

## 17. 离散时间频率表示

### 17.1 离散傅立叶变换

离散傅立叶变换将信号从离散时间域x[n]转换到电频域X[k]:

X[k]=∑x[n]e^(-j2πkn/N)

### 17.2 离散傅立叶级数

任何N个采样点的离散时间信号都可以用无限个乘以采样频率的正弦波来表示。

### 17.3 Z转换

Z转换将离散时间系统表示为复频率Z的函数,Z=e^jω,对应连续时间域中的s=jω。

### 17.4 Z变换简化运算

Z转换可以将离散时间卷积运算变为乘积运算,有助于系统分析。

### 17.5 频率响应

频率响应H(e^jω)描述系统对不同频率信号的传递效果,其性质决定系统特性。

### 17.6 离散时间分析方法

离散傅立叶变换和Z转换为离散时间系统提供了强有力的分析工具。

## 18. 离散时间傅立叶表示

### 18.1 离散傅立叶转换

离散傅立叶转换(DFT)是离散信号傅立叶分析的基础,将离散时间域信号转化为频率域表示。

### 18.2 DFT性质

DFT具有线性、时移和长度等性质。通过DFT,周期信号可以表示为离散线性组合。

### 18.3 快速傅立叶变换

快速傅立叶变换(FFT)是一种高效计算DFT的算法,运算复杂度从O(N2)降低到O(NlogN)。

### 18.4 逆DFT

逆DFT可以将频率域信号转回到时间域。

### 18.5 Z变换

Z变换是模拟系统的s域变换在离散系统中的对应,将时域系统表示为复频率Z的函数。

### 18.6 其他方法

短时傅立叶变换等其他傅立叶分析方法也可以应用于离散信号。

## 19. 傅立叶表示法之间的关系

### 19.1 连续与离散的对应关系

离散时间和频率可以看作是连续时间和频率的抽样。

### 19.2 DFT与傅立叶变换

DFT是如何近似计算连续信号的傅立叶变换,采样距离与频率决定精度。

### 19.3 傅立叶级数与傅立叶变换

周期信号的傅立叶级数系数就是其傅立叶变换在对应频率上的成分。

### 19.4 Z变换与傅立叶变换

Z变换考虑了离散特征,可以看作是离散时间系统的傅立叶变换表示。

### 19.5 傅立叶转换间的关系

各种傅立叶转换方法之间存在着深层次的内在联系,共同构成傅立叶分析理论体系。

### 19.6 应用上的对应关系

不同表示法在信号处理中的应用也存在相互联系,互为补充。

## 20.傅立叶变换应用

### 20.1信号分析

通过傅立叶变换可以获取信号在时域和频域的信息,用于识别和分析信号特性。

### 20.2信号处理

傅立叶变换在滤波、卷积、缩小等操作中都有广泛应用。

### 20.3图像处理

傅立叶变换用于图像压缩、去噪等任务,在数字图像处理中重要应用。

### 20.4通信信号处理

移动通信、调制识别等应用傅立叶变换分析通信信号频谱特征。

### 20.5数理物理计算

解析不同类型的微分方程,研究系统动力学等都利用傅立叶分析方法。

### 20.6生物医学信号处理

处理EEG、ECG等生物医学信号常用傅立叶变换提取特征信息。

### 20.7海量数据处理

大数据领域中,傅立叶变换用于降维、过滤等工作,提升效率。

## 21. 采样

### 21.1 采样原理

采样是将连续信号映射为离散信号的过程,即定期抽取连续信号的数字值。

### 21.2 采样定理

采样频率应大于信号的最大频率的两倍,以避免aliasing现象。

### 21.3 重构

通过适当的低通滤波和插值,可以从采样值重构近似原信号。

### 21.4 余弦 rehearsal

采样产生的频谱在原信号频谱周期重复,产生重复频谱。

### 21.5 采样率选择

根据信号特性选择大于尼奎斯特采样率的采样频率,兼顾效率和重复消除。

### 21.6 噪音影响

噪音可能包含高频成分,应适当增大采样频率与滤波器截止频率。

### 21.7 离散时间系统

采样后系统称为离散时间系统,分析方法有离散时间傅立叶变换。

## 22. 采样与量化

### 22.1 量化

量化是将连续信号映射到离散定值的过程。

### 22.2 量化难度

量化难度表示用多少bit代表原信号的动态范围。

### 22.3 量化误差

量化导致信息损失,产生量化误差。

### 22.4 采样后量化

一般先采样后量化。采样确保信息充分,量化完成数字存储与处理。

### 22.5 重复量化

信号通过低通滤波后再采样可以减小量化难度。

### 22.6 Δ-Σ量化

Δ-Σ量化通过增益递回实现高动态范围量化。

### 22.7 二次采样率

采样率大于尼奎斯特率两倍可以完全消除重复频谱,有利于后续量化。

### 22.8 信噪比影响

量化难度影响信噪比,需要根据应用要求确定采样率和位数。

## 23. 调制(第一部分)

### 23.1 调制原理

调制利用载波将信息信号的特征“载”到高频信号中实现长距离传输。

### 23.2 基带信号和载波

基带信号指信息信号,载波指高频无信息激情波。

### 23.3 调幅

调幅通过改变载波的振幅来传输基带信号信息。

### 23.4 幅度调制特性

AM调制波形、频谱图形和几个重要参数公式。

### 23.5 调频

调频通过改变载波的频率来传送基带信号信息。

### 23.6 频率调制特性

FM调制波形、频谱图形和几个重要参数公式。

### 23.7 其他调制方式

如移相调制、直流偏移调制等其他常见调制方式原理。

### 23.8 调制器与解调器

调制发送基带信息,解调提取原始基带信号的设计与实现。

## 24. 调制(第二部分)

### 24.1 调制的优势

调制能增强功率,降低噪音,支持多工传输等。

### 24.2 信道带宽

调制后信号带宽决定了可传输信息量。

### 24.3 调制指数

衡量调制系统利用信道资源的效率。

### 24.4 差分调制

通过两个或者更多载波来传输信息,减少噪声对SNR的影响。

### 24.5 数字调制

将数字信号映射到一个或者多个信道上以传输,常见方法有FSK、PSK等。

### 24.6 调制器设计

根据选择调制方式设计调制器电路或算法实现调制过程。

### 24.7 调制应用

调制广泛用于电视广播、无线电通讯、收发信号等领域。

### 24.8 信道建模

考虑乘路失真、多径干扰等效应建立实际通信信道模型。

### 24.9 解调原理

还原原始信息信号的主要步骤和思路。

## 25. 音频CD

### 25.1 轮转存放介质

音频CD将数字音频信息存储在一般的CD光盘介质上。

### 25.2 PCM编码

音频CD采用脉冲代码调制(PCM)将音频连续信号编码为数字信号。

### 25.3 采样率和精度

音频CD标准采样频率44.1kHz,采样精度16bit。

### 25.4 帧结构

音频数据按帧大小2,352字节组包存放,每个 sector 容纳98帧。

### 25.5 带外编码

通过EFM和 CIRC技术实现错误 correction 和检测。  

### 25.6 标准格式

红皮书规定了音频CD所有格式标准,以确保兼容性。

### 25.7 解码播放

CD驱动器读取数字信号,解码以还原音频原貌。

### 25.8 用途

音频CD广泛应用于音乐采样播放和商业音频发布。

### 25.9 后续发展

如增强CD、超级音频CD等提升格式也在发展。
