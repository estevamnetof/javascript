function factorial(n) {
    var product = 1;
    while(n > 1) {
        product *= n
        n--
    }
    return product
    
}
console.log(factorial(9))