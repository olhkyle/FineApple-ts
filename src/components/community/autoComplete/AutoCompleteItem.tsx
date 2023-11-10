import { ForwardedRef, forwardRef } from 'react';
import styled from '@emotion/styled';
import { useNavigate, useLocation } from 'react-router';
import { Flex, Text } from '@mantine/core';
import routes from '../../../constant/routes';
import { useMediaQueries } from '../../../hooks';

interface AutoCompleteItemProps {
	title: string;
	id: string;
}

const AutoCompleteItem = forwardRef(({ title, id, ...option }: AutoCompleteItemProps, ref: ForwardedRef<HTMLDivElement>) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [isSmallMobile, isMobile] = useMediaQueries(['max-width: 360px', 'max-width: 480px']);

	return (
		<Container ref={ref} onClick={() => navigate(`${routes.POST_PATH}/${id}`)} {...option}>
			<Flex
				justify="flex-start"
				align="center"
				p="20px"
				w={isSmallMobile ? '280px' : isMobile || pathname === routes.MAIN_PATH ? '520px' : '800px'}>
				<Text
					w="100%"
					fz="18px"
					fw="400"
					ta="start"
					sx={{
						wordBreak: 'keep-all',
						textOverflow: 'ellipsis',
						overflow: 'hidden',
						whiteSpace: 'nowrap',
					}}>
					{title}
				</Text>
			</Flex>
		</Container>
	);
});

const Container = styled.div`
	padding: 0.5rem 0;
	border: 1px solid transparent;
	border-radius: 10px;
	color: var(--font-color);
	cursor: pointer;

	&[data-hovered='true'],
	&:hover {
		div {
			font-weight: 500;
		}
		border-right: 1px solid var(--hover-font-color);
		border-left: 1px solid var(--hover-font-color);

		background-color: var(--third-bg-color);
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	}
`;

export default AutoCompleteItem;
