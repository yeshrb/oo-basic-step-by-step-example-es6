export default class Class {
    constructor(num){
        this.number = num;
    }
    getDisplayName() {
        return `Class ${this.classNumber}`;
    }
    get classNumber(){
        return `${this.number}`;
    }
}
