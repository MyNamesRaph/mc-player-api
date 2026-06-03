import Surreal from "surrealdb";
import { Handlers } from "fresh/compat";

export const handler: Handlers = {
  async GET() {
    try {
      const players = await Surreal.Instance.select("player");

      const body = JSON.stringify(players);
      return new Response(body);
    } catch (e) {
      console.log("ERROR", e);
      return new Response("ERREUR", { status: 500 });
    }
  },
};
