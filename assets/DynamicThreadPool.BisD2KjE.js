import{_ as l}from"./ValaxyMain.vue_vue_type_style_index_0_lang.DiDP0BTm.js";import{f as i,a}from"./chunks/vue-router.Ca7rF0qp.js";import{D as e,N as s,$ as n,Q as t,R as o,V as r,W as h,u as p,O as u}from"./framework.CXYGarVr.js";import"./app.2CBZYHcL.js";import"./chunks/dayjs.luRsnflP.js";import"./chunks/vue-i18n.BG5xGR4q.js";import"./chunks/nprogress.D_IOsJtP.js";import"./chunks/pinia.Dy_Ta77g.js";import"./chunks/@vueuse/motion.DjOBw7pe.js";import"./YunComment.vue_vue_type_style_index_0_lang.DZjz3lEY.js";import"./index.TQnGKZgq.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.REEBqsfl.js";import"./post.D-jEjJj9.js";const c=i("/posts/DynamicThreadPool",(async l=>JSON.parse('{"title":"如何使用线程池不容易出故障","description":"","frontmatter":{"title":"如何使用线程池不容易出故障","author":"imklaus","tags":["线程池","BlockingQueue","ThreadPoolExecutor"],"categories":"Java","date":"2024-03-19 19:03:22","outline":"deep","postTitleClass":"text-#FF8EB3","excerpt_type":"html"},"headers":[{"level":2,"title":"核心功能","slug":"核心功能","link":"#核心功能","children":[]},{"level":2,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[{"level":3,"title":"1. 动态调参","slug":"_1-动态调参","link":"#_1-动态调参","children":[]},{"level":3,"title":"2. 告警策略","slug":"_2-告警策略","link":"#_2-告警策略","children":[]},{"level":3,"title":"3. 线程池监控","slug":"_3-线程池监控","link":"#_3-线程池监控","children":[]},{"level":3,"title":"4. 框架底层线程池","slug":"_4-框架底层线程池","link":"#_4-框架底层线程池","children":[]}]},{"level":2,"title":"模块介绍","slug":"模块介绍","link":"#模块介绍","children":[]},{"level":2,"title":"深入原理","slug":"深入原理","link":"#深入原理","children":[{"level":3,"title":"1. 配置中心模式变更原理","slug":"_1-配置中心模式变更原理","link":"#_1-配置中心模式变更原理","children":[]},{"level":3,"title":"2. 适配 SpringBoot 1.5 & 2.x","slug":"_2-适配-springboot-1-5-2-x","link":"#_2-适配-springboot-1-5-2-x","children":[]},{"level":3,"title":"3. 阅读源码优点","slug":"_3-阅读源码优点","link":"#_3-阅读源码优点","children":[]}]}],"relativePath":"pages/posts/DynamicThreadPool.md","lastUpdated":null}')),{lazy:(l,i)=>l.name===i.name}),g={__name:"DynamicThreadPool",setup(i,{expose:g}){var d;const{data:m}=c(),k=a(),y=Object.assign(k.meta.frontmatter||{},(null==(d=m.value)?void 0:d.frontmatter)||{});k.meta.frontmatter=y,e("pageData",m.value),e("valaxy:frontmatter",y),globalThis.$frontmatter=y;return g({frontmatter:{title:"如何使用线程池不容易出故障",author:"imklaus",tags:["线程池","BlockingQueue","ThreadPoolExecutor"],categories:"Java",date:"2024-03-19 19:03:22",outline:"deep",postTitleClass:"text-#FF8EB3",excerpt_type:"html"}}),(i,a)=>{const e=l;return u(),s(e,{frontmatter:p(y)},{"main-content-md":n((()=>[a[0]||(a[0]=o("p",null,"你是否在项目中使用线程池遇到过以下问题？",-1)),a[1]||(a[1]=o("ul",null,[o("li",null,"创建线程池核心参数不好评估，随着业务流量的波动，极有可能出现生产故障。"),o("li",null,"不支持优雅关闭，当项目关闭时，大量正在运行的线程池任务被丢弃。"),o("li",null,"不支持运行时监控，使用过程中业务无响应，不知道是不是线程池引起。"),o("li",null,"三方框架 RocketMQ、Dubbo 等线程池无法动态修改参数，修改后只能重启应用。")],-1)),r(" more "),a[2]||(a[2]=o("p",null,"在真实业务场景中，线程池可能遇到的问题比这里描述的还要多，稀奇古怪。",-1)),a[3]||(a[3]=o("p",null,"笔者所经历过的项目，因为业务对线程池参数没有合理配置，就触发过几起生产事故。大概在 21 年 6 月份左右，开始在网上搜索动态线程池的项目。",-1)),a[4]||(a[4]=o("p",null,"在开源平台找了挺多动态线程池项目，从功能性以及健壮性而言，个人感觉不满足企业级应用。",-1)),a[5]||(a[5]=o("p",null,"再加上当时看了美团动态线程的文章，就对这个技术方向比较感兴趣，所以决定自己来造一个轻量级的轮子。",-1)),a[6]||(a[6]=o("blockquote",null,[o("p",null,"我觉得写一个偏中间件的框架，还能帮助用户解决实际问题，是一件很酷的事情。")],-1)),a[7]||(a[7]=o("p",null,[h("GitHub："),o("a",{href:"https://github.com/opengoofy/hippo4j",target:"_blank",rel:"noreferrer"},"https://github.com/opengoofy/hippo4j(opens new window)")],-1)),a[8]||(a[8]=o("p",null,[h("Gitee："),o("a",{href:"https://gitee.com/opengoofy/hippo4j",target:"_blank",rel:"noreferrer"},"https://gitee.com/opengoofy/hippo4j(opens new window)")],-1)),a[9]||(a[9]=o("h2",{id:"核心功能",tabindex:"-1"},[h("核心功能 "),o("a",{class:"header-anchor",href:"#核心功能","aria-label":'Permalink to "核心功能"'},"​")],-1)),a[10]||(a[10]=o("p",null,"通过对 JDK 线程池的增强，以及扩展三方框架底层线程池等功能，为业务系统提高线上运行保障能力。",-1)),a[11]||(a[11]=o("p",null,"Hippo4j 框架提供以下功能支持：",-1)),a[12]||(a[12]=o("ol",null,[o("li",null,"客户端应用运行时实时变更指定线程池核心参数，变更生效支持集群和单实例两种方式。"),o("li",null,"线程池运行时异常报警，比如：线程池活跃度、阻塞队列容量水位较高，触发了拒绝策略以及任务运行时间超长等。"),o("li",null,"定时任务（默认5秒）采集线程池运行数据，可上报 Prometheus、InfluxDB 等数据库，搭配 Grafana 做大屏展示。"),o("li",null,"运行过程中支持实时查看线程池当前运行状态以及线程池内线程的堆栈信息。"),o("li",null,"支持 Tomcat、Undertow 和 Jetty 容器线程池运行时查看和动态变更线程池配置。"),o("li",null,"支持 Dubbo、Hystrix、Kafka、RabbitMQ、RocketMQ 等客户端线程池运行时数据查看和动态变更线程池配置。")],-1)),a[13]||(a[13]=o("h2",{id:"应用场景",tabindex:"-1"},[h("应用场景 "),o("a",{class:"header-anchor",href:"#应用场景","aria-label":'Permalink to "应用场景"'},"​")],-1)),a[14]||(a[14]=o("h3",{id:"_1-动态调参",tabindex:"-1"},[h("1. 动态调参 "),o("a",{class:"header-anchor",href:"#_1-动态调参","aria-label":'Permalink to "1. 动态调参"'},"​")],-1)),a[15]||(a[15]=o("p",null,"Google 或者百度搜索线程池和生产事故关键字，几页都放不下，这也间接说明了线程池是个很考验使用者技术功底的技术点。",-1)),a[16]||(a[16]=o("p",null,"那有没有一些技巧或者技术来尽量规避线程池使用上的问题？比如：线程池的配置应该如何选择？",-1)),a[17]||(a[17]=o("figure",null,[o("img",{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20230329231743302.png",alt:"img",loading:"lazy",decoding:"async",class:"lazy"})],-1)),a[18]||(a[18]=o("p",null,"我觉得大家对于线程池参数的纠结点主要有两个，无外乎设置的线程数多了或者少了。",-1)),a[19]||(a[19]=o("ul",null,[o("li",null,"如果预设的线程数或阻塞队列数量少了，当业务量上来，任务都在排队或者执行拒绝策略。"),o("li",null,"如果超量设置线程池的参数，无疑会造成资源浪费。")],-1)),a[20]||(a[20]=o("p",null,"如果要修改运行中应用线程池参数，需要停止线上应用，调整成功后再发布，而这个过程异常的繁琐，如果能在运行中动态调整线程池的参数无疑会提高问题解决效率。",-1)),a[21]||(a[21]=o("figure",null,[o("img",{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20230327223406749.png",alt:"img",loading:"lazy",decoding:"async",class:"lazy"})],-1)),a[22]||(a[22]=o("p",null,"Hippo4j 提供了应用线程池运行时变更核心参数的功能。而且，如果应用是集群部署，可以选择修改线程池某一实例，或者修改集群全部实例，运行时生效，不需要再重启服务。",-1)),a[23]||(a[23]=o("p",null,"压测时可以使用 Hippo4j 动态调整线程池参数，判断线程池核心参数设置是否合理。对于开发测试来说，如果不满足可以随时调整。",-1)),a[24]||(a[24]=o("figure",null,[o("img",{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20220824085936059.png",alt:"img",loading:"lazy",decoding:"async",class:"lazy"})],-1)),a[25]||(a[25]=o("h3",{id:"_2-告警策略",tabindex:"-1"},[h("2. 告警策略 "),o("a",{class:"header-anchor",href:"#_2-告警策略","aria-label":'Permalink to "2. 告警策略"'},"​")],-1)),a[26]||(a[26]=o("p",null,"很多时候，线程池出故障的时候，系统已经发生了很严重的损失。有没有一种方式，在使用的线程池即将出现问题，但还算比较可控时，触发相关报警提示给用户，进而规避该问题？",-1)),a[27]||(a[27]=o("p",null,"Hippo4j 基于上述问题思考，集成了四种报警策略：",-1)),a[28]||(a[28]=o("ul",null,[o("li",null,"活跃度：假设阈值设置 80%，线程池最大线程数 10，当线程数达到 8 发起报警。"),o("li",null,"阻塞队列容量：假设阈值设置 80%，阻塞队列容量 100，当容量达到 80 发起报警。"),o("li",null,"触发拒绝策略：当线程池任务触发了拒绝策略时，发起拒绝策略报警。"),o("li",null,"任务运行超时：假设用户设置单个任务正常执行是 1000ms，实际执行超过该时间发起报警。")],-1)),a[29]||(a[29]=o("p",null,"支持钉钉、企业微信和飞书软件通知，下图以线程池任务运行超时报警举例：",-1)),a[30]||(a[30]=o("figure",null,[o("img",{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20220823201756259.png",alt:"img",loading:"lazy",decoding:"async",class:"lazy"})],-1)),a[31]||(a[31]=o("h3",{id:"_3-线程池监控",tabindex:"-1"},[h("3. 线程池监控 "),o("a",{class:"header-anchor",href:"#_3-线程池监控","aria-label":'Permalink to "3. 线程池监控"'},"​")],-1)),a[32]||(a[32]=o("p",null,"Hippo4j 线程池提供了两种监控方式：线程池运行时数据采集监控以及客户端线程池运行实时状态查看。",-1)),a[33]||(a[33]=o("p",null,"1）线程池核心参数监控。",-1)),a[34]||(a[34]=o("figure",null,[o("img",{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20220912225813972.png",alt:"img",loading:"lazy",decoding:"async",class:"lazy"})],-1)),a[35]||(a[35]=o("p",null,"2）线程池实例运行时状态。",-1)),a[36]||(a[36]=o("figure",null,[o("img",{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20230309194103914.png",alt:"img",loading:"lazy",decoding:"async",class:"lazy"})],-1)),a[37]||(a[37]=o("p",null,"线程池运行时数据采集适合应用负责人巡查应用健康状态和排查问题时使用，实时状态适合排查多实例之间的运行数据状态。",-1)),a[38]||(a[38]=o("h3",{id:"_4-框架底层线程池",tabindex:"-1"},[h("4. 框架底层线程池 "),o("a",{class:"header-anchor",href:"#_4-框架底层线程池","aria-label":'Permalink to "4. 框架底层线程池"'},"​")],-1)),a[39]||(a[39]=o("p",null,"上面讲的动态线程池是业务中开发人员手动创建的线程池，比如下面这个：",-1)),a[40]||(a[40]=o("div",{style:{"max-height":"300px"},class:"language-java vp-adaptive-theme"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"},"java"),o("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[o("code",{"v-pre":""},[o("span",{class:"line"},[o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"@"),o("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Bean")]),h("\n"),o("span",{class:"line"},[o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"@"),o("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"DynamicThreadPool")]),h("\n"),o("span",{class:"line"},[o("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"public"),o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ThreadPoolExecutor "),o("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"messageConsumeDynamicExecutor"),o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"() {")]),h("\n"),o("span",{class:"line"},[o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  String threadPoolId "),o("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),o("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "message-consume"'),o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),h("\n"),o("span",{class:"line"},[o("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  return"),o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ThreadPoolBuilder."),o("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"builder"),o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")]),h("\n"),o("span",{class:"line"},[o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),o("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"threadFactory"),o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(threadPoolId)")]),h("\n"),o("span",{class:"line"},[o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),o("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"threadPoolId"),o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(threadPoolId)")]),h("\n"),o("span",{class:"line"},[o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),o("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"dynamicPool"),o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")]),h("\n"),o("span",{class:"line"},[o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),o("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"build"),o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),h("\n"),o("span",{class:"line"},[o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])]),o("button",{class:"collapse"})],-1)),a[41]||(a[41]=o("p",null,"而框架线程池指的是某些三方中间件底层使用到的线程池，比如 Dubbo、RocketMQ 等框架，这些底层框架为了增强性能选择使用线程池进行扩展。",-1)),a[42]||(a[42]=o("p",null,"为什么要适配这些中间件框架的线程池？",-1)),a[43]||(a[43]=o("p",null,"相信这是很多小伙伴的疑问。以 Dubbo 举例，当服务高并发调用时，如果 Dubbo 底层线程池没有经过个性化配置，极有可能导致线程池打满，最终导致无法提供服务。",-1)),a[44]||(a[44]=o("p",null,"当遇到这种情况，可以使用 Hippo4j 对 Dubbo 线程池进行核心参数调整，避免生产故障时间持续。",-1)),a[45]||(a[45]=o("p",null,"再举个例子，当 RocketMQ 消息积压时，可能大部分公司的解决方案是添加客户端应用节点。而这种方式虽然可以解决问题，但是问题也很明显，太复杂且资源浪费。完全可以调整 RocketMQ SDK 底层线程池的线程数来达到快速消费的逻辑，有效解决 MQ 消息堆积问题。",-1)),a[46]||(a[46]=o("p",null,"目前 Hippo4j 已支持的三方中间件线程池列表：",-1)),a[47]||(a[47]=o("ul",null,[o("li",null,"Apache Dubbo"),o("li",null,"Alibaba Dubbo"),o("li",null,"Apache Kafka"),o("li",null,"Apache RocketMQ"),o("li",null,"RabbitMQ"),o("li",null,"SpringCloud Stream RocketMQ"),o("li",null,"SpringCloud Hystrix"),o("li",null,"Tomcat"),o("li",null,"Jetty"),o("li",null,"Undertow")],-1)),a[48]||(a[48]=o("p",null,"上述中间件线程池都可以在 Hippo4j 页面上操作核心参数动态变更以及监控功能，如下所示：",-1)),a[49]||(a[49]=o("figure",null,[o("img",{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20220824203003245.png",alt:"img",loading:"lazy",decoding:"async",class:"lazy"})],-1)),a[50]||(a[50]=o("p",null,"未来 Hippo4j 会支持更多三方框架线程池，如果你有好的想法也可以和我沟通，一起完善中间件框架适配。",-1)),a[51]||(a[51]=o("h2",{id:"模块介绍",tabindex:"-1"},[h("模块介绍 "),o("a",{class:"header-anchor",href:"#模块介绍","aria-label":'Permalink to "模块介绍"'},"​")],-1)),a[52]||(a[52]=o("figure",null,[o("img",{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20230328084009982.png",alt:"img",loading:"lazy",decoding:"async",class:"lazy"})],-1)),a[53]||(a[53]=o("h2",{id:"深入原理",tabindex:"-1"},[h("深入原理 "),o("a",{class:"header-anchor",href:"#深入原理","aria-label":'Permalink to "深入原理"'},"​")],-1)),a[54]||(a[54]=o("p",null,"如果一上来就下载 Hippo4j 的源码来看，很容易迷失进去。这里给大家画了几张图，帮助大家在阅读源码时，能够抓紧主干分支，更快上手 Hippo4j 框架源码。",-1)),a[55]||(a[55]=o("h3",{id:"_1-配置中心模式变更原理",tabindex:"-1"},[h("1. 配置中心模式变更原理 "),o("a",{class:"header-anchor",href:"#_1-配置中心模式变更原理","aria-label":'Permalink to "1. 配置中心模式变更原理"'},"​")],-1)),a[56]||(a[56]=o("figure",null,[o("img",{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20230327223551109.png",alt:"img",loading:"lazy",decoding:"async",class:"lazy"})],-1)),a[57]||(a[57]=o("h3",{id:"_2-适配-springboot-1-5-2-x",tabindex:"-1"},[h("2. 适配 SpringBoot 1.5 & 2.x "),o("a",{class:"header-anchor",href:"#_2-适配-springboot-1-5-2-x","aria-label":'Permalink to "2. 适配 SpringBoot 1.5 & 2.x"'},"​")],-1)),a[58]||(a[58]=o("figure",null,[o("img",{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20230327223649631.png",alt:"img",loading:"lazy",decoding:"async",class:"lazy"})],-1)),a[59]||(a[59]=o("h3",{id:"_3-阅读源码优点",tabindex:"-1"},[h("3. 阅读源码优点 "),o("a",{class:"header-anchor",href:"#_3-阅读源码优点","aria-label":'Permalink to "3. 阅读源码优点"'},"​")],-1)),a[60]||(a[60]=o("p",null,"如果您公司没有使用 Hippo4j 场景的话，我也建议去阅读下项目的底层原理，主要有以下几个原因：",-1)),a[61]||(a[61]=o("ul",null,[o("li",null,"为了提高代码质量以及后续的扩展行为，运用多种设计模式实现高内聚、低耦合。"),o("li",null,"框架底层依赖 Spring 框架运行，并在源码中大量使用 Spring 相关功能。"),o("li",null,"运用 JUC 并发包下多种工具保障多线程运行安全，通过实际场景理解并发编程。"),o("li",null,"借鉴主流开源框架 Nacos、Eureka 实现轻量级配置中心和注册中心功能。"),o("li",null,"自定义 RPC 框架实现，封装 Netty 完成客户端/服务端网络通信优化。"),o("li",null,"通过 CheckStyle、Spotless 等插件规范代码编写，保障高质量代码行为和代码样式。")],-1))])),"main-header":n((()=>[t(i.$slots,"main-header")])),"main-header-after":n((()=>[t(i.$slots,"main-header-after")])),"main-nav":n((()=>[t(i.$slots,"main-nav")])),"main-content-before":n((()=>[t(i.$slots,"main-content-before")])),"main-content":n((()=>[t(i.$slots,"main-content")])),"main-content-after":n((()=>[t(i.$slots,"main-content-after")])),"main-nav-before":n((()=>[t(i.$slots,"main-nav-before")])),"main-nav-after":n((()=>[t(i.$slots,"main-nav-after")])),comment:n((()=>[t(i.$slots,"comment")])),footer:n((()=>[t(i.$slots,"footer")])),aside:n((()=>[t(i.$slots,"aside")])),"aside-custom":n((()=>[t(i.$slots,"aside-custom")])),default:n((()=>[t(i.$slots,"default")])),_:3},8,["frontmatter"])}}};export{g as default,c as usePageData};
