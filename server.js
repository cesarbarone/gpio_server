var http = require('http');
var qs = require('querystring');
var gpio = require('gpio');

http.createServer(function (req, res) {

  if (req.method == 'POST') {

    var body = '';
    req.on('data', function(data) {
      body += data;
    });
    req.on('end', function() {
      var POST = qs.parse(body)
      gpio.open(17, "output", function(err) {        // Open pin 16 for output
        gpio.write(17, 1, function() {            // Set pin 16 high (1)
          gpio.close(17);                        // Close pin 16
        });
      });
      
    })

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  } else {
  
  }

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/')
