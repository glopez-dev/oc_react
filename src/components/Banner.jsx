import logo from '../assets/leaf.png';

function Banner({ children }) {
	return (
        <div className="black text-right text-xl font-bold p-8 border-b-2 border-solid border-black flex justify-end flex-row items-center">
            {children}
        </div> 
    );
}

export default Banner
