# CS 162: Operating Systems and Systems Programming - Berkeley
>
> <https://www.youtube.com/playlist?list=PLF2K2xZjNEf97A_uBCwEl61sdxWVP7VWC>
>
## 1. CS162 Lecture 1: What is an Operating System?

### 1.1 操作系统的基本概念

操作系统是计算机系统级别软件,是计算机系统组成的重要部分之一。主要作用有:

1. 资源管理:管理计算机硬件资源,如 CPU、内存、磁盘等资源的使用。确保系统各部分资源能够协调使用。

2. 提供环境:为应用程序提供运行环境,屏蔽底层硬件细节,实现软件和硬件的隔离。

3. 应用程序管理:负责加载和管理应用程序的启动、执行、停止等过程。

4. 提供接口:为用户和应用程序提供各种系统调用接口,实现用户与系统的交互。

5. 安全保护:通过权限控制和进程隔离等机制,保证系统的安全稳定运行。

### 1.2 操作系统功能分类

主要功能可以分为:

1. 进程管理:负责进程的创建、调度和终止等。

2. 内存管理:管理计算机的内存资源分配和回收。

3. 磁盘管理:管理磁盘的读写及空间分配。

4. 文件管理:提供文件的创建、打开、读取、写入、删除等功能。

5. 输入输出管理:管理用户与计算机的输入输出接口。

6. 网络支持:支持计算机通过网络与其他计算机进行通信。

7. 用户界面:提供图形或命令行界面,便于用户与操作系统交互。

以上功能构成了现代操作系统的基本框架。

## 2. CS162 Lecture 2: Four Fundamental OS Concepts

### 2.1 进程

进程是操作系统进行资源分配和调度的基本单元。进程具有以下特征:

1. 进程是程序的一次执行过程,是CPU调度和执行的基本单位。

2. 每个进程都有自己独立的内存空间,互不影响。

3. 与其他进程相对独立,运行于不同时间片,彼此隔离。

4. 进程有运行、等待和结束的状态变化过程。

### 2.2 内存管理

操作系统需要管理计算机中的内存资源,主要功能包括:

1. 物理内存的分配:操作系统在系统启动时确定内存布局,对可用内存进行划分和分配。

2. 虚拟内存的概念:每个进程内部看到的内存表现为一片连续空间,但实际上物理上可能是非连续的。

3. 页面置换:当内存不足时,操作系统可以将部分内存页写入磁盘或交换区,腾出内存供其他进程使用。

4. 缺页异常:进程访问未在内存中的页面时触发缺页异常,需要操作系统找回缺失的页面。

### 2.3 通信与同步

进程间通信和同步机制保证进程间资源共享和有序访问:

1. 同步原语:信号量、互斥锁等原语控制对共享资源的访问顺序。

2. 消息传递:进程间通过消息对列实现无阻塞的同步通信。

3. 共享内存:多个进程可以同时读写的共享存储区域实现进程间通信。

### 2.4 通用操作系统结构

层次结构模型:内核空间和用户空间明确划分职责,简化内核,提高可靠性。

## 3. CS162 Lecture 3: Abstractions 1: Threads and Processes

### 3.1 线程

线程是操作系统可以调度的最小单元,与进程相比更小。

- 线程共享进程的资源,如内存地址空间、打开的文件描述符等。

- 线程之间上下文切换开销小,并发性能好。

- 多线程程序同时执行多个任务,协调能力强。

### 3.2 进程

进程是资源分配的基本单位。

- 进程有独立的内存空间,相互独立不受互相影响。

- 进程间上下文切换开销大,但容错能力强,一个进程挂掉不影响其他进程。

- 操作系统用进程提供隔离性能善后能力。

### 3.3 线程与进程的关系

- 一个进程至少有一个线程,也可以有多个线程。

- 线程是轻量级进程,进程是重量级线程。

- 多线程运行在同一进程中实现并发任务,不同进程互不影响运行不同任务。

- 线程 libraries允许在进程空间中安全创建和同步多个轻量级线程对象。

以上是线程和进程两个重要的操作系统抽象概念的比较。

## 4. CS162 Lecture 4: Abstractions 2: Files and I/O

### 4.1 文件

- 文件是一个可以存储数据的逻辑对象,由文件系统提供访问接口。

- 文件以持久的方式存储在磁盘等设备上供后续访问。

