import React, { useEffect, useState } from 'react';
import Header from "./Header/Header.jsx";
import Slider from "./Slider/Slider.jsx";
import ShopGrid from './Shop/ShopGrid.jsx';
import Footer from './Footer/Footer.jsx'
import './Root.css';

const LandingPage = () => {


	return (
		<>
			<Header />
			<Slider />
			<ShopGrid/>
			<Footer/>
		</>
	);
}

export default LandingPage;
