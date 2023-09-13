- Stanford University CS231n, Spring 2017
- https://www.youtube.com/playlist?list=PLC1qU-LWwrF64f4QKQT-Vg5Wr4qEE1Zxk

# 1. Lecture 1 | Introduction to Convolutional Neural Networks for Visual Recognition

- 5.43 亿年前，一些最早的动物进化出了原始的眼睛，使它们能够看到。这引发了“进化军备竞赛”，导致物种迅速分化，因为物种进化了眼睛和视力来生存。

- 在 1600 年代，发明了针孔相机或暗箱，这是现代相机的前身。它通过一个小孔收集光线并投射出一个倒置的图像。

- 在 1950 年代至 1960 年代，Hubel 和 Wiesel 在猫的脑中进行开创性的电生理实验，发现初级视觉皮层中存在对定向边缘有强烈响应的选择性神经元。这为早期视觉处理提供了见解。

- 在 1960 年代，一些最早的计算机视觉工作发表，包括 Larry Roberts 的《Blocks World》论文，该论文识别了简单的 3D 几何形状。麻省理工学院的“夏季视觉项目”旨在在一个夏天内建立一个视觉系统的重要部分。

- 大卫·马尔在 1970 年代出版了一本有影响力​​的书，提出了一种计算机视觉方法，该方法涉及“原始草图”（早期边缘检测），“2.5D 草图”（表面和深度表示）以及从原语和部分中对 3D 结构进行分层表示。

- 在同一时间，斯坦福大学和 SRI 的研究人员提出了将对象表示为广义圆柱体或关键部分及其空间关系的图像结构，为超出简单块的对象识别提供了早期方法。

## 课程概览

- CS231n 专注于神经网络和卷积神经网络 (CNN) 用于计算机视觉任务。

- 它假定来自 CS131（计算机视觉入门）的先前知识，但专注于深度学习方法，而不是 CS231a 中涵盖的计算机视觉的全部范围。

- 该课程由斯坦福视觉实验室的博士生授课，重点关注机器学习和计算机科学视角的视觉。

- 解决的关键应用包括使用 CNN 进行图像分类、对象检测、分割和其他视觉识别任务。历史和基础为新的发展提供了背景。

希望这对你有帮助。 Let me know if you have any other questions.
# Lecture 2 | Image Classification

## Piazza和分配1
- Piazza是主要的沟通平台,大家应该多去看,email可能会错失
- 分配1会晚些时候放出,可以先看去年的同一分配以提前学习
- 分配会实现KNN分类器、SVM和softmax等线性分类器以及简单神经网络

## 图像分类任务
- 图像分类是计算机视觉核心任务
- 给系统一张图片,从 predetermined 类别中预测标签
- 但计算机仅看到RGB值的网格,难识别语义层面的类别概念

## 分类难点
- 视角:相同物体不同视角下像素全不同
- 照明:不同光照下颜色不同难识别
- 变形:动物的姿态躯体不同
- 遮挡:仅显示部分区域
- 背景干扰:前景与背景相似
- 分类内部差异大:同一物体外形尺寸颜色不同

## 学习算法思路
- 手写规则不灵活,难应用于其他物体
- 数ataka驱动方法学习特征代表语义概念
- 算法从大量数据中学习抽象高级特征,而非手写规则

## KNN算法
- KNN算法将测试样本与训练样本进行比对,选择距离最近的K个点进行投票,判断其分类

## 线性分类器
- SVM找到最大间隔超平面将不同分类样本区分开来
- Softmax输出每个类别的可能性,选择可能性最大的类别

## 神经网络
- 多层神经网络可以学习高级非线性特征
# 3. Lecture 3 | Loss Functions and Optimization

## 行政通知

- 第一个作业已发布,截止日期更改为4月20日晚11点59分。

- Piazza上有一些课程项目示例。如果希望参与,可以直接联系项目负责人。

- 教学助理的办公时间已发布在课程网站日历中。

- 每个学生将获得额外100美元的Google云计算资源,兑换详情后 Period将在Piazza上公布。

