# Stanford CS229: Machine Learning
>
> <https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU>

## 1. Stanford CS229: Machine Learning Course, Lecture 1 - Andrew Ng (Autumn 2018)

### 机器学习简介

- 機器學習已經在過去幾年快速進步,目前應用機器學習的算法和方法越來越多。
- 現在很多行業如製造業、醫療保健業、物流業等非科技公司都在試圖應用機器學習。
- 機器學習技能的需求正急速增長。該課程的大多數學生將滿足這種技能需求。
- 機器學習已不再是純技術公司的事,現在許多行業都在廣泛應用它。

### 本課程的目標

- 通過10周的課程,學生將成為機器學習專家。
- 學生可以應用機器學習成就很有意義的項目,無論在學術領域還是實業領域。
- 學生將具備就業於科技公司或其他行業使用機器學習的能力。
- 部分學生希望進行機器學習研究,本課程也將讓他們具備閱讀研究論文和推進前沿的能力。

### 本課程的課程設計

- 需要一定的計算機科學、機率學和線性代數基礎知識。將在複習課上回顧必要知識。
- 本課重在練習,主要通過作業和項目實踐學習。
- 允許和鼓勵組建學習小組討論,共同進步更快。
- 本年度開始將部分作業內容改寫為用Python完成,與機器學習界的趨勢一致。

## 2. Stanford CS229: Machine Learning - Linear Regression and Gradient Descent |  Lecture 2 (Autumn 2018)

### 一. 监督学习概述

监督学习的过程是:

1. 收集数据表作为训练数据,包含输入特征和输出目标。

2. 把训练数据输入学习算法。

3. 学习算法输出假设函数,用来预测未见数据的输出。

4. 假设函数以输入特征为变量,预测输出目标。

### 二. 线性回归概念

1. 线性回归是监督学习中回归问题的最简学习算法。

2. 它以直线来拟合数据点,求得最佳拟合直线。

3. 其假设函数为:h(x)=θ0+θ1x1+θ2x2+...+θnxn

表示输入特征的线性组合。

4. 学习算法的目标是求θ参数,使训练数据上的h(x)预测值尽量接近真实值y。

5. 采用平方损失函数来评估θ:Loss(θ)=1/2Σ(hθ(xi)-yi)2

6. 损失函数称作代价函数J(θ),学习算法找使J(θ)最小的θ值。

### 三. 线性回归算法

1. 收集数据,每个样本含有n维特征x和标注y。

2. 定义θ和x成n+1维向量,包含θ0项。

3. 设定θ初始值,计算hθ(x)预测和真值误差。

4. 使用梯度下降法迭代更新θ,不断优化J(θ),直到收敛。

5. 输出θ最优值,构建线性回归模型。

6. 模型可以用于新数据的预测。

### 四. 注意事项

1. 常用符号含义。

2. 假设函数依赖θ和x。

3. 核心是定义损失函数以期求最优θ。

4. 梯度下降用于迭代求解最小化问题。

5. 线性回归为监督学习中的基础算法。

## 3. Locally Weighted & Logistic Regression | Stanford CS229: Machine Learning - Lecture 3 (Autumn 2018)

### 局部加权回归

局部加权回归是一种非参数学习算法。它可以很好地符合不太规则的数据,而无需人工设计特征。

局部加权回归的思路是,在需要预测的点附近, focalize 在一小片区域内的训练示例,用这些训练示例拟合一条直线。然后用这条直线来预测该点的值。

如果需要在另一个点预测,则 focalize 另一小片附近区域内的训练示例,再拟合一条新的直线预测。

这样可以适应各种非线性曲线的形状。

### 算法原理

1. 定义一个权重函数W(i),表示训练示例xi相对于预测点x的重要程度。权重函数选Gaussian核,当xi离x近时 W(i)近1,远时近0。

2. 修改 LinearRegression的成本函数,加入W(i)作权重。这样远离x的训练示例对成本函数影响较小。

