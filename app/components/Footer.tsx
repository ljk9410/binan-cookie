'use client';

import { sendGAEvent } from '@next/third-parties/google';
import { addData } from '../api/firebaseAPI';

export default function Footer() {
	const handleAddData = async () => {
		try {
			const newData = {
				message1: '파이어베이스 데이터 추가 테스트 입니다22222',
				message2: '파이어베이스 데이터 추가 테스트 comment 233333 입니다',
				nickname: '쩡경',
				isShowMessage: false,
			};

			await addData(newData);
			sendGAEvent({ event: 'footerBtnClicked', value: 1 });
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<footer className="flex flex-col items-center absolute bottom-[60px] sm:bottom-[84px]">
			<button
				className="text-[12px] sm:text-[14px] mb-2 sm:mb-3"
				onClick={handleAddData}
			>
				<p>재미난 아이디어 있으면 여기로 보내주세요 (클릭!)</p>
			</button>
			<p className="text-[10px] sm:text-[12px]">made by 쩡경</p>
		</footer>
	);
}
