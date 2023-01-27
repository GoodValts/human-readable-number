module.exports = function toReadable (number) {

    let result = '';

    let numb = Number(number);

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
    console.log(result);

    return result.substring(1);

};