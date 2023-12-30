

import mongoose, { Schema, Model, Document } from "mongoose";

interface IProduct extends Document {
  productName: string;
  category: string;
  description?: string;
  expectedDelievery?: string;
  isFeatured: boolean;
  inStock: boolean;
  price: Number;
  discountedPrice:Number;
  imageLink: string;
}

const ProductSchema = new Schema<IProduct>({
    productName: {
    type: Schema.Types.String,
    required: true,
  },
  category: {
    type: Schema.Types.String,
    required: true,
  },
  description: {
    type: Schema.Types.String,
    required: false,
  },
  
  expectedDelievery: {
    type: Schema.Types.String,
    required: true,
  },
  isFeatured: {
    type: Schema.Types.Boolean,
    default: false,
  },
  inStock: {
    type: Schema.Types.Boolean,
    default: false,
    required: false,
  },
  
  price: {
    type: Schema.Types.Number,
    required: true,
  },
  discountedPrice: {
    type: Schema.Types.Number,
    required: true,
  },
  imageLink: {
    type: Schema.Types.String,
    required: false,
  },
});

const Addproduct: Model<IProduct> =
  mongoose.models.Addproduct || mongoose.model<IProduct>("Addproduct", ProductSchema);

export default Addproduct;
