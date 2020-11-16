// Copyright 2020 justjavac(迷渡). All rights reserved. MIT license.
import { Context } from "oak/mod.ts";
import { cyan, green } from "fmt/colors.ts";

/** 日志 */
export default async function logger(
  ctx: Context,
  next: () => Promise<void>,
): Promise<void> {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(
    `${green(ctx.request.method)} ${
      cyan(decodeURIComponent(ctx.request.url.pathname))
    } - ${String(rt)}`,
  );
}
