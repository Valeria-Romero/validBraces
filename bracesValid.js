function validBraces(braces){
    let finder = []
    for(let i=0;i < braces.length; i++){
        if ( braces[i] === "(" || braces[i] === "{" || braces[i] === "["){
        finder.push(braces[i])
    } else{
        if(finder.length === 0) return false
        let lastValue = finder[finder.length-1]
        if( (braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '('))
        {
            finder.pop()
        } else {
            break;
            }
        }
    }
    return finder.length === 0;
}

console.log(validBraces("(({}{{)"));
console.log(validBraces("(){}[]"));
