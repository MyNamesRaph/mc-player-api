import { RecordError } from "https://deno.land/x/surrealdb@v0.5.0/src/errors/index.ts";
import Surreal from "surrealdb";
import Player from "../../../../models/player.ts";
import { Handlers } from "fresh/compat";

export const handler: Handlers = {
  async GET(ctx) {
    try {
      const { uuid } = ctx.params;
      const player = await Surreal.Instance.select("player:⟨" + uuid + "⟩");

      const body = JSON.stringify(player);
      return new Response(body);
    } catch (e) {
      if (e == RecordError) {
        return new Response(null, { status: 404 });
      }
      console.log("ERROR :", e);
      return new Response("ERREUR", { status: 500 });
    }
  },
};
