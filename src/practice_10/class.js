import ClassBase from '../practice_7/class';

export default class Class extends ClassBase {
    assignLeader(student) {
        if (student.klass === this)
            this.leader = student;
        console.log("It is not one of us.");
    }
    appendMember(student) {
        student.klass = this;
    }

}
