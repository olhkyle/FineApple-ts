import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Stack, Center, Text, Button } from '@mantine/core';
import { RiArrowRightSLine } from 'react-icons/ri';

/**
 * icon : 랜더링할 아이콘
 * title : bold체로 표현되는 Text
 * desc : Info 설명
 * onClick : 더 알아보기 클릭 시 Modal 띄우기
 * @param {{icon, title, desc, href}} param0
 * @returns JSX
 */

interface InfoCardProps {
	icon: ReactNode;
	title: string;
	desc: string;
	onClick: () => void;
}

const InfoCard = ({ icon, title, desc, onClick }: InfoCardProps) => (
	<Center ta="center">
		<Stack align="center" sx={{ wordBreak: 'keep-all' }}>
			<Icon>{icon}</Icon>
			<Text fz="24px" fw="600">
				{title}
			</Text>
			<Text w="60%">{desc}</Text>
			<Button display="flex" pr="12px" radius="10px" sx={{ justifyContent: 'center', alignItems: 'center' }} onClick={onClick}>
				<Text>더 알아보기</Text>
				<RightArrowIcon />
			</Button>
		</Stack>
	</Center>
);

const Icon = styled.div`
	color: var(--font-color);
	font-size: 48px;
`;

const RightArrowIcon = styled(RiArrowRightSLine)`
	padding-top: 1px;
	font-size: 21px;
`;

export default InfoCard;
