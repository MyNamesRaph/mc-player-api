import { ComponentChildren } from "preact";
import Icon3dCubeSphere from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/3d-cube-sphere.tsx"
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-github.tsx";
type Props = {
  children: ComponentChildren;
};

export default function Footer() {
  const menus = [
    {
      children: [
        { name: "Getting Started", href: "#" },
        { name: "Guide", href: "#" },
        { name: "API", href: "#" },
        { name: "Showcase", href: "#" },
        { name: "Pricing", href: "#" },
      ],
    },
  ];

  return (
    <div class="bg-stone flex flex-col md:flex-row w-full w-screen gap-8 md:gap-16 px-8 py-8 text-sm">
      <div class="flex-1">
        <div class="flex items-center gap-1">
          <Icon3dCubeSphere class="inline-block mx-2" />
          <div class="font-bold text-2xl">
            Raph's MC Server API
          </div>
        </div>
      </div>

      {menus.map((item) => (
        <div class="mb-4">
          <div class="font-bold"></div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a
                  class="text-green-750 hover:text-black"
                  href={child.href}
                >
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div class="text-green-500 space-y-2">
        <div class="text-xs">
          Copyright © 2020 DenoLand<br />
          All right reserved.
        </div>

        <a
          href="https://github.com/denoland/fresh"
          class="inline-block hover:text-black"
        >
          <BrandGithub />
        </a>
      </div>
    </div>
  );
}
