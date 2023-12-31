# CS50's Introduction to Artificial Intelligence with Python 2023

> <https://www.youtube.com/playlist?list=PLhQjrBD2T381PopUTYtMSstgk-hsTGkVm>"

## 2. Search - Lecture 0 - CS50's Introduction to Artificial Intelligence with Python 2020

### 代理(Agent)

代理是任何能够感知环境并在环境中进行操作的实体。例如寻找驾驶路线的自动驾驶车可以看作是一个代理,解15块题的人或AI也可以看作是一个代理。

### 状态(State)

状态是代理在环境中的某种配置。例如15块题每个不同的排放顺序就构成一个不同的状态。

### 初始状态(Initial State)

初始状态是代理开始时所处的状态。

### 动作(Action)

动作是代理在任何给定状态下可以采取的选择。例如15块题中移动某块块到左右上下四个方向就构成四个动作。

### 结果函数(Result Function)

结果函数result描述了采取某个动作A在某个状态S下,所变化后的新状态。

### 状态空间(State Space)

状态空间包含了从初始状态出发,经过任意次数动作变换所能达到的所有状态。它可以用节点与边表示,每个节点代表一个状态,边代表动作带来的状态变换。

### 目标测试(Goal Test)

目标测试用于判断某个状态是否是目标状态。例如15块题如果所有块按顺序排列就达成目标。

### 路径代价(Path Cost)

路径代价赋予每个搜索路径一个数值成本,描述该路径的价值或难易程度,通常目标是找到成本最小的路径。

代理、状态、动作、结果函数等概念可以用函数更精细地定义,实现搜索算法的目的是从初始状态通过移动找到目标状态。

## 3. Knowledge - Lecture 1 - CS50's Introduction to Artificial Intelligence with Python 2020

### 知识

人类的智慧很大程度依靠知识,尤其是对事实和世界的了解。通过已知信息,我们可以推断更多信息和解决问题。

### 知识表述

在AI中,语句表示对世界的一个断言。它使用知识表述语言来表示知识。

本次课将使用命题逻辑来推理知识。命题逻辑基于命题字或语句。

### 命题符号

命题逻辑使用字母如P、Q、R等作为符号,每个符号代表一个关于世界的事实或语句。例如:

P可能代表"下雨"这个事实
Q可能代表"哈利访问了哈格里德"这个事实

### 逻辑连接词

为了把多个语句连接在一起进行复杂推理,需要使用逻辑连接词:

1. 非(not): 将语句的真值取反
2. 与(and): 两语句都为真时才为真  
3. 或(or): 其中一语句为真时为真
4. 意味(implies): 前提成立则结论成立
5. 等价(biconditional): 前后语句相同时为真

### 逻辑表

每个逻辑连接词都有一个真值表来表示其含义。通过组合语句和连接词,就可以进行复杂的逻辑推理。

## 4. 不确定性 - 第2讲 - CS50介绍人工智能使用Python 2020

### 概率理论基础

概率是一个实数,范围在0到1之间:

- 0代表不可能事件
- 1代表必然事件
- 介于0-1之间的数字代表事件可能发生的程度

概率的两大公式:

1. 概率和必须等于1

   ∑P(ω) = 1

   ω代表所有可能事件集合,∑代表求和。将所有可能事件的概率加起来必须等于1。

2. 条件概率公式

   P(A|B) = P(A与B)/P(B)

   P(A|B)代表事件A在已知事件B发生的条件下的概率
   P(A与B)代表事件A和B同时发生的概率
   P(B)代表事件B发生的概率

### 例子

#### 单面骰子

- 可能事件:{1,2,3,4,5,6}
- 每个数字出现的概率为1/6
- 总概率和为1

#### 双面骰子总和

- 可能事件:各个数字的组合方式共36种
- 每种可能事件概率相同,为1/36
- 但根据数量,某些数字出现的概率不同
  - 总和为7的数字有6种,概率为6/36=1/6
  - 总和为12的数字只有1种,概率为1/36