## 上课内容回顾

- 最后一次讲到线性分类器概念,但没有讨论如何选择W矩阵。

- 图片分类任务使用CIFAR-10数据集,包含10类图形。

- 线性分类器从每张图片中提取特征向量,通过W矩阵计算每个类别的分数。W每一行对应一个类别的模板。

- 线性分类器也可以解释为在高维特征空间中学习线性决策边界。

## 损失函数

- 损失函数可以量化给定W值的好坏,为后续优化奠定基础。

- 训练数据包含输入x和目标y。预测函数f根据x和W生成预测ŷ。

- 损失函数Li检查ŷ和y的一致性,总损失L为所有样例losses平均值。

## 多类SVM损失函数

- 对每个样例,只对真实类别y_i外的其它类别求和:

  - 如果预测正确类别分数大于错误类别+1,Loss=0

  - 否则Loss为错误类别分数-正确类别分数+1

- 这样可以使正确类别分数足够高于错误类别, Loss才会变为0。

- 这类Loss函数形状称为“铰链损失”。随预测正确分数提高,Loss会线性下降至0。
# 4. Lecture 4 | Introduction to Neural Networks

## 基本介绍

这节课主讲人是Serena Yeung,她介绍了自己是Fei-Fei小组的PhD学生。这节课将会介绍如何计算梯度,以及神经网络基本概念。

## 作业安排

- 第一个作业的deadline为4月20日晚11点59分。
- Piazza网站上有TA的专长领域,如果有具体项目问题可以寻找相关TA。
- 所有学生将获得100美元的Google Cloud绩分,本周内将通过邮件发送给学生。

## 分类器定义回顾

之前讨论过如何定义分类器函数f(x), 函数的权重参数为W。f(x)会将数据x作为输入,输出每个分类的分数向量。同时可以定义损失函数,比如SVM损失函数来衡量预测结果的好坏。 将损失函数和正则化项合并为总体损失L。

## 梯度下降

上一节介绍了使用优化方法来通过迭代地减小损失函数L来找到最佳的W值。每一步都会按照梯度下降的方向,-∇L的负梯度进行移动,逐渐走向损失最低点。

## 计算梯度

可以使用数值近似或解析梯度来计算∇L。数值近似简单但效率低,解析梯度高效但需要复杂的微分。实际应使用解析梯度来计算,并用数值梯度验证是否正确。

##  computational graphs

可以使用计算图来表示任意函数。节点代表计算步骤,边代表变量流向。这样可以使用后向传播算法计算任意复杂函数对所有变量的梯度。

## 后向传播原理

以一个简单函数f(x,y,z)=x+y*z为例,使用计算图表示函数,然后顺序传播计算其值。然后递归应用链式法则从后向前计算每个变量对函数输出的梯度。

## 总结

后向传播算法利用每个节点仅知晓其本地信息,如输入,输出和本地梯度,然后使用链式法则将本地梯度逐层向前传播,最终计算出任意变量对损失函数梯度。这种方法使得只需要处理简单节点的本地梯度,而不必为整体函数直接求导。
# 5. Lecture 5 | Convolutional Neural Networks

## 1957年 弗兰克·罗森布拉特提出感知机

感知机是一个算法,它使用W乘以X加上偏置来计算出分类分数。但是这里的输出只能是1或0。此外还有一个更新规则来更新权重W。

## 1960年 Widrow和Hoff提出Adaline和Madaline

这是第一个将线性层叠加成多层感知器网络的模型。但是还没有反向传播等训练原理。

## 1986年 Rumelhart 提出反向传播

首次正式提出用链式法则及更新规则来训练这类网络。

## 2000年以后 神经网络得以重现

2006年 Hinton和Salakhutdinov的工作展示了如何训练深神经网络。但需要复杂的初始化。

## 2012年 语音识别和图像分类取得突破

Hinton实验室在语音识别和图像分类任务上取得重大突破。特别是Krizhevsky提出的AlexNet极大提升了ImageNet分类效果。

