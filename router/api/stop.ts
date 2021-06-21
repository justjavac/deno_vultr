import { Status } from "https://deno.land/x/oak/mod.ts";
import type { RouterContext } from "https://deno.land/x/oak/mod.ts";

import { API_V2 } from "../../config/vultr.ts";

/**
 * 停止服务
 *
 * 当关机(shutdown)后，vultr 并不会停止计费。因此我们讲实例直接删除。
 */
export default async function stop(ctx: RouterContext): Promise<void> {
  const APIKey = ctx.request.headers.get("API-Key");

  if (!APIKey) {
    ctx.throw(Status.Unauthorized, "Bad Request");
  }

  const headers = new Headers();
  headers.append("Authorization", `Bearer ${APIKey}`);

  let response = await fetch(API_V2, {
    method: "GET",
    headers,
  });

  const result = await response.json();

  if (!response.ok) {
    ctx.response.status = response.status;
    ctx.response.body = result;
    return;
  }

  if (result.meta.total < 1) {
    ctx.response.status = Status.NotFound;
    ctx.response.body = { status: 404, message: "Not Found" };
    ctx.response.type = "json";
    return;
  }

  response = await fetch(`${API_V2}/${result.instances[0].id}`, {
    method: "DELETE",
    headers,
  });

  ctx.response.status = response.status;
}
