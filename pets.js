// var myPets = 'Ellie & Charlie';

// if (isNaN(myPets)) {
// myPets = false;
// }

['Ellie', 'Charlie', false, true, 0, 1, '1', "etc"].forEach(x => { console.log(x, !isNaN(x)) })


var input = "jenny@wickedlysmart.com";
for (var i = 0; i < input.length; i++) {
    if (input.charAt(i) === "@") {
        console.log("There's an @ sign at " + (i + 1));
    }
}
"jenny@wickedlysmart.com".split('').forEach(function (v, i) {
    if (v === '@') {
        console.log('There\'s an @ sign at ' + (i + 1))
    }
})
"jenny@wickedlysmart.com".split('').forEach((v, i, a) => {
    v === '@' && console.log('There\'s an @ sign at ' + (i + 1) + ' in the email ' + a.join(""))
})