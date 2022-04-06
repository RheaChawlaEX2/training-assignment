let today = new Date()
/*-------Using Async-Await-----*/
async function isWeekend(today){
    let weekendCheck = new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("/*-------Using Async Await-----*/")
            if(today.getDay() == 6 || today.getDay() == 0){
                resolve();
            }
            else{
            let weekend = (today.getDay()>0) ? (6 - today.getDay()) : (0 - today.getDay());
            reject(weekend);
                reject()
            }
           
            
        },2000);
    }) 
    await weekendCheck;
  
}



isWeekend(today).then((resolve) =>{
    console.log(`Hey! it's party time!!!`);
} ).catch((weekend) => 
console.log(`Today, is day ${today.getDay()} and Weekend is ${weekend} of days left`)
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
