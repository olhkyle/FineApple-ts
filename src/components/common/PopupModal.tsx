import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Modal } from '@mantine/core';
import { useMediaQueries } from '../../hooks';

/**
 * 1. `const [opened, { open, close }] = useDisclosure(false);`
 * 2. `Modal`을 open할 button 요소에 `open` 함수를 `onClick` 이벤트 핸들러에 전달
 * - `opened` :  Mantine의 `useDisclosure` hook이 반환하는 property
 * - `close` : Mantine의 `useDisclosure` hook이 반환하는 property
 * - `title` : Modal을 활용할 상위 컴포넌트에서 전달받을 `Title Component`
 * @param {{
 * opened: boolean
 * onClose: () => void
 * title: string | undefined
 * children: React.ReactElement
 * }} props
 */

interface PopupModalProps {
	opened: boolean;
	onClose: () => void;
	title: string;
	children: ReactNode;
}

const PopupModal = ({ title, opened, onClose, children }: PopupModalProps) => {
	const [isMobile] = useMediaQueries('max-width: 480px');

	return (
		<ModalContainer
			title={title}
			opened={opened}
			onClose={onClose}
			padding={isMobile ? '30px 30px 20px 30px' : '60px 60px 40px 60px'}
			radius="18px"
			size={isMobile ? 'sm' : '50%'}
			overlayProps={{
				opacity: 0.25,
				blur: 2.5,
			}}
			zIndex={999}
			centered>
			{children}
		</ModalContainer>
	);
};

const ModalContainer = styled(Modal)`
	position: relative;
	word-break: keep-all;

	section {
		min-height: 80vh;
		background-color: var(--footer-bg-color);
	}

	.mantine-Modal-inner {
		padding: 0;
	}

	.mantine-Modal-header,
	.mantine-Modal-body {
		color: var(--font-color);
		background-color: var(--footer-bg-color);
	}

	button.mantine-Modal-close {
		position: absolute;
		top: 20px;
		right: 20px;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: #e8e8ed;
	}

	button.mantine-Modal-close:hover {
		border: 1px solid #6e6e73;
	}

	h2.mantine-Modal-title {
		font-size: 40px;
		font-weight: 600;
		line-height: 1.2;
		word-break: keep-all;
		overflow-wrap: break-word;

		@media screen and (max-width: 480px) {
			font-size: 30px;
		}
	}

	svg {
		width: 20px;
		height: 20px;
		color: #6e6e73;
	}

	@media screen and (max-width: 480px) {
		width: 100vw;
	}
`;

export default PopupModal;
