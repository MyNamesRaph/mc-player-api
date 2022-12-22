import { Handlers} from "$fresh/server.ts";
import Surreal from "surrealdb";

export const handler: Handlers = {
  async DELETE(_req,ctx) {
    try {
        const { uuid } = ctx.params;
        await Surreal.Instance.delete("player:⟨"+uuid+"⟩");
        return new Response(null,{ status: 204 });
    }
    catch (e) {
      console.log('ERROR :',e);
      return new Response('ERROR', { status: 500 });
    }
  }
};