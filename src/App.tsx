import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './Signup';
const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/signin" element={<SignIn />} />
			<Route path="/signup" element={<SignUp />} />
		</Routes>
	</BrowserRouter>
);

export default App;