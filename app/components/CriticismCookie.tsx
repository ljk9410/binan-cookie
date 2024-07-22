'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchCriticalCommentData } from '../lib/utiles';

const CriticismCookie = ({ comments }: { comments: string[][] }) => {
	const [phase, setPhase] = useState(0);
	const [randomNum, setRandomNum] = useState(0);

	const onSetRandomNum = () => {
		setRandomNum(Math.floor(Math.random() * comments.length));
	};

	const onClickCookie = () => {
		if (phase === 0) {
			setPhase(1);
		} else if (phase === 1) {
			setPhase(2);
		}
	};

	const onClickRetry = () => {
		setPhase(0);
		onSetRandomNum();
	};

	useEffect(() => {
		onSetRandomNum();
	}, []);

	return (
		<div className="flex flex-col items-center">
			<p className={`text-[32px] font-bold mb-8`}>비난 쿠키</p>
			<Image
				src={phase === 0 ? '/small_angry_cookie.png' : '/very_angry_cookie.png'}
				width={300}
				height={300}
				alt={`${phase === 0 ? 'small' : ' very'}_angry_cookie`}
				className={`bg-transparent`}
				onClick={onClickCookie}
			/>
			<div className="animate-bounce mt-2">
				{phase === 2 ? (
					<button className="text-[20px]" onClick={onClickRetry}>
						Retry
					</button>
				) : (
					<p>
						⬆️ <span className="text-[20px]">Click</span> ⬆️
					</p>
				)}
			</div>
			<div className={`mt-4`}>
				{phase === 0 ? (
					<p>스스로를 깨고 앞으로 나아가세요</p>
				) : (
					<p>{comments[randomNum][phase - 1]}</p>
				)}
			</div>
		</div>
	);
};

export default CriticismCookie;
