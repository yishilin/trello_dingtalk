function send2dingtalk(data, dingtalk_tokens) {
    for (var i = 0, l = dingtalk_tokens.length; i < l; i ++) {
        var dingtalk_token = dingtalk_tokens[i];
        send(data, dingtalk_token);
    }
}

function send(data, dingtalk_token){
    var str = new Buffer(JSON.stringify(data));
    
    var headers = {
        'Content-Type': 'application/json',
        'Content-Length': str.length
    };
    var options = {
        hostname: 'oapi.dingtalk.com',
        port: 443,
        path: '/robot/send?access_token=' + dingtalk_token, 
        method: 'POST',
        headers: headers
    };
    const https = require('https');
    var request = https.request(options, function(response) {
        response.setEncoding('utf8');
        var buf = [];
        var size = 0;
        response.on('data', function(chunk) {
            var buftmp = new Buffer(chunk);
            buf.push(buftmp);
            size += buftmp.length;
        }).on('end', function() {
            // console.log(Buffer.concat(buf, size).toString());
        }).on('error', function(error) {
            console.log(error.message);
        }).on('aborted', function() {
            console.log('aborted');
        });
    });
    request.write(str);
    request.end();

}

module.exports = send2dingtalk;
