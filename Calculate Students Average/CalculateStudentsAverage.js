function Student(name,id,average) {
    this.name = name;
    this.id = id;
    this.average = average;
}


function calculateAverage() {

    let total = 0;

    for (i = 0; i < arguments.length; i++) {
        total += arguments[i].average;
    }

    return total / arguments.length;
}

console.log(calculateAverage(
    new Student("tal",234,58),
    new Student("ron",456,78),
    new Student("john",678,88),
    new Student("jack",567,80)));