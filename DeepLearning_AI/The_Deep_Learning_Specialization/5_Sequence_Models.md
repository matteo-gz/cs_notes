# Sequence Models

 (Course 5 of the Deep Learning Specialization)
> <https://www.youtube.com/playlist?list=PLkDaE6sCZn6F6wUI9tvS_Gw1vaFAx6rd6>

## 1. C5W3L01 Basic Models

### 简介序列模型

序列模型对处理从机器翻译到语音识别这类任何包含顺序信息的数据很有用。本节将简要介绍基本序列模型,后续将学习到beam search、注意力机制等技巧。

### 机器翻译模型

要将法语句子“John vesicular freak and September”翻译成英语句子“Jane is visiting Africa in September”,可以采用下面的模型:

1. 使用RNN作为编码器网络,将法语句子中的每个词依次输入编码器网络,输出代表输入句子的向量。

2. 构建解码器网络,以编码向量作为输入,然后一个词一个词地输出翻译结果。

3. 训练模型让它学习如何将输入序列映射到输出序列。

该模型主要来源于两篇论文:Vinyals等人提出的“Neural Machine Translation by Jointly Learning to Align and Translate”;Bahdanau等人提出的“Neural Machine Translation by Jointly Learning to Align and Translate”。

### 图像字幕模型

同样的框架也可以用于图片字幕生成任务。具体步骤:

1. 使用预训练的卷积神经网络(如AlexNet)对输入图片进行编码,输出特征向量。

2. 将特征向量输入RNN解码器,一个词一个词地输出字幕。

3. 训练模型让它学习如何将图片映射到字幕序列。

这类模型首先由Mao等人在论文“Deep Captioning with Multimodal Recurrent Neural Networks (m-RNN)”提出。

### 总结

序列到序列模型通常由编码器-解码器架构组成,可以用于不同任务如机器翻译、图像字幕生成等。关键在于如何通过大量样本训练模型,实现从输入序列映射到输出序列的学习。

## 2. C5W3L02 Picking the most likely sentence

机器翻译模型与前面课程中的语言模型有一些相似之处,但也有重要差异。

语言模型的任务是估计句子的概率,并且可以用于生成新的句子。机器翻译模型可以看作是条件语言模型,它的任务是估计输出翻译句子的概率,给定输入句子。

机器翻译模型包含编码网络和解码网络。编码网络任务是找到输入句子的表示,解码网络使用该编码作为输入,然后生成对应的翻译输出序列。

给定一个输入法语句子,模型可以告诉我们它对应的不同英语翻译句子的概率。但直接使用随机采样是不理想的,因为有时会采样到低质量的翻译。我们希望找到最可能的英语翻译句子。

贪婪搜索算法会选择每个单词的概率最大值,但这不总是能找到全局最优翻译。因为模型可能会误导性地给出局部最优但不全局最优的结果。

更好的搜索算法需要考虑整个翻译序列的联合概率,这需要大量计算。近似搜索算法如beam search能够找到概率最大翻译,但不一定是绝对最优结果。总体来说,近似搜索算法效果很好。

## 3. C5W3L06 Bleu Score (Optional)

### 机器翻译的挑战

机器翻译面临的一个挑战是,对于一个法语句子,可能有多个等效好的英语翻译。如何评估机器翻译系统呢?如果答案不止一个都很好,又如何衡量准确率?

### 蓝色评分

常规方法是使用“蓝色评分”。蓝色评分可以自动计算一个度量翻译质量的分数。如果机器翻译的答案离任何人工参考翻译足够近,它就能得到较高的蓝色评分。

“蓝色”一词的英文为“BLEU”,是“Bilingual Evaluation Understudy”的缩写,意思是“双语翻译评估替补”。

### 蓝色评分的计算

