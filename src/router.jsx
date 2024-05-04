// In router.jsx
import { createHashRouter } from 'react-router-dom'
import Root from './components/Root.jsx';

import Cart from './components/ShoppingCart/Cart.jsx';
import EditPage from './components/EditPage.jsx';
import LandingPage from './components/LandingPage.jsx';
LandingPage
import Login from './components/Login/Login.jsx';
import AllProducts from './components/AllProducts/AllProducts.jsx';

// import NotFoundPage from './components/NotFoundPage.jsx';

const router = createHashRouter([
	{
		path: "/",
		element: <Root />,
		children: [

			{
				path: "/cart",
				element: <Cart />
			}
			,
			{
				path: "/edit",
				element: <EditPage />
			}
			,
			{
				path: "/products",
				element: <AllProducts />
			}
			,
			{
				path: "/login",
				element: <Login />
			}
			,


			{
				path: "/",
				element: <LandingPage />
			}

		]	// errorElement: <NotFoundPage />
	}
]);

export { router };
