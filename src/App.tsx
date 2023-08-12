import { useState } from 'react';

const commonBtnStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100px',
	height: '36px',
	fontSize: '16px',
	fontWeight: 'bold',
	borderRadius: '9999px',
};

const followBtnStyle = {
	...commonBtnStyle,
	backgroundColor: 'black',
	color: 'white',
};

const unfollowBtnStyle = {
	...commonBtnStyle,
	backgroundColor: 'white',
	color: 'black',
	border: '1px solid #cfd9de',
};

const App = () => {
	const [following, setFollowing] = useState(false);

	return (
		<div>
			<button style={following ? followBtnStyle : unfollowBtnStyle} onClick={() => setFollowing(!following)}>
				{following ? 'follow' : 'unfollow'}
			</button>
			<ul>
				<li>red</li>
				<li>blue</li>
				<li>yellow</li>
				<li>orange</li>
				<li>green</li>
			</ul>
		</div>
	);
};

export default App;
