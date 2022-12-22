import { Handlers } from "$fresh/server.ts";
import { parse, simplify } from 'nbt-parser';
import Surreal from "surrealdb";
import { getProfile } from "../../../data/mojang_api.ts";
import Player from "../../../models/player.ts"

export const handler: Handlers = {
    async PUT(_req) {
        try {
            const uuid = "318d8b19-abdd-499e-b0c3-54934e6597b2";
            const data = await Deno.readFile("static/318d8b19-abdd-499e-b0c3-54934e6597b2.dat");
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
                //return new Response(JSON.stringify(player))
                const created = await Surreal.Instance.update("player:⟨"+uuid+"⟩",player);
                return new Response(JSON.stringify(created));
            }
            catch (e) {
                console.log("ERROR :",e);
                if (e.status != null) {
                    return new Response(JSON.stringify(e),{status: e.status})
                }
                return new Response("ERROR", {status: 500})
            }
            
            
        }
        catch (e) {
            console.log('ERROR :',e);
            return new Response('ERROR', { status: 500 });
        }
    },
  };