3. 最小化新成本函数拟合出一条局部直线。由于远例指数衰减,实际上只考虑预测点附近例子。

4. 使用该直线在需要预测的点x做预测。

### 参数τ影响

τ参数定义了Gaussian核的宽度,也就是考虑区域的大小。

τ大,考虑区域大,可能过度拟合;τ小,考虑区域小,可能 underfitting。

通过改变τ,可以找到平衡点,达到最佳预测效果。

### 逻辑回归

Logistic回归将线性回归扩展为分类问题。
它假设输出服从Bernoulli分布,通过sigmoid函数将线性combination映射到0-1区间进行概率预测。

逻辑回归也可以用最大似然估计和梯度上升算法求解。还可以基于这个思路扩展到多分类问题。

## 4. Lecture 4 - Perceptron & Generalized Linear Model | Stanford CS229: Machine Learning (Autumn 2018)

### 感知机算法

感知机算法常用于二分类任务。与 sigmoid 函数相比,它使用的猜测函数采取 0 或 1 的硬划分形式。

具体来说,感知机算法的猜测函数为:

hθ(x) = g(θTx)

其中:

- g(z) = 1, 当 z ≥ 0
- g(z) = 0, 当 z < 0

学习规则为:

θj := θj + α(y - hθ(x))xj

其中 α 为学习率。

该更新规则的意思是,如果预测错误(y ≠ hθ(x)),则将输入样本向量向θ偏移,以调整决策边界。

### 指数分布族

指数分布族是一类概率分布,其概率密度函数(或质量函数)可以表示为:

p(y|η) = b(y)exp(η^T T(y) - A(η))

其中:

- y 为数据
- η 为自然参数
- T(y) 为充分统计量
- b(y) 为基函数
- A(η) 为规范化因子

### 一般线性模型

一般线性模型将响应变量 y 的期望值建模为预测变量 x 的线性组合:

E(y|x) = g^{-1}(x^Tθ)

其中 g() 为链接函数,将线性预测映射到响应变量的范围。

常见链接函数包括:

- 等价连接:g(z) = z
- 对数链接:g(z) = log(z)
- 对数割连接:g(z) = 1/(1+e^-z)

一般线性模型使用指数分布族来建模响应变量的概率分布,从而实现回归或分类任务。

## 5. Lecture 5 - GDA & Naive Bayes | Stanford CS229: Machine Learning Andrew Ng (Autumn 2018)

### 一、分类算法分类

机器学习算法中,分类 algorithm 可以分为生成性学习算法和判别性学习算法。

判别性学习算法(如逻辑回归)用于找到用于分类的决策边界,直接学习条件概率 P(y|x) 。

生成性学习算法则分别建模每一类,学习 P(x|y) 和类的先验概率 P(y),然后利用贝叶斯定理合并这两个概率来进行分类。

### 二、高斯判别分析(GDA)

GDA 是针对连续特征的生成性学习算法。它假设各类条件下特征 x 的分布都符合多维高斯分布。

多维高斯分布有两个参数:均值向量 μ 和协方差矩阵 Σ 。μ控制分布的中心位置,Σ 控制分布的形态。

Σ 的主对角元素控制各特征的方差,非主对角元素控制特征之间的协方差。

### 三、朴素贝叶斯分类器

朴素贝叶斯分类器是针对离散特征的生成性学习算法。它假设每个特征条件独立。

学习阶段估计每类的条件概率分布 P(x1|y)、P(x2|y) ...

预测阶段对新样本使用贝叶斯公式,计算各类的后验概率,选择概率最大的类。

朴素贝叶斯可用于垃圾邮件过滤、文本分类等任务。

## 6. Lecture 6 - Support Vector Machines | Stanford CS229: Machine Learning Andrew Ng (Autumn 2018)

### 朴素贝叶斯算法

