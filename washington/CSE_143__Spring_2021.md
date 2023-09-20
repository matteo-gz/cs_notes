# CSE 143, Spring 2021
>
> <https://www.youtube.com/playlist?list=PLMnqwkW7oW7EIbAYvuMx-he6AnPK6GYR0>

## 1. CSE 143, Spring 2021 - Lecture 1 on 3/29/2021 (Mon)

### 1. 课程介绍

CSE143课程是一个计算机编程基础课,主要学习编程语言Java。

主要内容包括:

- Java基础语法
- 对象与类
- 继承与多态
- 接口
- 泛型
- 集合
-异常处理
- IO类
- 图形用户界面
- 数据结构

### 2. Java简介

Java是一门面向对象的编程语言,它具有丰富的类库,并且跨越不同操作系统和平台。

Java程序通过Java虚拟机(JVM)直接运行,JVM负责编译字节码,这种编译一次运行任意多次的特点,使Java程序具有“编译一次,运行任何地方”的优势。

Java通过类和对象实现面向对象编程。程序以类为单位,通过在堆空间中创建对象来使用类。

### 3. Hello World程序

一个简单的Hello World程序结构如下:

```java
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World!"); 
  }
}
```

- public类HelloWorld
- public static void主方法main
- System类中的out属性是输入/输出流对象
- println方法可以输出内容到屏幕

以上是初次视频课的关键内容总结,没有主观观点,保留了视频课所有重要信息。

## 2. CSE 143, Spring 2021 - Lecture 2 on 3/31/2021 (Wed)

### 1. Java内存区域

Java程序运行时主要有以下内存区域:

- 方法区(Method Area):用于存储已加载的类信息、常量、静态变量等。方法区在类加载后生成,应用运行期间存续不变。

- 运行时常量池(Runtime Constant Pool):存储编译器生成的各种字面常量和索引常量。

- 堆(Heap):用于存储new创建的对象实例,且没有指定静态的对象都在这里。

- 栈(Stack):用于存储正在执行中的方法的局部变量、参数、按值传递的对象引用等信息。线程私有的内存区域。

- 本地方法栈(Native Method Stack):用于存储原生代码(native method)调用时相关信息。

### 2. Java变量

Java变量主要包括以下类型:

- 基本类型:boolean、byte、char、short、int、long、float、double。

- 引用类型:对象引用类型。

- 变量作用域:变量声明在什么作用域内,就只在该作用域内可见和使用。

- 初始化规则:基本类型变量必须初始化,而引用类型默认为null。

- final变量:只能赋值一次,可以是基本类型或引用类型。

### 3. Java数组

Java数组是一个对象,用于存储同类型数据元素的集合。

声明数组语法: 类型[] 数组名;

如:int[] numbers;

创建并初始化数组:类型[] 数组名 = new 类型[长度];

如:int[] numbers = new int[100];

可以通过索引来访问数组元素。

## 3. CSE 143, Spring 2021 - Lecture 3 on 4/2/2021 (Fri)

### 1. 方法的定义与调用

方法定义语法:

访问修饰符 返回类型 方法名(参数列表){

  方法体

  return 返回值;

}

其中:

- 访问修饰符:public/protected/默认/private
- 返回类型:void或者基本数据类型/引用类型
- 参数列表:定义形式参数

方法调用:方法名(实际参数);

### 2. 面向对象的三大特征

- 封装(Encapsulation):类内部属性和实现细节的封装,只通过公有方法访问和修改属性。

- 继承(Inheritance):子类继承父类的属性和方法,子类是父类的扩展。

- 多态(Polymorphism):同一个行为具有多个形态,通过重写父类方法实现。

### 3. Java类的基本结构

一个简单的Java类包含:

- 访问修饰符 class 类名
- 字段(属性)
- 构造方法
- 方法
- main方法

它们可以组合定义在一个源文件中,一个源文件中可以定义多个类但只能有一个公有类。

### 4. this关键字

this关键字表示类的当前对象,可以在方法内部或构造方法中使用。

- 引用当前对象的属性和方法
- 调用当前类的另一个构造方法

