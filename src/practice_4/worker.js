import Person from './person';
export default class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    introduce() {
        return super.introduce() + ` I am a Worker. I have a job.`;
    }
}
