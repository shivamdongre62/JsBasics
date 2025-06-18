function SmallestAmongThreeNumber(a,b,c){
    if(a === b || b === c || a === c){
        console.log("Same Numbers present");
    }
    else{


   if(a<b && a<c){
    console.log("a is smaller");
   }
   else if(b<c){
    console.log("b is smaller");
   }
   else{
    console.log("c is smaller");
   }
       }
}

SmallestAmongThreeNumber(10,11,12);
SmallestAmongThreeNumber(11,10,12);
SmallestAmongThreeNumber(11,12,10);
SmallestAmongThreeNumber(10,10,10);
SmallestAmongThreeNumber(9,10,9);
