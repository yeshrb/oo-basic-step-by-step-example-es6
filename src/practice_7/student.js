import Student from '../practice_6/student';
export default class StudentWithClass extends Student {

    get classNumber() {
        return `${this.klass.number}`;
    }

}

