import { Handlers } from "$fresh/server.ts";
import { CSP_CONTEXT } from "https://deno.land/x/fresh@1.1.1/runtime.ts";
import { parse, simplify } from 'nbt-parser';
import Surreal from "surrealdb";
import { getProfile } from "../../../../../data/mojang_api.ts";
import Player from "../../../../../models/player.ts"

export const handler: Handlers = {
    async PUT(_req,ctx) {
        try {
            const { uuid } = ctx.params;
            const data = await Deno.readFile("static/" + uuid + ".dat");
            let parsedData: { [x: string]: never; };
            try {
                const nbt = parse(data);
                parsedData = simplify(nbt);
            }
            catch (e) {
                console.log('ERROR :', e)
                return  new Response("Invalid NBT data", { status: 400 });
            }

            try {
                const profile = await getProfile(uuid);
                const player : Player = {
                    name: profile.name,
                    textures : profile.properties[0].value.textures,
                    nbt: parsedData,
                    updated: new Date()
                }
                const created = await Surreal.Instance.update("player:⟨"+uuid+"⟩",player);
                /*const created = await Surreal.Instance.query(
                    `
                    UPDATE player:⟨$uuid⟩ MERGE {
                        retrieved: <future> {time::now()}
                    };
                    `,
                    {
                        uuid: uuid
                    }
                    )*/
                return new Response(JSON.stringify(created));
            }
            catch (e) {
                console.log("ERROR :",e);
                if (e.status != null) {
                    return new Response(JSON.stringify(e),{status: e.status})
                }
                return new Response("ERREUR", {status: 500})
            }
            
            
        }
        catch (e) {
            console.log('ERROR :',e);
            return new Response('ERREUR', { status: 500 });
        }
    },
  };