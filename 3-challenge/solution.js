function findNaughtyStep(original, modified) {
    let i = 0;
    do {
        if (original[i] !== modified[i]) {
            return original.length > modified.length ? original[i] : modified[i]
        }

        i++;
    } while (original[i] || modified[i]);

    return "";
}


let original = 'abcd';
let modified = 'abcde';
console.log(findNaughtyStep(original, modified)); // 'e'

original = 'stepfor';
modified = 'stepor';
console.log(findNaughtyStep(original, modified)); // 'f'

original = 'abcde';
modified = 'abcde';
console.log(findNaughtyStep(original, modified)); // ''