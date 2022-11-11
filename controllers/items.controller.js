const crypto = require('crypto');

const { readItems } = require("../queries/items.queries")
const Item = require("../database/models/item.model")

// Check type images 
const imageMimeTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/svg+xml']


exports.createItem = async(req ,res) => {  
  
  try {
    let { sku, name, description, sale_price, brand} = req.body
    let skuRandom = crypto.randomBytes(4).toString('hex').slice(0, 7)
    sku = skuRandom
    let item = new Item({ sku, name, description, sale_price, brand})
    saveImage(item, req.body.image_url)
    await item.save()
    res.redirect("/items")
  } catch{
    res.redirect('/')
  }
}

exports.displayItems = async (req, res, next) => {
  try {
    const items = await readItems();
    res.render('items', {  items: items });
  } catch(e) {
    next(e)
  }
}

exports.editItem = async(req, res) => {
  let item
  try {
    item = await Item.findById(req.params.id)
    if(!item) return res.render('error', { error: 'Not Found Item' })
    item.name = req.body.name
    item.description = req.body.description
    item.sale_price = req.body.sale_price
    item.brand = req.body.brand      
    if(req.body.image_url != null && req.body.image_url !== '') saveImage(item, req.body.image_url)
    await item.save()
    res.redirect(`/items`)
  } catch {
    res.redirect('/')
  }
}

exports.deleteItem = async (req, res) => {
    let item
    try {
        item = await Item.findById(req.params.id)
        if(!item) return res.render('error', {error: 'Not Found Item'})
        await item.remove()
        res.redirect('/items')
    } catch {
      res.redirect('/')
    }
}

// Save image uplaoded
function saveImage(item, coverEncoded) {
  if (coverEncoded == null) return
  const cover = JSON.parse(coverEncoded)
  if(cover != null && imageMimeTypes.includes(cover.type)) {
    item.image_url = new Buffer.from(cover.data, 'base64')
    item.imageType = cover.type
  }
}
