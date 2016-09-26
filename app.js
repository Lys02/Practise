var express=require('express');
var app= express();
var sampleController=require('./controllers/sampleController')
app.set('view engine','ejs');


app.use(express.static('./public'));
sampleController(app);

var port=Number(process.env.PORT || 3000)
app.listen(port);
console.log('listening to port 3000');
