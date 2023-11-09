import { ForwardedRef, forwardRef } from 'react';
import { ChangeHandler } from 'react-hook-form';
import { NativeSelect } from '@mantine/core';
import { countryList } from '../../../constant/countyList';

const getKrNameCountryList = () => {
	let krNameCountryList: string[] = [];

	for (const key of Object.keys(countryList)) {
		krNameCountryList = [...krNameCountryList, countryList[key].CountryNameKR];
	}

	return krNameCountryList.sort();
};

interface CountrySelect {
	name: string;
	onChange: ChangeHandler;
	onBlur: ChangeHandler;
	defaultCountry?: string;
}

const CountrySelect = forwardRef(
	({ name, onChange, onBlur, defaultCountry = '대한민국' }: CountrySelect, ref: ForwardedRef<HTMLSelectElement>) => (
		<NativeSelect name={name} ref={ref} defaultValue={defaultCountry} data={getKrNameCountryList()} onChange={onChange} onBlur={onBlur} />
	),
);

export default CountrySelect;
