import { model, Schema } from "mongoose";

export const paintSchema = new Schema(
	{
		reference_id: {
			type: String,
			required: true,
		},
		image_url: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

export const Paint = model("Paint", paintSchema);
