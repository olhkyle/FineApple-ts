export type RoutePath<T> = T[keyof T];

const routes = {
	MAIN_PATH: '/',
	SIGNUP_PATH: '/signup',
	SIGNIN_PATH: '/signin',
	PROFILE_PATH: '/user-profile/:nickName',
	MY_PROFILE_PATH: '/profile',
	MY_PROFILE_EDIT_PATH: '/profile/edit',
	MY_POSTS_PATH: '/profile/myposts',
	MY_FAV_POSTS_PATH: '/profile/fav',
	POSTS_CATEGORY_PATH: 'posts/:category',
	COMPUTER_IT_PATH: '/posts/computer-it',
	COMPUTER_IT_POPULAR_PATH: '/posts/computer-it/list/popular',
	COMPUTER_IT_PROGRAMMING_PATH: '/posts/computer-it/programming',
	COMPUTER_IT_COMPUTER_PATH: '/posts/computer-it/computer',
	COMPUTER_IT_MOBILE_PATH: '/posts/computer-it/mobile',
	GAME_PATH: '/posts/game',
	GAME_POPULAR_PATH: '/posts/game/list/popular',
	GAME_FPS_PATH: '/posts/game/fps',
	GAME_MMORPG_PATH: '/posts/game/mmorpg',
	GAME_AOS_PATH: '/posts/game/aos',
	POST_PATH: '/post',
	QUESTION_PATH: '/question',
	GUIDE_FAQ_PATH: '/guide-faq',
	RANK_PATH: '/rank',
} as const;

export default routes;
