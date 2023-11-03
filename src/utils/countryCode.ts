import { countryList } from '../constant/countyList';

const convertCountryNameToCode = (countryName: string) => {
	if (!Array.isArray(Object.values(countryList))) {
		return;
	}

	const foundCountry = Object.values(countryList).find(info => info.CountryNameKR === countryName);

	if (!foundCountry) return;

	return foundCountry['2digitCode'];
};

export { convertCountryNameToCode };
