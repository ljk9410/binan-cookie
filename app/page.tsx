import CriticismCookie from './components/CriticismCookie';
import { fetchCriticalCommentData } from './lib/utiles';

export default function Home() {
	const comments = fetchCriticalCommentData();

	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<CriticismCookie comments={comments} />
			<footer className="flex flex-col items-center">
				<button className="text-[12px] mb-2">
					<p>재미난 아이디어 있으면 여기로 보내주세요 (클릭!)</p>
				</button>
				<p className="text-[10px]">made by 쩡경</p>
			</footer>
		</main>
	);
}
