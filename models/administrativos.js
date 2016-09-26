var mongoose = require('mongoose');

exports = module.exports = function(server,mongoose){
    var administrativoSchema = new mongoose.Schema({
        curp:{type:String},
        nombre:{type:String},
        apellidos:{type:String},
        edad:{type:Number},
        rol:{type:Number}
    });
mongoose.model('Administrativo',administrativoSchema);
}
