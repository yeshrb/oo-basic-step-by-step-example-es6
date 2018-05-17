'use strict';
import Person from '../practice_1/person';

export default class Teacher extends Person {
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }

    get classNumber(){
        return this.klass? `${this.klass}` :``
    }
    self_introduce(){
        let classNum = this.classNumber ? `Class ${this.classNumber}` : 'No Class'
        return `I am a Teacher. I teach ${classNum}.`
    }
    introduce(){
        return this.base_introduce() + ' '+this.self_introduce();
    }
};
