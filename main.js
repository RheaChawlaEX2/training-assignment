import Dom from "./dom.js";
import List from "./list.js";


const baseUrl = "https://randomuser.me/api/";
const button = document.getElementById("submit");


button.addEventListener("click", () => {
           let counter = 1;
        let number = new Dom('number','totalRecords');
        number = number.getElement('number','totalRecords').value;

        const url  = `${baseUrl}?results=${number}`;
    
        console.log(number)
        const list = new List();
        list.getList(url,1);
        
        let data = new Dom('data','data');
        let dataL = data.getElement('data','data');
        let moreBtn = new Dom('moreBtn','input');
        let moreBtns = moreBtn.create('moreBtn','input');
        moreBtn.setAtt(moreBtns,"type", "button");
        moreBtn.setAtt(moreBtns,"value","More");
        moreBtn.setAtt(moreBtns,'id',"more");
        data.appendList(dataL,moreBtns);
        moreBtns.addEventListener("click", () =>{
            list.getList(url,counter++);
        })
  
})

