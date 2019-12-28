'use strict';

const aws = require('aws-sdk');
var secrets = require('./secrets');

const s3 = new aws.S3({
    accessKeyId: secrets.aws_key,
    secretAccessKey: secrets.aws_secret,
    signatureVersion: 'v4',
    region:'eu-west-3'
})

exports.signedRequest = function(req, res) {
    const fileName = req.query['file-name'];
    const fileType = req.query['file-type'];
    const s3Params = {
        Bucket: secrets.aws_bucket,
        Key: fileName,
        Expires: 60,
        ContentType: fileType,
        ACL: 'private'
    }
    s3.getSignedUrl('putObject', s3Params, (err, data) => {
        if(err) {
            console.log(err);
            return res.end();
        }
        const returnData = {
            signedRequest: data,
            url: `https://${secrets.aws_bucket}.s3.amazonaws.com/${fileName}`
        }
        return res.json(returnData);
    });
};
exports.getFileSignedRequest = function(req, res) {
    const s3Params = {
        Bucket: secrets.aws_bucket,
        Key: req.params.fileName,
        Expires: 60,
        ContentType: fileType,
        ACL: 'private'
    }

    s3.getSignedUrl('getObject', s3Params, (err,data) => {
        if(err) {
            console.log(err);
            return res.end();
        }
        return res.json(data);
    })
    
};
exports.listFiles = function(req, res) {
    
    const s3Params = {
        Bucket: secrets.aws_bucket,
        Delimiter: '/'
    };

    s3.listObjects(s3Params, (err, data)=> {
        if(err) {
            console.log(err);
            return res.end();
        }
        return res.json(data);
    });
};
exports.deleteFile = function(req, res) {
    const s3Params = {
        Bucket: secrets.aws_bucket,
        Key: req.params.fileName
    }
    s3.deleteObject(s3Params, (err, data) => {
        if (err) {
            return res.end();
        }
        return res.status(200).send({'msg': 'File deleted'});
    })
    
};