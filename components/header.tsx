import { Head } from "$fresh/src/runtime/head.ts";
import HamburgerMenu from "../islands/hamburger_menu.tsx";
import Icon3dCubeSphere from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/3d-cube-sphere.tsx"

type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const menu = [
    { name: "Home", href: "/" },
    { name: "Players", href: "/players" },
    { name: "Stats", href: "/stats" },
  ];

  return (
    <>
        <Head>
            <title>Raph's MC Server API</title>
            <link rel="stylesheet" href="style.css"></link>
        </Head>
        <div class="bg-stone w-full w-screen py-6 px-8 flex flex-col md:flex-row gap-4">
            <div class="flex flex-row flex-1">
                <div class="flex items-center flex-1">
                    <div class="text-2xl  ml-1 font-bold">
                      <Icon3dCubeSphere class="inline-block mx-2" />
                        Raph's MC Server API
                    </div>
                </div>
                
            </div>
        
            <HamburgerMenu menu={menu} active={active}></HamburgerMenu>
        </div>
    </>
  );
}
