const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let array = expr.split('');
    let arr = [];
    let index = 0;
    arr[0]=array[0];
    let arrs = [];
    let result = '';
    for(let i = 1; i<array.length; i++){
        if(i%10!=0){arr[index]+=array[i];}
        if(i%10==0 && i!=0){index++;}
        if(i%10==0){arr[index]=array[i];}
    }
    for(let i = 0 ; i<arr.length; i++){
        let letter = arr[i].split('');
        let char='';
        if(letter[0]!='*'){
            let letters = [];
            letters[0]=letter[0];
            let index = 0;
            for(let i = 1; i<letter.length; i++){
                if(i%2!=0){letters[index]+=letter[i];}
                if(i%2==0 && i!=0){index++;}
                if(i%2==0){letters[index]=letter[i];}
            }
            for(let i=0; i<letters.length; i++){
                if(letters[i]=='11')char+='-';
                if(letters[i]=='10')char+='.';
            }
            result+=MORSE_TABLE[char];
        }

        if(letter[0]=='*')result+=' ';
        
    }
    return result;
}

module.exports = {
    decode
}
