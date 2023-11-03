import { useEffect, useRef } from 'react';

const useInfinityScroll = (callback: () => void) => {
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting) {
				callback();
			}
		});

		observer.observe(ref.current as Element);
		return () => {
			observer.disconnect();
		};
	}, []);

	return ref;
};

export default useInfinityScroll;
