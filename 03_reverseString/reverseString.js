const reverseString = function(string) {
   const array = string.split('');
    let num = array.length;
    let newArray = [];
    let reverseStr = ''
    if (string === '') {
        return reverseStr;
    }
    else {
        for (let i =0; i < num; i++) {
        newArray += array.pop();
    }
    reverseStr= newArray.toString();
    return reverseStr;
    }
};

// Do not edit below this line
module.exports = reverseString;
