let textObj = {
    strText: "Hello World thousand times!",
    myFunc: function(){
        return this.strText;
    }
}

console.log(textObj.myFunc());

const rect = {
    length: 5,
    height: 7,
    location: {
        x: 11,
        y:12
    },
    area: function(){
        return this.length * this.height
    }
}

const rect1 = {
    length: 5,
    height: 6,
    location: {
        x: 11,
        y:12
    },
    area: function(){
        return this.length * this.height
    }
}

console.log(rect.area());

function Circle(radius) {
  console.log('this',this);
  this.radius = radius;
  this.area = function(){
    return 3.1417 * ( this.radius * this.radius);
  }	  
}	
cirleObj = new Circle(2);
console.log(cirleObj.area());