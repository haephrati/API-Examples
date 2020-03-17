const fs = require('fs');
const path = require('path');

function fail(msg) {
  console.error('FAIL ' + msg);
  process.exit(1);
}

const src = fs.readFileSync(path.join(__dirname, '..', 'examples', 'node.js'), 'utf8');
if (!src.includes("PROXY_RACK_DNS = 'megaproxy.rotating.proxyrack.net'")) fail('dns');
if (!src.includes('PROXYRACK_PORT = 222')) fail('port');
if (!src.includes('http://ip-api.com/json')) fail('ipapi');
if (!src.includes("require('request')")) fail('request');
console.log('OK ProxyRackExampleTests');
