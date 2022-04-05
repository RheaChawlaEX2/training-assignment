import Dom from "./dom.js";
import List from "./list.js";


const baseUrl = "https://randomuser.me/api/";
const button = document.getElementById("submit");


button.addEventListener("click", () => {
    let counter = 1;
    const number = document.getElementById("totalRecords").value;
    const url  = `${baseUrl}?results=${number}`;

    console.log(number)
    const list = new List();
    list.getList(url,1);
    
    let data = new Dom('data','data');
    data = data.getElement('data','data');
    let moreBtn = new Dom('moreBtn','input');
     moreBtn = moreBtn.create('moreBtn','input');
    data.appendChild(moreBtn);
    moreBtn.addEventListener("click", () =>{
        list.getList(url,counter++);
    })
})

