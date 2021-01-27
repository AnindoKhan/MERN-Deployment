const PetController = require('../controllers/pets.controller');
module.exports = function(app){
    app.get('/api', PetController.index);
    app.post('/api/newPet', PetController.create);
    app.get('/api/all', PetController.all);
    app.get('/api/getPet/:id', PetController.findPet);
    app.put('/api/edit/:id', PetController.editPet);
    app.delete('/api/delete/:id', PetController.deletePet);
    app.post('/api/pets/likes/:id', PetController.addLike);
}