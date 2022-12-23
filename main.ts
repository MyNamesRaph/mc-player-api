/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import { connectDB } from "./data/surreal_db.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

import {initTranslations} from "./i18n.ts"

await connectDB();
await initTranslations();

await start(manifest, {
    plugins: [
        twindPlugin(twindConfig),
      ],
});
