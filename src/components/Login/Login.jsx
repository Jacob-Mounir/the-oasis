import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../data/store.js';
import Header from '../Header/Header.jsx';
import './login.css'

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [usernameError, setUsernameError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const navigate = useNavigate();
	const setIsLoggedIn = useStore(state => state.setIsLoggedIn);

	const handleLogin = () => {
		let valid = true;
		setErrorMessage('');  // Clear previous error messages

		if (!username) {
			setUsernameError(true);
			valid = false;
		} else {
			setUsernameError(false);
		}

		if (!password) {
			setPasswordError(true);
			valid = false;
		} else {
			setPasswordError(false);
		}

		if (valid) {
			if (username === 'admin' && password === 'password') {
				setIsLoggedIn(true);
				navigate('/edit');
			} else {
				setErrorMessage('Felaktigt användarnamn eller lösenord');
			}
		} else {
			setErrorMessage('Vänligen fyll i alla fält');
		}
	};

	return (
		<>
			<Header />
			<section className='login-section'>
				<div className='login-form'>
					<input
						type="text"
						value={username}
						onChange={e => setUsername(e.target.value)}
						placeholder="Användarnamn"
						className={usernameError ? 'input-error' : ''}
					/>
					<input
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						placeholder="Lösenord"
						className={passwordError ? 'input-error' : ''}
					/>
					<button onClick={handleLogin}>Logga in</button>
					{errorMessage && <div className="error-message">{errorMessage}</div>}
				</div>
			</section>
		</>
	);
}

export default Login;
