import Person from '../practice_1/person';

export default class Person_8 extends Person {
    constructor(num,name,age){
        super(name,age)
        this.id = num;
    }
}


