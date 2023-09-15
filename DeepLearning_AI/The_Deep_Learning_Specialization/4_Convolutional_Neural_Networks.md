# Convolutional Neural Networks

 (Course 4 of the Deep Learning Specialization)

> <https://www.youtube.com/playlist?list=PLkDaE6sCZn6Gl29AoE31iwdVwSG-KnDzF>

## 1. C4W1L01 Computer Vision

### 计算机视觉问题

常见的计算机视觉问题包括:

#### 图像分类

输入如64x64像素的图像,输出图像所属类别。

#### 目标检测

输入图像,输出图像中其他目标(如汽车)的位置。

#### 样式迁移

输入内容图像和样式图像(如毕加索画作),输出将内容图像用样式图像样式涂抹的结果图像。

### 卷积神经网络

使用卷积神经网络可以处理大图数据:

- 大图如1000x1000输入尺寸,像素点会达到100w,输入维度极高。

- 常见网络第一隐藏层使用1000个神经元,丰度连接矩阵大小会达到10亿,参数量巨大。

- 卷积操作可以降低参数量,实现大量参数共享。

### 卷积操作

卷积操作用小过滤器在输入上滑动,提取局部特征。

- 过滤器权值共享,参数被重用。

- 滑动过滤器可以捕获不同位置特征。

- 大大减少参数数量,让网络可在大数据上训练。

下一步将用H式子检测例子展示卷积操作细节。

## 2. C4W1L02 Edge Detection Examples

### 卷积操作

卷积操作是卷积神经网络的基本构建模块。

它通过小滤波器在输入图像上滑动,提取局部特征。

### 边缘检测示例

可以使用卷积操作检测图像中的边缘,比如垂直边缘和水平边缘。

### 卷积计算

将滤波器(大小一般为3×3)和图像区域做元素相乘,相加计算输出。

输出图像可以看作是一个新的具有更低分辨率的图像。

### 垂直边缘检测滤波器

使用[1,1,1;0,0,0;-1,-1,-1]滤波器可以检测垂直边缘。

通过简单图像示例说明,当图像中存在从亮到暗的垂直变化时,会在这一位置检测到强烈响应。

### 水平边缘检测滤波器

使用不同形状的滤波器可以检测水平或其它方向的边缘。

卷积神经网络中的边缘检测层可以识别图像中的形状、轮廓等高级特征。

## 3. C4W1L03 More Edge Detection

## 正负边缘

图像中的边缘根据亮度变化的方向,可以分为正边缘(从暗到亮)和负边缘(从亮到暗)。

## 其他边缘检测滤波器

除了垂直边缘检测滤波器外,也可以定义水平边缘检测滤波器和索贝滤波器等其他滤波器来检测不同方向或类型的边缘。

## 学习滤波器参数

深度学习方法不需要人工设计滤波器,可以把滤波器视为参数,利用反向传播算法来学习合适的参数,使得网络能更好地检测边缘。

这样学习得到的过滤器不仅可以检测垂直和水平边缘,也可以检测任意角度的边缘。网络也可能学习到我们目前还不了解的新特征。

## 填充与步幅

卷积操作中的填充和步幅也会影响结果。后面的视频将介绍这两个概念并说明它们在卷积神经网络中的重要性。

## 4. C4W1L04 Padding

### 卷积后的输出大小

如果对n×n输入图像使用F×F滤波核进行卷积,输出尺寸为n-F+1×n-F+1。

### 填充的目的

1. 输入图像随着卷积层级增多而不断缩小。
2. 边界像素参与次数较少,信息丢失较多。

### 有效卷积和同型卷积

有效卷积不使用填充,输出大小为n-F+1×n-F+1。
同型卷充使用填充,输出大小保持与输入相同n×n。

### 计算填充大小

同型卷积的填充大小P=(F-1)/2,使得n+2P-F+1=n。
例如,F=3时P=1,F=5时P=2。

### 填充方式

通常均匀地在四周添加同样大小的零填充边框。填充大小P需为整数。

### 填充 bringing的作用

1. 保持卷积层级输出尺寸不变
2. 减少边界像素参与次数的差异

## 5. C4W1L05 Strided Convolutions

### 卷积步幅

卷积步幅(stride)定义了滤波器参与卷积时在输入像素空间中的移动步长。

### 例子

举例说明使用步幅2的卷积操作,将7×7输入通过3×3滤波器进行卷积,得到3×3输出。

### 输入输出尺寸公式

若输入尺寸为N×N,滤波器尺寸F×F,填充大小P,步幅s,则输出尺寸为:

(N+2P-F)/s × (N+2P-F)/s

若结果不是整数,取下整。

### 卷积与相关

计算过程中通常不进行滤波器镜像翻转,这实际上等价于计算相关而不是卷积。但在深度学习中仍称其为卷积。

### 总结

通过带步幅的卷积操作,可以控制输出的采样率,从而获得多种输出尺寸。这为神经网络设计提供更大灵活性。

## 6. C4W1L06 Convolutions Over Volumes

### 三维卷积

将卷积操作扩展到三维(Volumes)数据上,即输入和滤波器均为多通道三维张量。

