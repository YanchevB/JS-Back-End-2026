import { v4 } from 'uuid'; 
import breeds from './breeds.js';

export function readBreeds() {
    return breeds;
}

export function addBreed(breedName) {
    const newBreed = {
        id: v4(),
        name: breedName
    }

    breeds.push(newBreed);
}

export function getBreedById(id) {
   return breeds.find(breed => breed.id === id).name;
}

export function renderBreedOptions(selectedBreed) {
    return readBreeds().map(breed => `<option value="${breed.id}"${breed.name === selectedBreed ? ' selected ': ''}>${breed.name}</option>`).join('\n');
}