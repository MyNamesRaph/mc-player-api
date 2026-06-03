import Surreal from "surrealdb";
import { Handlers } from "fresh/compat";

export const handler: Handlers = {
  async GET() {
    try {
      const players = await Surreal.Instance.select("player");

      const playerCount = players.length;

      const body = JSON.stringify({ "player-count": playerCount });
      return new Response(body);
    } catch (e) {
      console.log("ERROR", e);
      return new Response("ERREUR", { status: 500 });
    }
  },
};
