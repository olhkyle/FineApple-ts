import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { Footer, Nav, Main } from '.';
import Toasts from './common/Toasts';
import ScrollToTopButton from './common/ScrollToTopButton';
const Layout = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, [pathname]);

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
