import{_ as l}from"./ValaxyMain.vue_vue_type_style_index_0_lang.t1twdxsu.js";import{f as n,a as i}from"./chunks/vue-router.BRVX3goZ.js";import{D as e,N as u,$ as a,Q as t,R as s,V as o,W as g,u as r,O as m}from"./framework.CXYGarVr.js";import"./app.BB2utaGP.js";import"./chunks/dayjs.luRsnflP.js";import"./chunks/vue-i18n.BG5xGR4q.js";import"./chunks/nprogress.D_IOsJtP.js";import"./chunks/pinia.Dy_Ta77g.js";import"./chunks/@vueuse/motion.DjOBw7pe.js";import"./YunComment.vue_vue_type_style_index_0_lang.O3QeYMJH.js";import"./index.TQnGKZgq.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.REEBqsfl.js";import"./post.3IY3I04o.js";const c=n("/posts/Java_Interview_Topics-JVM",(async l=>JSON.parse('{"title":"Java面试专题-虚拟机篇","description":"","frontmatter":{"cover":"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/wallhaven-yjk6ml_1920x1080.png","title":"Java面试专题-虚拟机篇","date":"2023-4-16 14:52:05","categories":"Java","tags":["JVM 内存结构","JVM 内存参数","JVM 垃圾回收","内存溢出","类加载","引用","finalize"],"top":120,"outline":"deep","excerpt_type":"html"},"headers":[{"level":2,"title":"1. JVM 内存结构","slug":"_1-jvm-内存结构","link":"#_1-jvm-内存结构","children":[]},{"level":2,"title":"2. JVM 内存参数","slug":"_2-jvm-内存参数","link":"#_2-jvm-内存参数","children":[]},{"level":2,"title":"3. JVM 垃圾回收","slug":"_3-jvm-垃圾回收","link":"#_3-jvm-垃圾回收","children":[]},{"level":2,"title":"4. 内存溢出","slug":"_4-内存溢出","link":"#_4-内存溢出","children":[]},{"level":2,"title":"5. 类加载","slug":"_5-类加载","link":"#_5-类加载","children":[]},{"level":2,"title":"6. 四种引用","slug":"_6-四种引用","link":"#_6-四种引用","children":[]},{"level":2,"title":"7. finalize","slug":"_7-finalize","link":"#_7-finalize","children":[]}],"relativePath":"pages/posts/Java_Interview_Topics-JVM.md","lastUpdated":null}')),{lazy:(l,n)=>l.name===n.name}),p={__name:"Java_Interview_Topics-JVM",setup(n,{expose:p}){var d;const{data:h}=c(),b=i(),v=Object.assign(b.meta.frontmatter||{},(null==(d=h.value)?void 0:d.frontmatter)||{});b.meta.frontmatter=v,e("pageData",h.value),e("valaxy:frontmatter",v),globalThis.$frontmatter=v;return p({frontmatter:{cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/wallhaven-yjk6ml_1920x1080.png",title:"Java面试专题-虚拟机篇",date:"2023-4-16 14:52:05",categories:"Java",tags:["JVM 内存结构","JVM 内存参数","JVM 垃圾回收","内存溢出","类加载","引用","finalize"],top:120,outline:"deep",excerpt_type:"html"}}),(n,i)=>{const e=l;return m(),u(e,{frontmatter:r(v)},{"main-content-md":a((()=>[i[0]||(i[0]=s("p",null,[g("参考视频："),s("a",{href:"https://www.bilibili.com/video/BV15b4y117RJ",target:"_blank",rel:"noreferrer"},"满神Java面试专题")],-1)),i[1]||(i[1]=s("p",null,"笔记的整体结构依据视频编写，并随着学习的深入补充了很多知识",-1)),o(" more "),i[2]||(i[2]=s("h2",{id:"_1-jvm-内存结构",tabindex:"-1"},[g("1. JVM 内存结构 "),s("a",{class:"header-anchor",href:"#_1-jvm-内存结构","aria-label":'Permalink to "1. JVM 内存结构"'},"​")],-1)),i[3]||(i[3]=s("p",null,[s("strong",null,"要求")],-1)),i[4]||(i[4]=s("ul",null,[s("li",null,"掌握 JVM 内存结构划分"),s("li",null,"尤其要知道方法区、永久代、元空间的关系")],-1)),i[5]||(i[5]=s("p",null,[s("strong",null,"结合一段 java 代码的执行理解内存划分")],-1)),i[6]||(i[6]=s("figure",null,[s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831165728217.png",alt:"image-20210831165728217",loading:"lazy",decoding:"async",class:"lazy"})],-1)),i[7]||(i[7]=s("ul",null,[s("li",null,"执行 javac 命令编译源代码为字节码"),s("li",null,[g("执行 java 命令 "),s("ol",null,[s("li",null,[g("创建 JVM，调用类加载子系统加载 class，将类的信息存入"),s("strong",null,"方法区")]),s("li",null,[g("创建 main 线程，使用的内存区域是 "),s("strong",null,"JVM 虚拟机栈"),g("，开始执行 main 方法代码")]),s("li",null,[g("如果遇到了未见过的类，会继续触发类加载过程，同样会存入"),s("strong",null,"方法区")]),s("li",null,[g("需要创建对象，会使用"),s("strong",null,"堆"),g("内存来存储对象")]),s("li",null,[g("不再使用的对象，会由"),s("strong",null,"垃圾回收器"),g("在内存不足时回收其内存")]),s("li",null,[g("调用方法时，方法内的局部变量、方法参数所使用的是 "),s("strong",null,"JVM 虚拟机栈"),g("中的栈帧内存")]),s("li",null,[g("调用方法时，先要到"),s("strong",null,"方法区"),g("获得到该方法的字节码指令，由"),s("strong",null,"解释器"),g("将字节码指令解释为机器码执行")]),s("li",null,[g("调用方法时，会将要执行的指令行号读到"),s("strong",null,"程序计数器"),g("，这样当发生了线程切换，恢复时就可以从中断的位置继续")]),s("li",null,[g("对于非 java 实现的方法调用，使用内存称为"),s("strong",null,"本地方法栈"),g("（见说明）")]),s("li",null,[g("对于热点方法调用，或者频繁的循环代码，由 "),s("strong",null,"JIT 即时编译器"),g("将这些代码编译成机器码缓存，提高执行性能")])])])],-1)),i[8]||(i[8]=s("p",null,"说明",-1)),i[9]||(i[9]=s("ul",null,[s("li",null,"加粗字体代表了 JVM 虚拟机组件"),s("li",null,"对于 Oracle 的 Hotspot 虚拟机实现，不区分虚拟机栈和本地方法栈")],-1)),i[10]||(i[10]=s("p",null,[s("strong",null,"会发生内存溢出的区域")],-1)),i[11]||(i[11]=s("ul",null,[s("li",null,"不会出现内存溢出的区域 – 程序计数器"),s("li",null,[g("出现 OutOfMemoryError 的情况 "),s("ul",null,[s("li",null,"堆内存耗尽 – 对象越来越多，又一直在使用，不能被垃圾回收"),s("li",null,"方法区内存耗尽 – 加载的类越来越多，很多框架都会在运行期间动态产生新的类"),s("li",null,"虚拟机栈累积 – 每个线程最多会占用 1 M 内存，线程个数越来越多，而又长时间运行不销毁时")])]),s("li",null,[g("出现 StackOverflowError 的区域 "),s("ul",null,[s("li",null,"JVM 虚拟机栈，原因有方法递归调用未正确结束、反序列化 json 时循环引用")])])],-1)),i[12]||(i[12]=s("p",null,[s("strong",null,"方法区、永久代、元空间")],-1)),i[13]||(i[13]=s("ul",null,[s("li",null,[s("strong",null,"方法区"),g("是 JVM 规范中定义的一块内存区域，用来存储类元数据、方法字节码、即时编译器需要的信息等")]),s("li",null,[s("strong",null,"永久代"),g("是 Hotspot 虚拟机对 JVM 规范的实现（1.8 之前）")]),s("li",null,[s("strong",null,"元空间"),g("是 Hotspot 虚拟机对 JVM 规范的另一种实现（1.8 以后），使用本地内存作为这些信息的存储空间")])],-1)),i[14]||(i[14]=s("figure",null,[s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831170457337.png",alt:"image-20210831170457337",loading:"lazy",decoding:"async",class:"lazy"})],-1)),i[15]||(i[15]=s("p",null,"从这张图学到三点",-1)),i[16]||(i[16]=s("ul",null,[s("li",null,"当第一次用到某个类是，由类加载器将 class 文件的类元信息读入，并存储于元空间"),s("li",null,"X，Y 的类元信息是存储于元空间中，无法直接访问"),s("li",null,"可以用 X.class，Y.class 间接访问类元信息，它们俩属于 java 对象，我们的代码中可以使用")],-1)),i[17]||(i[17]=s("figure",null,[s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831170512418.png",alt:"image-20210831170512418",loading:"lazy",decoding:"async",class:"lazy"})],-1)),i[18]||(i[18]=s("p",null,"从这张图可以学到",-1)),i[19]||(i[19]=s("ul",null,[s("li",null,[g("堆内存中：当一个"),s("strong",null,"类加载器对象"),g("，这个类加载器对象加载的所有"),s("strong",null,"类对象"),g("，这些类对象对应的所有"),s("strong",null,"实例对象"),g("都没人引用时，GC 时就会对它们占用的对内存进行释放")]),s("li",null,[g("元空间中：内存释放"),s("strong",null,"以类加载器为单位"),g("，当堆中类加载器内存释放时，对应的元空间中的类元信息也会释放")])],-1)),i[20]||(i[20]=s("h2",{id:"_2-jvm-内存参数",tabindex:"-1"},[g("2. JVM 内存参数 "),s("a",{class:"header-anchor",href:"#_2-jvm-内存参数","aria-label":'Permalink to "2. JVM 内存参数"'},"​")],-1)),i[21]||(i[21]=s("p",null,[s("strong",null,"要求")],-1)),i[22]||(i[22]=s("ul",null,[s("li",null,"熟悉常见的 JVM 参数，尤其和大小相关的")],-1)),i[23]||(i[23]=s("p",null,[s("strong",null,"堆内存，按大小设置")],-1)),i[24]||(i[24]=s("figure",null,[s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831173130717.png",alt:"image-20210831173130717",loading:"lazy",decoding:"async",class:"lazy"})],-1)),i[25]||(i[25]=s("p",null,"解释：",-1)),i[26]||(i[26]=s("ul",null,[s("li",null,"-Xms 最小堆内存（包括新生代和老年代）"),s("li",null,"-Xmx 最大对内存（包括新生代和老年代）"),s("li",null,"通常建议将 -Xms 与 -Xmx 设置为大小相等，即不需要保留内存，不需要从小到大增长，这样性能较好"),s("li",null,"-XX:NewSize 与 -XX:MaxNewSize 设置新生代的最小与最大值，但一般不建议设置，由 JVM 自己控制"),s("li",null,"-Xmn 设置新生代大小，相当于同时设置了 -XX:NewSize 与 -XX:MaxNewSize 并且取值相等"),s("li",null,"保留是指，一开始不会占用那么多内存，随着使用内存越来越多，会逐步使用这部分保留内存。下同")],-1)),i[27]||(i[27]=s("p",null,[s("strong",null,"堆内存，按比例设置")],-1)),i[28]||(i[28]=s("figure",null,[s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831173045700.png",alt:"image-20210831173045700",loading:"lazy",decoding:"async",class:"lazy"})],-1)),i[29]||(i[29]=s("p",null,"解释：",-1)),i[30]||(i[30]=s("ul",null,[s("li",null,"-XX:NewRatio=2:1 表示老年代占两份，新生代占一份"),s("li",null,"-XX:SurvivorRatio=4:1 表示新生代分成六份，伊甸园占四份，from 和 to 各占一份")],-1)),i[31]||(i[31]=s("p",null,[s("strong",null,"元空间内存设置")],-1)),i[32]||(i[32]=s("figure",null,[s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831173118634.png",alt:"image-20210831173118634",loading:"lazy",decoding:"async",class:"lazy"})],-1)),i[33]||(i[33]=s("p",null,"解释：",-1)),i[34]||(i[34]=s("ul",null,[s("li",null,"class space 存储类的基本信息，最大值受 -XX:CompressedClassSpaceSize 控制"),s("li",null,"non-class space 存储除类的基本信息以外的其它信息（如方法字节码、注解等）"),s("li",null,"class space 和 non-class space 总大小受 -XX:MaxMetaspaceSize 控制")],-1)),i[35]||(i[35]=s("p",null,"注意：",-1)),i[36]||(i[36]=s("ul",null,[s("li",null,"这里 -XX:CompressedClassSpaceSize 这段空间还与是否开启了指针压缩有关，这里暂不深入展开，可以简单认为指针压缩默认开启")],-1)),i[37]||(i[37]=s("p",null,[s("strong",null,"代码缓存内存设置")],-1)),i[38]||(i[38]=s("figure",null,[s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831173148816.png",alt:"image-20210831173148816",loading:"lazy",decoding:"async",class:"lazy"})],-1)),i[39]||(i[39]=s("p",null,"解释：",-1)),i[40]||(i[40]=s("ul",null,[s("li",null,"如果 -XX:ReservedCodeCacheSize < 240m，所有优化机器代码不加区分存在一起"),s("li",null,[g("否则，分成三个区域（图中笔误 mthod 拼写错误，少一个 e） "),s("ul",null,[s("li",null,"non-nmethods - JVM 自己用的代码"),s("li",null,"profiled nmethods - 部分优化的机器码"),s("li",null,"non-profiled nmethods - 完全优化的机器码")])])],-1)),i[41]||(i[41]=s("p",null,[s("strong",null,"线程内存设置")],-1)),i[42]||(i[42]=s("figure",null,[s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831173155481.png",alt:"image-20210831173155481",loading:"lazy",decoding:"async",class:"lazy"})],-1)),i[43]||(i[43]=s("blockquote",null,[s("p",null,[s("em",null,[s("strong",null,"官方参考文档")])]),s("ul",null,[s("li",null,[s("a",{href:"https://docs.oracle.com/en/java/javase/11/tools/java.html#GUID-3B1CE181-CD30-4178-9602-230B800D4FAE",target:"_blank",rel:"noreferrer"},"https://docs.oracle.com/en/java/javase/11/tools/java.html#GUID-3B1CE181-CD30-4178-9602-230B800D4FAE")])])],-1)),i[44]||(i[44]=s("h2",{id:"_3-jvm-垃圾回收",tabindex:"-1"},[g("3. JVM 垃圾回收 "),s("a",{class:"header-anchor",href:"#_3-jvm-垃圾回收","aria-label":'Permalink to "3. JVM 垃圾回收"'},"​")],-1)),i[45]||(i[45]=s("p",null,[s("strong",null,"要求")],-1)),i[46]||(i[46]=s("ul",null,[s("li",null,"掌握垃圾回收算法"),s("li",null,"掌握分代回收思想"),s("li",null,"理解三色标记及漏标处理"),s("li",null,"了解常见垃圾回收器")],-1)),i[47]||(i[47]=s("p",null,[s("strong",null,"三种垃圾回收算法")],-1)),i[48]||(i[48]=s("p",null,"标记清除法",-1)),i[49]||(i[49]=s("figure",null,[s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831211008162.png",alt:"image-20210831211008162",loading:"lazy",decoding:"async",class:"lazy"})],-1)),i[50]||(i[50]=s("p",null,"解释：",-1)),i[51]||(i[51]=s("ol",null,[s("li",null,"找到 GC Root 对象，即那些一定不会被回收的对象，如正执行方法内局部变量引用的对象、静态变量引用的对象"),s("li",null,"标记阶段：沿着 GC Root 对象的引用链找，直接或间接引用到的对象加上标记"),s("li",null,"清除阶段：释放未加标记的对象占用的内存")],-1)),i[52]||(i[52]=s("p",null,"要点：",-1)),i[53]||(i[53]=s("ul",null,[s("li",null,"标记速度与存活对象线性关系"),s("li",null,"清除速度与内存大小线性关系"),s("li",null,"缺点是会产生内存碎片")],-1)),i[54]||(i[54]=s("p",null,"标记整理法",-1)),i[55]||(i[55]=s("figure",null,[s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831211641241.png",alt:"image-20210831211641241",loading:"lazy",decoding:"async",class:"lazy"})],-1)),i[56]||(i[56]=s("p",null,"解释：",-1)),i[57]||(i[57]=s("ol",null,[s("li",null,"前面的标记阶段、清理阶段与标记清除法类似"),s("li",null,"多了一步整理的动作，将存活对象向一端移动，可以避免内存碎片产生")],-1)),i[58]||(i[58]=s("p",null,"特点：",-1)),i[59]||(i[59]=s("ul",null,[s("li",null,[s("p",null,"标记速度与存活对象线性关系")]),s("li",null,[s("p",null,"清除与整理速度与内存大小成线性关系")]),s("li",null,[s("p",null,"缺点是性能上较慢")])],-1)),i[60]||(i[60]=s("p",null,"标记复制法",-1)),i[61]||(i[61]=s("figure",null,[s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831212125813.png",alt:"image-20210831212125813",loading:"lazy",decoding:"async",class:"lazy"})],-1)),i[62]||(i[62]=s("p",null,"解释：",-1)),i[63]||(i[63]=s("ol",null,[s("li",null,"将整个内存分成两个大小相等的区域，from 和 to，其中 to 总是处于空闲，from 存储新创建的对象"),s("li",null,"标记阶段与前面的算法类似"),s("li",null,"在找出存活对象后，会将它们从 from 复制到 to 区域，复制的过程中自然完成了碎片整理"),s("li",null,"复制完成后，交换 from 和 to 的位置即可")],-1)),i[64]||(i[64]=s("p",null,"特点：",-1)),i[65]||(i[65]=s("ul",null,[s("li",null,"标记与复制速度与存活对象成线性关系"),s("li",null,"缺点是会占用成倍的空间")],-1)),i[66]||(i[66]=s("p",null,[s("strong",null,"GC 与分代回收算法")],-1)),i[67]||(i[67]=s("p",null,"GC 的目的在于实现无用对象内存自动释放，减少内存碎片、加快分配速度",-1)),i[68]||(i[68]=s("p",null,"GC 要点：",-1)),i[69]||(i[69]=s("ul",null,[s("li",null,[g("回收区域是"),s("strong",null,"堆内存"),g("，不包括虚拟机栈")]),s("li",null,[g("判断无用对象，使用"),s("strong",null,"可达性分析算法"),g("，"),s("strong",null,"三色标记法"),g("标记存活对象，回收未标记对象")]),s("li",null,[g("GC 具体的实现称为"),s("strong",null,"垃圾回收器")]),s("li",null,[g("GC 大都采用了"),s("strong",null,"分代回收思想"),s("ul",null,[s("li",null,"理论依据是大部分对象朝生夕灭，用完立刻就可以回收，另有少部分对象会长时间存活，每次很难回收"),s("li",null,[g("根据这两类对象的特性将回收区域分为"),s("strong",null,"新生代"),g("和"),s("strong",null,"老年代"),g("，新生代采用标记复制法、老年代一般采用标记整理法")])])]),s("li",null,[g("根据 GC 的规模可以分成 "),s("strong",null,"Minor GC"),g("，"),s("strong",null,"Mixed GC"),g("，"),s("strong",null,"Full GC")])],-1)),i[70]||(i[70]=s("p",null,[s("strong",null,"分代回收")],-1)),i[71]||(i[71]=s("ol",null,[s("li",null,"伊甸园 eden，最初对象都分配到这里，与幸存区 survivor（分成 from 和 to）合称新生代，")],-1)),i[72]||(i[72]=s("figure",null,[s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831213622704.png",alt:"image-20210831213622704",loading:"lazy",decoding:"async",class:"lazy"})],-1)),i[73]||(i[73]=s("ol",{start:"2"},[s("li",null,"当伊甸园内存不足，标记伊甸园与 from（现阶段没有）的存活对象")],-1)),i[74]||(i[74]=s("figure",null,[s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831213640110.png",alt:"image-20210831213640110",loading:"lazy",decoding:"async",class:"lazy"})],-1)),i[75]||(i[75]=s("ol",{start:"3"},[s("li",null,"将存活对象采用复制算法复制到 to 中，复制完毕后，伊甸园和 from 内存都得到释放")],-1)),i[76]||(i[76]=s("figure",null,[s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831213657861.png",alt:"image-20210831213657861",loading:"lazy",decoding:"async",class:"lazy"})],-1)),i[77]||(i[77]=s("ol",{start:"4"},[s("li",null,"将 from 和 to 交换位置")],-1)),i[78]||(i[78]=s("figure",null,[s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831213708776.png",alt:"image-20210831213708776",loading:"lazy",decoding:"async",class:"lazy"})],-1)),i[79]||(i[79]=s("ol",{start:"5"},[s("li",null,"经过一段时间后伊甸园的内存又出现不足")],-1)),i[80]||(i[80]=s("figure",null,[s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831213724858.png",alt:"image-20210831213724858",loading:"lazy",decoding:"async",class:"lazy"})],-1)),i[81]||(i[81]=s("ol",{start:"6"},[s("li",null,"标记伊甸园与 from（现阶段没有）的存活对象")],-1)),i[82]||(i[82]=s("figure",null,[s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831213737669.png",alt:"image-20210831213737669",loading:"lazy",decoding:"async",class:"lazy"})],-1)),i[83]||(i[83]=s("ol",{start:"7"},[s("li",null,"将存活对象采用复制算法复制到 to 中")],-1)),i[84]||(i[84]=s("figure",null,[s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831213804315.png",alt:"image-20210831213804315",loading:"lazy",decoding:"async",class:"lazy"})],-1)),i[85]||(i[85]=s("ol",{start:"8"},[s("li",null,"复制完毕后，伊甸园和 from 内存都得到释放")],-1)),i[86]||(i[86]=s("figure",null,[s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831213815371.png",alt:"image-20210831213815371",loading:"lazy",decoding:"async",class:"lazy"})],-1)),i[87]||(i[87]=s("ol",{start:"9"},[s("li",null,"将 from 和 to 交换位置")],-1)),i[88]||(i[88]=s("figure",null,[s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831213826017.png",alt:"image-20210831213826017",loading:"lazy",decoding:"async",class:"lazy"})],-1)),i[89]||(i[89]=s("ol",{start:"10"},[s("li",null,"老年代 old，当幸存区对象熬过几次回收（最多15次），晋升到老年代（幸存区内存不足或大对象会导致提前晋升）")],-1)),i[90]||(i[90]=s("p",null,[s("strong",null,"GC 规模")],-1)),i[91]||(i[91]=s("ul",null,[s("li",null,[s("p",null,"Minor GC 发生在新生代的垃圾回收，暂停时间短")]),s("li",null,[s("p",null,"Mixed GC 新生代 + 老年代部分区域的垃圾回收，G1 收集器特有")]),s("li",null,[s("p",null,[g("Full GC 新生代 + 老年代完整垃圾回收，暂停时间长，"),s("strong",null,"应尽力避免")])])],-1)),i[92]||(i[92]=s("p",null,[s("strong",null,"三色标记")],-1)),i[93]||(i[93]=s("p",null,"即用三种颜色记录对象的标记状态",-1)),i[94]||(i[94]=s("ul",null,[s("li",null,"黑色 – 已标记"),s("li",null,"灰色 – 标记中"),s("li",null,"白色 – 还未标记")],-1)),i[95]||(i[95]=s("ol",null,[s("li",null,"起始的三个对象还未处理完成，用灰色表示")],-1)),i[96]||(i[96]=s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831215016566.png",alt:"image-20210831215016566",style:{zoom:"50%"}},null,-1)),i[97]||(i[97]=s("ol",{start:"2"},[s("li",null,"该对象的引用已经处理完成，用黑色表示，黑色引用的对象变为灰色")],-1)),i[98]||(i[98]=s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831215033510.png",alt:"image-20210831215033510",style:{zoom:"50%"}},null,-1)),i[99]||(i[99]=s("ol",{start:"3"},[s("li",null,"依次类推")],-1)),i[100]||(i[100]=s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831215105280.png",alt:"image-20210831215105280",style:{zoom:"50%"}},null,-1)),i[101]||(i[101]=s("ol",{start:"4"},[s("li",null,"沿着引用链都标记了一遍")],-1)),i[102]||(i[102]=s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831215146276.png",alt:"image-20210831215146276",style:{zoom:"50%"}},null,-1)),i[103]||(i[103]=s("ol",{start:"5"},[s("li",null,"最后为标记的白色对象，即为垃圾")],-1)),i[104]||(i[104]=s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831215158311.png",alt:"image-20210831215158311",style:{zoom:"50%"}},null,-1)),i[105]||(i[105]=s("p",null,[s("strong",null,"并发漏标问题")],-1)),i[106]||(i[106]=s("p",null,[g("比较先进的垃圾回收器都支持"),s("strong",null,"并发标记"),g("，即在标记过程中，用户线程仍然能工作。但这样带来一个新的问题，如果用户线程修改了对象引用，那么就存在漏标问题。例如：")],-1)),i[107]||(i[107]=s("ol",null,[s("li",null,"如图所示标记工作尚未完成")],-1)),i[108]||(i[108]=s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831215846876.png",alt:"image-20210831215846876",style:{zoom:"50%"}},null,-1)),i[109]||(i[109]=s("ol",{start:"2"},[s("li",null,"用户线程同时在工作，断开了第一层 3、4 两个对象之间的引用，这时对于正在处理 3 号对象的垃圾回收线程来讲，它会将 4 号对象当做是白色垃圾")],-1)),i[110]||(i[110]=s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831215904073.png",alt:"image-20210831215904073",style:{zoom:"50%"}},null,-1)),i[111]||(i[111]=s("ol",{start:"3"},[s("li",null,"但如果其他用户线程又建立了 2、4 两个对象的引用，这时因为 2 号对象是黑色已处理对象了，因此垃圾回收线程不会察觉到这个引用关系的变化，从而产生了漏标")],-1)),i[112]||(i[112]=s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831215919493.png",alt:"image-20210831215919493",style:{zoom:"50%"}},null,-1)),i[113]||(i[113]=s("ol",{start:"4"},[s("li",null,"如果用户线程让黑色对象引用了一个新增对象，一样会存在漏标问题")],-1)),i[114]||(i[114]=s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831220004062.png",alt:"image-20210831220004062",style:{zoom:"50%"}},null,-1)),i[115]||(i[115]=s("p",null,[g("因此对于"),s("strong",null,"并发标记"),g("而言，必须解决漏标问题，也就是要记录标记过程中的变化。有两种解决方法：")],-1)),i[116]||(i[116]=s("ol",null,[s("li",null,[g("Incremental Update 增量更新法，CMS 垃圾回收器采用 "),s("ul",null,[s("li",null,"思路是拦截每次赋值动作，只要赋值发生，被赋值的对象就会被记录下来，在重新标记阶段再确认一遍")])]),s("li",null,[g("Snapshot At The Beginning，SATB 原始快照法，G1 垃圾回收器采用 "),s("ul",null,[s("li",null,"思路也是拦截每次赋值动作，不过记录的对象不同，也需要在重新标记阶段对这些对象二次处理"),s("li",null,"新加对象会被记录"),s("li",null,"被删除引用关系的对象也被记录")])])],-1)),i[117]||(i[117]=s("p",null,[s("strong",null,"垃圾回收器 - Parallel GC")],-1)),i[118]||(i[118]=s("ul",null,[s("li",null,[s("p",null,"eden 内存不足发生 Minor GC，采用标记复制算法，需要暂停用户线程")]),s("li",null,[s("p",null,"old 内存不足发生 Full GC，采用标记整理算法，需要暂停用户线程")]),s("li",null,[s("p",null,[s("strong",null,"注重吞吐量")])])],-1)),i[119]||(i[119]=s("p",null,[s("strong",null,"垃圾回收器 - ConcurrentMarkSweep GC")],-1)),i[120]||(i[120]=s("ul",null,[s("li",null,[s("p",null,[g("它是工作在 old 老年代，支持"),s("strong",null,"并发标记"),g("的一款回收器，采用"),s("strong",null,"并发清除"),g("算法")]),s("ul",null,[s("li",null,"并发标记时不需暂停用户线程"),s("li",null,"重新标记时仍需暂停用户线程")])]),s("li",null,[s("p",null,"如果并发失败（即回收速度赶不上创建新对象速度），会触发 Full GC")]),s("li",null,[s("p",null,[s("strong",null,"注重响应时间")])])],-1)),i[121]||(i[121]=s("p",null,[s("strong",null,"垃圾回收器 - G1 GC")],-1)),i[122]||(i[122]=s("ul",null,[s("li",null,[s("strong",null,"响应时间与吞吐量兼顾")]),s("li",null,"划分成多个区域，每个区域都可以充当 eden，survivor，old， humongous，其中 humongous 专为大对象准备"),s("li",null,"分成三个阶段：新生代回收、并发标记、混合收集"),s("li",null,"如果并发失败（即回收速度赶不上创建新对象速度），会触发 Full GC")],-1)),i[123]||(i[123]=s("p",null,[s("strong",null,"G1 回收阶段 - 新生代回收")],-1)),i[124]||(i[124]=s("ol",null,[s("li",null,"初始时，所有区域都处于空闲状态")],-1)),i[125]||(i[125]=s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831222639754.png",alt:"image-20210831222639754",style:{zoom:"50%"}},null,-1)),i[126]||(i[126]=s("ol",{start:"2"},[s("li",null,"创建了一些对象，挑出一些空闲区域作为伊甸园区存储这些对象")],-1)),i[127]||(i[127]=s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831222653802.png",alt:"image-20210831222653802",style:{zoom:"50%"}},null,-1)),i[128]||(i[128]=s("ol",{start:"3"},[s("li",null,"当伊甸园需要垃圾回收时，挑出一个空闲区域作为幸存区，用复制算法复制存活对象，需要暂停用户线程")],-1)),i[129]||(i[129]=s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831222705814.png",alt:"image-20210831222705814",style:{zoom:"50%"}},null,-1)),i[130]||(i[130]=s("ol",{start:"4"},[s("li",null,"复制完成，将之前的伊甸园内存释放")],-1)),i[131]||(i[131]=s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831222724999.png",alt:"image-20210831222724999",style:{zoom:"50%"}},null,-1)),i[132]||(i[132]=s("ol",{start:"5"},[s("li",null,"随着时间流逝，伊甸园的内存又有不足")],-1)),i[133]||(i[133]=s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831222737928.png",alt:"image-20210831222737928",style:{zoom:"50%"}},null,-1)),i[134]||(i[134]=s("ol",{start:"6"},[s("li",null,"将伊甸园以及之前幸存区中的存活对象，采用复制算法，复制到新的幸存区，其中较老对象晋升至老年代")],-1)),i[135]||(i[135]=s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831222752787.png",alt:"image-20210831222752787",style:{zoom:"50%"}},null,-1)),i[136]||(i[136]=s("ol",{start:"7"},[s("li",null,"释放伊甸园以及之前幸存区的内存")],-1)),i[137]||(i[137]=s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831222803281.png",alt:"image-20210831222803281",style:{zoom:"50%"}},null,-1)),i[138]||(i[138]=s("p",null,[s("strong",null,"G1 回收阶段 - 并发标记与混合收集")],-1)),i[139]||(i[139]=s("ol",null,[s("li",null,"当老年代占用内存超过阈值后，触发并发标记，这时无需暂停用户线程")],-1)),i[140]||(i[140]=s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831222813959.png",alt:"image-20210831222813959",style:{zoom:"50%"}},null,-1)),i[141]||(i[141]=s("ol",{start:"2"},[s("li",null,[g("并发标记之后，会有重新标记阶段解决漏标问题，此时需要暂停用户线程。这些都完成后就知道了老年代有哪些存活对象，随后进入混合收集阶段。此时不会对所有老年代区域进行回收，而是根据"),s("strong",null,"暂停时间目标"),g("优先回收价值高（存活对象少）的区域（这也是 Gabage First 名称的由来）。")])],-1)),i[142]||(i[142]=s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831222828104.png",alt:"image-20210831222828104",style:{zoom:"50%"}},null,-1)),i[143]||(i[143]=s("ol",{start:"3"},[s("li",null,"混合收集阶段中，参与复制的有 eden、survivor、old，下图显示了伊甸园和幸存区的存活对象复制")],-1)),i[144]||(i[144]=s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831222841096.png",alt:"image-20210831222841096",style:{zoom:"50%"}},null,-1)),i[145]||(i[145]=s("ol",{start:"4"},[s("li",null,"下图显示了老年代和幸存区晋升的存活对象的复制")],-1)),i[146]||(i[146]=s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831222859760.png",alt:"image-20210831222859760",style:{zoom:"50%"}},null,-1)),i[147]||(i[147]=s("ol",{start:"5"},[s("li",null,"复制完成，内存得到释放。进入下一轮的新生代回收、并发标记、混合收集")],-1)),i[148]||(i[148]=s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210831222919182.png",alt:"image-20210831222919182",style:{zoom:"50%"}},null,-1)),i[149]||(i[149]=s("h2",{id:"_4-内存溢出",tabindex:"-1"},[g("4. 内存溢出 "),s("a",{class:"header-anchor",href:"#_4-内存溢出","aria-label":'Permalink to "4. 内存溢出"'},"​")],-1)),i[150]||(i[150]=s("p",null,[s("strong",null,"要求")],-1)),i[151]||(i[151]=s("ul",null,[s("li",null,"能够说出几种典型的导致内存溢出的情况")],-1)),i[152]||(i[152]=s("p",null,[s("strong",null,"典型情况")],-1)),i[153]||(i[153]=s("ul",null,[s("li",null,[g("误用线程池导致的内存溢出 "),s("ul",null,[s("li",null,"参考 day03.TestOomThreadPool")])]),s("li",null,[g("查询数据量太大导致的内存溢出 "),s("ul",null,[s("li",null,"参考 day03.TestOomTooManyObject")])]),s("li",null,[g("动态生成类导致的内存溢出 "),s("ul",null,[s("li",null,"参考 day03.TestOomTooManyClass")])])],-1)),i[154]||(i[154]=s("h2",{id:"_5-类加载",tabindex:"-1"},[g("5. 类加载 "),s("a",{class:"header-anchor",href:"#_5-类加载","aria-label":'Permalink to "5. 类加载"'},"​")],-1)),i[155]||(i[155]=s("p",null,[s("strong",null,"要求")],-1)),i[156]||(i[156]=s("ul",null,[s("li",null,"掌握类加载阶段"),s("li",null,"掌握类加载器"),s("li",null,"理解双亲委派机制")],-1)),i[157]||(i[157]=s("p",null,[s("strong",null,"类加载过程的三个阶段")],-1)),i[158]||(i[158]=s("ol",null,[s("li",null,[s("p",null,"加载"),s("ol",null,[s("li",null,[s("p",null,"将类的字节码载入方法区，并创建类.class 对象")]),s("li",null,[s("p",null,"如果此类的父类没有加载，先加载父类")]),s("li",null,[s("p",null,"加载是懒惰执行")])])]),s("li",null,[s("p",null,"链接"),s("ol",null,[s("li",null,"验证 – 验证类是否符合 Class 规范，合法性、安全性检查"),s("li",null,"准备 – 为 static 变量分配空间，设置默认值"),s("li",null,"解析 – 将常量池的符号引用解析为直接引用")])]),s("li",null,[s("p",null,"初始化"),s("ol",null,[s("li",null,[g("静态代码块、static 修饰的变量赋值、static final 修饰的引用类型变量赋值，会被合并成一个 "),s("code",null,"<cinit>"),g(" 方法，在初始化时被调用")]),s("li",null,"static final 修饰的基本类型变量赋值，在链接阶段就已完成"),s("li",null,"初始化是懒惰执行")])])],-1)),i[159]||(i[159]=s("blockquote",null,[s("p",null,[s("em",null,[s("strong",null,"验证手段")])]),s("ul",null,[s("li",null,"使用 jps 查看进程号"),s("li",null,[g("使用 jhsdb 调试，执行命令 "),s("code",null,"jhsdb.exe hsdb"),g(" 打开它的图形界面 "),s("ul",null,[s("li",null,"Class Browser 可以查看当前 jvm 中加载了哪些类"),s("li",null,"控制台的 universe 命令查看堆内存范围"),s("li",null,"控制台的 g1regiondetails 命令查看 region 详情"),s("li",null,[s("code",null,"scanoops 起始地址 结束地址 对象类型"),g(" 可以根据类型查找某个区间内的对象地址")]),s("li",null,[g("控制台的 "),s("code",null,"inspect 地址"),g(" 指令能够查看这个地址对应的对象详情")])])]),s("li",null,"使用 javap 命令可以查看 class 字节码")])],-1)),i[160]||(i[160]=s("blockquote",null,[s("p",null,[s("em",null,[s("strong",null,"代码说明")])]),s("ul",null,[s("li",null,"day03.loader.TestLazy - 验证类的加载是懒惰的，用到时才触发类加载"),s("li",null,"day03.loader.TestFinal - 验证使用 final 修饰的变量不会触发类加载")])],-1)),i[161]||(i[161]=s("p",null,[s("strong",null,"jdk 8 的类加载器")],-1)),i[162]||(i[162]=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,[s("strong",null,"名称")]),s("th",null,[s("strong",null,"加载哪的类")]),s("th",null,[s("strong",null,"说明")])])]),s("tbody",null,[s("tr",null,[s("td",null,"Bootstrap ClassLoader"),s("td",null,"JAVA_HOME/jre/lib"),s("td",null,"无法直接访问")]),s("tr",null,[s("td",null,"Extension ClassLoader"),s("td",null,"JAVA_HOME/jre/lib/ext"),s("td",null,"上级为 Bootstrap，显示为 null")]),s("tr",null,[s("td",null,"Application ClassLoader"),s("td",null,"classpath"),s("td",null,"上级为 Extension")]),s("tr",null,[s("td",null,"自定义类加载器"),s("td",null,"自定义"),s("td",null,"上级为 Application")])])],-1)),i[163]||(i[163]=s("p",null,[s("strong",null,"双亲委派机制")],-1)),i[164]||(i[164]=s("p",null,"所谓的双亲委派，就是指优先委派上级类加载器进行加载，如果上级类加载器",-1)),i[165]||(i[165]=s("ul",null,[s("li",null,"能找到这个类，由上级加载，加载后该类也对下级加载器可见"),s("li",null,"找不到这个类，则下级类加载器才有资格执行加载")],-1)),i[166]||(i[166]=s("p",null,"双亲委派的目的有两点",-1)),i[167]||(i[167]=s("ol",null,[s("li",null,[s("p",null,"让上级类加载器中的类对下级共享（反之不行），即能让你的类能依赖到 jdk 提供的核心类")]),s("li",null,[s("p",null,"让类的加载有优先次序，保证核心类优先加载")])],-1)),i[168]||(i[168]=s("p",null,[s("strong",null,"对双亲委派的误解")],-1)),i[169]||(i[169]=s("p",null,"下面面试题的回答是错误的",-1)),i[170]||(i[170]=s("figure",null,[s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210901110910016.png",alt:"image-20210901110910016",loading:"lazy",decoding:"async",class:"lazy"})],-1)),i[171]||(i[171]=s("p",null,"错在哪了？",-1)),i[172]||(i[172]=s("ul",null,[s("li",null,[s("p",null,"自己编写类加载器就能加载一个假冒的 java.lang.System 吗? 答案是不行。")]),s("li",null,[s("p",null,"假设你自己的类加载器用双亲委派，那么优先由启动类加载器加载真正的 java.lang.System，自然不会加载假冒的")]),s("li",null,[s("p",null,"假设你自己的类加载器不用双亲委派，那么你的类加载器加载假冒的 java.lang.System 时，它需要先加载父类 java.lang.Object，而你没有用委派，找不到 java.lang.Object 所以加载会失败")]),s("li",null,[s("p",null,[s("strong",null,"以上也仅仅是假设"),g("。事实上操作你就会发现，自定义类加载器加载以 java. 打头的类时，会抛安全异常，在 jdk9 以上版本这些特殊包名都与模块进行了绑定，更连编译都过不了")])])],-1)),i[173]||(i[173]=s("blockquote",null,[s("p",null,[s("em",null,[s("strong",null,"代码说明")])]),s("ul",null,[s("li",null,"day03.loader.TestJdk9ClassLoader - 演示类加载器与模块的绑定关系")])],-1)),i[174]||(i[174]=s("h2",{id:"_6-四种引用",tabindex:"-1"},[g("6. 四种引用 "),s("a",{class:"header-anchor",href:"#_6-四种引用","aria-label":'Permalink to "6. 四种引用"'},"​")],-1)),i[175]||(i[175]=s("p",null,[s("strong",null,"要求")],-1)),i[176]||(i[176]=s("ul",null,[s("li",null,"掌握四种引用")],-1)),i[177]||(i[177]=s("p",null,[s("strong",null,"强引用")],-1)),i[178]||(i[178]=s("ol",null,[s("li",null,[s("p",null,"普通变量赋值即为强引用，如 A a = new A();")]),s("li",null,[s("p",null,"通过 GC Root 的引用链，如果强引用不到该对象，该对象才能被回收")])],-1)),i[179]||(i[179]=s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210901111903574.png",alt:"image-20210901111903574",style:{zoom:"80%"}},null,-1)),i[180]||(i[180]=s("p",null,[s("strong",null,"软引用（SoftReference）")],-1)),i[181]||(i[181]=s("ol",null,[s("li",null,[s("p",null,"例如：SoftReference a = new SoftReference(new A());")]),s("li",null,[s("p",null,"如果仅有软引用该对象时，首次垃圾回收不会回收该对象，如果内存仍不足，再次回收时才会释放对象")]),s("li",null,[s("p",null,"软引用自身需要配合引用队列来释放")]),s("li",null,[s("p",null,"典型例子是反射数据")])],-1)),i[182]||(i[182]=s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210901111957328.png",alt:"image-20210901111957328",style:{zoom:"80%"}},null,-1)),i[183]||(i[183]=s("p",null,[s("strong",null,"弱引用（WeakReference）")],-1)),i[184]||(i[184]=s("ol",null,[s("li",null,[s("p",null,"例如：WeakReference a = new WeakReference(new A());")]),s("li",null,[s("p",null,"如果仅有弱引用引用该对象时，只要发生垃圾回收，就会释放该对象")]),s("li",null,[s("p",null,"弱引用自身需要配合引用队列来释放")]),s("li",null,[s("p",null,"典型例子是 ThreadLocalMap 中的 Entry 对象")])],-1)),i[185]||(i[185]=s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210901112107707.png",alt:"image-20210901112107707",style:{zoom:"80%"}},null,-1)),i[186]||(i[186]=s("p",null,[s("strong",null,"虚引用（PhantomReference）")],-1)),i[187]||(i[187]=s("ol",null,[s("li",null,[s("p",null,"例如： PhantomReference a = new PhantomReference(new A(), referenceQueue);")]),s("li",null,[s("p",null,"必须配合引用队列一起使用，当虚引用所引用的对象被回收时，由 Reference Handler 线程将虚引用对象入队，这样就可以知道哪些对象被回收，从而对它们关联的资源做进一步处理")]),s("li",null,[s("p",null,"典型例子是 Cleaner 释放 DirectByteBuffer 关联的直接内存")])],-1)),i[188]||(i[188]=s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210901112157901.png",alt:"image-20210901112157901",style:{zoom:"80%"}},null,-1)),i[189]||(i[189]=s("blockquote",null,[s("p",null,[s("em",null,[s("strong",null,"代码说明")])]),s("ul",null,[s("li",null,"day03.reference.TestPhantomReference - 演示虚引用的基本用法"),s("li",null,"day03.reference.TestWeakReference - 模拟 ThreadLocalMap, 采用引用队列释放 entry 内存")])],-1)),i[190]||(i[190]=s("h2",{id:"_7-finalize",tabindex:"-1"},[g("7. finalize "),s("a",{class:"header-anchor",href:"#_7-finalize","aria-label":'Permalink to "7. finalize"'},"​")],-1)),i[191]||(i[191]=s("p",null,[s("strong",null,"要求")],-1)),i[192]||(i[192]=s("ul",null,[s("li",null,"掌握 finalize 的工作原理与缺点")],-1)),i[193]||(i[193]=s("p",null,[s("strong",null,"finalize")],-1)),i[194]||(i[194]=s("ul",null,[s("li",null,"它是 Object 中的一个方法，如果子类重写它，垃圾回收时此方法会被调用，可以在其中进行资源释放和清理工作"),s("li",null,"将资源释放和清理放在 finalize 方法中非常不好，非常影响性能，严重时甚至会引起 OOM，从 Java9 开始就被标注为 @Deprecated，不建议被使用了")],-1)),i[195]||(i[195]=s("p",null,[s("strong",null,"finalize 原理")],-1)),i[196]||(i[196]=s("ol",null,[s("li",null,"对 finalize 方法进行处理的核心逻辑位于 java.lang.ref.Finalizer 类中，它包含了名为 unfinalized 的静态变量（双向链表结构），Finalizer 也可被视为另一种引用对象（地位与软、弱、虚相当，只是不对外，无法直接使用）"),s("li",null,"当重写了 finalize 方法的对象，在构造方法调用之时，JVM 都会将其包装成一个 Finalizer 对象，并加入 unfinalized 链表中")],-1)),i[197]||(i[197]=s("figure",null,[s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210901121032813.png",alt:"image-20210901121032813",loading:"lazy",decoding:"async",class:"lazy"})],-1)),i[198]||(i[198]=s("ol",{start:"3"},[s("li",null,"Finalizer 类中还有另一个重要的静态变量，即 ReferenceQueue 引用队列，刚开始它是空的。当狗对象可以被当作垃圾回收时，就会把这些狗对象对应的 Finalizer 对象加入此引用队列"),s("li",null,"但此时 Dog 对象还没法被立刻回收，因为 unfinalized -> Finalizer 这一引用链还在引用它嘛，为的是【先别着急回收啊，等我调完 finalize 方法，再回收】"),s("li",null,"FinalizerThread 线程会从 ReferenceQueue 中逐一取出每个 Finalizer 对象，把它们从链表断开并真正调用 finallize 方法")],-1)),i[199]||(i[199]=s("figure",null,[s("img",{src:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210901122228916.png",alt:"image-20210901122228916",loading:"lazy",decoding:"async",class:"lazy"})],-1)),i[200]||(i[200]=s("ol",{start:"6"},[s("li",null,"由于整个 Finalizer 对象已经从 unfinalized 链表中断开，这样没谁能引用到它和狗对象，所以下次 gc 时就被回收了")],-1)),i[201]||(i[201]=s("p",null,[s("strong",null,"finalize 缺点")],-1)),i[202]||(i[202]=s("ul",null,[s("li",null,"无法保证资源释放：FinalizerThread 是守护线程，代码很有可能没来得及执行完，线程就结束了"),s("li",null,"无法判断是否发生错误：执行 finalize 方法时，会吞掉任意异常（Throwable）"),s("li",null,"内存释放不及时：重写了 finalize 方法的对象在第一次被 gc 时，并不能及时释放它占用的内存，因为要等着 FinalizerThread 调用完 finalize，把它从 unfinalized 队列移除后，第二次 gc 时才能真正释放内存"),s("li",null,"有的文章提到【Finalizer 线程会和我们的主线程进行竞争，不过由于它的优先级较低，获取到的CPU时间较少，因此它永远也赶不上主线程的步伐】这个显然是错误的，FinalizerThread 的优先级较普通线程更高，原因应该是 finalize 串行执行慢等原因综合导致")],-1)),i[203]||(i[203]=s("blockquote",null,[s("p",null,[s("em",null,[s("strong",null,"代码说明")])]),s("ul",null,[s("li",null,"day03.reference.TestFinalize - finalize 的测试代码")])],-1))])),"main-header":a((()=>[t(n.$slots,"main-header")])),"main-header-after":a((()=>[t(n.$slots,"main-header-after")])),"main-nav":a((()=>[t(n.$slots,"main-nav")])),"main-content-before":a((()=>[t(n.$slots,"main-content-before")])),"main-content":a((()=>[t(n.$slots,"main-content")])),"main-content-after":a((()=>[t(n.$slots,"main-content-after")])),"main-nav-before":a((()=>[t(n.$slots,"main-nav-before")])),"main-nav-after":a((()=>[t(n.$slots,"main-nav-after")])),comment:a((()=>[t(n.$slots,"comment")])),footer:a((()=>[t(n.$slots,"footer")])),aside:a((()=>[t(n.$slots,"aside")])),"aside-custom":a((()=>[t(n.$slots,"aside-custom")])),default:a((()=>[t(n.$slots,"default")])),_:3},8,["frontmatter"])}}};export{p as default,c as usePageData};
