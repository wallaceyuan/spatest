define({
  title: 'SPA - 打开新页面视图demo',
  body: '<nav class="navbar navbar-default navbar-static-top" role="navigation">\
    <div class="navbar-header">\
      <a class="navbar-brand" href="#demo/newpage">新页面</a>\
    </div>\
    <a href="#" class="btn btn-default navbar-btn btn-link pull-left"><span class="glyphicon glyphicon-chevron-left"></span></a>\
  </nav>\
  <div class="page-container-navbar">\
    <div class="container" style="background:red;">\
      <div class="page-header"><h1>我是新页面视图</h1></div>\
      <a href="#" class="btn btn-default">返回</a>\
    </div>\
  </div>\
  ',
  init: function(pageData) {
    var $view = this
    
    $('.page-container-navbar', $view).trigger('spa:scroll')
  }
})