
import List from "./list.js";
import {baseUrl,page} from "./baseUrl.js";

let getPage = page;

export default function loadMain(page = getPage) {
    let url = `${baseUrl}page=${page}`
    console.log(`Test URL = ${url}`);
    const list = new List();
    list.getList(url,page);
}