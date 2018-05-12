import TecherBase from '../practice_6/teacher';
export default class Teacher extends TecherBase {
    constructor(name,age,klass) {
        super(name,age,klass);
    }
    get className(){
        return this.klass? `${this.klass.getDisplayName()}` :`No Class`
    }
    introduceWith(student) {
        let str = student.klass.getDisplayName() === this.className? `I teach ${student.name}.` : `I don't teach ${student.name}.`
        return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. ${str}`
    }
}
