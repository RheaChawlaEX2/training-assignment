import Dom from "./dom.js"
export default class DisplayList{
    constructor(results,counter){
        this.results = results;
        this.counter = counter;
       
    }
    displayList(results,counter){
   
        let list = new Dom('list','ul');
        let listL = list.getElement('list','ul') ;
        
       listL.innerHTML = "";
         let li = new Dom('li','li');
        let liL = li.create('li','li');

       
        
      
         for(let i=0; i<results.length*counter; i++) {
             
         
                    let div = new Dom('div','div');
                    let divL = div.create('div','div');
                                
                    divL.innerHTML = `<img src=${results[i].picture.thumbnail}>  <p> ${results[i].name.first} ${results[i].name.last} </p>  <p>${results[i].gender}</p> `
                        
                li.appendList(liL,divL);
             
                    list.appendList(listL,liL);        
                } 

    }

   
}