### RGB图像示例

使用3×3×3滤波器对6×6×3的RGB图像进行卷积,输出尺寸为4×4×1。

### 输入和滤波器属性

输入shape为(H,W,C),滤波器shape为(F,F,C);其中C代表通道数,输入和滤波器C通道数必须匹配。

### 卷积操作方式

将滤波器置于输入各个位置,依次计算元素乘积后相加,得到输出中的每个元素值。

### 边缘检测滤波器实例

通过设定滤波器参数检测红/绿/蓝通道或所有通道中的水平/垂直边缘等特征。

### 使用多个滤波器

同时应用多个滤波器,得到多个输出特征图,相应位置值堆叠成输出feature map的深度方向。

### 输入输出尺寸公式

输入(H,W,C),滤波器(F,F,C),输出(H-F+1,W-F+1,M);其中M为滤波器数量。

## 7. C4W1L07 One Layer of a Convolutional Net

### 卷积神经网络的一层

卷积神经网络的一层可以用下面的方式描述:

- L表示卷积层
- F<sup>[L]</sup>表示该层卷积核的大小,如3x3
- P<sup>[L]</sup>表示该层的填充方式,如有效卷积或同样卷积
- S<sup>[L]</sup>表示该层的步幅
- 输入数据来自上一层L-1的输出,大小为H<sup>L-1</sup> x W<sup>L-1</sup> x C<sup>L-1</sup>
- 卷积层的输出大小为H<sup>L</sup> x W<sup>L</sup> x C<sup>L</sup>,其中:
  - H<sup>L</sup>= (H<sup>L-1</sup> + 2P<sup>[L]</sup> - F<sup>[L]</sup>) / S<sup>[L]</sup>
  - W<sup>L</sup>同理计算
  - C<sup>L</sup>等于该层卷积核的数量
- 每个卷积核的大小为F<sup>[L]</sup> x F<sup>[L]</sup> x C<sup>L-1</sup>
- 卷积核权重W的维度为F<sup>[L]</sup> x F<sup>[L]</sup> x C<sup>L-1</sup> x C<sup>[L]</sup>  
- 偏差b的维度为1 x 1 x 1 x C<sup>[L]</sup>
- 将卷积结果、bias相加后通过非线性激活函数得到输出A<sup>L</sup>

### 卷积层与全连接层的对应关系

卷积层可以看作是全连接层的一种特殊情况:

- 输入数据X相当于全连接层的输入A<sup>0</sup>
- 卷积核W相当于全连接层的权重矩阵W
- 卷积操作相当于W与A<sup>0</sup>的点乘
- 加偏差b相当于添加偏置项
- 非线性激活相当于得到输出A<sup>1</sup>

两者的主要区别在于:

- 卷积层的参数 sharing,同一个卷积核可以重复使用
- 卷积层可以处理多维输入数据

### 卷积层的参数数量

- 每个卷积核包含F<sup>[L]</sup>xF<sup>[L]</sup>xC<sup>L-1</sup>个权重参数
- 每个卷积核包含1个偏差参数
- 总的参数数为卷积核个数C<sup>[L]</sup>乘上每个卷积核的参数数(F<sup>[L]</sup>xF<sup>[L]</sup>xC<sup>L-1</sup>+1)

## 8. C4W1L08 Simple Convolutional Network Example

在前一视频中,你了解了单个卷积层在卷积神经网络中的构建。现在,通过一个实际例子了解深度卷积神经网络。

例子使用一个39x39x3的小图像作为输入。第一层使用3x3的滤波器,10个滤波器,输出尺寸为37x37x10。

第二层使用5x5滤波器,步幅为2,0填充,20个滤波器,输出尺寸为17x17x20。

第三层仍然使用5x5滤波器,步幅为2,40个滤波器,输出尺寸为7x7x40。

最后将7x7x40的特征图展平成一个长度为1960的向量,作为logistic回归或softmax分类的输入。

通过这个例子,你了解了卷积神经网络各层对应术语的表达方法,如滤波器大小、步幅、填充方式、输出尺寸等。通常情况下,深度增加时图像高宽会越来越小,通道数会越来越大。

卷积神经网络主要包含卷积层、池化层和全连接层。后两种层会在下个视频中介绍。

## 9. C4W1L09 Pooling Layers

汇聚层常用来减小特征图尺寸,提升计算速度和建模鲁棒性。

最大汇聚采用最大值来池化区域内特征,如4x4输入采用2x2过滤器和步幅,输出为2x2。过滤器大小和步幅决定输出尺寸。

平均汇聚采用区域内平均值来池化。两种汇聚方式都没有学习参数,仅由过滤器大小、步幅和填充决定。

常用的参数组合有:过滤器大小2x2,步幅2;过滤器大小3x3,步幅2。这减小了特征图高宽一半或三分之一。

汇聚可以应用到任意通道数量的多通道输入上,独立作用在每通道。

深层神经网络主要采用最大汇聚。平均汇聚仅在最后采用,将特征图整合为1x1大小向量。

## 10. C4W1L10 CNN Example

一个常见的卷积神经网络结构使用以下层次:

