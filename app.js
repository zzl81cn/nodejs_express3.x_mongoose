/**
 * Module dependencies. 依赖的模块（处理路由，业务逻辑）
 */
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , ejs = require('ejs');//手动添加 ejs 以便支持 .html

//实例化 express 并赋值app变量
var app = express();

// all environments 依赖的环境（配置参数）
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');

//让Ejs支持 html
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
//app.set('view engine', 'ejs');

app.use(express.favicon());
app.use(express.logger('dev'));

//bodyParser 改成 urlencoded 可以忽略一些 Node窗口里的警告
app.use(express.urlencoded());
//app.use(express.bodyParser());

app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only 开发模式（检查错误）
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// 路由解析
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/lu-you-qing-qiu', routes.luyou);
// firstblood 项目路由
app.get('/login',routes.login);//增加
app.post('/home',routes.home);//提交


// 创建一个http server 启动端口 
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
