import { useEffect, useState } from "preact/hooks";
import IconMenu from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/menu-2.tsx"

type Props = {
  active: string;
  menu: { name: string; href: string; }[];
};

const timeFmt = new Intl.RelativeTimeFormat("en-US");

export default function HamburgerMenu({active,menu}: Props) {
  const [open, setOpen] = useState(true);

  return <>
    <div class="sm:hidden" onClick={() => setOpen(!open)}>
      <IconMenu/>
    </div>

    <ul class={(open ? " " : "hidden") + " sm:flex flex items-center gap-6"}>
      {menu.map((menu) => (
        <li>
            <a 
              href={menu.href} 
              class={
                "text-black-500 hover:text-black-700 py-1 border-green-500" + 
                (menu.href === active ? " font-bold border-b-2" : "")
            }
            >
              {menu.name}
            </a>
        </li>
      ))}
    </ul>
  </>
}