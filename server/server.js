var logger = require('morgan'),
    cors = require('cors'),
    http = require('http'),
    express = require('express'),
    dotenv = require('dotenv').config(),
    errorhandler = require('errorhandler'),
    bodyParser = require('body-parser'),
    helmet = require('helmet'),
    secrets = require('./secrets'),
    awsController = require('./aws-controller');
var passport	= require('passport');
var mongoose    = require('mongoose');
var config      = require('./config/config');

var app = express();
app.use(helmet());
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({origin:true, credentials: true}));
app.use(passport.initialize());
var passportMiddleware = require('./middleware/passport');
passport.use(passportMiddleware);

var routes = require('./routes');
app.use('/api', routes);
mongoose.connect(config.db, { useNewUrlParser: true , useCreateIndex: true});
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

connection.on('error', (err) => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    process.exit();
});

if(process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
    app.use(errorhandler());
}
app.get('/aws/sign',awsController.signedRequest); 
app.get('/aws/files',awsController.listFiles); 
app.get('/aws/files/:fileName',awsController.getFileSignedRequest); 
app.delete('/aws/files/:fileName',awsController.deleteFile); 

var port = process.env.PORT || 5000;
var server = http.createServer(app);

server.listen(port, function (err) {
    console.log(" listening on http://localhost:"+port);
});