import React, { useEffect, useState } from 'react';

const TypingAnimation = ({
	text,
	speed,
	phase,
}: {
	text: string;
	speed: number;
	phase: number;
}) => {
	const [displayText, setDisplayText] = useState('');
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (index < text.length) {
			const timeout = setTimeout(() => {
				setDisplayText((prev) => prev + text[index]);
				setIndex(index + 1);
			}, speed);

			return () => clearTimeout(timeout);
		}
	}, [index, text, speed]);

	useEffect(() => {
		setDisplayText('');
		setIndex(0);
	}, [phase]);

	return <p>{displayText}</p>;
};

export default TypingAnimation;
