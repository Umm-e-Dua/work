
// function Overloading
function sum(a:number,b:number):number
function sum(a:string,b:string):string 


function sum (a:string|number,b:string|number): string|number {
if (typeof a == "number" && b =="number") {
    return a + b
} else
return  `${a} ${b}`
} 
sum(1,1)
sum("faryal","aira")
