import { plantList } from '../datas/plantList';
import PlantItem from './PlantItem';
import Categories from './Categories';
import { useState } from 'react';

function ShoppingList({cart, updateCart}) {

	const [categorySelected, setCategorySelected] = useState('');
	let plantToDisplay = plantList;

	if (categorySelected)
		plantToDisplay = plantList.filter( (plant) => plant.category === categorySelected);

	function addToCart(name, price) {
		const currentPlantSaved = cart.find( (plant) => plant.name === name);

		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter( (plant) => plant.name !== name);
			updateCart([
				...cartFilteredCurrentPlant,
				{name, price, amount: currentPlantSaved.amount + 1}
			])
		} else {
			updateCart([
				...cart,
				{name, price, amount: 1}
			])
		}
	}

	return (
		<div className='w-full p-5 flex flex-col justify-center items-center'>
			<Categories categorySelected={categorySelected} changeHandler={setCategorySelected}/>
			<ul className='p-8 flex flex-wrap max-w-5xl'>
				{plantToDisplay.map(({ id, cover, name, water, light, price }) => (
                    <div key={id} className='flex flex-col justify-center items-center'>
                        <PlantItem cover={cover} name={name} water={water} light={light} price={price} />
                        <button onClick={() => addToCart(name, price)} className='text-xs text-white px-2 py-1 w-fit bg-emerald-500 rounded-full'>Ajouter</button>
                    </div>
				))}
			</ul>
		</div>
	)
}

function Promotion({plant}) {
    if (plant.isSpecialOffer)
        return <div className='absolute right-0 top-3 font-medium py-1 px-3 bg-emerald-500 rounded-t-xl rounded-r-xl'>Soldes</div>
}



export default ShoppingList