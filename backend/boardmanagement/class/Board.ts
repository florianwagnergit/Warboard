import { Field } from './Field';

export class Board {

    matrix: Field[][];

    constructor(size) {
        this.matrix = [];
        for(let x = 0; x < size; x++) {
            this.matrix.push([]);
            for(let y = 0; y < size; y++) {
                this.matrix[x].push(new Field(x, y)); 
            }
        }
    }
}