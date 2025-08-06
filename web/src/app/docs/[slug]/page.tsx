import { allDocs } from '../../../.contentlayer/generated';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export const generateStaticParams = async () => {
  return allDocs.map((d) => ({ slug: d.slug }));
};

export default function DocPage({ params }: { params: { slug: string } }) {
  const doc = allDocs.find((d) => d.slug === params.slug);
  if (!doc) return notFound();

  return (
    <main className="mx-auto max-w-3xl p-6 prose prose-zinc">
      <p className="text-sm text-gray-500">最終更新: {doc.updated ?? '-'}</p>
      <div dangerouslySetInnerHTML={{ __html: doc.body.html }} />
      <p><Link href="/">トップに戻る</Link></p>
    </main>
  );
}
