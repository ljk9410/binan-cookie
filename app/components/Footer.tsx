'use client';

import { sendGAEvent } from '@next/third-parties/google';
import { addData } from '../api/firebaseAPI';
import Modal from './Modal';
import { useState } from 'react';
import TextInput from './TextInput';
import { MessageData } from '../lib/types';

export default function Footer() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [addMessageData, setAddMessageData] = useState<MessageData>({
		message1: '',
		message2: '',
		nickname: '',
		isShowMessage: false,
	});

	console.log(addMessageData);

	const handleSubmit = async () => {
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
				onClick={() => setIsModalVisible(true)}
			>
				<p>재밌는 비난쿠키 멘트가 있다면?(클릭!)</p>
			</button>
			<Modal
				isVisible={isModalVisible}
				onClose={() => setIsModalVisible(false)}
			>
				<div className="w-full">
					<div className="text-[12px] text-center text-gray-700">
						<p>다른 유저들에게 해주고 싶은 비난멘트를 보내주세요!</p>
						<p>비난을 통해 자신을 되돌아보면 좋겠어요</p>
						<p>보내주신 멘트는 검토 후 다른 유저들에게 보이게 됩니다</p>
						<p>재밌고 많은 비난멘트 부탁드려요😁</p>
					</div>
					<form
						onSubmit={handleSubmit}
						className="flex flex-col px-4 w-full max-w-sm mx-auto mt-8"
					>
						<TextInput
							label="비난 멘트"
							value={addMessageData.message1}
							onChange={(e) =>
								setAddMessageData({
									...addMessageData,
									message1: e.target.value,
								})
							}
							placeholder="재치있는 비난 멘트를 적어주세요"
						/>
						<TextInput
							label="교훈 멘트"
							value={addMessageData.message2}
							onChange={(e) =>
								setAddMessageData({
									...addMessageData,
									message2: e.target.value,
								})
							}
							placeholder="비난 멘트와 어울리는 교훈 멘트를 적어주세요"
						/>
						<TextInput
							label="닉네임"
							value={addMessageData.nickname || ''}
							onChange={(e) =>
								setAddMessageData({
									...addMessageData,
									nickname: e.target.value,
								})
							}
							placeholder="닉네임을 적어주세요"
						/>
						<div className="flex items-center justify-end">
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
								type="submit"
							>
								보내기
							</button>
						</div>
					</form>
				</div>
			</Modal>
			<p className="text-[10px] sm:text-[12px]">made by 쩡경</p>
		</footer>
	);
}
