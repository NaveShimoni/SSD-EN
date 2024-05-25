class MyStack {
    constructor() {
        this.stack = [];
    }

    
    push(element) {
        this.stack.push(element);
    }

   
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack underflow - The stack is empty");
        }
        return this.stack.pop();
    }

  
    isEmpty() {
        return this.stack.length === 0;
    }
}


const stack = new MyStack();
stack.push(10);
stack.push(20);
console.log(stack.pop()); 
console.log(stack.pop()); 