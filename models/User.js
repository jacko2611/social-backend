const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: 'You need to provide a username!',
            trim: true
        },
        email: {
            type: String,
            required: 'You need to provide an email address!',
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// Initialize our Post model
const Post = model('post', postSchema);

module.exports = Post;