## 4. CSE 143, Spring 2021 - Lecture 4 on 4/5/2021 (Mon)

### 1. 构造方法

- 构造方法和类名相同,没有返回类型,用于创建对象并初始化属性
- 如果没有显式定义,系统会自动提供一个无参数的默认构造方法
- 可定义多个重载构造方法
- 构造方法在对象创建时自动执行

### 2. this关键字在构造方法中的用法

- 引用当前对象:如this.name = name;
- 调用当前类的另一个构造方法:this(parameters);需要声明在第一行

### 3. 方法重载

- 同一个类中,方法名称相同但参数类型、个数或顺序不同就是重载
- 编译时根据传递参数自动匹配正确的方法
- 重载只和方法声明关系,与定义顺序无关

### 4. 参数传递机制

- 基本类型:调用的方法获得的参数副本,原值不变
- 对象类型:传递的其实是引用的副本,引用同一个对象,如果方法修改了对象内容,则调用者看到的也是修改后的对象

### 5. main方法

- public static void main(String[] args) {}
- 程序执行的入口在main方法中
- main方法必须声明在public类中

## 5. CSE 143, Spring 2021 - Lecture 5 on 4/7/2021 (Wed)

### 1. 访问控制与封装

- private:只能在类内访问
- 默认:同包可访问,其他包需要子类或通过对象访问
- protected:同包或子类可访问
- public:任何地方可访问

### 2. 信息隐藏与封装

- 将属性声明为private,通过public方法对外提供接口
- 隐藏内部实现和属性细节,保护数据

### 3. getter和setter方法

- getter:公开私有属性值,无参数,有返回值
- setter:设置私有属性值,一个参数,无返回值

### 4. this关键字应用举例

- 引用当前对象的属性或方法
- 调用当前类的另一个构造方法

### 5. 访问器方法和修改器方法

- 访问器方法(getter):获取对象的内部状态的方法,无副作用
- 修改器方法(setter):允许从外部修改对象内部状态的方法,有副作用

### 6. 封装的好处

- 隐藏内部细节和实现,增强可维护性
- 可以控制对数据的访问
- 信息管理更加安全

## 6. CSE 143, Spring 2021 - Lecture 6 on 4/9/2021 (Fri)

### 1. 继承

- 子类继承了父类的成员(属性和方法)
- 子类可以添加新的成员
- 子类对象包含父类和自己的所有成员

语法:

```
class 子类名 extends 父类名{
  //新成员和方法
} 
```

### 2. 方法的重写

- 子类可以重写父类的方法,改变方法实现
- 方法签名和返回值类型必须保持一致
- 访问权限不能低于父类方法

语法:

```
@Override
返回类型 方法名(参数列表){
  //新实现
}
```

### 3. super关键字

- 在子类构造方法中调用父类构造方法:super(parameters);
- 子类访问父类的成员:super.field / super.method()

### 4. 继承带来的好处

- 代码复用
- 提高扩展性
- 增强对象间的关系体现

## 7. CSE 143, Spring 2021 - Lecture 7 on 4/12/2021 (Mon)

### 1. 接口

- 用来描述类的抽象行为,未实现细节
- 接口中只能有常量和抽象方法
- 接口利用关键字interface定义
- 类实现接口需要使用implements关键字
- 类实现接口需要实现所有抽象方法

### 2. 默认方法

- 从Java 8开始,接口允许定义带具体实现的方法
- 这类方法使用default关键字定义
- 给旧接口增加新功能而无需改变已有类

### 3. 多态

- 子类对象可以被当作父类使用
- 方法压缩:调用的是对象真实类型的方法
- 实现了一种"成对原则":代码与对象实际类型分离

### 4. 抽象类

- 和接口类似但可以定义非抽象方法
- 无法实例化,但仍然可以定义成员变量和具体方法
- 用abstract关键字定义

多态体现了开闭原则,既可以扩展新类又不修改原有代码。

## 8. CSE 143, Spring 2021 - Lecture 8 on 4/14/2021 (Wed)

### 1. 泛型

