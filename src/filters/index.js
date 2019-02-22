import cfg from '@/api/env.conf'
const assetsRoot = cfg.assetsRoot

// 补全图片路径
export const patchImgHttp = (url) => `${assetsRoot}/${url}`
