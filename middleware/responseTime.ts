import { Context } from "https://deno.land/x/oak/mod.ts";

/** 在 Respond Header 中显示服务器响应时间 */
export default async function responseTime(
  ctx: Context,
  next: () => Promise<unknown>,
): Promise<void> {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
}
