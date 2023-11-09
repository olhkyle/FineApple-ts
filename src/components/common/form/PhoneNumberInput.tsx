import { ForwardedRef, forwardRef } from 'react';
import { Input } from '@mantine/core';
import { ChangeHandler, UseFormSetValue } from 'react-hook-form';
import { SignupSchema } from 'components/auth/schema';

interface PhoneNumberInputProps {
	name: string;
	placeholder: string;
	onChange: ChangeHandler;
	setValue: UseFormSetValue<SignupSchema>;
}

const formatPhoneNumber = (value: string) => {
	const phoneNumber = value.replace(/\D/g, '').slice(0, 11);

	return phoneNumber.replace(phoneNumber.length >= 11 ? /(\d{3})(\d{4})(\d{4})/ : /(\d{3})(\d{3})(\d{1,4})/, '$1-$2-$3');
};

const PhoneNumberInput = forwardRef(
	({ name, placeholder, onChange, setValue, ...props }: PhoneNumberInputProps, ref: ForwardedRef<HTMLInputElement>) => {
		return (
			<Input
				placeholder={placeholder}
				name={name}
				ref={ref}
				onChange={e => {
					setValue('phoneNumber', formatPhoneNumber(e.target.value));
					onChange(e);
				}}
				{...props}
			/>
		);
	},
);

export default PhoneNumberInput;
