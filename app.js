const express= require('express');
const fs=require('fs');

var app=express();

app.set('view engine','hbs');
app.use((req,res,next)=>{
  var now=new Date().toString();
  var log=`${now}:${req.method}${req.url}`;
  console.log(log);
  fs.appendFile('servlet.log',log+'\n',(err)=>{
  if(err){
    console.log('unable to append servlet.log');
  }
});
  next();
});
app.use(express.static(__dirname));

app.get('/',(req,res)=>{
  res.send({
  name: 'vinoth',
hobby:'coding'
});
});

app.get('/about',(req,res)=>{
res.render('about.hbs',{
  HeroName: 'Vinoth',
  HeroineName:'Tammanah'
});
});
app.listen(3000,()=>{
  console.log('connection established');
});