- 输入层:32x32x3的RGB图像
- 卷积层1:5x5过滤器,6个通道,输出28x28x6
- 汇聚层1:2x2最大汇聚,输出14x14x6
- 卷积层2:5x5过滤器,16个通道,输出10x10x16
- 汇聚层2:2x2最大汇聚,输出5x5x16  
- 平展层:输出400个单元
- 全连接层1:400个单元到120个单元  
- 全连接层2:120个单元到84个单元
- 软max输出层:10分类输出

卷积层提取局部特征,汇聚层降维,全连接层学习高层表示。通道数量增加,输出规模逐步减小。

该网络中,卷积层具有可学习参数,汇聚层没有参数。大多数参数位于全连接层。网络结构深度增加特征提取能力,但需要更多数据来训练更多参数。

## 11. C4W1L11 Why Convolutions

卷积层相比全连接层有两个主要优势:

1. 参数共享。同一个过滤器在不同位置上重复使用,大大减少参数数量。例如3x3边缘检测过滤器可以应用于图片的任意位置。

2. 连接的稀疏性。每个输出单元仅与局部区域内的输入单元连接,与全连接需要连接整个输入不同。例如3x3过滤器每个输出单元仅与对应的3x3区域内输入连接。

卷积运算实现了特征检测器在不同位置的重用,大大减少模型参数。同时由于连接的局部性,也大幅减少连接数目。

此外,卷积层也可以很好地实现平移不变性。即图片在平移一小段距离后,特征提取结果基本不变。这取决于过滤器在各个位置的重复使用。

通过这些机制,卷积神经网络可以使用较少的参数得到较好的泛化能力,并学习图片中的上下文结构信息。它为图片和序列数据解决分类等问题提供了有效的解决方案。

## 12. C4W2L01 Why look at case studies?

本周将展示几个成功的卷积神经网络案例,以获取设计有效网络的经验和灵感。

1. LeNet-5网络。1980年代第一个用于数字识别的卷积网络。

2. AlexNet网络。2012年ImageNet大赛中第一个实质性改进网络能力的网络。

3. VGG网络。不同深度网络的比较,网络层数对性能的影响。

4. RESNET网络。微调残差链接,成功训练深达152层的极深网络。

5. Inception网络。平行卷积操作,能充分学习多种尺度特征。

案例研究可以让我们观察如何有效组合基础模块,比如卷积层、池化层和全连接层。同时也体现出网络结构设计和训练策略的发展方向。

研究其他成功网络的思路和经验,可以帮助我们更好地设计和优化自己的网络结构,应用到其他任务上也可能有很好的效果。

## 13 VGG16网络

### 卷积层

VGG16网络使用3x3卷积核,边长步距为1,使用同补充。

第一个卷积块使用64个卷积核,输出特征图大小为224x224x64。

第二个卷积块也使用64个卷积核,输出 224x224x64。

### 池化层

卷积块与卷积块之间添加2x2最大池化层,步距为2,可以减小特征图大小一半。

### 深度网络

VGG16是一种深度卷积网络,没有完全描述每个卷积块,而是使用“Conv 64x2”表示有2个卷积块,每个卷积块使用64个卷积核。

### 其他特点

- VGG16网络使用relu激活函数
- 最后一层为全连接层将特征图拉平,输出1000分类
- 网络结构简单,使用固定大小的卷积核和步距,少量超参

### 贡献

VGG16网络简化了神经网络结构,消除许多超参数,并证明使用更深更广的网络可以提升性能,为后续工作奠定基础。

## 14 ResNet网络

### 残差块

ResNet网络使用残差块作为基本单元,残差块包含两层卷积运算以及一条跳跃连接。

跳跃连接将输入直接作为输出,可以避免梯度消失问题。

### 很深的网络

使用残差块可以构建超深网络,如超过100层甚至1000层。

与普通卷积神经网络相比,ResNet网络在更深时训练性能不会下降。

### 残差抵消

跳跃连接将输入直接添加到每一层的输出中,可看作抵消该层的变化,从而保留输入信息并更深传递到网络中。

这可以帮助梯度更深地传播,解决深层网络梯度消失或爆炸的问题。

### 简单结构

ResNet网络使用固定结构的残差块,每个块包含两层卷积,使模型参数较少且结构简单。

这为构建超深网络提供了可能, ResNet成功训练了超过100层的卷积神经网络。

## 15  Why ResNet works

### 残差块可以学习恒等函数

残差块可以很容易地学习恒等函数，即将两个额外层的输出等于输入。

这是通过跳跃连接实现的，它将输入添加到卷积层的输出中，充当恒等捷径。

### 避免深层网络退化

深度普通网络在深度增加时变得难以训练，通常会导致性能下降。但残差网络可以保持性能随着深度增加而提高。

残差块中的恒等捷径为块提供了一个易于拟合的目标，确保额外的层不会影响性能。

### 通过卷积匹配维度

3x3 卷积中的相同填充会保留输入/输出维度，允许在残差块中进行逐元素加法。

当维度不同时，会在添加之前应用线性投影层来匹配维度。

### 残差网络用于图像

