# Stanford CS224W Machine Learning with Graphs
>
> <https://www.youtube.com/playlist?list=PL-myaKI4DslVPIos0HopgT8SjOn7HLJw8>

## 1. 1. Introduction; Structure of Graphs (Sep 24, 2019)

### 1.1 图的基本概念

图是代表关系或者连接的数学结构。它由节点(vertex/node)和边(edge)组成。节点代表对象,边代表两节点之间的关系。如果两个节点之间有边连接,则称这两个节点是相邻的。

### 1.2 图的结构

一个图可以用三元组G=(V,E,w)来表示:

- V代表节点集合(Vertex Set)
- E代表边集合(Edge Set)
- w代表边的权重函数(weight function)

无向图和有向图的不同在于:

- 无向图的边没有方向,表示双向关系。
- 有向图的边有方向,从一个节点指向另一个节点,表示单向关系。

### 1.3 图的通用应用

- 社交网络:节点代表人,边代表人与人之间的关系
- 交通网络:节点代表城市,边代表城市之间的公路或铁路链接  
- 生物网络:节点代表基因或蛋白质,边代表两个基因或蛋白质之间的相互作用
- 引文网络:节点代表文献,边代表一篇文献引用另一篇文献
- 计算机网络:节点代表计算机或路由器,边代表连接关系

以上笔记主要概括讲师介绍图结构的基本概念及通用应用,尽量保留关键信息,去除主观色彩,以markdown格式呈现。

## 2. 2. Properties of Networks and Random Graph Models (Sep 26, 2019)

### 2.1 网络的基本属性

网络的基本属性包括:

- 节点数|V|和边数|E|
- 联通分量(Connected Component)
- 直径(Diameter):网络中最长的简单路径长度
- 平均路径长度(Average Path Length):所有节点对之间简单路径长度的平均值
- 度分布(Degree Distribution):节点度的概率分布
- 基数(Clustering Coefficient):一个节点的邻居节点之间也有边的概率

### 2.2 随机图模型

随机图模型假设随机生成图的结构,常见模型有:

- 优先联系模型(Prefential Attachment Model):新加入节点更倾向与度大的节点相连  
- 小世界模型(Small-World Model):局域联系,但平均路径长度很小
- 统一随机模型(Uniform Random Graph Model):每个可能出现的边都出现的概率相同

这些随机图模型可以帮助理解真实网络的一些统计规律,如度分布,基数等特性。它们也为后续更复杂的网络模型打下基础。

### 2.3 网络属性的应用

网络结构属性与动态行为之间可能存在相互影响关系。例如社交网络的结构属性可能影响信息或流行病在网络中的传播效率。所以,研究网络属性对理解网络功能具有重要意义。

## 3. Snap.py and Google Cloud tutorial (Sep 27, 2019)

### 3.1 Snap.py介绍

Snap.py是一个开源的Python网络分析库。它提供了丰富的网络数据结构和算法实现。

主要功能包括:

- 创建和操作不同类型网络模型(Graph,DiGraph等)
- 生成随机网络模型(Erdos-Renyi,小世界模型等)
- 计算基本网络属性(节点数,边数,度分布,联通分量等)  
- 执行网络算法(单源最短路径,最小生成树等)

### 3.2 在Google Cloud上部署Snap.py

- 创建Google Cloud项目和虚拟机实例
- 在虚拟机上安装snap.py环境(Python, pip等)
- 使用pip安装snap.py包
- 测试示例脚本:计算 Facebook 网络数据集的属性
- 通过IP地址或设置端口映射访问虚拟机,运行网络分析任务

### 3.3 Snap.py的优点

- 开源免费,算法实现完善
- 提供丰富的网络数据结构和算法函数
- 能运行在本地也能部署在云服务上,便于大数据分析
- 面向Python开发,接口简单易用

以上笔记主要记录了Snap.py网络分析库和如何在Google Cloud上进行部署并运行Snap.py相关内容。

## 4. 3. Motifs and Structural Roles in Networks (Oct 1, 2019)

### 4.1 网络模体(Network motif)

网络模体是网络中的小型子结构模式,如三级和四级墨菲子图(Triadic and four-node motifs)。

研究发现在真实网络中,某些小模体比随机网络更趋于出现,这表明它们在网络发展中的重要作用。

### 4.2 结构角色(Structural roles)

通过比较一个节点与其邻居节点之间的相似性,可以将节点划分为不同的结构角色:

- 枢纽(Hub):与大量低度节点相连
- authority:主要和度大的枢纽节点相连  
- 连通桥(Bridge):连接不同团簇的节点
- 解与(Peripheral):与其他类型节点的相连性很弱

### 4.3 角色划分算法

常用算法包括:

1. 亲和度矩阵分析(Adjacency matrix representation)

2. Hope算法:根据节点相似度自动聚类分角色  

3. 角色矩阵分解算法:利用矩阵分解得到结构角色的隐含表示

识别结构角色可以帮助理解网络中节点的重要性与功能定向。

## 5. 4. Community Structure in Networks (Oct 3, 2019)

### 5.1 网络团聚结构

网络团聚结构指网络中的节点群体,内部连接更密集,而与其他群体连接较疏落。这种结构通常也称为网络团簇(Community)。

### 5.2 发现网络团聚结构的算法

主要算法包括:

1. 分层聚类algorithms:以节点间相似性进行分层聚类

2. 之间度算法(Betweenness algorithms):以边的betweenness值来移除边,获得团簇

3. 最大模糊团簇算法(Max flow/min cut algorithms):利用网络最大流理论实现

4. 谐波算法:根据节点在频率上对网络的影响来测量团聚程度

5. 共轭梯度算法:针对非常大规模网络优化性能

### 5.3 团聚属性

通过分析网络的团聚结构,可以得到以下属性:

1. 团簇规模分布

2. 团簇内外连接密度差异

3. 节点所属团簇及角色

揭示网络中的隐含社区结构,有助于理解网络功能和属性。

## 6. Review of Linear Algebra, Probability, and Proof Techniques (Oct 4, 2019)

### 6.1 线性代数review

- 向量、矩阵的基本概念
- 矩阵乘法规则
- 矩阵的转置、逆、秩
- 线性方程组与矩阵
- 特征向量和特征值

### 6.2 概率与统计review

- 概率空间、事件、独立事件
- 离散型与连续型随机变量
- 常见概率分布(二项分布、几何分布等)
- 基本统计量(期望、方差)

### 6.3 证明技巧review

- 直接证明与反例法
- 数学归纳法
- 前置条件与后果条件
- 控制变量法
- 间接法与重言式

以上内容旨在回顾线性代数、概率统计及证明方法等数学基础,为网络分析奠定理论基础。掌握这些基础知识对深入研究网络算法和模型是很重要的。

## 7. 5. Spectral Clustering (Oct 8, 2019)

### 7.1 谱聚类基本原理

谱聚类算法通过矩阵的特征向量来划分数据点到不同的簇中。

主要步骤:

1. 计算相似矩阵S

2. 对S计算拉普拉斯矩阵L

3. 对L计算k个最小非零特征向量

4. 将特征向量作为点在新空间的坐标,进行k-means聚类

### 7.2 不同拉普拉斯矩阵

- 无正定拉普拉斯矩阵:L=D-S

- 对称拉普拉斯矩阵:L=D^-1/2(D-S)D^-1/2

- 随机walks拉普拉斯矩阵:L=I-D^-1S

其中D是S的度矩阵。

### 7.3 谱聚类优点

1. 考虑全局结构信息,不容易陷入局部最优

2. 自动推断簇数,无需预设

3. 适用于不规则形状的簇分布

4. 同时利用空间定位和特征信息分簇

广泛应用于网络分析、图像处理等领域。

## 8. 6. Message Passing and Node Classification (Oct 10, 2019)

### 8.1 消息传递原理

消息传递是图神经网络的基本流程:

1. 每个节点初始化状态

2. 节点与其邻居交换消息

3. 根据接收消息更新自己的状态

4. 重复上述过程直至收敛

### 8.2 节点分类任务

将节点分类问题规范成:

- 给定特征描述每个节点
- 学习一个映射函数,将节点映射到标签空间
- 标签空间的dimension数等于分类类别数

### 8.3 消息传递实现分类

典型方法:

1. GCN层:以节点特征和结构信息为输入

2. 消息聚合:通过注意机制将邻居信息浓缩到节点状态

3. 传播学习:用消息更新节点状态,为下层分类任务定义

4. 分类层:基于学习后的节点表示完成分类任务

充分利用结构信息实现端到端学习,是节点分类方法的一大进展。

## 9. 7. Graph Representation Learning (Oct 15, 2019)

### 9.1 图表示学习基本目标

将图数据表示成低维向量表示,同时捕获结构、关系和属性信息。

### 9.2 节点表示学习方法

