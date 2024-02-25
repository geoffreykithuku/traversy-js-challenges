function isPalindrome(str) {
   
    function reverseString(str) {
        let reversed = ''
        for (let i = str.length - 1; i >= 0; i--) {
            if (str[i] === ' ' || str[i] == ',') {
                continue
            }
            
            reversed += str[i]
        }
        return reversed.toLowerCase()
    }

    let reversed = reverseString(str)
    let original = reversed.split('').reverse().join('')

    return reversed === original

}

module.exports = isPalindrome;

