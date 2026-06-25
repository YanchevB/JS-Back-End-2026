import cats from './cats.js';

export function getCatById(catId) {
    return cats.find(cat => cat.id === catId);
}