import express from 'express';
import User from '../../models/user';

const router = express.Router();

// GET Requests

router.get('/', (req, res) => {
	console.log('HIT THE USERS GET ROUTE');
});

router.get('/:username', (req, res) => {
	console.log('HIT THE GET ROUTE FOR A PARTICULAR USER');
	User.findOne( { email: req.params.username + '@usc.edu' } )
	.then((user) => { console.log(user); })
	.catch((err) => { console.log(err); });
});


// POST Requests

router.post('/', (req, res) => {
	console.log('HIT POST ROUTE');
	console.log(req.body);
});

router.post('/register', (req, res) => {
	console.log('Regitering User...');
});


// Export Routes

module.exports = router;