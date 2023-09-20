# Cryptography Lecture Series

> <https://www.youtube.com/playlist?list=PL2jrku-ebl3H50FiEPr4erSJiJHURM9BX>

## 1. Lecture 1: Introduction to Cryptography by Christof Paar

### 1.1 分类

教授将介绍密码学的分类内容。

### 1.2 基础概念

教授将对密码学的一些基础概念进行简单说明,比如密码学系统的设置等。

### 1.3 分类内容

密码学主要分类内容包括:

- 分组密码:将明文分组进行加密,常见算法有DES、3DES等。

- 流密码:将明文看作为一个连续的字节流进行加密,例如RC4。

- 非对称密码:使用公钥和私钥两个不同密钥进行加密和解密, rsa就是非对称密码的代表算法。

- 哈希算法:一种单向算法,以明文为输入可以产生哈希值,但很难从哈希值推断出原明文,MD5和SHA-1都是典型的哈希算法。

- 数字签名:基于非对称密码,使用私钥对数据进行签名,任何人可以使用公钥验证签名是否正确。可以实现数据的完整性和签名人的证明。

以上就是本次课程开头教授对密码学分类和基础概念的介绍概要。

## 5. Lecture 5: Data Encryption Standard (DES): Encryption by Christof Paar

### 5.1 DES算法简介

数据加密标准(DES)是一种分组密码算法,采用56位密钥,分组长度为64位。

### 5.2 DES算法工作原理

DES算法工作分为以下步骤:

1. 加密前的明文数据按64 bit进行分组

2. 每组数据与一个56位密钥进行16轮 Feistel网络加密

3. 每轮加密过程中会使用子密钥,子密钥来源于密钥压缩算法对原密钥进行转换产生

4. 每轮加密采用S盒替换和位移操作对数据进行变换

5. 经过16轮Feistel网络加密后得到该组密文

6. 对下一个组明文重复上述过程直至全部明文加密完毕

### 5.3 DES算法的安全性

由于DES采用较短的56位密钥,加密效率高但是安全性受到质疑。已有人使用截取法破解DES。目前DES不再推荐使用,被3DES和AES等更安全的算法替代。

以上就是本节课程对DES算法工作原理和安全性的介绍。

## 6. Lecture 6: Data Encryption Standard (DES): Key Schedule and Decryption by Christof Paar

### 6.1 DES密钥压缩

DES采用56位密钥,但实际进行加密的子密钥长度为48位。DES算法中有一个密钥压缩算法,将56位原密钥转换为16轮需要使用的16个48位子密钥。

### 6.2 子密钥产生方式

DES密钥压缩算法按照以下步骤产生子密钥:

1. 将56位密钥进行置换PC-1,产生56位替换后的中间结果C和D

2. 16轮循环计算各轮需要的子密钥

3. 每轮循环左移一位C和D,再连接成新密钥进行PC-2,即获得该轮使用的48位子密钥

### 6.3 DES解密原理

DES解密采用反向Feistel网络,主要步骤:

1. 使用与加密相同的子密钥,但顺序为第16轮到第1轮

2. 每轮进行S盒、P盒替换和XOR运算

3. 经过16轮操作后得到原始明文

以上内容归纳了DES密钥产生和解密算法的工作原理。

## 7. Lecture 7: Introduction to Galois Fields for the AES by Christof Paar

### 7.1 Galois Field简介

Galois Field(GF)是一个数学概念,是一种有限体,包含有限个元素。

### 7.2 Galois Field的主要特点

- 包含有限个元素,常用的有GF(2)二值场和GF(2^n)

- 在GF(2)中只有0和1两个元素,运算遵循模2律

- 在GF(2^n)中元素表示为n位二进值,支持四则运算

- GF(2^n)满足交换律、结合律、分配律等体运算规则

### 7.3 Galois Field在AES中的应用

- AES算法采用GF(2^8)进行字节替换

- AES S盒就是基于某个特定的Galois Field映射表实现的

- Galois Field可以实现ouraddition和替换等AES需要的基本加法和逻辑操作

以上概述了Galois Field的数学定义及它在AES算法中的应用,为进一步了解AES算法奠定了基础。

## 8. Lecture 8: Advanced Encryption Standard (AES) by Christof Paar

### 8.1 AES算法概述

AES为美国联邦信息处理标准(FIPS)指定的对称加密算法,采用了Rijndael算法,支持128/192/256位密钥长度和128位分组长度。

### 8.2 AES加密过程

AES加密分为四个步骤:

1. 添加密钥:密钥被扩展为不同轮数需要使用的密钥

2. 添加初值:明文被初始化为状态数组

3. 轮函数重复执行:包含四个部分的置换-替换-混合-移动操作

4. 输出:最后一轮略有不同,输出密文

### 8.3 AES解密过程

AES解密过程与加密过程顺序相反,但轮函数中每个步骤的执行顺序相反。

### 8.4 AES与其他算法对比

AES相比DES具有更长的密钥,算法设计更合理,安全性得到广泛认可,成为目前应用最广泛的对称加密标准。

## 15. Lecture 15: Elgamal Encryption Scheme by Christof Paar

### 15.1 脱离难问题概述

