import React, { ForwardedRef, forwardRef } from 'react';
import { Tooltip, Stack, Title, Flex, Text, Input, Container } from '@mantine/core';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { ChangeHandler } from 'react-hook-form';
import { passwordRegExp } from './schema';

interface TooltipBoxProps {
	value: string;
}

interface PasswordTooltipInputProps {
	name: string;
	placeholder: string;
	onChange: ChangeHandler;
	onBlur: ChangeHandler;
}

const validList = [
	{ regExp: /.{8,}/, text: '8자 이상' },
	{ regExp: passwordRegExp, text: '특수 문자, 숫자, 대소문자/영문' },
	{ regExp: /\d+/, text: '숫자 한 이상' },
];

const TooltipBox = ({ value }: TooltipBoxProps) => {
	return (
		<Stack
			p="20px"
			w="300px"
			c="var(--font-color)"
			bg="var(--body-bg-color)"
			sx={{ border: '1px solid var(--color-gray-450)', borderRadius: '6px' }}>
			<Title order={6}>암호 필수 조건</Title>
			{validList.map(({ regExp, text }) => (
				<Flex key={text} c={regExp.test(value) ? 'var(--color-green-100)' : 'var(--color-gray-450)'} align="center" gap="xs">
					<AiOutlineCheckCircle fontSize="20px" />
					<Text>{text}</Text>
				</Flex>
			))}
		</Stack>
	);
};

const PasswordTooltipInput = forwardRef(
	({ name, placeholder, onChange, onBlur }: PasswordTooltipInputProps, ref: ForwardedRef<HTMLInputElement>) => {
		const [value, setValue] = React.useState('');
		const [opened, setOpened] = React.useState(false);

		return (
			<Container w="100%" p="0">
				<Tooltip label={<TooltipBox value={value} />} opened={opened} p="0">
					<Input
						type="password"
						placeholder={placeholder}
						name={name}
						ref={ref}
						onChange={e => {
							onChange(e);
							setValue(e.target.value);
						}}
						onFocus={() => setOpened(true)}
						onBlur={e => {
							onBlur(e);
							setOpened(false);
						}}
					/>
				</Tooltip>
			</Container>
		);
	},
);

export default PasswordTooltipInput;
