import { useMediaQuery } from '@mantine/hooks';

const useMediaQueries = (screen: string | string[]) => {
	if (Array.isArray(screen)) {
		const mediaQueries: boolean[] = screen.map(s => useMediaQuery(`(${s})`));
		return mediaQueries;
	} else {
		const mediaQuery = useMediaQuery(`(${screen})`);
		return [mediaQuery];
	}
};

export default useMediaQueries;
