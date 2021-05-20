import {useState, useEffect} from 'react'
import Pet from './Pet'
import useBreedList from './useBreedList'
const ANIMALS = [
    'cat',
    'fish',
    'dog',
    'dragon',
    'lion',
    'tiger',
    'rat',
    'snake',
    'bird'
];

const SearchParams = () => {
    const [location,
        updateLocation] = useState("Seattle, WA")
    const [animal,
        updateAnimal] = useState("dog")
    const [breed,
        updateBreed] = useState("")
    const [pets,
        updatePets] = useState([]);
    const [breeds] = useBreedList(animal)

    useEffect(() => {
        requestPets();
    }, []); 

    async function requestPets() {
        const url = `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`;
        const res = await fetch(url)
        const json = await res.json()
        updatePets(json.pets)
    }
    return (
        <div className="search-params">
            <form onSubmit={e => {e.preventDefault(); requestPets()}}>

                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={location}
                        placeholder="Enter Location"
                        onChange={(event) => updateLocation(event.target.value)}/>
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value
                        ={animal}
                        onChange={event => updateAnimal(event.target.value)}
                        onBlur=
                        {event => updateAnimal(event.target.value)}>
                        <option/> {ANIMALS.map(animal => {
                            return (
                                <option value={animal} key ={animal}>
                                    {animal}
                                </option>
                            )
                        })}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        disabled={!breeds.length}
                        id="breed"
                        value={breed}
                        onChange={event => updateBreed(event.target.value)}
                        onBlur={event => updateBreed(event.target.value)}>
                        <option/> {breeds.map(breed => {
                            return (
                                <option key={breed} value={breed}>
                                    {breed}
                                </option>
                            )
                        })}
                    </select>

                </label>

                <button>Submit</button>
            </form>
            {pets.map((pet) => {
           return (
            <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} /> 
           )
       })}



        </div>
    )
}

export default SearchParams