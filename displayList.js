import Dom from "./dom.js"

import {baseUrl,page } from "./baseUrl.js";


export default class DisplayList{
    constructor(results,counter){
        this.results = results;
        this.counter = counter;
       
    }
    displayList(results,counter){
   
        let list = new Dom('list','ul');
        let listL = list.getElement('list','ul') ;
        
       listL.innerHTML = "";
      
             
            for(let i=0; i<10; i++) {
                    let div = new Dom('div','div');
                    let divL = div.create('div','div');

                    divL.innerHTML = `<img src=${results[i].picture.thumbnail}>  <p> ${results[i].name.first} ${results[i].name.last} </p>  <p>${results[i].gender}</p> `
      
                    list.appendList(listL,divL);   
                      
                } 
    }

    changeUrl(number){
        let url = `${baseUrl}page=${number}`;
      
        return url;

    }
}
