let textObj = {
strText: "Hello World thousand times!",
    myFunc: function(){
        return this.strText;
    }
}

console.log(textObj.myFunc());