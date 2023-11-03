import { SubMenu } from '.';
import routes, { RoutePath } from '../../../constant/routes';

type Size = 'sm' | 'md' | 'lg';
type Content = '게임' | 'FPS' | 'MMORPG' | 'AOS' | '인기글';

export interface GameSubMenuItem {
	size: Size;
	content: Content;
	path: RoutePath;
}

const menuItems: GameSubMenuItem[] = [
	{ size: 'lg', content: '게임', path: routes.GAME_PATH },
	{ size: 'md', content: 'FPS', path: routes.GAME_FPS_PATH },
	{ size: 'md', content: 'MMORPG', path: routes.GAME_MMORPG_PATH },
	{ size: 'md', content: 'AOS', path: routes.GAME_AOS_PATH },
	{ size: 'sm', content: '인기글', path: routes.GAME_POPULAR_PATH },
];

const GameSubMenu = () => {
	return <SubMenu label="게임 카테고리" menuItems={menuItems} />;
};

export default GameSubMenu;
