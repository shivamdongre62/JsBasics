function RectArea(length,breadth){

    if(length <= 0){
        throw new RangeError("Length must be positive");
    }

    if(breadth <= 0){
        throw new RangeError("Breadth must be positive");
    }

    const area = length*breadth;
    console.log("Area of Rect is :",area);
}

RectArea(-10,20);


