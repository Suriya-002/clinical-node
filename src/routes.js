var patientController=require('./patient.controller');
var clinicalsController=require('./clinicals.controller');

module.exports=(router)=>{
    router.get('/patients',patientController.getAll);
    router.post('/patients',patientController.create);
    router.put('/patients/:id',patientController.update);
    router.delete('/patients/:id',patientController.delete);

    router.get('/clinicals/:patientId',clinicalsController.getAll);
    router.post('/clinicals',clinicalsController.create)

}
