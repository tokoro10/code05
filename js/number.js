function isEvenNumber(number){
    return number%2==0;
    
}

function isAcceptableNumber(numer){
    return (number % 2 != 0) && (number % 3 != 0);
}

function isMultipleOf5(number){
    if (number % 5 == 0){
        return 1;
    } else {
        return 0;
    }
    
}

function divideBy2(number){
    var result;
    if(number % 2 == 1){
        result = (number + 1) / 2;
    } else {
        result = number / 2;
    }
    return result;
    
}
