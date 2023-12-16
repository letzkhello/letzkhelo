import mongoose, { Schema } from "mongoose";

interface UserStats {
  userId:string;
  totalWins: number;
  totalCocWins: number;
  sportsName: string;
}

const userStatsSchema = new Schema<UserStats>({
  userId: {
    type: Schema.Types.String,
    required:true,
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

export const UserStats = mongoose.models.UserStats || mongoose.model<UserStats>("UserStats", userStatsSchema);
