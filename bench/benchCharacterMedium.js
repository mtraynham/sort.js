import Chance from 'chance';
import sortBench from './util/sortBench';

let chance = new Chance();
export default sortBench('Bench Character Medium', chance.n(chance.character, 100));
