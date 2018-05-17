'use strict';
import StudentBase from '../practice_2/student';

export default class Student extends StudentBase {

    get classNumber() {
        return `${this.klass}`;
    }

    self_introduce() {
        return `I am a Student. I am at Class ${this.classNumber}.`;
    }

    introduce() {
        return this.base_introduce() + ' ' + this.self_introduce();
    }




};
