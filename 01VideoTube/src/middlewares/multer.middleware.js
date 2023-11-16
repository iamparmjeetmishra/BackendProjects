import multer from "multer";

// https://github.com/expressjs/multer

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/tmp")
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //   cb(null, file.fieldname + '-' + uniqueSuffix)
      console.log(`${file.fieldname}, \n ${file.uniqueSuffix}`)
        cb(null, file.originalname)
    }
  })
  
export const upload = multer({ storage: storage })