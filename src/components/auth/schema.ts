import { z } from 'zod';

type SigninSchema = z.infer<typeof signinSchema>;
type SignupSchema = z.infer<typeof signupSchema>;

export const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

const signinSchema = z.object({
	email: z.string().email({ message: '이메일 형식에 맞게 입력해 주세요.' }),
	password: z.string().regex(passwordRegExp, {
		message: '특수 문자, 숫자, 영문을 포함한 최소 8자, 최대 15자의 비밀번호를 입력해 주세요.',
	}),
});

const signupSchema = z
	.object({
		firstName: z.string().regex(/.+/, { message: '이름을 입력해 주세요' }),
		lastName: z.string().regex(/.+/, { message: '성을 입력해 주세요' }),
		country: z.string(),
		email: z.string().email({ message: '적절한 이메일이 아닙니다.' }),
		password: z.string().regex(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/, { message: '적절한 패스워드가 아닙니다.' }),
		confirmPassword: z.string().regex(/.+/, { message: '확인을 위해 패스워드를 한 번 더 입력해 주세요' }),
		nickName: z.string().regex(/.{2,}/, { message: '닉네임을 입력해 주세요' }),
		phoneNumber: z.string().regex(/^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/, { message: '적절한 전화번호가 아닙니다.' }),
	})
	.refine(({ confirmPassword, password }) => confirmPassword === password, {
		path: ['confirmPassword'],
		message: '패스워드가 일치하지 않습니다.',
	});

export type { SigninSchema, SignupSchema };
export { signinSchema, signupSchema };
