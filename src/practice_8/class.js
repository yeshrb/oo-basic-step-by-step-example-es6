import ClassBase from '../practice_7/class';

export default class Class extends ClassBase {
    assignLeader(student) {
        if (student.klass === this)
            this.leader = student;
        return;
    }

}
