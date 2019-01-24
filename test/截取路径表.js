const 截取路径表 = require("../语法树处理.js").截取路径表
const 截取路径 = require("../语法树处理.js").截取路径
const 按步进拆分路径表 = require("../语法树处理.js").按步进拆分路径表

const 路点0 = {x: 500, y: 400}
const 路点1 = {x: 500, y: 350}
const 路点2 = {x: 450, y: 350}
const 路点3 = {x: 450, y: 400}

const 向上段 = {起点: 路点0, 终点: 路点1, 长度: 50, 前进角度: 90};
const 向左段 = {起点: 路点1, 终点: 路点2, 长度: 50, 前进角度: 180};
const 向下段 = {起点: 路点2, 终点: 路点3, 长度: 50, 前进角度: 270};
const 向右段 = {起点: 路点3, 终点: 路点0, 长度: 50, 前进角度: 360};
const 路径表 = [向上段, 向左段];
const 全路径表 = [向上段, 向左段, 向下段, 向右段];

QUnit.test( "截取路径1", function( assert ) {
  assert.deepEqual(
    截取路径(向上段, 0, 10),
    {
      截取部分: [{起点: 路点0, 终点: {x: 500, y: 390}, 长度: 10, 前进角度: 90}],
      剩余部分: [{起点: {x: 500, y: 390}, 终点: 路点1, 长度: 40, 前进角度: 90}]
    },
    "通过!" );
});

QUnit.test( "截取路径2", function( assert ) {
  assert.deepEqual(
    截取路径(向上段, 10, 20),
    {
      截取部分: [{起点: {x: 500, y: 390}, 终点: {x: 500, y: 380}, 长度: 10, 前进角度: 90}],
      剩余部分: [{起点: {x: 500, y: 380}, 终点: 路点1, 长度: 30, 前进角度: 90}]
    },
    "通过!" );
});

QUnit.test( "截取路径3", function( assert ) {
  assert.deepEqual(
    截取路径(向上段, 10, 50),
    {
      截取部分: [{起点: {x: 500, y: 390}, 终点: 路点1, 长度: 40, 前进角度: 90}],
      剩余部分: []
    },
    "通过!" );
});

QUnit.test( "截取路径_超出末端", function( assert ) {
  assert.deepEqual(
    截取路径(向上段, 0, 60),
    {
      截取部分: [向上段],
      剩余部分: []
    },
    "通过!" );
});

QUnit.test( "截取单路径表1", function( assert ) {
  assert.deepEqual(
    截取路径表([向上段], 0, 10),
    {
      截取部分: 
      [
        {起点: 路点0, 终点: {x: 500, y: 390}, 长度: 10, 前进角度: 90},
      ],
      剩余部分: [{起点: {x: 500, y: 390}, 终点: 路点1, 长度: 40, 前进角度: 90}]
    },
    "通过!" );
});

QUnit.test( "截取路径表1", function( assert ) {
  assert.deepEqual(
    截取路径表([向上段, 向左段], 0, 10),
    {
      截取部分: 
      [
        {起点: 路点0, 终点: {x: 500, y: 390}, 长度: 10, 前进角度: 90}
      ],
      剩余部分: [
        {起点: {x: 500, y: 390}, 终点: 路点1, 长度: 40, 前进角度: 90},
        向左段]
    },
    "通过!" );
});

QUnit.test( "截取路径表2", function( assert ) {
  assert.deepEqual(
    截取路径表([向上段, 向左段], 40, 50),
    {
      截取部分: [
        {起点: {x: 500, y: 360}, 终点: 路点1, 长度: 10, 前进角度: 90}
      ],
      剩余部分: [向左段]
    },
    "通过!" );
});

QUnit.test( "截取路径表3", function( assert ) {
  assert.deepEqual(
    截取路径表([向上段, 向左段], 40, 60),
    {
      截取部分: [
        {起点: {x: 500, y: 360}, 终点: 路点1, 长度: 10, 前进角度: 90},
        {起点: 路点1, 终点: {x: 490, y: 350}, 长度: 10, 前进角度: 180}
      ],
      剩余部分: [
        {起点: {x: 490, y: 350}, 终点: 路点2, 长度: 40, 前进角度: 180}
      ]
    },
    "通过!" );
});

QUnit.test( "截取路径表4", function( assert ) {
  assert.deepEqual(
    截取路径表([向上段, 向左段], 90, 100),
    {
      截取部分: [
        {起点: {x: 460, y: 350}, 终点: 路点2, 长度: 10, 前进角度: 180}
      ],
      剩余部分: []
    },
    "通过!" );
});

QUnit.test( "截取全路径表开头", function( assert ) {
  assert.deepEqual(
    截取路径表([向上段, 向左段, 向下段, 向右段], 0, 10),
    {
      截取部分: [
        {起点: 路点0, 终点: {x: 500, y: 390}, 长度: 10, 前进角度: 90}
      ],
      剩余部分: [
        {起点: {x: 500, y: 390}, 终点: 路点1, 长度: 40, 前进角度: 90},
        向左段, 向下段, 向右段
      ]
    },
    "通过!" );
});

QUnit.test( "截取全路径表向左", function( assert ) {
  assert.deepEqual(
    截取路径表([向上段, 向左段, 向下段, 向右段], 50, 60),
    {
      截取部分: [
        {起点: 路点1, 终点: {x: 490, y: 350}, 长度: 10, 前进角度: 180}
      ],
      剩余部分: [
        {起点: {x: 490, y: 350}, 终点: 路点2, 长度: 40, 前进角度: 180},
        向下段, 向右段
      ]
    },
    "通过!" );
});

QUnit.test( "截取全路径表向下", function( assert ) {
  assert.deepEqual(
    截取路径表([向上段, 向左段, 向下段, 向右段], 100, 110),
    {
      截取部分: [
        {起点: 路点2, 终点: {x: 450, y: 360}, 长度: 10, 前进角度: 270}
      ],
      剩余部分: [
        {起点: {x: 450, y: 360}, 终点: 路点3, 长度: 40, 前进角度: 270},
        向右段
      ]
    },
    "通过!" );
});

QUnit.test( "截取全路径表向右", function( assert ) {
  assert.deepEqual(
    截取路径表([向上段, 向左段, 向下段, 向右段], 150, 160),
    {
      截取部分: [
        {起点: 路点3, 终点: {x: 460, y: 400}, 长度: 10, 前进角度: 360}
      ],
      剩余部分: [
        {起点: {x: 460, y: 400}, 终点: 路点0, 长度: 40, 前进角度: 360}
      ]
    },
    "通过!" );
});

QUnit.test( "截取全路径表末", function( assert ) {
  assert.deepEqual(
    截取路径表([向上段, 向左段, 向下段, 向右段], 198, 200),
    {
      截取部分: [
        {起点: {x: 498, y: 400}, 终点: 路点0, 长度: 2, 前进角度: 360}
      ],
      剩余部分: []
    },
    "通过!" );
});

QUnit.test( "按步进拆分路径表4段", function( assert ) {
  assert.deepEqual(
    按步进拆分路径表([向上段, 向左段, 向下段, 向右段], 50),
    [
      [向上段], [向左段], [向下段], [向右段]
    ],
    "通过!" );
});