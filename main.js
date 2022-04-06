import Dom from "./dom.js";
import DisplayList from "./displayList.js";
import List from "./list.js";
import {baseUrl,page} from "./baseUrl.js";

let getPage = page

export default function loadMain(page = getPage) {
    let url = `${baseUrl}page=${page}`
    console.log(`Test URL = ${url}`);
    // let url = `${baseUrl}page=2`;  
    const list_l = new List(url,page);
    list_l.getList(url,page);
}