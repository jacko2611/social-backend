const router = require('express').Router();
const { getAllThoughts, 
    getThoughtById, 
    createThought, 
    updateThought, 
    deleteThought, 
    addReaction, 
    removeReaction } = require('../../controllers/thoughtController');

// Home route for thoughts
router.route('/')
.get(getAllThoughts)

// Gets the thought by user ID
router.route('/:userId')
.post(createThought)

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
