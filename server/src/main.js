import express from 'express';
import bodyParser from 'body-parser';
// LOAD API FROM ROUTES
import api from './routes';

const app = express();

let port = 13080;


// SETUP MIDDLEWARE
app.use(bodyParser.json());

// SERVE STATIC FILES - REACT PROJECT
app.use('/', express.static(__dirname + '/../../build'));

// LOAD API FROM ROUTES
// TO BE IMPLEMENTED

app.use('/api', api);

app.listen(port, () => {
    console.log('Express is listening on port', port);
});