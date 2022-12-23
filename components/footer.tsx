import Icon3dCubeSphere from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/3d-cube-sphere.tsx"
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-github.tsx";
type Props = {
  menu: { name: string; href: string; }[];
};

export default function Footer({menu}: Props) {

  return (
    <div class="hidden flex bg-stone sm:flex flex-col md:flex-row w-full w-screen gap-8 md:gap-16 px-8 py-8 text-sm">
      <div class="flex-1">
        <div class="flex items-center gap-1">
          <Icon3dCubeSphere class="inline-block mx-2" />
          <div class="font-bold text-2xl">
            MC Server API
          </div>
        </div>
      </div>


      <ul class="flex flex-row">
        {menu.map((child) => (
          <li class="mx-2" key={child.name}>
            <a
              class="text-green-800 hover:text-black"
              href={child.href}
            >
              {child.name}
            </a>
          </li>
        ))}
      </ul>

      <div class="text-green-800">
        <a
          href="https://github.com/MyNamesRaph/mc-player-api/"
          class="hover:text-black"
        >
          <BrandGithub />
        </a>
      </div>
    </div>
  );
}
