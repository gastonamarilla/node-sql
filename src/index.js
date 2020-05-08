const express = require('express');
const morgan = require ('morgan');
//initializations
const app = express();

//settings
app.set('port', process.env.PORT || 4000);

//Midlewares
app.use(morgan('dev'));

//Global variables

//Routes
app.use(require('./routes'))

//Public

//Starting the server

app.listen(app.get ('port'), () =>{
    console.log('server on port', app.get('port'));
});
