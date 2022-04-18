import ImageExtraction from "./imageExtraction.js";
import {baseUrl,page} from "./baseUrl.js";




export function responsiveImage() {
    let counter = 0;
    let url = `${baseUrl}${page}`
    console.log(`Test URL = ${url}`);
    
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');

    const list = new ImageExtraction();
    list.imageExtractor(url,counter);
    
    

    prev.onclick = () => {
        counter = counter - 1;
        slideShow(counter)
    }
    next.onclick = () =>{
        counter = counter + 1;
        slideShow(counter)
    }
    
  function  slideShow(num) {
        
        let slides = document.querySelectorAll(".slide");
      
        if (num == slides.length) {
            counter = 0;
            num = 0;
          }
          if (num < 0) {
            counter = slides.length - 1;
            num = slides.length - 1;
          }
        
          for (let slide of slides) {
            slide.style.display = "none";
          }
          slides[num].style.display = "block";
      
      
      }

      let imgBox = document.querySelector('.slider');
      let Interval;
      function interval(){
        Interval = setInterval(() => {
            next.onclick();       
           
         },2000);
        
      }
      interval()

      imgBox.addEventListener('mouseover', () => {
        mouseHover(Interval)   
    });

    imgBox.addEventListener('mouseout', () => {
        Interval = setInterval(() => {
            next.onclick();       
           
         },2000);
    })
   
 

      function mouseHover(Interval){
        
            clearInterval(Interval);
           
        
       
      }
       
   
   
    
   

    
    
          
   
}

export default window.onload = () => {
   
   responsiveImage()
}





