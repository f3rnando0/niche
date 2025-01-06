import { model, Schema } from "mongoose";

export const settingSchema = new Schema(
	{
		timestamp: {
			type: Number,
			required: true,
			default: 3600,
		},
		currentlyPaintIndex: {
			type: Number,
			default: null,
		},
	},
	{
		timestamps: true,
	},
);

export const Setting = model("Setting", settingSchema);
