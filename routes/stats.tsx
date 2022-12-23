import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";
import getTranslatedRoutes from "../data/menu_routes.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

type PlayerCount = {
  "player-count": string
}

export const handler: Handlers<PlayerCount | null> = {
  async GET(_, ctx) {
    const resp = await fetch(`http://localhost:8000/api/stats/player_count`);
    if (resp.status === 404) {
      console.log("Couldnt fetch players")
      return ctx.render(null);
    }
    const playerCount: PlayerCount = await resp.json();
    return ctx.render(playerCount);
  },
};

export default function Stats({data}: PageProps<PlayerCount | null>) {
  return (
    <div class="flex flex-col h-full">
      <Header active="/stats" menu={getTranslatedRoutes("en")}/>
      <div class="bg-stone-dark flex-1 text-white">
        <div class="flex justify-center h-full">
          <div class="block p-6 rounded-lg shadow-lg bg-white w-full m-10">
            <h5 class="text-gray-900 text-3xl leading-tight mb-2">Statistiques</h5>
            {
              data != null &&
              <p class="text-gray-700 text-base mb-4">
                Nombre de joueurs: {data["player-count"]}.
              </p>
            }
            
          </div>
        </div>
      </div>
      <Footer menu={getTranslatedRoutes("en")}></Footer>
    </div>
  );
}
