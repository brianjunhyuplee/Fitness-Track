const { kStringMaxLength } = require("buffer");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new mongoose.Schema({
    day : {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true
            },
            duration: {
                type: Number,
                required: true,
            },
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;