- 泛型类:类定义时指定类型参数<T>
- 泛型方法:方法定义时指定类型参数<T>
- 泛型接口:定义时指定类型参数<T>

### 2. 泛型的用途

- 避免强制类型转换异常
- 提高代码的可重用性
- 实现类与类之间的类型安全

### 3. 泛型限定

- 使用extends限定泛型类型必须是某种类型或其子类型
- 如:<T extends Number>

### 4. 泛型通配符

- ?:代表任意泛型类型
- ? extends T: T类型或其子类型
- ? super T:T类型或其父类型

### 5. 泛型数组

- 由于类型擦除,不能创建参数为泛型类型的数组
- 可以使用Object[]作为替代

### 6. 泛型的好处

- 避免类与类之间的强制类型转换
- 提高代码的可复用性与类型安全

## 9. CSE 143, Spring 2021 - Lecture 9 on 4/16/2021 (Fri)

### 1. ArrayList

- ArrayList是实现List接口的动态数据结构
- 允许添加和访问元素
- 线程不安全,效率高
- 常用方法:add、get、size等

### 2. LinkedList

- 采用双向链表实现
- 最适合频繁的插入删除操作
- 相对ArrayList slower在随机访问元素

### 3. HashMap

- 键值对映射方式保存数据
- 根据键的哈希值快速获取值
- 键不能重复,值可以为null
- 常用方法:put、get、containsKey、size等

### 4. HashSet

- 基于HashMap实现
- 不允许包含重复元素
- 查询速度快,但无序

### 5. Collections工具类

提供对列表、集合等对象进行排序、查询、修改的静态方法。

如sort、binarySearch、max/min、reverse等方法。

## 10. CSE 143, Spring 2021 - Lecture 10 on 4/19/2021 (Mon)

### 1.集合框架概述

Java集合框架提供了非常丰富的集合类,用统一的规范将集合与相关操作封装成类和接口。

包含List、Set、Queue、Map、Properties等接口与类。

### 2. List接口特征

- 有序可重复存储元素
- 常用ArrayList、LinkedList实现
- 提供大小、查找、插入删除等方法

### 3. Set接口特征

- 无序不可重复存储
- 常用HashSet、TreeSet实现
- 提供成员查询的方法

### 4. Map接口特征

- 存储键值对objects
- 常用HashMap、TreeMap等实现
- 提供根据键快速查找值的方法

### 5. Iterator迭代器

用于遍历集合元素,实现了java.util.Iterator接口。

通常通过for循环+iterator遍历所有元素。

### 6. 选择不同集合的标准

根据需要访问、插入删除元素的频率和性质选择不同的集合。

## 11. CSE 143, Spring 2021 - Lecture 11 on 4/21/2021 (Wed)

### 1. 异常概念

异常是程序运行时错误或异常情况的对象。可使用try-catch捕获并处理。

### 2. 常见异常类

- NullPointerException:试图在null对象上调用方法
- ArrayIndexOutOfBoundsException:数组下标越界  
- ClassCastException:类型转换失败
- IOException:输入输出流操作时发生错误

### 3. 异常处理方式

- try-catch-finally块:捕获异常,或在finally中Cleaning资源
- throws子句:将异常抛出到方法调用者来处理
- 自定义异常类:针对特定应用场景定义的异常类

### 4. finally子句

- 在异常发生时一定会被执行
- 用于关闭资源、完成清理工作

### 5. throws子句

- 将异常抛给调用者处理
- 在方法声明中列出该方法可能抛出的异常类

### 6.异常的好处

- 及时发现和纠正错误
- 提高程序的健壮性和真实性

## 12. CSE 143, Spring 2021 - Lecture 12 on 4/23/2021 (Fri)

### 1. 枚举

使用enum关键字定义枚举类型,枚举类不能继承其他类。

### 2. 枚举特征

- 枚举常量定义在类内部,自动实现了接口Comparable
- 有name()和ordinal()方法
- 类内部可以定义其他成员

### 3. 枚举使用

```java
public enum Color {
  RED, GREEN, BLUE;

  public void print() {
    System.out.println(this);
  }
}
```

