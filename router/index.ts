import type { RouterContext } from "https://deno.land/x/oak/mod.ts";

/**
 * 应用首页
 *
 * 显示 index.html 的内容，纯静态页面。
 */
export default async function index(ctx: RouterContext): Promise<void> {
  const html = new URL("../assets/index.html", import.meta.url);
  const response = await fetch(html);
  const body = await response.text();
  ctx.response.body = body;
}
