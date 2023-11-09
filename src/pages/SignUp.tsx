import { Container, Title } from '@mantine/core';
import { SignUpForm } from '../components/auth';
import { useMediaQuery } from '@mantine/hooks';

const SignUp = () => {
	const isMobile = useMediaQuery('(max-width:480px)');

	return (
		<Container c="var(--font-color)" py="48px" size="xs">
			<Title mb="xl" align="center" fz={isMobile ? '21px' : '27px'}>
				Create Your Account
			</Title>
			<SignUpForm />
		</Container>
	);
};
export default SignUp;
