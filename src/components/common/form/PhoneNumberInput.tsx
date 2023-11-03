import { ForwardedRef, forwardRef } from 'react';
import { Input } from '@mantine/core';
import { ChangeHandler } from 'react-hook-form';

interface PhoneNumberInputProps {
	name: string;
	placeholder: string;
	onChange: ChangeHandler;
	onBlur: ChangeHandler;
	setValue: (name: string, value: unknown, config?: Object) => void;
}

const formatPhoneNumber = (value: string) => {
	const phoneNumber = value.replace(/\D/g, '').slice(0, 11);

	return phoneNumber.replace(phoneNumber.length >= 11 ? /(\d{3})(\d{4})(\d{4})/ : /(\d{3})(\d{3})(\d{1,4})/, '$1-$2-$3');
};

const PhoneNumberInput = forwardRef(
	({ name, placeholder, onChange, onBlur, setValue }: PhoneNumberInputProps, ref: ForwardedRef<HTMLInputElement>) => {
		return (
			<Input
				placeholder={placeholder}
				name={name}
				ref={ref}
				onChange={e => {
					setValue(name, formatPhoneNumber(e.target.value));
					onChange(e);
				}}
				onBlur={onBlur}
			/>
		);
	},
);

export default PhoneNumberInput;
