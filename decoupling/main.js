var Hub = require('./Hub');
var Module1 = require('./Module1');
var Module2 = require('./Module2');

var hub = new Hub;
var inputModule = new Module1;
var outputModule = new Module2;

hub.regist(inputModule);

outputModule.regist(hub);


inputModule.setInput('this is m1 speaking...');