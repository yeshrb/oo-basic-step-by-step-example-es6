import Person from '../practice_1/person';

export default class Teacher extends Person {
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }

    introduce(){
        let clss = this.klass? `Class ${this.klass}` :`No Class`
        return super.introduce() + ` I am a Teacher. I teach ${clss}.`;
    }
};
