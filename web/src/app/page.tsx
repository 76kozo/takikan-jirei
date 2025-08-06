import Link from 'next/link';

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl p-6 prose prose-zinc">
      <h1>模擬多機関連携会議 ポータル</h1>
      <p>本サイトは、模擬多機関連携会議（就労選択支援）の資料を集約した限定公開ポータルです。</p>

      <h2>開催概要</h2>
      <ul>
        <li>開催日: 2025年9月4日（木）</li>
        <li>時間: 15:00～16:30</li>
        <li>会場: 南部公民館 会議室</li>
      </ul>

      <h2>読み始める</h2>
      <ul>
        <li><Link href="/docs/00_index">概要と資料一覧（ランディング）</Link></li>
      </ul>

      <hr />
      <p>【重要】本資料は模擬会議用に作成した架空の事例です。実在の人物・団体・地名・事象とは一切関係ありません。外部配布は禁止します。</p>
    </main>
  );
}