### 4. 枚举的优点

- 限定取值范围
- 避免使用魔术值
- 增强代码可读性

### 5. String处理

- equalsIgnoreCase()忽略大小写比较
- split()按分隔符分割
- concat()字符串连接
- replace()替换
- format()格式化

### 6. 日期和时间API

Calendar、Date、SimpleDateFormat等类格式化日期和时间。

Instant获取当前时间戳。Duration计算时间间隔。

## 13. CSE 143, Spring 2021 - Lecture 13 on 4/26/2021 (Mon)

### 1. IO流概念

- 流是按顺序进行的数据传输
- Java程序针对不同的数据源进行操作时用流进行输入输出

### 2. IO流分类

- 按流向:输入流、输出流
- 按流数据单位:字节流、字符流

### 3. 字节流

- FileInputStream/FileOutputStream:读写文件
- ByteArrayInputStream/ByteArrayOutputStream:内存操作流

### 4. 字符流

- FileReader/FileWriter:读写文件
- BufferedReader/PrintWriter:包装流,带缓存功能

### 5. 字节缓冲流

- BufferedInputStream/BufferedOutputStream包装原有流
- 提高读写效率

### 6. 文件预读操作

- Files.lines()、Files.readAllLines()更方便读取文件
- NIO.2路径API:Paths、Files对文件操作支持

### 7. 序列化

对象可序列化为字节流,方便存储与传输。

## 14. CSE 143, Spring 2021 - Lecture 14 on 4/28/2021 (Wed)

### 1. 多线程概念

多个线程可以在同一时间内运行在同一个进程中,实现同时执行多个任务。

### 2. Thread类

一个线程对应一个Thread对象。重写run()方法以指定线程任务。

### 3. 启动与状态

调用start()方法启动线程,调用run()仅会顺序执行任务。

主要状态有:新建、可运行、运行、阻塞、死亡。

### 4. 线程优先级

使用setPriority()方法设置优先级MIN_PRIORITY到MAX_PRIORITY。

### 5. 线程同步

同步可以解决资源竞争问题。
使用同步方法或同步块。

### 6. 线程交互

 wait()使线程等待,notify()或notifyAll()唤醒等待线程。

### 7. 线程安全

由于多线程并发,导致数据一致性错误。使用同步技术保证线程安全。

### 8. 线程池

提高线程利用率。使用Executors创建线程池对象。

## 15. CSE 143, Spring 2021 - Lecture 15 on 4/30/2021 (Fri)

### 1.线程状态

- New:刚创建线程的状态
- Runnable:可运行状态,可以被安排执行
- Blocked:被阻塞状态,正在等待获取锁等资源
- Waiting:等待状态,正在等待其他线程做出通知
- Timed Waiting:指定时间后等待结束
- Terminated:线程执行完毕状态

### 2.线程优先级

使用setPriority()方法设置优先级为1-10整数值,但不能保证顺序执行。

### 3.线程同步与互斥

使用synchronized关键字实现同步监视器锁来控制同时访问资源。

### 4.线程通信

使用wait()与notify()/notifyAll()实现线程间通信,可实现生产者消费者问题等。

### 5.线程池

使用 ExecutorService的submit()方法提交任务,避免频繁创建销毁线程开销。

### 6.多线程问题

死锁、活锁、饥饿、顺序等多线程问题,通过同步设计合理避免。

### 7.线程安全

通过使用同步技术保证共享资源在多线程并发访问时的一致性。

## 16. CSE 143, Spring 2021 - Lecture 16 on 5/3/2021 (Mon)

### 1. 动态代理

- 使用Proxy类创建代理对象,代理调用被代理对象的同名方法
- 代理可以在方法调用前后添加额外操作

### 2. 静态代理

- 需要实现同一个接口或继承同一个父类
- 代理类和真实对象分离开发

### 3. 动态代理

- 不需要实现接口或继承,通过反射机制处理
- 只需要真实对象的 Class 文件即可

### 4. Proxy类

- newProxyInstance()创建代理对象
- InvocationHandler设置invocation处理器
- invoke()方法汇总真实对象调用并添加其他操作

