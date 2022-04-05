import UrlFetch from './urlFetch.js';
import baseUrl from './baseUrl.js';
import Dom from './dom.js';

export default class List {

    getList(url,counter=1){
        const users = new UrlFetch();
        console.log(baseUrl)
        users.getUserData(url).then((data) => {
        const dataLength = data.results.length; 
        let list = new Dom('list','ul');
       let listL = list.getElement('list','ul') 
       
        for(let i=0; i<dataLength*counter; i++) {
            let li = new Dom('li','li');
             let liL = li.create('li','li');
            
            let div = new Dom('div','div');
            let divL = div.create('div','div');
                        
            divL.innerHTML = `<img src=${data.results[i].picture.thumbnail}>  <p> ${data.results[i].name.first} ${data.results[i].name.last} </p>  <p>${data.results[i].gender}</p> `
                
        li.appendList(liL,divL);
      //      li.appendChild(div);
            console.log(li)
            list.appendList(listL,liL);        
        }        
        return data;
        }).catch((error) => {console.log(error);});           
    }  
}


