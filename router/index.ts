// Copyright 2020 justjavac(迷渡). All rights reserved. MIT license.
import { ContextSendOptions, RouterContext } from "oak/mod.ts";

/**
 * 应用首页
 *
 * 显示 index.html 的内容，纯静态页面。
 */
export default async function index(ctx: RouterContext): Promise<void> {
  const options: ContextSendOptions = {
    root: `${Deno.cwd()}/assets`,
    path: "index.html",
  };
  await ctx.send(options);
}
