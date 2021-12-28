module.exports = function toReadable (number) {
  let numArr = number.toString().split('');
  console.log(numArr);
  
  let oneDigit = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let twoDigits = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let tenVariations = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  switch (numArr.length) {
      case 1:
          if (+numArr[0] === 0) {
              return 'zero';
          } else {
          return oneDigit[+numArr[0]];               
          }
      case 2:
          if (+numArr[0] === 1) {
              return tenVariations[+numArr[1]];
          } else if (+numArr[1] != 0) {                 
              return `${twoDigits[+numArr[0]]} ${oneDigit[+numArr[1]]}`;                                 
          } else {
              return twoDigits[+numArr[0]];
          }
      case 3:
          if (+numArr[1] === 1) {
              return `${oneDigit[+numArr[0]]} hundred ${tenVariations[+numArr[2]]}`;
          } else if (+numArr[2] != 0 && +numArr[1] != 0) {                 
              return `${oneDigit[+numArr[0]]} hundred ${twoDigits[+numArr[1]]} ${oneDigit[+numArr[2]]}`;                                 
          } else if (+numArr[2] === 0 && +numArr[1] != 0) {
            return `${oneDigit[+numArr[0]]} hundred ${twoDigits[+numArr[1]]}`;
          } else if (+numArr[1] === 0 && +numArr[2] != 0) {
            return `${oneDigit[+numArr[0]]} hundred ${oneDigit[+numArr[2]]}`;
          } else {
            return `${oneDigit[+numArr[0]]} hundred`;
          }
  }
}
