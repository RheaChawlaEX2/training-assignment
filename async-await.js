let submit = document.getElementById('submit');
let print = document.getElementById('checkDay');

submit.addEventListener('click', () =>{
    let today = document.getElementById('date').value;
    let year = parseInt(today.substring(0,4));
    let month = parseInt(today.substring(5,7)) ;
    let day = parseInt(today.substring(8,10));
    today = new Date(year, month-1, day)
    console.log(today)
    console.log(year,month,day);



/*-------Using Async-Await-----*/
async function isWeekend(today){
    let weekendCheck = new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("/*-------Using Async Await-----*/")
            if(today.getDay() == 6 || today.getDay() == 0){
                resolve('true');
            }
            else{
            let weekend = (today.getDay()>0) ? (6 - today.getDay()) : (0 - today.getDay());
            reject(weekend);
               
            }
           
            
        },2000);
    }) 
    await weekendCheck;
  
}


isWeekend(today).then((resolve) =>{
    let weekend = document.createElement('h5');
    weekend.innerText = `Hey! it's party time!!!`;
    print.appendChild(weekend);
    console.log(`Hey! it's party time!!!`);
    console.log(resolve);
} ).catch((weekend) => {
    let weekday = document.createElement('h5');
    weekday.innerText = `Today, is day ${today.getDay()} and Weekend is ${weekend} of days left`;
    print.appendChild(weekday)


    console.log(`Today, is day ${today.getDay()} and Weekend is ${weekend} of days left`)
})
.finally(() => {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday']
    for(let i=0; i<days.length; i++){
        if(i === today.getDay()){
            let h3 = document.createElement('h3'); 
            h3.innerText = `${days[i]}`;
            print.appendChild(h3)
        } 
    }
  
});
 
});