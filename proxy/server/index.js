



const express = require('express');
const  {createProxyMiddleware}  = require('http-proxy-middleware');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors')
const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Middleware
app.use(cors())
app.use(morgan('dev'));



// Serves static HTML file
app.use(express.static(path.join(__dirname + '/../public')));


app.use( '/api/reviews/:id',createProxyMiddleware({ target: 'http://54.241.88.76:5555/', changeOrigin: true }));
app.use( '/photos/:id',createProxyMiddleware({ target: 'http://54.176.6.154:1337/3', changeOrigin: true }));
//app.use( '/favorites',createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));

app.use( '/getRestaurants',createProxyMiddleware({ target: 'http://18.144.30.151:8000/', changeOrigin: true }));
app.use( '/api/more-places',createProxyMiddleware({ target: 'http://54.176.6.154:1337/3', changeOrigin: true }));
// Verifies and sets port on where server is listens at

app.listen(port, () => console.log(`Listening on proxy port ${port}!`));