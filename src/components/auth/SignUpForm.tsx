import React from 'react';
import { useForm } from 'react-hook-form';
import _ from 'lodash';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Stack, Flex, Button, Input, Divider } from '@mantine/core';
import { SIGNIN_PATH } from '../../constants/routes';
import useToast from '../../hooks/useToast';
import { PasswordTooltipInput } from '.';
import { InputWrapper, CountrySelect, BirthDateInput, PhoneNumberInput } from '../common/form';
import { authSignUp, checkDuplicatedEmail, checkDuplicatedNickName } from '../../services/auth';

const signupScheme = z
  .object({
    firstName: z.string().regex(/.+/, { message: '이름을 입력해 주세요' }),
    lastName: z.string().regex(/.+/, { message: '성을 입력해 주세요' }),
    country: z.string(),
    birthDate: z.date({ invalid_type_error: '날짜를 선택해 주세요' }),
    email: z.string().email({ message: '적절한 이메일이 아닙니다.' }),
    password: z.string().regex(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/, { message: '적절한 패스워드가 아닙니다.' }),
    confirmPassword: z.string().regex(/.+/, { message: '확인을 위해 패스워드를 한 번 더 입력해 주세요' }),
    nickName: z.string().regex(/.+/, { message: '닉네임을 입력해 주세요' }),
    phoneNumber: z
      .string()
      .regex(/^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/, { message: '적절한 전화번호가 아닙니다.' }),
  })
  .refine(({ confirmPassword, password }) => confirmPassword === password, {
    path: ['confirmPassword'],
    message: '패스워드가 일치하지 않습니다.',
  });

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
  } = useForm({
    resolver: zodResolver(signupScheme),
    shouldFocusError: true,
  });

  const onSubmit = async data => {
    try {
      if (await checkDuplicateNickName(data.nickName)) return;

      await authSignUp(data);

      toast.success({ message: '회원가입에 성공하였습니다.' });
      navigate(SIGNIN_PATH);
    } catch (e) {
      if (e.code === 'auth/email-already-in-use') {
        setError('email', { type: 'custom' });
        return;
      }
      toast.error({ message: '회원가입에 실패하였습니다. 잠시 후에 다시 시도해 주세요.' });
    }
  };

  const checkDuplicateEmail = async email => {
    try {
      const isDuplicatedEmail = await checkDuplicatedEmail(email);

      if (isDuplicatedEmail) {
        setError('email', { type: 'custom', message: '이미 사용중인 이메일입니다.' });
      } else if (errors.email?.type === 'custom') {
        clearErrors('email');
      }

      return isDuplicatedEmail;
    } catch (e) {
      return false;
    }
  };

  const checkDuplicateNickName = async nickName => {
    try {
      const isDuplicatedNickName = await checkDuplicatedNickName(nickName);

      if (isDuplicatedNickName) {
        setError('nickName', { type: 'custom', message: '이미 사용중인 닉네임입니다.' });
      } else if (errors.nickName?.type === 'custom') {
        clearErrors('nickName');
      }

      return isDuplicatedNickName;
    } catch (e) {
      return false;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <Flex w="100%" justify="center" gap="8px">
          <InputWrapper label="성" error={errors?.lastName?.message}>
            <Input {...register('lastName')} placeholder="성" />
          </InputWrapper>
          <InputWrapper label="이름" error={errors?.firstName?.message}>
            <Input {...register('firstName')} placeholder="이름" />
          </InputWrapper>
        </Flex>

        <InputWrapper label="국가 / 지역" error={errors?.country?.message}>
          <CountrySelect {...register('country')} />
        </InputWrapper>

        <InputWrapper label="생년월일" error={errors?.birthDate?.message}>
          <BirthDateInput {...register('birthDate')} setValue={setValue} placeholder="생년월일" />
        </InputWrapper>

        <Divider size="xs" variant="dashed" my="10px" />

        <InputWrapper label="이메일" desc="새 FineApple ID로 사용할 주소입니다." error={errors?.email?.message}>
          <Input
            {...register('email')}
            placeholder="name@example.com"
            onBlur={e => {
              checkDuplicateEmail(e.target.value);
            }}
          />
        </InputWrapper>

        <InputWrapper label="비밀번호" error={errors?.password?.message}>
          <PasswordTooltipInput {...register('password')} placeholder="비밀번호" />
        </InputWrapper>

        <InputWrapper label="비밀번호 확인" error={errors?.confirmPassword?.message}>
          <Input type="password" {...register('confirmPassword')} placeholder="비밀번호 확인" />
        </InputWrapper>

        <Divider size="xs" variant="dashed" my="10px" />

        <InputWrapper label="닉네임" desc="커뮤니티에서 사용할 닉네임입니다.." error={errors?.nickName?.message}>
          <Input
            {...register('nickName')}
            placeholder="닉네임"
            onBlur={e => {
              checkDuplicateNickName(e.target.value);
            }}
          />
        </InputWrapper>

        <InputWrapper label="전화번호" error={errors?.phoneNumber?.message}>
          <PhoneNumberInput {...register('phoneNumber')} setValue={setValue} placeholder="전화번호" />
        </InputWrapper>

        <Button type="submit" disabled={!isDirty || !_.isEmpty(errors)} mt="xl" size="lg" radius="10px">
          회원가입
        </Button>
      </Stack>
    </form>
  );
};

export default SignUpForm;
