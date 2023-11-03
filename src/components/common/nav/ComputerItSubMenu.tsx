import routes, { RoutePath } from '../../../constant/routes';
import { SubMenu } from '.';

type Size = 'sm' | 'md' | 'lg';
type Content = '컴퓨터/IT' | '프로그래밍' | '컴퓨터' | '모바일' | '인기글';

export interface ComputerItMenuItem {
	size: Size;
	content: Content;
	path: RoutePath;
}

const menuItems: ComputerItMenuItem[] = [
	{ size: 'lg', content: '컴퓨터/IT', path: routes.COMPUTER_IT_PATH },
	{ size: 'md', content: '프로그래밍', path: routes.COMPUTER_IT_PROGRAMMING_PATH },
	{ size: 'md', content: '컴퓨터', path: routes.COMPUTER_IT_COMPUTER_PATH },
	{ size: 'md', content: '모바일', path: routes.COMPUTER_IT_MOBILE_PATH },
	{ size: 'sm', content: '인기글', path: routes.COMPUTER_IT_POPULAR_PATH },
];

const ComputerItSubMenu = () => {
	return <SubMenu label="컴퓨터 / IT 카테고리" menuItems={menuItems} />;
};

export default ComputerItSubMenu;
