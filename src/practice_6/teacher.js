'use strict';
import Person from '../practice_1/person';

export default class Teacher extends Person {
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }

    get className(){
        return this.klass? `Class ${this.klass}` :`No Class`
    }
    introduce(){
        return super.introduce() + ` I am a Teacher. I teach ${this.className}.`;
    }
};
