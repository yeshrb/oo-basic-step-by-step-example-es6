'use strict';
import Person from '../practice_1/person';

export default class Teacher extends Person {
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }

    get className(){
        return this.klass;
    }
    introduce(){
        let clss = this.className? `Class ${this.className}` :`No Class`
        return super.introduce() + ` I am a Teacher. I teach ${clss}.`;
    }
};
