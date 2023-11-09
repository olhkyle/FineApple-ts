import styled from '@emotion/styled';
import { RiHashtag } from 'react-icons/ri';
import { Select as MantineSelect, SelectItem } from '@mantine/core';
import { CATEGORY, CategoryKeys, CategoryValues } from '../../../constant/category';

interface CategorySelectData extends SelectItem {
	value: CategoryKeys;
	label: CategoryValues;
	group: string | undefined;
}

interface CategorySelectProps {
	currentValue: CategoryKeys;
	onValueChange: (value: CategoryKeys) => void;
}

const data: CategorySelectData[] = [
	{ value: 'computer-it', label: '컴퓨터 / IT', group: CATEGORY['computer-it'] },
	{ value: 'programming', label: '프로그래밍', group: CATEGORY['computer-it'] },
	{ value: 'computer', label: '컴퓨터', group: CATEGORY['computer-it'] },
	{ value: 'mobile', label: '모바일', group: CATEGORY['computer-it'] },
	{ value: 'game', label: '게임', group: CATEGORY.game },
	{ value: 'fps', label: 'FPS', group: CATEGORY.game },
	{ value: 'mmorpg', label: 'MMORPG', group: CATEGORY.game },
	{ value: 'aos', label: 'AOS', group: CATEGORY.game },
	{ value: '', label: '전체', group: undefined },
];

const CategorySelect = ({ currentValue, onValueChange }: CategorySelectProps) => (
	<Select
		value={currentValue}
		onChange={onValueChange}
		placeholder="카테고리 선택"
		icon={<RiHashtag />}
		dropdownPosition="bottom"
		data={data ?? []}
		radius="10px"
		zIndex={10}
		clearable
		transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
	/>
);

const Select = styled(MantineSelect)`
	font-family: 'Noto Sans';
	& .mantine-Select-icon {
		width: 50px;
		font-size: 21px;
	}

	& .mantine-Select-input {
		padding-left: 3rem;
		height: 50px;
		font-size: 18px;
		color: var(--font-color);
		background-color: var(--secondary-bg-color);
		border: 1px solid var(--opacity-border-color);

		:focus {
			border: 1px solid var(--hover-font-color);
		}
	}

	& .mantine-Select-item {
		border: 1px solid transparent;
		border-radius: 10px;
		color: var(--font-color);
		background-color: var(--secondary-bg-color);
		cursor: pointer;

		&[data-hovered='true'],
		&:hover {
			div {
				font-weight: 600;
			}
			color: var(--font-color);
			border-right: 1px solid var(--hover-font-color);
			border-left: 1px solid var(--hover-font-color);
			background-color: var(--opacity-bg-color);
			box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		}
	}

	& .mantine-Select-dropdown {
		background-color: var(--secondary-bg-color);
		border: 1px solid var(--opacity-border-color);
		border-radius: 10px;
		div {
			gap: 10px;
		}
	}
`;

export default CategorySelect;
