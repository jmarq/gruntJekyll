var e=require('express');
var app=e();

app.use(e.static(__dirname+"/public"));

app.listen(8080);
