const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    name: { type: String,
        required:[true, 'name is required'],
        unique:[true, 'name already exists'],
        minlength:[3, "must be atleast 3 characters"]
    },
    type: { type: String,
        required:[true, 'type is required'], 
    },
    description: { type: String,
        required:[true, 'description is required'],
        minlength:[3, "must be atleast 3 characters"] 
    },
    skill1:{ type: String, required:[false] },
    skill2:{ type: String, required:[false] },
    skill3:{ type: String, required:[false]},
    // likes: {type: Number}
}, { timestamps: true });
module.exports.Pet = mongoose.model('Pet', PetSchema);