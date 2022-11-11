const express = require("express")
const {createItem ,displayItems, editItem ,deleteItem } = require("../controllers/items.controller")
const upload = require('../utilities/multer')
 
const router = express.Router()

router.post("/", createItem)


router.get("/", displayItems)


router.put("/:id", editItem)

router.delete("/:id", deleteItem)


module.exports = router;



