import BinanCookie from './components/BinanCookie';
import Footer from './components/Footer';
import { getMessageData } from './api/firebaseAPI';

export default async function Home() {
	const messageData = await getMessageData('message');

	return (
		<main className="flex min-h-screen flex-col items-center justify-center max-w-[480px] sm:w-full m-auto bg-customBg">
			<BinanCookie
				messageData={messageData.filter((data) => data.isShowMessage === true)}
			/>
			<Footer />
		</main>
	);
}
