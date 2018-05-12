import TecherBase from '../practice_6/teacher';
export default class Teacher extends TecherBase {
    constructor(name,age,klass) {
        super(name,age,klass);
    }
    get className(){
        return this.klass.getDisplayName();
    }
}
