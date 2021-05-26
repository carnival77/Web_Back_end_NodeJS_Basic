// 초기의 잘못된 코드

// var http = require('http');
// var fs = require('fs');
// var url = require('url');

// var app = http.createServer(function(request,response){
//     var _url = request.url;
//     console.log(_url);
//     var queryData = url.parse(_url, true).query;
//     console.log(queryData.id);
//     if(_url == '/'){
//       _url = '/index.html';
//     }
//     if(_url == '/favicon.ico'){
//       response.writeHead(404);
//       response.end();
//       return;
//     }
//     response.writeHead(200);
//     response.end(queryData.id);
 
// });
// app.listen(3000);

// // var http = require('http');
// // var fs = require('fs');
// // var url = require('url');

// // var app = http.createServer(function(request,response){
// //     var _url = request.url;
// //     console.log(_url);
// //     var queryData = url.parse(_url, true).query;
// //     console.log(queryData);
// //     if(_url == '/'){
// //       _url = '/index.html';
// //     }
// //     if(_url == '/favicon.ico'){
// //       // response.writeHead(404);
// //       // response.end();
// //       response.writeHead(404);
// //       return;
// //     }
// //     response.writeHead(200);
// //     // response.end(fs.readFileSync(__dirname + _url));
// //     response.end(queryData.id);
 
// // });
// // app.listen(3000);


//-----------------------------------------------------------------

// 파일을 이용해 본문 구현

// var http = require('http');
// var fs = require('fs');
// var url = require('url');
 
// var app = http.createServer(function(request,response){
//     var _url = request.url;
//     var queryData = url.parse(_url, true).query;
//     var title = queryData.id;
//     if(_url == '/'){
//       title = 'Welcome';
//     }
//     if(_url == '/favicon.ico'){
//       return response.writeHead(404);
//     }
//     response.writeHead(200);
//     fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
//       var template = `
//       <!doctype html>
//       <html>
//       <head>
//         <title>WEB1 - ${title}</title>
//         <meta charset="utf-8">
//       </head>
//       <body>
//         <h1><a href="/">WEB</a></h1>
//         <ul>
//           <li><a href="/?id=HTML">HTML</a></li>
//           <li><a href="/?id=CSS">CSS</a></li>
//           <li><a href="/?id=JavaScript">JavaScript</a></li>
//         </ul>
//         <h2>${title}</h2>
//         <p>${description}</p>
//       </body>
//       </html>
//       `;
//       response.end(template);
//     })
// });
// app.listen(3000);

//-----------------------------------------------------------------

// not found 구현

// var http = require('http');
// var fs = require('fs');
// var url = require('url');
 
// var app = http.createServer(function(request,response){
//     var _url = request.url;
//     var queryData = url.parse(_url, true).query;
//     var pathname = url.parse(_url, true).pathname;
//     var title = queryData.id;

//     console.log( url.parse(_url, true));
//     console.log(pathname);
 
//     if(pathname === '/'){
//         console.log(pathname);
//       fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
//         var template = `
//         <!doctype html>
//         <html>
//         <head>
//           <title>WEB1 - ${title}</title>
//           <meta charset="utf-8">
//         </head>
//         <body>
//           <h1><a href="/">WEB</a></h1>
//           <ul>
//             <li><a href="/?id=HTML">HTML</a></li>
//             <li><a href="/?id=CSS">CSS</a></li>
//             <li><a href="/?id=JavaScript">JavaScript</a></li>
//           </ul>
//           <h2>${title}</h2>
//           <p>${description}</p>
//         </body>
//         </html>
//         `;
//         response.writeHead(200);
//         response.end(template);
//       });
//     } else {
//       response.writeHead(404);
//       response.end('Not found');
//     }
 
 
 
// });
// app.listen(3000);


//-----------------------------------------------------------------

// WEB 버튼 구현

// var http = require('http');
// var fs = require('fs');
// var url = require('url');
 
