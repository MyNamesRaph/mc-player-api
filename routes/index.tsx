import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";
import getTranslatedRoutes from "../data/menu_routes.ts";
import PlayerList from "../components/player_list.tsx"
import {Handlers,PageProps} from "$fresh/server.ts";
import Player from "../models/player.ts";

export const handler: Handlers<Player[] | null> = {
  async GET(_, ctx) {
    const resp = await fetch(`http://localhost:8000/api/players`);
    if (resp.status === 404) {
      console.log("Couldnt fetch players")
      return ctx.render(null);
    }
    const players: Player[] = await resp.json();
    return ctx.render(players);
  },
};

export default function Home({ data }: PageProps<Player[] | null>) {

  return (
    <div class="flex flex-col h-full">
      <Header active="/" menu={getTranslatedRoutes("fr")}/>
      <div class="flex-1 bg-stone-dark">
        {data == null ? <h1>User not found</h1> : <PlayerList players={data!}/>}
      </div>
      <Footer menu={getTranslatedRoutes("en")}></Footer>
    </div>
  );
}