ResNet 在用于图像的卷积网络中周期性地应用具有 3x3 卷积的残差块。

维度匹配的捷径和卷积设计使 ResNet 能够训练非常深的图像网络而不会导致性能下降。

## 16 Network In Network

### 1x1 卷积

1x1 卷积在每个空间位置独立地充当全连接层。

它将输入通道和滤波器通道的逐元素乘积输出为单个数字。

使用多个 1x1 滤波器，它等同于多个全连接单元，将所有输入通道作为输入。

### 维度匹配

滤波器通道必须与输入通道匹配。将 6x6x32 输入与 1x1x32 滤波器卷积会产生 6x6x32 输出。

### 收缩/扩展通道

1x1 卷积可以收缩通道以减少参数，或扩展通道以增加表示能力。

例如，将 28x28x192 输入与 32 个 1x1x192 滤波器卷积会产生 28x28x32 输出。

### 非线性变换

1x1 卷积对输入应用非线性变换，允许网络在保留空间维度的同时学习更复杂的函数。

### 网络内网络

介绍 1x1 卷积的论文将此想法称为“网络内网络”，展示了如何将卷积与全连接层相结合。它影响了许多架构。

## 17 Inception Network Motivation

### inception 模块

inception 模块在输入上执行多种操作——1x1、3x3、5x5 卷积和 3x3 最大池化，并连接它们的输出。

这允许网络为每个空间位置选择最佳操作，而无需手动指定架构。

### 维度匹配

不同操作的输出使用 1x1 卷积进行维度匹配，因此可以进行连接。填充用于最大池化以保持维度相同。

### 计算成本

直接在大型通道（例如 192）上应用 5x5 卷积很昂贵（120 万次操作）。使用 1x1 "瓶颈" 层首先减少通道数，然后 5x5 层将操作减少到 12.4 万次。

以这种方式缩小表示大小对性能影响不大，但可以节省大量计算。瓶颈思想是使 inception 模块实用的重要关键。

## 18 Inception Network

### 构建Inception网络

Inception网络的基本构建模块是Inception模块。一个Inception模块接受作为输入前一层输出的激活值,然后进行一系列卷积操作,最后将不同操作的输出通过通道连接拼接起来输出。

Inception模块的具体操作包括:

1. 带有1x1卷积的5x5卷积层,输出28x28x32维特征图
2. 带有1x1卷积的3x3卷积层,输出28x28x128维特征图  
3. 1x1卷积层,输出28x28x64维特征图
4. 带有填充的3x3最大池化层,输出28x28x32维特征图
5. 将上述操作的输出通过通道连接拼接输出28x28x256维特征图

Inception网络通过重复堆叠Inception模块来构建整个网络结构。

### Inception网络细节

原始Inception网络paper提出了一些额外的设计:

1. 在网络中间加入辅助分支Predictions,提前输出分类结果以正则化网络
2. 后续版本不断进行优化,如Inception-v2、Inception-v3等

Inception网络之所以命名为“Inception”,源于作者在论文中引用的一张过度深入的网络结构图相对应的网络梗图。

## 19 Using Open Source Implementation

### 开源实现难以复现

许多深度学习网络在细节如超参数调整等方面难以仅从论文中正确实现。许多研究人员会将代码开源在Github等平台上。

### 搜索开源实现

如果想利用某篇论文中的网络,可以先在Github等网站搜索该网络的开源实现。例如ResNet网络就有多种实现库。

### 下载与安装开源代码

找到满意的开源实现后,可以使用```git clone```命令将代码克隆到本地。软件库README中会给出详细使用说明。

### 开源实现优势

使用开源实现可以避免从零开始研发,节省时间。许多实现已进行预训练,方便迁移学习应用。开源代码也可能支持更多框架。

### 开发工作流程

常见的计算机视觉项目工作流程是:选择网络结构->搜索开源实现->下载安装->构建项目。研究人员可以在此基础上进行改进,并贡献回开源社区。

## 20 Transfer Learning

### 预训练网络权重

许多研究人员会将在大型数据集如ImageNet上预训练好的网络权重开源供下载使用。这些权重可以作为初始化,为新任务提供很好的起点。

### 分类任务示例

比如要识别猫咪图片中的“提格尔”或“米斯蒂”,可以下载预训练网络,删除最后一层softmax,添加三类的softmax作为输出。

### 冻结层次

小数据集情况下,可以冻结网络除最后一层以外的所有层,仅训练最后一层。数据集越大,可以冻结的层数越少,训练的层数越多。

### 激活提取

由于冻结层次不训练,其激活可以提前离线计算保存。这样训练时不需要每次都计算,加快速度。

### 边际情况

如果数据集非常大,也可以不冻结任何层,直接使用预训练权重初始化整个网络,进行全量训练。

### 工作流程

1. 选择网络结构 2. 搜索预训练模型 3. 下载模型和权重 4. 修改最后一层 5. 冻结部分层次 6. 训练最后一层或更多层 7.评估效果

## 21 Data Augmentation

### 需要更多数据

计算机视觉任务通常需要更多数据。

### 基本增强方法

