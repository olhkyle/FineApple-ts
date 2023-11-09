/* eslint-disable import/prefer-default-export */
type CategoryValue<T> = T[keyof T];

type CategoryKeys = keyof typeof CATEGORY;
type CategoryValues = CategoryValue<typeof CATEGORY>;
type CategoryInfoKeys = keyof typeof CATEGORY_INFO;

const CATEGORY = {
	'computer-it': '컴퓨터 / IT',
	programming: '프로그래밍',
	computer: '컴퓨터',
	mobile: '모바일',
	game: '게임',
	fps: 'FPS',
	mmorpg: 'MMORPG',
	aos: 'AOS',
	'': '전체',
} as const;

const CATEGORY_INFO = {
	'computer-it': { name: '컴퓨터 / IT', category: 'computer-it', path: '', color: 'red', style: 'outline' },
	programming: { name: '프로그래밍', category: 'computer-it', path: 'programming', color: 'red', style: 'filled' },
	computer: { name: '컴퓨터', category: 'computer-it', path: 'computer', color: 'red', style: 'filled' },
	mobile: { name: '모바일', category: 'computer-it', path: 'mobile', color: 'red', style: 'filled' },
	game: { name: '게임', category: 'game', path: '', color: 'yellow', style: 'outline' },
	fps: { name: 'FPS', category: 'game', path: 'fps', color: 'yellow', style: 'filled' },
	mmorpg: { name: 'MMORPG', category: 'game', path: 'mmorpg', color: 'yellow', style: 'filled' },
	aos: { name: 'AOS', category: 'game', path: 'aos', color: 'yellow', style: 'filled' },
	'': 'all',
} as const;

export type { CategoryKeys, CategoryValues, CategoryInfoKeys };
export { CATEGORY, CATEGORY_INFO };
