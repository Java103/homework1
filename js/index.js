//პირველი დავალება
//if else მეთოდით:

let speed = 100;

if(speed < 50) {
    console.log("ნაკლებია 50-ზე")
}
else if(speed > 20) {
    console.log("მეტია 20-ზე")
}
else {
    console.log("შეცდომა")
}

//ternary ოპერატორის მეთოდით:

let age = 100;

let check = age < 50 ? "ნაკლებია 50-ზე" : "მეტია 50-ზე" 

console.log(check);






//მეორე დავალების დასაწყისი

let name = "მარიამ";

if(name == "მარიამ") {

    console.log("true") 
}
else {

    console.log("false")
}





//მესამე დავალება

let nickname = "მარიამ";

switch(nickname){

    case "მარიამ":
    console.log("true")
    break;

    default:
    console.log("false")

}



//მეოთხე დავალება

let cash = 25;

console.log(typeof 25)



//მეხუთე დავალება

let number = 10;

String(number)



