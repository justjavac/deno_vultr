import { Status } from "https://deno.land/x/oak/mod.ts";
import type { RouterContext } from "https://deno.land/x/oak/mod.ts";

import {
  API_V1,
  DCID,
  OSID,
  SNAPSHOTID,
  VPSPLANID,
} from "../../config/vultr.ts";

/**
 * 启动服务
 *
 * 从 Snapshot 创建服务器实例
 */
export default async function start(ctx: RouterContext): Promise<void> {
  const APIKey = ctx.request.headers.get("API-Key");

  if (!APIKey) {
    ctx.throw(Status.Unauthorized, "Bad Request");
  }

  const headers = new Headers();
  headers.append("API-Key", APIKey);

  const formData = new FormData();
  formData.append("DCID", DCID);
  formData.append("OSID", OSID);
  formData.append("VPSPLANID", VPSPLANID);
  formData.append("SNAPSHOTID", SNAPSHOTID);

  const response = await fetch(API_V1, {
    method: "POST",
    body: formData,
    headers,
  });

  const result = await response.json();

  ctx.response.status = response.status;
  ctx.response.body = result;
}
