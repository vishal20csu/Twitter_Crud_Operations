class Task {
    static count = 0;

    constructor(name, description,marked=false) {
        Task.count++; // Increment the count each time a new object is created
        this.id = Task.count; // Assign the current count as the id
        this.name = name;
        this.description = description;
        this.marked=marked;
    }
    toggle(){
        this.marked=!this.marked;
    }
}

export default Task;
