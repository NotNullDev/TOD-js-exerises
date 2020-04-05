const palindromes = function(wordString) {
    const string = wordString.replace(/\W/g, "").toLowerCase();
    const arrayOfChars = Array.from(string);
    const reversedArray = [...arrayOfChars.reverse()]
    const reversedString = reversedArray.join("");
    if(string === reversedString){
        return true;
    }else{
        return false;
    }
}

module.exports = palindromes
