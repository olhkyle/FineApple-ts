import { useState } from 'react';
import styled from '@emotion/styled';
import { Button, Flex } from '@mantine/core';
import { NavLink, ThemeButton, UserMenu } from '.';
import { useClickOutside } from '../../../hooks';
import routes from '../../../constant/routes';

interface SideNavProps {
	close: () => void;
}

const SideNav = ({ close }: SideNavProps) => {
	const [isProfileClicked, setIsProfileClicked] = useState<boolean>(false);

	const ref = useClickOutside(() => setIsProfileClicked(false));

	return (
		<Container>
			<Flex direction="column" gap="1rem" m="1rem 0" sx={{ justifyContent: 'space-between' }}>
				<Navigation to={routes.COMPUTER_IT_PATH} onClick={close}>
					컴퓨터/IT
				</Navigation>
				<Navigation to={routes.GAME_PATH} onClick={close}>
					게임
				</Navigation>
				<Navigation to={routes.QUESTION_PATH} onClick={close}>
					질문하기
				</Navigation>
				<Navigation to={routes.GUIDE_FAQ_PATH} onClick={close}>
					이용가이드
				</Navigation>
				<Navigation to={routes.RANK_PATH} onClick={close}>
					랭킹
				</Navigation>
			</Flex>
			<Flex m="1.5rem 0" p="0 1.5rem" sx={{ justifyContent: 'space-between' }}>
				<UserMenu />
				<ThemeButton />
			</Flex>
		</Container>
	);
};

const Container = styled.div`
	position: absolute;
	top: 80px;
	left: 0;
	width: 100%;
	background-color: var(--bg-color);
	border-bottom: 1px solid var(--opacity-border-color);
	z-index: 999;

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

const Navigation = styled(NavLink)`
	padding-bottom: 1rem;
	width: 100%;
	font-size: 18px;
	border-radius: 0;
	border-bottom: 1px solid var(--color-gray-400);
	color: var(--font-color);
	transition: all 0.1s ease-in-out 0.05s;

	&:hover {
		color: var(--color-blue-100);
		border-bottom: 1px solid var(--color-blue-100);
	}
`;

const Login = styled(NavLink)`
	font-size: 18px;
	border: 1px solid var(--outline-color);
	border-radius: 8px;

	outline-offset: 2px;

	&:hover {
		color: var(--color-green-50);
		outline: 1px solid var(--color-green-50);
	}
`;

const Name = styled.div`
	position: relative;
	padding: var(--btn-sm-padding);
	border: 1px solid var(--outline-color);
	border-radius: 8px;
	outline: 1px solid var(--color-green-50);
	outline-offset: 2px;
`;

const LogoutButton = styled(Button)`
	position: absolute;
	bottom: -50px;
	left: -5px;
	padding: var(--btn-md-padding);
	width: 120px;
	font-size: 14px;
	font-weight: 500;
	line-height: 1;
	color: var(--text-color);
	background-color: var(--bg-color);
	border-radius: 8px;
	border: 1px solid var(--outline-color);
	text-align: center;

	&:hover {
		color: var(--color-green-300);
	}

	@media screen and (min-width: 640px) {
		padding: var(--btn-lg-padding);
		font-size: 18px;
	}

	@media screen and (min-width: 768px) {
		padding: var(--btn-md-padding);
	}
`;

export default SideNav;
