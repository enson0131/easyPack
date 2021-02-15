(function(modules) {
            function require(filename) {
                var fn = modules[filename];
                var module = { exports: {}};

                fn(require, module, module.exports)
                
                return module.exports
            }

            require('D:\myStudySpace\easyPack\src\index.js')
        })({'D:\myStudySpace\easyPack\src\index.js': function(require, module, exports) {"use strict";

var _greeting = require("./greeting.js");

document.write((0, _greeting.greeting)('easyPack!'));},'./greeting.js': function(require, module, exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.greeting = greeting;
function greeting(name) {
  return 'hello ' + name;
}},})