## 1950年代 Hubel和Wiesel对猫视觉皮层神经元的研究

发现视觉皮层中的神经元具有嵌入式性和分层组织结构。有简单细胞接受特定边缘或形状,复杂细胞对移动和位置不敏感。

## 1980年 Fukushima提出模仿此结构的Neocognitron

第一个将简单和复杂细胞组织成替代层的网络模型。

## 1998年 Yann LeCun首次将卷积神经网络应用到手写数字识别

在美国邮政服务中广泛使用。但能力有限仅能识别简单数字。

## 2012年 Alex Krizhevsky的AlexNet为卷积神经网络奠定现代标准

该网络利用大量数据和GPU进行高效训练,在ImageNet上取得突破性成果。

## 卷积神经网络今天广泛应用于各种领域

如图像分类、检测、分割等基础任务,以及生成任务如图像字幕生成等。它还在医学、游戏、自然语言处理中发挥重要作用。
# Lecture 6 | Training Neural Networks I

## 激活函数

### Sigmoid

Sigmoid函数是σ(x)=1/(1+e^-x),它将每个输入压缩到范围[0,1]之间。

 Sigmoid存在几个问题:

1. 当输入为非常大正数或负数时,梯度近似于0,会“杀死”梯度传播。

2. Sigmoid输出不是零中心的,所有输入都为正数时,权重的梯度都只能为同号,效率不高。

3. Sigmoid包含指数函数计算,计算成本较高。

### Tanh

Tanh函数是tanh(x),它将每个输入压缩到范围[-1,1]之间。解决了Sigmoid的第二个问题,但仍然存在第一个问题,即当激活近乎饱和时,梯度近似为0。

### ReLU

ReLU激活函数是max(0,x)。它不会“杀死”梯度,并且计算成本很低。但它可能导致“死亡单元”问题,即当x≤0时梯度为0。

## 网络初始化

需要初始化各层的权重,一般采用小随机值初始化。常用的初始化方法包括满足高斯分布或 uniforms 分布等。

## 训练网络

使用梯度下降法训练网络参数,迭代的步骤包括:

1. 采样一个随机批次数据
2. 前向传播计算损失
3. 反向传播计算梯度
4. 使用梯度下降更新网络参数

主要优化算法有 Mini-batch SGD,Momentum, RMSProp 等。

## 其他技巧

- 数据预处理:标准化,归一化等。

- 批正规化:在每层网络中添加一个BN层,可以加速收敛。

- 噪声增加:加入随机噪声可以防止过拟合。

- 学习率下降:随着迭代次数增加逐步减少学习率。

- 更新规则:Momentum,Adam等相比SGD收敛速度更快。

- 超参数调优:学习率、批大小、损失函数、优化器等参数对结果影响很大。
# Lecture 7 | Training Neural Networks II

## 激活函数
上次讲到了各种激活函数及其属性,sigmoid常用于10年前训练神经网络,但在梯度消失问题。tanh也存在类似问题,一般ReLu作为默认选择。

## 权值初始化
如果初始化太小,抵消效应导致激活值随网络向前传播而减弱。如果太大,会产生爆炸。Xavier和MSRA初始化可保持好的分布。随网络深度增加,这一点变得越来越重要。

## 数据预处理
卷积神经网络通常使用零均值归一化预处理输入,目的是使损失函数对参数小偏差不敏感,易于优化。batch normalization层也采用这个思路,利用mini batch中的统计信息实时归一化中间激活值。

## 监督训练过程
应监测训练loss和验证精度曲线以避免过拟合。超参数搜索初步应采用宽范围粗略搜索定位高效区域,然后逐步收缩范围精细优化。学习率通常最重要,其次正则化等。

## 其他细节
GPU实例费用高,只在最后一个问题需要时使用。实例停止后才真正停止计费。RAM8-16G及2-4CPU应够本课程需求。特征工程、算法、学习率衰减、随机搜索、批处理规模等也关系学习效果。
# Lecture 8 | Deep Learning Software

## 课程信息

- 作者提前提醒了这个项目和assignment的事项:

