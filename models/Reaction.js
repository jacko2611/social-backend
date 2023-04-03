const { Schema } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
        // Set custom id to avoid confusion with parent comment _id
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },

        // Setting rules for reaction text
        reactionBody: {
            type: String,
            required: 'You need to provide a reaction!',
            minlength: 1,
            maxlength: 280
        },

        // 
        username: {
            type: String,
            required: 'You need to provide a username!'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = ReactionSchema;