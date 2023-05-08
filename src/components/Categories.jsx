import { useState } from "react";
import { plantList } from '../datas/plantList';

export default function Categories({categorySelected, changeHandler}){

	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    return (
        <div className="text-center pt-7 ">
		    <select value={categorySelected} onChange={(e) => changeHandler(e.target.value)} className="mr-4">
                <option value="">...</option>
			    {categories.map((cat) => (
				    <option value={cat}>{cat}</option>
			    ))}
		    </select>
            <button onClick={() => changeHandler('')} className="text-white text-sm rounded-full bg-emerald-500 px-3 py-1">Réinitialiser</button>
        </div>
    )

}