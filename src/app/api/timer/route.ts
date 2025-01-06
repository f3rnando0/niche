import { getOrCreateSettings } from "@/lib/settings";

export async function GET(request: Request) {
  const settings = await getOrCreateSettings();
  return Response.json(settings);
}

export async function POST(request: Request) {
  const settings = await getOrCreateSettings();
  settings.timestamp = Date.now() + 3600000;
  settings.currentlyPaintIndex = settings.currentlyPaintIndex + 1;
  await settings.save();

  return Response.json(settings);
}
