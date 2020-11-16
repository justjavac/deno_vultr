// Copyright 2020 justjavac(迷渡). All rights reserved. MIT license.
import { Context } from "oak/mod.ts";

/** 在 Respond Header 中显示服务器响应时间 */
export default async function responseTime(
  ctx: Context,
  next: () => Promise<void>,
): Promise<void> {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
}