朴素贝叶斯算法是一种生成学习算法,给每个邮件或文本内容定义一个特征表示,即每个词是否出现,用0-1向量表示。

朴素贝叶斯假设每个特征之间条件独立。它对p(x|y)建模时用特征之间乘积来表示,对p(y)建模时单独考虑。

参数包括:

- φy:类别先验概率
- φj|y=0:词j在非垃圾邮件中出现的概率
- φj|y=1:词j在垃圾邮件中出现的概率

最大似然估计计算这些参数时只是词频率。

### 拉普拉斯平滑

朴素贝叶斯算法的问题是,如果训练数据中没有看到某个特征,它就会估计该特征的概率为0。这在实践中很可能导致问题。

拉普拉斯平滑是一种修正方法。它在最大似然估计的分子分母上各加1,避免出现0概率的问题。

这是来源于贝叶斯统计的一个最优估计。拉普拉斯本人研究估计明天日出的概率时提出的这个方法。

应用拉普拉斯平滑后,朴素贝叶斯算法工作性能会有一定提升。它统计简单,训练和分类时间复杂度也低。

## 7. Lecture 7 - Kernels | Stanford CS229: Machine Learning Andrew Ng (Autumn 2018)

### 一、支持向量机算法

支持向量机算法是一种分类模型,它可以找到具有最大几何边界的决策边界。几何边界用下式计算:

$\Gamma=\frac{1}{\|w\|}\min_{i:y_i(w^Tx_i+b)<1}y_i(w^Tx_i+b)$

为了找到最大化几何边界的参数$w$和$b$,我们可以解下式优化问题:

$\max_{\Gamma,w,b}\Gamma$

$s.t.\ y_i(w^Tx_i+b)\geq\Gamma,i=1,2,...,m$

### 二、代表定理

代表定理表明,在$w$的最优解下,$w$可以表示成训练样本的线性组合。这样可以使支持向量机算法在高维特征空间下依然有效。

### 三、核函数

使用核函数可以使算法工作在高维或无限维特征空间中。具体来说,通过核函数可以将样本映射到一个高维或更高维的特征空间中,在这个空间中进行线性分类。

常用的核函数有线性核、高斯核等。核函数的作用是在不显式地映射样本到高维空间的同时,通过核函数来计算特征间的内积。

### 四、支持向量机的实现

支持向量机算法的实现主要有:

1. 使用梯度下降方法求解优化问题,得到最优$w$和$b$参数。

2. 使用核函数将样本映射到高维空间后,在该空间中进行线性分类训练支持向量机模型。

3. 对新样本 alsodmapr 核函数后,输入线性分类器进行预测。

## 8. Lecture 8 - Data Splits, Models & Cross-Validation | Stanford CS229: Machine Learning (Autumn 2018)

### 偏差和方差

学习算法在拟合数据时可能会出现偏差过大或方差过大的问题:

- 偏差过大,表示学习算法的假设函数形态较为简单,无法很好地拟合数据中的趋势关系。例如使用线性回归拟合非线性数据集。

- 方差过大,表示学习算法对样本的依赖性过强,容易过度匹配(overfitting)。例如使用高次多项式拟合少量数据集。

理想情况下,学习算法应该找到一个中间地带,既能够很好地拟合数据规律,也不会过分依赖特定数据集。

### 采用正则化来减小方差

正则化是常用的技巧之一来缓解过拟合问题:

- 对于线性回归模型,可以添加正则化项`λ‖θ‖^2`到损失函数中。这里`λ`控制正则化强度。

- 正则化项会使模型参数θ的值趋于0,从而使得模型更简单,同时也减少对随机噪声的敏感性。

- 适当增大`λ`的值,可以在一定程度上减小学习算法的方差,避免过拟合问题。但`λ`不能设置的过大,否则会引入偏差。

### 拆分训练集、验证集和测试集

为了更准确地评估学习算法的泛化能力,应该将原始数据集划分为三个集:

- 训练集:用于学习算法的训练。

- 验证集:用于调整模型参数,防止过拟合。

- 测试集:用于最终评估学习算法的泛化性能,并不参与训练和参数调整。

这可以避免测试集数据「泄露」,更公平、可靠地评价学习算法真实表现。

## 9. Lecture 9 - Approx/Estimation Error & ERM | Stanford CS229: Machine Learning (Autumn 2018)

### 一.学习理论假设

1. 假设有一个数据分布D,从中随机采样得到(x,y)样本对。这在监督学习中表示从x映射到y,在无监督学习中也适用。
2. 假设训练数据集和测试数据集都是从同一个数据生成过程中获得的独立样本。

### 二.学习过程

1. 学习算法从大小为m的训练样本集s中学习,输出预测函数(假设)h。
2. 样本集s是一个随机变量,学习算法是一个确定函数。将随机变量输入确定函数时,输出也是随机变量。
3. 输出h的取值服从某个概率分布,称为采样分布。
4. 假设存在一个未知的真实参数θ*,学习算法试图估计这个参数,但实际上只能从采样分布中得到一个θ̂。

### 三.偏差与方差

1. 偏差衡量θ̂的采样分布是否围绕θ*中心。方差衡量采样分布的散布程度。
2. 在参数空间中观察不同学习算法的θ̂分布,可以明显看出各自的偏差和方差大小。
3. 随着样本量m增加,θ̂的采样分布将更紧密集中,方差下降。对应学习率的快慢决定统计效率。
4. 如果θ̂随m增大收敛于θ*,该算法称为一致的。如果随任意m都等于θ*,估计量即为无偏的。

### 四.近似误差与估计误差

1. 学习误差可以分解为近似误差和估计误差。
2. 近似误差与模型类决定,估计误差随样本量下降。
3. 优化近似误差需要更复杂的模型,但可能导致过拟合;优化估计误差需要更多数据。

### 五.经验风险最小化

1. 理论风险定义为采样分布与真实分布的距离,未知且无法直接优化。
2. 经验风险定义为训练样本与预测结果的距离,可通过学习算法直接最小化得到θ̂。

以上为对视频内容的总结性笔记。

## 10. 第10课-决策树与集成方法 | 斯坦福CS229:机器学习(2018秋季)

### 决策树

决策树是一种非线性模型。它采用自上而下的递归分区方法来将样本空间划分为不同区域。

决策树以20问游戏的形式来分类样本。它以提问特征值是否满足某个阈值来进行递归划分,比如“纬度是否大于30度”。

 每个节点代表一个区域,根据特征值和阈值将区域划分为子区域。如此递归进行,就能将样本空间划分为不同的叶子区域。

 使用决策树进行分类时,会预测测试样本属于哪个叶子区域,然后预测该区域样本中最多的类。

要选择最优的特征和阈值进行划分,需要定义区域的损失函数。使用分类错误率作为损失函数时,无法很好地区分划分效果。因此使用交叉熵作为更好的损失函数。

交叉熵损失函数考虑了每个类的概率分布,可以更好反映区域内各类样本的分布情况,从而选择能更好区分样本的特征进行划分。

### 集成方法

集成方法通过将多个基学习器组合起来,来提升预测性能。常见集成方法包括:

#### Bagging

采用重采样的方法从训练集中重复采样生成新的训练集,在每个新训练集上训练一个基学习器。测试时多个基学习器的预测结果通过平均来得到最终预测。

#### Random Forest

随机森林通过在每个决策树节点仅选择部分特征进行划分,来降低决策树的方差。每个决策树的训练样本采样和特征选择都独立随机地进行。

#### Boosting

Boosting通过连续为每个基学习器赋予不同的权重,强化基学习器对错误样本的学习能力。如Adaboost多次迭代调用基学习器,不断提升难易样本的权重。

