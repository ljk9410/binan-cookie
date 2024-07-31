import { db } from '@/firebaseConfig';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { MessageData } from '../lib/types';

export const addData = async (messageData: MessageData) => {
	await addDoc(collection(db, 'message'), messageData);
};

export const getMessageData = async (collectionName: string) => {
	const docSnap = await getDocs(collection(db, collectionName));
	const data: MessageData[] = docSnap.docs.map((doc) => {
		const docData = doc.data();
		return {
			id: doc.id,
			message1: docData.message1,
			message2: docData.message2,
			nickname: docData.nickname,
			isShowMessage: docData.isShowMessage,
		};
	});

	return data;
};
