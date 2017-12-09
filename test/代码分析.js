const 分析 = require("../编译.js").分析
const 常量_指令名_前进 = require("../定制监听器.js").常量_指令名_前进
const 常量_指令名_转向 = require("../定制监听器.js").常量_指令名_转向


QUnit.test( "分析_空", function( assert ) {
  assert.deepEqual( 分析("开始\n前进50\n结束\n").返回指令序列(), [{名称: 常量_指令名_前进, 参数: 50}], "通过!" );
});