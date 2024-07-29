'use client';

import { sendGAEvent } from '@next/third-parties/google';

export default function Footer() {
	return (
		<footer className="flex flex-col items-center absolute bottom-[60px] sm:bottom-[84px]">
			<button
				className="text-[12px] sm:text-[14px] mb-2 sm:mb-3"
				onClick={() => sendGAEvent({ event: 'footerBtnClicked', value: 1 })}
			>
				<p>재미난 아이디어 있으면 여기로 보내주세요 (클릭!)</p>
			</button>
			<p className="text-[10px] sm:text-[12px]">made by 쩡경</p>
		</footer>
	);
}