- DeepWalk:基于随机游走将结构信息编码为语句
- node2vec:改进DeepWalk,引入返回参数优化随机游走策略
- LINE:基于第一阶和二阶结构学习节点表示
- GCN:图卷积网络方法中节点表示的学习

### 9.3 整图表示学习方法

- Graph2vec:基于节点表示聚合得到整图表示
- GraphSAGE:采样Neighbors进行消息传递实现学习
- GraphGAN:基于生成对抗网络框架学习隐含图表示

### 9.4 表示学习在下游任务中的应用

预训练高质量图表示可以用于:

- 节点分类
- 链接预测
- 图匹配与分类
- 嵌入空间操作实现传播效应分析等

为深度学习解决图结构数据任务 laid基础。

## 10. 8. Graph Neural Networks (Oct 17, 2019)

### 10.1 图神经网络概述

图神经网络通过消息传播和节点状态更新的机制,实现多轮信息传递与聚合,获得节点结构化特征表达。

### 10.2 经典结构

- GCN:采用成熟CNN设计思想,使用近似拉普拉斯算子定义消息函数;

- GraphSAGE:设计采样策略并定义聚合函数实现消息传播;

- GAT:引入注意机制实现结构性自适应;

### 10.3 训练方法

- 完全监督训练:利用标签信息进行端到端训练;

- 预训练与微调:利用节点自信息进行预训练,微调到下游任务;

- 对抗训练:引入对抗样本或损失改进模型鲁棒性。

### 10.4 在下游任务中的应用

- 节点/图分类

- 链接预测

- 嵌入学习

- 等等,广泛应用在图/网络分析各个任务中。

图神经网络充分吸收了结构关系特征,在图学习任务中表现优异。

## 11. 9. Graph Neural Networks: Hands-on Session (Oct 22, 2019)

### 11.1 实战环境配置

- 安装操作系统:Ubuntu 18.04
- 安装Miniconda环境与依赖包:PyTorch、DGL等
- 准备示例数据:Cora和CiteSeer数据集

### 11.2 GCN模型实现

- 定义GCN层:采样邻居、消息发送与接收
- 训练评估过程:
  - 初始化参数
  - 前向传播计算输出
  - 反向传播计算梯度
  - 使用优化器更新参数
- 结果评价:分类准确率

### 11.3 GAT模型实现

- 定义GAT层:加入注意机制计算节点表示
- 训练过程与GCN类似
- 注意力可视化分析结果

### 11.4 小结

- 利用DGL简化编程难度
- 模型设计思路很直观
- GNN算法在小数据集上运行效果明显
- 帮助理解GNN原理与实战应用

以实战项目详细说明GNN算法实现方法。

## 12. 10. Deep Generative Models for Graphs (Oct 24, 2019)

### 12.1 图生成模型基本原理

探索生成由节点与边组成的结构性图数据。

### 12.2 Variational Autoencoder for Graphs

- 使用VAE框架,构建编码器和解码器
- 编码器提取图的隐含表示
- 解码器根据隐含向量生成图的结构

### 12.3 GraphRNN

- 采用循环神经网络结构
- 循环生成每个节点和其相邻边
- 已有部分提供上下文信息

### 12.4 GraphVAE

- 使用注意机制处理节点相似性
- 控制生成过程中自enda连接的个数
- 有针对性生成小规模但结构复杂的图

### 12.5 应用

- 新图生成
- 图补全
- 图编辑  
- 图正则化

图生成模型在化学物质设计等领域得到广泛应用。

## 13. 11. Link Analysis: PageRank (Oct 29, 2019)

### 13.1 PageRank基本思想

PageRank算法假设:用户在网络上随机跳转,留在高质量页面的时间更长。

### 13.2 PageRank计算方法

设N个页面,PR矩阵P为N×N矩阵:

- 非对角元素Pij=1/Oj,Oj为页面j的出链数  
- 对角元素Pii取值范围[0,1],即有概率随机跳到任意页面

PageRank值通过迭代得到: PR=αP×PR+(1-α)v

### 13.3 Personalized PageRank

考虑个性化序列:

- 参考序列r,每个元素表示期望停留在相应页面的概率
- 计算PR=αP×PR+(1-α)r

反映了用户的个性偏好。

### 13.4 PageRank在搜索引擎中的应用

- 网页重要程度评估
- 搜索结果排序
- 拓展相关查询
- 提升用户搜索体验

PageRank提出后广泛应用,提升了网络搜索质量。

## 14. 12. Network Effects and Cascading Behavior (Oct 31, 2019)

### 14.1 网络效应

网络效应指网络规模的扩大带来的增益,通常表现为每个额外用户带来的价值越来越大。

### 14.2 流式传播模型

- 独立公共goods模型:参与者之间不相关
- 寻找最佳响应模型:个人影响由邻居决定  
- 累积优势模型:早期用户带来优势

### 14.3 流言与传播分析

- SIR模型:易感体-感染体-移除体
- SIS模型:易感体-感染体-易感体
- SIRS模型:加入易感再感染状态

### 14.4 关键节点与传播阻断

关联中心性与中间中心性节点对最大程度调控信息传播。根据节点类型精准定位干预,有效阻断负面传播。

### 14.5 案例应用

- 产品流行分析
- 网络病毒防控  
- 舆论观点传播规律
- 推荐系统优化

研究传播模型,定量分析网络效应现象。

## 15. 13. Probabilistic Contagion and Models of Influence (Nov 5, 2019)

### 15.1 概率传染模型

- 原始IC模型:每个节点独立触发,破坏隐藏依赖关系
- 测试传染模型(TCM):考虑传染先后顺序,描述依赖关系

### 15.2 社交因素模型

- 普遍影响(general influence):节点固有影响力
- 专注影响(focused influence):受邻居影响较大

### 15.3 历史依赖扩展

- TCM-D:最近的活跃节点影响更大
- TCM-T:时间间隔越长影响越小

### 15.4 学习传播模型

利用传播观测数据进行学习:

- 学习节点影响力分布
- 学习传播路径影响拟合历史模式

定量评估不同因素对传播的作用,学习个性化传播模型。

## 16. 14. Influence Maximization in Networks (Nov 7, 2019)

### 16.1 影响最大化问题

给定一个社交网络和一个初始活跃节点集,如何找到k个节点的种子集,使得被激活节点数量最大。

### 16.2 初始算法IC模型下

- 真启发采样:二项分布采样,效率低
- 情报扩散:利用微分数据结构提速,效率高

### 16.3 改进算法

- CLUSTER:考虑节点群聚特性
- D-TTL:限定传播深度加快速度
- SpeedUp:采用集约森林预处理加速

### 16.4 实际应用

- 翻译兴趣触及更多人
- 用户产品转化率提升
- 信息/知识传播范围扩大
- 广告产品推广问答

重要任务,推动社交网络研究与商业价值实现。

## 17. 15. Outbreak Detection in Networks (Nov 12, 2019)

### 17.1 流行病检测原理

当网络上传播事件激活节点数量 superlinear增长时,应立即发出报警。

### 17.2 传统免疫接种方法

- 随机免疫:随机选择节点免疫
- 度中心性优先:高度节点优先免疫

### 17.3 钦定传播模型检测

- SIS、SIR、SEIR模型检测传染程度
- 使用LLR统计比较传播与自发生成率差异

### 17.4 无监督传播检测

- PageRank检测分裂传播
- 正则化传播矩阵检测异常传播模式

### 17.5 在线学习检测

- 异常传播特征提取与学习分类器
-滑动窗口监测传播实时演变

早期有效检测传播事故,有利于病毒控制与流言隔离。

## 18. 16. Network Evolution (Nov 14, 2019)

### 18.1 网络演化机制

网络随时间不断演变,主要机制包括:

- 节点加入:新节点接入网络
- 链接建立:节点间产生联系
- 链接断开:节点间联系消失

### 18.2 网络生长模型

- 无规约网络:BARBARAS模型
- 优先附着:新节点更倾向于高度节点
- 聚类性生长:新节点更容易接入相似团队

### 18.3 网络衰变模型

- 随机断开:links随时间随机消失
- 动态断开:考虑拓扑变化断开联系
- 节点死亡:部分节点退出网络

### 18.4 网络模型学习

利用时间序列数据学习网络生长机制,预测未来发展态势。

结合网络上结构与属性动态研究网络演化Regular性,揭示社交模式 hidden rules。

## 19. 17. Reasoning over Knowledge Graphs (Nov 21, 2019)

### 19.1 知识图表征

知识图通过实体(entity)与关系(relation)表示结构化知识。

### 19.2 图式推理任务

- 链接预测:预测未知关系
- 实体识别:从 тек中识别实体
- 问答:回答基于图的问题

### 19.3 路径法表征

提取所有路径来描述实体关系,构建路径统计方法。

### 19.4 基于角色的模型

每个关系表示为一个变换函数,连续应用得出结论。

