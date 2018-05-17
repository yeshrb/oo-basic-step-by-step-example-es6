import StudentBase from '../practice_2/student';

export default class Student extends StudentBase {
    introduce(){
        return super.base_introduce()+' '+super.self_introduce();
    }
};
