// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/api/auth/index.ts";
import * as $1 from "./routes/api/index.tsx";
import * as $2 from "./routes/api/players/[name].ts";
import * as $3 from "./routes/api/players/index.ts";
import * as $4 from "./routes/api/players/uuid/[uuid].ts";
import * as $5 from "./routes/api/players/uuid/delete/[uuid]/[apiKey].ts";
import * as $6 from "./routes/api/players/uuid/parse/[uuid].ts";
import * as $7 from "./routes/api/stats/player_count.ts";
import * as $8 from "./routes/auth/index.tsx";
import * as $9 from "./routes/index.tsx";
import * as $10 from "./routes/players/[name].tsx";
import * as $11 from "./routes/players/index.tsx";
import * as $12 from "./routes/stats.tsx";
import * as $$0 from "./islands/api_key_form.tsx";
import * as $$1 from "./islands/button.tsx";
import * as $$2 from "./islands/button_red.tsx";
import * as $$3 from "./islands/create_form.tsx";
import * as $$4 from "./islands/delete_form.tsx";
import * as $$5 from "./islands/dropdown.tsx";
import * as $$6 from "./islands/hamburger_menu.tsx";
import * as $$7 from "./islands/input.tsx";

const manifest = {
  routes: {
    "./routes/api/auth/index.ts": $0,
    "./routes/api/index.tsx": $1,
    "./routes/api/players/[name].ts": $2,
    "./routes/api/players/index.ts": $3,
    "./routes/api/players/uuid/[uuid].ts": $4,
    "./routes/api/players/uuid/delete/[uuid]/[apiKey].ts": $5,
    "./routes/api/players/uuid/parse/[uuid].ts": $6,
    "./routes/api/stats/player_count.ts": $7,
    "./routes/auth/index.tsx": $8,
    "./routes/index.tsx": $9,
    "./routes/players/[name].tsx": $10,
    "./routes/players/index.tsx": $11,
    "./routes/stats.tsx": $12,
  },
  islands: {
    "./islands/api_key_form.tsx": $$0,
    "./islands/button.tsx": $$1,
    "./islands/button_red.tsx": $$2,
    "./islands/create_form.tsx": $$3,
    "./islands/delete_form.tsx": $$4,
    "./islands/dropdown.tsx": $$5,
    "./islands/hamburger_menu.tsx": $$6,
    "./islands/input.tsx": $$7,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
