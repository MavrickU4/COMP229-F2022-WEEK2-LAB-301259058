const connect = require('connect');
const app = connect();

function html(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello from NodeJS Application as html');
}
function json(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify('{message : Hello from NodeJS Application as json}'));
}
function home(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from NodeJS Application');
}
app.use('/html', html);
app.use('/json', json);
app.use('/', home);
app.listen(3000);
 