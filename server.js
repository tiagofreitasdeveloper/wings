var express = require('express');
var app = express();
app.use(express.static("wings-angular")); // wings will be the same folder name.
app.get('/', function (req, res,next) {
 res.redirect('/'); 
});
app.listen(8080, 'localhost');
console.log("Wings project Server is Listening on port 8080");
