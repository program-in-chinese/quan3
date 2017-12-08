
const 定制监听器 = require("../定制监听器.js").定制监听器
const 生成路径表 = require("../定制监听器.js").生成路径表
const 常量_指令名_前进 = require("../定制监听器.js").常量_指令名_前进

QUnit.test( "生成路径表_空", function( assert ) {
  assert.deepEqual( 生成路径表([]), [], "通过!" );
});

QUnit.test( "生成路径表_前进1", function( assert ) {
  assert.deepEqual( 生成路径表([{名称: 常量_指令名_前进, 参数: 50}]), [{起点: {x: 500, y: 400}, 终点: {x: 500, y: 350}, 长度: 50}], "通过!" );
});