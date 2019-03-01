// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement(theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    // for (let i = 0; i < theWordArray.length; i++) {
    //This just made a list complete list of all items 
    // buildMeUp = theWordArray[i];
    //This created an infinite loop, don't ever do this again.
    // let buildMeUp = theWordArray.length ++;
    //This was the solution to Practice: Stacking Words. This will concatenate each index value of an array after another.
    // buildMeUp += theWordArray[i] + " ";
    //}

    //This is the solution to Some words are more exciting than others
    // for (let i = 0; i < theWordArray.length; i++) {
    //     if ((i + 1) % 3 === 0) {
    //         buildMeUp += theWordArray[i] + "!";
    //     } else {
    //         buildMeUp += theWordArray[i] + " ";
    //     }
    //     //Do not put console.log in the if else statement for this exercise, it will cause the moon to disapear!
    //     console.log(buildMeUp);
    // }

}

// Invoke the function and pass in the array
addExcitement(sentence);