// var app = http.createServer(function(request,response){
//     var _url = request.url;
//     var queryData = url.parse(_url, true).query;
//     var pathname = url.parse(_url, true).pathname;
//     if(pathname === '/'){
//       if(queryData.id === undefined){
//         fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
//           var title = 'Welcome';
//           var description = 'Hello, Node.js';
//           var template = `
//           <!doctype html>
//           <html>
//           <head>
//             <title>WEB1 - ${title}</title>
//             <meta charset="utf-8">
//           </head>
//           <body>
//             <h1><a href="/">WEB</a></h1>
//             <ul>
//               <li><a href="/?id=HTML">HTML</a></li>
//               <li><a href="/?id=CSS">CSS</a></li>
//               <li><a href="/?id=JavaScript">JavaScript</a></li>
//             </ul>
//             <h2>${title}</h2>
//             <p>${description}</p>
//           </body>
//           </html>
//           `;
//           response.writeHead(200);
//           response.end(template);
//         });
//       } else {
//         fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
//           var title = queryData.id;
//           var template = `
//           <!doctype html>
//           <html>
//           <head>
//             <title>WEB1 - ${title}</title>
//             <meta charset="utf-8">
//           </head>
//           <body>
//             <h1><a href="/">WEB</a></h1>
//             <ul>
//               <li><a href="/?id=HTML">HTML</a></li>
//               <li><a href="/?id=CSS">CSS</a></li>
//               <li><a href="/?id=JavaScript">JavaScript</a></li>
//             </ul>
//             <h2>${title}</h2>
//             <p>${description}</p>
//           </body>
//           </html>
//           `;
//           response.writeHead(200);
//           response.end(template);
//         });
//       }
//     } else {
//       response.writeHead(404);
//       response.end('Not found');
//     }
// });
// app.listen(3000);


// 목록 구현

// var http = require('http');
// var fs = require('fs');
// var url = require('url');
 
// var app = http.createServer(function(request,response){
//     var _url = request.url;
//     var queryData = url.parse(_url, true).query;
//     var pathname = url.parse(_url, true).pathname;
//     if(pathname === '/'){
//       if(queryData.id === undefined){
 
//         fs.readdir('./data', function(error, filelist){
//           var title = 'Welcome';
//           var description = 'Hello, Node.js';
//           var list = '<ul>';
//           var i = 0;
//           while(i < filelist.length){
//             list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
//             i = i + 1;
//           }
//           list = list+'</ul>';
//           var template = `
//           <!doctype html>
//           <html>
//           <head>
//             <title>WEB1 - ${title}</title>
//             <meta charset="utf-8">
//           </head>
//           <body>
//             <h1><a href="/">WEB</a></h1>
//             ${list}
//             <h2>${title}</h2>
//             <p>${description}</p>
//           </body>
//           </html>
//           `;
//           response.writeHead(200);
//           response.end(template);
//         })
 
//       } else {
//         fs.readdir('./data', function(error, filelist){
//         //   var title = 'Welcome';
//         //   var description = 'Hello, Node.js';
//           var list = '<ul>';
//           var i = 0;
//           while(i < filelist.length){
//             list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
//             i = i + 1;
//           }
//           list = list+'</ul>';
//           fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
//             var title = queryData.id;
//             var template = `
//             <!doctype html>
//             <html>
//             <head>
//               <title>WEB1 - ${title}</title>
//               <meta charset="utf-8">
//             </head>
//             <body>
//               <h1><a href="/">WEB</a></h1>
//               ${list}
//               <h2>${title}</h2>
//               <p>${description}</p>
//             </body>
//             </html>
//             `;
//             response.writeHead(200);
//             response.end(template);
//           });
//         });
//       }
//     } else {
//       response.writeHead(404);
//       response.end('Not found');
//     }
 
// });
// app.listen(3000);

// 함수 이용 정리

// var http = require('http');
// var fs = require('fs');
// var url = require('url');
 
// function templateHTML(title, list, body){
//   return `
//   <!doctype html>
//   <html>
//   <head>
//     <title>WEB - ${title}</title>
//     <meta charset="utf-8">
//   </head>
//   <body>
//     <h1><a href="/">WEB</a></h1>
//     ${list}
//     ${body}
//   </body>
//   </html>
//   `;
// }
// function templateList(filelist){
//   var list = '<ul>';
//   var i = 0;
//   while(i < filelist.length){
//     list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
//     i = i + 1;
//   }
//   list = list+'</ul>';
//   return list;
// }
 
// var app = http.createServer(function(request,response){
//     var _url = request.url;
//     var queryData = url.parse(_url, true).query;
//     var pathname = url.parse(_url, true).pathname;
//     if(pathname === '/'){
//       if(queryData.id === undefined){
//         fs.readdir('./data', function(error, filelist){
//           var title = 'Welcome';
//           var description = 'Hello, Node.js';
//           var list = templateList(filelist);
//           var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
//           response.writeHead(200);
//           response.end(template);
//         })
//       } else {
//         fs.readdir('./data', function(error, filelist){
//           fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
//             var title = queryData.id;
//             var list = templateList(filelist);
//             var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
//             response.writeHead(200);
//             response.end(template);
//           });
//         });
//       }
//     } else {
//       response.writeHead(404);
//       response.end('Not found');
//     }
 
 
 
