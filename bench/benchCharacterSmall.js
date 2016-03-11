import Chance from 'chance';
import sortBench from './util/sortBench';

const chance = new Chance();
export default sortBench('Bench Character Small', chance.n(chance.character, 10));
