console.log("// EXERCISE #1 \\")
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(list, string) {
    for( i = 0; i < list.length; i++) {
        if(string.includes(list[i])){
            console.log( `matched: ${list[i]}`)
        }else{
            console.log("No Matches")
        }
    }
}

findWords(dog_names, dog_string)



console.log("// EXERCISE #2 \\")

let list = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (i = 0; i < list.length; i++) {
        if ( i % 2 ==0) {
            list.splice(i, 1, "Even Index")
        }
    }
    return list
}
console.log(replaceEvens())