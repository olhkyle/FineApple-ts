import { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Flex, List, Text, Title } from '@mantine/core';
import { AutoComplete, CategorySelect, Tutorials } from '../components';
import { CATEGORY_INFO, CategoryKeys } from '../constant/category';
import { getSearchedPosts } from '../service/posts';
import { useMediaQuery } from '@mantine/hooks';

const Home = () => {
	const [currentValue, setCurrentValue] = useState<CategoryKeys>('');
	const isValueMainCategory = currentValue === 'computer-it' || currentValue === 'game';

	const isDesktop = useMediaQuery('(max-width:1024px)');
	const isMobile = useMediaQuery('(max-width:480px)');

	return (
		<Flex
			direction="column"
			justify="space-between"
			align="center"
			mt="2rem"
			mb="5rem"
			maw="1024px"
			fz="0.75rem"
			ta="center"
			c="var(--font-color)">
			<Description>
				<Title mt="2rem" mb="2rem" ta="center">
					<Flex direction={isDesktop ? 'column' : 'row'} gap={isDesktop ? '0' : '1rem'} justify="center" align="center">
						<Text mt="1rem" fz={isMobile ? '4rem' : '6rem'}>
							Welcome.
						</Text>
						<Text variant="gradient" gradient={{ from: '#5b3bff', to: '#00b7d7', deg: 75 }} fz={isMobile ? '4rem' : '6rem'}>
							FineApple
						</Text>
					</Flex>
				</Title>
			</Description>

			<Text
				m="0 1rem"
				p="var(--btn-md-padding)"
				fz={isMobile ? '0.85rem' : '1rem'}
				fw={500}
				bg="var(--color-blue-50)"
				c="var(--color-white)"
				sx={{ borderRadius: '999px' }}>
				FineApple이 지원하는 Community를 즐겨보세요
			</Text>

			<Flex justify="center" align="center" gap="10px" mt="1.5rem">
				<CategorySelect currentValue={currentValue} onValueChange={(value: CategoryKeys) => setCurrentValue(value)} />
				<AutoComplete
					width={680}
					queryFn={getSearchedPosts}
					category={isValueMainCategory ? currentValue : ''}
					subCategory={isValueMainCategory ? '' : currentValue}
				/>
			</Flex>

			<Flex
				direction="column"
				justify="space-between"
				mt={isMobile ? '4rem' : '8rem'}
				p="2rem"
				sx={{
					border: ' 1px solid var(--opacity-border-color)',
					borderRadius: '20px',
				}}>
				<Text mb="2rem" fz={isMobile ? '18px' : '20px'} fw="600">
					💿 Select Your Interesting Category
				</Text>

				<List
					display="grid"
					mt="1rem"
					sx={{
						gridTemplateRows: 'repeat(6, 1fr)',
						gap: '1rem',
						'@media screen and (min-width: 480px)': {
							gridTemplateRows: 'repeat(2, 1fr)',
							gridTemplateColumns: 'repeat(4, 1fr)',
						},
					}}>
					{Object.entries(CATEGORY_INFO).map(([key, category]) => {
						if (typeof category === 'object') {
							const { name, path } = category;
							return (
								<Category key={`${name}_${path}_${key}`} path={path}>
									<Link to={`posts/${key}/${path}`}>
										<CategoryDescription>{name}</CategoryDescription>
									</Link>
								</Category>
							);
						}
						return null;
					})}
				</List>
			</Flex>

			<Tutorials />
		</Flex>
	);
};

const Description = styled.section`
	word-break: keep-all;
`;

const Category = styled(List.Item)<{ path: string }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid var(--opacity-border-color);
	border-radius: 20px;
	font-weight: 500;
	cursor: pointer;

	background-color: ${({ path }) => !path.length && '#e5e5e580'};

	& .mantine-List-itemWrapper {
		width: 100%;
	}

	span {
		display: inline-flex;
		justify-content: center;
		align-items: center;
	}

	a {
		padding: 0.5rem 1rem;
		width: 100%;
	}

	&:hover {
		color: var(--hover-font-color);
		outline: 2px solid var(--hover-font-opacity-color);
		outline-offset: 2px;
		background-color: var(--opacity-bg-color);
	}
`;

const CategoryDescription = styled.p`
	color: var(--font-color);
	font-size: 1rem;
	font-weight: 500;
	text-decoration: none;
	word-break: keep-all;
`;

export default Home;