### 19.5 引理法推理

利用知识库内置边和规则,进行 multi-hop推理得到新的事实。

### 19.6 深度学习方法

利用GNN编码结构信息,进行实体分类、链接预测任务。

深入理解实体关系,进行自动多层次结合式地理解和响应问题。

## 20. 18. Limitations of Graph Neural Networks (Dec 3, 2019)

### 20.1 计算能力限制

GNN多层设计难以表达复杂结构,对大规模图处理能力有限。

### 20.2 over-smoothing问题

With deeper neural network layers, node representations become more similar and lose distinguishing power.

### 20.3 不能表示全局结构

GNN难以直接学习整个图的特征,更容易捕获局部结构。

### 20.4 学习不易收敛

对大规模动态图训练难收敛,易出现过拟合等问题。

### 20.5 信息丢失

多次通信后节点状态变化,难溯源于原始输入图结构信息。

### 20.6 解释能力差

模型难解释自身学到的图特征和决策过程。

### 20.7 性能瓶颈

图算法运算和通信开销大,难以应对大规模图性能瓶颈。

GNN研究面临诸多挑战,需要进一步提升模型表征和推理能力。

## 21. 19. Applications of Graph Neural Networks (Dec 5, 2019)

### 21.1 物质设计

预测分子结构-性质关系,促进新材料发掘。

### 21.2 社交网络分析

用户分类、链接预测、传播分析等任务。

### 21.3 知识图应用

问答、信息扩充、错误检测等知识服务。

### 21.4 网络安全

网络入侵检测、恶意软件分析等保障网络安全。

### 21.5 交通运输

车辆路网监测预测、优化交通流动性。

### 21.6 计算机图形

3D场景理解、对象识别、识别运动预测。

### 21.7 生物信息学

蛋白质结构预测、基因调控网络分析等。

### 21.8 异常检测

服务网络故障定位、网络诊断与维护等。

GNN在不同网络应用中发挥重要作用,推动交叉研究。

## 22. Stanford CS224W: Machine Learning with Graphs | 2021 | Lecture 1.1 - Why Graphs

### 何为图节点与边  

图通过实体(节点)和关系(边)来表示结构化知识。

### 自然图与网络表示  

许多领域如社交网络、生物医学等可以自然地用图来表示,即实体及其关系可以建立节点和边。

### 其他领域的图表示  

除自然图外,知识信息、软件代码等也能通过图来捕获实体间的关系结构。

### 图表示优势  

图表达能力强,能更加真实地模拟领域内实体关系,从而建立更准确模型。

### 机器学习面临挑战

深度学习工具面临图数据不定形和复杂拓朴结构的挑战。

### 图神经网络技术

通过学习节点间嵌入表示,自动学习图特征,为下游任务提供表征,无需人工设计特征。

### 本课将探讨内容

传统图方法、节点嵌入、图神经网络等,以及其在生物医学、科学等领域的应用。

## 23. Stanford CS224W: Machine Learning with Graphs | 2021 | Lecture 1.2 - Applications of Graph ML

### 社交网络预测

预测用户属性、链接、信息传播等。

### 知识图处理

问答、情报扩充、错误检测。

### 网络安全

入侵检测、恶意软件分析。

### 交通预测

车流监测预报、优化交通流动。

### 生物信息学

蛋白质结构预测、基因调控网络分析。

### 商品推荐

基于用户交互图推荐商品。

### 欺诈检测

基于交易图发现可疑交易。

### 化学物质设计

预测分子结构-性质关系,促进新材料发展。

### 3D场景理解

物体识别、跟踪预测。

图神经网络在上述应用中发挥重要作用,推动交叉研究。

## 24. Stanford CS224W: Machine Learning with Graphs | 2021 | Lecture 1.3 - Choice of Graph Representation​

### 图表示问题

如何表示不定形的、动态变化的图结构数据?

### 邻接矩阵表示

用二维矩阵记录每个节点之间的连接关系。

### 邻接列表表示

用数组记录每个节点的 neighbor 节点列表。

### 节点属性

记录节点自身特征如年龄、性别等。

### 边属性

记录边连接两个节点的关系类型或权重。

### 多图

表示节点可以属于不同类型的多个图。

### 动态图

表示图结构和属性随时间的变化。

### 模式发现

发现图结构中的重复子图形或模式。

### 表示学习目标

获取节点/边/图上的低维表征,为下游任务提供特征。

不同表示选择影响后续算法效率和表征学习效果。

## 25. CS224W: Machine Learning with Graphs | 2021 | Lecture 2.1 - Traditional Feature-based Methods: Node

### 节点特征提取

直接使用节点属性,或统计节点周围结构特征作为表示。

### 节点度

记录节点边连接的数量。

### 近邻节点属性

描述节点直接相邻节点属性频率。

### Common Neighbors

描述节点共同邻居数量,反映关系强弱。

### Preferential Attachment

描述节点临近节点的度分布,展示结构影响。

### Rooted PageRank

记录从节点出发 Personalized PageRank 分布。

### Heat Kernel Signature

描述相对于整张图的节点位置特征。

### Graphlets

统计节点参与不同尺寸或形状子图模式的频率。

人工设计的特征需要考虑图结构特点,但依赖经验知识。

## 26. CS224W: Machine Learning with Graphs | 2021 | Lecture 2.2 - Traditional Feature-based Methods: Link

### 链接属性

直接使用连接两节点的关系类型或权重作为特征。

### 共同邻居

描述连接两节点的公共邻居数量,反映关系强弱。

### Katz Beta系数

量化节点通过共同邻居可能达成的关系密度。

### Preferential Attachment

记录连接两节点的度分布,描述结构影响关系形成。

### Rooted Random Walks

从链接起点出发的Personalized PageRank分布。

### Shortest Path

描述两节点间最短路径长度,位置关系特征。

### Hitting Time

记录从一个节点随机游走到另一个节点的平均步数。

### Graphlets

统计链接参与不同尺寸子图模式的频率。

直接使用定义的链接特征或关联节点特征进行描述。

## 27. CS224W: Machine Learning with Graphs | 2021 | Lecture 2.3 - Traditional Feature-based Methods: Graph

### 图形特征

直接使用图属性如节点/边数量作为特征。

### Graphlet Count Vector

统计图中不同尺寸子图模式的频率分布。

### Graphlet Degree Vector

描述每个节点所处子图模式的频率分布。

### Shortest Path Distribution

统计图中所有实际最短路径长度分布。

### Graph Spectral Features

使用图谱分析获取特征,如图拉普拉斯特征值。

### Orbital Features

统计特定阶数节点关系组合的频率。

### Motif Network Minor Index

描述图中含有哪些3-5阶子图网络模式。

### Neighborhood Aggregation

统计每个节点一定跳数内子图统计值。

人工设计的图特征需要全面描述结构信息。

## 28. CS224W: Machine Learning with Graphs | 2021 | Lecture 3.1 - Node Embeddings

### 节点嵌入学习

将节点映射到低维向量空间,相似节点近,差异节点远。

### DeepWalk

通过短随机游走生成窗口语料,使用Skip-gram学习嵌入。

### Node2vec

改进DeepWalk,引入优化随机游走策略的超参数。

### LINE

根据一阶和二阶相似性分别学习嵌入,然后整合输出。

### struc2vec

根据节点结构角色学习嵌入,如同阶中心性节点。

### hope

通过图拉普拉斯计算节点分离度参数学习嵌入。

### SDNE

使用深度学习框架实现结构保留和特征学习目标。

## 演示节点结构相似性,为下游任务提供低维特征表达。

## 29. CS224W: Machine Learning with Graphs | 2021 | Lecture 3.2-Random Walk Approaches for Node Embeddings

### DeepWalk和Node2vec原理

通过节点短随机游走生成语料,采用Skip-gram模型学习嵌入。

### 生成随机游走序列

从每个节点出发多次执行有放回随机游走。

### Skip-gram模型

将窗口内节点对作为训练样本,最大化连词预测概率。

### Node2vec改进

通过两个超参数引导随机游走,取得结构丰富样本。

### 偏离概率q

控制随机游走冗余性(q>1)和突出性(q<1)。

### 返回概率p

控制随机游走是否回溯曾经访问的节点。

### 优化嵌入效果

Node2vec通过调整q、p改变样本分布,学习到更好结构表示。

### 总结

DeepWalk和Node2vec利用随机游走和词向量技术从全局学习结构嵌入。

## 30. CS224W: Machine Learning with Graphs | 2021 | Lecture 3.3 - Embedding Entire Graphs

### 学习整张图嵌入

将图作为一个整体学习低维表达。

### Graph2vec

使用节点卡 Take node embedding averages/sums作为图embedding。

### Structural Embedding

利用图谱特征如特征值/向量学习embedding。

### GraphWave

使用紧凑自编码训练来学习时间序列表示法。

