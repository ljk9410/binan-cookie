import CriticismCookie from './components/CriticismCookie';

export default function Home({ comments }: { comments: string[][] }) {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<CriticismCookie comments={comments} />
		</main>
	);
}