1. 镜像:水平翻转图像。
2. 随机裁剪:从图像随机选取一定范围的子图作为训练数据。
3. 色域变换:随机改变图像各通道(R、G、B)的值,增加色域上的噪声。

### 实现方式

1. CPU线程负责从硬盘读取数据和进行数据增强。
2. 生成增强后的数据作为训练的数据集。
3. 其他线程负责模型训练。

### 超参数调整

数据增强方法和程度都需要经过调试,比如色域变换幅度、随机裁剪尺寸等。

### 开源实现参考

可以参考别人已经实现的数据增强方法,或者根据需要自行设计更多变换形式。

## 22. C4W2L11 State of Computer Vision

深度学习已经成功应用于计算机视觉任务,如图像识别、语音识别、在线广告和物流等问题。计算机视觉问题有其独特之处:

1. 计算机视觉任务试图学习一项非常复杂的函数,通常数据量相对不足。

2. 历史上计算机视觉研究依赖大量人工设计,如网络结构和特征等。近年来数据量大幅增长,人工设计比例下降。

3. 对象检测等任务相对数据量更小,算法更复杂。

4. 小数据量任务更依赖迁移学习。

5. 计算机视觉 literate很注重标准测试集结果,有利于发表论文。但一些技术如集成学习不太适用于实际产品。

6. 建议初学者优先使用已训练好的模型进行微调,而不是从零开始训练,以提高效率。开源实现也很有帮助。

7. 成功的计算机视觉网络结构也可能适用于其他任务。

计算机视觉领域重要目标是从图片像素中识别对象和场景。算法研发需要的数据规模很大,但与问题复杂度相比仍然不足。这决定了计算机视觉研究的特征和发展方式。随着数据量增长,人工设计比重下降,但网络结构设计依然比较复杂。小数据任务依靠迁移学习。标准测试结果重要但不适合生产。利用现成资源快速开发也很常见。

## 23. C4W3L01 Object Localization

### 对象定位问题

对象定位问题是计算机视觉中重要的一个分支。它包含图像分类任务和边框定位任务。

- 图像分类任务是判断图像中是否含有对象,如汽车。

- 边框定位任务是在图像中找到对象的具体位置,通常使用边框框起来。

### 分类与定位结合

分类定位问题需要神经网络同时完成分类和定位两个任务:

1. 判断图像中是否含有对象。

2. 如果有对象,需要输出该对象的边框参数来标记其位置。

边框位置可以用实数(Bx, By, Bw, Bh)来表示中点坐标和宽高。

### 训练目标

设训练样本为(X,Y),X为图像,Y为标签向量:

- Y1表示是否含对象,0或1。

- 如果Y1=1,后续元素输出边框参数。

- 最后输出类别编号,0或1或2。

这样可以监督网络学习分类和定位任务。

### 损失函数

如果Y1=1,使用所有元素的平方误差。

如果Y1=0,只计算Y1与预测值的平方误差。

分类定位任务需要网络同时完成分类和细粒度定位,它将分类和回归任务结合起来,扩展了单纯分类的可能。

## 24. C4W3L02 Landmark Detection

在前一段视频中,你看到了如何让神经网络输出四个数字BX、BY、BH和BW来指定你想要定位的对象的边框。在更普遍的情况下,神经网络可以直接输出图像中的重要点的X和Y坐标,这些点 sometimes 称为地标点。

例如,如果你正在构建面部识别应用程序,并且出于某种原因希望算法告诉你某人眼睛角的位置,那么该点就有X和Y坐标。你可以修改神经网络,使其最后一层输出额外的两个数字,我称之为XR和YR,来告诉你该人眼睛角的坐标。同样,如果你想告诉两个眼睛的所有四个角的位置,你可以让网络输出l1X、l1Y...l4X、l4Y来指定这些点。

此外,你可能还希望从眼睛提取一些关键点,从嘴部提取形状来判断是否在微笑或皱眉,从鼻子边缘提取一些关键点。一般来说,你可以定义面部上一定数量的地标点,例如64个点。通过产生包含所有这些地标点坐标的标注训练数据集,网络就可以告诉你图像上所有关键位置或地标点的坐标。

同样的idea也可以应用于人体姿态检测。你可以定义一些关键地标点,如胸部中心,左肩,左肘等,让网络来输出这些点的位置,就可以识别出图片中的人体姿态。

然而,为了训练这样的网络,需要一个包含大量图像以及地标点坐标标签Y的标注训练数据集。坐标的标注需要人工排序,是一项累人的工作。关键是不同图像中的地标点标号需要保持一致,像地标点1总是眼睛中的同一个角等。如果能准备好足够大的标注数据集,神经网络就可以输出你需要识别的所有地标点。

## 25. C4W3L03 Object Detection

### 目标检测算法

通过学习对象定位和地标检测,可以构建对象检测算法。

### 滑动窗口检测算法

1. 使用密集裁剪的图片样本训练卷积神经网络,输入图片输出是车/非车。

2. 对测试图片采用多个窗口大小,将每个窗口区域传入网络进行分类。

3. 重复将窗口滑动移动至图片各个位置,实现整个图片的扫描。

