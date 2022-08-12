const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '--.--': ' '
};
const o1011translate = {
    '10': '.',
    '11': '-',
    '22': '--.--'
}

function decode(expr) {
    let aSubStings = []
    for (let i = 0; i < expr.length; i = i + 10) {
        aSubStings.push(expr.substr(i, 10))
    }
    const aArrayAsNumber = aSubStings.map(symbol => (symbol === '**********') ? ['2', '2'] : (+symbol + '').split(''))

    const aArrayAsArray = aArrayAsNumber.map(el => {
        return el.map((char, i, ar) => !(i % 2) ? o1011translate[char + ar[i + 1]] : '').filter(elem => elem !== '').join('')
    })
    return aArrayAsArray.map(morse => MORSE_TABLE[morse]).join('')
}

module.exports = {
    decode
}