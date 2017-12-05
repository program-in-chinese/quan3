var antlr4 = require('antlr4/index');
const 圈3Listener = require('./圈3Listener.js').圈3Listener

定制监听器 = function () {
	圈3Listener.call(this);
	return this;
}

定制监听器.prototype = Object.create(圈3Listener.prototype);
定制监听器.prototype.constructor = 定制监听器;

var 序号 = 0;
var 原点 = {x: 200, y: 200};
var 前进方向 = 90; // 默认向上, 对应弧度: 90 * Math.PI / 180
// 指令格式: 名称 (转向, 前进, 笔色等等); 参数 (转向角度--右为90,左为-90; 前进长度-像素数等等); 
var 指令序列 = [];

定制监听器.prototype.enter程序 = function(ctx) {

  重置状态();
  // 只需调用一次
  // https://p5js.org/reference/#/p5/setup
  构图 = function() {
    新画布(720, 400);
  }
};

function 重置状态() {
  序号 = 0;
  原点 = {x: 200, y: 200};
  前进方向 = 90;
  指令序列 = [];
}
// 根据指令序列, 生成路径分段描述(段起止点坐标, 颜色等等)
// 如: 前进50, 左转90度, 前进50 应返回:
// {起点: {x: 200, y: 200}, 终点: {x: 200, y: 150}, 长度: 50},
// {起点: {x: 200, y: 150}, 终点: {x: 150, y: 150}, 长度: 50}
function 生成路径表(指令序列) {
  // 段: {起点: {x, y}, 终点: {x, y}, 长度, 颜色}
  var 路径表 = [];
  var 起点 = 原点;
  for(var i = 0; i < 指令序列.length; i++ ){
    var 指令 = 指令序列[i];
    var 指令名 = 指令.名称;
    var 段 = {起点: 起点};
    if (指令名 === "前进") {
      var 距离 = 指令.参数;
      var x增量 = Math.cos(前进方向 * Math.PI / 180);
      var y增量 = Math.sin(前进方向 * Math.PI / 180);
      段.终点 = {x: 起点.x + x增量 * 距离, y: 起点.y - y增量 * 距离};
      段.长度 = 距离;
      路径表.push(段);

      起点 = 段.终点;
    } else if (指令名 === "转向") {
      前进方向 -= 指令.参数;
    }
  }
  return 路径表;
}

定制监听器.prototype.exit程序 = function(ctx) {

  // TODO: 再次运行时, 似乎起点/方向/路径表未被重置
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
    /*for(var i = 0; i < 指令序列.length; i++ ){
      var 指令 = 指令序列[i];
      var 指令名 = 指令.名称;
      //if (指令名 === "前进") {
        var 前进距离 = 50;
        if (序号 < 50) {
          line(原点.x, 原点.y,
            原点.x, 原点.y - 序号);
        } else {
          line(原点.x, 原点.y,
            原点.x, 原点.y - 前进距离);
        }
        if (序号 >= 50 && 序号 < 100) {
          line(原点.x, 原点.y - 前进距离,
            原点.x - (序号 - 50), 原点.y - 前进距离);
        } else if (序号 > 100) {
          line(原点.x, 原点.y - 前进距离,
            原点.x - 50, 原点.y - 前进距离);
        }*/
        // TODO: 根据方向动态生成目标位置
        /*if (前进方向 === 0) {
          if (序号 < 前进距离) {
            头位置.y = 位置.y - 序号;
            line(位置.x, 位置.y,
              位置.x, 头位置.y);
          } else {
            头位置.y = 位置.y - 前进距离;
            line(位置.x, 位置.y,
              位置.x, 头位置.y);
          }
        /*}/* else if (前进方向 === -90) {
          if (序号 < 前进距离) {
            头位置.y = 位置.y - 序号;
            line(位置.x, 位置.y,
              位置.x, 头位置.y);
          } else {
            头位置.y = 位置.y - 前进距离;
            line(位置.x, 位置.y,
              位置.x, 头位置.y);
          }
        }*/
      /*} else if (指令名 === "转向") {
        前进方向 = 指令.参数;
      }*/
    //}
    
    序号 ++;
  }
};

定制监听器.prototype.exit前进 = function(上下文) {
  var 前进量 = 上下文.getChild(1).getText()
  document.getElementById("调试输出").innerHTML = "前进: " + 前进量;

  // TODO: 名称常量化
  指令序列.push({名称: "前进", 参数: parseInt(前进量)});
};

定制监听器.prototype.exit转向 = function(上下文) {
  var 方向 = 上下文.getChild(0).getText();
  var 角度 = parseInt(上下文.getChild(2).getText());

  角度 = 角度 * (方向 === "左" ? -1 : 1);
  document.getElementById("调试输出").innerHTML = "转向: " + 角度;

  指令序列.push({名称: "转向", 参数: 角度});
};

exports.定制监听器 = 定制监听器;