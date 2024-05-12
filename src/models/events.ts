

import mongoose, { Schema, Model, Document } from "mongoose";

interface IEvent extends Document {
  eventName: string;
  image: string;
  description?: string;
  location?: string;
  date?: Date;
  isFeatured: boolean;
  isOpen: boolean;
  registrationClosed: boolean;
  entryFees: Number;
  locationLink: string;
}

const EventSchema = new Schema<IEvent>({
  eventName: {
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
    required: true,
  },
  date: {
    type: Schema.Types.Date,
    required: true,
  },
  isFeatured: {
    type: Schema.Types.Boolean,
    default: false,
  },
  isOpen: {
    type: Schema.Types.Boolean,
    default: false,
    required: false,
  },
  registrationClosed: {
    type: Schema.Types.Boolean,
    default: false,
    required: false,
  },
  entryFees: {
    type: Schema.Types.Number,
    required: false,
  },
  locationLink: {
    type: Schema.Types.String,
    required: false,
  },
});

const AddEvent: Model<IEvent> =
  mongoose.models.AddEvent || mongoose.model<IEvent>("AddEvent", EventSchema);

export default AddEvent;
