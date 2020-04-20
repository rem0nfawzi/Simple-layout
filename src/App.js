import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import UserPage from './components/user-page/UserPage';

function App() {
	return (
		<BrowserRouter>
			<div style={{ padding: '20px', backgroundColor: '#f2f2f2', minHeight: '100vh', display: 'flex' }}>
				<UserPage />
			</div>
		</BrowserRouter>
	);
}

export default App;
