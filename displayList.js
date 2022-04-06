import Dom from "./dom.js"
import List from "./list.js"
import {baseUrl,page } from "./baseUrl.js";
import loadMain from './main.js';

export default class DisplayList{
    constructor(results,counter){
        this.results = results;
        this.counter = counter;
       
    }
    displayList(results,counter){
   
        let list = new Dom('list','ul');
        let listL = list.getElement('list','ul') ;
        
       listL.innerHTML = "";
      
        //  for(let i=0; i<results.length*counter; i++) {
             
            for(let i=0; i<10; i++) {
                    let div = new Dom('div','div');
                    let divL = div.create('div','div');
                    
                    // console.log(i);
                    // console.log(`1. = ${i} = ${results[i].picture.thumbnail}`);
                    // console.log(`2. = ${i} = ${results[i].name.first}`);
                    // console.log(`3. = ${i} = ${results[i].name.last}`);
                    // console.log(`4. = ${i} = ${results[i].gender}`);

                    divL.innerHTML = `<img src=${results[i].picture.thumbnail}>  <p> ${results[i].name.first} ${results[i].name.last} </p>  <p>${results[i].gender}</p> `
                        
                
                   
                    list.appendList(listL,divL);   
                      
                } 
              //  this.addButtons(list,listL)   ;
                

    }
    /*addButtons(list,listL){
        for(let i = 1; i <=10; i++){
            let butts = new Dom('butts','button');
            let button = new Dom('button','buttons')
            let buttons = button.getElement('button','buttons') ;
       
            let pagination = butts.create('butts','button');
            pagination.innerText = i;
            pagination.addEventListener('click',()=>{

                // console.log("Test");
                
                console.log("page",i);

                loadMain(i);
                 
                // let user = new List(this.changeUrl(i),page)
                // user.getList(this.changeUrl(i),page);
                
                

            })
            butts.appendList(buttons,pagination);
            list.appendList(listL,buttons);          
        }  
    }*/
    changeUrl(number){
        let url = `${baseUrl}page=${number}`;
      
        return url;

    }
}
