const router = require('express').Router();
const { getThoughts, 
    getThoughtById, 
    addThought, 
    updateThought, 
    deleteThought, 
    addReaction, 
    removeReaction } = require('../../controllers/thoughtController');

// Home route for thoughts
router.route('/')
.get(getThoughts)

// Gets the thought by user ID
router.route('/:userId')
.post(addThought)

// Gets the thought by ID
router.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought)

// Gets the reaction by ID
router.route('/:thoughtId/reactions')
.post(addReaction)

// Gets the reaction by ID
router.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction)

module.exports = router;
