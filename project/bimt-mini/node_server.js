var express = require('express');
var app = express();
app.use('/', express.static('./bimtpack')).
    use('/images', express.static( '../images')).
    use('/lib', express.static( '../lib'));
app.listen(8022);