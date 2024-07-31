'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import TypingAnimation from './TypingAnimation';
import { sendGAEvent } from '@next/third-parties/google';
import { MessageData } from '../lib/types';

type Props = {
	messageData: MessageData[];
};

const BinanCookie = ({ messageData }: Props) => {
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
			? messageData[randomNum].message1
			: messageData[randomNum].message2;
	const nickname = messageData[randomNum]?.nickname;

	const onSetRandomNum = () => {
		setRandomNum(Math.floor(Math.random() * messageData.length));
	};

	const onClickCookie = () => {
		sendGAEvent({ event: 'cookieClicked', value: phase });
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
		<div className="flex flex-col w-full items-center mb-[60px] sm:mb-[84px]">
			<h1 className={`text-[28px] sm:text-[36px] mb-4 text-[#E7963B]`}>
				Binan Cookie
			</h1>
			<div
				className={
					'w-[220px] h-[300px] sm:w-[270px] sm:h-[360px] flex flex-col justify-end items-center -translate-y-8'
				}
			>
				<Image
					src={cookieSrc}
					width={800}
					height={600}
					alt={imgAlt}
					className={`bg-transparent ${isLoading && 'animate-wiggle'} ${
						phase === 1 && 'animate-wiggleUpDown'
					} ${phase === 2 && 'animate-fadeInDown'}`}
					onClick={onClickCookie}
				/>
			</div>
			<div className="animate-bounce">
				<p className="text-[16px] sm:text-[18px]">{clickMessage}</p>
			</div>
			<div
				className={`mt-8 text-[22px] sm:text-[26px] w-full h-[100px] py-2 px-4 sm:px-8 text-center`}
			>
				<TypingAnimation text={cookieMessage} phase={phase} speed={40} />
				{phase !== 0 && nickname && (
					<p
						className={'mt-2 text-[16px] sm:text-[20px] text-gray-700'}
					>{`by ${nickname}`}</p>
				)}
			</div>
		</div>
	);
};

export default BinanCookie;
