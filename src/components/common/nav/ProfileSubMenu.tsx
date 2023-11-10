import Recoil from 'recoil';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Button, Flex, Group, Menu, Text } from '@mantine/core';
import userState from '../../../recoil/atoms/userState';
import { Size, UserMenuItem } from './UserMenu';
import { useMediaQueries } from '../../../hooks';

interface ProfileSubMenuProps {
	menuItems: UserMenuItem[];
	handleLogout: () => void;
}

const ProfileSubMenu = ({ menuItems, handleLogout }: ProfileSubMenuProps) => {
	const userData = Recoil.useRecoilValue(userState);
	const [isMobile] = useMediaQueries('max-width: 480px');

	return (
		<Menu.Dropdown
			display="flex"
			pt="20px"
			pb="20px"
			bg="var(--header-bg-color)"
			c="var(--footer-font-color)"
			sx={{
				justifyContent: 'center',
				alignItems: 'center',
				border: 'none',
				borderRadius: '12px',
				boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
				zIndex: 9999,
			}}>
			<SubMenuWrapper>
				<Flex direction="column" px="6px" mb="10px">
					<Text
						variant="gradient"
						gradient={{ from: 'indigo', to: 'cyan', deg: 30 }}
						fz={isMobile ? '21px' : '27px'}
						fw="600">{`${userData?.nickName}`}</Text>
					<Group>
						<Text fz={isMobile ? '14px' : '16px'}>레벨 {userData?.level}</Text>
						<Text fz={isMobile ? '14px' : '16px'}>포인트 {userData?.point}</Text>
					</Group>
				</Flex>
				<Flex direction="column" justify="start">
					{menuItems.map(({ size, content, path }) => (
						<SubMenuItem key={`${content}-${path}`} size={size} to={path}>
							{content}
						</SubMenuItem>
					))}
					<Button size="sm" mt="1rem" bg="var(--color-blue-100)" onClick={handleLogout} aria-label="logout-button">
						로그아웃
					</Button>
				</Flex>
			</SubMenuWrapper>
		</Menu.Dropdown>
	);
};

const SubMenuWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.6rem 1rem;
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

	@media screen and (max-width: 480px) {
		font-size: 16px;
	}
`;

export default ProfileSubMenu;
