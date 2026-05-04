# 我们的甜蜜相册

这是一个可以直接部署到 GitHub Pages 的静态相册网站，用来我和莎莎的照片。

> 提醒：发布到 GitHub Pages 后，拥有链接的人可能可以访问页面。`robots.txt` 已默认请求搜索引擎不要索引，但它不是访问控制。

## 怎么换成自己的照片

1. 把照片放到 `assets/photos/` 目录。
2. 打开 `script.js`。
3. 把每一项的 `src` 改成类似 `assets/photos/date-night.jpg` 的路径。
4. 修改 `title` 和 `text`，写上照片标题和想说的话。

## GitHub Pages 部署

1. 推送到 GitHub 仓库。
2. 打开仓库的 `Settings`。
3. 进入 `Pages`。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`。

保存后，GitHub 会生成一个可访问的网站地址。
