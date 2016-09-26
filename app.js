var express=require('express');
var app= express();
var sampleController=require('./controllers/sampleController')
app.set('view engine','ejs');


app.use(express.static('./public'));
sampleController(app);

app.listen(3000);
console.log('listening to port 3000');
