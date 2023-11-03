import styled from '@emotion/styled';
import { Container } from '@mantine/core';
import { Link } from 'react-router-dom';

interface HeaderProps {
	title: { path: string; content: string };
	menuList: { path: string; content: string }[];
}

const Header = ({ title, menuList }: HeaderProps) => (
	<HeaderContainer>
		<Container display="flex" w="1024px" maw="1024px" p="0" fz="0.75rem" sx={{ justifyContent: 'space-between' }}>
			<Title to={title.path}>{title.content}</Title>
			<MenuWrapper>
				{menuList.map(({ path, content }) => (
					<Menu key={content} to={path}>
						{content}
					</Menu>
				))}
			</MenuWrapper>
		</Container>
	</HeaderContainer>
);

const HeaderContainer = styled.header`
	margin: 3px auto 0;
	padding: 14px 0px;
	width: 100%;
	min-width: 1280px;
	border-bottom: 1px solid var(--opacity-border-color);
	background-color: var(--body-bg-color);
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
	position: sticky;
	top: 0;
	z-index: 99;
`;

const Title = styled(Link)`
	font-size: 18px;
	font-weight: 600;
	color: var(--font-color);
	text-decoration: none;
	margin-left: 20px;

	:hover {
		color: var(--hover-font-color);
	}
`;

const MenuWrapper = styled.div`
	display: flex;
	gap: 15px;
`;

const Menu = styled(Title)`
	padding-top: 0.2rem;
	font-size: 14px;
	font-weight: 400;
`;

export default Header;
