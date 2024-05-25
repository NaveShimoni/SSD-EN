class Person {
    constructor(id, name) {
        this._id = id; 
        this._name = name; 
    }

    
    getId() {
        return this._id;
    }

    
    setId(id) {
        this._id = id;
    }

   
    getName() {
        return this._name;
    }

    
    setName(name) {
        this._name = name;
    }
}


class Student extends Person {
    constructor(id, name, average) {
        super(id, name); 
        this._average = average; 
    }


    getAverage() {
        return this._average;
    }

 
    setAverage(average) {
        this._average = average;
    }
}


const students = [
    new Student(1, "Dan", 85),
    new Student(2, "Israel", 92),
    new Student(3, "Lior", 88),
    new Student(4, "Omer", 95),
    new Student(5, "Dor", 91)
];


const excellentStudents = students.filter(student => student.getAverage() > 90);


excellentStudents.forEach(student => {
    console.log(`ID: ${student.getId()}, Name: ${student.getName()}, Average: ${student.getAverage()}`);
});
