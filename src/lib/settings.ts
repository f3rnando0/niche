import { Setting } from "@/db/models/Setting";
import connect from "@/db";

export async function getOrCreateSettings() {
  await connect();

  let settings = await Setting.findOne();

  if (!settings) {
    settings = await Setting.create({
      timestamp: Date.now() + 3600000,
      currentlyPaintIndex: 0,
      isMain: true,
    });
  }

  return settings;
}