import styled from '@emotion/styled';
import { Flex, Menu, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { GameSubMenuItem } from './GameSubMenu';
import { ComputerItMenuItem } from './ComputerItSubMenu';

interface SubMenuProps {
	label: string;
	menuItems: (ComputerItMenuItem | GameSubMenuItem)[];
}

const SubMenu = ({ label, menuItems }: SubMenuProps) => (
	<Menu.Dropdown
		display="flex"
		miw="100vw"
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
			<Flex direction="column">
				{label && (
					<Text mb="8px" pl="5px" c="var(--footer-font-color)" fz="15px" fw={500}>
						{label}
					</Text>
				)}
				{menuItems.map(({ size, content, path }) => (
					<SubMenuItem key={`${content}-${path}`} to={path} size={size}>
						{content}
					</SubMenuItem>
				))}
			</Flex>
		</SubMenuWrapper>
	</Menu.Dropdown>
);

const SubMenuWrapper = styled.div`
	display: flex;
	flex-direction: row;
	min-width: 720px;
	max-width: 720px;
`;

const SubMenuItem = styled(Link)<{ size: 'sm' | 'md' | 'lg' }>`
	margin-top: ${({ size }) => size === 'sm' && '8px'};
	margin-bottom: ${({ size }) => size === 'lg' && '3px'};
	padding: 3px 5px;
	width: fit-content;
	font-size: ${({ size }) => (size === 'sm' ? '15px' : size === 'md' ? '18px' : '22px')};
	font-weight: ${({ size }) => (size === 'sm' ? '400' : size === 'md' ? '600' : '700')};
	color: var(--font-color);
	background: none !important;
	:hover {
		color: var(--hover-font-color);
	}
`;

export default SubMenu;
