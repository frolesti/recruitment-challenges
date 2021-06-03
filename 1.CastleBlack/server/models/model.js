const mongoose = require("mongoose");

let playerSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    age: {
        type: Number,
        default: "Unknown"
    },
    health: {
        type: Number,
        default: 100,
        required: true
    },
    bag: {
        type: Array,
        default: [],
        required: true
    }
})

let objectSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    value: {
        type: Number,
        required: true
    }
})

const playerDB = mongoose.model("playerDB", playerSchema);
const objectDB = mongoose.model("objectDB", objectSchema)

module.exports = playerDB;