import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { RiMenuFill } from 'react-icons/ri';
import { Flex, UnstyledButton } from '@mantine/core';
import { MenuList, ThemeButton, UserMenu, Logo, SideNav } from '..';
import { useSideNavActive } from '../../../hooks';
import routes from '../../../constant/routes';

const Nav = () => {
	const {
		isActive,
		actions: { toggle, close },
	} = useSideNavActive();

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

			{isActive && <SideNav close={toggle} />}
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
	background-color: var(--header-bg-color);
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
