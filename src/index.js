module.exports = function toReadable (number) {

    let result = '';
let resDec = '';
let resHund = '';

let numb = Number(number);

let numbDec = numb / 10;
let numbDecRem = numb % 10;

let numbHund = numb / 100;
let numbHundRem = numb % 100;

function numbToWord(n) {
    if (n === 0) {
        return '';
    } else if (n === 1) {
        return ' one';
    } else if (n === 2) {
        return ' two';
    } else if (n === 3) {
        return ' three';
    } else if (n === 4) {
        return ' four';
    } else if (n === 5) {
        return ' five';
    } else if (n === 6) {
        return ' six';
    } else if (n === 7) {
        return ' seven';
    } else if (n === 8) {
        return ' eigth';
    } else if (n === 9) {
        return ' nine';
    } else {
        return ' tooMuch';
    }
};


if (numb === 0) {
    result = 'zero';
} else if (numb === 1) {
    result = 'one';
} else if (numb === 2) {
    result = 'two';
} else if (numb === 3) {
    result = 'three';
} else if (numb === 4) {
    result = 'four';
} else if (numb === 5) {
    result = 'five';
} else if (numb === 6) {
    result = 'six';
} else if (numb === 7) {
    result = 'seven';
} else if (numb === 8) {
    result = 'eigth';
} else if (numb === 9) {
    result = 'nine';
} else if (numb === 10) {
    result = 'ten';
} else if (numb === 11) {
    result = 'eleven';
} else if (numb === 12) {
    result = 'twelve';
} else if (numb === 13) {
    result = 'thirteen';
} else if (numb === 14) {
    result = 'fourteen';
} else if (numb === 15) {
    result = 'fifteen';
} else if (numb === 16) {
    result = 'sixteen';
} else if (numb === 17) {
    result = 'seventeen';
} else if (numb === 18) {
    result = 'eighteen';
} else if (numb === 19) {
    result = 'nineteen';

    //add 20-99//

} else if (numb > 19 && numb < 100) {

    if (Math.trunc(numbDec) === 2) {
        resDec = 'twenty';
    } else if (Math.trunc(numbDec) === 3) {
        resDec = 'thirty';
    } else if (Math.trunc(numbDec) === 4) {
        resDec = 'forty';
    } else if (Math.trunc(numbDec) === 5) {
        resDec = 'fifty';
    } else if (Math.trunc(numbDec) === 6) {
        resDec = 'sixty';
    } else if (Math.trunc(numbDec) === 7) {
        resDec = 'seventy';
    } else if (Math.trunc(numbDec) === 8) {
        resDec = 'eighty';
    } else if (Math.trunc(numbDec) === 9) {
        resDec = 'ninety';
    } else {
        resDec = 'n/d';
    }

    result = resDec + numbToWord(numbDecRem);

} else if (numb > 99 && numb < 1000) {
    if (Math.trunc(numbDec % 10) === 2) {
        resDec = ' twenty';
    } else if (Math.trunc(numbDec % 10) === 3) {
        resDec = ' thirty';
    } else if (Math.trunc(numbDec % 10) === 4) {
        resDec = ' forty';
    } else if (Math.trunc(numbDec % 10) === 5) {
        resDec = ' fifty';
    } else if (Math.trunc(numbDec % 10) === 6) {
        resDec = ' sixty';
    } else if (Math.trunc(numbDec % 10) === 7) {
        resDec = ' seventy';
    } else if (Math.trunc(numbDec % 10) === 8) {
        resDec = ' eighty';
    } else if (Math.trunc(numbDec % 10) === 9) {
        resDec = ' ninety';
    } else {
        resDec = '';
    }

    result = ((numbToWord(Math.trunc(numbHund))) + ' hundred' + resDec + numbToWord(numbHundRem % 10));
    }
    
    return result.substring(1);
    
}