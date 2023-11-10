import { useLocation, Outlet } from 'react-router-dom';
import { Footer, Nav, Main } from '.';
import Toasts from './common/Toasts';
import ScrollToTopButton from './common/ScrollToTopButton';
import { useScrollTopEffect } from '../hooks';
const Layout = () => {
	const { pathname } = useLocation();

	useScrollTopEffect(pathname);

	return (
		<>
			<Nav />
			<Main>
				<Outlet />
			</Main>
			<Footer />
			<Toasts />
			<ScrollToTopButton />
		</>
	);
};

export default Layout;
