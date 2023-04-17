function hello() {
    console.log(this);              // global
    console.log(this === global);   // true
}

hello();

class A {
    constructor(num){
        this.num = num;
    }
    memberFunction() {
        console.log('----- object -----');
        console.log(this);
        
    }
}

const a = new A(10);
a.memberFunction();

console.log('----- global scope -----');
console.log(this);
console.log(this === module.exports);








