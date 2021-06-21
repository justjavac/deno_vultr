import { Status } from "https://deno.land/x/oak/mod.ts";
import type { RouterContext } from "https://deno.land/x/oak/mod.ts";

import { API_V2 } from "../../config/vultr.ts";

/**
 * 服务状态
 *
 * 获取所有服务器的状态。前端的判断逻辑是只检查第一个服务器的状态。
 */
export default async function status(ctx: RouterContext): Promise<void> {
  const APIKey = ctx.request.headers.get("API-Key");

  if (!APIKey) {
    ctx.throw(Status.Unauthorized, "Bad Request");
  }

  const headers = new Headers();
  headers.append("Authorization", `Bearer ${APIKey}`);

  const response = await fetch(API_V2, {
    method: "GET",
    headers,
  });

  const body = await response.json();

  ctx.response.status = response.status;
  ctx.response.body = body;
}