### neuralfp

使用竞争性单调双线性层实现图间匹配。

### Gilleo

运用图注意力机制将节点嵌入聚合到整体图中。

### FS-GNN

利用Frechet距离 loss约束学习不同尺度图嵌入。

### 利用节点/图特质信息

直接提取或通过神经网络将结构表示为低维向量。

### 用于图匹配/分类等任务

提供整体图表示供下游模型学习高级结构信息。

## 31. CS224W: Machine Learning with Graphs | 2021 | Lecture 4.1 - PageRank

### PageRank原理

通过节点间持续信息共享求出节点重要度。

### PageRank算法

以一定概率随机跳转,或沿边传递信息值。

### 电子脚本解释

将PageRank视为网页互相传播的“电子脚本”。

### 收敛到均匀分布

算法随时间收敛到每个节点获得同样信息值的均匀状态。

### Personalized PageRank

引入个性化参数向量,强调指定节点传播能力。

### 广告传播案例

利用PageRank优化在社交网络中的广告传播策略。

### 性能优化

通过图分区和改进收敛等手段加速PageRank计算。

### PageRank原理探究网络流量分布且考虑节点质量影响

## 32. CS224W: Machine Learning with Graphs | 2021 | Lecture 4.2 - PageRank: How to Solve?

### 迭代法求解PageRank

重复计算每个节点的PageRank值直至收敛

### 平方迭代法

利用PR等于(1-d) *M* PR + d * v形式迭代计算

### 极大似然估计

把PageRank求解视为概率分布的极大似然估计问题

### 基于图的系统方程

利用图拉普拉斯矩阵构建线性系统求解PageRank值

### 使用谱分解

应用图谱特征分解快速收敛到解  

### Monte Carlo方法

通过随机传播模拟界面值估算 PageRank

### 迭代法稳定且准确但慢

谱分解和Monte Carlo方法计算效率更高

### 矩阵分解库支持大规模求解

人工设计求解策略或利用工具库进行优化

## 33. CS224W: Machine Learning with Graphs | 2021 | Lecture 4.3 - Random Walk with Restarts

### 随机游走重启

随机游走者在某一概率下会跳回指定节点重启游走。

### 个性化PageRank

随机游走者只能跳到指定子集内的节点。

### PageRank

随机游走者会均匀随机跳到图中所有节点。

### 计算相似性

通过统计随机游走者访问每个节点的次数来度量节点之间的关联程度。

### 物品推荐

以用户-物品二分图作为图,查询节点为特定物品,节点访问次数反映其他物品的相关性。

### 随机游走模拟

通过重复选择随机邻居并记录访问计数来模拟随机游走过程。

### 重启概率

以一定概率α跳回查询节点集重启游走。

### 特征向量解法

也可以将问题视为推断流量分布,通过特征向量迭代计算解决。

### 优点

考虑连接强度、路径类型和度数影响,简单高效,即使实际模拟也得出接近结果。

## 34. CS224W: Machine Learning with Graphs | 2021 | Lecture 4.4 - Matrix Factorization and Node Embeddings

### 矩阵分解

将稀疏相似性矩阵分解为低秩近似,提取隐含结构。

### 奇异值分解

用奇异值分解将矩阵分解成三个矩阵的乘积表达。

### node2vec

利用二阶随机游走生成结构相似性节点边集,构建相似矩阵并分解 learning embeddings。

### DeepWalk

通过模拟随机游走生成结构相似样本,训练词埋嵌模型学习节点表达。

### LINE

定义第一阶和二阶 proximity,分别训练节点表达模型捕获各层次结构信息。

### node embedding训练

将生成的样本看作词汇,节点看作文档,使用词埋嵌框架训练低维分布式节点表达。

### 应用

链接预测,社区检测,分类等任务,将节点表达作为特征进行训练。

### 优点

能够很好捕获复杂结构信息,学习到低维分布式节点表达有利下游任务。

## 35. CS224W: Machine Learning with Graphs | 2021 | Lecture 5.1 - Message passing and Node Classification

### 信息传递

节点通过聚合每个一阶邻居信息更新自己的隐状态,迭代传递信息。

### GCN

采用矩阵乘法表示信息传递,过滤器改变节点状态维度,成为GCN层实现信息传递。

### 图神经网络

基于图结构设计的深度学习模型,利用信息传递学习节点表示。

### 节点分类

将节点表示作为特征,在标签数据集上训练分类器学习节点类型。

### 模型训练

给定部分 labeled 节点,采用交叉熵损失函数优化分类器参数和 GCN 参数,获得准确分类结果。

### 应用

生物信息学领域如蛋白质功能预测,社交网络用户类型识别等任务上效果显著。

### 优点

能学习到包含结构信息的高维稠密节点表示,有效解决结构数据问题。

## 36. CS224W: Machine Learning with Graphs | 2021 | Lecture 5.2 - Relational and Iterative Classification

### 关系分类

利用结构信息中节点关系依赖进行分类。

### 迭代分类

重复传播节点类别信息,依据相邻节点类别更新自身预测,迭代收敛预测结果。

### Loopy Belief Propagation

建立连接矩阵来表示节点之间关系,迭代优化联合分布实现分类。

### ICA模型

采用独立成分分析建立隐变量关系模型进行迭代推断。

### 矩形博弈模型

视网络为博弈场景,迭代计算更新各节点角色预测。

### 随机游走分类

利用PageRank思想实现信息在结构中的传播传递。

### 有利用关系依赖

学习结构中相关联的标签扩展分类知识。

### 迭代收敛

多轮信息交互传递后取得稳定的预测结果。

## 37. CS224W: Machine Learning with Graphs | 2021 | Lecture 5.3 - Collective Classification

### 集体分类

考虑节点分类结果的相互依赖关系采用迭代优化分类效果。

### 模型参数

包含节点自身属性分类器和关系传播机制的参数。

### 迭代更新

重复使用当前节点预测更新相邻节点预测,迭代统计学平衡。

### 松弛标签传播

节点承接相邻节点平均标签作为自己下次预测。

### مصفوفات معتمدة

تستخدم مصفوفات الاعتماد لنقل المعلومات بين العقد.

### هيكلة تصنيف بيلوف

يستخدم التوزيعات الاحتمالية المشتركة لتحديث التنبؤات.

### فعالية عالية في مهام الشبكات الاجتماعية وغيرها

تحسين التصنيف من خلال الاستفادة من الاعتمادات البنيوية.

## 38. CS224W: Machine Learning with Graphs | 2021 | Lecture 6.1 - Introduction to Graph Neural Networks

### 欢迎回到本课程

### 将开始新的主题-图神经网络

### 课程从开始就为此主题做准备

### 今天将讨论深度学习对图的技术,特别是图神经网络

### 下一两个星期将深入研究这个主题

### 之前学习节点嵌入

### 将节点映射到低维向量空间,使结构相似的节点更近

### 学习编码器f,将图映射成节点嵌入

### 将网络中的相似性与嵌入空间中的相似性联系起来

### 嵌入空间利用点积来衡量相似性

### 目的是让结构相似的节点在嵌入空间也更相似

### 之前探讨了浅编码器

### 直接学习每个节点的唯一嵌入向量

### 如深度游走方法中的嵌入查找表方法

### 这种方法的局限性

### 模型参数数量与节点数量直接 proportion

### 没有参数共享,每个节点唯一

### 转推式学习,无法学习新图的节点

### 不考虑节点特征

### 今天讨论深度图编码器

### 如图神经网络,采用多层非线性变换学习嵌入

### 取代浅编码器的单层学习方法

### 图神经网络可以直接解决节点分类等任务

### 目的是构建深度模型,输入是图,输出是节点/图嵌入或预测

### 能端到端训练模型

### 其优势和难点

## 39. CS224W: Machine Learning with Graphs | 2021 | Lecture 6.2 - Basics of Deep Learning

### 经典深度学习工具箱适用于简单数据类型

### 如固定尺寸矩阵代表图片,序列代表文本

### 它很擅长处理这两种类型的数据

### 序列能表示为链图,矩阵能表示为网格图

### 图神经网络能扩展表示能力

### 用于更复杂的数据类型比如图

### 图的数据具有以下特征

1. 尺寸任意  

2. 拓扑结构复杂

3. 没有空间局部性

4. 没有固定顺序或参考点

5. 带有节点和边上的多模态特征

6. 动态演化

### 表示复杂图结构对模型提出了新挑战

### 无法直接使用处理序列或固定矩阵的方法

### 需要专门设计模型来学习图结构中的表示知识

## 40. CS224W: Machine Learning with Graphs | 2021 | Lecture 6.3 - Deep Learning for Graphs

### 图神经网络

- 应用深度学习方法学习图表示

- 将图看作非线性变换操作后的节点表示输出

-每个节点表示受其一阶邻居影响

### 基本思想

