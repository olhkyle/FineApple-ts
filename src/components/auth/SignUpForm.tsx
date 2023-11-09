import { useForm } from 'react-hook-form';
import _ from 'lodash';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Stack, Flex, Button, Input, Divider } from '@mantine/core';
import { useToast } from '../../hooks';
import { PasswordTooltipInput } from '.';
import { InputWrapper, CountrySelect, PhoneNumberInput } from '../common/form';
import routes from '../../constant/routes';
import { SignupSchema, signupSchema } from './schema';
import { authSignUp, checkDuplicatedEmail, checkDuplicatedNickName } from '../../service/auth';
import { FirebaseError } from 'firebase/app';

const SignUpForm = () => {
	const navigate = useNavigate();
	const toast = useToast();

	const {
		handleSubmit,
		register,
		setValue,
		setError,
		clearErrors,
		formState: { isDirty, errors },
	} = useForm<SignupSchema>({
		resolver: zodResolver(signupSchema),
		shouldFocusError: true,
	});

	const onSubmit = async (data: SignupSchema) => {
		try {
			const isDuplicatedNickName = await checkDuplicateNickName(data.nickName);

			if (isDuplicatedNickName) return;

			await authSignUp(data);
			toast.success({ message: '회원가입에 성공하였습니다.' });
			navigate(routes.SIGNIN_PATH);
		} catch (e) {
			if (e instanceof FirebaseError) {
				if (e.code === 'auth/email-already-in-use') {
					setError('email', { type: 'custom' });
					toast.error({ message: '회원가입에 실패하였습니다. 정보를 올바르게 다시 입력해 주세요.' });
				}
			}
		}
	};

	const checkDuplicateEmail = async (email: string) => {
		try {
			const isDuplicatedEmail = await checkDuplicatedEmail(email);
			if (isDuplicatedEmail) {
				setError('email', { type: 'custom', message: '이미 사용중인 이메일입니다.' });
			} else if (errors.email?.type === 'custom') {
				clearErrors('email');
			}
			return isDuplicatedEmail;
		} catch (e) {
			console.error(e);
			return false;
		}
	};

	const checkDuplicateNickName = async (nickName: string) => {
		try {
			const isDuplicatedNickName = await checkDuplicatedNickName(nickName);

			if (isDuplicatedNickName) {
				setError('nickName', { type: 'custom', message: '이미 사용중인 닉네임입니다.' });
			} else if (errors.nickName?.type === 'custom') {
				clearErrors('nickName');
			}

			return isDuplicatedNickName;
		} catch (e) {
			console.error(e);
			return false;
		}
	};
	//TODO: checkDuplicateEmail 작동 오류
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack>
				<Flex w="100%" justify="center" gap="8px">
					<InputWrapper label="성" error={errors?.lastName?.message?.toString()}>
						<Input {...register('lastName')} placeholder="성" />
					</InputWrapper>
					<InputWrapper label="이름" error={errors?.firstName?.message?.toString()}>
						<Input {...register('firstName')} placeholder="이름" />
					</InputWrapper>
				</Flex>

				<InputWrapper label="국가 / 지역" error={errors?.country?.message?.toString()}>
					<CountrySelect {...register('country')} />
				</InputWrapper>

				{/* <InputWrapper label="생년월일" error={errors?.birthDate?.message?.toString()}>
					<BirthDateInput {...register('birthDate')} setValue={setValue} placeholder="생년월일" />
				</InputWrapper> */}

				<Divider size="xs" variant="dashed" my="10px" />

				<InputWrapper label="이메일" desc="새 FineApple ID로 사용할 주소입니다." error={errors?.email?.message?.toString()}>
					<Input
						{...register('email')}
						placeholder="name@example.com"
						onBlur={e => {
							console.log('here');
							checkDuplicateEmail(e.target.value);
						}}
					/>
				</InputWrapper>

				<InputWrapper label="비밀번호" error={errors?.password?.message?.toString()}>
					<PasswordTooltipInput {...register('password')} placeholder="비밀번호" />
				</InputWrapper>

				<InputWrapper label="비밀번호 확인" error={errors?.confirmPassword?.message?.toString()}>
					<Input type="password" {...register('confirmPassword')} placeholder="비밀번호 확인" />
				</InputWrapper>

				<Divider size="xs" variant="dashed" my="10px" />

				<InputWrapper label="닉네임" desc="커뮤니티에서 사용할 닉네임입니다.." error={errors?.nickName?.message?.toString()}>
					<Input
						{...register('nickName')}
						placeholder="닉네임"
						onBlur={e => {
							checkDuplicateNickName(e.target.value);
						}}
					/>
				</InputWrapper>

				<InputWrapper label="전화번호" error={errors?.phoneNumber?.message?.toString()}>
					<PhoneNumberInput {...register('phoneNumber')} setValue={setValue} placeholder="전화번호" />
				</InputWrapper>

				<Button type="submit" disabled={!isDirty || !_.isEmpty(errors)} mt="xl" size="md" radius="10px">
					회원가입
				</Button>
			</Stack>
		</form>
	);
};

export default SignUpForm;
