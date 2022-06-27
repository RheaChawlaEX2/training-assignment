import UrlFetch from './urlFetch.js';
import baseUrl from './baseUrl.js';
import Dom from './dom.js';
import DisplayList from './displayList.js';

export default class List {

    async getList(url, counter = 1) {
        
        const users = new UrlFetch();    
        let dataL = await users.getUserData(url);
        let displayListItems = new DisplayList(dataL.results,counter);
        displayListItems.displayList(dataL.results,counter);
            
    }  
}


