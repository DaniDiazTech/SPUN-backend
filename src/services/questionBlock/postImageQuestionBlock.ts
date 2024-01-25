import multer from 'multer'
import multerS3 from 'multer-s3'

import { s3Config } from '../../s3'

export const uploadImage = multer({
    storage: multerS3({
      s3: s3Config,
      bucket: "spun-s3",
      contentType: multerS3.AUTO_CONTENT_TYPE,
      key: function (req, file, cb) {
        cb(null, Date.now().toString());
      },
    }),

})

