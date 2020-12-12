class Polygon {
  constructor(arr){
    this.arr = arr;
  }
  get countSides() {
    return this.arr.length;
  }
  get perimeter(){
    return this.arr.reduce((acc, val) => {return acc + val});
  }
}

class Triangle extends Polygon{
  get isValid(){
    for(let i=0; i<this.arr.length;i++){
      if(this.arr[i]<(this.arr[i+1]+this.arr[i+2]));
    }
  }
}

class Square extends Polygon{
  get isValid(){
    
  }
  get area(){
    if(isValid){
      return this.arr[0]*this.arr[0];
    }
  }
}