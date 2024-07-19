'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

/*
 * 눌렀을 때 좋은 말이 아니라 독설, 비난, 조롱, 인생회초리, 쓴소리가 나오는 쿠키
 * 인생에 도움이 되면 좋겠어
 * 표정이 다양한 쿠키들이 나오면 좋겠다
 * 독설, 조롱, 쓴소리
 * 첫번째 독설 비난 -> 이후 행동하게끔 하는 조언
 * phase 1, 2, 3
 * 아직도 앉아 있나요? 지금 바로 시작하세요.
 */

export default function Home() {
	const [phase, setPhase] = useState(0);

	const phaseData = [
		['엉덩이가 코끼리보다 무겁나보네 ㅋㅋ', '지금 당장 움직이세요'],
		['고민만 하다가 늙어 죽어라 ㅋㅋ', '고민보단 행동이 중요해요'],
	];

	const onClickCookie = () => {
		if (phase === 0) {
			setPhase(1);
		} else if (phase === 1) {
			setPhase(2);
		}
	};

	const onClickRetry = () => {
		setPhase(0);
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className="flex justify-center w-full bg-red-100">ad 박스1</div>
			<div className="flex flex-col items-center">
				<p className={`text-[32px] font-bold mb-8`}>비난 쿠키</p>
				<Image
					src={
						phase === 0 ? '/small_angry_cookie.png' : '/very_angry_cookie.png'
					}
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
						<p>{phaseData[0][phase - 1]}</p>
					)}
				</div>
			</div>
			<div className="flex justify-center w-full bg-red-100">ad 박스1</div>
		</main>
	);
}
