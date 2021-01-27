const {Pet} = require('../models/pets.models')
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.create = (request, response) => {
    const {name, type, description, skill1, skill2, skill3, likes} = request.body;
    Pet.create({name, type, description, skill1, skill2, skill3, likes})
    .then(pet =>response.json(pet))
    .catch(err => response.status(400).json(err));
}
module.exports.all =(request,response) => {
    Pet.find({})
    .then(pets => response.json(pets))
    .catch(err => response.json(err));
}
module.exports.findPet = (request, response) => {
    Pet.findOne({_id:request.params.id})
    .then(pet=> response.json(pet))
    .catch(err => response.json(err));
}
module.exports.editPet = (request, response) =>{
    Pet.findOneAndUpdate({_id:request.params.id}, request.body, {new:true, runValidators:true})
    .then(updatedPet=> response.json(updatedPet))
    .catch(err => response.status(400).json(err));
}
module.exports.deletePet=(request, response) => {
    Pet.deleteOne({_id:request.params.id})
    .then(deletedPet => response(deletedPet))
    .catch(err => response.json(err));
}
module.exports.addLike=(request, response) => {
    Pet.findByIdAndUpdate(
        request.params.id,
        {
            $inc:{
                    likes:1
            }
            
        },
        {
            new:true
        }
    )
    .then(updatedPet => response.json(updatedPet))
    .catch(err => response.json(err));
}