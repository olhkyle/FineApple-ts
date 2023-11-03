import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { Input, Flex } from '@mantine/core';

interface InputWrapperProps {
	label: string;
	desc?: string;
	error?: string | ReactNode;
	children: ReactNode;
}

const InputWrapper = ({ label, desc, error, children }: InputWrapperProps) => (
	<Wrapper
		label={label}
		error={
			error && (
				<Flex align="center" gap="4px">
					<AiOutlineExclamationCircle /> {error}
				</Flex>
			)
		}>
		{children}
		<Input.Description mt="8px">{desc}</Input.Description>
	</Wrapper>
);

const Wrapper = styled(Input.Wrapper)`
	width: 100%;
	position: relative;
	input,
	select,
	textarea {
		height: 50px;
		border-radius: 10px;
		background-color: var(--body-bg-color);
		color: var(--font-color);
	}

	label {
		color: var(--footer-font-color);
	}

	textarea {
		height: 150px;
	}
`;

export default InputWrapper;