蓝色评分计算注意单个单词和单词对的出现次数。它将机器翻译输出中的单词或单词对与人工参考翻译进行匹配,给与不同程度的“计数”分数。此外,还考虑输出长度,给短输出附加罚分,以避免机器 sempre 优短输出。

最终,蓝色评分将单词和单词对的修改精度值相加平均,采用指数函数将其映射到0-1范围内的实数评分。这样就可以直接比较不同机器翻译系统的表现。

### 蓝色评分的应用

蓝色评分为机器翻译、图片captioning等能生成文字输出的算法提供了一个有效的单值评估标准。它允许自动评估输出质量,对提升算法有很好的驱动作用。由于其简单高效的特点,蓝色评分广泛应用于各类NLP任务的基准测试中。

## 4. C5W3L07 Attention Model Intuition

### 编码器-解码器架构的问题

传统的编码器-解码器架构在长文本翻译效果不佳。它需要 RNN 一次性记住整个句子,然后生成翻译,难度很大。

### 注意力机制

注意力机制允许 RNN 按照不同部分学习输入句子。它计算源文本各部分与当前预测单词之间的注意力权重,从而选择性地学习上下文。

### 注意力计算

注意力权重由 BiRNN 输出特征和当前 RNN 状态共同决定。BiRNN 对每个词学习特征向量,当前状态选取新闻词语的特征进行上下文学习。

### 注意力模型翻译

注意力模型翻译过程中,每个输出单词都对应一组注意力权重。它们告诉解码器应注意源文本哪些部分。随着生成过程不断更新,注意力权重改变。

### 注意力模型优势

注意力机制使模型能够局部关注源文本,不必一次性记住全文。它与人类翻译方式更为相似,能更好翻译长文,解决了传统模型的困难。注意力机制广泛应用于 NLP 任务。

## 5. C5W3L08 Attention Model

### 注意力模型实现机制

注意力模型允许RNN选择性注意输入句子的不同部分。它计算源文本各部分与当前预测单词之间的注意力权重,选择性学习上下文。

### 注意力计算

注意力权重由双向RNN输出的特征向量和当前RNN状态共同决定。双向RNN对每个词学习特征向量a_t,当前状态选取关键词语 feature 进行上下文学习。

### 注意力上下文

上下文Context是特征向量a_t经过注意力权重α_tt'加权求和得到。生成每个输出单词y_t时,都对应一组α_tt'决定注意源 textual 哪些部分。

### 注意力算法

α_tt'计算过程:先计算e_tt' ,然后softmax归一化计算α_tt',使其和为1。e_tt'由当前RNN状态s_t-1和a_t'通过小神经网络计算。

### 应用

注意力机制除机器翻译外,还用于图像描述任务。图片特征向量替换源文本特征向量,描述图片时注意力选择性描述图片不同区域。

### 优点

注意力机制允许模型局部注意源特征,根据不同预测单词选择重点上下文,人工更相似。它解决了长文本翻译难题,广泛应用于NLP任务。

## 6. C5W3L09 SpeechRecog

### 问题定义

语音识别任务是将一个音频片段X自动转化成文本转录Y。音频信号是气压波形随时间变化,经过麦克风采集。

### 预处理

常用预处理是语谱图,将音频信号转化成频率与时间两个维度,显示不同频率下音量强弱变化情况。这与人耳处理音频的原理相似。

### 传统方法

早期使用手工定义的音素作为基本单位,将语音转化成音素序列再识别。但现今直接将音频输入深度学习模型获得较好结果。

### 模型结构

注意力机制模型将音频切片作为输入,上下文注意力决定输出单词。CTC模型利用空白字符间断重复序列,允许网络产生重复输出,再使用CTC函数转化成正确序列。

### 训练数据

商用系统使用10,000小时或更多语音训练数据规模,远超过以前几百小时的规模,大量数据驱动模型效果提升。

### 语音识别系统

实际应用需要更大数据集和深层模型训练。但小规模数据下也可以建立有限词库的触发词检测系统。