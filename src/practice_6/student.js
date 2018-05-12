'use strict';
import Person from '../practice_1/person';

export default class Student extends Person {
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    };

    get className() {
        return `Class ${this.klass}`;
    }
    introduce(){
        return super.introduce() + ` I am a Student. I am at ${this.className}.`;
    }
};