// });
// app.listen(3000);


// 글 관리(생성, 수정) 및 리다이렉션

// var http = require('http');
// var fs = require('fs');
// var url = require('url');
// var qs = require('querystring');
 
// function templateHTML(title, list, body, control){
//   return `
//   <!doctype html>
//   <html>
//   <head>
//     <title>WEB1 - ${title}</title>
//     <meta charset="utf-8">
//   </head>
//   <body>
//     <h1><a href="/">WEB</a></h1>
//     ${list}
//     ${control}
//     ${body}
//   </body>
//   </html>
//   `;
// }
// function templateList(filelist){
//   var list = '<ul>';
//   var i = 0;
//   while(i < filelist.length){
//     list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
//     i = i + 1;
//   }
//   list = list+'</ul>';
//   return list;
// }
 
// var app = http.createServer(function(request,response){
//     var _url = request.url;
//     var queryData = url.parse(_url, true).query;
//     var pathname = url.parse(_url, true).pathname;
//     if(pathname === '/'){
//       // 홈 화면
//       if(queryData.id === undefined){
//         fs.readdir('./data', function(error, filelist){
//           var title = 'Welcome';
//           var description = 'Hello, Node.js';
//           var list = templateList(filelist);
//           var template = templateHTML(title, list, 
//             `<h2>${title}</h2>${description}`,
//             `<a href="/create">create</a>`
//             );
//           response.writeHead(200);
//           response.end(template);
//         });
//       } else {
//         // 홈 화면 외. (리스트에 있는 것 클릭 시 화면.)
//         fs.readdir('./data', function(error, filelist){
//           fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
//             var title = queryData.id;
//             var list = templateList(filelist);
//             var template = templateHTML(title, list, 
//               `<h2>${title}</h2>${description}`,
//               `<a href="/create">create</a> <a href="/update">update</a>`
//               );
//             response.writeHead(200);
//             response.end(template);
//           });
//         });
//       }
//     } else if(pathname === '/create'){
//       // create 버튼 클릭 시 화면. 정보 입력을 위한 input form이 있음
//       fs.readdir('./data', function(error, filelist){
//         var title = 'WEB - create';
//         var list = templateList(filelist);
//         var template = templateHTML(title, list, 
//           `
//           <form action="/create_process" method="post">
//             <p><input type="text" name="title" placeholder="title"></p>
//             <p>
//               <textarea name="description" placeholder="description"></textarea>
//             </p>
//             <p>
//               <input type="submit">
//             </p>
//           </form>
//           `
//           // 정보 입력을 위한 input form
//           ,``);
//         response.writeHead(200);
//         response.end(template);
//       });
//     } else if(pathname === '/create_process'){
//       // input form 을 채운 뒤 submit을 하면,
//       // 홈 화면에서 새로 만든 목록의 id 화면으로 리다이렉션
//       var body = '';
//       request.on('data', function(data){
//           body = body + data;
//           // console.log("body : " + body); 
//           // body : title=Nodejs&description=Node+js%21%21
//           // 입력된 데이터를 body처럼 한 문장으로 저장
//       });
//       request.on('end', function(){
//           var post = qs.parse(body);
//           // console.log("post : " + post);
//           var title = post.title;
//           var description = post.description
//           fs.writeFile(`data/${title}`,description,'utf8',function(err){
//             // data 폴더에 파일 이름을 title 으로 내용은 description 인 파일 생성.
//             // response.writeHead(302, {Location: `/?id=${title}`});
//             response.writeHead(302, {Location: `/?id=${qs.escape(title)}`});
//             // 리다이렉션. nodejs가 추가된 홈 화면으로 이동. http://localhost:3000/?id=nodejs
//             response.end();
//           })
//       });
//     }else if(pathname === '/update'){
//       // update 버튼 클릭 시 화면. 정보 입력을 위한 input form이 있음
//       fs.readdir('./data', function(error, filelist){
//         fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
//           var title = queryData.id;
//           var list = templateList(filelist);
//           var template = templateHTML(title, list, 
//             `
//             <form action="/update_process" method="post">
//               <input type="hidden" name = "id" value="${title}"> 
//               <p><input type="text" name="title" placeholder="title" value="${title}"></p>
//               <p>
//                 <textarea name="description" placeholder="description" >${description}</textarea>
//               </p>
//               <p>
//                 <input type="submit">
//               </p>
//             </form>
//             `
//             // 정보 입력을 위한 input form
//             ,`<a href="/create">create</a> <a href="/update?id=${title}">update</a>`);
//           response.writeHead(200);
//           response.end(template);
//         });
//       });
//     }
//     else {
//       response.writeHead(404);
//       response.end('Not found');
//     }
// });
// app.listen(3000);



