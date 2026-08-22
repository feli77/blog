---
title: Markdown 使用指南
timestamp: 2025-11-22 18:57:15+08:00
tags: [Markdown]
description: 從基礎語法到主題擴充，展示本站支援的 Markdown 寫法及渲染效果
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

## 使用說明

本文按照「基礎語法 → 主題擴充」的順序介紹本站支援的 Markdown 功能。每項功能會先提供可複製的寫法，再展示實際渲染效果。

Astro 使用 [remark](https://github.com/remarkjs/remark) 處理 Markdown；本站在 `astro.config.ts` 中設定了額外的 remark 與 rehype 外掛。各項擴充語法所對應的外掛會集中列在[主題擴充](#主題擴充)一節。

## 基礎語法

Markdown 是一種輕量且容易使用的語法，可用來為文章設定樣式。

### 標題

文章內容較多時，可以用標題分段：

```markdown
# 一級標題

## 二級標題

### 三級標題

#### 四級標題

##### 五級標題

###### 六級標題
```

標題預覽會打亂文章結構，因此不在此展示。

### 強調

```markdown
_斜體文字_

**粗體文字**

**_粗斜體文字_**
```

預覽：

*斜體文字*

**粗體文字**

***粗斜體文字***

### 連結

```markdown
文字連結 [連結名稱](https://feli77.com)
```

預覽：

文字連結 [連結名稱](https://feli77.com)

### 行內程式碼

```markdown
這是一段 `單行程式碼`
```

預覽：

這是一段 `行內程式碼`

### 程式碼區塊與醒目提示

預覽：

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

目前使用 Shiki 作為程式碼醒目提示外掛，支援的語言請參考 [Shiki / Languages](https://shiki.matsu.io/languages.html)。

### 行內公式

```latex
這是一條行內公式 $e^{i\pi} + 1 = 0$
```

預覽：

這是一條行內公式 $e^{i\pi} + 1 = 0$

### 公式區塊

```latex
$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} \, dx
$$
```

預覽：

$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} \, dx
$$

目前使用 KaTeX 作為數學公式外掛，支援的語法請參考 [KaTeX Supported Functions](https://katex.org/docs/supported.html)。

### 圖片

```markdown
![Pink Floyd](https://www.helloimg.com/i/2025/11/22/69219d393cdb1.jpg)
```

預覽：

![](https://www.helloimg.com/i/2025/11/22/69219d393cdb1.jpg)

### 刪除線

```markdown
~~刪除線~~
```

預覽：

~~刪除線~~

### 分隔線

如果你習慣使用分隔線，可以另起一行輸入三個連字號 `---` 或星號 `***`。前後都有段落時，請保留一行空白：

```markdown
---
```

預覽：

***

### 清單

一般無序清單

```markdown
- 迷幻搖滾
- 龐克
- 金屬
    - 重金屬
    - 死亡金屬
```

預覽：

- 迷幻搖滾
- 龐克
- 金屬

  - 重金屬
  - 死亡金屬

一般有序清單

```markdown
1. The Dark Side of the Moon
    1. Time
    2. Money
2. The Wall
3. Wish You Were Here
```

預覽：

1. The Dark Side of the Moon

   1. Time
   2. Money

2. The Wall
3. Wish You Were Here

清單中也可以繼續巢狀使用其他語法。

### 腳註

```markdown
在引用處使用 [^腳註] 加入腳註。

接著在文件中加入腳註定義（預設會在文章結尾渲染）。

[^腳註]: 腳註中**也可以使用 Markdown**。

也可以使用行內腳註^[這裡是行內腳註內容]
```

預覽：

在引用處使用 [^1] 加入腳註。

接著在文件中加入腳註定義（預設會在文章結尾渲染）。

[^1]: 腳註中**也可以使用 Markdown**。

也可以使用行內腳註^[這裡是行內腳註內容]

### 工作清單

```markdown
- [ ] 尚未完成的工作
- [x] 已完成的工作
```

預覽：

- [ ] 尚未完成的工作
- [x] 已完成的工作

### 引用區塊

```markdown
> No one told you when to run
> You missed the starting gun.
```

預覽：

> No one told you when to run
> You missed the starting gun.

引用中也可以繼續巢狀使用其他語法。

## 主題擴充

以下功能由主題設定的外掛提供：

| 功能 | 實作 |
| - | - |
| 插入 | [`remark-ins`](https://www.npmjs.com/package/remark-ins) |
| 標記 | [`remark-flexible-markers`](https://www.npmjs.com/package/remark-flexible-markers) |
| Ruby | [`@tuyuritio/remark-ruby`](https://www.npmjs.com/package/@tuyuritio/remark-ruby) |
| 遮罩 | [`@tuyuritio/remark-spoiler`](https://www.npmjs.com/package/@tuyuritio/remark-spoiler) |
| Emoji | [`remark-gemoji`](https://www.npmjs.com/package/remark-gemoji) |
| 數學公式 | [`remark-math`](https://www.npmjs.com/package/remark-math) 與 [`rehype-katex`](https://www.npmjs.com/package/rehype-katex) |
| 腳註 | [`remark-footnotes-extra`](https://www.npmjs.com/package/remark-footnotes-extra) |
| 縮寫 | [`@tuyuritio/remark-abbreviation`](https://www.npmjs.com/package/@tuyuritio/remark-abbreviation) |
| GitHub Alert | [`@tuyuritio/remark-github-alert`](https://www.npmjs.com/package/@tuyuritio/remark-github-alert) |
| 增強表格 | [`remark-extended-table`](https://www.npmjs.com/package/remark-extended-table) |
| 元素屬性 | [`@tuyuritio/remark-attribute`](https://www.npmjs.com/package/@tuyuritio/remark-attribute) |

### 插入

```
++插入內容++
```

預覽：

++插入內容++

### 標記

```
==標記內容==
```

預覽：

==標記內容==

### Ruby

```
{拼音}(pīn|yīn)
```

預覽：

{拼音}(pīn|yīn)

```
{振り仮名}(ふ||が|な)
```

預覽：

{振り仮名}(ふ||が|な)

### 遮罩

```
!!遮罩內容!!
```

預覽：

!!遮罩內容!!

### 縮寫

縮寫只會在完整單字相符時展開：

```markdown
ABBR abbr xABBRx

*[ABBR]: Abbreviation
```

預覽：

ABBR abbr xABBRx

*[ABBR]: Abbreviation

### GitHub Alert

```markdown
> [!NOTE]
> 一般資訊
```

預覽：

> [!NOTE]
> 一般資訊

提示資訊可以多層巢狀使用。

```markdown
> [!TIP]
> 提示資訊
>
> > [!IMPORTANT]
> > 重要資訊
> >
> > > [!WARNING]
> > > 風險資訊
> > >
> > > > [!CAUTION]
> > > > 警告資訊
```

預覽：

> [!TIP]
> 提示資訊
>
> > [!IMPORTANT]
> > 重要資訊
> >
> > > [!WARNING]
> > > 風險資訊
> > >
> > > > [!CAUTION]
> > > > 警告資訊

也可以自訂標題。

```markdown
> [!NOTE] (･ρ･)ﾉ
> 自訂標題文字
```

預覽：

> [!NOTE] (･ρ･)ﾉ
> 自訂標題文字

### 增強表格

```markdown
| 靠左對齊 | 置中 | 靠右對齊 | 置中 |
|:- |:-:| -:| - |
| 一般儲存格 | 合併儲存格 || 合併欄 |
| 一般儲存格 | 2×2 儲存格 ||^|
| 一般儲存格 | ^ || 一般儲存格 |
```

預覽：

| 靠左對齊 | 置中 | 靠右對齊 | 置中 |
|:- |:-:| -:| - |
| 一般儲存格 | 合併儲存格 || 合併欄 |
| 一般儲存格 | 2×2 儲存格 ||^|
| 一般儲存格 | ^ || 一般儲存格 |

### Emoji

```markdown
:wink: :cry: :laughing: :yum:
```

預覽：

:wink: :cry: :laughing: :yum:

[Emoji 快速參考表](https://github.com/ikatyang/emoji-cheat-sheet?tab=readme-ov-file#table-of-contents)

### 元素屬性 {#element-attributes}

標題可以設定自訂錨點；圖片、強調等行內元素可以加入尺寸、類別名稱或任意屬性：

```markdown
### 自訂標題 {#custom-id}
```

本小節標題本身就使用了自訂錨點 `element-attributes`。

```markdown
![The Wall](https://www.helloimg.com/i/2025/11/24/69246b46b2859.png){width=300}
```

預覽：

![The Wall](https://www.helloimg.com/i/2025/11/24/69246b46b2859.png){width=300}

```markdown
**重要**{.colorful}內容
```

預覽：

**重要**{.colorful}內容

```markdown
_多個_{.red .big}類別名稱
```

預覽：

*多個*{.red .big}類別名稱

```markdown
**自訂屬性**{key="This is a value"}
```

預覽：

**自訂屬性**{key="This is a value"}
