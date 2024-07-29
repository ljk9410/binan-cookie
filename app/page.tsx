import BinanCookie from './components/BinanCookie';
import { fetchCriticalCommentData } from './lib/utiles';
import Footer from './components/Footer';

export default function Home() {
	const comments = fetchCriticalCommentData();

	return (
		<main className="flex min-h-screen flex-col items-center justify-center max-w-[480px] sm:w-full m-auto bg-customBg">
			<BinanCookie comments={comments} />
			<Footer />
		</main>
	);
}
