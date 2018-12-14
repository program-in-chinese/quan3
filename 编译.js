const antlr4 = require("antlr4/index")
const 圈3Lexer = require("./圈3Lexer.js")
const 圈3Parser = require("./圈3Parser.js")
const 定制访问器 = require("./定制访问器.js")
const 生成路径表 = require("./语法树处理").生成路径表
const 生成指令序列 = require("./语法树处理").生成指令序列

// TODO: 需改进-现为全局, 由于browserify
分析 = function(代码) {
  重置状态();

  var 输入流 = new antlr4.InputStream(代码)
  var 词法分析器 = new 圈3Lexer.圈3Lexer(输入流)
  var 词  = new antlr4.CommonTokenStream(词法分析器)
  var 语法分析器 = new 圈3Parser.圈3Parser(词)
  语法分析器.buildParseTrees = true

  var 访问器 = new 定制访问器.定制访问器();
  var 语法树 = 访问器.visit(语法分析器.程序());
  //document.getElementById("调试输出").innerHTML += JSON.stringify(语法树);
  
  // TODO: 添加测试后, 合并两个接口: 生成指令序列, 生成路径表
  var 指令序列 = 生成指令序列(语法树);
  var 路径表 = 生成路径表(指令序列, 原点, 初始前进角度);

  var 指示方向图 = createImg("图标/蚂蚁头向上.png")
  指示方向图.size(18, 17);
  // TODO: 提取到二阶函数
  绘制 = function() {
    var 当前序号 = 序号;
    const 速度 = 1;
    background(255, 255, 255);

    for (var i = 0; i < 路径表.length; i++ ) {
      var 段 = 路径表[i];
      var 起点 = 段.起点;
      var 终点 = 段.终点;
      var 距离 = 段.长度;
      if (当前序号 < 距离 / 速度) {
        var 当前x = 起点.x + (终点.x - 起点.x) * 当前序号 * 速度 / 距离;
        var 当前y = 起点.y + (终点.y - 起点.y) * 当前序号 * 速度 / 距离;
        指示方向图.position(当前x + 246, 当前y); // TODO: 需要对准线头
        指示方向图.style("transform", "rotate(" + (90 - 段.前进角度) + "deg)")
        line(起点.x, 起点.y, 当前x, 当前y);
        break;
      } else {
        line(起点.x, 起点.y, 终点.x, 终点.y);
        当前序号 = 当前序号 - 段.长度 / 速度;
      }
    }
    
    序号 += 速度;
  }
  return 访问器;
}

var 序号 = 0;

var 画布尺寸 = {x: 1000, y: 800};
var 原点 = {x: 画布尺寸.x/2, y: 画布尺寸.y/2};
var 初始前进角度 = 90; // 默认向上, 对应弧度: 90 * Math.PI / 180

function 重置状态() {
  序号 = 0;
  原点 = {x: 画布尺寸.x/2, y: 画布尺寸.y/2};
  前进角度 = 90;
}

exports.分析 = 分析;