1. 项目提案截止日期是周二。

2. 正在批改第一次作业,结果会及时告知学生。

3. 第二次作业截止日期是下周四。在做作业时要关闭没在使用的Google Cloud实例以节省开销。

4. 第二次作业实质上只需要在最后一个notebook中使用GPU,前几个notebook仅需要Python和NumPy就可以了。

5. 中期考试日期是5月9日周二,将以理论问题为主,检查学生对已学知识的理解。

## 计算机架构

- CPU是中央处理器,芯片体积较小,一般有4-10个内核。

- GPU是图形处理器,体积大消耗电量大,一般有上千个内核。

- CPU适用于通用计算,每个内核独立性强,每个指令量大;GPU适用于高度并行计算,每个内核依赖性强,指令量小。

- CPU使用系统内存,GPU内置较大内存以提高性能。

- 矩阵乘法及卷积运算都可以充分利用GPU的并行计算能力。

## 深度学习软件

主要深度学习框架包括:

- TensorFlow:谷歌开源的框架,支持CPU和GPU,性能好但代码复杂度高。

- PyTorch:Facebook开源的动态图框架,开发效率高但性能略差。

- Keras:基于TensorFlow或Theano的高层API,代码简洁但诊断难。

- MXNet:亚马逊开源的张量计算框架,支持多语言。

选择框架需权衡开发效率、性能、可扩展性等因素。深度学习任务越来越依赖软硬件整合。
# 9. Lecture 9 | CNN Architectures

## AlexNet

AlexNet是第一个大型卷积神经网络,能成功地完成ImageNet分类任务。

AlexNet的输入图像大小为227×227×3。第一个卷积层采用11×11滤波器,96个滤波器,步幅为4。输出大小为55×55×96。这个层次的参数数目为35k。

第二个层次是池化层,采用3×3滤波器,步幅为2。输出大小为27×27×96。池化层没有学习参数。

AlexNet共有5个卷积层,3个池化层,用ReLU作为激活函数,采用dropout技术。批规模为128。使用SGD加Momentum进行训练,初步学习率为1e-2,验证准确率出现平台时缩小10倍。进行数据增强处理包括翻转,抖动,裁剪和颜色归一化等。

AlexNet的最后几层为全连接层,其中4096维和4096维。最终 softmax 层输出1000维,对应ImageNet分类任务的类别数。AlexNet在2012年ImageNet竞赛中首次使用卷积网络,大幅降低了错误率,开启了卷积网络研究的高潮。

## ZFNet

2013年ImageNet竞赛获胜网络为ZFNet,即Zeller Fergus Net。ZFNet相比AlexNet仅优化了网络超参数,层次结构和数量与AlexNet相同。

## VGGNet

VGGNet采用相对较小的卷积过滤器3×3,深层次的网络结构,推广使用了池化层。VGG16和VGG19分别由16层和19层卷积层组成。特征图大小经过 pooling 层以后节省计算复杂度。第一层使用1×1步长的卷积,后续使用2×2步长最大池化层。最后使用三个全连接层,每个有4096个节点,最后使用 softmax 输出交叉熵作为目标函数。VGGNet在2014年ILSVRC比赛中表现出色。

## GoogleNet

GoogleNet设计上采用了卷积层与池化层交替使用, relu作为激活函数。最大新意在于使用了Inception模块,通过1×1、3×3、5×5等不同尺寸的卷积filter并行运行,之后结果 concat 拼接,同时减少参数数量。Inception模块使网络更深更宽,GoogleNet在2014年ILSVRC比赛中首次使用Inception架构,取得ImageNet分类任务独一无二的成绩。

## ResNet

ResNet采用残差结构,通过添加跳跃连接解决深层神经网络学习钝化问题。它利用前向传播获取特征映射,同时让这些特征映射可以直接作为后续层的输入部分,或者通过元素相加融合得到最终结果。ResNet可以很深,如ResNet-152拥有152层,在2015年ILSVRC比赛中取得当时最好的分类结果。

## 其他网络

