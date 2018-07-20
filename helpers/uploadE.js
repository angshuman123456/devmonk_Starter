const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');

AWS.config.update({
  accessKeyId: 'AKIAJX4XUOAKQ2T5PY6Q',
  secretAccessKey: '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',
  region: 'ap-south-1',
});

const S3 = new AWS.S3({});

exports.uploadEvent = multer({
  storage: multerS3({
    s3: S3,
    bucket: 'humtree',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {
        fieldName: file.fieldname
      });
    },
    key: function (req, file, cb) {
      let newFileName = file.originalname.replace(/[^a-zA-z0-9.]/g, '').toLowerCase();
      newFileName = `e_${newFileName}`;
      cb(null, newFileName);
    },
  }),
  // rename: function(fieldname, filename) {
  //     let newFileName = filename.replace(/[^a-zA-z]/g, '-').toLowerCase();
  //     return `b_${newFileName}`;
  //     console.log('renamed called');
  // },
});
