import CriticismCookie from './components/CriticismCookie';
import { fetchCriticalCommentData } from './lib/utiles';

export default function Home() {
	const comments = fetchCriticalCommentData();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<CriticismCookie comments={comments} />
		</main>
	);
}
