import { db } from '@/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

export const addData = async (newData: { [key: string]: any }) => {
	await addDoc(collection(db, 'your-collection-name'), newData);
};
