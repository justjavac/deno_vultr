import { Context } from "https://deno.land/x/oak/mod.ts";
import { cyan, green } from "https://deno.land/std/fmt/colors.ts";

/** 日志 */
export default async function logger(
  ctx: Context,
  next: () => Promise<unknown>,
): Promise<void> {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(
    `${green(ctx.request.method)} ${
      cyan(decodeURIComponent(ctx.request.url.pathname))
    } - ${String(rt)}`,
  );
}
