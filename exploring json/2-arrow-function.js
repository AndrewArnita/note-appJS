// const squarefunction = function(x){
//     return x * x
// }


// //using the square function 1:
// const squareFunction = (x) =>{
//     return x * x
// }

//if only one argument:
// const squareFunction = (x) => x * x
// console.log(squareFunction(4))

const event = {
    name:"Andrew",

    //this doesnt work bcz => doesnt have a this. parameter
    // printHBD: () => {
    // console.log("Happy birthday goes to " + this.name)
    // }

    //so in order to work we do this:
    guestList: ["Omar", "Rayan", "Hatem"],
    printHBD() {
        console.log("Happy birthday goes to " + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + " is attending " + this.name + "'s birthday party!" )
        })
    }
}

event.printHBD()