- 文件由文件描述符唯一标识,描述符包含文件名和文件位置信息。

### 4.2 文件I/O

- 同步I/O:进程在读写文件过程中会阻塞,等待I/O操作完成后继续执行。

- 异步I/O:进程在读写文件时会立即返回,之后会被唤醒执行回调函数完成I/O操作。

- 缓冲I/O:操作系统内核会维护缓冲区提高I/O效率,改善阻塞影响。

- 零拷贝I/O:懒加载文件,进程直接访问缓冲中数据而非发起多余拷贝操作。

- 非阻塞I/O:进程在读写文件时不会阻塞,即使I/O未完成也可以继续执行其他任务。

以上为操作系统最重要的I/O抽象概念。

## 5. CS162 Lecture 5: Abstractions 3: IPC, Pipes and Sockets

### 5.1 进程间通信

进程间通信(IPC)是操作系统实现不同进程间信息交换的重要机制。

- Pipe:匿名管道,提供一对一的通信服务。

- 消息队列:多进程之间的共享通信缓冲区,实现临时的一对一或一对多通信。

- 信号:事件通知机制,一个进程可以向另一个进程发送信号。

- 内存映射文件:多个进程可以共享一段内存区域实现通信。

- 域套接字:特定应用程序间的网络通信协议。

### 5.2 套接字

- 套接字是IPC的通用抽象,提供面向连接或无连接的双向数据流通路。

- 套接字address包括IP地址和端口号,标识网络节点。

- 套接字接口允许进程间在同一主机或网络间通信。

- TCP套接字提供面向连接的可靠字节流服务。UDP套接字基于无连接的传输。

- 套接字还支持各种传统IPC如管道和命名管道通信。

以上通信机制构成操作系统核心的IPC概念体系。

## 6. CS162: Lecture 6: Synchronization 1: Concurrency and Mutual Exclusion

### 6.1 并发与并行

- 并发是指在同一时期,多个进程在共享资源上竞争,或者通过时间分割进行。

- 并行是指在同一时期,多个处理单元完全独立运行,不竞争资源。

### 6.2 同步问题

由于共享资源的竞争导致的问题:

- 死循环:两个互相等待的进程导致系统停滞不前。

- 饥饿:低优先级进程长期不能获得资源进行工作。

- 无序访问:破坏预期的顺序对资源进行访问。

### 6.3 互斥的概念

- 互斥指在同一时刻只允许一个 processo对共享资源进行访问。

- 互斥机制通过同步原语如锁或信号量实现不同进程对共享资源的互斥访问。

- 进出间隙:加锁释放间隙,可能会导致不一致或脏读问题。

以上内容介绍了并发与并行的概念,同时阐述了同步问题及互斥机制。

## 7. CS162: Lecture 6.5: Concurrency and Mutual Exclusion (Supplemental)

### 7.1 临界区

- 临界区(Critical Section)定义为访问共享资源的代码区域。

- 多个进程需要共享访问临界区中的资源时,需要互斥机制防止冲突。

### 7.2 可重入锁

- 可重入锁(Reentrant Lock)允许线程再次获取已经由它自身持有的锁。

- 这种锁适用于需要递归调用的情况,比如树形结构遍历时需要多次重复访问临界区。

### 7.3 死锁

- 死锁是多个进程互相等待对方释放资源而永远无法推进的情况。

- 死锁可能发生的必要条件:互斥占用、不可抢占、资源剩余性、环路等待。

- 避免产生环路等待关系和资源紧张状态可以降低死锁风险。

### 7.4 生产者-消费者问题

- 生产者 consumer问题是经典的同步问题,涉及缓冲区的同步机制。

- 通常使用条件变量技术来协调生产者和消费者在缓冲区上等待的时间点。

以上内容补充介绍了临界区、可重入锁、死锁和生产者-消费者问题等同步机制细节。

## 8. CS162 Lecture 7: Synchronization 2: Semaphores (Con't), Lock Implementation, Atomic Instructions

### 8.1 信号量

- 信号量是一个计数器,用于对共享资源进行访问控制。

- P操作将信号量减1,如果为0则进程阻塞;V操作将信号量加1,唤醒等待的进程。

- 信号量可以实现锁、生产者消费者等同步机制。

### 8.2 锁实现

操作系统内核实现锁主要有:

