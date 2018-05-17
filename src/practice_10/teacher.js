import TecherBase from '../practice_7/teacher';
export default class Techer extends TecherBase {
    constructor(num,name,age,klasses){
        super(name,age);
        this.id = num;
        this.klasses = klasses;
    }
    get classNumber() {
        return this.klasses? `${this.klasses.map((it) => {return it.number }).join(', ')}`:'';
    }
    self_introduce(){
        let classNum = this.classNumber ? `Class ${this.classNumber}` : 'No Class'
        return `I am a Teacher. I teach ${classNum}.`
    }
}
