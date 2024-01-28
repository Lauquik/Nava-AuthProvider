import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './auth/SignIn';
import SignUp from './auth/Signup';
import AppLayout from './PrivateRoute';
const App: React.FC = () => (
	<BrowserRouter>
		<Routes>		
			<Route element={<AppLayout />}>
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
			</Route>
		</Routes>
	</BrowserRouter>
);

export default App;