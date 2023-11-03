import Recoil from 'recoil';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Button, Flex, Group, Menu, Text } from '@mantine/core';
import userState from '../../../recoil/atoms/userState';
import { Size, UserMenuItem } from './UserMenu';

/**
 * @param {{
 * label?: string
 * meunItems: Array<{
 *  size: 'sm' | 'md' | 'lg',
 *  content: string,
 *  path: string
 * }>
 *
 * }} props
 */

interface ProfileSubMenuProps {
	menuItems: UserMenuItem[];
	handleLogout: () => void;
}

const ProfileSubMenu = ({ menuItems, handleLogout }: ProfileSubMenuProps) => {
	const { nickName, level, point } = Recoil.useRecoilValue(userState);

	return (
		<Menu.Dropdown
			display="flex"
			maw="100vw"
			top="0"
			mt="-1px"
			pt="30px"
			pb="20px"
			bg="var(--secondary-bg-color)"
			c="var(--footer-font-color)"
			sx={{
				justifyContent: 'center',
				alignItems: 'center',
				border: 'none',
				borderRadius: '0',
				boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
				zIndex: 9999,
			}}>
			<SubMenuWrapper>
				<Flex direction="column" px="6px" mb="10px">
					<Text variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }} fz="32px" fw="600">{`${nickName} 님`}</Text>
					<Group>
						<Text>레벨 {level}</Text>
						<Text>포인트 {point}</Text>
					</Group>
				</Flex>
				<Flex direction="column" justify="start">
					{menuItems.map(({ size, content, path }) => (
						<SubMenuItem key={`${content}-${path}`} size={size} to={path}>
							{content}
						</SubMenuItem>
					))}
					<Button size="sm" onClick={handleLogout} aria-label="logout-button">
						{'로그아웃'}
					</Button>
				</Flex>
			</SubMenuWrapper>
		</Menu.Dropdown>
	);
};

const SubMenuWrapper = styled.div`
	min-width: 720px;
	max-width: 720px;
	display: flex;
	flex-direction: column;
`;

const SubMenuItem = styled(Link)<{ size: Size }>`
	margin-top: ${({ size }) => size === 'sm' && '8px'};
	margin-bottom: ${({ size }) => size === 'lg' && '3px'};
	padding: 3px 5px;
	width: fit-content;
	color: var(--font-color);
	background: none !important;
	font-size: ${({ size }) => (size === 'sm' ? '15px' : size === 'md' ? '18px' : '22px')};
	font-weight: ${({ size }) => (size === 'sm' ? '400' : size === 'md' ? '600' : '700')};
	:hover {
		color: var(--hover-font-color);
	}
`;

export default ProfileSubMenu;
