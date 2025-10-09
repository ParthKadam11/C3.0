class cube{
    constructor(height,width,color){
        this.height=height;
        this.width=width;
        this.color=color;      
    }
    area(){
        const Area=this.height*this.width;
        return Area;
    }
    paint(){
        const colorprint=console.log(`The color of the Cube is (${this.color})`);
        return colorprint;
    }
}
const cube1 = new cube(12,6,"blue");
const AreaOfCube = cube1.area();
const kolor = cube1.paint();
console.log(AreaOfCube);
console.log(kolor);



//Note the program returns a undefined because consol.log does not return anything
//You should Use this if you don't want anything undefined on console
// return `The color of the Cube is (${this.color})`










