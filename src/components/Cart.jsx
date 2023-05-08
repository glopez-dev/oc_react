import { useState, useEffect } from 'react'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce( (acc, plantType) => acc + plantType.amount * plantType.price, 0);

	useEffect( 
		() => {document.title = `LMJ : ${total}€ d'achats`},
		[total]
	)

	return isOpen ? (
		<OpenedCart setIsOpen={setIsOpen}>
			<Panier cart={cart} updateCart={updateCart}/>
		</OpenedCart >
	) : (
		<ClosedCart setIsOpen={setIsOpen}/>
	)

}

function OpenedCart({setIsOpen, children}) {
	return (
		<div className='text-white bg-emerald-500 p-8 flex flex-col justify-start w-52'>
			<button className='outline-none border-none cursor-pointer self-end p-0 mb-3 text-white text-xs' onClick={() => setIsOpen(false)}>Fermer</button>
			{children}
		</div>

	)	
}

function ClosedCart({setIsOpen}) {
	return (
		<div className='p-8 w-52'>
			<button className='bg-none outline-none border-none font-semibold cursor-pointer self-start p-0 text-black' onClick={() => setIsOpen(true)}>
				Ouvrir le Panier
			</button>
		</div>
	)
}

function Panier({cart, updateCart}) {

	const total = cart.reduce( (acc, plantType) => acc + plantType.amount * plantType.price, 0);


	if (cart.length > 0) {
		return (
			<div className='h-1/3 flex flex-col justify-around'>
				<div>
					<h2 className='text-xl font-semibold mb-2'>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<li key={`${name}-${index}`} className='text-sm py-2 '>
								{capitalize(name)} {price}€ x {amount}
							</li>
						))}
					</ul>
					<h3 className='text-md font-medium mb-3'>Total : {total}€</h3>
				</div>
				<button onClick={() => updateCart([])} className='px-2 py-1 text-xs bg-emerald-600 rounded-full'>Vider le panier</button>
			</div>
		)
	} else {
		return <div>Votre panier est vide</div>;
	}
}

function capitalize(str) {
  return str.replace(/\b\w/g, function(l){ return l.toUpperCase(); });
}




export default Cart