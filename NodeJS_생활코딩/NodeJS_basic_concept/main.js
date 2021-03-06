var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var path = require('path')
var sanitizeHtml = require('sanitize-html');

var template = require('./lib/template');

var app = http.createServer(function(request,response){
    /* request : when user request sending data to website,
    the data that user send to web.*/
    /* reponse : when user repond to website, 
    the data that user send to web*/
    var _url = request.url;
    var queryData = url.parse(_url,true).query;
    var pathname = url.parse(_url,true).pathname;

    if(pathname === '/')
    {
        if(queryData.id === undefined)
        {
            fs.readdir('./data',function(error,filelist){
                var title = 'welcome';
                var description = 'hello';
                var list = template.list(filelist);
                var templateHTML = template.html(title,list,
                    `<h2>${title}<h2>${description}`,
                    `<a href = "/create">create</a>`);
                    response.writeHead(200);
                    response.end(templateHTML);
                    //response.end; // here, code is applied to website
            })
        } 
        else
        {
        fs.readdir('./data',function(error,filelist){
            var filteredID = path.parse(queryData.id).base;
            fs.readFile(`data/${filteredID}`,'utf-8',function(error,description){
                // readFIle function = read data from 'data/queryData.id' and express as description
                var title = queryData.id;
                var sanitizeTitle = sanitizeHtml(title);
                var sanitizeDescription = sanitizeHtml(description);
                /* sanitize = delete bad contents that can change the original code
                from website*/
                var list = template.list(filelist);
                var templateHTML = template.html(title, list,
                    `<h2>${sanitizeTitle}</h2><p>${sanitizeDescription}</p>`,
                    
                    `<a href = "/create">create</a>
                    <a href = "/update?id=${sanitizeTitle}">update</a>
                    <form action = "delete_process" method = "post" onsubmit="123">
                        <input type = "hidden" name = "id" value = "${sanitizeTitle}">
                        <input type = "submit" value = "delete">
                    </form>`)
                response.writeHead(200);
                response.end(templateHTML);
                })
            })
        }
    } 
    else if (pathname ==='/create')
    {
        fs.readdir('./data',function(error,filelist){
            var title = 'Web-create';
            var list = template.list(filelist);
            var templateHTML = template.html(title, list,
                `<form action = "/create_process" method = "post">
                <p>
                <input type = "text" name = "title" placeholder = "title">
                </p> 
                <p>
                <textarea name = "description" placeholder = "description">
                </textarea>
                </p>
                <p>
                <input type = "submit" value = "create">
                </p> </form>`,

                `<a href = "/create"> create </a>
                <a href = "/update?id=${title}">update</a>`
                );
            response.writeHead(200);
            response.end(templateHTML);
        });
    } 
    else if (pathname === '/create_process')
    {
        var body = '';
        request.on('data',function(data){            
            /*request on : when web send data by post method, call callback_function,
            and give received data with 'data'*/
            body = body + data;
        });
        request.on('end',function(){
            var post = qs.parse(body);
            var title = post.title;
            var description = post.description;
            fs.writeFile(`data/${title}`,description,`utf8`,function(err){
                response.writeHead(302,{Location : `/?id=${title}`});
                response.end();
            })
        })
    } 
    else if (pathname === '/update')
    {
        fs.readdir('./data',function(error,filelist){
            var filteredID = path.parse(queryData.id).base;
            fs.readFile(`data/${filteredID}`,'utf-8',function(err,description){
                var title = filteredID;
                var list = template.list(filelist);
                var templateHTML = template.html(title, list,
                    `<form action = "/update_process" method = "post">
                    <input type = "hidden" name = "id" value = "${title}"
                    <p> 
                        <input type = "text" name = "title" placeholder = "title"
                        value = "${title}"> </p>
                    <p>
                        <textarea name = "description" placeholder = "description">${description} </textarea> </p>
                    <p>
                        <input type = "submit" value = "update"> </p>
                    </form>`,
                    
                    `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`);
                response.writeHead(200);
                response.end(templateHTML);
            })
        })
    }
    else if (pathname === '/update_process')
    {
        var body = '';
        request.on('data',function(data){
            body = body + data;
        });
        request.on('end',function(){
            var post = qs.parse(body);
            var id = post.id;
            var title = post.title;
            var description = post.description;
            fs.rename(`data/${id}`,`data/${title}`,function(err){
                fs.writeFile(`data/${title}`,description,'utf8',function(err){
                    response.writeHead(302,{Location : `/?id = ${title}`});
                    response.end();
                })
            })
        })
    } 
    else if (pathname === '/delete_process')
    {
        var body = '';
        request.on('data',function(data){
            body = body + data;
        });
        request.on('end',function(){
            var post = qs.parse(body);
            var id = post.id;
            var filteredID = path.parse(id).base;
            fs.unlink(`data/${filteredID}`,function(error){
                response.writeHead(302,{Location : '/'});
                response.end();
            })
        })
    }
    else
    {
        response.writeHead(404);
        response.end('Not found');
    }
});
app.listen(3001);