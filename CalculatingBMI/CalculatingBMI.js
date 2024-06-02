const http = require('http');
const url = require('url') ;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    const queryObject = url.parse(req.url,true).query;
    const weight = queryObject.weight;
    const height = queryObject.height;
    const bmi = weight / ((parseFloat(height)/100)*(parseFloat(height)/100));
    //res.end('area is '+ (queryObject.width*queryObject.height));
    //res.end(JSON.stringify(queryObject));
    const reply = {"weight":weight, "height":height, "bmi":bmi};
    res.end(JSON.stringify(reply));
}).listen(1400);