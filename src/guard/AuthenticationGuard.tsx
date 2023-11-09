import { ReactNode, Suspense, useEffect, useState } from 'react';
import Recoil from 'recoil';
import { Navigate } from 'react-router-dom';
import userState from '../recoil/atoms/userState';
import { auth } from '../service/firebase';
import routes, { RoutePath } from 'constant/routes';

interface AuthenticationGuardProps {
	redirectTo: RoutePath<typeof routes>;
	element: ReactNode;
}

const AuthenticationGuard = ({ redirectTo, element }: AuthenticationGuardProps) => {
	const [userData, setUserData] = Recoil.useRecoilState(userState);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		auth.onAuthStateChanged(user => {
			if (!user) {
				setIsLoggedIn(false);
				setUserData(null);
				return;
			}

			setIsLoggedIn(true);
		});
	}, []);

	if (!userData) {
		return <Navigate to={redirectTo} />;
	}

	return !isLoggedIn ? null : userData ? <Suspense fallback={<div>Loading...</div>}>{element}</Suspense> : <Navigate to={redirectTo} />;
};

export default AuthenticationGuard;
