export default class Dom{
   
    constructor(element,attribute,value){
        this.element = element;
        this.attribute = attribute;
        this.value = value;
    }

   
    getElement(element,type) {
        element = document.getElementById(type);
        return element
    }
    create(element,type){
        element = document.createElement(`${type}`);
        return element
    }
    appendList(parent,child){
         parent.appendChild(child);
        
    }
    setAtt(element,attribute,value){
        element.setAttribute(attribute,value);
    }
}