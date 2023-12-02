function manufacture(gifts, materials) {
    const mat = materials.split('').join('|');
    const regex = new RegExp(`${mat}`, 'g');

    return gifts.reduce((acc, val) => {
        if (val.match(regex)?.length === val.length) {
            acc.push(val)
        }
        return acc;
    }, []);
}

let gifts = ['tren', 'oso', 'pelota'];
let materials = 'tronesa';

console.log(manufacture(gifts, materials)); // ["tren", "oso"]

gifts = ['juego', 'puzzle'];
materials = 'jlepuz';

console.log(manufacture(gifts, materials)); // ["puzzle"]

gifts = ['libro', 'ps5'];
materials = 'psli';

console.log(manufacture(gifts, materials)); // []