
import UrlFetch from "./urlFetch.js";

export default class ImageExtraction{    
    imageExtractor(url){
        
        const imageData = new UrlFetch();
        imageData.getUserData(url).then((data) => {
            
                let dataList = [];
                let imageSlider = document.querySelector('.slider');                
                for(let i = 0; i < data.results.length; i++){
                    
                    let div = document.createElement('div');
                    div.className = 'slide';
                    let img = document.createElement('img');
                    dataList[i] = data.results[i].picture.large;
                    div.appendChild(img);
                    img.src = data.results[i].picture.large;
                    div.style.display= "none";
                    imageSlider.appendChild(div);
                   
                   
                }
    
        return data;
        }).catch((error) => {console.log(error);});           
        
    }
   
   

    


}