此外,还有一些其它经典或研究型网络架构,比如CNN-SVM、Network In Network、DenseNet等。
# 10. Lecture 10 | Recurrent Neural Networks

## 一般前馈网络和循环神经网络的比较

- 之前我们看到的网络结构,如AlexNet、VGG等,都是一个固定输入,输出一个固定结果,称为前馈网络
- 循环神经网络可以处理输入输出都是变长序列的数据
- 一对多模型:输入固定,输出变长,如图像 caption 生成
- 多对一模型:输入变长,输出固定,如文本情感分类
- 多对多模型:输入输出都可能变长,如机器翻译

## 循环神经网络的常见应用场景

- 自然语言处理任务,如机器翻译、情感分析、语音识别等
- 计算机视觉任务,如视频行为识别
- 时间序列预测,如销量预测

## Resnet神经网络的设计思想

ResNet网络采用残差结构,每个结块输出加上输入,有以下设计思想:

1. 如果结块参数全部为0,输出就是输入,实现恒等函数
2. L2正则化驱动参数趋于0,实现选择性使用结块
3. 通过残差连接增强梯度下传,跳过多个层传递梯度

## 残差连接对梯度传播的影响

残差连接在反向传播中,可以将梯度分成两条路径:

1. 一条通过卷积块前向
2. 一条通过残差连接直接传播

通过增加梯度传播路径,有效解决深网络训练难问题。

## CNN网络的发展历程

- 2012年AlexNet触发深度学习兴起
- 2014年VGG和GoogLeNet通过深层网络提升表现
- 2015年ResNet通过残差结构训练更深网络
- 近年DenseNet、FractalNet等提出更多梯度分流设计

## 实验性练习:训练游戏

为给学生更多实战机会,课程设计了一个在线训练游戏。学生可以在其中与不同数据集和网络结构进行交互式训练,体验调参的过程和感受。
# Lecture 11 | Detection and Segmentation

## 语义分割
语义分割任务是将图像每一个像素点分类到某一类别中。例如输入一张带有猫的照片,输出每个像素点所属的种类标签,比如猫、草地、天空等。

语义分割与实例分割的区别在于,语义分割无法区分图像中相同类别的不同个体。例如如果图片中有两只站在一起的牛,语义分割输出的标签中两只牛看起来会融合在一起,无法识别出二者。

## 分类与定位
一种实现语义分割的方法是采用划窗分类法。首先将输入图像切分成很多很小的局部窗格,然后对每个窗格提取特征并进行分类,预测其中心点像素的种类标签。这种方法可以利用以前学习到的分类模型,但预测效果可能不佳。

## 目标检测
目标检测任务是识别图像中的目标对象并绘制边界框。例如输入图片可能包含人、车、图书等多种目标,输出需要给每个目标加上框并标注其种类。

常用的目标检测模型有两步:第一步通过主干网络提取特征图,第二步进行区域提升网络预测各个预测框和其对应的类别分数。区域提升网络同时会学习默认框的几何形状和位置信息。

## 实例分割
实例分割与语义分割的区别在于,实例分割可以识别图像中不同个体。例如两只站在一起的牛,实例分割可以给每只牛都画一个边框并预测其种类。

实现实例分割的一种方法是利用目标检测网络首先检测每个实例,然后在每个检测框内使用像素级语义分割来完成实例分割任务。

## 总结
本节介绍了几类常见的计算机视觉任务,如语义分割、目标检测、实例分割等,以及一些任务之间的关系。详细阐释了这些任务的差异性以及一些基本实现方法。
# 12. Lecture 12 | Visualizing and Understanding

## 首层卷积滤波器
- 首层卷积滤波器的权值可以直接表示为小图片进行可视化,可以看出滤波器主要捕捉图像的方向边缘特征
- AlexNet的首层有64个11x11x3的滤波器
- 很多网络的首层滤波器都可以捕捉方向边缘和对立颜色

