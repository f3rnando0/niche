import { getOrCreateSettings } from "@/lib/settings";
import axios from "axios";
import { getAccessToken } from "../paint/route";

export async function GET(request: Request) {
  const settings = await getOrCreateSettings();

  const token = await getAccessToken();

  return Response.json(settings);
}

export async function POST(request: Request) {
  try {
    const settings = await getOrCreateSettings();
    settings.timestamp = Date.now() + 3600000;

    const token = await getAccessToken();

    if (token) {
      const response = await axios({
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-XAPP-Token": token,
        },
        url: "https://api.artsy.net/api/artworks?status=upcoming&sample=1",
      });

      settings.currentlyPaint = response.data.id;

      await settings.save();

      return Response.json(settings);
    }
  } catch (error) {
    console.error(error);
  }
}
