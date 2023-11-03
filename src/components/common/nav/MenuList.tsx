import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Flex, Menu, Text } from '@mantine/core';
import { ComputerItSubMenu, GameSubMenu } from '.';
import routes from '../../../constant/routes';
import { CATEGORY } from '../../../constant/category';

const MenuList = () => {
	return (
		<Flex
			sx={{
				display: 'none',
				'@media screen and (min-width: 768px)': {
					display: 'flex',
				},
			}}>
			<Menu trigger="hover">
				<Menu.Target>
					<Text
						p="8px 15px"
						fz="md"
						fw={500}
						sx={{
							fontFamily: 'Noto Sans KR, sans-serif',
							cursor: 'pointer',
							'&[aria-expanded=true]': {
								cursor: 'default',
							},
							'&:hover': { color: 'var(--hover-font-color)' },
						}}>
						{CATEGORY['computer-it']}
					</Text>
				</Menu.Target>
				<ComputerItSubMenu />
			</Menu>

			<Menu trigger="hover">
				<Menu.Target>
					<Text
						p="8px 15px"
						fz="md"
						fw={500}
						sx={{
							fontFamily: 'Noto Sans KR, sans-serif',
							cursor: 'pointer',
							'&[aria-expanded=true]': {
								cursor: 'default',
							},
							'&:hover': { color: 'var(--hover-font-color)' },
						}}>
						{CATEGORY.game}
					</Text>
				</Menu.Target>
				<GameSubMenu />
			</Menu>

			<LinkMenu to={routes.QUESTION_PATH}>질문하기</LinkMenu>
			<LinkMenu to={routes.GUIDE_FAQ_PATH}>이용가이드</LinkMenu>
			<LinkMenu to={routes.RANK_PATH}>랭킹</LinkMenu>
		</Flex>
	);
};

const LinkMenu = styled(Link)`
	padding: 8px 15px;
	font-size: 16px;
	font-weight: 500;
	color: var(--font-color);
	border-bottom: 1px solid transparent;
	:hover {
		color: var(--hover-font-color);
	}
`;

export default MenuList;
