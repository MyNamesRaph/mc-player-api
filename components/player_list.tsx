import Player from "../models/player.ts";
import PlayerHead from "./player_head.tsx";

type Props = {
    players : Player[]
  };

export default function PlayerList({players} : Props) {
    return (
        <div class="flex flex-wrap flex-1 gap-5 m-10">
            {
                players.map((player) => (
                    <div>
                        <a href={"players/"+player.name} class="flex justify-center">
                            <div class="block p-6 rounded-lg shadow-lg bg-gray-200 max-w-sm">
                                {
                                    /*player.textures.SKIN !== undefined && player.textures.SKIN !== null &&
                                    <PlayerHead url={player.textures.SKIN.url}></PlayerHead>*/
                                }
                            
                                <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">{player.name}</h5>
                                <p class="text-gray-700 text-base mb-4">
                                    Dernière mise à jour: {new Date(player.updated).toLocaleDateString()}.
                                </p>
                            </div>
                        </a>
                    </div>
                ))
            }
            
        </div>
    );
}
