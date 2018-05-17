import TecherBase from '../practice_6/teacher';
export default class Teacher extends TecherBase {

    get classNumber() {
        return this.klass? `${this.klass.classNumber}`:'';
    }
    introduceWith(student) {
        let str = student.klass.classNumber === this.classNumber? `I teach ${student.name}.` : `I don't teach ${student.name}.`
        return `${this.base_introduce()} I am a Teacher. ${str}`
    }

}
