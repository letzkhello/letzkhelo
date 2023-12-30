import mongoose, { Schema, Model, Document } from "mongoose";



interface IPayment extends Document {
  email: string;
  razorpay_order_id: string;
  razorpay_payment_id: string;
  
  razorpay_signature: string;
  sportname: string;

}
const PaymentSchema = new Schema<IPayment>({
  email: {
    type: String,
    required:true,
  },
  razorpay_order_id: {
    type: String,
    required: true,
  },
  razorpay_payment_id: {
    type: String,
    required: true,
  },
  razorpay_signature: {
    type: String,
    required: true,
  },
  sportname:{
    type:String,
    required:true,
  },
});
const Payment: Model<IPayment> =
  mongoose.models.Payment || mongoose.model<IPayment>("Payment", PaymentSchema);
export default Payment;
// module.exports = mongoose.models.Payment || mongoose.model('Payment', paymentSchema)
