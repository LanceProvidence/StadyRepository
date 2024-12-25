function checkAge(age) {
    if (age < 18)
        console.log('You are not allowed')
    else
        console.log('You are welcome!')
}

checkAge(1);

function сalc(operation, a, b) {
    if (operation == 'add')
        return console.log(a + b);
    else if (operation == 'multi')
        return console.log(a - b);
    else if (operation == 'subtract')
        return console.log(a * b);
}

сalc('add', 5, 3);
сalc('multi', 45, 3);
сalc('subtract', 15, 3);