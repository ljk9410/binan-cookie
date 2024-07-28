import type { Metadata } from 'next';
import { Jua } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

const jua = Jua({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
	title: 'Binan Cookie',
	description:
		"Hearing good words is important, but don't you think sometimes a sharp remark is necessary to live one's life",
	icons: {
		icon: '/icon.ico',
	},
	openGraph: {
		title: 'Binan Cookie',
		description:
			'언제나 좋은 말만 들으면서 살 수는 없잖아요? 비판을 통해 자신을 돌아보고 성장하는 계기를 만들어 봅시다.',
		url: 'https://binan-cookie.vercel.app',
		images: [
			{
				url: '/sneer_cookie.png',
				width: 300,
				height: 200,
				alt: 'Og Image Alt',
			},
		],
		type: 'website',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body className={jua.className}>{children}</body>
			<GoogleAnalytics gaId="G-G8KEEK8B9T" />
		</html>
	);
}