- 将图看作神经网络结构

- 通过信息传递学习节点表示

- 节点经历多轮操作互相影响学习新表示

### 重要模块

1. 信息传递机制

2. 节点更新规则

3. 嵌入融合规则

### 训练目标

- 同网络结构中的相似性一致

- 解决不同任务如分类、链接预测等

### 优点

- 可学习复杂图特征

- 拓展学习能力处理动态图

- 学习节点属性等更多信息

- 同传统深度学习端对端学习优势

### 挑战

- 图无固定结构更难定位节点

- 模型设计需要考虑结构信息

## 41. CS224W: Machine Learning with Graphs | 2021 | Lecture 7.1 - A general Perspective on GNNs

### 总结上节讨论内容

### 图神经网络目的是建构深度模型,将图作为输入,输出节点/图嵌入或预测

### 定义图神经网络的五个方面

1. 消息传递和聚合定义单层

2. 层之间连接方式

3. 图处理与特征增强

4. 计算图构建

5. 学习任务和目标

### 不同框架通过定义消息和聚合来区别单层

### 上层连接包括顺序叠加和跳链接

### 图处理包含特征增强和结构调整

### 计算图可以直接使用输入图或进行扩充

### 学习目标包括监督和无监督,预测节点、边或整图输出

### 这五个方面构成图神经网络决策空间,后续将深入介绍每个方面

## 42. CS224W: Machine Learning with Graphs | 2021 | Lecture 7.2 - A Single Layer of a GNN

### 定义单层的两个基本操作:消息传递和聚合

### 消息传递将节点信息传给相邻节点

### 使用消息函数m将节点状态h转化成消息与相邩节点分享

### 消息函数一般为神经网络层

### 聚合函数 aggregate将相邻节点消息整合为更新目标节点状态

### 聚合可以是简单sum,mean或注意力机制

### 图神经网络层Update表示为

h^l+1_i = Aggregate_{j∈N(i)}m^l(h^l_i,h^l_j,e_{ij})

### m^l为消息函数,aggregate为聚合,h^l_i表示层l节点i状态

### 消息从相邻节点j传给节点i,携带关系e_{ij}信息

### 不同框架通过改变m和aggregate定义了不同单层

### 单层重复叠加可以建模图深度特征

## 43. CS224W: Machine Learning with Graphs | 2021 | Lecture 7.3 - Stacking layers of a GNN

### 图神经网络通过堆叠多层单层来学习图表示

### 堆叠方式包括

1. 顺序堆叠

每层作为上一层的输入,无连接

2. 跨层连接

使用跳连将不同层连接,加强特征传播

3. 残差连接

将上层特征直接输入到较深层以改进梯度流

### 顺序堆叠层数决定嵌入深度

### 跨层更全面学习图信息

### 残差网络加强深层特征学习

### 残差块可重复使用,同时连接多层

### 其他方案如DenseNet全连接层特征

### 堆叠层数和连接方式决定GNN深度和表达能力

### 需根据任务选择合适层次结构

## 44. CS224W: Machine Learning with Graphs | 2021 | Lecture 8.1 - Graph Augmentation for GNNs

### 图处理指在学习中扩充输入图结构

### 目的是为GNN提供更丰富的结构信息

### 图处理包括

1. 特征编码

为节点/边增加特征,如One-hot编码

2. 结构扩展

添加节点、边或图信息,如k跳扩散图

3. 图卷积

通过域翻转生成新边或图,扩充网络流信息

### 特征编码给原始结构增加上下文

### 结构扩展提供全局关系依赖

### 图卷积增强图中的信息传播效率

### 合理扩充输入工作为GNN提供更多学习依据

### 但规模增大也增加计算成本,需平衡信息量和效率

## 45. CS224W: Machine Learning with Graphs | 2021 | Lecture 8.2 - Training Graph Neural Networks

### 训练GNN需要指定学习任务和损失函数

### 学习任务包括

1. 节点分类

预测节点类别

2. 链接预测

预测是否存在边

3. 图分类

预测整张图属性

4. 无监督学习

自监督学习图表示

### 损失函数根据任务而定

1. 节点分类用交叉熵

2. 链接预测用BCELoss

3. 图分类用交叉熵

4. 无监督学习用重构或预测错误

### 训练通过反向传播和优化算法更新参数

### 优化器包括 mini-batch SGD,Adam等

### 对于大规模图可采用负采样或 mini-batch

### 训练需要平衡学习和图表示能力  

### 适当设定深度、样本、学习率以求最佳效果

## 46. CS224W: Machine Learning with Graphs | 2021 | Lecture 8.3 - Setting up GNN Prediction Tasks

### GNN学习任务包括节点任务和图任务

### 节点任务包括

1. 节点分类

预测节点类型或属性

2. 链接预测

预测节点之间是否有边连接

3. 节点推荐

根据历史推荐新节点

### 图任务包括

1. 图分类

判断图的类别或属性

2. 子图检测

在图中识别结构匹配的子图

3. 图生成

根据部分观测信息生成新的图

### 设计预测任务需要考虑

- 数据集和注解

- 正负样本采样(链接预测)

- 特征选择(节点/图属性)

- 多任务联合学习

- 监督信号强度

- 模型和学习目标设置

正确设计预测任务有助于充分挖掘GNN优势。

## 47. CS224W: Machine Learning with Graphs | 2021 | Lecture 9.1 - How Expressive are Graph Neural Networks

### 探讨GNN表示能力的两个重要问题

1. GNN能否表示任意函数?

2. 对于不同类函数,需要多少层才能充分表示?

### Xu et al. 分析GNN表示能力

- GNN无法表示所有函数,受限于图结构

- GNN可以逼近对称与平稳函数

- 利用卷积拓展结构可增加表示能力

- 深层GNN具有强大表达能力

### Gao et al.给出理论分析结果

- 普通GNN无法学习所有图函数

- 特定GNN在特定图结构下可以拟合任意函数

- 深层和多头注意力GNN表示能力更强

### 理论研究所需水平尚需提高

- 实际应用GNN效果很好,理论无法全面解释

- 未来工作将进一步研究GNN能力极限

## 48. CS224W: Machine Learning with Graphs | 2021 | Lecture 9.2 - Designing the Most Powerful GNNs

### 从理论上设计具有最强表达能力的GNN

1. 深层网络

通过堆叠多层单元来学习复杂特征

2. 多头注意力

不同项目学习不同关系模式

3. 残差连接

加强深层特征传播

4. 图卷积

通过扩充图结构增加信息依赖程度

5. 全球特征聚合

学习超越局部邻居的全局属性

6. 动态图学习

充分利用图变化模式

7. 多任务学习

不同目标joint学习

### 在实际应用中,需要权衡表达能力和计算资源

### 使用少量参数学习深层次特征同时保留计算效率

### 未来工作将设计灵活适应不同任务的架构

## 49. CS224W: Machine Learning with Graphs | 2021 | Lecture 10.1-Heterogeneous & Knowledge Graph Embedding

### 非质量结构图

- 多个节点类型和多种关系

- 节点与关系带有不同属性

- 学习时需考虑类型和属性区分

### 知识图

- 经典类型包括人物、地点、组织等

- 复杂语义关系如"出生地"、"学历"

- 目的是从知识图中问答和推理

### 知识图嵌入

- 将不同实体和关系映射到连续向量空间

- 原始模型TransE假设关系为变转换的操作

- 后续模型如TransH、TransR等提升表征能力

- 学习嵌入后可用于链接预测和问答任务

### 非正交结构图网络需特殊设计考虑结构差异

### 知识图嵌入通过学习语义空间实现人工智能目标

## 50. CS224W: Machine Learning with Graphs | 2021 | Lecture 10.2 - Knowledge Graph Completion

### 知识图补全任务是在现有知识图上预测遗漏的关系

### 例如Freebase知识图中,许多人物节点缺失出生地或国籍信息

### 知识图补全的核心问题是:给定知识图和一对相关实体,我们能否自动预测其可能的关系?

### 知识图补全可以采用embedding表示学习来预测

1. 将实体和关系映射为嵌入向量

2. 预测缺失关系是否成立,可 formulize为预测两个实体向量与关系向量的关系

3. 训练目标通常采用成对学习,将现有关系视为正例,随机对视为负例

4. 常用损失函数如BCELoss

5. 测试时根据预测关系得分排序,返回置信度最高的结果

### 知识图补全任务充分发挥GNN学习结构依赖关系能力,在许多领域中都有重要应用

## 51. CS224W: Machine Learning with Graphs | 2021 | Lecture 10.3 - Knowledge Graph Completion Algorithms

### 主要知识图补全算法

1. TransE

将关系看作实体向量之间的平移,预测是否成立.

2. DistMult

用点积表达关系,计算实体间关系表达式的值预测相关性.

3. ComplEx

 complex值为实值,考虑关系的复数属性,能表示对称/反对称关系.

