import TecherBase from '../practice_7/teacher';
export default class Techer extends TecherBase {
    constructor(num,name,age,klass){
        super(name,age,klass);
        this.id = num;
    }
}
