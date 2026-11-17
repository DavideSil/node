const somma = () => 10 + 2;
const molti = () => 10 * 2;
const div = () => 10 / 2;
const sott = () => 10 - 2;

const operazioni = [somma, molti, div, sott];

for (let i = 0; i < operazioni.length; i++) {
    console.log(operazioni[i]());
}
