var newArray = [1, "apple", -3, "orange", 0.5];
var arr=[];

function numbersOnly(){
    for(i=0;i<newArray.length;i++)
    { 
        if( typeof newArray[i] === "number")
        {
            arr.push(newArray[i]);
       
        }
        

    }
    console.log("numbers are "+ arr );
}

numbersOnly();
