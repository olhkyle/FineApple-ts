import styled from '@emotion/styled';
import { Accordion as MantineAccordion, Text, Container } from '@mantine/core';
import { FaqContent } from '../../pages/GuideFaq';
import { useMediaQueries } from '../../hooks';

interface FaqProps {
	faqList: FaqContent[];
}
const Faq = ({ faqList }: FaqProps) => {
	const isMobile = useMediaQueries('max-width: 480px');

	return (
		<Container w="100%">
			<Accordion variant="separated" mt="12px" maw="1024px" multiple>
				{faqList.map(({ title, content }, idx) => (
					<MantineAccordion.Item key={idx} value={`faq-${title}`}>
						<MantineAccordion.Control>
							<Text c="var(--font-color)" fz={isMobile ? '1rem' : '1.2rem'} fw={500}>
								<span dangerouslySetInnerHTML={{ __html: title }} />
							</Text>
						</MantineAccordion.Control>
						<MantineAccordion.Panel>
							<Text mt="10px" p="10px" c="var(--font-color)" fz={isMobile ? '0.8rem' : '1rem'} ta="start">
								{content.map(item => (
									<Text key={item} py="0.4rem">
										<span dangerouslySetInnerHTML={{ __html: item }} />
									</Text>
								))}
							</Text>
						</MantineAccordion.Panel>
					</MantineAccordion.Item>
				))}
			</Accordion>
		</Container>
	);
};

const Accordion = styled(MantineAccordion)`
	.mantine-Accordion-item,
	.mantine-Accordion-itemTitle,
	.mantine-Accordion-control {
		background: var(--opacity-bg-color);
		border-radius: 10px;
		border-color: var(--opacity-border-color);
	}
`;

export default Faq;
