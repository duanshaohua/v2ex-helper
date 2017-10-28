# V2EX HELPER

## Usage

1. 下载最新的 `v2ex-helper.crx` 文件（[下载点这里](https://github.com/hanzichi/v2ex-helper/releases)）
2. 打开 chrome 浏览器，地址栏输入 `chrome://extensions/`
3. 将下载的 `v2ex-helper.crx` 文件拖入打开的页面即可进行安装

## Edge Version's Usage

1. `git clone git@github.com:hanzichi/v2ex-helper.git`
2. 打开 chrome 浏览器，地址栏输入 `chrome://extensions/`
3. 勾选上「开发者模式」选项（右上角）
4. 点击「加载已解压的扩展程序」（左上角），选择第一步下载的文件夹进行导入

## ChangeLog

- 2017-08-13 [通知页面](https://www.v2ex.com/notifications) 点击「查看」可跳转到该回复具体楼层
- 2017-08-18 增加主题帖中图片点击放大功能
- 2017-10-18 增加发主题帖添加图片功能（微博图床，需登录微博）
- 2017-10-24 主题帖回复中增加对话详情功能
- 2017-10-27 自动签到
- 2017-10-27 新增设置（选项）页
- 2017-10-28 新增消息提醒
## Todo

- feature
  - 回复图床

- code 
  - 代码依赖关系处理（background 以及 content 部分的 js，都可以用 webpack 进行依赖打包）
  - 各种 js 功能梳理 