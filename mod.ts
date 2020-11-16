#!/usr/bin/env -S deno run --unstable --allow-net --allow-read --import-map=import_map.json
// Copyright 2020 justjavac(迷渡). All rights reserved. MIT license.
import { Application, Router } from "oak/mod.ts";
import { yellow } from "fmt/colors.ts";

import notFound from "/middleware/notFound.ts";
import logger from "/middleware/logger.ts";
import responseTime from "/middleware/responseTime.ts";
import errorHandler from "/middleware/errorHandler.ts";

import index from "/router/index.ts";
import status from "/router/api/status.ts";
import start from "/router/api/start.ts";
import stop from "/router/api/stop.ts";

import { HOST, PORT } from "/config/app.ts";

const router = new Router();
router
  .get("/", index)
  .get("/api/status", status)
  .post("/api/start", start)
  .post("/api/stop", stop);

const app = new Application();

app.use(logger);
app.use(responseTime);
app.use(errorHandler);

// Use the router
app.use(router.routes());
app.use(router.allowedMethods());

app.use(notFound);

app.addEventListener("listen", ({ hostname, port }) => {
  console.log(
    "Start listening on " + yellow(`${hostname}:${port}`),
  );
});

await app.listen({ hostname: HOST, port: PORT });
console.log("Finished.");
