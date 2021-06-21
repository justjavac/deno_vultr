import { Application, Router } from "https://deno.land/x/oak/mod.ts";

import notFound from "./middleware/notFound.ts";
import logger from "./middleware/logger.ts";
import responseTime from "./middleware/responseTime.ts";
import errorHandler from "./middleware/errorHandler.ts";

import index from "./router/index.ts";
import status from "./router/api/status.ts";
import start from "./router/api/start.ts";
import stop from "./router/api/stop.ts";

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

addEventListener("fetch", app.fetchEventHandler());
