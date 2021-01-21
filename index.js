var express = require('express');
var bodyParser =require('body-parser');
var nodeMailer = require('nodemailer');
var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');
var path = require('path');
var app = express();




//var databaseUri = "mongodb+srv://abdulrafiu__otunba__ventures:abdulrafiu__otunba__ventures@cluster0.vtonl.mongodb.net/project?retryWrites=true&w=majority";
var databaseUri = "mongodb+srv://otunba_alani:otunba_alani@cluster0.jpcli.mongodb.net/project?retryWrites=true&w=majority";
var server_url = process.env.NODE_ENV==='production'?'http://23.95.222.176:1339/parse':'http://localhost:1339/parse';

var api = new ParseServer({
  databaseURI: databaseUri,
  cloud: __dirname + '/cloud/main.js',
  appId: 'myAppId',
  masterKey: 'myMensterKey',
  serverURL: server_url,
  //liveQuery:{
  // classNames: [TotalInfo]
  //},
  verifyUserEmails: true,
  preventLoginWithUnverifiedEmail: true,
  publicServerURL: server_url,
  appName: 'Decent Concepts ventures',
  emailAdapter: {
    module: 'parse-server-dedicated-email-adapter',
    options: {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      email: 'olayiwolarahmon4@gmail.com',
      password: 'olayiwola12345',
    }
  }
});

// for static
app.use('/public', express.static(path.join(__dirname, '/public')));

// calling the parse
app.use('/parse', api);


// Dashboard Settings:
var options = {
  allowInsecureHTTP: false
};
var dashboard = new ParseDashboard({
    apps: [{
      serverURL: server_url,
      appId: 'myAppId',
      masterKey: 'myMensterKey',
      appName: 'project'
    }],
    users: [{
      user: 'otunbaalani@yahoo.co.uk',
      pass: 'otunba_alani'
    }],
    trustProxy: 1
  },
  options
);
app.use('/dashboard', dashboard);

// routing
/*app.get('/', (req, res) => {
  res.send('Parse Server is up again.');
});*/
app.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/test.html'));
});
if(process.env.NODE_ENV==='production'){
  app.use(express.static(path.join(__dirname, '/client/build')));
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

var port = 1339;
var httpServer = require('http').createServer(app);
httpServer.listen(port, () => {
  console.log('parse server is running on port ' + port);
});


// Live Query:
ParseServer.createLiveQueryServer(httpServer);