- 抢占锁:基于Test-and-Set指令实现,效率高但不能做更复杂同步。

- 自旋锁:检测锁状态进行尝试获取,失败则自旋等待完成。

- 暂停锁:获取失败进程被阻塞,避免浪费CPU资源。

### 8.3 原子操作

如Test-and-Set、交换指令等原子操作,能保证访问共享资源的一致性:

- 操作系统会将它们翻译成一整套硬件指令序列完成。

- 允许同步机制安全高效地实现互斥访问共享数据。

以上内容介绍了信号量、锁实现以及原子操作指令在同步机制中的应用。

## 9. CS162 Lecture 8: Synchronization 3: Atomic Instructions (Con't), Monitors, Readers/Writers

### 9.1 原子指令

- 原子指令通过硬件在单条指令中完成原子操作,避免竞争条件发生。

- Test-and-Set、交换指令、比较交换指令CAS等都是常见的原子指令。

### 9.2 监视器

- 监视器是一种高级的同步机制,将一组相关操作的同步封装在一起。

- 避免了复杂的锁实现,简化同步编程。

### 9.3 读写锁

- 读写锁允许多个读线程同时访问资源,但任意时刻只允许一个写线程访问。

- 提高了系统吞吐量,读线程无需等待写线程结束。

- 写锁需要更高优先级,确保任意时刻都不会有两个写线程同时运行。

以上内容继续介绍了原子指令的细节,以及监视器和读写锁这两种高级同步机制。

## 10. CS162 Lecture 9: Synchronization 4: Monitors and Readers/Writers (Con't), Process Structure

### 10.1 监视器实现

监视器通过以下方式实现:

- 使用对象的所有权指定锁定对象
- 提供只允许在持有锁定对象时访问的条件等待集合
- 进入和离开监视器的方法作为同步语义

### 10.2 读写锁实现

读写锁通常使用下面方法实现:

- 读锁为非阻塞锁,允许 readers 共享
- 写锁为阻塞锁,互斥不同 writers
- 读者优先,但不能阻塞 writer 太长时间

### 10.3 进程结构

现代操作系统进程通常包括:

- 文本段:机器代码和静态数据
- 数据段:运行时动态数据
- 栈段:函数调用栈帧  
- 堆段:进程动态申请的内存
- 文件描述表:打开的文件信息
- I/O状态:文件指针等
- 信号处理器:进程信号处理集

这保证了进程资源隔离且高效管理。

## 11. CS162 Lecture 10: Scheduling 1: Concepts and Classic Policies

### 11.1 调度概念

进程调度是操作系统核心功能之一,主要作用是:

- 有效利用计算资源
- 根据优先级公平分配CPU时间片
- 提高系统响应速度和吞吐量

### 11.2 先来先服务

- 简单高效的非抢占式调度算法
- 新到达的任务先处理,当前任务运行完再执行下一个
- 缺点是长作业会挡住其他短作业

### 11.3 短作业优先

- 抢占式算法,任务执行时间越短优先级越高  
- 解决先来先服务算法资源不公问题
- 但对长作业响应时间难控制

### 11.4 动程优先

- 结合任务属性优先级和响应时间要求
- I/O等待和CPU运行时分别考虑urgency(紧迫程度)
- 既保证公平又兼顾系统性能

以上是操作系统经典的进程调度算法概述。

## 12. CS162 Lecture 11: Scheduling 2: Case Studies, Real Time, and Forward Progress

### 12.1 实时调度

- 针对实时任务领域,需要保证时限约束
- 例如先优先完成时限临近的任务
- Rate Monotonic 算法根据任务周期优先级定义

### 12.2 Linux 调度

- 基于优先级抢占CFS算法调度用户进程
- realtime类任务获得更高优先级
- sys瓶颈服务器约束资源分配

### 12.3 Windows 调度

- 分时都软件与硬件调度区分责任
- 有Missed Quantum概念描述这种关系
- 考虑公平性、挂起与响应时间

### 12.4 前向进展

- 保证每个进程可以被分配足够多的时间,避免无限期饥饿状态
- 实时操作系统理论处理重要时实际进展问题

以上总结了实时调度、Linux和Windows系统实例以及一个重要概念。

## 13. CS162 Lecture 12: Scheduling 3: Deadlock

### 13.1 死锁概念

