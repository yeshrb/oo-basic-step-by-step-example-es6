import Student from '../practice_6/student';
export default class StudentWithClass extends Student {
    constructor(name,age,klass){
        super(name,age,klass);

    };
    get className() {
        return this.klass.number;
    }

}

