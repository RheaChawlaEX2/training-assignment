

class Task{
    constructor(task,desc, date){
        this.task = task;
        this.desc = desc;
        this.date = date;
        
    }
     add_new_task(task, desc, date){
       // let addObj = new AddStorage(task, desc, date);

    //    let extract = JSON.parse(localStorage.getItem('tasks'));
    //     console.log(extract);
        var list = document.querySelector('ul');
    
        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listDeleteBtn = document.createElement('button');
        const listEditBtn = document.createElement('button');
    
        listItem.appendChild(listText);
        listText.textContent = `${task} : ${desc} : ${date}`;
    
        listItem.appendChild(listEditBtn);
        listDeleteBtn.textContent = "Delete";
    
        listItem.appendChild(listDeleteBtn);
        listEditBtn.textContent = "Edit";
    
        list.appendChild(listItem);
    
        listDeleteBtn.addEventListener('click', () => {
            list.removeChild(listItem);
        });
    
        listEditBtn.onclick = function(){ 
            const editObj = new EditTask(list, listItem, listText, listDeleteBtn, listEditBtn, task, desc, date);
            editObj.edit_event(list, listItem, listText, listDeleteBtn, listEditBtn, task, desc, date); 
        }
    
    }
}


class EditTask extends Task {
    constructor(list, listItem, listText, listDeleteBtn, listEditBtn, task, desc, date){
        super(task,desc,date);
        this.list = list;
        this.listItem = listItem;
        this.listText = listText;
        this.listDeleteBtn = listDeleteBtn;
        this.listEditBtn = listEditBtn;

    }
    edit_event(list, listItem, listText, listDeleteBtn, listEditBtn, task, desc, date){
    
        listItem.removeChild(listEditBtn);
        listItem.removeChild(listDeleteBtn);
    
        var new_task = document.createElement("input");
        new_task.type = "text";
        new_task.value = task;
    
        var new_desc = document.createElement("input");
        new_desc.type = "text";
        new_desc.value = desc;
    
        var new_date = document.createElement("input");
        new_date.type = "date";
        new_date.value = date;
    
        var listAddBtn = document.createElement('button');
        listAddBtn.textContent = "Add";
    
        listItem.replaceChild(new_task, listText);
        listItem.appendChild(new_desc);
        listItem.appendChild(new_date);
        listItem.appendChild(listAddBtn);
        listItem.appendChild(listDeleteBtn);
    
        listAddBtn.addEventListener('click', () => {
            listText.textContent = `${new_task.value} : ${new_desc.value} : ${new_date.value}`;
            listItem.replaceChild(listText, new_task);
            listItem.replaceChild(listEditBtn, listAddBtn);
            listItem.removeChild(new_desc);
            listItem.removeChild(new_date);
        });
    
        listEditBtn.onclick = function() { edit_event(list, listItem, listText, listDeleteBtn, listEditBtn, new_task.value, new_desc.value, new_date.value); }
    }
}
  
var id = 0;
var counter = 0;

class AddStorage extends Task{
    constructor(task, desc, date){
        super(task, desc, date);
        // this.task = task;
        // this.date = date;
        // this.desc = desc;
    }
    add_to_localStorage(task, desc, date){
        var data = { 
            "taskData": task,
            "descData": desc,
            "dateData" : date
        };

        var items = new Object();
     
           items =  Object.assign(counter++,data );
           console.log(items);       
        localStorage.setItem(`${id++}`, JSON.stringify(data)); 
     
    }
}


  function add_task(){
    
       
        var task = document.querySelector("#todo_task").value;
        var desc = document.querySelector("#todo_desc").value;
        var date = document.querySelector("#todo_date").value;      
        let obj = new Task(task, desc, date);
        obj.add_new_task(task, desc, date);

        let local = new AddStorage(task, desc, date);
        local.add_to_localStorage(task, desc, date);
         
    }
