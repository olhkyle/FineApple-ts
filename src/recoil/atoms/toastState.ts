import { atom } from 'recoil';

type ToastType = 'success' | 'warning' | 'error';
type Position = 'top' | 'bottom';

interface Toast {
	id: string;
	h: string;
	type: ToastType;
	position: Position;
	closeOnClick: boolean;
	autoClose: boolean;
	autoCloseDelay: number;
	message: string;
}

const toastState = atom<Toast[]>({
	key: 'toastState',
	default: [],
});

export type { ToastType, Position, Toast };
export default toastState;
