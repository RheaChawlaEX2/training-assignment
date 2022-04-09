import UrlFetch from "./urlFetch.js";

export default class ImageExtraction{    
    imageExtractor(url,i){
        
        const users = new UrlFetch();
        console.log(url)

        users.getUserData(url).then((data) => {

            let imgClass = document.getElementById("img-box")
            
            let img = document.querySelector('img');
            console.log(imgClass)
          
            
                let imgData = data.results[i].picture.large;
                img.setAttribute("src", `${imgData}` );
           
            

            console.log(img)
    
        return data;
        }).catch((error) => {console.log(error);});           
        
    }

    


}