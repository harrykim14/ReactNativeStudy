let secretCode = [' + -- + - + - ', ' + --- + - + ', ' + -- + - + - ', ' + - + - + - + '];

let solvedCode = '';
for (var eachCode of secretCode) {
    var replacedCode = eachCode.replace(/ /g, '').replace(/-/g, 0).replace(/\+/g, 1);
    console.log(replacedCode);
    var changed2Num = parseInt(replacedCode, 2)
    console.log(changed2Num);
    var transform2Char = String.fromCharCode(changed2Num);
    console.log(transform2Char);
    solvedCode += transform2Char;
};

console.log("해석된 암호:"+solvedCode);