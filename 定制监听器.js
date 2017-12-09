var antlr4 = require('antlr4/index');
const 圈3Listener = require('./圈3Listener.js').圈3Listener

定制监听器 = function () {
	圈3Listener.call(this);
	return this;
}

定制监听器.prototype = Object.create(圈3Listener.prototype);
定制监听器.prototype.constructor = 定制监听器;

var 常量_指令名_前进 = "前进";
var 常量_指令名_转向 = "转向";

var 序号 = 0;

var 画布尺寸 = {x: 1000, y: 800};
var 原点 = {x: 画布尺寸.x/2, y: 画布尺寸.y/2};
var 前进角度 = 90; // 默认向上, 对应弧度: 90 * Math.PI / 180
// 指令格式: 名称 (转向, 前进, 笔色等等); 参数 (转向角度--右为负,左为正; 前进长度-像素数等等);
var 指令序列 = [];
// TODO: 支持多层循环
var 循环次数 = 0;
var 当前循环的指令序列 = [];

定制监听器.prototype.enter程序 = function(ctx) {

  重置状态();
  // 只需调用一次
  // https://p5js.org/reference/#/p5/setup
  构图 = function() {
    新画布(画布尺寸.x, 画布尺寸.y);
  }
};

function 重置状态() {
  序号 = 0;
  原点 = {x: 画布尺寸.x/2, y: 画布尺寸.y/2};
  前进角度 = 90;
  指令序列 = [];
}

// 根据指令序列, 生成路径分段描述(段起止点坐标, 颜色等等)
// 如: 前进50, 左转90度, 前进50 应返回:
// [{起点: {x: 200, y: 200}, 终点: {x: 200, y: 150}, 长度: 50},
// {起点: {x: 200, y: 150}, 终点: {x: 150, y: 150}, 长度: 50}]
function 生成路径表(指令序列) {
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

定制监听器.prototype.exit程序 = function(ctx) {
  document.getElementById("调试输出").innerHTML = JSON.stringify(指令序列);
  var 路径表 = 生成路径表(指令序列);
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
};

定制监听器.prototype.enter循环 = function(上下文) {
  循环次数 = parseInt(上下文.getChild(1).getText());
}

定制监听器.prototype.exit循环 = function(上下文) {
  for (var i = 0; i < 循环次数; i++) {
    for (var j = 0; j < 当前循环的指令序列.length; j++) {
      指令序列.push(当前循环的指令序列[j]);
    }
  }
  当前循环的指令序列 = [];
  循环次数 = 0;
}

定制监听器.prototype.exit前进 = function(上下文) {
  var 前进量 = 上下文.getChild(1).getText()
  添加指令({名称: 常量_指令名_前进, 参数: parseInt(前进量)});
};

定制监听器.prototype.exit转向 = function(上下文) {
  var 方向 = 上下文.getChild(0).getText();
  var 角度 = parseInt(上下文.getChild(2).getText());

  角度 = 角度 * (方向 === "左" ? 1 : -1);
  添加指令({名称: 常量_指令名_转向, 参数: 角度});
};

function 添加指令(指令) {
  if (循环次数 > 0) {
    当前循环的指令序列.push(指令);
  } else {
    指令序列.push(指令);
  }
}

exports.定制监听器 = 定制监听器;
exports.生成路径表 = 生成路径表;
exports.常量_指令名_前进 = 常量_指令名_前进;
exports.常量_指令名_转向 = 常量_指令名_转向;