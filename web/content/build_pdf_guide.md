---
title: "PDFビルドガイド"
updated: "2025-08-06"
---

# PDF化/配布手順（ドラフト）

目的: 本パッケージ（Markdown一式）を単一の印刷用PDFとして安定生成し、配布/保管するための実務手順を定義する。

---

## 1. 構成・順序

PDF化の結合順は「00_index.md 内の配布推奨順」に準拠。

順序
1) 10_case_overview.md  
2) 20_school_information_sheet.md  
3) 21_parent_information_sheet.md  
4) work_assessment_record.md  
5) 40_case_meeting_minutes.md  
6) 50_regional_assessment_sheet.md  
7) facilitator_script.md（進行役のみ。必要時別冊）  
8) participant_briefing.md（事前配布）  
9) reflection_sheet.md（当日配布）  
10) evaluation_improvement_format.md（主催者回収用）

注: 7〜10は利用目的に応じて「別冊PDF」として分割する運用も可。

---

## 2. 前提条件

- OS: macOS/Windows/Linux いずれも可
- ツール選択（推奨のいずれか）
  - Pandoc（高機能・安定）
  - md-to-pdf（Nodeベース、手軽）
  - Marp（スライド形式を併用する場合）

ここでは Pandoc を主例に記載。

---

## 3. Pandoc によるビルド

### 3.1 導入

- macOS (Homebrew)
  - `brew install pandoc`
- Windows
  - 公式サイトからインストーラ取得 https://pandoc.org/installing.html
- PDFエンジン
  - TeX系（推奨）: `brew install --cask mactex`（大容量）
  - もしくは wkhtmltopdf / WeasyPrint 等のHTML→PDFエンジンを利用（デザインの差あり）

### 3.2 メタデータ/テンプレート（任意）

- 表紙/ヘッダ/フッタ/フォント指定を行う場合、以下を用意
  - `meta.yaml`（タイトル、配布日、著者、機密区分など）
  - `template.tex`（LaTeXテンプレート。ページ番号、ヘッダ、フッタ、余白を制御）
- フォント
  - 日本語フォント例: Noto Sans CJK JP / Noto Serif CJK JP

### 3.3 推奨コマンド例（TeXエンジン）

ルート: 「模擬多機関連携会議用事例集（就労部会）/」

```
pandoc \
  10_case_overview.md \
  20_school_information_sheet.md \
  21_parent_information_sheet.md \
  work_assessment_record.md \
  40_case_meeting_minutes.md \
  50_regional_assessment_sheet.md \
  -s \
  --toc --toc-depth=2 \
  -V geometry:margin=20mm \
  -V mainfont="Noto Sans CJK JP" \
  -V monofont="Noto Sans Mono CJK JP" \
  -o ./dist/Case_Package_Main.pdf
```

- `--toc`: 目次付与（必要に応じてオフ）
- `-V geometry`: 余白設定（15–20mm推奨）
- `-V mainfont`: 日本語フォントを明示（環境に応じてインストール要）
- 出力先 `./dist` は事前に作成しておく

運営資料の別冊PDF例:
```
pandoc \
  facilitator_script.md \
  participant_briefing.md \
  reflection_sheet.md \
  evaluation_improvement_format.md \
  -s \
  -V geometry:margin=20mm \
  -V mainfont="Noto Sans CJK JP" \
  -o ./dist/Operations_Booklet.pdf
```

---

## 4. md-to-pdf によるビルド（代替）

### 4.1 導入
```
npm install -g md-to-pdf
```

### 4.2 コマンド例
```
md-to-pdf 10_case_overview.md \
  20_school_information_sheet.md \
  21_parent_information_sheet.md \
  work_assessment_record.md \
  40_case_meeting_minutes.md \
  50_regional_assessment_sheet.md \
  --out ./dist/Case_Package_Main.pdf
```

- CSSカスタムで余白・フォントを調整可能（`--config-file` で設定JSON指定）

---

## 5. 書式・デザイン指針

- 用紙: A4 縦
- 余白: 15–20mm
- 本文: 10.5–11pt
- 日本語フォント: Noto Sans/Serif CJK JP いずれかに統一
- ヘッダ/フッタ:
  - 左: 資料名（略称可）
  - 右: ページ番号
  - フッタ右下に「社内研修用 / Confidential（外部配布禁止）」等の透かし注記（任意）
- 表/図の折返しを確認。長表はページ内で見出し再掲を検討

---

## 6. 機密・匿名化の最終チェック

- 各ファイル先頭に「共通注記」ブロックあり
- 実在の個人名/施設名/URL/連絡先が残っていない
- 版情報（版・更新日）が更新済み
- 00_index.md からのリンクと順序が一致
- 別冊化の有無（運営資料）を決定

---

## 7. 成果物の配置・命名

- 出力先: `./dist/`
- 命名例:
  - `Case_Package_Main.pdf`（資料①〜⑤）
  - `Operations_Booklet.pdf`（運営資料）
  - バージョンを付与する場合: `Case_Package_Main_v1.0_2024-11-xx.pdf`

---

## 8. 保管・配布

- 保管: 社内共有ドライブ/ナレッジに配置し、閲覧権限を限定
- 配布: 参加者へは紙配布が基本。電子配布時はパスワード付与/印刷禁止設定を検討
- 破棄: 研修終了後のデータ取扱い方針を明記（復刻手順も併記）

---

## 9. トラブルシュート

- 日本語が豆腐/文字化け: フォントインストールと `-V mainfont` 指定を確認
- 目次リンク不整合: 見出し階層（H1/H2）の過不足を調整
- 表が途切れる: TeXテンプレのlongtableを利用、または表を分割
- 画像の滲み/崩れ: 高解像度素材（300dpi相当）に差替（画像自体は原則非使用）

---

## 10. 更新履歴

- v1.0（2025-09-05） 初版作成（開催翌営業日に整合）