import { Handlers } from "$fresh/server.ts";
import * as jose from 'https://deno.land/x/jose@v4.11.1/index.ts'

export const handler: Handlers = {
  async GET(_req) {
    try {
        const secret = new TextEncoder().encode(Deno.env.get("AUTH_SECRET"));
        const lifetime = "2h";
        const jwt = await new jose.SignJWT({ 'urn:example:claim': true })
            .setProtectedHeader({ alg: "HS256" })
            .setIssuedAt()
            .setIssuer('urn:example:issuer')
            .setAudience('urn:example:audience')
            .setExpirationTime(lifetime)
            .sign(secret)

        return new Response(JSON.stringify({token: jwt,lifetime: lifetime}));
    }
    catch (e) {
      console.log('ERROR',e);
      return new Response('ERREUR', { status: 500 });
    }
  },
};