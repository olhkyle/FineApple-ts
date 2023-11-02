import FILTERS from '../constant/filters';

const filterPosts = (posts, currentFilter) =>
	posts?.filter(post =>
		currentFilter === FILTERS.active ? !post.completed : currentFilter === FILTERS.completed ? post.completed : true,
	) ?? [];

export default filterPosts;
