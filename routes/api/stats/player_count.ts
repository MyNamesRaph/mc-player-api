import { Handlers } from "$fresh/server.ts";
import Surreal from "surrealdb";


export const handler: Handlers = {
  async GET(_req) {
    try {
      const players = await Surreal.Instance.select('player');

      const playerCount = players.length;

      const body = JSON.stringify({"player-count": playerCount});
      return new Response(body);
    }
    catch (e) {
      console.log('ERROR',e);
      return new Response('ERREUR', { status: 500 });
    }
  },
};