import { useState } from 'react';
import styled from '@emotion/styled';
import { Center, UnstyledButton } from '@mantine/core';
import { Keyframes, keyframes } from '@emotion/react';
import { useToast } from '../../hooks';
import { Position, Toast } from 'recoil/atoms/toastState';

type AnimationStatus = 'entry' | 'dismiss';
type Animation = Record<Position, Record<AnimationStatus, Keyframes>>;

const entryTop = keyframes`
  from {
    transform: translate3d(0, -100%, 0);
    opacity : 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

const entryBottom = keyframes`
  from {
    transform: translate3d(0, 100%, 0);
    opacity : 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity : 1;
  }
`;

const dismissTop = keyframes`
  from {
    transform: translate3d(0, 0, 0);
    opacity : 1;
  }
  to {
    transform: translate3d(0, -100%, 0);
    opacity : 0;
  }
`;

const dismissBottom = keyframes`
  from {
    transform: translate3d(0, 0, 0);
     opacity : 1;
  }
  to {
    transform: translate3d(0, 100%, 0);
    opacity : 0;
  }
`;

const animation: Animation = {
	top: {
		entry: entryTop,
		dismiss: dismissTop,
	},

	bottom: {
		entry: entryBottom,
		dismiss: dismissBottom,
	},
};

const bgc = {
	success: '#339af0',
	warning: '#f59f01',
	error: '#ff6b6b',
} as const;

/**
 * h : toast의 height값 / string
 * c : toast 폰트 컬러 / string
 * bgc : toast 배경 컬러 / string
 *
 * position : toast가 등장할 위치  / 'top' | 'bottom'
 * closeOnClick : toast 닫기 버튼 노출 여부 / boolean
 * autoClose : 딜레이 이후 자동으로 toast 삭제 여부 / boolean
 * autoCloseDelay : 자동으로 toast 삭제 시, 딜레이 지정 / number
 * children : toast에 포함할 내용 / jsx
 *
 * @param {{h, c, bgc, position, closeOnClick, autoClose, autoCloseDelay, children}}
 * @returns
 */

const Toast = ({
	id,
	h = '50px',
	type = 'success',
	position = 'top',
	closeOnClick = true,
	autoClose = true,
	autoCloseDelay = 3000,
	message,
}: Toast) => {
	const [status, setStatus] = useState<AnimationStatus>('entry');
	const { remove } = useToast();

	const handleAnimationEnd = () => {
		if (status === 'entry' && autoClose) setTimeout(() => setStatus('dismiss'), autoCloseDelay);
		if (status === 'dismiss') remove(id);
	};

	return (
		<Container status={status} position={position} h={h} bgc={bgc[type]} onAnimationEnd={handleAnimationEnd}>
			{closeOnClick && (
				<UnstyledButton pos="absolute" sx={{ alignSelf: 'self-start' }} onClick={() => setStatus('dismiss')} right="1.5%">
					x
				</UnstyledButton>
			)}
			<Center px="5%">{message}</Center>
		</Container>
	);
};

const Container = styled.div<{ status: AnimationStatus; position: Position; h: string; bgc: (typeof bgc)[keyof typeof bgc] }>`
	position: fixed;
	top: ${({ position }) => position === 'top' && '0'};
	bottom: ${({ position }) => position === 'bottom' && '0'};
	width: 100%;
	height: ${({ h }) => h};
	padding: 12px 12px;
	background-color: ${({ bgc }) => bgc};
	color: #fff;

	animation: ${({ position, status }) => animation[position][status]} 0.5s both;
	z-index: 9999;

	button {
		color: #fff;
	}
`;

export default Toast;
