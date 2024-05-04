import './slider.css'
import { NavLink } from 'react-router-dom'


const Slider = () => {

	return (

		<div className="slider-container">

			<div className="slider-text">
			<h1> Welcome to the Oasis</h1>
			<hr />
			<h2>20% ON ALL SUMMER TOYS  </h2>


				<div className='CTA'>
					<NavLink to='/products'>
					<button> Browse all </button>
					</NavLink>
				</div>
			</div>

		</div>



	)
}

export default Slider