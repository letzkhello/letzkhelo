

import mongoose, { Schema, Model, Document } from "mongoose";

interface IOrders extends Document {
  products:Array<string>;
  phoneNo?: Number;
  delieveryLocation?: string;
  date?: Date;
  paid: boolean;
  totalPrice: Number;
  orderCompleted:boolean;
  name: string;
  email: string;
}

const OrderSchema = new Schema<IOrders>({
  // products: {
  //   type:[Schema.Types.String],
  //   required: true,
  // },

  products: [{
    productName: {
    type: Schema.Types.String,
    required: true,
    },
    imageLink: {
    type: Schema.Types.String,
    required: true,
    },
    price: {
    type: Schema.Types.Number,
    required: true,
    },
    quantity: {
    type: Schema.Types.Number,
    required: false,
    },
  }],
 
  phoneNo: {
    type: Schema.Types.String,
    required: true,
  },
  delieveryLocation: {
    type: Schema.Types.String,
    required: true,
  },
  date: {
    type: Schema.Types.Date,
    required: true,
  },
  paid: {
    type: Schema.Types.Boolean,
    default: false,
  },
  orderCompleted: {
    type: Schema.Types.Boolean,
    default: false,
  },


  totalPrice: {
    type: Schema.Types.Number,
    required: true,
  },
  name: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },

});

const Orders: Model<IOrders> =
  mongoose.models.Orders || mongoose.model<IOrders>("Orders", OrderSchema);

export default Orders;
