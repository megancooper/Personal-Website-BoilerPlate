// PART 1: IMPORTS AND INSTANTIATIONS
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import config from './config';

const app = express();



// PART 2: CONFIGURATIONS

// view engine setup
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'ejs');

// PART 3: MIDDLEWARE 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));

// PART 4: ROUTES

// api routes
app.use('/api/users', require('./routes/api/users'));

// express routes
app.use('/', require('./routes/index'));



// PART 5: BOOTUP
app.listen(3000, () => {
	console.log("listening on port 3000");
});

