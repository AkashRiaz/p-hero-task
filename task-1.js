const reverseStringMaker =(str)=>{
    const reverseResult = str.split("").reduce((acc, char)=> char + acc, "")
   return reverseResult;
}


const result = reverseStringMaker("hello world")

console.log(result)