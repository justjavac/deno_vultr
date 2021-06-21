# deno_vultr

[![Build Status](https://github.com/justjavac/deno_vultr/workflows/ci/badge.svg)](https://github.com/justjavac/deno_vultr/actions)

目前 Vultr 最低可用套餐为 5 美元/月，即 $0.007/小时。于是我写了这个服务，并提供了一个随时随地可访问的网页，这样可以按需启动 Vultr
实例，基本上可以控制在**每个月只需要 2 美元**。

> 部署在 Deno Deploy

## 使用

### 1. 前置工作

1. 创建 Vultr 实例，并安装好需要的软件和服务。

2. 新建一个 snapshot。

### 2. 搭建服务

1. 点击下面按钮，进入 Deno Deploy

   [![](./assets/deno-deploy-button.svg)](https://dash.deno.com/new?url=https://raw.githubusercontent.com/justjavac/deno_vultr/main/mod.ts&env=SNAPSHOTID)

2. 输入 `SNAPSHOTID` 值。这个值是上一步创建的 snapshot。

3. 点击 `Create` 新建一个项目，然后点击 `Deploy` 按钮。

4. **可选** 在 `Domains` 标签页绑定自己的域名。

## 本地开发

1. 安装 `deployctl`:

```bash
deno install -Afr --no-check https://deno.land/x/deploy/deployctl.ts
```

1. 启动本地开发服务器：

```bash
deployctl run --no-check --watch ./main.ts
```

## License

[deno_vultr](https://github.com/justjavac/deno_vultr) 的源码使用 MIT License
发布。具体内容请查看 [LICENSE](./LICENSE) 文件。
