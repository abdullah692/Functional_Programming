

// Its length is at least .
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters are: !@#$%^&*()-+


function strongPassCheck(n, password) {
    // Return the minimum number of characters to make the password strong
    let missingType = 0
    
    debugger
    if(!/[0-9]/.test(password)) missingType++;
    if(!/[a-z]/.test(password)) missingType++;
    if(!/[A-Z]/.test(password)) missingType++;
    if(!/[!@#$%^&*()\-\+]/.test(password)) missingType++;
    
    let missingLength = 6-n;
    
    return Math.max(missingLength,missingType)
    
}


const result = strongPassCheck(7,'AUzs-nV')
console.log(result);
