import { Avatar } from '@mantine/core';
import avatars from '../../constant/avatars';

/**
 * - avatarId 목록 : /constants/avatars
 * @param {{avatarId?: string, size: 'sm' | 'md' | 'lg', activeHoverStyle: boolean}} param
 */

interface AvatarIconProps {
	avatarId?: keyof typeof avatars;
	size?: 'sm' | 'md' | 'lg';
	activeHoverStyle?: boolean;
}

const AvatarIcon = ({ avatarId, size = 'md', activeHoverStyle = false }: AvatarIconProps) => (
	<Avatar
		src={avatarId ? avatars[avatarId] : null}
		size={size}
		alt="avatar image"
		sx={{
			backgroundColor: 'var(--opacity-border-color)',
			border: '3px solid var(--opacity-border-color)',
			borderRadius: '100%',
			'&:hover': {
				border: `${activeHoverStyle && '3px solid var(--hover-font-color)'}`,
			},
		}}
	/>
);

export default AvatarIcon;
