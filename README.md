### 思路
 1. 可以将ES6语法转换成ES5的语法
     * 通过babylon生成AST（抽象语法树）
     * 通过babel-core将AST重新编码
 2. 可以分析模块之间的依赖关系
     * 通过babel-traverse的importDeclaration方法获取依赖属性
 3. 生成的JS文件可以在浏览器运行

### 效果
1 实现的效果和源代码打包出来的效果一致，是一个闭包函数，通过require启动程序
2 可以将ES6语法转换成ES5的语法
3 可以分析模块之间的依赖关系
4 实现类似于webpack.config.js，对文件入口，输出结果进行配置
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215205608609.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NoZW5fZW5zb25fMQ==,size_16,color_FFFFFF,t_70)
