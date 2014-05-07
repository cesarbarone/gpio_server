var http = require('http');
var qs = require('querystring');

http.createServer(function (req, res) {

  if (req.method == 'POST') {

    var body = '';
    req.on('data', function(data) {
      body += data;
    });
    req.on('end', function() {
      var POST = qs.parse(body)

      console.log(POST.cesar);
    })

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  } else {
  
  }

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/')
