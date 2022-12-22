import { Handlers } from "$fresh/server.ts";
import Surreal from "surrealdb";


export const handler: Handlers = {
  async GET(_req) {
    try {
      const players = await Surreal.Instance.select('player');
        
      const body = JSON.stringify(players);
      return new Response(body);
    }
    catch (e) {
      console.log('ERROR',e);
      return new Response('ERROR', { status: 500 });
    }
  },
};