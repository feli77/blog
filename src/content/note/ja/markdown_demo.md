---
title: Markdown ガイドとデモ
timestamp: 2025-11-22 18:57:15+08:00
tags: [Markdown]
description: このサイトが対応する Markdown の基本構文とテーマ拡張を実例で紹介します
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

## 基本

Markdown は、文章にスタイルを付けるための軽量で使いやすい記法です。

### 見出し

記事の内容が多いときは、見出しを使って区切ることができます：

```markdown
# レベル 1 の見出し

## レベル 2 の見出し

### レベル 3 の見出し

#### レベル 4 の見出し

##### レベル 5 の見出し

###### レベル 6 の見出し
```

見出しのプレビューは記事の構造を崩すため、ここでは表示しません。

### 強調

```markdown
_斜体テキスト_

**太字テキスト**

**_太字斜体テキスト_**
```

プレビュー：

*斜体テキスト*

**太字テキスト**

***太字斜体テキスト***

### リンク

```markdown
テキストリンク [リンク名](https://feli77.com)
```

プレビュー：

テキストリンク [リンク名](https://feli77.com)

### インラインコード

```markdown
これは `1 行のコード` です
```

プレビュー：

これは `インラインコード` です

### コードブロックとハイライト

プレビュー：

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

現在はコードのシンタックスハイライトに Shiki を使用しています。対応言語については [Shiki / Languages](https://shiki.matsu.io/languages.html) を参照してください。

### インライン数式

```latex
これはインライン数式です $e^{i\pi} + 1 = 0$
```

プレビュー：

これはインライン数式です $e^{i\pi} + 1 = 0$

### 数式ブロック

```latex
$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} \, dx
$$
```

プレビュー：

$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} \, dx
$$

現在は数式の表示に KaTeX を使用しています。対応構文については [KaTeX Supported Functions](https://katex.org/docs/supported.html) を参照してください。

### 画像

```markdown
![Pink Floyd](https://www.helloimg.com/i/2025/11/22/69219d393cdb1.jpg)
```

プレビュー：

![](https://www.helloimg.com/i/2025/11/22/69219d393cdb1.jpg)

### 取り消し線

```markdown
~~取り消し線~~
```

プレビュー：

~~取り消し線~~

### 区切り線

区切り線を使う場合は、新しい行にハイフンを 3 つ `---`、またはアスタリスクを 3 つ `***` 入力します。前後に段落があるときは、空行を入れてください：

```markdown
---
```

プレビュー：

***

### リスト

通常の箇条書きリスト

```markdown
- サイケデリック・ロック
- パンク
- メタル
    - ヘヴィメタル
    - デスメタル
```

プレビュー：

- サイケデリック・ロック
- パンク
- メタル

  - ヘヴィメタル
  - デスメタル

通常の番号付きリスト

```markdown
1. The Dark Side of the Moon
    1. Time
    2. Money
2. The Wall
3. Wish You Were Here
```

プレビュー：

1. The Dark Side of the Moon

   1. Time
   2. Money

2. The Wall
3. Wish You Were Here

リストの中にほかの構文を入れ子にすることもできます。

### 脚注

```markdown
参照する場所で [^注釈] を使って脚注を追加します。

続いて文書内に脚注の定義を追加します。脚注は記事の末尾にレンダリングされます。

[^注釈]: 脚注には **Markdown も使用できます**。

インライン脚注も使用できます^[ここにインライン脚注の内容を書きます]
```

プレビュー：

参照する場所で [^1] を使って脚注を追加します。

続いて文書内に脚注の定義を追加します。脚注は記事の末尾にレンダリングされます。

[^1]: 脚注には **Markdown も使用できます**。

インライン脚注も使用できます^[ここにインライン脚注の内容を書きます]

### タスクリスト

```markdown
- [ ] 未完了のタスク
- [x] 完了したタスク
```

プレビュー：

- [ ] 未完了のタスク
- [x] 完了したタスク

### 引用ブロック

```markdown
> No one told you when to run
> You missed the starting gun.
```

プレビュー：

> No one told you when to run
> You missed the starting gun.

引用の中にほかの構文を入れ子にすることもできます。

## 拡張

以下の機能は、テーマに設定されたプラグインによって提供されます：

| 機能 | 実装 |
| - | - |
| 挿入 | [`remark-ins`](https://www.npmjs.com/package/remark-ins) |
| マーカー | [`remark-flexible-markers`](https://www.npmjs.com/package/remark-flexible-markers) |
| Ruby | [`@tuyuritio/remark-ruby`](https://www.npmjs.com/package/@tuyuritio/remark-ruby) |
| マスク | [`@tuyuritio/remark-spoiler`](https://www.npmjs.com/package/@tuyuritio/remark-spoiler) |
| Emoji | [`remark-gemoji`](https://www.npmjs.com/package/remark-gemoji) |
| 数式 | [`remark-math`](https://www.npmjs.com/package/remark-math) と [`rehype-katex`](https://www.npmjs.com/package/rehype-katex) |
| 脚注 | [`remark-footnotes-extra`](https://www.npmjs.com/package/remark-footnotes-extra) |
| 略語 | [`@tuyuritio/remark-abbreviation`](https://www.npmjs.com/package/@tuyuritio/remark-abbreviation) |
| GitHub Alert | [`@tuyuritio/remark-github-alert`](https://www.npmjs.com/package/@tuyuritio/remark-github-alert) |
| 拡張テーブル | [`remark-extended-table`](https://www.npmjs.com/package/remark-extended-table) |
| 要素属性 | [`@tuyuritio/remark-attribute`](https://www.npmjs.com/package/@tuyuritio/remark-attribute) |

### 挿入

```
++挿入する内容++
```

プレビュー：

++挿入する内容++

### マーカー

```
==マークする内容==
```

プレビュー：

==マークする内容==

### Ruby

```
{拼音}(pīn|yīn)
```

プレビュー：

{拼音}(pīn|yīn)

```
{振り仮名}(ふ||が|な)
```

プレビュー：

{振り仮名}(ふ||が|な)

### マスク

```
!!隠す内容!!
```

プレビュー：

!!隠す内容!!

### 略語

略語は単語全体が一致した場合にのみ展開されます：

```markdown
ABBR abbr xABBRx

*[ABBR]: Abbreviation
```

プレビュー：

ABBR abbr xABBRx

*[ABBR]: Abbreviation

### GitHub Alert

```markdown
> [!NOTE]
> 通常の情報
```

プレビュー：

> [!NOTE]
> 通常の情報

アラートは複数階層に入れ子にできます。

```markdown
> [!TIP]
> ヒント
>
> > [!IMPORTANT]
> > 重要な情報
> >
> > > [!WARNING]
> > > リスク情報
> > >
> > > > [!CAUTION]
> > > > 注意事項
```

プレビュー：

> [!TIP]
> ヒント
>
> > [!IMPORTANT]
> > 重要な情報
> >
> > > [!WARNING]
> > > リスク情報
> > >
> > > > [!CAUTION]
> > > > 注意事項

タイトルをカスタマイズすることもできます。

```markdown
> [!NOTE] (･ρ･)ﾉ
> カスタムタイトル
```

プレビュー：

> [!NOTE] (･ρ･)ﾉ
> カスタムタイトル

### 拡張テーブル

```markdown
| 左揃え | 中央揃え | 右揃え | 中央揃え |
|:- |:-:| -:| - |
| 通常のセル | 結合セル || 列を結合 |
| 通常のセル | 2×2 セル ||^|
| 通常のセル | ^ || 通常のセル |
```

プレビュー：

| 左揃え | 中央揃え | 右揃え | 中央揃え |
|:- |:-:| -:| - |
| 通常のセル | 結合セル || 列を結合 |
| 通常のセル | 2×2 セル ||^|
| 通常のセル | ^ || 通常のセル |

### Emoji

```markdown
:wink: :cry: :laughing: :yum:
```

プレビュー：

:wink: :cry: :laughing: :yum:

[Emoji クイックリファレンス](https://github.com/ikatyang/emoji-cheat-sheet?tab=readme-ov-file#table-of-contents)

### 要素属性 {#element-attributes}

見出しには任意のアンカーを設定でき、画像やインライン要素にはサイズ、クラス名、任意の属性を追加できます：

```markdown
### カスタム見出し {#custom-id}
```

この節の見出し自体が、`element-attributes` アンカーを使った例です。

```markdown
![The Wall](https://www.helloimg.com/i/2025/11/24/69246b46b2859.png){width=300}
```

プレビュー：

![The Wall](https://www.helloimg.com/i/2025/11/24/69246b46b2859.png){width=300}

```markdown
**重要**{.colorful}な内容
```

プレビュー：

**重要**{.colorful}な内容

```markdown
_複数の_{.red .big}クラス名
```

プレビュー：

*複数の*{.red .big}クラス名

```markdown
**カスタム属性**{key="This is a value"}
```

プレビュー：

**カスタム属性**{key="This is a value"}