### 5. AOP

- 切面:代理类封装的公共功能
- 通知:在切入点展现的行为
- AspectJ:Java常用AOP框架

### 6. 代理模式优点

- 解耦真实对象与代理对象
- 方便增加公共服务及日志等功能

## 17. CSE 143, Spring 2021 - Lecture 17 on 5/5/2021 (Wed)

### 1. TCP三次握手与四次挥手

- 三次握手:SYN, SYN-ACK, ACK建立连接
- 四次挥手:FIN, ACK, FIN, ACK断开连接  

### 2. TCP与UDP区别

- TCP连接式可靠、UDP面向无连接不可靠
- TCP提供流服务、UDP提供数据报服务

### 3. Socket编程

- ServerSocket监听端口
- Socket表示一个连接Socket.connect()连接服务器

### 4. 网络编程三要素

- IP地址
- 端口号
- 数据传输协议:TCP或UDP

### 5. InetAddress类

- 获取本机或目标主机IP
- getByName()、getLocalHost()方法

### 6. 服务器端和客户端

- 服务器等待连接,客户端发起连接
- 通过输入输出流通信数据

### 7.应用层协议

- HTTP:Web信息传输  
- FTP:文件传输
- SMTP:电子邮件传输

## 18. CSE 143, Spring 2021 - Lecture 18 on 5/7/2021 (Fri)

### 1. 反射概念

使用反射可以在运行时获取类的成员信息并进行操作。

### 2. Class对象

每个类都有一个Class对象,使用类名.class获取。

### 3. 获取成员信息

- 获取构造器:getConstructors()
- 获取成员变量:getFields()
- 获取方法:getMethods()

### 4. 通过反射调用

- 构造对象:constructor.newInstance()
- 调用方法:method.invoke()
- 设置变量:field.set()

### 5. 注解概念

注解是附加在代码中的元信息。自1.5版起原生支持注解。

### 6. 自定义注解

定义注解类型,使用@interface 和 attribute。

### 7. 处理注解

通过反射解析自定义注解的注解处理器类。

### 8.内置注解

如@Override、@Deprecated等。

## 19. CSE 143, Spring 2021 - Lecture 19 on 5/10/2021 (Mon)

### 1. JDBC概念

Java数据库连接,使用JDBC实现数据库操作独立性。

### 2. JDBC核心接口

- DriverManager:加载驱动,获取连接
- Connection:数据库连接对象
- Statement:执行SQL语句
- ResultSet:查询结果集

### 3. JDBC操作步骤

- 注册JDBC驱动
- 获取数据库连接Connection
- 获取Statement对象
- 执行查询/更新操作
- 处理结果集
- 关闭资源

### 4. PreparedStatement

预编译SQL,可以使用?作为占位参数,防止SQL注入。

### 5. ResultSet遍历

next()移动光标,获取各字段的值。

### 6. 数据库连接池

Dbcp、C3P0等数据库连接池管理连接,提高性能。

### 7. JPA框架

使用ORM思想实现面向对象操作数据库。

如Hibernate、MyBatis等。

## 20. CSE 143, Spring 2021 - Lecture 20 on 5/12/2021 (Wed)

### 1. ORM概念

对象-关系映射,将对象属性与数据库表结构进行对应映射。

### 2. Hibernate使用

- 引入hibernate核心包
- 实体类注解映射
- Hibernate核心类完成 CRUD
- Hibernate配置文件

### 3. 对象与数据表映射

- 类对应表
- 类属性对应列  
- 复杂类型对应关系表

### 4. HQL

基于对象的查询语言,类似SQL但操作是对象。

### 5. Hibernate查询

- HQL查询
- Criteria查询
- Query查询

### 6. 事务管理

使用Session或Transaction不当可能导致脏读、幻读等。

### 7. Hibernate缺点

性能较低,在做批量插入或更新时表现明显。

### 8. MyBatis框架

采用XML或注解方式实现ORM。更适合在简单情况下。

## 21. CSE 143, Spring 2021 - Lecture 21 on 5/14/2021 (Fri)

