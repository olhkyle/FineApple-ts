const transientOptions = {
	shouldForwardProp: (propName: string) => !propName.startsWith('$'),
};

export default transientOptions;
