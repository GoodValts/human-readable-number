let result = '';
let resDec = '';
let resHund = '';

let numb = 719; //Number(number);

/*let numbDec = numb / 10;
let numbDecRem = numb % 10;

let numbHund = numb / 100;
let numbHundRem = numb % 100;*/

/*let str = numb.toString();

console.log(str);

let arr = str.split('');

console.log(arr);

arrReverse = arr.reverse()

console.log(arrReverse);

wordArr = arrReverse.map(x => numbToWord(parseInt(x)));
console.log(wordArr);*/

function singleNumbToWord(n) {
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
        return ' eight';
    } else if (n === 9) {
        return ' nine';
    } else {
        return ' tooMuch';
    }
};

function doubleNumbToWord(n) {
    if (n === 0) {
        return ''
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
        return ' eight';
    } else if (n === 9) {
        return ' nine';
    } else if (n === 10) {
        return ' ten';
    } else if (n === 11) {
        return ' eleven';
    } else if (n === 12) {
        return ' twelve';
    } else if (n === 13) {
        return ' thirteen';
    } else if (n === 14) {
        return ' fourteen';
    } else if (n === 15) {
        return ' fifteen';
    } else if (n === 16) {
        return ' sixteen';
    } else if (n === 17) {
        return ' seventeen';
    } else if (n === 18) {
        return ' eighteen';
    } else if (n === 19) {
        return ' nineteen';
    } else if (Math.trunc(n / 10) === 2) {
        return ' twenty' + singleNumbToWord(n % 10);
    } else if (Math.trunc(n / 10) === 3) {
        return ' thirty' + singleNumbToWord(n % 10);
    } else if (Math.trunc(n / 10) === 4) {
        return ' forty' + singleNumbToWord(n % 10);
    } else if (Math.trunc(n / 10) === 5) {
        return ' fifty' + singleNumbToWord(n % 10);
    } else if (Math.trunc(n / 10) === 6) {
        return ' sixty' + singleNumbToWord(n % 10);
    } else if (Math.trunc(n / 10) === 7) {
        return ' seventy' + singleNumbToWord(n % 10);
    } else if (Math.trunc(n / 10) === 8) {
        return ' eighty' + singleNumbToWord(n % 10);
    } else if (Math.trunc(n / 10) === 9) {
        return ' ninety' + singleNumbToWord(n % 10);
    } else {
        return ' tooMuchDouble' + singleNumbToWord(n % 10);
    }
};

if (numb === 0) {
    result = ' zero'
} else if (numb > 0 && numb < 10) {
    result = singleNumbToWord(numb);
} else if (numb > 9 && numb < 100) {
    result = doubleNumbToWord(numb)
} else if (numb > 99 && numb < 1000) {
    result = singleNumbToWord(Math.trunc(numb / 100)) + ' hundred' + doubleNumbToWord(numb - (Math.trunc(numb / 100) * 100));
};

console.log(numb);
console.log(numb / 10);
console.log(result);

/*
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

console.log(numb);
console.log(numbToWord(Math.trunc(numbHund)));
console.log(resDec);
console.log(numbDec);
console.log(result)*/