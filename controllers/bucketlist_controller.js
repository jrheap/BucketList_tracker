var express = require('express');
var router = express.Router();
var bucket = require('../models/bucketlist.js')


router.get('/', function(req,res){
    bucket.all(function(data){
        var bucket_data = {
            buckets: data
        }
        console.log(bucket_data)
        res.render('index', {bucket_data});
    })
}
);

router.put('/bucketlist/update', function(req,res){
    bucket.update(req.body.bucketlist_id, function(results){
        console.log(results)
        res.redirect('/')
    })
})

module.exports = router;