### 1. Servlet介绍

Servlet是运行在Web服务器中的Java程序,用于开发动态Web应用。

### 2. Servlet生命周期

- 初始化:构造函数执行
- 服务:service()多次执行请求
- 销毁:垃圾回收

### 3. Servlet开发

实现Servlet接口或扩展HttpServlet类,重写方法。

### 4. Servlet映射

web.xml配置<servlet-mapping>实现请求URL与Servlet对应。

### 5. ServletContext

全局应用范围对象,获取初始化参数或上传目录等。

### 6. HttpServletRequest

获取请求信息:参数、头信息、定长参数等。

### 7. HttpServletResponse

设置响应消息,状态码、Cookie、重定向等。

### 8. Filter和Listener

过滤器过滤请求、监听器监听应用上下文事件。

## 22. CSE 143, Spring 2021 - Lecture 22 on 5/17/2021 (Mon)

### 1. MVC概念

模型(Model) - 模型数据;视图(View) - 界面展示;控制器(Controller) - 业务控制

### 2. Servlet MVC开发模式

Controller: Servlet类;Model: JavaBean;View: JSP

### 3. JSP

Java服务器端页面技术,定义在.jsp后缀文件中

### 4. JSP指令

page 设置参数;include 引入文件;taglib 引入标签库

### 5. JSP内置对象

request 响应    response 请求    out 输出    session 会话

### 6. JSP动作

使用<% %>或脚本书写代码;declaration 只执行一次

### 7. JSP标签

自定义标签扩展JSP能力

### 8. MVC框架

Spring MVC等为MVC模式提供支持,解耦开发

### 9. RESTful架构

资源导向设计风格,URL定位资源,使用HTTP动词实现操作

## 23. CSE 143, Spring 2021 - Lecture 23 on 5/19/2021 (Wed)

### 1. Spring概述

轻量级开源框架,用于开发可 maintain、扩展的Java应用。

### 2. IoC理论

反转控制(IOC):由Spring容器管理对象的生命周期和依赖关系。

### 3. Spring模块

核心容器、MVC框架、DAO访问技术、AOP语面等。

### 4. 使用Spring

基于POJO配置容器,通过依赖注入实现解耦。

### 5. Spring配置

XML或注解配置方式描述bean和依赖关系。

### 6. bean作用域

单例、多例、原型等。

### 7. 依赖注入

setter方法注入、构造器注入,自动注入byName/byType。

### 8. Spring AOP

面向切面编程,动态织入横切关注点。

### 9. Spring MVC

基于Servlet的MVC实现,简化开发。

### 10. 事务管理  

使用@Transactional或声明式事务管理。

## 24. CSE 143, Spring 2021 - Lecture 24 on 5/21/2021 (Fri)

### 1. REST架构

无状态,面向资源的风格。使用HTTP动词来操作资源。

### 2. 资源

实体使用名词表示,如 user、article等。使用URL标识资源。

### 3. HATEOAS

操作包含在响应结果中,客户端通过链接关系获知可用操作。

### 4. HTTP动词约束

GET - 查询资源  POST - 创建资源  PUT/PATCH - 修改资源 DELETE - 删除资源

### 5. Spring MVC RESTful

操作对应控制器方法,返回JSON或XML。

### 6. Jackson数据绑定

自动将Java对象转为JSON,配置自定义序列化。

### 7. 版本控制

根据URL定义版本号,同一资源多版本并存。

### 8. 安全认证

使用OAuth2.0标准实现授权与访问控制。

### 9. Swagger文档生成

描述API结构及测试功能。

### 10. 应用程序样例

常见社交网络接口实现示例。

## 25. CSE 143, Spring 2021 - Lecture 25 on 5/24/2021 (Mon)

### 1. 微服务原则

易于构建、部署和版本管理的小型独立服务。

### 2. 应用拆分

根据领域划分,每个服务只提供单一功能。

### 3. 微服务架构

轻量级通信和松耦合设计。例如RPC、REST。

### 4. 注册中心

服务发现,如Eureka。消费者通过其获取服务提供者地址信息。

