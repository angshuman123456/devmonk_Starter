const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');

AWS.config.update({
  accessKeyId: 'AKIAJUE3NSIQKRKQVBAQ',
  secretAcessKey: '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',
  region: 'ap-south-1',
});

const S3 = new AWS.S3({});

exports.uploadMosaic = multer({
  storage: multerS3({
    s3: S3,
    bucket: 'humtreev1',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {
        fieldName: file.fieldname
      });
    },
    key: function (req, file, cb) {
      let newFileName = file.originalname.replace(/[^a-zA-z0-9.]/g, '').toLowerCase();
      newFileName = `m_${newFileName}`;
      cb(null, newFileName);
    },
  }),
  // rename: function(fieldname, filename) {
  //     let newFileName = filename.replace(/[^a-zA-z]/g, '-').toLowerCase();
  //     return `b_${newFileName}`;
  //     console.log('renamed called');
  // },
});
