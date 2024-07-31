import { ReactNode, useEffect } from 'react';

type Props = {
	isVisible: boolean;
	onClose: () => void;
	children: ReactNode;
};

const Modal = ({ isVisible, onClose, children }: Props) => {
	useEffect(() => {
		if (isVisible) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [isVisible]);

	if (!isVisible) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
			onClick={onClose}
		>
			<div
				className="flex items-center justify-center bg-[rgb(230,150,59)] z-51 py-6 rounded shadow-lg relative w-10/12"
				onClick={(e) => e.stopPropagation()}
			>
				<button
					className="absolute text-[20px] top-2 right-2 text-gray-700"
					onClick={onClose}
				>
					&times;
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
