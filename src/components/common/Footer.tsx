import styled from '@emotion/styled';
import { Container, Flex, Text, Divider } from '@mantine/core';
import Logo from './Logo';

const footerContents = {
	regulations: ['개인정보 처리방침', '웹 사이트 이용약관', '판매 및 환불', '법적 고지', '사이트 맵'],
	businessInfo: ['대표이사 : Kyle Kwon | 주소 : 서울특별시 강남구 역삼동 826-21, fa빌딩', '대표전화 : 080-333-8877 | 팩스 : 02-0000-0000'],
};

const Footer = () => {
	const { businessInfo } = footerContents;

	return (
		<FooterWrapper>
			<FooterContainer>
				<Container maw="1024px" p="0" h="50px">
					<Logo width={'60px'} height={'60px'} />
				</Container>
				<Divider my="lg" m="0 auto" maw="1024px" color="var(--opacity-border-color)" />
				<BusinessInfoWrapper>
					<Flex justify="center" align="align-items" direction="column">
						{businessInfo.map((info, idx) => (
							<li key={idx}>{info}</li>
						))}
					</Flex>
				</BusinessInfoWrapper>
				<Container
					maw="1024px"
					fz="0.75rem"
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: ' 1rem',
						justifyContent: 'space-between',
						'@media screen and (min-width: 768px)': {
							flexDirection: 'row',
						},
					}}>
					<Text>Copyright © 2023 FineApple Inc. 모든 권리 보유.</Text>

					<Flex justify="center" align="center">
						<Text ml="auto" fw="500">
							대한민국
						</Text>
					</Flex>
				</Container>
			</FooterContainer>
		</FooterWrapper>
	);
};

const FooterWrapper = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: var(--footer-bg-color);
	color: var(--footer-font-color);
`;

const FooterContainer = styled.div`
	padding-top: 0.5rem;
	padding-bottom: 1.25rem;
	padding-left: 1rem;
	padding-right: 1rem;
	max-width: 1024px;
	width: 100%;
`;

const BusinessInfoWrapper = styled(Container)`
	display: flex;
	justify-content: space-between;
	margin-top: 1.5rem;
	margin-bottom: 1.5rem;
	max-width: 1024px;
	font-size: 0.75rem;
`;

export default Footer;
