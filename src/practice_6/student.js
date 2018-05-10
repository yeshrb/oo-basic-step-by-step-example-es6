'use strict';
import Person from '../practice_1/person';

export default class Student extends Person {
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    };

    get classNumber() {
        return this.klass;
    }
    introduce(){
        return super.introduce() + ` I am a ${this.name}. I am at Class ${this.classNumber}.`;
    }
};
