import { start } from "fresh";
import manifest from "./fresh.gen.ts";
import { connectDB } from "./data/surreal_db.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

import { initTranslations } from "./i18n.ts";

await connectDB();
await initTranslations();

await start(manifest, {
  plugins: [
    twindPlugin(twindConfig),
  ],
});
