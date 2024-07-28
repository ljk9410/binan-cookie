import type { Metadata } from 'next';
import { Jua } from 'next/font/google';
import './globals.css';

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
			"Hearing good words is important, but don't you think sometimes a sharp remark is necessary to live one's life",
		url: 'https://binan-cookie.vercel.app',
		images: [
			{
				url: '/sneer_cookie.png',
				width: 800,
				height: 600,
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
		</html>
	);
}
