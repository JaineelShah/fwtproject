var mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    // user id
    user_id:{
        type: ObjectId, // check syntax
		required: true
    },
    // name of trek
    location:{
        type: String,
		required: true
    },
    // actual user review
	review:{
		type: String
	}
});

const Review = module.exports = mongoose.model('user_review', BlogSchema);