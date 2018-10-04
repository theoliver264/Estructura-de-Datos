class Cola {
    constructor(size){
        this.maxSize = size
        this.front = 0
        this.back = 0
        this.cola = new Array(size)
    }
    insert(x){
        if((this.back === this.maxSize && this.front === 1) || ((this.back + 1) === this.front)){
            throw "Overflow"
        } else {
            if(this.back === this.maxSize){
                this.back = 1
            } else {
                this.back++
            }
            this.cola[this.back - 1] = x
            if(this.front === 0) this.front = 1
        }
    }
    delete(){
        let data
        if(this.front == 0) {
            throw "Underflow"
        } else {
            data = this.cola[this.front - 1]
            this.cola[this.front - 1] = null
            if(this.front === this.back){
                this.front = 0
                this.back = 0
            } else {
                if(this.front === this.maxSize){
                    this.front = 1
                } else {
                    this.front++
                }
            }
        }
        return data
    }
    print(){
        for(let i = 0; i < this.maxSize; i++) console.log("[ "+ this.cola[i] +" ]")
    }
}

let cola = new Cola(10)
for(let i = 1; i<=10; i++) cola.insert(i)