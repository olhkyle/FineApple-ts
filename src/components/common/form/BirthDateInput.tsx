import { ForwardedRef, forwardRef, useState } from 'react';
import styled from '@emotion/styled';
import { DateInput } from '@mantine/dates';
import { ChangeHandler } from 'react-hook-form';

/**
 * useForm의 register('inputName') props로 전달
 * useForm의 setValue props로 전달
 * placeholder설정 가능
 * initDate 초기 띄울 날짜 설정
 * @param {{...register('inputName'), placeholder, setValue, initDate}, ref}
 * @returns
 */

interface BirthDateInputProps {
	name: string;
	placeholder: string;
	onBlur: ChangeHandler;
	setValue: (name: string, value: unknown, config?: Object) => void;
	initDate?: Date;
}

const BirthDateInput = forwardRef(
	({ name, placeholder, onBlur, setValue, initDate }: BirthDateInputProps, ref: ForwardedRef<HTMLInputElement>) => {
		const [date, setDate] = useState(initDate);

		return (
			<MantineDateInput
				name={name}
				placeholder={placeholder}
				value={date}
				ref={ref}
				valueFormat="YYYY-MM-DD"
				onChange={date => {
					setDate(date ?? new Date());
					setValue(name, date);
				}}
				onBlur={onBlur}
			/>
		);
	},
);

const MantineDateInput = styled(DateInput)`
	.mantine-Popover-dropdown {
		border: 1px solid #ced4da;
		border-radius: 10px;
		background: var(--body-bg-color);

		button:not([data-weekend]) {
			color: var(--font-color);
			:hover {
				color: var(--hover-font-color);
				background-color: var(--opacity-bg-color);
			}
		}
	}
`;

export default BirthDateInput;
