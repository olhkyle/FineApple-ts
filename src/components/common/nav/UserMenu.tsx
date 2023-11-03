import Recoil from 'recoil';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from '@mantine/core';
import userState from '../../../recoil/atoms/userState';
import { AvatarIcon } from '..';
// import { authSignOut } from '../../../services/auth';
import ProfileSubMenu from './ProfileSubMenu';
import routes, { RoutePath } from '../../../constant/routes';

export type Size = 'sm' | 'md' | 'lg';
type Content = '프로필' | '나의 질문' | '좋아요';

export interface UserMenuItem {
	size: Size;
	content: Content;
	path: RoutePath;
}

const menuItems: UserMenuItem[] = [
	{ size: 'lg', content: '프로필', path: routes.MY_PROFILE_PATH },
	{ size: 'lg', content: '나의 질문', path: routes.MY_POSTS_PATH },
	{ size: 'lg', content: '좋아요', path: routes.MY_FAV_POSTS_PATH },
];

const UserMenu = () => {
	const navigate = useNavigate();
	const [user, setUser] = Recoil.useRecoilState(userState);

	const handleLogout = async () => {
		try {
			// await authSignOut();
			setUser(null);
		} catch (e) {
			console.error(e);
		} finally {
			navigate(routes.SIGNIN_PATH);
		}
	};

	return !user ? (
		<LoginLink to={routes.SIGNIN_PATH}>로그인</LoginLink>
	) : (
		<MenuContainer>
			<Menu trigger="hover">
				<Menu.Target>
					<AvatarWrapper>
						<AvatarIcon avatarId={user.avatarId} activeHoverStyle={true} />
					</AvatarWrapper>
				</Menu.Target>
				<ProfileSubMenu menuItems={menuItems} handleLogout={handleLogout} />
			</Menu>
		</MenuContainer>
	);
};

const AvatarWrapper = styled.div`
	background: none;
	:hover {
		color: var(--hover-font-color);
	}
`;

const LoginLink = styled(Link)`
	display: none;
	justify-content: center;
	align-items: center;
	padding: 8px 12px;
	background: var(--font-color);
	border: 1px solid var(--opacity-border-color);
	border-radius: 12px;
	font-size: 0.85rem;
	font-weight: 500;
	color: var(--body-bg-color);

	:hover {
		background-color: var(--btn-hover-bg-color);
	}

	@media screen and (min-width: 768px) {
		display: flex;
	}
`;

const MenuContainer = styled.div`
	display: none;

	@media screen and (min-width: 768px) {
		display: block;
	}
`;

export default UserMenu;
