const { Schema, model } = require('mongoose');
import ReactionSchema from './Reaction';

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'You need to provide a thought!',
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: 'You need to provide a username!'
        },
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Reaction'
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

// Get total count of friends on retrieval
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
}
);

// Initialize our Thought model
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;

