const mongoose = require("mongoose");
const schema = mongoose.Schema(
  {
    sku: {
      type: String,
      trim: true,
      minLength: [7, "{VALUE} must have exactly 7 characters"],
      maxLength: [7, "{VALUE} must have exactly 7 characters"],
      required: true,
      unique: true,
    },
    name: {
      type: String,
      trim: true,
      maxLength: [125, "Name must be at most 125 characters"],
      required: true,
    },
    description: {
      type: String,
      trim: true,
      maxLength: [3000, "Description must be at most 3000 characters"],
    },
    sale_price: {
      type: Number,
      required: true,
      default: 0,
    },
    brand: {
      type: String,
      trim: true,
      minLength: [2, "{VALUE} must be at least 2 characters"],
      maxLength: [30, "{VALUE} must be at most 30 characters"],
    },
    image_url: {
      type: Buffer,
      required: true,
    },
    imageType: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)


schema.virtual('imagePath').get(function () {
  if(this.image_url != null && this.imageType != '') {
    return `data:${this.imageType};charset=utf-8;base64,${this.image_url.toString('base64')}`
  }
})

module.exports = mongoose.model("Item", schema);
