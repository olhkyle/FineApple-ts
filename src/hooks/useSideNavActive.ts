import { useState } from 'react';

const KEY = 'isSideNavOpen';

const useSideNavActive = () => {
	let activeState;

	if (typeof window !== 'undefined') {
		activeState = JSON.parse(localStorage.getItem(KEY)!) ?? false;
	}

	const [isActive, setActive] = useState(activeState);

	const toggle = () =>
		setActive((isActive: boolean) => {
			localStorage.setItem(KEY, JSON.stringify(!isActive));

			return !isActive;
		});

	const close = () => {
		localStorage.setItem(KEY, JSON.stringify(false));
		setActive(false);
		console.log(isActive);
	};

	return { isActive, actions: { toggle, close } } as const;
};

export default useSideNavActive;
