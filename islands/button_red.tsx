import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function ButtonRed(
  props: JSX.HTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="text-black px-3 py-2 bg-red-300 rounded hover:bg-red-200 active:bg-red-400"
    />
  );
}