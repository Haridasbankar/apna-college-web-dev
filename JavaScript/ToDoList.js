let todo = [];
let req = prompt("Please enter a request!");

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }

    if(req == "list"){
        console.log("--------------");
        for(task of todo){
            console.log(task);
        }
        console.log("--------------");
    }else if( req == "add"){
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added")
    }else if(req == "delete"){
        let det = prompt("please enter the task you want to delete");
        todo.splice(det, 1);
        console.log("Task is deleted");

    }else{
        console.log("request is invalid!");
    }
    req = prompt("Please enter a request!");
}