import mongoose, { Schema, Document, Types } from "mongoose";
import { User } from "./User";

interface UserStats {
  totalWins: number;
  totalCocWins: number;
  sportsName: string;
}

interface UserStatsDocument extends UserStats, Document {
  userId: Types.ObjectId | typeof User;
}

const userStatsSchema = new Schema<UserStatsDocument>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User", 
    required: true,
  },
  totalWins: {
    type: Schema.Types.Number,
    required: true,
  },
  totalCocWins: {
    type: Schema.Types.Number,
    required: true,
  },
  sportsName: {
    type: Schema.Types.String,
    required: true,
  },
});

export const UserStats = mongoose.models.UserStats || mongoose.model<UserStatsDocument>("UserStats", userStatsSchema);
