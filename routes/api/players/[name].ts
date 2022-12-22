import { Handlers} from "$fresh/server.ts";
import Surreal from "surrealdb";

export const handler: Handlers = {
  async GET(_req,ctx) {
    try {
        const { name } = ctx.params;
        const result = await Surreal.Instance.query(
            'SELECT * FROM player WHERE name = $name',
            { name }
        );

        const players = result[0].result;
    
        if (Array.isArray(players)) {
            if (players.length >= 1) {
                const body = JSON.stringify(players);
                return new Response(body);
            }
            else {
                return new Response(`PLAYER "${name}" NOT FOUND`, { status: 404 });
            }
        }
        else {
            return new Response('ERROR', { status: 500 });
        }
    }
    catch (e) {
      console.log('ERROR :',e);
      return new Response('ERROR', { status: 500 });
    }
  }
};