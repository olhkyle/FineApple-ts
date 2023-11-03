import { Container, Loader as MantineLoader } from '@mantine/core';

const Loader = () => (
	<Container h="1024px">
		<MantineLoader pos="fixed" top="50%" left="50%" w="60px" h="60px" transform="translate(-50%, -50%)" />
	</Container>
);

export default Loader;