### 总结

概率代表事件发生的可能程度,是0-1之间的实数。概率公式描述事件的关系。概率理论为机器学习和人工智能提供理论支持,可以表示世界中存在不确定性,并根据先验假设进行推理。

## 5. Optimization - Lecture 3 - CS50's Introduction to Artificial Intelligence with Python 2020

本节课的内容介绍了优化问题及其解决算法,包括:

### 优化问题

优化问题是指从一组可能选项中选择最佳选项。优化问题包括寻找全局最大值或全局最小值。

### 状态空间

可以将优化问题表述为状态空间:

- 状态空间是一维或多维的,每个状态对应于一个可能的解决方案。
- 状态的高度代表这个状态的目标函数值或成本函数值,如解决方案的总距离。
- 目标是找到目标函数值最大或成本函数值最小的状态。

### 本地搜索

本地搜索算法考虑单个状态,而不是同时考虑多个路径。具体过程为:

1. 设置当前状态
2. 计算当前状态的邻边状态
3. 在邻边状态中选择目标函数最大或成本函数最小的状态
4. 将当前状态更换为步骤3选择的状态
5. 重复步骤2-4,直到没有更优状态

### Hill Climbing算法

Hill Climbing算法是实现本地搜索最简单的算法。它的实现过程包括:

1. 设置初试状态
2. 计算当前状态的邻边状态
3. 选择目标函数最大或成本函数最小的邻边状态
4. 判断当前状态与步骤3状态的函数值
5. 如果步骤3状态更优,将当前状态更换为步骤3状态
6. 重复步骤2-5,直到没有更优邻边状态

### 实例:医院问题

以医院问题为例进行Hill Climbing算法的实现:

1. 输入医院地点初始配置
2. 定义邻边状态:移动一个医院一个单位
3. 计算每个邻边状态目标函数值或成本函数值
4. 选择目标函数最大或成本函数最小的邻边状态
5. 更新当前状态
6. 重复步骤2-5,直到没有更优邻边状态

## 6.学习 - 第4课 - CS50导论人工智能与Python 2020

### 监督学习

监督学习是一种任务,它使用包含输入-输出对的数据集。数据集会提供输入和人工标记的正确输出。

我们希望机器学习算法能找到一个函数,能够让输入对应正确的输出。

监督学习最常见的任务是分类。分类要求将输入映射到离散的类别中。例如判断银行钞是否为伪造,或预报明天是否会下雨。

### 天气预测分类

我们可以收集包含湿度、气压以及是否下雨的历史数据作为分类训练集。

可以将数据集建模成表格,每一行记录一个数据点的输入(湿度、气压)和人工标记的输出(是否下雨)。

可在二维坐标系中以湿度和气压为坐标轴,将下雨和不下雨的点用不同颜色绘制。

### 最近邻分类

最近邻分类算法预测未标记点类别时,会选择该点附近数据点中的主导类别。

例如,如果考察附近5个点,其中3个是下雨,2个不下雨,那么该点会被预测为下雨。

### K最近邻分类

K最近邻分类考察K个最近的数据点,选择其中类别最多的作为预测结果。这样可以抵消个别点的影响。

### 其他分类算法

除最近邻分类外,还有许多算法可以解决同样的分类问题。不同算法在处理不同数据时,效果会有差异。

机器学习研究常会尝试多种算法,选择在特定数据集上效果最好的作为最佳模型。

## 7. Neural Networks - Lecture 5 - CS50's Introduction to Artificial Intelligence with Python 2020

### 神经网络

神经网络是一种通过模仿人脑神经网络学习的机器学习技术。20世纪40年代,一些研究人员就开始研究人脑学习的机制,并考虑是否可以将这种学习模式应用到计算机上,从而提出了人工神经网络的概念。

人脑中的神经元通过连接来完成信息传递。同样,人工神经网络中的单元也可以通过连接来接收和传播信号。早期研究观察到,生物神经网络具有以下两大特征:

