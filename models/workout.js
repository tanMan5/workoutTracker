const mongoose = require("mongoose");
const Schema= mongoose.Schema;

const workoutSchema = new Schema (
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercise: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Please enter an exercise type."
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Please enter valid exercise name."
                },
                duration: {
                    type: Number,
                    required: "Please add time variable in seconds."
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
);

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0)
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;