集成方法通过多次学习来降低方差,缓解过拟合问题,能有效提升模型的泛化性能。

## 11. Lecture 11 - Introduction to Neural Networks | Stanford CS229: Machine Learning (Autumn 2018)

### 1. 简介

这节课主要介绍神经网络和深度学习。

深度学习是机器学习中的一种技术,主要用于计算机视觉,自然语言处理和语音识别等问题。深度学习成功的主要原因是:

1. 计算能力的提高,可以使用GPU并行计算,加快速度。

2. 网络数据量的增加,大数据提供了更多训练样本。

3. 算法的进步,人们提出新的技术来更好地学习数据和利用计算资源。

### 2. 基本概念

#### 2.1 神经元

神经元定义为:神经元 = 线性部分 + 激活函数

线性部分表示wx+b,这里w代表权重,b代表偏置。

激活函数常用sigmoid函数,将线性部分映射到0-1范围内。

#### 2.2 模型

模型 = 架构 + 参数

架构决定网络结构,参数代表w和b的值。训练得到的优化好的w和b模型参数就可以用于预测。

#### 2.3 逻辑回归

以分类问题作为例子,假设检测图片中的猫。

1. 将图片转化为向量表示输入x

2. 逻辑回归表示为y= sigmoid(wx + b)

3. 训练过程就是优化w和b,使用损失函数和梯度下降法

### 3. 多分类问题

如果分类问题扩展为识别猫、狮子、色龙三类动物:

1. 使用三个神经元,每个神经元对应一个类别

2. 每个神经元计算的是:yk = sigmoid(wkx + bk)  

3. 损失函数和优化目标不变

4. 数据需要对应三维热编码标签,如猫为[1,0,0]

5. 参数量增加为原来的3倍

### 4. 总结

本节课通过逻辑回归例子,结合分类问题介绍了神经网络的基本概念,如神经元、模型、多分类等。为后续介绍更复杂神经网络奠定了基础。

## 12. Lecture 12 - Backprop & Improving Neural Networks | Stanford CS229: Machine Learning (Autumn 2018)

### 反向传播的微分计算

这课继续介绍神经网络,主要内容包括:

1. 使用链式法则进行反向传播的微分计算。先计算最后一层w3和b3关于成本函数的梯度,然后反向计算中间层w2和b2,以及第一层w1和b1的梯度。

2. 计算某个样本在最后一层节点的输出y^和真实标签y之间的交叉熵损失函数L。

3. 进行反向传播计算成本函数J关于最后一层权重w3的梯度。利用sigmoid函数的导数公式,以及链式法则,得到最终结果为:∇J/∇w3= (y-a3)a2^T,这里a3是最后一层节点的输出,a2是上一层节点的输出。

4. 通过梯度下降法更新每个层级的权重参数,以优化整个网络。

### 提高神经网络性能的技巧

讲师提到,设计好结构并不意味着神经网络一定能工作,还需要很多“技巧”来使网络真正有效:

1. 正则化,如L1和L2正则。避免过拟合。

2. 初始化权重参数。随机初始化更利于收敛。

3. 学习率选择。动态调整学习率。

4. 函数筛选。如ReLU函数的使用。

5. 增量学习。分批训练而不是一次处理所有样本。

6. 提升法。如增量树回归等。

7. 常用框架实现。如TensorFlow和PyTorch提供函数实现上述技巧。

以上为这节课主要内容的汇总。

## 13. Lecture 13 - Debugging ML Models and Error Analysis | Stanford CS229: Machine Learning (Autumn 2018)

### 一、调试机器学习模型

许多时候,我们会设计一个机器学习应用但训练出的模型效果没有预期的那么好。这时需要决定下一步该如何进行。

常见的调试策略包括:

1. 获取更多训练数据。尽管更多数据几乎总会有助于提高效果,但关键是需要加多少数据。

2. 优化特征选择。可能原有特征中有些对目标没那么相关,可以先移除这些特征。

