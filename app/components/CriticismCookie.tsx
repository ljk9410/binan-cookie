'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const CriticismCookie = ({ comments }: { comments: string[][] }) => {
	const [phase, setPhase] = useState(0);
	const [randomNum, setRandomNum] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	const cookieSrc =
		phase === 0
			? '/calm_cookie.png'
			: phase === 1
			? '/sneer_cookie.png'
			: '/broken_cookie.png';
	const imgAlt =
		phase === 0
			? 'calm_cookie'
			: phase === 1
			? 'sneer_cookie'
			: 'broken_cookie';

	const onSetRandomNum = () => {
		setRandomNum(Math.floor(Math.random() * comments.length));
	};

	const onClickCookie = () => {
		if (phase === 0) {
			setIsLoading(true);
			setTimeout(() => {
				setIsLoading(false);
				setPhase(1);
			}, 1000);
		} else if (phase === 1) {
			setPhase(2);
		} else if (phase === 2) {
			setPhase(0);
			onSetRandomNum();
		}
	};

	useEffect(() => {
		onSetRandomNum();
	}, []);

	return (
		<div className="flex flex-col items-center">
			<p className={`text-[32px] mb-8`}>Binan Cookie</p>
			<Image
				src={cookieSrc}
				width={300}
				height={300}
				alt={imgAlt}
				className={`bg-transparent ${isLoading && 'animate-wiggle'}`}
				onClick={onClickCookie}
			/>
			<div className="animate-bounce mt-4">
				<p className="text-[20px]">{phase === 2 ? 'Retry' : '⬆️ Click ⬆️'}</p>
			</div>
			<div className={`mt-4 text-[28px]`}>
				{phase === 0 ? <p></p> : <p>{comments[randomNum][phase - 1]}</p>}
			</div>
		</div>
	);
};

export default CriticismCookie;
