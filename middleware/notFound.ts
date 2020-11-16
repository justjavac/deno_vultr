// Copyright 2020 justjavac(迷渡). All rights reserved. MIT license.
import { Context, Status } from "oak/mod.ts";

/** 404 页面 */
export default function notFound(ctx: Context): void {
  ctx.response.status = Status.NotFound;
  ctx.response.body =
    `<html><body><h1>404 - Not Found</h1><p>Path <code>${ctx.request.url}</code> not found.`;
}
