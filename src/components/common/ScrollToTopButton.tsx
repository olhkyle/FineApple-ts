import { keyframes } from '@emotion/react';
import { useWindowScroll } from '@mantine/hooks';
import { UnstyledButton } from '@mantine/core';
import { BiUpArrowAlt } from 'react-icons/bi';

const glow = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
    transform: translate3d(-50%, 10px, 0);
  }
`;

const ScrollToTopButton = ({ topPosToStopShowing = 300 }) => {
	const [scroll, scrollTo] = useWindowScroll();

	return (
		<>
			{scroll.y >= topPosToStopShowing && (
				<UnstyledButton
					sx={{
						position: 'fixed',
						bottom: '2rem',
						right: '3rem',
						display: 'inline-flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '40px',
						height: '40px',
						border: '1px solid #e1e1e1',
						borderRadius: '50%',
						textAlign: 'center',
						color: 'var(--font-color)',
						backgroundColor: 'var(--body-bg-color)',
						transform: 'translate3D(-50%, 0, 0)',
						animation: ` ${glow} 4s infinite`,
						'&:hover': {
							border: '1px solid var(--font-color)',
						},
					}}
					onClick={() => {
						scrollTo({ y: 0 });
					}}>
					<BiUpArrowAlt size="35" color="var(--font-color)" />
				</UnstyledButton>
			)}
		</>
	);
};

export default ScrollToTopButton;
