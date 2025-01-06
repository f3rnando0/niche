import mongoose, { Schema } from "mongoose";

export const settingSchema = new Schema(
  {
    timestamp: {
      type: Number,
      required: true,
      default: 3600,
    },
    currentlyPaint: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export const Setting = mongoose.model("Setting", settingSchema);