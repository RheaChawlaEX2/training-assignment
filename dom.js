export default class Dom{
    constructur(element,type) {
       
        this.type = type;
        this.element = element;
    }

   
    getElement(element,type) {
        element = document.getElementById(type);
        return element
    }
    create(element,type){
        element = document.createElement(`${type}`);
        if(type === 'input'){
            element.setAttribute("type", "button");
            element.setAttribute("value","More");
            element.setAttribute('id',"more");
        }
        return element
    }
}