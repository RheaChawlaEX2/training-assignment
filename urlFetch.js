export default class UrlFetch{
    constructor(url){
        this.url = url;        
    }
    getUserData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}
