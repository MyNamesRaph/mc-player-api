import { Head } from "$fresh/src/runtime/head.ts";
import HamburgerMenu from "../islands/hamburger_menu.tsx";
import Icon3dCubeSphere from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/3d-cube-sphere.tsx"

type Props = {
  active: string;
  menu: { name: string; href: string; }[];
};

export default function Header({ active, menu }: Props) {
  return (
    <>
        <Head>
            <title>MC Server API</title>
            <link rel="stylesheet" href="../style.css"></link>
        </Head>
        <div class="bg-stone w-full w-screen py-6 px-8 flex flex-col md:flex-row gap-4">
            <div class="flex flex-row flex-1">
                <div class="flex items-center flex-1">
                    <div class="text-2xl  ml-1 font-bold text-black">
                      <Icon3dCubeSphere class="inline-block mx-2" />
                        MC Server API
                    </div>
                </div>
                
            </div>
        
            <HamburgerMenu menu={menu} active={active}></HamburgerMenu>
        </div>
    </>
  );
}
