import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { Stack, Input, Button } from '@mantine/core';
import userState from '../../recoil/atoms/userState';
import { InputWrapper } from '../common/form';
import { authSignIn } from '../../service/auth';
import { SigninSchema, signinSchema } from './schema';
import { useToast } from '../../hooks';
import routes from '../../constant/routes';
import { FirebaseError } from 'firebase/app';

const SignInForm = () => {
	const navigate = useNavigate();
	const setUser = useSetRecoilState(userState);
	const toast = useToast();

	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm<SigninSchema>({ resolver: zodResolver(signinSchema), shouldFocusError: true });

	const onSubmit = async (data: SigninSchema) => {
		try {
			const userData = await authSignIn(data);
			setUser(userData!);
			navigate(routes.MAIN_PATH);
		} catch (e) {
			if (e instanceof FirebaseError) {
				reset();
				toast.error({ message: '아이디와 비밀번호를 다시 확인해 주세요.' });
				console.error(e);
			}
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack w="340px" spacing="10px">
				<InputWrapper label="Email" error={errors?.email?.message?.toString()}>
					<Input {...register('email')} placeholder="you@example.com" autoFocus />
				</InputWrapper>
				<InputWrapper label="Password" error={errors?.password?.message?.toString()}>
					<Input type="password" {...register('password')} placeholder="pw" />
				</InputWrapper>
				<Button type="submit" mt="md" size="md" radius="10px" bg="var(--color-blue-100)">
					로그인
				</Button>
			</Stack>
		</form>
	);
};

export default SignInForm;
