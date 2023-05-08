import { useState } from 'react'

function Footer() {
	const [inputValue, setInputValue] = useState('')

    function handleChange(e) {
        e.preventDefault();
        setInputValue(e.target.value);
    }

    function handleBlur(e) {
        if(! e.target.value.includes('@'))
            alert("Attention, Il n'y a pas d'@ ceci n'est pas une adresse valide !");
    }

	return (
		<footer className='text-black p-8 border-t-2 border-black flex justify-start flex-col items-center font-medium'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='mb-3'>Laissez-nous votre mail :</div>
            <form >
                <input placeholder='Entrez votre mail' value={inputValue} onChange={handleChange} onBlur={handleBlur} className='border-2 border-black'/>
            </form>
		</footer>
	)
}



export default Footer