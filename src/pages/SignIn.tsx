import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Text, Flex } from '@mantine/core';
import { WiDirectionUpRight } from 'react-icons/wi';
import { SignInForm, Logo } from '../components';
import routes from '../constant/routes';

const SignIn = () => (
	<Flex direction="column" align="center" gap="8px" h="100vh" py="6rem" c="var(--font-color)">
		<Logo />
		<SignInForm />
		<Text fz="14px">
			FineApple ID가 없으신가요?
			<SignUpLink to={routes.SIGNUP_PATH}>
				회원가입
				<LinkBox>
					<WiDirectionUpRight size="24" />
				</LinkBox>
			</SignUpLink>
		</Text>
	</Flex>
);

const LinkBox = styled.span`
	display: inline-block;
	transform: translateY(8px);
`;

const SignUpLink = styled(Link)`
	margin-left: 6px;
	font-weight: 500;
	color: var(--hover-font-color);
`;

export default SignIn;
