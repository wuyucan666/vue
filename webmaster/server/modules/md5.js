var crypto=require('crypto');

module.exports=function(content){
   var md5=crypto.createHash('md5');
   return md5.update(content,'utf8').digest('hex');
}