4. ConvE

将实体和关系表示为矩阵,卷积核学习实体间互动过滤特征.

5. RotatE

将关系看作旋转,预测实体向量旋转后的位置重合程度.

6. TuckER

将所有实体和关系表示为三维张量,全面捕捉多阶相互信息.

### 实体关系建模手段从简单平移升级为张量、卷积、注意力机制等,表达能力不断增强

### 公开数据集如WN18、FB15K广泛应用于算法评估,激户知识图学习研究发展

## 52. CS224W: Machine Learning with Graphs | 2021 | Lecture 11.1 - Reasoning in Knowledge Graphs

### 知识图推理任务包括

1. multi-hop查询

根据多个关系连续推理出新的事实。

2. 可解释性推理

给出推理过程中每个关系的作用。

3. 规则推断

根据预设规则自动增强知识图。

4. 事实验证

判断给定语句是否属于知识图事实。

5. 未知关系预测

预测两个未连接实体之间的可能关系。

### 主要方法

1. 路径 ranking模型,对查询路径赋予权重排序。

2. 卡方无监督学习,推断新特征与已知关系之间的相关性。

3. 逻辑规则,学习事先定义的逻辑句法进行演绎。

4. 对抗网络,生成假事实对抗训练可解释模型。

### 推理能力直接决定知识图学习的应用价值。随着模型和算法不断改进,知识图推理水平也在提高

## 53. CS224W: Machine Learning with Graphs | 2021 | Lecture 11.2 - Answering Predictive Queries

### 用传统方法无法回答不完整知识图上的预测式查询

1. 如果图中缺失关系,无法完成多跳查询路径遍历。

2. 隐式补全缺失关系关系,预测查询答案。

### TransE方法扩展用于回答多跳查询

1. 将查询视为实体与关系的连接序列。

2. 根据序列学习查询向量。

3. 预测答案实体为查询向量距离最近。

### 回答复杂逻辑查询

1. 将起点实体视为查询子计划。

2. 学习子计划向量表示相应实体集合。

3. 施加逻辑运算得出最终答案。

### 嵌入学习方法可以看全图上下文,隐式补全缺失关系

1. 根据相似实体间关系,推断潜在新关系。

2. 改进查询向量学习,考虑实体集合与逻辑关系。

3. 在嵌入空间定义逻辑运算符如交集。

### 预测查询需要学习实体与关系向量,并利用向量间距离实现查询解析

## 54. CS224W: Machine Learning with Graphs | 2021 | Lecture 11.3 - Query2box: Reasoning over KGs

### Query2box模型

1. 将查询表示为包含集合与逻辑关系的Box.

2. 学习Box内集合与关系的向量表示.

3. 用集合间距离衡量逻辑关系.

4. 根据逻辑关系计算最终答案概率.

### Box表示

1. 每个集合使用一个大致均匀分布的球体表示.

2. 关系使用向量表示作用在集合间.

3. Box内集合・关系共同构成查询空间网格结构.

### 逻辑关系距离

1. 集合间距离衡量其逻辑关系程度.

2. 交集关系集合距离近,并集关系较远.

3. 关系向量学习使答案集合距离最小.

### 训练和推理

1. 监督学习 queries、答案、Box结构.

2. 推理预测未知query答案概率.

3. 迭代更新Box向量提升预测效果.

### Query2box利用Box表示复杂查询,在知识图嵌入空间实现逻辑关系识别

## 55. CS224W: Machine Learning with Graphs | 2021 | Lecture 12.1-Fast Neural Subgraph Matching & Counting

### 子图匹配任务

1. 给定查询子图Q和大型图G。

2. 计算G中与Q同构子图的次数。

### 经典算法复杂度高,在大型图上效率低下

### Neural Subgraph Counting

1. 学习图节点向量表示。

2. 为每个节点赋予分类向量,表示其对Q子图的贡献。

3. 分类向量乘积即为匹配次数估计值。

### 优点

1. 学习自适应图特征,无需手工设计。

2. 通过节点编码并行计算,时间复杂度与图大小无关。

3. 表现优于图钩函数等经典算法。

### 在大规模图匹配任务中明显提升效率,例如蛋白质结构比对等

## 56. CS224W: Machine Learning with Graphs | 2021 | Lecture 12.2 - Neural Subgraph Matching

### 子图匹配任务

1. 给定查询子图Q和数据图G

2. 判断是否存在Q同构子图嵌入在G中

### Neural Subgraph Matching

1. 使用GNN学习图节点表示

2. 给每个节点赋予匹配/不匹配标签

3. 最大化匹配节点,最小化不匹配节点的损失函数

### 改进

1. 使用注意力机制比较Q-G节点对

2. 构建Q-G关系图纠正匹配

3. 循环迭代提升匹配质量

### 应用

1. 化学反应图匹配

2. 网络序列匹配检测欺诈

3. 社交图结构相似度计算

4. 生物最优路径对齐

### 神经网络学习图中的匹配信息,有效解决子图匹配问题。模型性能稳定,在实际任务中表现优异

## 57. CS224W: Machine Learning with Graphs | 2021 | Lecture 12.3 - Finding Frequent Subgraphs

### 寻找频繁子图是图挖掘重要任务

### 经典方法局限

1. 枚举所有可能子图需要极高复杂度

2. 失去结构信息,难以判断图式相似度

### Deep Feature Mining

1. 使用GNN学习全图嵌入

2. 对嵌入向量应用K-Means聚类

3. 每个簇代表一个含糊图式

### FGSD

1. 将图划分成若干重叠图块

2. 块内节点使用GNN学习表示

3. 计算相似性筛选出频繁部分图

### 优势

1. 神经网络模型学习图结构特征

2. 聚类识别图式,复杂度低于暴力枚举

3. 预处理减少搜索规模,效率高

4. 在真实网日志和蛋白质等数据集表现出色

### 数据驱动特征学习替代固定模板,有效挖掘结构频繁片段

## 58. CS224W: Machine Learning with Graphs | 2021 | Lecture 13.1 - Community Detection in Networks

### 社区挖掘是发现图中潜在结构的重要任务

### 评价函数

1. 社区内边数较多,社区间边数较少

2. 独立子图模块化度Q越高,社区结构明显

### 经典算法

1. 轻启发式聚类CUT算法

2. spectrum截断分解图谱

3. Louvain算法 - 贪婪合并节点

4. Infomap算法 - 密度流模型

### 神经网络社区检测

1. GNN学习图结构信息

2. 节点分类判断其社区标签

3. 监督或无监督学习

4. 整图视角,考虑全局结构特征

5. 在现实网络上效果好,被广泛采用

### 社区结构关系复杂,图神经网络提供更全面学习社区边界的能力

## 59. CS224W: Machine Learning with Graphs | 2021 | Lecture 13.2 - Network Communities

### 网络社区结构类型

1. 模块 - 高内联低外联结构

2. 剪枝 - 树或星型结构

3. 重叠 - 节点可属于多个社区

4. 嵌套 - 小社区组成更大社区

5. 谱 - 节点与整个图弱耦合

### 神经网络社区检测方法

1. 采用GNN学习节点集邻域信息

2. 监督训练目标识别明确社区标签

3. 非监督训练目标优化模块度

4. 根据联合概率或独立概率预测社区

5. 多尺度分析,发现各层次结构

### 优点

1. 考虑全局结构依赖关系

2. 学习社区边界不需定义模板

3. 识别难区分重叠结构

4. 在大规模网络上性能更好

### 有助理解社交、生物等复杂网络中的结构作用

## 60. CS224W: Machine Learning with Graphs | 2021 | Lecture 13.3 - Louvain Algorithm

### Louvain算法是分层贪婪社区发现算法

### 过程

1. 每个节点作为一个单独社区

2. 重复以下步骤:

- 计算将每个节点移动到邻近社区后的模块度增益

- 将增益最大的节点移入对应社区

3. 将连接在同一社区内的节点合成一个超节点

4. 返回到步骤2,使用社区层次图重复计算

5. 直到模块度停止增加,输出各层社区划分

### 优点

1. 时间复杂度低,仅为O(nlogn)

2. 可以处理任意大小和结构的网络

3. 能发现重叠和嵌套社区

4. 效果很好,广泛使用在实际任务中

### Louvain算法通过细粒度贪婪优化,高效地发现网络中的显著社区结构

## 61. CS224W: Machine Learning with Graphs | 2021 | Lecture 13.4 - Detecting Overlapping Communities

### 重叠社区检测难点

1. 节点可以属于多个社区

2. 社区边界不明显,结构复杂

### BigCLAM算法

1. 将节点表示为 centroid的混合

2. centroid代表一个潜在社区

3. 学习节点在每个centroid上的归一化分布

4. 较高概率对应的centroid视为其社区

### E-EIG算法

