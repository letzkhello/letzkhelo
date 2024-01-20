

import mongoose, { Schema, Model, Document } from "mongoose";

interface IOrders extends Document {
  products:Array<string>;
  phoneNo?: Number;
  delieveryLocation?: string;
  date?: Date;
  paid: boolean;
  totalPrice: Number;
  orderCompleted:boolean;
}

const OrderSchema = new Schema<IOrders>({
  products: {
    type:[Schema.Types.String],
    required: true,
  },
 
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

});

const Orders: Model<IOrders> =
  mongoose.models.Orders || mongoose.model<IOrders>("Orders", OrderSchema);

export default Orders;
