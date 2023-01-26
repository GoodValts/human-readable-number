module.exports = function toReadable (number) {
    
    let result = '';

    let numb = Number(number);
    
    let numbDec = numb / 10;
    let numbDecRem = numb % 10;

    let numbHund = numb / 100;
    let numbHundRem = numb % 100;

        //add 0-19//

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
        
        //add 20-29//
        if ((numbDec === 2) && (numbDecRem === 0)) {
            result = 'twenty';
        } else {
            result = 'twenty' + numb / 10;
        }
    } else {result = 0;}

    return result;
}
 console.log(result)