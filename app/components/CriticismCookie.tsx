'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import TypingAnimation from './TypingAnimation';

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
	const clickMessage =
		phase === 0
			? '⬆️ Click ⬆️'
			: phase === 1
			? '⬆️ Crush the Cookie! ⬆️'
			: 'Retry';
	const cookieMessage =
		phase === 0
			? ''
			: phase === 1
			? `${comments[randomNum][phase - 1]} ㅋㅋ`
			: comments[randomNum][phase - 1];

	const onSetRandomNum = () => {
		setRandomNum(Math.floor(Math.random() * comments.length));
	};

	const onClickCookie = () => {
		if (phase === 0) {
			setIsLoading(true);
			setTimeout(() => {
				setIsLoading(false);
				setPhase(1);
			}, 500);
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
		<div className="flex flex-col w-full items-center">
			<p className={`text-[28px] mt-8 mb-4 text-[#E7963B]`}>Binan Cookie</p>
			<div
				className={'w-[250px] h-[300px] flex flex-col justify-end items-center'}
			>
				<Image
					src={cookieSrc}
					width={240}
					height={240}
					alt={imgAlt}
					className={`bg-transparent ${isLoading && 'animate-wiggle'} ${
						phase === 1 && 'animate-wiggleUpDown'
					} ${phase === 2 && 'animate-fadeInDown'}`}
					onClick={onClickCookie}
				/>
			</div>
			<div className="animate-bounce mt-4">
				<p className="text-[18px]">{clickMessage}</p>
			</div>
			<div
				className={`mt-8 text-[22px] w-full h-[100px] py-2 px-4 text-center`}
			>
				<TypingAnimation text={cookieMessage} phase={phase} speed={50} />
			</div>
		</div>
	);
};

export default CriticismCookie;
