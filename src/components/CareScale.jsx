import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div className='flex flex-row my-1' onClick={() => handleClick(careType, scaleValue)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()} >{scaleType}</span>
				) : null
			)}
		</div>
	)
}

function handleClick(careType, range) {
	let message = "Cette plante requiert ";

	switch(range) {
		case 1 : 
			message += "peu ";
			break;
		case 2: 
			message += "modérément ";
			break;
		case 3:
			message += "beaucoup ";
			break;
	}

	message += (careType === 'light') ? "de lumière " : "d'arrosage ";

	alert(message);
}

export default CareScale