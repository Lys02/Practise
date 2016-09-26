var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
mongoose.connect('mongodb://lys:lys@ds041546.mlab.com:41546/samplelys')

var sampleSchema=new mongoose.Schema({
  words: String
});
var Sample=mongoose.model('Sample',sampleSchema);

module.exports = function(app){

app.get('/',function(req,res){
Sample.find({},function(err,data)
{
  if(err)throw err;
  res.render('sample',{datawords:data});
});
});

app.post('/',urlencodedParser,function(req,res){
var newString=Sample(req.body).save(function(err,data){
  if(err)throw err;
  res.json(data);
})
});

}
