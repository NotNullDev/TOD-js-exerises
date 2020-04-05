const caesar = function(word, lettersToMove) {
    return Array.from(word)
    .map(letter => {

        if(/\W/.test(letter)){
            return letter;
        }

        let letterCode = letter.charCodeAt();
        lettersToMove %= 26;
        let shiftLetter = letterCode + lettersToMove;
    
        if((letterCode <= 90 && shiftLetter > 90) || (letterCode > 90 && shiftLetter> 122)){
            shiftLetter -= 26
        }else if((letterCode <= 90 && shiftLetter < 65) || (letterCode > 90 && shiftLetter < 90)){
            
            shiftLetter += 26
        }

        let newLetter = String.fromCharCode(shiftLetter);
        return newLetter;
    })
    .join("")
}

module.exports = caesar
