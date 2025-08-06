---
title: "セッション決定ログ"
updated: "2025-08-06"
---

# セッションコンテキスト記録（模擬多機関連携会議・就労部会）

目的: これまでの対話内容・意思決定・成果物・今後の指針をMarkdownで記録し、将来の参照とGitHub管理を容易にする。

作成日: 2025-08-06  
最終更新: 2025-08-06  
作成者: Roo（支援AI）

---

## 1. 背景と目的

- ユニバーサル就労班の年間計画に基づき、「（模擬）多機関連携会議（就労選択支援）」を就労部会にてデモ実施予定（初回デモ開催日: 2025年9月4日［木］15:00～16:30、就労部会は毎月「第一木曜」開催）。
- 会議で使用する「事例資料①〜⑤」に相当する類似資料を、プロジェクトナレッジの参考資料群をもとに作成することが依頼内容。
- さらに、運営に必要な台本・説明資料・振り返り・評価フォーマットも整備。
- 個人情報保護上の配慮（仮名化・実在名回避）を徹底して、将来的にGitHubでバージョン管理・公開（社内）を想定。

---

## 2. 主要コンセプト・要件

- 事例設定を「特別支援学校 高等部3年 在籍（卒業予定）の学生が、新規でB型利用を検討するケース」へ最適化。  
- 保護者の参加と「保護者からの情報提供書」を独立資料として追加。  
- 全登場人物・事業所名・医療機関・学校名・詳細住所等は仮名化し、冒頭注記を全資料に統一掲載。  
- 実在組織名との重複回避のため、命名ポリシーを策定（花・自然など一般語ベース、町名は架空名）。  
- 配布・印刷・PDF化まで見据え、ファイル命名/順序/目次を統一。  

---

## 3. 既存/新規ファイルと役割

作業ディレクトリ: `./模擬多機関連携会議用事例集（就労部会）/`

既存主要資料（事例・運営）
- 10_case_overview.md（想定: 既存: case_overview.md）
- 20_school_information_sheet.md（既存: school_information_sheet.md）
- 21_parent_information_sheet.md（既存: parent_information_sheet.md）
- work_assessment_record.md（既存: work_assessment_record.md）
- 40_case_meeting_minutes.md（既存: case_meeting_minutes.md）
- 50_regional_assessment_sheet.md（既存: regional_assessment_sheet.md）
- facilitator_script.md（既存: facilitator_script.md）
- participant_briefing.md（既存: participant_briefing.md）
- reflection_sheet.md（既存: reflection_sheet.md）
- evaluation_improvement_format.md（既存: evaluation_improvement_format.md）
- ai_meeting_concept.md（企画・経緯・方針のメモ）

本セッションで新規作成
- 00_index.md … 目次・リンク・印刷順・注意事項  
- anonymization_style_guide.md … 匿名化/表記ガイドラインとチェックリスト  
- OUTLINE_files_structure.md … 各資料の最終文面アウトライン定義  
- BUILD_PDF_GUIDE.md … PDF化・配布手順（Pandoc等）

---

## 4. 目次とナビゲーション

- 入口: `00_index.md`  
- 配布順と相互リンクを整備。資料①〜⑤（事例）と運営資料（A1〜A4）を明確に区分。  
- PDF化順序や別冊分割の方針も `00_index.md` と `BUILD_PDF_GUIDE.md` に明記。

---

## 5. 匿名化・表記の方針

- 共通注記を全資料先頭に掲載（テンプレは `anonymization_style_guide.md` §0）。  
- 人物: 「Cさん」「Cさんの父/母/妹」「A先生/B先生/X支援員」等で統一。  
- 組織: 「さくら特別支援学校」「つばき作業所」「しらゆり工房」「□□こころのクリニック」等の仮名。  
- 地名: 市区町村まで（例: ○○市）。町名・番地・会場名は架空名。  
- 連絡先: ダミー値（電話/メール/URL）。  
- 医療・診断・実習履歴: 特定回避のために抽象化。  
- 版情報・更新日の明記、Markdownの見出し・表・尺度定義の統一。  