### 算法问题

计算成本高,每个窗口区域都需要分类,占用大量计算资源。且窗口步长设置影响准确性和效率。

### 改进方法

可以将滑动窗口算法实现为卷积方式,利用卷积神经网络的特点更高效地进行对象检测。

目前主流方法有两个方向:

1. 区域神经网络将检测问题 formulize 为边界框回归问题。

2. 一体化检测网络直接从特征图预测边界框和类别,例如SSD和YOLO。

## 26. C4W3L04 Convolutional Implementation Sliding Windows

### 将全连接层转换为卷积层

将网络中的全连接层用1x1卷积核的卷积层替换,可以实现参数共享,降低计算量。

### 滑动窗口卷积实现

将输入图片通过网络进行卷积操作可以一次性获取整个图片的多个预测框结果,而不需要分块计算。

通过设置步距为2像素,网络输出的预测结果对应与滑动窗口算法的不同区域。

### 计算共享

卷积实现能够在图片中重叠区域 shared 计算结果,避免重复计算,大大提高效率。

### 位置预测不准

卷积实现滑动窗口后,预测框的位置还不够精准。需要添加回归算法校准边界框坐标。

## 27. C4W3L06 Intersection Over Union

### 计算交并比

交并比(IOU)用于衡量两个预测框和 ground truth 的重合程度,计算预测框和 ground truth 的交集面积除以它们的并集面积。

### 评估预测框

当 IOU 大于等于 0.5 时,表示预测框定位准确。这是一个经验规则,也可以设更高门槛,如 0.6 或 0.7。

### IOU 定义

IOU 不仅可以用于评估预测框,更广泛来看是度量两个框重合程度的一个指标。它计算两个框的交集面积与它们并集面积的比值。

### 下一步

下一视频将讨论具体如何利用 IOU 来实现非极大抑制(NMS),从而进一步优化预测结果。

## 28. C4W3L07 Nonmax Suppression

### 多个预测框问题

卷积神经网络对每个网格单元进行目标检测,可能会预测出多个同一个目标的框,称为多个预测框问题。

### 非极大抑制算法

非极大抑制(NMS)算法选择概率最大的预测框作为最终预测,并删除与其重合程度高的其他预测框,实现每个目标只出现一个预测框。

### NMS算法步骤

1. filters低概率预测框

2. 选择概率最大框输出

3. 删除与输出框重合程度高(IOU大于阈值)的其他预测框

4. 重复步骤2-3,直至处理完所有框

### 多类目标检测

对多类目标,需要对每个类独立进行NMS,得到各类最终预测框。

### 代码实现

本周练习需要实现NMS算法,处理单类和多类目标检测问题。

## 29. C4W3L08 Anchor Boxes

### 单个预测框问题

每个网格单元只能预测一个目标,无法检测多个目标。

### Anchor Box概念

Anchor Box是事先定义的参考框形状。每个Anchor Box对应预测框的一组参数,以实现多个预测框。

### Anchor Box应用

1. 给每个目标分配Anchor Box,使其形状最相似的那一个

2. 每个预测框对应一组Anchor Box参数

3. 目标数字化编码包含:概率、框坐标、类别编码

### Anchor Box数量和选择

通常使用多个Anchor Box覆盖不同形状。可以手动设计,也可以用K-Means算法自动学习。

### 输出表示

输入每个网格单元,输出 Anchor Box参数组数目扩大。如3×3×16。

### 训练过程

目标分配Anchor Box后,其参数作为训练标注。网络学习预测每个Anchor Box的参数。

### 特殊情况

同一个网格单元内目标过多或Anchor Box重合情况需要默认解决方案。实际数据中发生概率很小。

## 30. C4W3L09 YOLO Algorithm

### 构建训练集

- 定义物体类别,如行人、车、摩托车等
- 使用两个anchorsboxes
- 输出Y的维度为3×3×2×8或3×3×16
- 对每个3×3网格单元,根据anchorsboxes iou最大值,建立对应物体的Y向量标签

### 训练过程

- 神经网络输入图片尺寸一般为100×100×3
- 神经网络输出尺寸为3×3×16或3×3×2×8向量集
- 训练目标是学习预测每个网格单元内的Y向量

### 预测

- 预测结果也是3×3×2×8向量集
- 每个网格单元内对应两组预测bounding box坐标与概率
- 置信度低的预测框筛除

### 非极大抑制

- 对每个类别进行非极大抑制
- 过滤重合预测框,输出每个类别最终预测框

## 31. C4W3L10 Region Proposals

### 滑动窗口算法缺点

- 每个窗口都需要分类,大量空窗口浪费资源

### RCNN算法

- 使用图像分割找到前景区域块
- 在每个块生成边界框进行分类
- 只在有效区块运行分类器,节省资源

### Fast RCNN

- 使用卷积实现滑动窗口,提升效率

### Faster RCNN

- 使用CNN直接生成区域 proposals,而不是图像分割
- 改进区域提取速度

### 区域提案总结

- 提出有效区域块,减少分类位置,提高效率
- 后续算法不断提升区域提取速度
- 与yolo整体预测相比,分步过程效率略低

