import * as jose from "https://deno.land/x/jose@v4.11.1/index.ts";
import { Handlers } from "fresh/compat";

export const handler: Handlers = {
  async GET() {
    try {
      const secret = new TextEncoder().encode(Deno.env.get("AUTH_SECRET"));
      const lifetime = "2h";
      const jwt = await new jose.SignJWT({ "urn:example:claim": true })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setIssuer("urn:example:issuer")
        .setAudience("urn:example:audience")
        .setExpirationTime(lifetime)
        .sign(secret);

      return new Response(JSON.stringify({ token: jwt, lifetime: lifetime }));
    } catch (e) {
      console.log("ERROR", e);
      return new Response("ERREUR", { status: 500 });
    }
  },
};
