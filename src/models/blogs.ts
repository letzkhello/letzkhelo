

import mongoose, { Schema, Model, Document } from "mongoose";

interface Iblog extends Document {
    title: string;
  image: string;
  description?: string;
  
}

const BlogSchema = new Schema<Iblog>({
  title: {
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
 
});

const AddBlog: Model<Iblog> =
  mongoose.models.AddBlog || mongoose.model<Iblog>("AddBlog", BlogSchema);

export default AddBlog;
