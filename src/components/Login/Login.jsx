// components/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../data/store.js';
import Header from '../Header/Header.jsx';
import './login.css'

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const setIsLoggedIn = useStore(state => state.setIsLoggedIn);

	const handleLogin = () => {
		// Ersätt detta med faktisk autentiseringslogik
		if (username === 'admin' && password === 'password') {
			setIsLoggedIn(true);
			navigate('/edit');
		} else {
			alert('Felaktigt användarnamn eller lösenord');
			//Lägg till validering istället för alert
		}
	};

	return (
<>
		<Header/>
		<section className='login-section'>
		<div className='login-form'>
			<input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Användarnamn" />
			<input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Lösenord" />
			<button onClick={handleLogin}>Logga in</button>
		</div>
		</section>
		</>
	);
}

export default Login;
