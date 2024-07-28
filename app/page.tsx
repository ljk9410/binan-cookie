import { sendGTMEvent } from '@next/third-parties/google';
import CriticismCookie from './components/CriticismCookie';
import { fetchCriticalCommentData } from './lib/utiles';
import Footer from './components/Footer';

export default function Home() {
	const comments = fetchCriticalCommentData();

	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<CriticismCookie comments={comments} />
			<Footer />
		</main>
	);
}
