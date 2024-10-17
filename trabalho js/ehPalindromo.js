function ehPalindromo(str) {
    str = str.toLowerCase();
    
    var strInvertida = "";

    for (var i = str.length - 1; i >= 0; i--) {
        strInvertida += str[i];
    }

    return str === strInvertida;
}

console.log(ehPalindromo("radar")); 
console.log(ehPalindromo("ovo")); 
console.log(ehPalindromo("pena")); 
console.log(ehPalindromo("pedra")); 
console.log(ehPalindromo("arara")); 