1. 将网络表示为点-社区整体矩阵

2. 最小化重构误差得到社区聚类

3. 迭代更新每个节点在各社区的权重

4. 权重高的社区作为节点社区

### 优点

1. 允许节点多社区分布

2. 学习重叠分布不需前设模型

3. 在真实网络上效果显著

### 有助理解节点多重身份和社区交集关系

## 62. CS224W: Machine Learning with Graphs | 2021 | Lecture 14.1 - Generative Models for Graphs

### 图生成模型任务

1. 学习图结构分布

2. 生成新的结构一致且看起来自然的图

### 早期模型局限

1. 随机生成,失去结构特征

2. 依赖于图引入不切实际假设

### 深度生成模型

1. VAE使用检验函数对图表示求期望

2. GAN对抗训练区分真假图

3. 组合额外的图结构约束

4. 区分生成连通图质量

### 应用

1. 新物质设计

2. 虚拟数据集合成

3. 网络规划

4. 异常图检测

### 深度学习捕捉图隐含结构,生成更符合现实分布的新图

## 63. CS224W: Machine Learning with Graphs | 2021 | Lecture 14.2 - Erdos Renyi Random Graphs

### 艾度斯-雷尼随机图模型

1. 输入节点数n和边形成概率p

2. 每对节点之间依概率p独立形成一条边

### 模型特点

1. 图形结构简单,边随即生成

2. 图中的结构特征由参数n和p决定

3. 随着节点增多,图性质收敛于特定值

4. 图结构难以复制现实情况

### 图生成步骤

1. 输入节点数n和概率p

2. 对每个节点对,以概率p连接边

3. 输出随机图

### 优点

1. 简单概率模型

2. 理解某些随机图基本规律

3. 作为基准模型与其他模型比对

### 艾度斯-雷尼模型描述随机图基本组成,但难以重现复杂网络真实结构特征

## 64. CS224W: Machine Learning with Graphs | 2021 | Lecture 14.3 - The Small World Model

### 小世界模型

1. 每个节点与其他短距离节点通过局部联系相连

2. 另外还包含少量长距离链接,可以将网络架构拉近

### 模型特点

1. 局部聚类高,但全局路径长度短

2. 描述现实网络中的六度分割理论

3. 兼具噪声图和规则图的优点

### 生成步骤

1. 建立节点对之间的随机联系网络

2. 重新连接部分边,建立一定数量的长距离边

3. 输出小世界网络

### 应用

1. 解释社交网络中的信息传播效率

2. 模拟生物神经网络或者电力网络结构

3. 生成符合现实特征的新网络

小世界模型通过局部聚类和少量长连接边很好描述现实网络的结构特征。

## 65. CS224W: Machine Learning with Graphs | 2021 | Lecture 14.4 - Kronecker Graph Model

### 克罗内克图模型

1. 使用矩阵乘法产生图结构

2. 输入为多个克罗内克矩阵,重复相乘生成大型网络

### 特点

1. 可以生成真实网络的度分布和聚类特征

2. 通过修改矩阵可以产生不同类型的网络

3. 与网络规模一并增长,具有良好可扩展性

### 生成步骤

1. 输入初始小矩阵

2. 重复矩阵乘法,每次增加节点规模

3. 最终输出大型克罗内克图

### 应用

1. 模拟社交网络、网站网络模拟增长

2. 生成具有代表性模拟网络理解网络性质

3. 进化网络学习网络变化趋势等

克罗内克图模型可以依据矩阵设计精细生成规模大的网络,并随着规模一块增长,具有很好的可扩展性。

## 66. CS224W: Machine Learning with Graphs | 2021 | Lecture 15.1 - Deep Generative Models for Graphs

### 深度生成式图模型

1. 使用深度学习方法生成和学习图表示

2. 主要包括图生成对抗网络和变分自编码器

### 图生成对抗网络

1. 包含生成器和判别器两个神经网络

2. 生成器生成图,判别器判断图的真伪

3. 两者通过对抗学习得到生成目标分布

### 变分自编码器

1. 通过编码-解码框架学习图空间

2. 编码器将图表示成浮点向量

3. 解码器将向量重构为图

4. 最小化重构误差训练模型

### 应用

1. 未标注图分类与图表示学习

2. 图生成与推荐系统中的新图发现

3. 多样性化生成新结构图

深度生成式图模型利用深度学习技术有效学习和生成图表示,在图处理任务中显示出广阔应用前景。

## 67. CS224W: Machine Learning with Graphs | 2021 | Lecture 15.2 - Graph RNN: Generating Realistic Graphs

### 图RNN模型

1. 使用递归神经网络顺序生成图结构

2. 每步选择添加新节点和连接的边

3. 采用图注意力机制选择结点

### 模型流程

1. 初始化的时候生成一个小子图

2. 递归生成新的节点和连接它的边

3. 循环直到完成设定的图规模

4. 输出最后生成的完整图

### 优点

1. 可以生成任意规模的图

2. 考虑节点间结构依赖关系

3. 生成的图连通性和特征好

4. 在多个实际数据集上效果显著

图RNN采用递归生成顺序,利用注意力机制有效地学习图特征,生成连贯自然的大规模图结构。

## 68. CS224W: Machine Learning with Graphs | 2021 | Lecture 15.3 - Scaling Up & Evaluating Graph Gen

### 大规模图生成面临挑战

1. 模型参数和计算资源限制

2. 生成过程难以平行化

3. 难以评估大规模图质量

### 减小模型规模

1. 参数共享

2. 简化网络结构

3. 减小图注意力区域

### 加快生成速度

1. 动态图计算

2. 利用图处理加速器

3. 模型剪枝

### 评估图质量

1. 统计检查功能分布

2. 平衡真假样本分类

3. 小规模图人工判断

4. 图驻留时间分析

深度学习图生成任务在大规模情况下需要模型设计和评估方法的创新,促进其在现实应用中的推广。

## 69. CS224W: Machine Learning with Graphs | 2021 | Lecture 15.4 - Applications of Deep Graph Generation

### 复杂图的生成可以通过顺序生成和深度学习成功实现

1. 每个步骤都是一个决定,根据隐藏状态的预测决定进行。

2. 隐藏状态可以是隐式的,如RNN;也可以是显式的,如GCPN通过神经网络计算中间图进行编码。

### GraphRNN可以实现以下任务

1. 模拟给定图集。

2. 生成符合特征分布的新图。

### GCPN可以实现优化图生成某目标的任务

1. 分子生成,产生优化特定属性的分子。

2. 任何图生成任务,如生成具有实际属性的地图、城市、道路网络等。

3. GCPN将生成视为强化学习问题,可以实现优化生成目标。

### GCPN在分子生成中的应用

1. 可以完成部分生成的分子结构或产生全新的分子。

2. 优化分子的溶解度、logP等属性。

3. 可以将不良的分子结构优化成理想属性的结构。

深度学习方法可以成功地实现复杂图的生成任务,并应用于分子设计等实际问题中。

## 70. CS224W: Machine Learning with Graphs | 2021 | Lecture 16.1 - Limitations of Graph Neural Networks

### 图神经网络的局限性

图神经网络会将节点嵌入到一个连续的向量空间中。单层图神经网络可以将节点从其一跳邻居中编码,多层图神经网络可以编码更远距离的结构信息。

理想情况下,如果两个节点的邻域结构不同,它们应该嵌入到嵌入空间的不同位置。但是,实际应用中会出现以下两类问题:

1. 位置敏感任务。两个节点可能在图中的位置不同,但其邻域结构相同。例如网格图中的两个边缘节点,图神经网络无法区分它们。

2. 表达能力不足。图神经网络的表达能力受Weisfeiler-Lehman核测试限制。例如在不同周期的环形结构中,节点无法区分。

为解决这些问题,需要构建更强大的图神经网络模型:

1. 位置感知图神经网络,考虑节点在图中的具体位置,而不仅仅是局部结构。

2. 标识感知图神经网络,使用更强大的消息传递机制,表达能力超出Weisfeiler-Lehman测试。

总的来说,图神经网络在一些特殊案例下的局限性主要来自于模型本身表达能力的不足,需要扩展模型来提升其区分不同结构的能力。

## 71. CS224W: Machine Learning with Graphs | 2021 | Lecture 16.2 - Position-Aware Graph Neural Networks

### 位置感知图神经网络

位置感知任务需要根据节点在图中的位置来区分标签,而结构感知任务仅依赖局部结构。

1. 定义锚节点或锚子集来描述节点在图中的位置。节点位置由它与随机选取的锚节点/子集的距离来表示。

2. 锚子集以指数扩增的大小选择,但数量以1/2衰减。可以更精细定位节点位置。

3. 节点特征增加位置编码后输入GNN,实现任务识别。但位置编码维度顺序可颠倒,无变化含义。

4. 通过设计位置不变集合算子,提升位置编码表达能力。例如聚合算子保持输入输出顺序不变。

