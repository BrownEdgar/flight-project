const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require("path");

const CompanyController = require('../Controllers/CompanyController')
const controller = new CompanyController()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const extName = path.extname(file.originalname);
    if (extName === '.png' || extName === '.jpg') {
      cb(null, `photo-${Date.now()}${path.extname(file.originalname)}`);
    } else {
      cb({ message: `invalid ext name-${extName}` }, "");
    }
  },
});
const uploads = multer({ storage: storage });

router.post("/", uploads.single("logo"), controller.saveCompany);


module.exports = router