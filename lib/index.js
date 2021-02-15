/**
 * 入口文件
 */

 const Compiler = require('./compiler');
 const options = require('../easyPack.config');

 new Compiler(options).run();