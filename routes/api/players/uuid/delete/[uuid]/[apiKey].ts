import Surreal from "surrealdb";
import * as jose from "https://deno.land/x/jose@v4.11.1/index.ts";
import { JWSInvalid } from "https://deno.land/x/jose@v4.11.1/util/errors.ts";
import { Handlers } from "fresh/compat";

export const handler: Handlers = {
  async DELETE(ctx) {
    try {
      const { uuid, apiKey } = ctx.params;
      try {
        await jose.jwtVerify(
          apiKey,
          new TextEncoder().encode(Deno.env.get("AUTH_SECRET")),
        );
      } catch (_) {
        return new Response("Clé d'API invalide", { status: 401 });
      }

      await Surreal.Instance.delete("player:⟨" + uuid + "⟩");
      return new Response(null, { status: 204 });
    } catch (e) {
      console.log("ERROR :", e);
      return new Response("ERREUR", { status: 500 });
    }
  },
};
