import CareScale from './CareScale'

function PlantItem({ id, cover, name, water, light }) {
	return (
		<li key={id} className='m-8 mb-2 flex items-start justify-center flex-col capitalize' onClick={(e) => handleClick(e)}>
			<img className='h-56 w-56 rounded-3xl shadow-slate-300 shadow-sm' src={cover} alt={`${name} cover`} />
			<span className='self-center font-medium'>{name}</span>
			<div className='self-center'>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

function handleClick(e) {
	console.log("Ceci est mon événement : ", e);
}

export default PlantItem