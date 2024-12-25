function сalc(operation, a, b) {
    if (operation == 'add')
        return console.log(a + b);
    else if (operation == 'multi')
        return console.log(a - b);
    else if (operation == 'subtract')
        return console.log(a * b);
    else
        return console.log('Неизвестная команда');
}

сalc('add', 5, 3);
сalc('multi', 45, 3);
сalc('subtract', 15, 3);
сalc('kek', 15, 88);

function сalc(operation, a, b) {
    switch (operation) {
        case 'add':
            console.log(a + b);
            break
        case 'multi':
            console.log(a - b);
            break
        case 'subtract':
            console.log(a * b);
            break
        default:
            console.log('Неизвестная команда');
    }
}

сalc('add', 11, 88);
сalc('multi', 31, 7);
сalc('subtract', 5, 11);
сalc('kek', 15, 88);

function brow(browser) {
    switch (browser) {
        case 'Edge':
            console.log("You've got the Edge!");
            break;

        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
            console.log('Okay we support these browsers too');
            break;

        default:
            console.log('We hope that this page looks ok!');
    }
}

brow('Edg');

function brow(browser) {
    if (browser == 'Edge')
        return console.log("You've got the Edge!");
    else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera')
        return console.log('Okay we support these browsers too');
    else
        return console.log('We hope that this page looks ok!');
}

brow('Edge');
brow('Chrome');
brow('Firefox');
brow('Safari');
brow('Opera');
brow('Internet Explorer');