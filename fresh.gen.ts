// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/api/players/[name].ts";
import * as $1 from "./routes/api/players/delete/[uuid].ts";
import * as $2 from "./routes/api/players/index.ts";
import * as $3 from "./routes/api/players/parse.ts";
import * as $4 from "./routes/index.tsx";
import * as $5 from "./routes/players.tsx";
import * as $6 from "./routes/stats.tsx";
import * as $$0 from "./islands/hamburger_menu.tsx";

const manifest = {
  routes: {
    "./routes/api/players/[name].ts": $0,
    "./routes/api/players/delete/[uuid].ts": $1,
    "./routes/api/players/index.ts": $2,
    "./routes/api/players/parse.ts": $3,
    "./routes/index.tsx": $4,
    "./routes/players.tsx": $5,
    "./routes/stats.tsx": $6,
  },
  islands: {
    "./islands/hamburger_menu.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;