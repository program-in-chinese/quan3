![2019-01-23-logo圆包络]({{ "/演示/2019-01-23-logo圆包络.gif" | absolute_url }})

介绍:

- [JavaScript实现ZLOGO子集: 前进+转向](https://zhuanlan.zhihu.com/p/31748014)

- [JavaScript实现ZLOGO子集: 单层循环功能](https://zhuanlan.zhihu.com/p/31785790)

- [JavaScript实现ZLOGO子集: 测试用例](https://zhuanlan.zhihu.com/p/31870155)

- [JavaScript实现ZLOGO: 用语法树实现多层循环](https://zhuanlan.zhihu.com/p/32571516)

- [JavaScript实现ZLOGO: 前进方向和速度](https://zhuanlan.zhihu.com/p/52434775)

- [JavaScript实现ZLOGO: 界面改进与速度可调](https://zhuanlan.zhihu.com/p/55359648)

- [JavaScript实现ZLOGO: 性能改进](https://zhuanlan.zhihu.com/p/55626846)

由语法定义文件生成Listener, Visitor, Lexer等文件:
```
$ java -cp "antlr-4.7-complete.jar:$CLASSPATH" org.antlr.v4.Tool -Dlanguage=JavaScript -visitor 圈3.g4
```

圈3.js由如下生成:
```
$ browserify 编译.js > 圈3.js
```
提交前请通过所有测试:

安装[QUnit](http://qunitjs.com/)后运行:
```
$ qunit
```
