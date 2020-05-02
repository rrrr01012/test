//如果是非路徑形式的模塊
//路徑形式
// ./ 當前目錄
// ../ 上一級目錄
// /xxx 幾乎不用
// d:/a/foo.js幾乎不用
// 首位/代表根目錄
//require('./foo.js')

// 核心 只需照名字加載
//require('fs')

//第三方
//需用npm下載
//不可能有第三方模塊名字跟核心一樣
//先找到當前文件所屬的node_modules目錄
//  node_modules/art-template
//  node_modules/art-template/package.json中
//  main:記錄了入口模塊 -> index.js
// 如果package.json文件不存在 main的路徑也沒有
// 則node 會自動找該目錄下的index.js
// 也就是說index會做為一個默認被選項
// 如果以上任何條件都不成立，則會進入上一級node_modules目錄
// 直到當前根目錄還找不到，最後報錯

//注意:一個項目只有一個node_modules，放在項目根目錄中，所有子目錄中的文件都可以加載到
//不會出現多個modules
//var template = require('art-template')