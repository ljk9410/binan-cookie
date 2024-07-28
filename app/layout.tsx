import type { Metadata } from 'next';
import { Jua } from 'next/font/google';
import './globals.css';

const jua = Jua({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
	title: 'Binan Cookie',
	description:
		"Hearing good words is important, but don't you think sometimes a sharp remark is necessary to live one's life",
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
