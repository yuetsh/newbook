import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-Hans-CN",
  title: "徐越的编程书",
  markdown: {
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    ["link", { rel: "stylesheet", href: "/style.css" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    externalLinkIcon: true,
    nav: [
      { text: "首页", link: "/" },
      { text: "基础知识", link: "/python/00/index.md" },
      { text: "办公自动化", link: "/oa/index.md" },
      { text: "网络爬虫", link: "/crawler/index.md" },
      { text: "计算机科学", link: "/cs/00/index.md" },
    ],
    sidebar: {
      "/python": [
        {
          text: "课程须知",
          items: [
            { text: "代码区", link: "/python/00/index.md" },
            { text: "自测猫", link: "/python/00/cat.md" },
            { text: "练习册", link: "/python/00/playground.md" },
            { text: "判题狗", link: "/python/00/dog.md" },
          ],
        },
        {
          text: "第一天",
          items: [{ text: "", link: "" }],
        },
        {
          text: "第二天",
          items: [{ text: "", link: "" }],
        },
        {
          text: "第三天",
          items: [{ text: "", link: "" }],
        },
        {
          text: "第四天",
          items: [{ text: "", link: "" }],
        },
        {
          text: "第五天",
          items: [{ text: "", link: "" }],
        },
        {
          text: "第六天",
          items: [{ text: "", link: "" }],
        },
        {
          text: "第七天",
          items: [{ text: "", link: "" }],
        },
      ],
      "/oa": [{}],
      "/crawler": [{}],
      "/cs": [
        { text: "简介", link: "/cs/00/index.md" },
        { text: "计算机早期历史", link: "/cs/01/index.md" },
        { text: "电子计算机", link: "/cs/02/index.md" },
        { text: "布尔逻辑和逻辑门", link: "/cs/03/index.md" },
        { text: "二进制", link: "/cs/04/index.md" },
        { text: "算术逻辑单元", link: "/cs/05/index.md" },
        { text: "寄存器和内存", link: "/cs/06/index.md" },
        { text: "中央处理器", link: "/cs/07/index.md" },
        { text: "指令和程序", link: "/cs/08/index.md" },
        { text: "高级 CPU 设计", link: "/cs/09/index.md" },
        { text: "早期的编程方式", link: "/cs/10/index.md" },
        { text: "编程语言发展史", link: "/cs/11/index.md" },
        { text: "编程原理 - 语句和函数", link: "/cs/12/index.md" },
        { text: "算法入门", link: "/cs/13/index.md" },
        { text: "......", link: "/cs/14/index.md" },
      ],
    },
    outlineTitle: "目录",
    sidebarMenuLabel: "侧边栏",
    returnToTopLabel: "返回顶部",
    darkModeSwitchLabel: "浅色/深色",

    docFooter: { prev: "上一篇", next: "下一篇" },
  },
})