3. 优化特征设计。可以考虑从其他角度设计新的特征,如从邮件标题和路由信息等角度提取特征。

4. 调整算法参数。如学习率、正则项强度λ值等可以适当调整。

5. 选择其他学习算法。如从logistic回归切换到支持向量机或神经网络。

6. 等等。

但许多团队会随机选择一种策略进行尝试,效率不高。最好先系统列出可行策略,然后进行分析选择最优策略。

### 二、偏差与方差分析

常见的模型诊断工具是偏差与方差分析。

- 如果模型效果差主要源于高方差,表现为:训练集效果好,但验证/测试集效果差。

- 如果主要源于高偏差,表现为:训练集、验证集和测试集效果都一般。

我们可以利用这个特点对当前模型进行诊断,判断问题来源是否是高方差还是高偏差,以定策略进行修正。

总体来说,通过系统地利用诊断工具分析模型问题来源,优化参数和算法,调优模型效果会比随机尝试更高效。偏差与方差分析是调试模型常用且效果较好的一个诊断方法。

## 14. Lecture 14 - Expectation-Maximization算法 | 斯坦福CS229:机器学习(2018秋季)

这堂课介绍了EM算法。

EM算法解决的主要问题是:我们在数据中无法观测到所有变量,会有一些隐藏变量。EM算法是一种迭代算法,包含两个步骤:

### E步骤

E步骤的含义是Expectation,即期望。在此步骤中,基于当前参数估计,计算隐藏变量的条件期望。

### M步骤

M步骤的含义是Maximization,即极大化。在此步骤中,使用E步骤计算出的隐藏变量期望,来极大化COMPLETE数据的似然函数,进而更新参数估计。

EM算法的思想是:使用当前参数估计计算隐藏变量的期望,进而使用期望来更新参数估计,循环迭代两步直到收敛。

老师用EM算法解图片混合模型和均容模型两个例子进行了详细解释。

图片混合模型假设图片由不同物体组成的混合产生,EM算法可以同时估计每种物体的可能出现概率和具体像素概率分布,从而对未标注图片进行标注。

均容模型假设文本由不同主题生成,EM算法可以同时学习每个主题的词汇分布和文本对应的主题分布,从而对未标注文本进行主题标注。

老师还提到,EM算法在实际应用中也广泛使用在自然语言处理、计算机视觉、推荐系统等领域。

## 15. Lecture 15 - EM算法与因子分析 | 斯坦福CS229:机器学习安德鲁·格1998秋

### EM算法概述

EM算法主要分为E步和M步:

- E步寻找当前参数下数据的Q分布,即隐变量Z的条件分布Q(Z|X,θ),以便极大限制对数似然函数。

- M步使用E步估计的Q分布,寻找新参数θNew,使得θNew最大化在E步获得的似然函数下界。

EM算法的循环就是E步和M步的交替进行,每次都能更新参数θ,最终收敛到局部最大值。

### 混合高斯模型下的EM算法

混合高斯模型假设观察样本X符合多个高斯分布的混合,隐变量Z表征样本来自哪一个高斯分布。

- E步使用贝叶斯规则计算Q(Z|X,θ),即样本X来自第j个高斯分布的概率wij。

- M步分别对模型参数φ(混合系数)、μ(均值)、Σ(协方差矩阵)求导,得到它们的更新公式。如μj的更新公式是:求和(wij*xi)/求和wij。

通过循环E步和M步,不断更新参数θ收敛到极值点,从而求解混合高斯模型。

### 因子分析模型

因子分析模型适用于样本维度大于实例数量的情况,假设观察变量X由一小部分潜在变量Z生成。

- Z是连续型的和高斯分布相关的隐变量。

- EM算法的推导依然适用,E步计算Q(Z|X,θ)的积分替代求和,M步相应地对参数进行极大化。