## 中间层卷积滤波器
- 中间层卷积滤波器输入通道更多,直接可视化权值已经没有意义
- 可以将权值展开成多层灰度图片来看,但难得知它们在匹配什么特征
- 因为中间层filters与第一层输出相连,权值反应的是第一层活动模式与中间层激活的关系

## 常见的卷积神经网络任务
- 语义分割:给每个像素添加类别标签,但不区分对象实例
- 分类定位:额外给出边框定位每个类别对象
- 目标检测:给所有感兴趣类别的每个实例都画个框
- 实例分割:同时进行目标检测和语义分割,给每个实例像素添加标签

## 视觉化技巧
- 可视化首层滤波器权值来看它捕捉什么特征
- Activiation Maximization:通过反向传播找到最大激活某块滤波器的输入特征图
- 类激活测图:看不同类别的特征在图片哪些区域更突出
- 梯度加权类活性图:利用梯度高的区域更容易决定类别

## 总结
本节介绍了如何利用不同技巧来观察和理解卷积神经网络内部事件,以获得网络学习到的视觉表征。
# Lecture 13 | Generative Models

## 今日内容概述

今天我们将讨论生成模型,这是无监督学习中的一种。首先给出一些管理细节。然后会简要介绍无监督学习和它与监督学习的区别。

主要讨论三种常见的生成模型:

1. PixelRNNs 和 PixelCNNs。这是显式概率密度模型。

2. 变分自动编码器。这也是显式概率密度模型,但使用近似概率密度。

3. 生成对抗网络(GAN)。这是一种隐式概率密度估计方法。

## 无监督学习与监督学习的区别

监督学习使用带标签数据来学习从数据X到标签Y的映射函数。

而无监督学习并不使用标签,而是试图学习数据的隐藏结构,如群集、主成分分析或概率密度估计。

## 生成模型

生成模型的目标是,给定训练数据,学习生成来自相同分布的新样本。这可以解决概率密度估计问题。

生成模型可以进行显式或隐式概率密度估计。

生成模型的应用包括生成新样本、超分辨率、颜色填充、时序数据模拟等。学习生成模型也可以推断潜在表示特征。

## PixelRNNs 和 PixelCNNs

PixelRNNs 和 PixelCNNs 是显式概率密度模型。它们使用随机场来建模图片中的每一个像素的条件概率分布。

PixelRNN 使用RNN顺序生成图片像素,但速度较慢。PixelCNN改用CNN并行生成,运行速度更快。

## 变分自动编码器

VAE 是另一种显式概率密度模型。它使用变分推断来近似真实分布,并最大化图片的生成概率。

## 生成对抗网络

GAN 属于隐式概率密度估计模型。它训练生成器来尽可能欺骗鉴别器,使生成样本看起来像真实样本。GAN 生成的是高质量新样本但没有明确定义概率分布。
# 14. 深度强化学习

## 强化学习问题

强化学习中的主要对象包括:

- 代理(Agent): 可以在环境中进行行动的主体
- 环境(Environment): 向代理提供状态, 根据代理的行动给予奖励并产生新的状态
- 状态(State): 环境当前的描述信息
- 行动(Action): 代理可以采取的行为
- 奖励(Reward): 环境根据代理的行动给予的奖励信号

优化目标是最大化总奖励。

具体实例包括:

- 运动车任务:控制小车平衡杆的位置
- 机器人运动:控制机器人前进的姿态与步伐
- 游戏:用深度学习控制游戏角色获得高分

##马尔科夫决策过程

马尔科夫决策过程(MDP)是强化学习问题的数学描述,其主要组成包括:

- S:所有可能状态集合
- A:所有可能动作集合
- R:根据状态动作对 Reward 的定义
- P:状态转移概率分布
- γ:折扣率

MDP描述了一个循环过程:环境提供状态→代理选择行为→环境给奖励与下个状态

## 策略与价值函数

策略π是行为决策规则,其定义域为状态空间,目标为求解最优策略π*。

价值函数定义:

- Vπ(s): 从状态s起 following π后累计奖励的期望值
- Qπ(s,a):从状态s采取动作a后 following π累计奖励的期望值

