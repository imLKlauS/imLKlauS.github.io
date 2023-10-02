import{_ as y}from"./ValaxyMain.vue_vue_type_style_index_0_lang-c3ca3b36.js";import{_ as i,c as F,w as o,o as D,a as l,b as s,d as e,f as C,r as t,e as A,p as d}from"./app-34c419a3.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-9283462e.js";import"./YunCard.vue_vue_type_style_index_0_lang-abce3419.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-67eb088f.js";const V=JSON.parse('{"title":"在 macOS 下配置 OpenGL","description":"","frontmatter":{"title":"在 macOS 下配置 OpenGL","date":"2019-10-01T22:08:22.000Z","updated":"2019-10-01T22:08:22.000Z","tags":["macOS","CLion","OpenGL","笔记"],"categories":["云游的小笔记"]},"headers":[{"level":2,"title":"Resource","slug":"resource","link":"#resource","children":[{"level":3,"title":"书籍","slug":"书籍","link":"#书籍","children":[]},{"level":3,"title":"Online","slug":"online","link":"#online","children":[]}]},{"level":2,"title":"Progress","slug":"progress","link":"#progress","children":[]}],"relativePath":"pages/posts/opengl-with-macos.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imklaus.github.io-main\\\\pages\\\\posts\\\\opengl-with-macos.md","lastUpdated":null}'),c=JSON.parse('{"title":"在 macOS 下配置 OpenGL","description":"","frontmatter":{"title":"在 macOS 下配置 OpenGL","date":"2019-10-01T22:08:22.000Z","updated":"2019-10-01T22:08:22.000Z","tags":["macOS","CLion","OpenGL","笔记"],"categories":["云游的小笔记"]},"headers":[{"level":2,"title":"Resource","slug":"resource","link":"#resource","children":[{"level":3,"title":"书籍","slug":"书籍","link":"#书籍","children":[]},{"level":3,"title":"Online","slug":"online","link":"#online","children":[]}]},{"level":2,"title":"Progress","slug":"progress","link":"#progress","children":[]}],"relativePath":"pages/posts/opengl-with-macos.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imklaus.github.io-main\\\\pages\\\\posts\\\\opengl-with-macos.md","lastUpdated":null}'),f={name:"pages/posts/opengl-with-macos.md",data(){return{data:c,frontmatter:c.frontmatter}},setup(){d("pageData",c)}},u={id:"resource",tabindex:"-1"},h={id:"书籍",tabindex:"-1"},g={id:"online",tabindex:"-1"},m={id:"progress",tabindex:"-1"},_=l("li",null,"macOS",-1),w=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"brew"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"install"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"glfw")]),s(`
`),l("span",{class:"line"})])])],-1),E=l("code",null,"gl: 3.3",-1),L=l("code",null,"Profile: Core",-1),b=l("code",null,"glad",-1),k=l("code",null,"/usr/local/Cellar",-1),O=l("p",null,[s("可以直接用命令 copy 或者，cd 到文件夹下输入 "),l("code",null,"open ."),s(" 用 finder 打开文件夹。")],-1),G=l("p",null,[s("CLion 新建 C++ 相关默认项目，修改默认项目中的 "),l("code",null,"CMakeLists.txt"),s(" 即可。")],-1),S=l("div",{class:"language-makefile"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#676E95","font-style":"italic"}},"# CMakeLists.txt")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"cmake_minimum_required(VERSION 3.14)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},'set(PROJECT_NAME "testOpenGL")')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"project("),l("span",{style:{color:"#89DDFF"}},"${"),l("span",{style:{color:"#A6ACCD"}},"PROJECT_NAME"),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}},")")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"set(CMAKE_CXX_STANDARD 14)")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"set(GLFW_H /usr/local/Cellar/glfw/3.3/include/GLFW)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"set(GLAD_H /usr/local/Cellar/glad/include)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"set(KH_H /usr/local/Cellar/glad/include/KHR)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"include_directories("),l("span",{style:{color:"#89DDFF"}},"${"),l("span",{style:{color:"#A6ACCD"}},"GLFW_H"),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"${"),l("span",{style:{color:"#A6ACCD"}},"GLAD_H"),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"${"),l("span",{style:{color:"#A6ACCD"}},"KH_H"),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}},")")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#676E95","font-style":"italic"}},"# 添加目标链接")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"set(GLFW_LINK /usr/local/Cellar/glfw/3.3/lib/libglfw.3.dylib)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"link_libraries("),l("span",{style:{color:"#89DDFF"}},"${"),l("span",{style:{color:"#A6ACCD"}},"OPENGL"),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"${"),l("span",{style:{color:"#A6ACCD"}},"GLFW_LINK"),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}},")")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#676E95","font-style":"italic"}},"# 执行编译命令")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},'set(SOURCE_FILES "src/glad.c" "main.cpp")')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"add_executable("),l("span",{style:{color:"#89DDFF"}},"${"),l("span",{style:{color:"#A6ACCD"}},"PROJECT_NAME"),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"${"),l("span",{style:{color:"#A6ACCD"}},"SOURCE_FILES"),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}},")")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"if (APPLE)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    target_link_libraries("),l("span",{style:{color:"#89DDFF"}},"${"),l("span",{style:{color:"#A6ACCD"}},"PROJECT_NAME"),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}},' "-framework OpenGL")')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    target_link_libraries("),l("span",{style:{color:"#89DDFF"}},"${"),l("span",{style:{color:"#A6ACCD"}},"PROJECT_NAME"),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}},' "-framework GLUT")')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"endif()")]),s(`
`),l("span",{class:"line"})])])],-1),v=l("p",null,[s("修改后记得右击 "),l("code",null,"CMakeLists.txr"),s(" 执行 "),l("code",null,"Reload CMake Project"),s("。")],-1),$=l("p",null,"粘贴下方代码，尝试画一个三角形看看吧。",-1),N=l("div",{class:"language-cpp"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF","font-style":"italic"}},"#include"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#C3E88D"}},"glfw3.h"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF","font-style":"italic"}},"#include"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#C3E88D"}},"iostream"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F78C6C"}},"using"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"namespace"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#FFCB6B"}},"std"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"void"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"key_callback"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#FFCB6B"}},"GLFWwindow"),l("span",{style:{color:"#C792EA"}},"*"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#A6ACCD","font-style":"italic"}},"window"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"int"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#A6ACCD","font-style":"italic"}},"key"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"int"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#A6ACCD","font-style":"italic"}},"scancode"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"int"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#A6ACCD","font-style":"italic"}},"action"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"int"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#A6ACCD","font-style":"italic"}},"mode"),l("span",{style:{color:"#89DDFF"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#676E95","font-style":"italic"}},"    //如果按下ESC，把windowShouldClose设置为True，外面的循环会关闭应用")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#A6ACCD"}},"key"),l("span",{style:{color:"#89DDFF"}},"=="),l("span",{style:{color:"#A6ACCD"}},"GLFW_KEY_ESCAPE "),l("span",{style:{color:"#89DDFF"}},"&&"),l("span",{style:{color:"#A6ACCD"}}," action "),l("span",{style:{color:"#89DDFF"}},"=="),l("span",{style:{color:"#A6ACCD"}}," GLFW_PRESS"),l("span",{style:{color:"#89DDFF"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"        "),l("span",{style:{color:"#82AAFF"}},"glfwSetWindowShouldClose"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#A6ACCD"}},"window"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," GL_TRUE"),l("span",{style:{color:"#89DDFF"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#FFCB6B"}},"std"),l("span",{style:{color:"#89DDFF"}},"::"),l("span",{style:{color:"#A6ACCD"}},"cout"),l("span",{style:{color:"#89DDFF"}},"<<"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"ESC"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},"<<"),l("span",{style:{color:"#A6ACCD"}},"mode"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"int"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"main"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#C792EA"}},"void"),l("span",{style:{color:"#89DDFF"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),l("span",{style:{color:"#89DDFF"}},"(!"),l("span",{style:{color:"#82AAFF"}},"glfwInit"),l("span",{style:{color:"#89DDFF"}},"())")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"        "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"-"),l("span",{style:{color:"#F78C6C"}},"1"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#676E95","font-style":"italic"}},"    //创建窗口以及上下文")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    GLFWwindow"),l("span",{style:{color:"#89DDFF"}},"*"),l("span",{style:{color:"#A6ACCD"}}," window "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"glfwCreateWindow"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#F78C6C"}},"640"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F78C6C"}},"480"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"hello world"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"NULL,"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"NULL);")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),l("span",{style:{color:"#89DDFF"}},"(!"),l("span",{style:{color:"#A6ACCD"}},"window"),l("span",{style:{color:"#89DDFF"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#676E95","font-style":"italic"}},"        //创建失败会返回NULL")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#82AAFF"}},"glfwTerminate"),l("span",{style:{color:"#89DDFF"}},"();")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#676E95","font-style":"italic"}},"    //建立当前窗口的上下文")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#82AAFF"}},"glfwMakeContextCurrent"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#A6ACCD"}},"window"),l("span",{style:{color:"#89DDFF"}},");")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#82AAFF"}},"glfwSetKeyCallback"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#A6ACCD"}},"window"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," key_callback"),l("span",{style:{color:"#89DDFF"}},");"),l("span",{style:{color:"#676E95","font-style":"italic"}}," //注册回调函数")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#676E95","font-style":"italic"}},"    //循环，直到用户关闭窗口")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"while"),l("span",{style:{color:"#89DDFF"}},"(!"),l("span",{style:{color:"#82AAFF"}},"glfwWindowShouldClose"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#A6ACCD"}},"window"),l("span",{style:{color:"#89DDFF"}},"))")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#676E95","font-style":"italic"}},"/*******轮询事件*******/")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#82AAFF"}},"glfwPollEvents"),l("span",{style:{color:"#89DDFF"}},"();")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#676E95","font-style":"italic"}},"/*******渲染*******/")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#676E95","font-style":"italic"}},"        //选择清空的颜色RGBA")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#82AAFF"}},"glClearColor"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#F78C6C"}},"0.2"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#F78C6C"}},"0.3"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#F78C6C"}},"0.3"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#F78C6C"}},"1"),l("span",{style:{color:"#89DDFF"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#82AAFF"}},"glClear"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#F07178"}},"GL_COLOR_BUFFER_BIT"),l("span",{style:{color:"#89DDFF"}},");")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#676E95","font-style":"italic"}},"        //开始画一个三角形")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#82AAFF"}},"glBegin"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#F07178"}},"GL_TRIANGLES"),l("span",{style:{color:"#89DDFF"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#82AAFF"}},"glColor3f"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#F78C6C"}},"1"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#F78C6C"}},"0"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#F78C6C"}},"0"),l("span",{style:{color:"#89DDFF"}},");"),l("span",{style:{color:"#676E95","font-style":"italic"}}," //Red")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#82AAFF"}},"glVertex3f"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#F78C6C"}},"0"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#F78C6C"}},"1"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#F78C6C"}},"1"),l("span",{style:{color:"#89DDFF"}},");")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#82AAFF"}},"glColor3f"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#F78C6C"}},"0"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#F78C6C"}},"1"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#F78C6C"}},"0"),l("span",{style:{color:"#89DDFF"}},");"),l("span",{style:{color:"#676E95","font-style":"italic"}}," //Green")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#82AAFF"}},"glVertex3f"),l("span",{style:{color:"#89DDFF"}},"(-"),l("span",{style:{color:"#F78C6C"}},"1"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"-"),l("span",{style:{color:"#F78C6C"}},"1"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#F78C6C"}},"0"),l("span",{style:{color:"#89DDFF"}},");")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#82AAFF"}},"glColor3f"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#F78C6C"}},"0"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#F78C6C"}},"0"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#F78C6C"}},"1"),l("span",{style:{color:"#89DDFF"}},");"),l("span",{style:{color:"#676E95","font-style":"italic"}}," //Blue")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#82AAFF"}},"glVertex3f"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#F78C6C"}},"1"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"-"),l("span",{style:{color:"#F78C6C"}},"1"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#F78C6C"}},"0"),l("span",{style:{color:"#89DDFF"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#676E95","font-style":"italic"}},"        //结束一个画图步骤")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#82AAFF"}},"glEnd"),l("span",{style:{color:"#89DDFF"}},"();")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#676E95","font-style":"italic"}},"/******交换缓冲区，更新window上的内容******/")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#82AAFF"}},"glfwSwapBuffers"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#F07178"}},"window"),l("span",{style:{color:"#89DDFF"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#82AAFF"}},"glfwTerminate"),l("span",{style:{color:"#89DDFF"}},"();")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F78C6C"}},"0"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"})])])],-1);function R(a,P,T,B,r,M){const n=A,p=y;return D(),F(p,{frontmatter:r.frontmatter,data:r.data},{"main-content-md":o(()=>[l("p",null,[s("More info in "),e(n,{href:"https://www.yuque.com/docs/share/a32e7cdc-bee8-44ab-9704-84ebb574e809",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("从零开始的 WebGL")]),_:1}),s(".")]),C(" more "),l("h2",u,[s("Resource "),e(n,{class:"header-anchor",href:"#resource","aria-hidden":"true"},{default:o(()=>[s("#")]),_:1})]),l("h3",h,[s("书籍 "),e(n,{class:"header-anchor",href:"#书籍","aria-hidden":"true"},{default:o(()=>[s("#")]),_:1})]),l("ul",null,[l("li",null,[e(n,{href:"https://book.douban.com/subject/10543022/",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("计算机图形学（第四版）")]),_:1})]),l("li",null,[e(n,{href:"https://book.douban.com/subject/10777165/",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("交互式计算机图形学 基于 OpenGL 的自顶向下方法(第六版)")]),_:1})])]),l("h3",g,[s("Online "),e(n,{class:"header-anchor",href:"#online","aria-hidden":"true"},{default:o(()=>[s("#")]),_:1})]),l("ul",null,[l("li",null,[e(n,{href:"https://learnopengl-cn.github.io/",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("LearnOpenGL CN")]),_:1})]),l("li",null,[e(n,{href:"http://www.opengl-tutorial.org/cn/",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("opengl-tutorial")]),_:1})])]),l("h2",m,[s("Progress "),e(n,{class:"header-anchor",href:"#progress","aria-hidden":"true"},{default:o(()=>[s("#")]),_:1})]),l("ul",null,[_,l("li",null,[e(n,{href:"https://www.jetbrains.com/clion/",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("CLion: A cross-platform IDE for C and C++")]),_:1})]),l("li",null,[e(n,{href:"https://glad.dav1d.de/",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("glad")]),_:1})])]),w,l("p",null,[s("下载 "),e(n,{href:"https://glad.dav1d.de/",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("glad")]),_:1}),s("，macOS 据说只支持 3.3，所以我选择了 "),E,s(" 和 "),L,s("。 解压后将 "),b,s(" 文件夹直接放入 "),k,s(" 文件夹下。")]),O,G,S,v,$,N,l("blockquote",null,[l("p",null,[s("ref: "),e(n,{href:"https://www.cnblogs.com/shayue/p/Mac-CLion-xiaOpenGL-huan-jing-pei-zhi.html",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("https://www.cnblogs.com/shayue/p/Mac-CLion-xiaOpenGL-huan-jing-pei-zhi.html")]),_:1}),s(" 对原文多处进行了修改，CMakeLists.txt 内容缩减。使得步骤更为简单。")])])]),"main-header":o(()=>[t(a.$slots,"main-header")]),"main-header-after":o(()=>[t(a.$slots,"main-header-after")]),"main-nav":o(()=>[t(a.$slots,"main-nav")]),"main-content":o(()=>[t(a.$slots,"main-content")]),"main-content-after":o(()=>[t(a.$slots,"main-content-after")]),"main-nav-before":o(()=>[t(a.$slots,"main-nav-before")]),"main-nav-after":o(()=>[t(a.$slots,"main-nav-after")]),comment:o(()=>[t(a.$slots,"comment")]),footer:o(()=>[t(a.$slots,"footer")]),aside:o(()=>[t(a.$slots,"aside")]),"aside-custom":o(()=>[t(a.$slots,"aside-custom")]),default:o(()=>[t(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const K=i(f,[["render",R]]);export{V as __pageData,K as default};
