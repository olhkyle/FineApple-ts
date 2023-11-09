import { Text } from '@mantine/core';
import { ReactNode } from 'react';

interface HighlightTextProps {
	children: ReactNode;
}

const HighlightText = ({ children }: HighlightTextProps) => {
	return (
		<Text
			display="inline-block"
			p="0 0.3rem"
			fz="0.9rem"
			fw={600}
			ta="center"
			c="#eb5757"
			bg="var(--opacity-border-color)"
			sx={{ borderRadius: '6px' }}>
			{children}
		</Text>
	);
};

export default HighlightText;
