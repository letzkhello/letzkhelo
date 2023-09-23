

import mongoose, { Schema, Model, Document } from "mongoose";

interface ITeam extends Document {
  teamName: string;
  captainName: string;
  noOfPlayers?: string;
  location?: string;
  instagramId?: string;
  phoneNumber?:number;

 
}

const TeamSchema = new Schema<ITeam>({
    teamName: {
    type: Schema.Types.String,
    required: true,
  },
  captainName: {
    type: Schema.Types.String,
    required: true,
  },
  noOfPlayers: {
    type: Schema.Types.String,
    required: false,
  },
  location: {
    type: Schema.Types.String,
    required: true,
  },
  instagramId: {
    type: Schema.Types.String,
    required: true,
  },
  phoneNumber: {
    type: Schema.Types.Number,
    default: false,
  },
 
});

const AddTeam: Model<ITeam> =
  mongoose.models.AddTeam || mongoose.model<ITeam>("AddTeam", TeamSchema);

export default AddTeam;
