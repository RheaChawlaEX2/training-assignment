

let today = new Date()
 function isWeekend(today) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(today);
        if(today.getDay() == 6 || today.getDay() == 0){
            resolve('true');
        }
        else{
           let weekend = (today.getDay()>0) ? (6 - today.getDay()) : (0 - today.getDay());
           console.log(weekend);
            reject(`Today, is day ${today.getDay()} and Weekend is ${weekend} of days left`);
        }  
        }, 2000,today.getDay());
        return today;
      });
      
}
isWeekend(today).then((resolve) =>{
    resolve('true');
} ).catch((reject) => 
console.log(reject)
)
.finally(() => {
    switch(today.getDay()){
        case 0: console.log('Sunday'); break;
        case 1: console.log('Monday'); break;
        case 2: console.log('Tuesday'); break;
        case 3: console.log('Wednesday'); break;
        case 4: console.log('Thursday'); break;
        case 5: console.log('Friday'); break;
        case 6: console.log('Saturday'); break;
        default: console.log('error')
    }
  
});



