var http = require('http');
var qs = require('querystring');
var gpio = require('pi-gpio');

turnLedOn = function() {
  gpio.open(11, "output", function(err) {        // Open pin 16 for output
    gpio.write(11, 1, function() {            // Set pin 16 high (1)
      gpio.close(11);                        // Close pin 16
    });
  });
}

turnLedOff = function() {
  gpio.open(11, "output", function(err) {        // Open pin 16 for output
    gpio.write(11, 0, function() {            // Set pin 16 high (1)
      gpio.close(11);                        // Close pin 16
    });
  });
}

executeCommand = function(command) {
  console.log(command);
  switch(command) {
    case 'ligar led':
      turnLedOn();
      break;

    case 'desligar led':
      turnLedOff();
      break;

    default: 
      //TODO
  }
}

http.createServer(function (req, res) {
  if (req.method == 'POST') {

    var body = '';
    req.on('data', function(data) {
      body += data;
    });
    req.on('end', function() {
      var POST = qs.parse(body);
      command = POST.command;
      executeCommand(command);
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(command + '\n');
    })

  } else {
  
  }

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/')
