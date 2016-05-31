
/*
 * GET home page.
 */
var firstblood = require('./../db/firstblood_schema.js');

/**/

exports.index = function (req, res){

    res.render('index', {
        title: 'Express test',
    });
}

exports.luyou = function(req, res){
    res.render('lu-you-ye-mian', { title: '“路由”是长这样的！' });
}

exports.login = function (req, res){
	res.render('login', {
		title: 'login'
	});
}

/* home */
exports.home = function(req, res) {
  var query = { user: req.body.user, password: req.body.password };

  firstblood.userlist.count(query, function(err, doc) { //count返回集合中文档的数量，和 find 一样可以接收查询条件。query 表示查询的条件

    if (doc == 1) {

      var findResult = firstblood.userlist.find(function(error, result) {
        if (error) {
          res.send(error);
        } else {

          res.render('home', {
            title: '后台',
            status: doc,
            username: query.user,
            adminlist: result,
            date: new Date()
          });
        }
      });

    } else {
      res.render('home', {
        title: '后台',
        status: doc,
      });
      //res.redirect('/');
    }
  });
}







