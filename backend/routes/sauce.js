const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const sauceCtrl = require("../controllers/sauce");

router.get("/", auth, sauceCtrl.getSauces);

router.get("/:id", auth, sauceCtrl.getOneSauce);

router.post("/", auth, multer, sauceCtrl.creatSauce);

router.put("/:id", auth, multer, sauceCtrl.modifySauce);

router.delete("/:id", auth, sauceCtrl.deleteSauce);

router.post("/:id/like", auth, sauceCtrl.likeSauce);

module.exports = router;
