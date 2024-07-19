'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
	const [showResult, setShowResult] = useState(false);

	const onClickCookie = () => {
		setShowResult(true);
	};

	const onClickRetry = () => {
		setShowResult(false);
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className="flex justify-center w-full bg-red-100">ad 박스1</div>
			<div className="flex flex-col items-center">
				<p
					className={`text-[32px] font-bold mb-8 ${
						showResult && 'animate-fadeOut'
					}`}
				>
					비난 쿠키
				</p>
				<Image
					src={
						showResult ? '/very_angry_cookie.png' : '/small_angry_cookie.png'
					}
					width={300}
					height={300}
					alt={`${showResult ? 'very' : ' small'}_angry_cookie`}
					className={`bg-transparent ${showResult && 'animate-translateUp'}`}
					onClick={onClickCookie}
				/>
				{!showResult && (
					<p className="animate-bounce mt-2">
						⬆️ <span className="text-[20px]">click</span> ⬆️
					</p>
				)}
				<p className={`mt-4`}>스스로를 돌아보는 따끔한 한마디 뜯고 가세요</p>
				{showResult && <button onClick={onClickRetry}>Retry</button>}
			</div>
			<div className="flex justify-center w-full bg-red-100">ad 박스1</div>
		</main>
	);
}
