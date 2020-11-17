# deno_vultr

[![tag](https://img.shields.io/github/release/justjavac/deno_vultr)](https://github.com/justjavac/deno_vultr/releases)
[![Build Status](https://github.com/justjavac/deno_vultr/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_vultr/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_vultr)](https://github.com/justjavac/deno_vultr/blob/master/LICENSE)

目前 Vultr 最低可用套餐为 5 美元/月，即 $0.007/小时。于是我写了这个服务，并提供了一个随时随地可访问的网页，这样可以按需启动 Vultr 实例，基本上可以控制在**每个月只需要 2 美元**。

## 使用

### 1. 前置工作

1. 创建 Vultr 实例，并安装好需要的软件和服务。

1. 新建一个 snapshot。

### 2. 搭建服务

克隆本仓库：

```bash
git clone https://github.com/justjavac/deno_vultr
```

修改配置文件 `./config/vultr.ts`:

```ts
export const SNAPSHOTID = "xxxxxxxxxxxxx";
```

`SNAPSHOTID` 修改为上一步创建的 snapshot。

**可选：** 可以自行修改 `./config/app.ts` 文件。

### 3. 运行

通用运行方式：

```bash
deno run --unstable --allow-net --allow-read --import-map=import_map.json ./mod.ts
```

快捷运行方式：

```bash
chmod +x mod.ts
./mod.ts
```

### License

[deno_vultr](https://github.com/justjavac/deno_vultr) 的源码使用 MIT License 发布。具体内容请查看 [LICENSE](./LICENSE) 文件。
