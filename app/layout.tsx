import type { Metadata } from 'next';
import { Jua } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

const jua = Jua({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
	title: 'Binan Cookie | 비난 쿠키',
	description:
		'언제나 좋은 말만 들으면서 살 수는 없잖아요? 비판을 통해 자신을 돌아보고 성장하는 계기를 만들어 봅시다.',
	icons: {
		icon: '/icon.ico',
	},
	alternates: {
		canonical: '/',
		languages: {
			'ko-KR': '/ko-KR',
		},
	},
	keywords: ['비난 쿠키', 'binan cookie', '회고', '질타', '비난', '교훈'],
	openGraph: {
		title: 'Binan Cookie',
		description:
			'언제나 좋은 말만 들으면서 살 수는 없잖아요? 비판을 통해 자신을 돌아보고 성장하는 계기를 만들어 봅시다.',
		url: 'https://binan-cookie.vercel.app',
		images: [
			{
				url: 'https://binan-cookie.vercel.app/sneer_cookie.png',
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
			{process.env.NEXT_PUBLIC_GOOGLE_ANAYTICS && (
				<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANAYTICS} />
			)}
		</html>
	);
}
