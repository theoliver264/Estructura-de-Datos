class Pila {
    constructor(size){
        this.maxSize = size
        this.tope = 0;
        this.pila = new Array(size)
    }
    push(x){
        if(this.tope < this.maxSize){
            this.tope++
            this.pila[this.tope-1] = x
        } else throw "Stack Overflow"
    }
    pop(){
        let dato
        if(this.tope > 0){
            dato = this.pila[this.tope-1]
            this.pila[this.tope-1] = null
            this.tope--
            this.print()
            return dato
        } else throw "Stack Underflow"
    }
    print(){
        for(let i = this.maxSize - 1; i >= 0; i--) console.log("[ "+ this.pila[i] +" ]")
    }
}

let stack = new Pila(10)
for(let i = 1; i<=10;i++) stack.push(i)
stack.print()