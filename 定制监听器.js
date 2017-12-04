var antlr4 = require('antlr4/index');
const 圈3Listener = require('./圈3Listener.js').圈3Listener

定制监听器 = function () {
	圈3Listener.call(this);
	return this;
}

定制监听器.prototype = Object.create(圈3Listener.prototype);
定制监听器.prototype.constructor = 定制监听器;

var 原点 = {x: 200, y: 200};
var 序号 = 0;
// 指令格式: 名称 (转向, 前进, 笔色等等); 参数 (转向角度--右为90,左为-90; 前进长度-像素数等等); 
var 指令序列 = [];

定制监听器.prototype.enter程序 = function(ctx) {
  序号 = 0;
  // 只需调用一次
  // https://p5js.org/reference/#/p5/setup
  构图 = function() {
    新画布(720, 400);
  }
};

定制监听器.prototype.exit程序 = function(ctx) {
  绘制 = function() {
    background(255, 255, 255);

    for(var i = 0; i < 指令序列.length; i++ ){
      var 指令 = 指令序列[i];
      var 指令名 = 指令.名称;
      if (指令名 === "前进") {
        var 前进距离 = 指令.参数;
        line(原点.x, 原点.y,
          原点.x, 序号 < 前进距离 ? 原点.y - 序号 : 原点.y - 前进距离);
      }
    }
    
    序号 ++;
  }
};

定制监听器.prototype.exit前进 = function(ctx) {
  var 前进量 = ctx.getChild(1).getText()
  document.getElementById("调试输出").innerHTML = "前进: " + 前进量;

  指令序列.push({名称: "前进", 参数: parseInt(前进量)});
};


exports.定制监听器 = 定制监听器;