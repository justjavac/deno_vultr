// Copyright 2020 justjavac(迷渡). All rights reserved. MIT license.
import { Context, isHttpError } from "oak/mod.ts";

/** 错误处理 */
export default async function errorHandler(
  ctx: Context,
  next: () => Promise<void>,
): Promise<void> {
  try {
    await next();
  } catch (err) {
    if (isHttpError(err)) {
      ctx.response.status = err.status;
      const { message, status } = err;
      if (ctx.request.accepts("json")) {
        ctx.response.body = { message, status };
        ctx.response.type = "json";
      } else {
        ctx.response.body = `${status} ${message}}`;
        ctx.response.type = "text/plain";
      }
    } else {
      console.log(err);
      throw err;
    }
  }
}
