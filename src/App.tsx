import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { CategoryPosts, ErrorBoundary, Layout, PopularPosts } from './components';
import {
	CategoryLayout,
	GuideFaq,
	Home,
	MyFavPosts,
	MyPosts,
	MyProfile,
	NotFound,
	Post,
	Profile,
	ProfileEdit,
	ProfileLayout,
	Question,
	Rank,
	SignIn,
	SignUp,
} from './pages';
import AuthenticationGuard from './guard/AuthenticationGuard';
import routes from './constant/routes';
import { Global } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyle';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 0,
		},
	},
});

const router = createBrowserRouter([
	{
		path: routes.MAIN_PATH,
		element: <Layout />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: routes.SIGNIN_PATH,
				element: <SignIn />,
			},
			{
				path: routes.SIGNUP_PATH,
				element: <SignUp />,
			},
			{
				path: routes.POSTS_CATEGORY_PATH,
				// loader: postsByCategoryLoader(queryClient),
				element: <CategoryLayout />,
				children: [
					{ index: true, element: <CategoryPosts /> },
					{
						path: ':subCategory',
						element: <CategoryPosts />,
					},
					{
						path: 'list/popular',
						element: <PopularPosts />,
					},
				],
			},
			{
				path: 'post/:postId',
				// loader: postDetailLoader(queryClient),
				element: <Post />,
			},

			{ path: routes.GUIDE_FAQ_PATH, element: <GuideFaq /> },
			{
				path: routes.QUESTION_PATH,
				element: <AuthenticationGuard redirectTo={routes.SIGNIN_PATH} element={<Question />} />,
			},
			{ path: routes.RANK_PATH, element: <Rank /> },
			{
				path: routes.PROFILE_PATH,
				element: <AuthenticationGuard redirectTo={routes.SIGNIN_PATH} element={<ProfileLayout />} />,
				children: [
					{
						index: true,
						element: <MyProfile />,
					},
					{
						path: 'edit',
						element: <ProfileEdit />,
					},
					{
						path: 'fav',
						element: <MyFavPosts />,
					},
					{
						path: 'myposts',
						element: <MyPosts />,
					},
				],
			},
			{
				path: 'user-profile/:nickName',
				element: <Profile />,
			},
		],
	},
	{
		path: '/*',
		element: <NotFound />,
	},
]);

const App = () => {
	return (
		<RecoilRoot>
			<QueryClientProvider client={queryClient}>
				<Global styles={GlobalStyle} />
				<RouterProvider router={router} />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</RecoilRoot>
	);
};

export default App;
