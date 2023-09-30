// models/LabTestAppointment.js

import mongoose, { Schema } from "mongoose";


const competetionSchema = new mongoose.Schema({
  userName: {
    type: Schema.Types.String,
    required: true,
  },
  userEmail: {
    type: Schema.Types.String,
    required: false,
  },
  date: {
    type: Schema.Types.String,
    required: false,
  },
  sportName: {
    type: Schema.Types.String,
    required: true,
  },
  registrationPrice: {
    type: Schema.Types.Number,
    required:true,
    
  },
  phoneNumber: {
    type: Schema.Types.Number,
    required: true,
  },
  isCompleted: {
    type: Schema.Types.Boolean,
    default: false,
  },
  age: {
    type: Schema.Types.Number,
    required: true,
  },
  weight: {
    type: Schema.Types.String,
    default:'55-60',
    required: true,
  },
});

export const bookForCompetetion =
  mongoose.models.bookForCompetetion ||
  mongoose.model("bookForCompetetion", competetionSchema);

