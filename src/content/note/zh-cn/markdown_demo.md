---
title: Markdown 使用指南
timestamp: 2025-11-22 18:57:15+08:00
tags: [Markdown]
description: 从基础语法到主题扩展，展示本站支持的 Markdown 写法及渲染效果
toc: true
draft: false
---


<style>
.red {
  color: #ef4444;
  font-weight: 600;
}

.big {
  font-size: 1.25em;
  font-weight: bold;
}
.colorful {

  font-weight: bold;
  background: linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: rainbow 3s linear infinite;
}

@keyframes rainbow {
  0% {
    background-position: 0 center;
  }
  100% {
    background-position: 200% center;
  }
}
</style>


## 使用说明

本文按照“基础语法 → 主题扩展”的顺序介绍本站支持的 Markdown 功能。每项功能先给出可复制的写法，再展示实际渲染效果。

Astro 使用 [remark](https://github.com/remarkjs/remark) 处理 Markdown；本站在 `astro.config.ts` 中配置了额外的 remark 与 rehype 插件。扩展语法所对应的插件会集中列在[主题扩展](#主题扩展)一节。

## 基础语法

Markdown 是一种轻量级且易于使用的语法，用于为您的写作设计风格。

### 标题

文章内容较多时，可以用标题分段：

```markdown
# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题
```

标题预览会打乱文章的结构，所以在此不展示。

### 强调

```markdown
_斜体文本_

**粗体文本**

**_粗斜体文本_**
```

预览：

*斜体文本*

**粗体文本**

***粗斜体文本*** 

### 链接

```markdown
文字链接 [链接名称](http://链接网址)
```

预览：

文字链接 [链接名称](http://%E9%93%BE%E6%8E%A5%E7%BD%91%E5%9D%80)

### 行内代码

```markdown
这是一条 `单行代码`
```

预览：

这是一条 `行内代码`

### 代码块与高亮

预览：

```cpp
inline int read()
{
	int fe = 0, li = 1;
	for (char x = getchar(); x < '0' || x > '9'; x = getchar())
	    if (x == '-') li = -1;
	for (; x >= '0' && x <= '9'; x = getchar()) 
	    fe = fe * 10 + x - '0';
	return fe * li;
}
```

当前使用 shiki 作为代码高亮插件，支持的语言请参考 [shiki / languages](https://shiki.matsu.io/languages.html)。

### 行内公式

```latex
这是一条行内公式 $e^{i\pi} + 1 = 0$
```

预览：

这是一条行内公式 $e^{i\pi} + 1 = 0$

### 公式块

```latex
$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} \, dx
$$
```

预览：

$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} \, dx
$$

当前使用 KaTeX 作为数学公式插件，支持的语法请参考 [KaTeX Supported Functions](https://katex.org/docs/supported.html)。



### 图片

```markdown
![Pink Floyd](https://www.helloimg.com/i/2025/11/22/69219d393cdb1.jpg)
```

预览：

![](https://www.helloimg.com/i/2025/11/22/69219d393cdb1.jpg)

### 删除线

```markdown
~~删除线~~
```

预览：

~~删除线~~

### 分隔符

如果你有写分割线的习惯，可以新起一行输入三个减号`---` 或者星号 `***`。当前后都有段落时，请空出一行：

```markdown
---
```

预览：

***

### 列表

普通无序列表

```markdown
- 迷幻摇滚
- 朋克
- 金属
    - 重金属
    - 死亡金属
```

预览：

- 迷幻摇滚
- 朋克
- 金属

  - 重金属
  - 死亡金属


普通有序列表

```markdown
1. The Dark Side of the Moon
    1. Time
    2. Money
2. The Wall
3. Wish You Were Here
```

预览：

1. The Dark Side of the Moon

   1. Time
   2. Money

2. The Wall
3. Wish You Were Here

列表里可以继续嵌套语法

### 脚注

```markdown
在引用的地方使用 [^脚标] 来添加脚注。

然后在文档的结尾添加脚注内容（默认会在文章结尾渲染）。

[^脚标]: 这里是脚注内容，**也可以包含 Markdown**。

也可以使用行内脚注^[这里是行内脚注的内容]
```

预览：

在引用的地方使用 [^1] 来添加脚注。

然后在文档的结尾添加脚注内容（默认会在文章结尾渲染）。

[^1]: 这里是脚注内容，**也可以包含 Markdown**。

也可以使用行内脚注^[这里是行内脚注的内容]

### 任务列表

```markdown
- [ ] 未完成的任务
- [x] 已完成的任务
```

预览：

- [ ] 未完成的任务
- [x] 已完成的任务

### 引用块

```markdown
> No one told you when to run
> You missed the starting gun.
```

预览：

> No one told you when to run 
> You missed the starting gun.

引用里也可以继续嵌套语法。

## 主题扩展

以下功能由主题配置的插件提供：

| 功能 | 实现 |
| - | - |
| 插入 | [`remark-ins`](https://www.npmjs.com/package/remark-ins) |
| 标记 | [`remark-flexible-markers`](https://www.npmjs.com/package/remark-flexible-markers) |
| Ruby | [`@tuyuritio/remark-ruby`](https://www.npmjs.com/package/@tuyuritio/remark-ruby) |
| 遮罩 | [`@tuyuritio/remark-spoiler`](https://www.npmjs.com/package/@tuyuritio/remark-spoiler) |
| Emoji | [`remark-gemoji`](https://www.npmjs.com/package/remark-gemoji) |
| 数学公式 | [`remark-math`](https://www.npmjs.com/package/remark-math) 与 [`rehype-katex`](https://www.npmjs.com/package/rehype-katex) |
| 脚注 | [`remark-footnotes-extra`](https://www.npmjs.com/package/remark-footnotes-extra) |
| 缩写 | [`@tuyuritio/remark-abbreviation`](https://www.npmjs.com/package/@tuyuritio/remark-abbreviation) |
| GitHub Alert | [`@tuyuritio/remark-github-alert`](https://www.npmjs.com/package/@tuyuritio/remark-github-alert) |
| 增强表格 | [`remark-extended-table`](https://www.npmjs.com/package/remark-extended-table) |
| 元素属性 | [`@tuyuritio/remark-attribute`](https://www.npmjs.com/package/@tuyuritio/remark-attribute) |

### 插入

```
++插入内容++
```

预览：

++插入内容++

### 标记

```
==标记内容==
```

预览：

==标记内容==

### Ruby

```
{拼音}(pīn|yīn)
```

预览：

{拼音}(pīn|yīn)

```
{振り仮名}(ふ||が|な)
```

预览：

{振り仮名}(ふ||が|な)

### 遮罩

```
!!遮罩内容!!
```

预览：

!!遮罩内容!!

### 缩写

缩写只会在完整单词匹配时展开：

```markdown
ABBR abbr xABBRx

*[ABBR]: Abbreviation
```

预览：

ABBR abbr xABBRx

*[ABBR]: Abbreviation

### GitHub Alert

```markdown
> [!NOTE]
> 普通信息
```
预览：

> [!NOTE]
> 普通信息

提示信息可以多层嵌套

```markdown
> [!TIP]
> 提示信息
>
> > [!IMPORTANT]
> > 重要信息
> >
> > > [!WARNING]
> > > 风险信息
> > >
> > > > [!CAUTION]
> > > > 警告信息
```

预览：

> [!TIP]
> 提示信息
>
> > [!IMPORTANT]
> > 重要信息
> >
> > > [!WARNING]
> > > 风险信息
> > >
> > > > [!CAUTION]
> > > > 警告信息

也可以自定义标题

```markdown
> [!NOTE] (･ρ･)ﾉ
> 自定义标题文字
```

预览：

> [!NOTE] (･ρ･)ﾉ
> 自定义标题文字

### 增强表格

```markdown
| 左对齐 | 居中 | 右对齐 | 居中 |
|:- |:-:| -:| - |
| 普通单元格 | 合并单元格 || 合并列 |
| 普通单元格 | 2×2 单元格 ||^|
| 普通单元格 | ^ || 普通单元格 |
```

预览：

| 左对齐 | 居中 | 右对齐 | 居中 |
|:- |:-:| -:| - |
| 普通单元格 | 合并单元格 || 合并列 |
| 普通单元格 | 2×2 单元格 ||^|
| 普通单元格 | ^ || 普通单元格 |

### Emoji

```markdown
:wink: :cry: :laughing: :yum:
```

预览：

:wink: :cry: :laughing: :yum:

[Emoji 速查表](https://github.com/ikatyang/emoji-cheat-sheet?tab=readme-ov-file#table-of-contents)

### 元素属性 {#element-attributes}

标题可以设置自定义锚点；图片、强调等行内元素可以添加尺寸、类名或任意属性：

```markdown
### 自定义标题 {#custom-id}
```

本小节标题本身就使用了自定义锚点 `element-attributes`。

```markdown
![The Wall](https://www.helloimg.com/i/2025/11/24/69246b46b2859.png){width=300}
```

预览：

![The Wall](https://www.helloimg.com/i/2025/11/24/69246b46b2859.png){width=300}

```markdown
**重要**{.colorful}内容
```

预览：

**重要**{.colorful}内容

```markdown
_多个_{.red .big}类名
```

预览

*多个*{.red .big}类名

```markdown
**自定义属性**{key="This is a value"}
```

预览

**自定义属性**{key="This is a value"}
