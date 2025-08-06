import '../styles/globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: '模擬多機関連携会議ポータル',
  description: '就労選択支援 模擬ケース会議 資料ポータル',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-white text-gray-900">{children}</body>
    </html>
  );
}