// 글 관리(생성, 수정) 및 리다이렉션

var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var santizeHtml = require('sanitize-html');
 
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      if(queryData.id === undefined){
        fs.readdir('./data', function(error, filelist){
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var list = template.List(filelist);
          var html = template.HTML(title, list,
            `<h2>${title}</h2>${description}`,
            `<a href="/create">create</a>`
          );
          response.writeHead(200);
          response.end(html);
        });
      } else {
        fs.readdir('./data', function(error, filelist){
          var filteredId = path.parse(queryData.id).base;
          fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
            var title = queryData.id;
            var sanitized_title = santizeHtml(title);
            var sanitizedDescription = sanitizeHtml(description, {
              allowedTags:['h1']
            });
            var list = template.List(filelist);
            var html = template.HTML(title, list,
              `<h2>${sanitized_title}</h2>${sanitized_desc}`,
              `<a href="/create">create</a> 
              <a href="/update?id=${sanitized_title}">update</a>
              <form>
                <input type="hidden" name="'id" value="${sanitized_title}">
                <input type="submit" value="delete">
              </form>
              `
            );
            response.writeHead(200);
            response.end(html);
          });
        });
      }
    } else if(pathname === '/create'){
      fs.readdir('./data', function(error, filelist){
        var title = 'WEB - create';
        var list = template.List(filelist);
        var html = template.HTML(title, list, `
          <form action="/create_process" method="post">
            <p><input type="text" name="title" placeholder="title"></p>
            <p>
              <textarea name="description" placeholder="description"></textarea>
            </p>
            <p>
              <input type="submit">
            </p>
          </form>
        `, '');
        response.writeHead(200);
        response.end(html);
      });
    } else if(pathname === '/create_process'){
      var body = '';
      request.on('data', function(data){
          body = body + data;
      });
      request.on('end', function(){
          var post = qs.parse(body);
          var title = post.title;
          var description = post.description;
          fs.writeFile(`data/${title}`, description, 'utf8', function(err){
            response.writeHead(302, {Location: `/?id=${title}`});
            response.end();
          })
      });
    } else if(pathname === '/update'){
      fs.readdir('./data', function(error, filelist){
        var filteredId = path.parse(queryData.id).base;
        fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
          var title = queryData.id;
          var list = template.List(filelist);
          var html = template.HTML(title, list,
            `
            <form action="/update_process" method="post">
              <input type="hidden" name="id" value="${title}">
              <p><input type="text" name="title" placeholder="title" value="${title}"></p>
              <p>
                <textarea name="description" placeholder="description">${description}</textarea>
              </p>
              <p>
                <input type="submit">
              </p>
            </form>
            `
            // 정보 입력을 위한 input form
            // hidden으로 기존의 title을 id로 저장하고
            // title로 새로운 title을 저장.
            ,
            `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
          );
          response.writeHead(200);
          response.end(html);
        });
      });
    } else if(pathname ==='/update_process'){
      var body = '';
      request.on('data', function(data){
          body = body + data;
      });
      request.on('end', function(){
          var post = qs.parse(body);
          var id = post.id;
          var title = post.title;
          var description = post.description;
          fs.rename(`data/${id}`, `data/${title}`, function(error){
            // 파일의 이름을 id에서 title로 바꾼다.
            fs.writeFile(`data/${title}`, description, 'utf8', function(err){
              response.writeHead(302, {Location: `/?id=${title}`});
              response.end();
            })
          });
      });
    }else if(pathname ==='/delete_process'){
      request.on('end', function(){
          var post = qs.parse(body);
          var id = post.id;
          var filteredId = path.parse(id).base;
          fs.unlink(`data/${filteredId}`, function(error){
            response.writeHead(302, {Location: `/`});
            response.end();
          })
      });
    }else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);