## 32. C4W4L01 What is face recognition

### 人脸验证与识别

- 人脸验证:判断样本是否对应个人
- 一对一问题
- 人脸识别:从样本库中识别个人身份  
- 识别难度大于验证,需要更高精度

### 人脸验证系统构建

- 使用深度学习模型训练人脸特征提取模型
- 特征提取方法如ResNet
- 训练目标是区分不同人的特征
- 测试时提取特征比较实现验证

### 难点

- 一票学习问题:用一个样本学习新人脸
- 需要通用特征提取能 generalize到新样本
- 提取特征应具有了解、表达和区分能力

## 33. C4W4L02 One Shot Learning

### 一票学习问题

- 只给定一个样本训练新人物
- 需要从一个样本学习该人物特征

### 直接分类难以实现

- 样本量太少无法训练分类器
- 每新增加人物都需重新训练

### 学习相似性度量

- 训练网络D,输入两张图片输出相似度
- 相同人物输出小值,不同人大值

### 验证方式

- 输入新图片与样本库中图片计算相似度
- 若小于阈值τ则认为是同一人

### 识别方式

- 将新图片与样本库所有图片计算相似度
- 若都大于τ则不在库中,否则是匹配人物

- 可适应新增人物库无需重新训练

## 34. C4W4L03 Siamese Network

### 相似度度量函数D

- 输入两张图片输出相似度
- 相同人物输出小值,不同人大值

### Siamese网络

- 两张图片输入同一神经网络
- 输出每个图片的特征向量编码
- 计算编码间距离作为相似度

### 训练目标

- 相同人物编码距离小
- 不同人物编码距离大

### 训练方法

- 同网络不同参数训练两张图片编码
- 回传最小化同人物编码距离
- 最大化不同人物编码距离

### 评估函数

- 三组损失(散 triplet loss)
- 下一课将介绍其定义与应用

## 35. C4W4L04 Triplet loss

### 三元组损失函数

三元组损失函数定义在三张图像a,P,n上。

- a是锚图像
- P是与a属于同一人的正例图像
- n是与a属于不同人的负例图像

三元组损失函数定义如下:

$$ \max(f(a)-f(P)-f(n)+\alpha,0) $$

其中:

- $f(a)$ 是锚图像a的编码
- $f(P)$ 是正例图像P的编码  
- $f(n)$ 是负例图像n的编码
- $\alpha$ 是边距参数

目标是使得正例图像与锚图像编码距离小于负例图像与锚图像编码距离,且距离间隔大于$\alpha$。

### 训练方法

1. 从训练集中挑选 triples (a, P, n),其中a和P属于同一人,a和n属于不同人。

2. 计算每组triples上的损失。

3. 总损失定义为所有triples损失和。

4. 使用梯度下降法对总损失进行优化,学习神经网络参数。

为加快训练,应选择“难例”triples,使a、P编码距离接近而a、n编码距离远离,使模型能够很好地学习区分特征。

### 应用

训练后的模型可以将图像编码成固定维度的向量,在这种向量空间中,同一人图片的向量距离很近,不同人图片向量距离很远,实现面部识别。

商业级面部识别系统已经开始使用百万级或者更大的数据集进行训练。

## 36. C4W4L05 Face Verification

### 训练SIAM网络的另一种方式

Triplet loss 可以很好地训练卷积神经网络,但也有其他方式。可以把面部识别问题 formulize 为二分类问题来训练SIAM网络。

### 二分类问题的 formulization

- 输入为一对图像
- 输出为0或1
  - 0表示两张图像不同人
  - 1表示两张图像相同人
- 两条分支的网络计算embedding,将其输入logistic回归单元进行预测

### 计算embedding差异作为特征

可以计算两张图像embedding的差异作为训练logistic回归的参数:

`∑_k=1^128|f(x_i)_k - f(x_j)_k|`

其中`f(x)_k`表示图像x的embedding向量的第k个分量。

也可以使用其他差异测量,如chi-square距离。

### 预测新图像时的优化

预测新图像时,只需要计算新图像的embedding,与预先计算好的数据库图像embedding进行比较,而不需要每次都重新计算数据库图像的embedding。

### 总结

- 输入为图像对,输出为0/1表示是否同一人
- 训练SIAM网络预测图像对之间的相似性
- 计算embedding差异作为分类特征
- 预测时优化为预先计算数据库图像embedding

这样也可以很好训练面部识别系统。

## 37. C4W4L06 What is neural style transfer?

### 原理

神经风格迁移利用卷积神经网络特征图,将内容图片和样式图片中的特性分离学习出来,然后将内容图片中的内容特征与样式图片中的样式特征组合,生成新的图像。

### 例子

- 将斯坦福大学校园图片的内容,与范高《星ry之夜》画作中的样式融合,生成混合画作。

- 将金门大桥图片的内容,与毕加索画作中的样式融合,生成混合画作。

## 38. C4W4L07 What are deep CNs learning?

### 卷积神经网络的第一层

第一层的单元主要检测简单特征,如图片中的边缘、线条、颜色等。

### 第二层