詳細は [`anonymization_style_guide.md`](./anonymization_style_guide.md) を参照。

---

## 6. 作成/更新の成果物一覧

追加ファイル
- 目次: [`00_index.md`](./00_index.md)
- ガイド: [`anonymization_style_guide.md`](./anonymization_style_guide.md)
- アウトライン: [`OUTLINE_files_structure.md`](./OUTLINE_files_structure.md)
- PDF化手順: [`BUILD_PDF_GUIDE.md`](./BUILD_PDF_GUIDE.md)

既存資料（参照）
- 事例: [`case_overview.md`](./case_overview.md) → 将来名寄せして `10_case_overview.md` へ  
- 学校: [`school_information_sheet.md`](./school_information_sheet.md) → `20_...`  
- 保護者: [`parent_information_sheet.md`](./parent_information_sheet.md) → `21_...`  
- アセス: [`work_assessment_record.md`](./work_assessment_record.md)  
- 議事録: [`case_meeting_minutes.md`](./case_meeting_minutes.md) → `40_...`  
- 地域: [`regional_assessment_sheet.md`](./regional_assessment_sheet.md) → `50_...`  
- 台本: [`facilitator_script.md`](./facilitator_script.md)  
- 事前説明: [`participant_briefing.md`](./participant_briefing.md)  
- 振り返り: [`reflection_sheet.md`](./reflection_sheet.md)  
- 評価: [`evaluation_improvement_format.md`](./evaluation_improvement_format.md)  
- 企画: [`ai_meeting_concept.md`](./ai_meeting_concept.md)

注: 既存ファイル名は現時点ではリネームしていない。目次では意図する最終命名で掲載。

---

## 7. 今後の運用・GitHub化の指針（ドラフト）

ブランチ/コミット
- main: 公開版（社内共有用）
- develop: 編集・レビュー用
- feat/*: 各資料の改訂単位（例: feat/parent-sheet-v2）

ディレクトリ
- ルート: `模擬多機関連携会議用事例集（就労部会）/`
- 出力: `dist/`（PDFなど成果物）
- ガイド: `BUILD_PDF_GUIDE.md`, `anonymization_style_guide.md`
- 目次: `00_index.md`
- セッション記録: `SESSION_CONTEXT_LOG.md`（本ファイル）

レビュー/チェック
- PRテンプレ: 匿名化チェック項目（ガイド §5）を含める
- CI（任意）: Markdownリンクチェッカー、Pandocビルドのサニティチェック

公開ポリシー
- 外部公開は行わず、社内限定/権限限定を原則
- PDFには「社内研修用/外部配布禁止」の注記

---

## 8. 今後の改善候補

- 既存ファイルの先頭へ「共通注記」を一括挿入（半自動化）
- 既存ファイルの命名規約への名寄せ（10_*, 20_*, 21_*, 40_*, 50_*）
- PDFビルド用メタデータ（meta.yaml）とLaTeXテンプレ（template.tex）の導入
- 参加者アンケートの集計テンプレ（CSV/スプレッドシート）追加
- 目次からの往復リンク追加（各資料末尾に「戻る: 00_index.md」）

---

## 9. セッションの主な意思決定タイムライン（要約）

1) 参考資料①〜⑤に準拠した資料構成の採用  
2) 事例設定を「高等部3年・新規B型検討」へ変更  
3) 保護者資料の独立化、保護者参加を会議設計に反映  
4) 匿名化・仮名化・実在名回避のガイドライン策定  
5) 目次（00_index.md）を中心とするナビと命名規約の策定  
6) アウトライン（OUTLINE_files_structure.md）の作成  
7) PDF化手順（BUILD_PDF_GUIDE.md）の定義  

---

## 10. 更新履歴（本ファイル）

- v1.0（2025-08-06） 初版作成
