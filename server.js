var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
    title:'Article One | Deepak Kumar',
    heading:'Article One',
    date:'Sep 05, 2016',
    content:`
           <p>
            This is the First Article for IMAD Training.         This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.
        </p>
        <p>
            This is the First Article for IMAD Training.         This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.        This is the First Article for IMAD Training.
        </p>
    `
}

function createTemplate(data){
    var title=data.titale;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=
        `
     <html>
    <head>
        <title>
                $[title]
        </title>
        <meta name="viewport" content="width-device-width, initial-scale-1" />
        <link rel="stylesheet" type="text/css" href="ui/style.css">
    
    </head>
    <body>
        <div class="content">
            <h1>$[heading]</h1>
            <a href="/">Home</a>
            <hr/>
            <p>Date: $[date]</p>
            <p>
                $[content]
            </p>
    
        </div>
    </body>
    
    </html>
       
        `;
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one',function(rea,res){
  res.send(createTemplate(articleOne));
    
});

app.get('/article-two',function(rea,res){
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
    
});
app.get('/article-three',function(rea,res){
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
    
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
