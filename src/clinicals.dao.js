var mongoose=require('mongoose');
var clinicalsSchema=require('./clinicals.model');

clinicalsSchema.statics={
    get:function(query,cb){
        this.find(query,cb);
    },
    create:function(data,cb){
        var clinicalData = new this(data);
        clinicalData.save(cb);
    }
}

var clinicalsModel = mongoose.model("Clinicals",clinicalsSchema,"clinicals");
module.exports = clinicalsModel;
