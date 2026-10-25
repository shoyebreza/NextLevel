// javascript scoope 

// global scope
var globalVar = "I am a global variable";

function accessGlobalVar() {
    console.log(globalVar);
}

accessGlobalVar();

// local scope
function localScopeExample() {
    var localVar = "I am a local variable";
    console.log(localVar);
}

localScopeExample();


// block scope
if (true) {
    let blockVar = "I am a block-scoped variable";
    console.log(blockVar);
}

console.log(blockVar); // This will throw an error because blockVar is not accessible outside the block