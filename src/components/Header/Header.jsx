import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/logo.png';
import './Header.css';
import { useStore } from '../../data/store.js';




function Header() {

		const [isOpen, setIsOpen] = useState(false);

		const toggleMenu = () => {
			setIsOpen(!isOpen);
		};

	return (
		<header className='header' id="top">


			<div>
			</div>

			<div className='logo'>
				<NavLink to='/'><img src={logo} alt="Logo" /></NavLink>
			</div>

			<div>

</div>


			<div className={`splash-menu ${isOpen ? 'open' : ''}`}>

				<button className="menu-toggle" onClick={toggleMenu} aria-label="Close menu">
					X
				</button>


				<div className='link-container'>

				<b className='underline'>MENU</b>
				<NavLink to="/cart">Cart</NavLink>
				<NavLink to="/login">Log In</NavLink>
				</div>
			</div>


		</header>
	);
}

export default Header;
