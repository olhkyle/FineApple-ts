import { HTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';

interface MainProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
}

const Main = ({ children }: MainProps) => {
	return <Container>{children}</Container>;
};

const Container = styled.main`
	margin: 0 auto;
	padding: 0 1rem 5rem 1rem;

	@media screen and (min-width: 640px) {
		width: 640px;
	}

	@media screen and (min-width: 768px) {
		width: 768px;
	}

	@media screen and (min-width: 1024px) {
		width: 1024px;
	}
`;

export default Main;
