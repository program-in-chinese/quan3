var 常量_指令名_前进 = "前进";
var 常量_指令名_转向 = "转向";

// 指令格式: 名称 (转向, 前进, 笔色等等); 参数 (转向角度--右为负,左为正; 前进长度-像素数等等);
function 生成指令序列(节点) {
  var 指令序列 = [];
  // TODO: 根节点类型不应为空
  if (!节点.类型) {
    var 声明节点 = 节点.子节点;
    for (var i = 0; i < 声明节点.length; i++) {
      Array.prototype.push.apply(指令序列, 生成指令序列(声明节点[i]));
    }
  } else if (节点.类型 == "循环") {
    var 指令序列 = [];
    for (var i = 0; i < 节点.次数; i++) {
      Array.prototype.push.apply(指令序列, 生成指令序列({子节点: 节点.子节点}));
    }
  } // TODO: 修改类型统一为'指令'
  else if (节点.类型 == "前进" || 节点.类型 == "转向") {
    return [{名称: (节点.类型 == "前进" ? 常量_指令名_前进 : 常量_指令名_转向), 参数: 节点.参数}];
  }
  return 指令序列;
}

// 根据指令序列, 生成路径分段描述(段起止点坐标, 颜色等等)
// 如: 前进50, 左转90度, 前进50 应返回:
// [{起点: {x: 200, y: 200}, 终点: {x: 200, y: 150}, 长度: 50, 前进角度: 90},
// {起点: {x: 200, y: 150}, 终点: {x: 150, y: 150}, 长度: 50, 前进角度: 180}]
function 生成路径表(指令序列, 原点, 前进角度) {
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
      段.前进角度 = 前进角度;
      路径表.push(段);

      起点 = 段.终点;
    } else if (指令名 === 常量_指令名_转向) {
      前进角度 += 指令.参数;
    }
  }
  return 路径表;
}

exports.生成指令序列 = 生成指令序列;
exports.生成路径表 = 生成路径表;
exports.常量_指令名_前进 = 常量_指令名_前进;
exports.常量_指令名_转向 = 常量_指令名_转向;