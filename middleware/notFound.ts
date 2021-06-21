import { Context, Status } from "https://deno.land/x/oak/mod.ts";

/** 404 页面 */
export default function notFound(ctx: Context): void {
  ctx.response.status = Status.NotFound;
  ctx.response.body =
    `<html><body><h1>404 - Not Found</h1><p>Path <code>${ctx.request.url}</code> not found.`;
}
