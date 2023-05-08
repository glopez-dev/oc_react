import Banner from './Banner'
import ShoppingList from './ShoppingList'
import logo from '../assets/leaf.png'
import Cart from './Cart'
import Footer from './Footer'
import { useEffect, useState } from 'react'

function App() {
	const savedCart = localStorage.getItem('cart');
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);

	useEffect( 
		() => { localStorage.setItem('cart', JSON.stringify(cart))},
		[cart]
	)

	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className="w-11 h-11" />
				<h1 className='pl-8'>La maison jungle</h1>
			</Banner>
			<div className='flex flex-row'>
				<Cart cart={cart} updateCart={updateCart}/>
				<ShoppingList cart={cart} updateCart={updateCart}/>
			</div>
			<Footer/>
		</div>
	)
}

export default App
