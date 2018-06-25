# 包的作用
rimraf 包的作用：以包的形式包装rm -rf命令，就是用来删除文件和文件夹的，不管文件夹是否为空，都可以删除。

# install
npm install rimraf --save-dev

# use
这个包只提供一个方法：rimraf(pathName, function(err){})
``` javascript
const rimraf = require('rimraf');
rimraf('./test.txt', function (err) { // 删除当前目录下的 test.txt
  console.log(err);
});
```