1. 神经元通过连接形成一个网络,能够相互传递电Signal。

2. 神经元可以处理输入信号,在达到一定阈值后被激活,并向其他神经元传播信号。

基于此,研究人员设想可以利用人工神经网络来建立模拟生物学习的数学模型。

### 最简单的人工神经网络

最简单的人工神经网络可以由输入层、输出层和连接它们的权重组成。其中:

- 输入层代表特征变量。

- 输出层代表预测结果。

- 权重代表连接的强弱程度。

该网络通过以下步骤工作:

1. 输入层接收特征变量。

2. 输出层将输入通过权重相乘后相加,进而计算结果。

3. 将结果传给激活函数产生最终输出。

常见的激活函数有阶跃函数、sigmod函数、ReLU等。它们的作用是将网络的输出转化为确定的输出值。

该网络实质上实现了一个简单的假设函数:

h(x) = w0 + w1*x1 + w2*x2

其中w0为偏置项,w1-w2为连接权重。通过学习调整这些参数,网络就可以approximating某些函数。

### 使用神经网络学习逻辑运算函数

我们可以使用一个输入两层的神经网络来学习OR逻辑和AND逻辑这样的基本函数:

- 对于OR函数,将每个输入和输出层连接的权重设为1,偏置项设为-1,激活函数为阶跃函数。

- 对于AND函数,仍然将权重设为1,但将偏置项调整为-2,即可实现AND逻辑。

通过调整各项参数,神经网络即可以近似学习不同的逻辑或数学函数。这也揭示了它的基本工作原理。

以上内容概括介绍了神经网络的基本原理、最简单模型的工作流程及如何使用它来近似数学函数。神经网络的学习将在后面的课程中详细说明。

## 8. 语言 - 第6课 - CS50导致人工智能使用Python 2023

### 语法

语法 refers 到语言的结构. 它描述了语言如何由个别单词组成整体结构性的句子. 要让计算机理解语言,它需要了解其结构.

一个句子如 "Just before nine o'clock Sherlock Holmes stepped briskly into the room." 它由多个单词组成一个有结构的整体.

而 "Just before Sherlock Holmes nine o'clock stepped briskly the room" 由相同词组成但没有结构.

部分句子表述含糊,一个句子可以有多个结构,不同结构意思也不同.例如"I saw the man on the mountain with a telescope.",看见的人可能是我自己或山上的男人.

### 语义

语义指语言中的意思.计算机只知道句子结构不够,它还需要了解词汇和句子的意思.

例如两个句子"Just before nine o'clock Sherlock Holmes stepped briskly into the room."和"A few minutes before nine, Sherlock Holmes walked quickly into the room.",结构不同但意思相近.

一些句子在结构上正确但实际意思不明确,如"Colorless green ideas sleep furiously.".

### 自然语言处理任务

常见自然语言处理任务包括:

- 自动总结:根据长文本生成短概要。
- 信息提取:从文本中提取相关事实或细节。
- 机器翻译:将一种语言翻译成另一种语言。
- 问答:根据用户提供的问句对文本进行理解后回答。
- 文本分类:根据文本给出标签,如正面分类或垃圾分类。

### 上下文无关文法

上下文无关文法定义一组生成自然语言句子的规则。

以句子"She saw the city."为例:

- 将每个单词定义为终结符符号
- 定义非终结符符号如N(名词)、V(动词)、D(限定词)可以替换为终结符
- 定义 replacement 规则将非终结符替换为终结符或其他非终结符
- NP(名词短语)可以是 N 或 D + N
- VP(动词短语)可以是 V 或 V + NP
- 句子可以是 NP + VP

利用NLTK库,可以解析句子并理解其结构。解析会给出句子各部分的非终结符符号。

这种方法需要人工定义大量规则来覆盖所有可能的语法结构,难以完全描述复杂语言。