大数分解问题和离散对数问题都很难,可以用于构建非对称加密算法。

### 15.2 伊尔格麦加密原理

伊尔格麦加密算法基于离散对数问题在有限体GF(p)中的难计算性。

### 15.3 伊尔格麦加密步骤

1. 私钥选择大素数p和基数g

2. 计算公钥:y=g^x mod p,x为私钥

3. 加密:选择kRANDOM(1,p-1),计算c1=g^kmodp,c2=m*y^kmodp

4. 解密:m=c2/(c1)^x

### 15.4 伊尔格麦签名

使用私钥对数据哈希值进行签名,任何人可以用公钥验证签名的正确性。

以上介绍了伊尔格麦加密和签名算法的工作原理,其安全基于离散对数难题。

## 16. Lecture 16: Introduction to Elliptic Curves by Christof Paar

### 16.1 开场致辞

教授希望每个人都度过了愉快的复活节吃鸡节假期。

### 16.2 椭圆曲线概述

椭圆曲线是一种代数几何构造,定义在一个有限域上,具有加法群的结构,可以用于密码学应用。

### 16.3 椭圆曲线密码学

椭圆曲线密码学就是基于椭圆曲线难问题的公钥密码体系,如ECDLP问题。与其他密码体系相比,椭圆曲线密码学实现相同安全级别所需要的密钥长度更短。

### 16.4 这一章节重点

教授将简要介绍椭圆曲线数学原理及其在密码学中的应用。后续将详细探讨椭圆曲线加密与数字签名算法。

以上为这一章节视频字幕的总结,主要概述了教授今天授课的开场话和本节将要讲解的内容大纲。

## 19. Lecture 19: Elgamal Digital Signature by Christof Paar

### 19.1 数字签名简介

数字签名可以实现数据真实性校验和签名人身份证明,是非对称加密的一个应用。

### 19.2 伊尔格麦数字签名原理

伊尔格麦数字签名算法基于伊尔格麦非对称加密体制和离散对数难问题。

### 19.3 伊尔格麦数字签名过程

1. 生成密钥对(私钥x,公钥y)

2. 计算签名:选择k随机数,计算r=g^k mod p,s=k^-1(h(m)-xr)mod q

3. 验证签名:计算w=g^s*y^r * h(m)^x mod p,与r匹配则验证通过

### 19.4 数字签名特点

1. 只有持有私钥者能生成签名

2. 任何人都可以用公钥验证签名的真实性

3. 签名不可抵赖,提供数据完整性和签名人身份凭证

以上总结了伊尔格麦数字签名算法的工作原理和特点。

## 20. Lecture 20: Hash Functions by Christof Paar

### 20.1 哈希函数概述

哈希函数是一种单向函数,可以将任意长度的数据映射为固定长度的哈希值。

### 20.2 哈希函数特性

1. 输入与输出大小不相同

2. 输入最小改变可导致输出大范围改变

3. 从哈希值很难推断原始数据

4. 计算哈希值的复杂度低,验证哈希值的复杂度高

### 20.3 常见哈希算法

MD5、SHA-1等都是基于扩展无重复字模复杂度假设设计的密码哈希函数。

### 20.4 哈希函数应用

1. 数据完整性校验

2. 提取数字签名

3. 提取文件指纹进行唯一标识

4. 存储密码的方式hash(password)+salt

以上概述了哈希函数的基本原理及其在密码学中的主要应用场景。

## 22. Lecture 22: MAC (Message Authentication Codes) and HMAC by Christof Paar

### 22.1 消息认证码简介

消息认证码(MAC)用于数据的真实性校验,保证消息在传输过程中不被修改或替换。

### 22.2 MAC工作原理

MAC算法需要一个公开的或隐藏的密钥。算法将明文和密钥一起输入,计算出MAC标签值。接收方使用相同算法和密钥重算MAC与所接收MAC比对。

### 22.3 HMAC算法

HMAC算法基于哈希函数设计,通过哈希值和密钥进行构造,被视为安全可靠的MAC函数。

### 22.4 HMAC工作流程

1. 定义哈希函数如SHA-1

2. 定义密钥扩展函数如SHA-1

3. 计算第一轮密钥扩展

4. 计算第二轮密钥扩展

5. HMAC值等于最终哈希的值

HMAC兼容任何迭代哈希函数,安全可信。

以上介绍了MAC和HMAC两种消息认证方式。

## 23. Lecture 23: Symmetric Key Establishment and Kerberos by Christof Paar

### 23.1 对称密钥分发问题

对称加密算法需要事先安全地分发密钥,这对于公开通信来说是一个挑战。

### 23.2 协商密钥协议

想要在不安全的信道中协商一个共享密钥,常见的方法包括Diffie-Hellman密钥交换和三方握手协议。

### 23.3 Kerberos认证系统

Kerberos作为一个在网络环境中对称密钥分发的方案,它的主要特点和步骤为:

1. 采用票证概念进行第三方认证

2. 客户端和服务器通过认证服务器在不安全信道中交换会话密钥

3. 使用会话密钥进行后续通信保证数据安全

Kerberos体现了对称密钥在分布环境中的实践应用案例。

以上总结了对称密钥安全分发的问题及Kerberos这一典型解决方案。