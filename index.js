import ImageExtraction from "./imageExtraction.js";
import {baseUrl,page} from "./baseUrl.js";

let url = `${baseUrl}${page}`
console.log(`Test URL = ${url}`);
let i = 0;
let imageSlider = document.querySelector('.slider');
let image = document.querySelector('#img-box');

const list = new ImageExtraction();
let Interval;


//extract(url,i);
list.imageExtractor(url,i);


image.addEventListener('mouseout', () => {
   Interval = setInterval( () => {
    extract(url,i)
    
    } ,2000);
    if(i<=3){
        list.imageExtractor(url,i++)
        
    }
    else{
        list.imageExtractor(url,i=0)
      
    
    }

    
});


imageSlider.addEventListener('mouseover', () => {
   clearInterval(Interval);
   extract(url,i);
   
})




function extract(url,i){
   
       
    prev.addEventListener("click", () => {
        if(i < 0) i = 4;	
            i--;
        list.imageExtractor(url,i);
    })
    next.addEventListener("click", () => {
        if(i >= 3) i = -1;
        i++;
        list.imageExtractor(url,i);
    })
   
} 





 

