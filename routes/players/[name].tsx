import Header from "../../components/header.tsx";
import Footer from "../../components/footer.tsx";
import getTranslatedRoutes from "../../data/menu_routes.ts";
import PlayerHead from "../../components/player_head.tsx"
import Player from "../../models/player.ts";

import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<Player[] | null> = {
    async GET(_, ctx) {
      const resp = await fetch(`http://localhost:8000/api/players/` + ctx.params.name);
      if (resp.status === 404) {
        return ctx.render(null);
      }
      const player: Player[] = await resp.json();
      return ctx.render(player);
    },
  };


export default function PlayerByName({data}: PageProps<Player[] | null>) {
    
    if (data == null) {
        return <p>Player not found</p>
    }

    const player: Player = data[0];

    return (
        <div class="flex flex-col h-full">
            <Header active="/players" menu={getTranslatedRoutes("en")}/>
            <div class="bg-stone-dark flex-1 text-white">
                
                <div class="flex justify-center h-full">
                    <div class="block p-6 rounded-lg shadow-lg bg-white w-full m-10">
                        <h5 class="text-gray-900 text-3xl leading-tight mb-2">{player.name}</h5>
                        <div class="flex flex-wrap">
                            <div class="">
                                {
                                    /*player.textures.SKIN !== undefined && player.textures.SKIN !== null &&
                                    <PlayerHead url={player.textures.SKIN.url} />*/
                                }
                                <p class="text-gray-700 text-base mb-4">
                                    Dernière mise à jour: {new Date(player.updated).toLocaleDateString()}.
                                </p>
                            </div>
                            <div>
                            <div class="flex justify-center h-full">
                                <div class="block p-6 rounded-lg shadow-lg bg-gray-200 w-full m-10">
                                    <h5 class="text-gray-900 text-3xl leading-tight mb-2">Info: </h5>
                                    
                                        <div class="overflow-x-auto relative">
                                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>
                                                        <th scope="col" class="py-3 px-6">
                                                            Statistique
                                                        </th>
                                                        <th scope="col" class="py-3 px-6">
                                                            Valeur
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        player.nbt.foodLevel !== undefined &&
                                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Nourriture:
                                                            </th>
                                                            <td class="py-4 px-6">
                                                                {player.nbt.foodLevel}
                                                            </td>
                                                        </tr>
                                                    }
                                                    {
                                                        player.nbt.XpTotal !== undefined &&
                                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Xp total:
                                                            </th>
                                                            <td class="py-4 px-6">
                                                                {player.nbt.XpTotal}
                                                            </td>
                                                        </tr>
                                                    }
                                                </tbody>
                                            </table>
                                        </div>

                                </div>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer menu={getTranslatedRoutes("en")}></Footer>
        </div>
    );
}
