class Student {
    constructor(id, name, surname, dob, avatar) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.dob = dob;
        this.avatar = avatar;
    }

    get dateOfBirth(){
        return new Date(this.dob);
    }

    set dateOfBirth(value){
        this.dob = value.toISOString();
    }

    static fromObj(obj){
        return new Student(obj.id, obj.name, obj.surname, obj.dob, obj.avatar)
    }

    getDayToBirthday(){
        const today = new Date().getTime();
        const bday = this.dateOfBirth.getTime();
        const diff = today - bday;
        const days = Math.floor(diff/1000/60/60/24);
        const daysToBday = 365 - (days%365);
        return daysToBday;
    }
}