死锁是多个进程由于竞争资源而陷入互相等待的阻塞状态,导致系统处于停滞不前的情况。

### 13.2 死锁必要条件

- 互斥条件:一个资源每次只能由一个进程占有
- 不可剥夺条件:进程已经获得的资源在未使用完之前无法强行剥夺
- 循环等待条件:存在一个或者多个进程形成一个头尾相接的循环依赖关系
- 资源饥饿条件:发生死锁所需的资源数量总量不足

### 13.3 死锁预防

- 资源分配限制
- 资源请求顺序
- 资源抢占
- 资源释放

### 13.4 死锁检测和恢复

通过建立进程等待图来检测系统是否已经形成环路等待结构。一旦检测到死锁,需要恢复系统运行状态。

## 14. CS162 Lecture 13: Memory 1: Address Translation and Virtual Memory

### 14.1 内存管理单元

内存管理单元负责维护进程虚拟地址与物理地址间的映射关系。

### 14.2 虚拟地址转换物理地址

通过页表和段表完成三级地址转换:

- 虚拟地址→段表偏移→线性地址
- 线性地址→页表偏移→物理地址

保证每个进程看到的地址均为连续的虚拟地址空间。

### 14.3 虚拟内存

利用虚拟内存技术,每个进程看到的内存空间大于实际物理内存容量。

页表项标记页FRAME号,缺页异常发生时触发换页。动态分配和回收物理页框实现内存和磁盘间的交换。

以上实现了内存管理的基本概念和地址转换机制,利用虚拟内存隐藏内存限制。

## 15. CS162 Lecture 14: Memory 2: Virtual Memory (Con't), Caching and TLBs

### 15.1 页面置换算法

治理内存和页面交换的算法:

- 最近最少使用(LRU):最久未使用的页面置换
- 第一未使用(FIFO):先进先出顺序置换
- 时钟(CLOCK):页面链表模拟LRU时钟替换算法

### 15.2 缓存

- CPU内核和外围设备之间添加缓存提高性能
- 读缓存用于加速连续读取,写缓冲用于顺序写入
- 缓存行填写整块数据作为基本访问单位

### 15.3 平翼查找(TLB)

- 硬件加速虚拟到物理地址转换
- 类似CPU内核的高速缓存,存储了部分最近转换的虚拟页与物理页映射
- 减少加权操作提高访问效率

以上内容系统介绍了虚拟内存的页面置换算法和内存访问优化策略。

## 16. CS162 Lecture 15: Memory 3: Caching and TLBs (Con't), Demand Paging

### 16.1 缓存置换

常见缓存替换算法:

- LRU:最近最少使用
- FIFO:先进先出
- 随机替换

### 16.2 块混叠

多个虚拟页面映射到同一物理页面的情况。

采用填写和写单独标志位可以实现正确访问。

### 16.3 需求分页

仅在访问到页内容时才装入对应的物理页面:

- 减少内存空间浪费
- 提高缺页率,但降低平均访问时间
- Linux实现需求加载的mmap系统调用

### 16.4 预读

 predicting future references,提前读取可能使用的页面到内存中

- 提高缺页率但减少总访问时间
- 需要考虑很多因素如Spatial、Temporal locality

总结了高速缓存和TLB的细节,以及页面访问和置换的需求分页机制。

## 17. CS162 Lecture 16: Memory 4: Demand Paging Policies

### 17.1 全负分页

在页面访问时负责将其装入内存,产生缺页中断调用系统内核进行管理。

### 17.2 前 sowie分页

在用户态加载空闲页框到内存池中,当访问产生缺页时直接从内存池中获取而不是产生中断。

### 17.3 带写和不带写分页

带写分页在访问时判断页修改位,决定是否需要将页面写回到磁盘。

不带写分页不考虑页修改,所以需要定期写回页面。

### 17.4 先进先出(FIFO)置换

根据页面最近使用顺序置换最老页面到磁盘swap区。

### 17.5 时钟分页置换

用链表表示页面,指针指向下一个被替换的页面。每次页面被访问则将其从置换链表中移除。

以上总结了经典的需求分页管理策略。

## 18. CS162 Lecture 17: Demand Paging (Finished), General I/O, Storage Devices

### 18.1 需求分页总结

需求分页实现虚拟内存,在页面被访问时刻才将其加载到物理内存中。能有效使用尚未访问到的空闲内存空间。

