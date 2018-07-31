var orm = require('../config/orm.js');

var bucket = {
    all: function(cb){
        orm.all('bucketlist',function(res){
            cb(res);
            // console.log(res)
        })
    },
    update: function(id,cb){
        orm.update('bucketlist',id,cb)
    }
}

module.exports = bucket;