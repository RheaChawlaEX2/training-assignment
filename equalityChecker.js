
export default class EqualityChecker{

    isEqualToRandomNumber(guessNumber,randomNumber){
        if(guessNumber === randomNumber){
            return 2;
        }
        else if(guessNumber === randomNumber-1 || guessNumber === randomNumber+1){
            return 1;
        }
        else{
            return 0;
        }
    }
}