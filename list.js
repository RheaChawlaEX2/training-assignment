import UrlFetch from './urlFetch.js';
import baseUrl from './baseUrl.js';
import Dom from './dom.js';
import DisplayList from './displayList.js';

export default class List {

    getList(url,counter=1){
        const users = new UrlFetch();
        console.log(baseUrl)
        users.getUserData(url).then((data) => {
        const dataLength = data.results.length; 
        
        let displayListItems = new DisplayList(data.results,counter);
        displayListItems.displayList(data.results,counter);

        return data;
        }).catch((error) => {console.log(error);});           
    }  
}