### 18.2 常规I/O

操作系统管理I/O设备的方式:

- 同步I/O:进程在I/O完成前阻塞
- 异步I/O:发起I/O后立即返回,通过回调函数通知完成

### 18.3 磁盘结构

硬盘存储介质包括:记数器、扇区、柱面和磁头。

顺序读写速度快,但随机读写需要磁头 seeking 浪费时间。

### 18.4 闪存

与硬盘相比,闪存读写速度更快,启动时间短,消耗电量低。但成本高,容量小。

以上总结了虚拟内存主要机制及常见I/O设备的结构特点与管理方法。

## 19. CS162 Lecture 18: General I/O (Con't), Storage Devices, Performance

### 19.1 I/O系统调用

常用I/O系统调用:

- read()/write(): 从文件读取/写入数据
- open()/close(): 打开或关闭文件
- lseek(): 设置文件读取指针位置

### 19.2 RAID

RAID(磁盘阵列)技术通过组合多个磁盘来提升性能和可靠性:

- RAID0:分页 stripes 提高读写速度
- RAID1:磁盘镜像提供数据冗余
- RAID5:分布式奇偶校验降低冗余存储空间

### 19.3 磁盘调度

智能请求排队和服务可以减少寻道时间,提高吞吐量,典型算法包括:

- SSTF:最小寻道 premiers
- C-LOOK:考虑缓存局部性服务近距离请求顺序

### 19.4 磁盘性能评估

常见指标:seek time、 rotational latency、transfer rate等。
IOPS更好评价寻道和随机访问性能。

总结了常用I/O系统调用、RAID技术以及磁盘调度算法提高存储性能。

## 20. CS162 Lecture 19: Filesystems 1: Performance (Con't), Queueing Theory, Filesystem Design

### 20.1 队列理论

用来评估设备性能和吞吐量,常用模型:

- M/M/1 模型:申请率和服务率都符合泊松分布
- M/G/1 模型:申请率泊松,服务率一般分布

### 20.2 文件系统设计目标

- 高效管理文件和目录
- 实现访问控制和共享
- 高性能访问
- 扩展支持不同存储设备
- 兼容不同操作系统

### 20.3 文件组织

常见方式:

- 顺序组织:按顺序在磁盘写入文件
- 索引组织:建立索引表定位文件位置
- 对象存储:根据文件唯一ID在key-value存储

### 20.4 元数据管理

使用i节点表跟踪文件属性和位置,目录树管理文件层级关系。

以上总结了评估磁盘队列性能的方法,文件系统设计原则以及基本文件组织结构。

## 21. CS162 Lecture 20: Filesystems 2: Filesystem Design (Con't), Filesystem Case Studies

### 21.1 常见文件系统设计

- UFS:UNIX文件系统,使用inode建立文件与存储位置映射

- NTFS:Windows文件系统,引入安全列表控制访问

- EXT2/3/4:Linux文件系统,筛选设计扩展功能

### 21.2 分布式文件系统

- NFS:支持多台客户端通过RPC访问共享存储

- Ceph:对象存储设计,MD5映射+对象切块提高扩展性

### 21.3 日志结构设计

使用日志记录元数据变更,实现快速恢复和防止文件系统损坏。

### 21.4 内存文件系统

在内存中构建文件系统,避免磁盘I/O提高小文件访问性能。

以上总结常见本地和分布式文件系统设计技术。日志机制和内存优化也是设计重点。

## 22. CS162 Lecture 21: Filesystems 3: Case Studies (Con't), Buffering, Reliability, and Transactions

### 22.1 内存缓冲

使用页缓冲技术加速小文件访问,减少磁盘I/O操作。

### 22.2 文件系统一致性

日志恢复结构和事务处理保证文件系统结构和数据的一致性。

### 22.3 容错机制

RAID技术提供冗余存储保证存储可靠性。定期检查和修复也是重要手段。

### 22.4 事务处理

结合日志实现原子操作,失败时回滚保证数据一致性。常见过程包括准备、提交等阶段。

### 22.5 多版本并发控制(MVCC)

支持并发事务通过版本号控制隔离操作,避免锁定导致的性能损失。

总结了文件系统设计中重要的缓冲技术、容错机制以及事务处理保证数据可靠性的方法。

## 23. CS162 Lecture 22: Transactions (Con't), End-to-End Arguments, Distributed Decision Making

