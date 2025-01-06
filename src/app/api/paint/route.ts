import { env } from "@/env";
import axios from "axios";

export async function getAccessToken() {
  try {
    const response = await axios({
      method: "POST",
      data: JSON.stringify({
        client_id: env.CLIENT_ID,
        client_secret: env.CLIENT_SECRET,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      url: "https://api.artsy.net/api/tokens/xapp_token",
    });

    return response.data.token;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    if (!env.CLIENT_ID || !env.CLIENT_SECRET) {
      return new Response("Missing credentials", { status: 401 });
    }

    const body = await request.json();

    if (!body.paintID) {
      return new Response("Missing paintID", { status: 400 });
    }

    const token = await getAccessToken();

    if (token) {
      try {
        const response = await axios({
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-XAPP-Token": token,
          },
          url: `https://api.artsy.net/api/artworks/${body.paintID}`,
        });

        return Response.json(response.data._links);
      } catch (error) {
        console.error(error);
        return new Response("Internal Server Error", { status: 500 });
      }
    }

    return new Response("Failed to get token", { status: 500 });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
