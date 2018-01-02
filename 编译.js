const antlr4 = require("antlr4/index")
const 圈3Lexer = require("./圈3Lexer.js")
const 圈3Parser = require("./圈3Parser.js")
const 定制监听器 = require("./定制监听器.js").定制监听器
const 定制访问器 = require("./定制访问器.js")

// TODO: 需改进-现为全局, 由于browserify
分析 = function(代码) {
  var 输入流 = new antlr4.InputStream(代码)
  var 词法分析器 = new 圈3Lexer.圈3Lexer(输入流)
  var 词  = new antlr4.CommonTokenStream(词法分析器)
  var 语法分析器 = new 圈3Parser.圈3Parser(词)
  语法分析器.buildParseTrees = true

  var 监听器 = new 定制监听器();
/*  antlr4.tree.ParseTreeWalker.DEFAULT.walk(监听器, 语法分析器.程序())
  document.getElementById("调试输出").innerHTML = "监听器1";
*/
  var 访问器 = new 定制访问器.定制访问器();
  var 语法树 = 访问器.visit(语法分析器.程序());
  document.getElementById("调试输出").innerHTML += JSON.stringify(语法树);
  
  var 指令序列 = 生成指令序列(语法树);
  var 路径表 = 生成路径表(指令序列, 初始前进角度);
  绘制 = function() {
    var 当前序号 = 序号;
    background(255, 255, 255);

    for (var i = 0; i < 路径表.length; i++ ) {
      var 段 = 路径表[i];
      var 起点 = 段.起点;
      var 终点 = 段.终点;
      var 距离 = 段.长度;
      if (当前序号 < 距离) {
        line(起点.x, 起点.y, 起点.x + (终点.x - 起点.x) * 当前序号 / 距离, 起点.y + (终点.y - 起点.y) * 当前序号 / 距离);
        break;
      } else {
        line(起点.x, 起点.y, 终点.x, 终点.y);
        当前序号 = 当前序号 - 段.长度;
      }
    }
    
    序号 ++;
  }

  return 监听器;
}

var 常量_指令名_前进 = "前进";
var 常量_指令名_转向 = "转向";

var 序号 = 0;

var 画布尺寸 = {x: 1000, y: 800};
var 原点 = {x: 画布尺寸.x/2, y: 画布尺寸.y/2};
var 初始前进角度 = 90; // 默认向上, 对应弧度: 90 * Math.PI / 180
// 指令格式: 名称 (转向, 前进, 笔色等等); 参数 (转向角度--右为负,左为正; 前进长度-像素数等等);
//var 指令序列 = [];

function 重置状态() {
  序号 = 0;
  原点 = {x: 画布尺寸.x/2, y: 画布尺寸.y/2};
  前进角度 = 90;
  /*指令序列 = [];
  循环次数 = 0;
  当前循环的指令序列 = [];*/
}

function 生成指令序列(语法树) {
  // TODO: 具体实现
  return [{名称: 常量_指令名_前进, 参数: 50},
    {名称: 常量_指令名_转向, 参数: 90},
    {名称: 常量_指令名_前进, 参数: 50}];
}

// 根据指令序列, 生成路径分段描述(段起止点坐标, 颜色等等)
// 如: 前进50, 左转90度, 前进50 应返回:
// [{起点: {x: 200, y: 200}, 终点: {x: 200, y: 150}, 长度: 50},
// {起点: {x: 200, y: 150}, 终点: {x: 150, y: 150}, 长度: 50}]
function 生成路径表(指令序列, 前进角度) {
  // 段: {起点: {x, y}, 终点: {x, y}, 长度, 颜色}
  var 路径表 = [];
  var 起点 = 原点;
  for(var i = 0; i < 指令序列.length; i++ ){
    var 指令 = 指令序列[i];
    var 指令名 = 指令.名称;
    var 段 = {起点: 起点};
    if (指令名 === 常量_指令名_前进) {
      var 距离 = 指令.参数;
      var x增量 = Math.cos(前进角度 * Math.PI / 180);
      var y增量 = Math.sin(前进角度 * Math.PI / 180);
      段.终点 = {x: 起点.x + x增量 * 距离, y: 起点.y - y增量 * 距离};
      段.长度 = 距离;
      路径表.push(段);

      起点 = 段.终点;
    } else if (指令名 === 常量_指令名_转向) {
      前进角度 += 指令.参数;
    }
  }
  return 路径表;
}

exports.分析 = 分析;