π*满足贝尔曼方程:

Q*(s,a) = E[r + γmaxQ*(s', a')]

## 算法

常见算法有:

- Q学习:通过试探来逼近Q*
- 策略梯度:直接针对π进行优化来搜索π*
# Lecture 15 | Efficient Methods and Hardware for Deep Learning

### 算法改进推理效率

#### 剪枝
可以通过移除一些权值来减小模型尺寸,但不降低准确率。LeCun于1989年首次提出这个剪枝方法。通过训练-剪枝-重训练的循环可以移除90%的参数而不受影响。

#### 权值共享
将相似的权值聚类到一起,用一个聚类中心来代表它们,这样可以节省存储每个权值所需要的位宽。

#### 量化
使用8位整数或者16位浮点数来替代32位浮点数来表示权值,可以大幅减少计算和存储开销。

#### 分块计算
将大模型分成多个更小的子网络进行推理,并行计算来提高速度。

#### 网络压缩
用小尺寸的网络来fit大尺寸网络的功能,被称为智能剪枝,可大幅减小模型。

#### 轻量级模型
直接设计小模型来完成特定任务,比如MobileNet用于移动设备。

### 硬件改进推理效率

#### CPU 和 GPU
CPU适合低并行少数据的情况,GPU适合大规模并行大数据量的情况。

#### FPGA
可编程逻辑门阵列,具有自定义能力但性能比不上ASIC。

#### ASIC
专门为深度学习设计的加速器芯片,如谷歌的TPU。TPU可以运行量化网络 dozens或百倍faster than GPU。

### 算法改进训练效率

#### 混合精度训练
使用不同bitwidths来表示变量,如权值使用高精度しながら梯度使用低精度。

#### 数据并行
将一个大批次的数据分割到多个GPU卡上进行训练。

#### 模型并行
将一个大模型分割成子网络并行运行来加速训练。

#### 优化算法
使用更高效的优化算法,如动量,Adagrad等来加速收敛。

### 硬件改进训练效率

#### GPU
可以添加更多GPU来提高训练速度。Volta架构支持混合精度训练。

#### 定制化硬件
如Google的云 TPU v2,专为深度学习训练量身定制,每日训练cost更低。

#### FPGA
可编程能力可以加速定制训练算法。

#### 多芯片组模块
将多个硬件模块集成来实现大规模分布式训练。
# 16. Lecture 16 | Adversarial Examples and Adversarial Training
## 什么是对抗例子
对抗例子是经过精心设计计算出来的例子会被模型误分类。大多数情况下,对人来说对抗例子与原始例子无法区分。
## 对抗例子如何产生
通过优化输入例子,找到使模型分类错误的最小修改。如将熊猫图片通过极小量修改转变为长臂猿的分类。优化搜索的目的是最大限度地提高分类错误概率。
## 对抗例子对深度学习的威胁
对抗例子能成功使用极小修改欺骗深度学习模型的分类,对安全性有重大威胁。 It可以用来制造机器学习系统的安全漏洞。
## 防御对抗例子的方法
目前主要防御方法在于提升模型的鲁棒性,增加对噪声的容错能力。但总体来说,防御对抗例子仍是一个开放性研究问题。
## 使用对抗训练来提升模型
可以使用对抗训练的方法来提升模型性能,即在训练过程中加入对抗扰动来模拟真实攻击,使模型学习到更强大的特征表示能力。
## 对抗例子产生的本质原因
对抗例子之所以容易产生,与模型本身的线性性质有关。即在输入空间附近,模型输出对输入的微小变化很敏感。而对抗扰动正是利用这个特性进行的最小修改攻击。
## 线性模型也很容易受到对抗攻击
通过优化输入例子,可以将MNIST数字很小改动地一步步导向不同分类,说明即使是简单线性模型也很难抵御对抗攻击。
## 总结
对抗例子是一个极其重要的安全问题。深入研究它的产生机理对提升模型鲁棒性和防御对抗攻击都很重要。同时,使用对抗训练也可以有效提升模型性能。