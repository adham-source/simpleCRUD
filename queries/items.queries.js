const Item = require('../database/models/item.model')

exports.readItems = () => {
  return Item.find({}).collation({ locale: "fr_CA" })
}

exports.readItem = sku => {
  return Item.findOne({ sku: sku })
}