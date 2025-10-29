class Shape{
    area(){
        console.log("Hello")
    }
}

class Rectangle extends Shape{
    width:number
    height:number
    constructor(width:number,height:number){
        super()
        this.width=width
        this.height=height
    }
}
const m =new Rectangle(20,20)
console.log(m.width)
console.log(m.height)
