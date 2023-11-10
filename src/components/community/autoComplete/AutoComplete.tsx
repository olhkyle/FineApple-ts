import { useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { Autocomplete } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import useAutoCompleteQuery from '../../../hooks/queries/useAutoCompleteQuery';
import routes from '../../../constant/routes';
import transientOptions from '../../../constant/transientOptions';
import { AutoCompleteItem, NothingFound } from '.';
import { CategoryInfoKeys, CategoryKeys } from 'constant/category';
import { GetSearchedPosts, Post } from '../../../service/posts';

export type AutoCompleteQueryFn = ({ keyword, category, subCategory, isRouteHome }: GetSearchedPosts) => Promise<Post[]>;

interface AutoCompleteProps {
	width: number;
	queryFn: AutoCompleteQueryFn;
	category: CategoryKeys;
	subCategory: Omit<CategoryInfoKeys, 'computer-it' | 'game'>;
	isRouteHome?: boolean;
}

const LIMIT_OF_POSTS = 10;

const AutoComplete = ({ width = 620, queryFn, category = '', subCategory = '', isRouteHome = true }: AutoCompleteProps) => {
	const [value, setValue] = useState('');
	const [debounced] = useDebouncedValue(value, 500);

	const navigate = useNavigate();

	const posts = useAutoCompleteQuery({ inputValue: debounced, queryFn, category, subCategory, isRouteHome });

	return (
		<CommunityAutoComplete
			icon={<FiSearch />}
			$wrapperWidth={width}
			zIndex={10}
			dropdownPosition="bottom"
			placeholder="질문 검색"
			value={value}
			limit={LIMIT_OF_POSTS}
			itemComponent={AutoCompleteItem}
			data={posts ?? []}
			onItemSubmit={item => {
				navigate(`${routes.POST_PATH}/${item.id}`);
				setValue('');
			}}
			onChange={setValue}
			nothingFound={<NothingFound />}
			filter={() => true}
			transitionProps={{
				transition: 'pop-top-left',
				duration: 80,
				timingFunction: 'ease',
			}}
		/>
	);
};

const CommunityAutoComplete = styled(Autocomplete, transientOptions)<{ $wrapperWidth: number }>`
	& .mantine-Autocomplete-wrapper {
		margin: 0 auto;
		min-width: 248px;

		@media screen and (min-width: 360px) {
			width: 340px;
		}

		@media screen and (min-width: 480px) {
			width: ${({ $wrapperWidth }) => `${$wrapperWidth}px`};
		}
	}

	& .mantine-Autocomplete-input {
		padding-left: 3rem;
		height: 50px;
		font-size: 18px;
		border: 1px solid var(--opacity-border-color);
		border-radius: 10px;
		color: var(--font-color);
		background-color: var(--secondary-bg-color);

		:focus {
			outline: 1px solid var(--hover-font-color);
			outline-offset: 2px;
		}
	}

	& .mantine-Autocomplete-icon {
		width: 50px;
		font-size: 21px;
	}

	& .mantine-Autocomplete-dropdown {
		padding: 1rem;
		border-radius: 10px;
		border: 1px solid var(--opacity-border-color);
		background-color: var(--secondary-bg-color);
		div {
			gap: 10px;
		}
	}
`;

export default AutoComplete;
