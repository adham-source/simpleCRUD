// const multer = require('multer')
// const path = require('path')
// const fs = require('fs')

// let fileName = ''
// let folderName = path.join(__dirname, '../uploads')
// if (!fs.existsSync(folderName)) fs.mkdirSync(folderName) 

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => { 
//         cb(null, folderName) 
//     },
//     filename:(req, file, cb) => {
//         fileName = `${Date.now()}.${(file.originalname.split('.').pop())}`
//         cb(null, fileName)
//     }
// })


// const fileFilter = (req, file, cb) => { 
//     console.log(file, "File Multer")   
//     // Allowed ext
//     const filetypes = /jpeg|jpg|png/;
//     // Check ext
//     const extname =  filetypes.test(path.extname(file.originalname).toLowerCase())
//     // Check mime
//     const mimetype = filetypes.test(file.mimetype)
//     if(mimetype && extname){
//         return cb(null, true)
//     } else {
//         cb(null, false)
//     }
// }

// const upload = multer({
//   storage,
//   fileFilter,
//   limits : { fieldSize: 5 * 1024 * 1024 }
// })

// module.exports = upload