第二层的单元检测比第一层更复杂的形状和图案,如垂直纹理、圆形物体等。

### 第三层

第三层的单元开始检测更完整的物体,如车辆、人体等。

### 更深层次

更深层次的单元检测能力不断增强,可以识别狗、鸟、花朵乃至更复杂的图案如键盘等。

### 结论

- 深层次单元检测能力越强,可以识别较复杂的物体。

- 浅层次单元主要检测图像的低级特征,深层次单元检测高级结构信息。

- 卷积神经网络采用这种分层检测的机制,可以逐步提取图像中的更深层次表示。

理解不同层次单元的检测能力,有助于设计和解析模型。

### 过程

1. 准备内容图片C和样式图片S

2. 使用预训练模型对C和S进行处理,提取各层特征图

3. 将C的内容特征与S的样式特征组合

4. 优化生成图片G,使其内容接近C,样式接近S

5. 得到内容为C,样式为S的新图像G

### 关键

提取图片在不同层次的特征图,可以分离内容和样式信息。通过结合不同特征图,可以生成内容和样式都被替换的新图片。

## 39. C4W4L08 Cost Function

### 目标

通过定义成本函数,最小化成本函数来生成结合内容图片和样式图片特征的新图片。

### 成本函数定义

成本函数J(G)由内容成本和样式成本两部分组成:

- 内容成本Content Cost衡量生成图片G和内容图片C内容特征的相似程度。

- 样式成本Style Cost衡量G和样式图片S样式特征的相似程度。

### 优化算法

1. 随机初始化生成图片G

2. 定义成本函数J(G)

3. 使用梯度下降法更新G,将J(G)最小化,逐步优化G的值

4. 最终G的内容特征接近C,样式特征接近S

### 参数

使用α、β两个超参数分别指定内容成本和样式成本在总成本中的权重。

最后一步需要分析具体是如何定义内容成本和样式成本。

## 40. C4W4L09 Content Cost Function

### 内容成本定义

- 使用中层神经网络层L来计算成本
- L层应选择掩码深度,防止过于注重低级像素或高级结构

### 计算方法

1. 前向传播内容图片C和生成图片G到L层,得到激活值A(C)和A(G)

2. 计算A(C)和A(G)元素间的平方差之和

3. 内容成本定为:

   Jcontent(C, G) = Σ(A(C) - A(G))^2

### 含义

使A(C)和A(G)尽可能相似,生成图片G才会保留C的内容特征。

### 调整参数

α参数控制内容成本在总成本中的权重。

内容成本函数定义了如何衡量内容特征的一致性。

## 41. C4W4L10 Style Cost Function

### 风格代价函数

风格是一个图像的特征,可以用神经网络某个隐藏层的激活之间的相关性来度量。

具体来说,我们可以计算图像在某个隐藏层的每条通道之间的相关系数,将它们组成一个样式矩阵。这样样式矩阵就可以反映通道间激活值的相关程度, also known as the gram matrix.

对样例图像和生成图像分别计算样式矩阵,然后定义样式代价函数为这两个矩阵之间的Frobenius norms差的平方和。

### 计算样式矩阵

给定层L,对样例图像s计算样式矩阵GL^(s):

- GL^(s)是一个NxN矩阵,N为该层通道数
- GL^(s)kk'元素计算公式:

Σ_iΣ_ja_L_ij_k * a_L_ij_k',

其中i,j循环迭代图片每个像素点,k,k'循环迭代每个通道。

对生成图像G也同样计算矩阵GL^(G)

### 样式代价函数

定义样式代价函数为:

Σ_kΣ_k'(GL^(s)kk'-GL^(G)kk')^2 / (2WHNC)^2

其中W,H分别为层L特征图宽高,N为通道数,C为正规化常数。

整体样式代价函数定义为先前各层样式代价函数的加权和:

Σ_Lλ_L * 样式代价函数(L)

λ_L为不同层权重的超参数。

使用多个层可以使生成图像兼具低级和高级特征的相似度。

## 42. C4W4L11 1D and 3D Generalizations

你学过很多关于卷积神经网络知识,从它的结构到应用如图像分类、目标检测、人脸识别、风格迁移等。大多数讨论都集中在二维图像数据,但是卷积神经网络的一些思想也可以应用于一维和三维数据。

一维数据如心电图(EKG)信号。EKG信号记录的是通过附在胸部电极上的微小电压变化随时间的波形,每个峰值对应一个心跳。对EKG数据进行医学诊断可以将其作为一维输入。卷积层可以采用一维过滤器,比如5维过滤器对14维输入进行卷积就会产生10维输出。

三维数据如CT扫描图像,记录了人体在不同体层的切面图像,是三维体积数据。可以将CT数据看作是具有高、宽、深三个维度的输入。三维卷积采用三维过滤器,比如对14×14×14的CT体积数据使用5×5×5过滤器进行卷积会得到10×10×10的输出体积。

总之,卷积思想可以直接应用于一维和三维数据,将其看作时间序列或三维体积,就可以使用相应维度的过滤器进行卷积操作了。这在医学和影像处理等领域有很好的应用前景。