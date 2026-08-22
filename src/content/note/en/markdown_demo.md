---
title: Markdown Guide and Demo
timestamp: 2025-11-22 18:57:15+08:00
tags: [Markdown]
description: A practical guide to the Markdown syntax and theme extensions supported by this site
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
## How to use this guide

This guide moves from basic syntax to theme extensions. Each feature shows copyable Markdown first, followed by its rendered result.

Astro processes Markdown with [remark](https://github.com/remarkjs/remark). This site configures additional remark and rehype plugins in `astro.config.ts`; their roles are summarized under [Theme extensions](#theme-extensions).

## Basic syntax

Markdown is a lightweight and easy-to-use syntax for styling your writing.

### Headings

When there is a lot of content in an article, you can use headings to divide it:

```markdown
# H1

## H2

### H3

#### H4

##### H5

###### H6
```

Rendering all six headings here would disrupt the article hierarchy, so this example is shown only as source.

### Emphasis

```markdown
*Italic Text*

**Bold text**

***Italic bold text***
```

Preview:

*Italic Text*

**Bold text**

***Italic bold text***

### Links

```markdown
Text link [Link name](https://feli77.com)
```

Preview:

Text link [Link name](https://feli77.com)

### Inline code

```markdown
This contains `inline code`.
```

Preview:

This contains `inline code`.

### Code blocks and highlighting

Preview: 

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


This site uses Shiki for syntax highlighting. See [Shiki / Languages](https://shiki.matsu.io/languages.html) for the supported languages.

### Inline math

```latex
This is inline math: $e^{i\pi} + 1 = 0$
```

Preview:

This is inline math: $e^{i\pi} + 1 = 0$

### Display math

```latex
$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} \, dx
$$
```

Preview:

$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} \, dx
$$

This site renders mathematics with KaTeX. See [KaTeX Supported Functions](https://katex.org/docs/supported.html) for the supported syntax.

### Images

```markdown
![Pink Floyd](https://www.helloimg.com/i/2025/11/22/69219d393cdb1.jpg)
```

Preview:

![](https://www.helloimg.com/i/2025/11/22/69219d393cdb1.jpg)

### Strikethrough

```markdown
~~Strikethrough~~
```

Preview:

~~Strikethrough~~

### Horizontal rules

Start a horizontal rule on its own line with three hyphens `---` or asterisks `***`. Leave a blank line before and after it when surrounded by paragraphs:

```markdown
---
```

Preview:

* * *

### Lists

Bulleted list

```markdown
*   Psychedelic rock
*   Punk
*   Metal
    *   Heavy Metal
    *   Death Metal
```

Preview:

*   Psychedelic rock
*   Punk
*   Metal
    *   Heavy Metal
    *   Death Metal

Plain ordered list

```markdown
1. The Dark Side of the Moon
    1. Time
    2. Money
2. The Wall
3. Wish You Were Here
```

Preview:

1.  The Dark Side of the Moon
    1.  Time
    2.  Money
2.  The Wall
3.  Wish You Were Here

Other Markdown syntax can be nested inside list items.

### Footnotes

```markdown
Use [^1] to add a footnote at the point of reference.

Then add the footnote definition later in the document; it is rendered at the end of the article.

[^1]: Footnotes **can contain Markdown**.

Inline footnotes are also supported^[This is an inline footnote].

```

Preview:

Use [^1] to add a footnote at the point of reference.

Then add the footnote definition later in the document; it is rendered at the end of the article.

[^1]: Footnotes **can contain Markdown**.

Inline footnotes are also supported^[This is an inline footnote].

### Task lists

```markdown
- [ ] Unfinished tasks
- [x] Completed tasks
```

Preview:

- [ ] Unfinished tasks
- [x] Completed tasks

### Blockquotes

```markdown
> No one told you when to run
> You missed the starting gun.
```

Preview:

> No one told you when to run
> You missed the starting gun.

Other Markdown syntax can also be nested inside blockquotes.

## Theme extensions

The following features are provided by plugins configured by the theme:

| Feature | Implementation |
| - | - |
| Insertion | [`remark-ins`](https://www.npmjs.com/package/remark-ins) |
| Marking | [`remark-flexible-markers`](https://www.npmjs.com/package/remark-flexible-markers) |
| Ruby | [`@tuyuritio/remark-ruby`](https://www.npmjs.com/package/@tuyuritio/remark-ruby) |
| Spoilers | [`@tuyuritio/remark-spoiler`](https://www.npmjs.com/package/@tuyuritio/remark-spoiler) |
| Emoji | [`remark-gemoji`](https://www.npmjs.com/package/remark-gemoji) |
| Mathematics | [`remark-math`](https://www.npmjs.com/package/remark-math) and [`rehype-katex`](https://www.npmjs.com/package/rehype-katex) |
| Footnotes | [`remark-footnotes-extra`](https://www.npmjs.com/package/remark-footnotes-extra) |
| Abbreviations | [`@tuyuritio/remark-abbreviation`](https://www.npmjs.com/package/@tuyuritio/remark-abbreviation) |
| GitHub Alerts | [`@tuyuritio/remark-github-alert`](https://www.npmjs.com/package/@tuyuritio/remark-github-alert) |
| Extended tables | [`remark-extended-table`](https://www.npmjs.com/package/remark-extended-table) |
| Element attributes | [`@tuyuritio/remark-attribute`](https://www.npmjs.com/package/@tuyuritio/remark-attribute) |

### Inserted text

```
++Insert Content++
```

Preview:

++Insert Content++

### Marked text

```
==Marked Content==
```

Preview:

==Marked Content==

### Ruby

```
{拼音}(pīn|yīn)
```

Preview:

{拼音}(pīn|yīn)

```
{振り仮名}(ふ||が|な)
```

Preview:

{振り仮名}(ふ||が|な)

### Spoilers

```
!!Spoiler content!!
```

Preview:

!!Spoiler content!!

### Abbreviations

Abbreviations expand only when a complete word is matched:

```markdown
ABBR abbr xABBRx

*[ABBR]: Abbreviation
```

Preview:

ABBR abbr xABBRx

*[ABBR]: Abbreviation

### GitHub Alerts

```markdown
> [!NOTE]
> Normal info
```

Preview:

> [!NOTE] 
> Normal information

Tip information can be nested multiple levels

```markdown
> [!TIP]
> Tip info
>
> > [!IMPORTANT]
> > Important Info
> >
> > > [!WARNING]
> > > Risk Info
> > >
> > > > [!CAUTION]
> > > > Caution Info
```

Preview:

> [!TIP]
> Tip info
>
> > [!IMPORTANT]
> > Important Info
> >
> > > [!WARNING]
> > > Risk Info
> > >
> > > > [!CAUTION]
> > > > Caution Info

You can also customize the title

```markdown
> [!NOTE] (･ρ･)ﾉ
> Custom title text
```

Preview:

> [!NOTE] (･ρ･)ﾉ
> Custom title text

### Extended tables

```markdown
| Left-aligned | Centered | Right-aligned | Centered |
|:- |:-:| -:| - |
| Normal cell | Merged cell || Merged column |
| Normal cell | 2×2 cell ||^|
| Normal cell | ^ || Normal cell |
```

Preview:

| Left-aligned | Centered | Right-aligned | Centered |
|:- |:-:| -:| - |
| Normal cell | Merged cell || Merged column |
| Normal cell | 2×2 cell ||^|
| Normal cell | ^ || Normal cell |

### Emoji

```markdown
:wink: :cry: :laughing: :yum:
```

Preview:

:wink: :cry: :laughing: :yum:

[Emoji Quick Reference](https://github.com/ikatyang/emoji-cheat-sheet?tab=readme-ov-file#table-of-contents)

### Element attributes {#element-attributes}

Headings can define custom anchors, while images and inline elements can receive sizes, class names, or arbitrary attributes:

```markdown
### Custom heading {#custom-id}
```

This section heading demonstrates the same feature with the `element-attributes` anchor.

```markdown
![The Wall](https://www.helloimg.com/i/2025/11/24/69246b46b2859.png){width=300}
```

Preview:

![The Wall](https://www.helloimg.com/i/2025/11/24/69246b46b2859.png){width=300}

```markdown
**Important**{.colorful} content
```

Preview:

**Important**{.colorful} content

```markdown
_Multiple_{.red .big} class names
```

Preview

*Multiple*{.red .big} class names

```markdown
**Custom attributes**{key="This is a value"}
```

Preview

**Custom attributes**{key="This is a value"}
