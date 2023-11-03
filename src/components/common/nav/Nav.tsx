import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import { Flex, UnstyledButton } from '@mantine/core';
import { MenuList, ThemeButton, UserMenu, Logo, SideNav } from '..';
import routes from '../../../constant/routes';
import { useToast, useSideNavActive } from '../../../hooks';
import { RiMenuFill } from 'react-icons/ri';

const Nav = () => {
	const {
		isActive,
		actions: { toggle, close },
	} = useSideNavActive();
	const toast = useToast();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			// await logOut();
			// setLogoutUser();
			toast.success({ message: '성공적으로 로그아웃 되었습니다.' });
		} catch (e) {
			toast.error({ message: '문제가 발생하였습니다.' });
			console.error(e);
		} finally {
			navigate(routes.MAIN_PATH);
		}
	};
	console.log(isActive);
	return (
		<>
			<NavWrapper>
				<NavContainer>
					<Flex gap="0.75rem" align="center" sx={{ justifyContent: 'space-between' }}>
						<LogoLink to={routes.MAIN_PATH}>
							<Logo />
						</LogoLink>
						<MenuList />
					</Flex>
					<Flex
						gap="1rem"
						align="center"
						sx={{
							display: 'none',
							justifyContent: 'flex-end',
							'@media screen and (min-width: 768px)': {
								display: 'flex',
							},
						}}>
						<ThemeButton />
						<UserMenu />
					</Flex>
					<UnstyledButton
						display="inline-flex"
						ml="auto"
						mr="1rem"
						sx={{
							alignItems: 'center',
							'@media screen and (min-width: 768px)': {
								display: 'none',
							},
						}}
						onClick={toggle}>
						<RiMenuFill size="32" color="var(--font-color)" />
					</UnstyledButton>
				</NavContainer>
			</NavWrapper>

			{isActive && <SideNav onLogout={handleLogout} close={toggle} />}
			{isActive && <Overlay onClick={close} />}
		</>
	);
};

const NavWrapper = styled.div`
	position: sticky;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 80px;
	background-color: var(--footer-bg-color);
	border-bottom: 1px solid var(--opacity-border-color);
	color: var(--font-color);
	z-index: 9900;
`;

const NavContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	margin: 0 auto;
	padding: 0 1rem;
	max-width: 1024px;
	width: 100%;

	@media screen and (min-width: 1024px) {
	}
`;

const LogoLink = styled(Link)`
	display: inline-flex;
	justify-content: center;
	align-items: center;
`;

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	backdrop-filter: blur(10px);
	z-index: 99;
`;

export default Nav;