5. 位置感知GNN通过利用锚节点标定位置信息,改善模型识别能力。节点可以识别局部结构和整体位置。

6. 锚节点和锚子集概念、位置编码方式为定位感知任务提供新思路,提升GNN在实际问题上的应用。

## 72. CS224W: Machine Learning with Graphs | 2021 | Lecture 16.3 - Identity-Aware Graph Neural Networks

### 标识感知图神经网络

1. 许多任务需要识别节点的内在特征,而非仅看结构或位置。

2. 分离GNN中的结构信息和标识信息。将节点特征分解为结构不变量部分和标识变量部分。

3. 标识变量代表节点固有属性,不依赖于结构或位置,如节点类型。结构变量代表节点相对其他节点的位置信息。

4. 将标识信息输入单独的MLP后,与结构信息进行拼接运算,得到最终表示。这能更好学习到节点内在属性。

5. 标识感知GNN通过分离标识特征,弥补GNN仅学习结构信息的限制。它可以表征节点配对关系、分类等任务。

6. 进一步的工作包括设计新的结构不变量算子,处理动态图形任务等。标识感知方法为开发更强大GNN奠定基础。

## 73. CS224W: Machine Learning with Graphs | 2021 | Lecture 16.4 - Robustness of Graph Neural Networks

### 图神经网络的鲁棒性

1. GNN在实践中面临的主要问题是对于输入的波动不敏感。

2. 对图形进行变换后,如边的增加或删除,节点的重新排序,GNN的预测结果可能会大幅改变。

3. 可以通过下列方法提高GNN的鲁棒性:

- 使用不变量网络结构,如结构感知块。

- 在训练时加入噪音,如随机删除部分边或重排序节点。

- 在测试时对榜单节点特征进行微小扰动,检测性能波动。

- 将结构信息和特征信息分解,在计算图表示时增加随机性。

4. 其他方法还包括增加Dropoute预防过拟合,设计新的组合函数增强模型稳健性等。

5. 提高GNN鲁棒性对于实际应用很重要。未来研究方向包括对动态图形和隐私保护的研究。

## 74. CS224W: Machine Learning with Graphs | 2021 | Lecture 17.1 - Scaling up Graph Neural Networks

### 大规模图神经网络

1. 当处理大规模图时,图神经网络会面临计算资源和内存限制。

2. 常用的优化策略包括:

- 分布式训练:将算子实现成支持分布式的形式,利用多GPU/机器加速训练。

- 随机梯度下降:采用小批量随机梯度下降,抽取子图并并行计算。

- 图上采样:在训练时动态采样图的子结构,减少计算量。

- 图特征抽象/负采样:压缩稀疏图,只考虑非零特征和重要边。

3. 针对极大规模动态图还可采用在线学习方法,避免将图全局加载入内存。

4. 未来可以探讨图神经网络加速器的设计,利用硬件提升训练速度。

5. 大规模图学习仍需在内存效率、通信成本等多个维度进行优化,以实现真正规模的应用。

## 75. CS224W: Machine Learning with Graphs | 2021 | Lecture 17.2 - GraphSAGE Neighbor Sampling

### GraphSAGE采样邻居技术

1. GraphSAGE框架支持大规模图学习。

2. 采用邻居采样来替代全图运算,以加速训练和减少内存消耗。

3. 对每个节点,随机采样相关部分邻居,忽略整体图结构。

4. 采样数量可控制模型复杂度。

5. 通过不同的聚合函数,例如平均、最大池化,来对邻居进行汇总。

6. 在测试时,仍可使用全图信息推理。

7. 采样带来近似计算,但在实验中效果不惜其速度提升明显。

8. 采样思想广泛应用于其他框架,如GraphSAGE升级版本FastGCN也采用。

9. 邻居采样大大减轻了大规模图学习任务的计算难题。

## 76. CS224W: Machine Learning with Graphs | 2021 | Lecture 17.3 - Cluster GCN: Scaling up GNNs

### 集群图卷积网络

1. 集群图卷积网络Cluster-GCN受GraphSAGE启发。

2. 将大规模图划分为若干重叠子图或者集群。

3. 每个集群使用独立的GCN计算其局部表示。

4. 最后通过集群间的连接,整合各个集群的表示。

5. 以分布式的方式并行处理每个集群子图。

6. 能够很好的支持大规模版本的半监督学习任务。

7. 与全局视角相比,在保持任务效果的同时可以显著提速训练。

8. 类似思路也应用在其他模型设计中,如ASSG来进行大规模特征学习。

9. 集群技术有效利用图结构局部性,对训练大规模图网络提供一种解决方案。

## 77. CS224W: Machine Learning with Graphs | 2021 | Lecture 17.4 - Scaling up by Simplifying GNNs

### 通过简化图神经网络实现大规模训练

1. 简化GNN结构可以减少参数数量,加速训练速度。

2. 通过参数共享机制,如每个节点共享同一MLPparm,有效降低模型复杂度。

3. 使用更浅层的CNN结构,如单层CNN,替代深层复杂网络。

4. 减少聚合操作规则,如只考虑一跳邻居聚合。

5. 分解复杂任务,将单独子任务训练简单模型实现。

6. 使用更高效基于张量的运算,避免循环操作降低速度。

7. 采样技术简化训练数据,只学习部分重要图结构信息。

8. 通过设计简化后的复合模型,融合上述各种优化技术。

9. 简化GNN可以有效解决大规模学习任务,在保持效果的同时提升训练速度。

## 78. CS224W: Machine Learning with Graphs | 2021 | Lecture 18 - GNNs in Computational Biology

### 图神经网络在计算生物学中的应用

1. 生物系统可以通过分子交互网络等方式表示为图结构。

2. GNN可用于蛋白质结构预测、基因调控网络分析等任务。

3. 通过学习蛋白质接触图,实现 folds 和 domains的预测。

4. 通过合成生物技术设计新的调控网络实现特定功能。

5. 根据蛋白质相互作用图实现功能注释。

6. 利用细胞信号通路图执行细胞分类和癌症诊断。

7. 根据基因调控网络分析病种,辨识重要基因。

8. 学习代谢网络识别新类药物目标,促进新药开发。

9. GNN在此领域显示出成效,未来通过大数据支撑更有据可循。

## 79. CS224W: Machine Learning with Graphs | 2021 | Lecture 19.1 - Pre-Training Graph Neural Networks

### 预训练图神经网络

1. 许多深度学习任务采用预训练-微调方法取得成功。

2. 针对图数据,可通过自超参数学习任务实现GNN预训练。

3. 一个自超参数任务是预测图中随机遮盖节点的特征。

4. 预训练模型学习整体图结构特征表示能力。

5. 微调阶段加入少量标签数据,fine-tune最后一层,适用于下游任务。

6. 预训练产生的embedding作为图表示,应用于不同领域下游任务。

7. 预训练可采取设计新的预定义任务,如遮盖边预测、基于结构的节点分类等。

8. 预训练涵盖更多公共图特征,微调后即可快速适应新任务。

9. 该方法可能成为GNN模型学习的标准流程,提高模型效果与适用性。

## 80. CS224W: Machine Learning with Graphs | 2021 | Lecture 19.2 - Hyperbolic Graph Embeddings

### 印度非欧clide空间中的图嵌入

1. 印度非欧clide空间是一种非平面性几何结构,可以很好地嵌入树形结构。

2. 在该空间中,点与点之间的距离随距离增加而缩小,且范围无限大。

3. 这样可以很好表示带有层次结构的图,如社交网络中的用户关系。

4. 对图进行商陋嵌入,将节点映射到实数型的非欧空间来表示结构信息。

5. 嵌入考虑节点之间的弧长以及多跳路径长度。

6. 相比欧式空间,非欧空间下的嵌入效果更佳,可以很好捕获结构特征。

7. 计算更高效率,且支持动态嵌入新节点。

8. 非欧空间嵌入为处理大规模网络提供一种新思路,同时也扩展了图学习的泛化能力。

## 81. CS224W: Machine Learning with Graphs | 2021 | Lecture 19.3 - Design Space of Graph Neural Networks

### 图神经网络设计空间

1. GNN的设计空间包括消息传递方式、聚合函数和组合顺序等多个方面。

2. 消息传递方式如节点间、边间、高阶等,代表信息交流规律。

3. 聚合函数如平均、最大池化决定邻居贡献的计算方式。

4. GNN层数和结构决定表示能力,深层Network学习高阶特征。

5. 图卷积机制如按结构展开CNN等不同实现思想。

6. 设计目标函数可以考虑图聚类、节点嵌入等不同需求。

7. 预训练任务和微调策略影响下游应用效果。

8. 未来工作可以系统分类GNN设计要素,探索各种组合效果。

9. 深入理解GNN设计原理有助于不断提升其表现能力。