- 相比混合高斯模型,因子分析模型可以很好处理高维低样例数据, captures低维结构。

### 监测EM算法收敛

可以绘制似然函数值或其下界在迭代过程中的变化趋势,查看它是否在不断增加并平缓下来,以判断EM算法是否已经收敛。

## 16. 斯坦福 CS229机器学习(2018秋)第16讲 - 独立成分分析与强化学习

### 独立成分分析(ICA)

ICA假设声源S是非高斯分布的,这样就可以利用分布的非对称性来分离声源信号。

如果声源信号服从高斯分布,则其分布对称性会导致旋转模糊,无法恢复原始声源。 only高斯分布具有旋转对称性,所以ICA只有在非高斯的前提下才行。

ICA的模型是:观测变量X是通过混合矩阵A线性混合声源S得到,X=AS。目标是通过学习未混合矩阵W恢复原始声源S,S=WX。

可以用概率分布密度函数(PDF)或者累积分布函数(CDF)来描述随机变量的分布。CDF定义为小于某值s的概率。可以通过CDF求得PDF。

ICA算法将指定CDF来描述声源S的分布,而不是直接指定PDF。CDF范围从0到1,可以选择符合非高斯假设的CDF。

直接求X的PDF为Ps是不对的,因为在连续概率密度函数中,变换后变量的PDF与原变量PDF不同。正确形式应为PX=Ps×|detW|

### 强化学习

强化学习研究 какagents可以在一个环境中学习行为,通过对奖励信号的学习来优化长期收益。

马尔可夫决策过程(MDP)是研究强化学习的重要框架。它描述agent和环境之间的互动过程:

1. agent在状态s下选择动作a
2. 环境响应动作,agent转移到新的状态s'
3. agent获得奖励r

目的是找到可以最大化累积奖励的策略。强化学习算法的目标就是从无序的试误中学习出这种策略。

## 17. 第17课 - 马尔可夫决策过程与价值/策略迭代 | 斯坦福CS229:机器学习 安德鲁·阿尼(2018秋季)

**马尔可夫决策过程(MDP)**

MDP由五元组定义:

- 状态(States):例如11个状态的机器人位置
- 动作(Actions):例如四个方向的子动作  
- 状态转移概率(State Transition Probabilities):执行某个动作后进入新状态的概率
- 奖赏函数(Reward Function):奖赏状态的数值
- 折扣因子(Discount Factor):数值略小于1,表示未来奖赏的价值会下降

**价值函数**

对于某一策略π,其价值函数Vπ(s)表示从状态s开始,采取π下的总奖赏期望。

贝尔曼方程描述了价值函数与状态之间的关系:

Vπ(s) = R(s) + γ×Σs'P(s'|s,a)Vπ(s')

其中:

- R(s):状态s的即时奖赏
- γ:折扣因子
- Σs'P(s'|s,a):表示从状态s采取动作a后到达状态s'的概率
- Vπ(s'):新的状态s'下的价值函数

**策略与最优策略**

策略π表示状态到动作的映射。最优策略π*能使总奖赏期望最大。

**价值迭代与策略迭代**

价值迭代算法通过重复解贝尔曼方程求解最优价值函数V*,然后求得最优策略π* .

策略迭代直接迭代策略π,每次改进使其更近似最优策略π*。

## 18. Lecture 18 - 连续状态马尔可夫决策过程与模型模拟 | 斯坦福CS229:机器学习(2018秋季)

### 连续状态马尔可夫决策过程

马尔可夫决策过程中的状态空间通常被描述为一个有限与离散的集合。但是在许多应用场景中,状态空间是连续的,例如车辆的位置、姿态等。

#### 车辆状态空间

一个车辆的状态通常可以用(x, y, θ)描述其位置与朝向。如果考虑速度,也需要添加(vx, vy, ω)。状态空间的维数取决于描述问题的详细程度。

#### 直升机状态空间

直升机的状态可以用(x, y, z)描述其位置,用三个参数(roll, pitch, yaw)描述其三维姿态。如果考虑速度,也需要添加线速度与角速度。

#### 翻转摆状态空间

翻转摆问题中的状态可以用(x, θ, vx, ω)描述,x为车位移,θ为杆的倾斜角,vx为车速,ω为杆的转角速度。

### 离散化方法

直接将连续状态空间离散化成有限个状态,重新定义状态名称(1、2、3等),然后视整个问题为离散状态马尔可夫决策过程解决。

这种方法对低维、小规模问题效果不错,但有以下缺点:

1. 粗糙近似真实值函数,难拟合更复杂函数。

2. 状态维度高,离散化后的状态数量爆炸。

### 模型模拟方法

离散化方法曲线取舍状态信息,无法精细描述值函数。模型模拟方法通过建立状态转移模型,在模型上运行强化学习算法,获得更好近似。

主要算法有:

- 配值迭代:使用贝尔曼方程反复更新价值函数,收敛至最优值函数。

- 策略迭代:交替更新策略和价值函数,直到策略收敛。

下一节将详细介绍配值迭代算法在连续状态马尔可夫决策过程中的应用。

## 19. Lecture 19 - 奖赏模型与线性动态系统 | 斯坦福CS229:机器学习(2018秋季)

### 一. 奖赏模型的广义化

原来 MDP 定义奖赏函数为状态到实数集的映射。广义化为状态-动作奖赏函数:

- 奖赏函数R是状态和动作到奖赏的映射。

- Bellman方程修改为考虑当前状态下最优动作的奖赏:

  V*(S) = max_{a}(R(S,a) + γ*Σ_{S'}P(S'|S,a)V*(S'))

这允许模型不同动作带来的不同成本,如移动成本大于静止。

- 可以使用价值迭代算法求解广义化MDP。

### 二. 有限时域MDP

- 替换折扣率γ为终止时限T。

- MDP运行T个时间步,然后结束。累计奖赏的表达式变为有限和。

- 最优策略π*可能不是 stationary 的,取决于当前时刻t。这属于非 stationary 策略。

- 在有限时限 MDP 中,不同时间取不同动作可能带来更高累计奖赏。

### 三. 线性动态系统

视频介绍了线性动态系统(LDS)如何提供一个 MDP 框架下的特殊情况,其状态空间是连续的,但仍可以精确求解价值函数,不需要近似。

## 20. 强化学习调试和诊断 | 斯坦福CS229:机器学习 安德鲁·恩格教授- 第20课(2018年秋季)

### 1. 直升机飞行视频

视频中展示了一架小型遥控直升机在足球场上飞行。起初 camera 拍摄距离较远,无法判断是否是真人驾驶。后来发现是遥控直升机。另外,当时有位老太太误以为是真人直升机要坠机,因此报了警。

### 2. 强化学习在直升机控制中的应用

通过强化学习算法来控制直升机飞行,从初期比较单纯的奖励函数如保持位置不动,到后来更复杂的实现翻转和臂斗动作。

调试学习过程中,需要建立模拟器、设定奖励函数,运行强化学习算法得到策略,然后检测策略在模拟器和真实情况下的效果。如果两者差异大,则需要优化模拟器;如果策略表现不如人类操纵,则需要优化奖励函数或算法。

通过多次迭代优化各个部分,最终实现了专业飞行员也难以完成的动作,如空中翻转、旋转等。

### 3. 强化学习调试流程

1. 建立模拟器
2. 设定奖励函数
3. 运行强化学习算法得到策略
4. 检测策略在模拟器和真实环境下的效果
5. 如果策略在模拟器表现好但真实效果差,优化模拟器
6. 如果策略优于人类但飞行效果差,优化奖励函数
7. 否则优化算法

重复调试可以逐步优化各个部分,直至达到期望效果。不同阶段优先级不同,需要根据情况进行判断。