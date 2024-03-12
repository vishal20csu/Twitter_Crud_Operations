import Task from "./task.js";

// Creating an object of posts
export const operations = {
    Content: [],
    add(name, description) {
        const data = new Task(name, description);
        this.Content.push(data);
        return data;
    },
    delete(){
        let length= operations.Content.length;
        this.Content= this.Content.filter(user=> !this.marked );

        return this.Content;


    },
    edit(){

    },
    mark(id){

        let user=  this.Content.find(user => user.id==id );
        if(user){
        user.toggle();
       }

    }

};
