import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    required: [true, "Name field is required."],
    minLength: [2, "Name must be 2 character long."],
    type: Schema.Types.String,
  },

  email: {
    required: [true, "Email field is required."],
    type: Schema.Types.String,
    unique: true,
    trim: true,
  },
  password: {
    type: Schema.Types.String,
  },
  avtar: {
    required: false,
    type: Schema.Types.String,
  },
  isAdmin: {
    type: Schema.Types.Boolean,
    default: false,
  },
  age: {
    type: Schema.Types.Number,
    required: false,
  },
  weight: {
    type: Schema.Types.String,
    required: false,
  },
  intrestedSport: {
    type: Schema.Types.String,
    required: false,
  },
  instagramLink: {
    type: Schema.Types.String,
    required: false,
    },
  imageLink:{
    type: Schema.Types.String,
    required: false,


  },
  referral_code:{
    type: Schema.Types.String,
    required: false,


  },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);