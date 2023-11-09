import avatars from 'constant/avatars';
import { AtomEffect, atom } from 'recoil';

interface User {
	email: string;
	nickName: string;
	firstName: string;
	lastName: string;
	level: number;
	point: number;
	avatarId: keyof typeof avatars;
}

const KEY = 'user';

const localStorageEffect: <T>(key: string) => AtomEffect<T | null> =
	(key: string) =>
	({ setSelf, onSet }) => {
		const user = localStorage.getItem(key);

		if (user !== null) {
			// initialize atom value
			setSelf(JSON.parse(user));
		}

		// reset atom value
		onSet((newState, _, isReset) => {
			isReset ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(newState));
		});
	};

const userState = atom({
	key: 'userState',
	default: null,
	effects: [localStorageEffect<User>(KEY)],
});

export default userState;
