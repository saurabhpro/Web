const mongoose = require('mongoose');

const TodoModel = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1, //valdators
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    },
    // _ makes clear that this is a id
    _creator: {
        type : mongoose.Schema.Types.ObjectId, // in order to set creator property
        required: true
    }
});

module.exports = {
    TodoModel
}