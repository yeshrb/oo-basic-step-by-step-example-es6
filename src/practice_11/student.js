import Student from '../practice_6/student';

export default class Student_8 extends Student {
    constructor(num, name, age, klass) {
        super(name, age, klass);
        this.id = num;
    };

    get classNumber() {
        return `${this.klass.classNumber}`;
    }

    get isLeader() {
      return ((!this.klass.leader ) ? false : (this.klass.leader.id === this.id));
    }


    leader_introuduce() {
        return `I am Leader of Class ${this.classNumber}.`;
    }

    self_introduce() {
       return 'I am a Student. '+((this.isLeader)? this.leader_introuduce() : `I am at Class ${this.classNumber}.`);
    }
    equal(obj) {
        if (obj instanceof Student) {

            var result = true;
            for (let k in this) {
                if (this[k] != obj[k]) {
                    result = false;
                    break;
                }
            }
            return result;
        }
        else
        {

            return false;
        }

    }

}

