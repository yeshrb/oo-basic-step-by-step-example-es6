import ClassBase from '../practice_7/class';

export default class Class extends ClassBase {
    assignLeader(student) {
        if (student.klass === this) {
            this.leader = student;
            if(this.teacher)
                console.log(`${this.listenerIntroduce()} I know ${student.name} become Leader of Class ${this.number}.`);        }

        console.log("It is not one of us.");
    }
    appendMember(student) {
        student.klass = this;
        if(this.teacher)
            console.log(`${this.listenerIntroduce()} I know ${student.name} has joined Class ${this.number}.`);
    }
    registerAssignLeaderListener(teacher) {
        this.registerListener(teacher);
    }
    registerJoinListener(teacher){
        this.registerListener(teacher);
    }
    registerListener(teacher){
        this.teacher = teacher;
    }
    listenerIntroduce(){
        return `I am ${this.teacher.name}.`
    }

}
