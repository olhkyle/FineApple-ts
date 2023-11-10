import { useQuery } from '@tanstack/react-query';
import { GetSearchedPosts, Post } from 'service/posts';
import { AutoCompleteQueryFn } from 'components/community/autoComplete/AutoComplete';
import { useEffect, useState } from 'react';

interface UseAutoCompleteQuery extends Omit<GetSearchedPosts, 'keyword'> {
	inputValue: string;
	queryFn: AutoCompleteQueryFn;
}

const staleTime = 1000;

const useAutoCompleteQuery = ({ inputValue, queryFn, category, subCategory, isRouteHome }: UseAutoCompleteQuery) => {
	const [value, setValue] = useState<Post[]>([]);

	const { data: posts, isFetched } = useQuery({
		queryKey: ['posts', inputValue, category, subCategory, isRouteHome],
		queryFn: async () => {
			const data = await queryFn({ keyword: inputValue, category, subCategory, isRouteHome });
			return data;
		},
		staleTime,
		select: (posts: Post[]) => posts.map(post => ({ ...post, value: post.id })),
	});

	useEffect(() => {
		if (isFetched) setValue(posts ?? []);
	}, [posts, isFetched]);

	return value;
};

export default useAutoCompleteQuery;
