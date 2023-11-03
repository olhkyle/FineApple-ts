import styled from '@emotion/styled';
import { Button } from '@mantine/core';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useTheme } from '../../../hooks';

const ThemeButton = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			variant="subtle"
			sx={{
				height: '100%',
				border: 'none',
				padding: 0,
				'&:hover': {
					background: 'none',
				},
			}}
			onClick={toggleTheme}>
			<ThemeIcon>{theme === 'light' ? <BsMoon size="20" /> : <BsSun size="20" />}</ThemeIcon>
		</Button>
	);
};

const ThemeIcon = styled.i`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8px;
	border-radius: 100%;
	border: 3px solid var(--opacity-border-color);
	color: var(--font-color);
	background-color: var(--opacity-bg-color);

	:hover {
		border: 3px solid var(--hover-font-color);
	}
`;

export default ThemeButton;
