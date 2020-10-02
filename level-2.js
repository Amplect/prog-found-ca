// Question 1


for(var count = 15; count <= 25; count++) {
    if(count % 2 === 0) {
        console.log(count);
    }
}

// Question 2

function logSentence(theSentence) {
    console.log(theSentence);
}

logSentence("I am a function");

var innerFunction = logSentence;

function outerFunction(argumentOne) {
    argumentOne("This is the argument");
}

outerFunction(innerFunction);
