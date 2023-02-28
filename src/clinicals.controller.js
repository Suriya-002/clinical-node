var dao=require('./clinicals.dao');
var mongodb=require('mongodb');

exports.getAll=(req,res)=>{
    dao.get({patient:mongodb.ObjectID(req.params.patientId)},(err,clinicalData)=>{
        res.send(clinicalData);
    })
}

exports.create=(req,res)=>{
    var clinicals=req.body;
    dao.create(clinicals,(err,clinicals)=>{
        res.send(clinicals);
    })
}