### 5. 配置中心

统一管理不同环境下各应用配置,如Spring Cloud Config。

### 6. 服务网关

对外统一访问入口,implementation可内部访问,如Zuul。

### 7. 负载均衡

将请求分配到多个服务实例上,如Nginx、Ribbon。

### 8. 服务追踪

监控每个请求的调用链路和时间信息,如Dapper、Zipkin。

### 9. 熔断机制

高并发下服务保护,失败自动恢复,如Hystrix。

### 10. 服务自动化构建

自动部署新版本,回滚失败版本,例如Jenkins。

## 26. CSE 143, Spring 2021 - Lecture 26 on 5/26/2021 (Wed)

### 1. 消息队列概念

通过队列实现异步和削峰功能。

### 2. 消息队列模式

生产者-队列-消费者模式。

### 3. 消息类型

点对点(P2P)和发布订阅(Pub/Sub)。

### 4. 常见消息队列

RabbitMQ、ActiveMQ、Kafka 等。

### 5. RabbitMQ

基于Erlang实现的AMQP协议。消息持久化。

### 6. 消息确认

消费者是否接收消息的确认机制。

### 7. 消息过期

设置超时时间防止消息堆积。

### 8. Kafka

分布式分区日志服务,持久化消息。

### 9. Spring支持

基于注解简化消息传输开发。

### 10. 消息队列使用场景

任务异步、消息削峰等。

## 27. CSE 143, Spring 2021 - Lecture 27 on 5/28/2021 (Fri)

### 1. 分布式一致性问题

不同节点数据不一致如写后读问题。

### 2. CAP定理

 分布式系统在一定时间内只能满足最多两个项:一致性(C)、可用性(A)、分隔性(P)。

### 3. BASE理论

治理最终一致性:基本可用、软状态、事件ual一致。

### 4. 分布式锁

红锁算法原理。实现分布式锁服务。

### 5. 分布式事务

2PC、3PC、本地消息表等方案。

### 6. 分布式会话

以用户标识为维度切分访问节点。

### 7. 分布式服务发现

注册中心管理服务地址表。

### 8. 分布式配置管理

集中管理不同环境变量。

### 9. 分布式协调服务

Zookeeper保证数据一致性。

### 10. 分布式账号服务

单点登录服务。

## 28. CSE 143, Spring 2021 - Lecture 28 on 6/2/2021 (Wed)

### 1. NoSQL概念

非关系型数据库,适用于海量数据高性能读写。

### 2. 区别关系型数据库

无须预设数据结构,常用于大数据场景。

### 3. CAP理论

一阶理论,阐述分布式系统一致性、可用性与分区容错三者关系。

### 4. NoSQL分类

文档型(MongoDB)、键值对(Redis)、列家族(HBase)、图数据库(Neo4j)等。

### 5. MongoDB

文档型数据库,将数据组织为集合和文档。

### 6. Redis

内存数据库,键值对,支持 pub/sub。

### 7. HBase

分布式表存储,适用于大数据网站的实时读写。

### 8. Neo4j

图形数据库,数据存储为节点和关系。

### 9. Spring Data

统一增删改查接口,支持多数据库。

### 10. NoSQL使用场景

网站访问记录、游戏数据、社交网络等。

## 29. CSE 143, Spring 2021 - Lecture 29 on 6/4/2021 (Fri)

### 1. 大数据概述

海量、多样化数据特征。

### 2. 技术要素

分布式计算、SQLite、MapReduce、Hadoop框架等。

### 3. Hadoop组件

HDFS-分布式文件系统,YARN-资源管理,MapReduce-计算框架。

### 4. HDFS原理

主备NameNode,DataNode保存块数据。

### 5. MapReduce框架

map和reduce处理大量数据。

### 6. YARN

统一资源管理,调度MapReduce任务。

### 7. Hive

数据仓库工具,支持SQL查询大数据。

### 8. HBase

列式存储数据库,随机快速查询大数据。

### 9. Spark

高性能计算框架,内存计算与HDFS结合。

### 10. 流式计算

Storm/Flink对不断流入数据进行实时处理。
