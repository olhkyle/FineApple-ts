import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { Input, Flex } from '@mantine/core';

interface InputWrapperProps {
	label: string;
	desc?: string;
	error?: string;
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
	position: relative;
	width: 100%;

	input,
	select,
	textarea {
		/* height: 50px; */
		padding: 1.2rem 1rem;
		border-radius: 8px;
		background-color: var(--body-bg-color);
		color: var(--font-color);

		&:focus {
			outline: 2px solid var(--color-blue-opacity);
		}
	}

	label {
		margin-bottom: 2px;
		color: var(--font-color);
	}

	textarea {
		height: 150px;
	}
`;

export default InputWrapper;
