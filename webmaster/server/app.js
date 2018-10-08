var express=require('express');
var app=express();
var conn=require('./modules/conn');
var session=require("express-session");
app.use(express.static('public'))
var fs = require('fs');
app.use(session({'secret':'wy'}));
var multer=require('multer');
var upload = multer({ dest: 'public/uploads/' }); 
var session=require("express-session");
 app.use(session({'secret':'wy'}));
var imgCode=require('./modules/imgCode');
var md5=require('./modules/md5');
var bodyParser=require('body-parser');
var urlencode=bodyParser.urlencoded();
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');//自定义中间件，设置跨域需要的响应头。
    next();
});


//请求验证码
app.get('/getCode',(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*'
    });
   var svg=imgCode(request,response);
   request.session.code=svg[1];
   response.end(JSON.stringify(svg));
   
});
//验证码是否正确
app.post('/defCode',urlencode,(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
        "Access-Control-Allow-Credentials": "true"    
    });
    request.body.trueCode==request.session.code ?  response.end('true') :  response.end('false');
});
//验证用户名密码是否正确
app.get('/login',(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
        "Access-Control-Allow-Credentials": "true"    
    });
    // console.log(request.query);
    // response.end('收到')
    var name=request.query.name;
    // console.log(conn)
    var password=request.query.password;
    //链接数据库
    var sql='select * from master where name="'+name+'" and password="'+password+'" ';
     conn.query(sql,(err,result)=>{
        //   console.log(err)
         result.length!=0?response.end('登录成功'): response.end('你的用户名或密码错误');
        // console.log(result);
        // response.end(result)
     })

});
//重置密码
app.get('/resetname',(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });
    // update MyGuests set name='Mary' where id=1
     var  name = request.query.name;
     var  password=request.query.password;
    var sql =' update master set password="'+password+'" where name="'+name+'"';
    conn.query(sql,(err,result)=>{
        //  console.log(err);
        //  console.log(result);
         response.end('a')
    })



});   

//获取个人信息
app.get('/personData',(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });
    var name=  request.query.name;
    var sql='select * from master where name="'+name+'"';
    conn.query(sql,(err,result)=>{
         response.end(JSON.stringify(result));
    })
});

//重置个人信息
app.post('/resetData',urlencode,(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });
    var  iphone=request.body.iphone;
    var  name=request.body.name;
    var  email=request.body.email;
    var nickname=request.body.nickname;
    var sex=request.body.sex;
    var textare=request.body.extare;
    // console.log(iphone,email,nickname,sex,textare)
    var sql='update master set iphone="'+iphone+'" , email="'+email+'"  , nickname="'+nickname+'" ,  textare="'+textare+'", sex="'+sex+'" where name="'+name+'"'
    conn.query(sql,(err,result)=>{
        // console.log(err,result);
        response.end('修改成功')
   })

});

//头像上传
app.post('/imgupload',upload.single('file1'),urlencode,(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*'  
    });
    
    // console.log(request.file.path)
var arr=request.file.originalname.split('.');
var ext=arr[arr.length-1];
//  console.log(ext)
var newFile='public/uploads/'+request.query.name+'.'+ext;
fs.renameSync(request.file.path,newFile);

response.end('上传头像成功');

});

//跟据传参获得商品列表
app.get('/goodslist',(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });
    var start=request.query.start;
    var count=request.query.count;

    var sql = 'select * from goodslist  '
    conn.query(sql,(err,result)=>{
        // console.log(err)
        //获取商品总数量
        var length=result.length;
        //查询商拼
        var sql='select * from goodslist order by id limit '+start+', '+count+' ';
        conn.query(sql,(err,result)=>{
            //   console.log(result);
              response.end(JSON.stringify(result));
        })

    })
})

//获取商品数量
app.get('/goodslistCount',(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });
    var sql =  'select * from goodslist  '
    conn.query(sql,(err,result)=>{
        var length=result.length;
        response.end(String(length));
    })
});

//修改商品信息
app.post('/resetGood',urlencode,(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });
    
    var id=request.body.d;
    var name=request.body.name;
    var price=request.body.price;
    console.log(id,name,price)
    var sql =' update goodslist set name="'+name+'", price="'+price+'", status="'+request.body.status+'" where id="'+id+'"';
    conn.query(sql,(err,result)=>{
        // console.log(err);
        response.end('成功')
    })
});

