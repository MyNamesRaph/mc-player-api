#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import { connectDB } from "./data/surreal_db.ts";

await connectDB();
await dev(import.meta.url, "./main.ts");
