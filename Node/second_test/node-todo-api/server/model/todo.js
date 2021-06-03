const mongoose = require('mongoose');

const TodoModel = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 5, //valdators
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completedAt: {
    type: Number,
    default: null,
  },
});

module.exports = {
  TodoModel,
};
