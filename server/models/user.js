import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		match: [/^\w*@usc\.edu$/i, 'Not a valid USC email'],
		required: [true, 'User email required']
	},
	password: { // hashed
		type: String,
		required: [true, 'Password required']
	}
});

export default mongoose.model('User', userSchema);