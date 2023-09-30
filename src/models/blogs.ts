

import mongoose, { Schema, Model, Document } from "mongoose";

interface Iblog extends Document {
    title: string;
    author: string;

  image: string;
  description?: string;
  date?: Date;

  
}

const BlogSchema = new Schema<Iblog>({
  title: {
    type: Schema.Types.String,
    required: true,
  },
  author: {
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
  date: {
    type: Schema.Types.Date,
    required: true,
  },
  
  
 
});

const AddBlog: Model<Iblog> =
  mongoose.models.AddBlog || mongoose.model<Iblog>("AddBlog", BlogSchema);

export default AddBlog;
