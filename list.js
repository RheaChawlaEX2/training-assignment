import UrlFetch from "./urlFetch.js";
import DisplayList from "./displayList.js";
import Dom from "./dom.js";

export default class List {

    getList(url,page){
      
        let list = new Dom('list','ul');
        let listL = list.getElement('list','ul') ;
        const users = new UrlFetch();
        console.log(url)

        users.getUserData(url).then((data) => {
        
        let displayListItems = new DisplayList(data.results,page);
        displayListItems.displayList(data.results,page);
       
        console.log("List Log")

       
      return data;
        }).catch((error) => {console.log(error);});           
    }  
   

    
}