### 23.1 事务ACID特性

- 原子性(Atomicity):事务的所有操作同时成功或同时失败
- 一致性(Consistency):事务前后数据状态一致
- 隔离性(Isolation):多个并发事务相互隔离
- 持久性(Durability):事务完成后数据确认持久保存

### 23.2 数据库隔离级别

- 串行化(Serializable)
- 可重复读(Repeatable Read)
- 读提交(Read Committed)
- 脏读(Dirty Read)

### 23.3 分布式一致性协议

- 2PC:两阶段提交确认事务
- Paxos:多数决一致性协议保证分布式系统容错

### 23.4 分布式文件系统数据一致性

元数据管理、复制技术方案保证数据在分布式系统中的强一致性。

以上总结了事务管理的重要特性和隔离级别,常见分布式一致性协议。

## 24. CS162 Lecture 23: Distributed Decision Making (Con't), Networking and TCP/IP

### 24.1 分布式决策

- 演化一致性:通过迭代迭代演进达成一致
- 投票:多数决定最终结果
- 诱导一致性:使用诱导使节点自行一致

### 24.2 网络模型

- OSI七层参考模型:物理、数据链路、网络、运输、会话、表示、应用层
- TCP/IP四层模型:物理、网络接入、运输、应用层

### 24.3 TCP/IP

- IP:Internet层 protocol,提供源与目的地址路由
- TCP:传输层协议,提供可靠数据传输与流控制
- UDP:不可靠数据报传输协议

### 24.4 网络地址转换(NAT)

私有IP与公用IP之间实现地址转换,通过NAT设备共享互联网连接。

### 24.5 路由协议

OSPF和BGP管理组网路由信息交换实现包转发。

总结了分布式系统一致决定方法与网络协议参考架构及关键协议工作原理。

## 25. CS162 Lecture 24: Networking and TCP/IP (Con't), RPC, Distributed File Systems

### 25.1 RPC机制

远程过程调用传输调用接口、参数和返回值实现远程调用。

### 25.2 NFS

基于RPC实现POSIX兼容的跨主机文件访问协议。支持数据缓存及复制。

### 25.3 HDFS

海量数据存储系统,主要特点:

- BLOCK作为基本存储单位
- NameNode管理数据块映射关系
- DataNode存储数据块内容

### 25.4 Ceph

为对象、块和文件提供一致性访问服务:

- 对象存储基于MD5映射+对象切块
- 分布式Metadata管理提供扩展性
- 自动数据复制和恢复提供容错

### 25.5 分布式锁

使用lease机制实现分布式系统锁的获取和释放。

总结常见RPC、分布式文件系统及分布式锁实现原理。

## 26. CS162 Lecture 25: Distributed Storage, NFS and AFS, Key Value Stores

### 26.1 分布式存储系统

主要目标是存储数据的高可用和容错。

### 26.2 NFS

基于RPC实现的POSIX兼容远程文件访问协议。

### 26.3 AFS

借助kerberos认证和缓存实现安全的分布式文件系统。

### 26.4 key-value存储

以(key,value)对形式对数据进行存储与访问:

- Redis:内存数据库支持不同数据结构
- HBase:BigTable的数据模型在HDFS上实现
- DynamoDB:亚马逊的NoSQL数据库

### 26.5 分布式一致性协议

Paxos算法通过选主选举和动态转变保证一致性。Raft采用日志共享方式稳定性更好。

总结了分布式存储的目标和主流文件系统与基于key-value的NoSQL数据库。

## 27. CS162 Lecture 26 (Optional): Key Value Stores (Con't), Chord, DataCapsules, Quantum Computing

### 27.1 K-V存储系统隔离

支持不同隔离级别的事务,如读已提交。

### 27.2 Chord分布式哈希表

每个节点负责维护部分key范围,通过层级指针实现对键的路由。

### 27.3 DataCapsules封装存储

把相关数据打包封装,支持ACID事务和数据库功能的分布式存储系统。

### 27.4 量子计算原理

运用量子位实现量子并行计算。

- 量子位基本单位
- 量子门操作量子位状态
- 量子纠缠现象
- 量子算法量子优势

为未来存储与计算机提供变革。

以上总结了K-V存储系统事务隔离,P2P系统Chord,封装存储DataCapsules概念,以及量子计算基本原理。