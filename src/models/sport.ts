

import mongoose, { Schema, Model, Document } from "mongoose";

interface ISport extends Document {
  sportName: string;
  image: string;
  description?: string;
  location?: string;
  isFeatured: boolean;
}

const SportSchema = new Schema<ISport>({
  sportName: {
    type: Schema.Types.String,
    required: true,
  },
  image: {
    type: Schema.Types.String,
    required: true,
  },
  description: {
    type: Schema.Types.String,
    required: false,
  },
  location: {
    type: Schema.Types.String,
    required: false,
  },
  isFeatured: {
    type: Schema.Types.Boolean,
    default: false,
  },
});

const AddSport: Model<ISport> =
  mongoose.models.AddSport || mongoose.model<ISport>("AddSport", SportSchema);

export default AddSport;
