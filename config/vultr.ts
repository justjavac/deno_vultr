/** vultr API 接口地址，V1 */
export const API_V1 = "https://api.vultr.com/v1/server/create";

/** vultr API 接口地址，V2 */
export const API_V2 = "https://api.vultr.com/v2/instances";

/** 服务器位置。`"25"` 为东京。 */
export const DCID = "25";

/** 系统。`"164"` 为自定义镜像。 */
export const OSID = "164";

/** 付费方案。`"201"` 为每月 5 美元的 1 核 1GB 实例 */
export const VPSPLANID = "201";

/** snapshot。**需要自行创建一个 snapshot**
 * 
 * 通过下面命令查看 snapshot id：
 * 
 * ```shell
 * curl --location --request GET 'https://api.vultr.com/v2/snapshots' \
 * --header 'Authorization: Bearer {api-key}' 
 * ```
 */
export const SNAPSHOTID = "9b85f9b81e032";