//删除单个商品
app.get('/delGood',(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });
    console.log(request.query.id);
    // DELETE FROM MyGuests where id=1;
    var  sql='delete from goodslist where id="'+request.query.id+'" ';
    conn.query(sql,(err,result)=>{
        //  console.log(err);
         response.end('删除成功');

         
    })
});

//增加商品
app.post('/addGood',urlencode,(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });
    // console.log(request.body);
    var  name=request.body.ame;
    var price=request.body.price;
    var type=request.body.type;
    var status=request.body.status;
    // insert into MyGuests (firstname, lastname, email)
    //  values ('John', 'Doe', 'john@example.com')
    var  sql = " insert into goodslist (name,price,type,status) values ('"+name+"','"+price+"','"+type+"','"+status+"') ";
    conn.query(sql,(err,result)=>{
        // console.log(err);
        response.end('添加成功');
    })
});

//删除多个商品
app.get('/delGoods',(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });
    var arr=request.query.id.split('-');
   arr.forEach(item=>{
       var sql='delete  from goodslist where id="'+item+'" ';
       conn.query(sql,(err,result)=>{
           console.log(result);
           if(result===undefined||result.affectedRows===0){
               response.end('false');
           }else if(result.affectedRows===1){
            response.end('true');
           }
    });
   });
//    response.end('全部删除');
});

//得到商品所有数据
app.get('/allData',(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });
      var sql =  'select * from goodslist  ';
      conn.query(sql,(err,result)=>{
        //   console.log(err);
          response.end(JSON.stringify(result));
      })
});

//搜索商品
app.get('/searchGood',(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });
 
    var type=request.query.type;
    var key=request.query.key;
 var  sql='select * from goodslist where type="'+type+'" ';
   conn.query(sql,(err,result)=>{
      var  arr=[];
      result.forEach((item,idx)=>{
           JSON.stringify(item).indexOf(key)>=0 ? arr.push(item) :null;
      });
      arr.length!=0 ? response.end(JSON.stringify(arr)) : response.end('没有找到数据');
   })


})

//请求用户数据
app.get('/manageuser',(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
        "Access-Control-Allow-Credentials": "true"    
    });
    var sql = 'select * from userlist';
    conn.query(sql,(err,result)=>{
        // console.log(err,result);
        response.end(JSON.stringify(result));
    })

}); 

//修改用户数据信息
app.post('/changeuserlist',urlencode,(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
        "Access-Control-Allow-Credentials": "true"  
    });
    // console.log(request.body);
    var id = request.body.id;
    var name = request.body.name;
    var iphone = request.body.iphone;
    var email = request.body.email;
    var juese = request.body.juese;
    var status = request.body.status;
    if(id===''){
        var sql = 'insert into userlist (name,iphone,email,juese,status) values ("'+name+'","'+iphone+'","'+email+'","'+juese+'","'+status+'")';
    }else{
        var sql = 'update userlist set name="'+name+'",iphone="'+iphone+'",email="'+email+'",juese="'+juese+'",status="'+status+'" where id="'+id+'"';
    }
    
    conn.query(sql,(err,result)=>{
        // console.log(err,result);
        response.end(JSON.stringify(result));
    })
    
})

//删除用户数据
app.get('/delete',(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
        "Access-Control-Allow-Credentials": "true"  
    });
    var id = request.query.id;
    var sql = 'delete from userlist where id="'+id+'"';
    conn.query(sql,(err,result)=>{
        // console.log(err,result);
        response.end(JSON.stringify(result));
    })
})

//删除多选框数据
app.get('/removeuser',(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
        "Access-Control-Allow-Credentials": "true"  
    });
    request.query.id.split('-').forEach(item=>{
        var sql = 'delete from userlist where id = "'+item+'"';
        conn.query(sql,(err,result)=>{
            // console.log(err,result);
            if(result===undefined||result.affectedRows===0){
                response.end('false');
            }else if(result.affectedRows===1){
             response.end('true');
            }
        });
    });
    // response.end('操作成功!');
});

//数据数量
app.get('/getcount',(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
        "Access-Control-Allow-Credentials": "true"  
    });
    var sql = 'select * from userlist';
    conn.query(sql,(err,result)=>{
        // console.log(result.length);
        response.end(String(result.length));
    });
    
})


app.listen(8888)