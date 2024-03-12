import {operations} from "./operations.js";

window.addEventListener('load',bindevents);

function bindevents(){
    document.querySelector("#submit").addEventListener('click',add);
}

function add(){
    let name= document.querySelector("#name").value;
    let description= document.querySelector("#description").value;

    const tweet= operations.add(name,description);
    print(tweet)

}
function print(tweet) {

    let output = document.querySelector(".output");
    let id=tweet.id;

    // Create the outer div with class "out"
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('out');
  
    outerDiv.style.marginBottom = '20px';
    outerDiv.style.borderRadius = '10px';

    // Create the h3 element for the username
    const usernameHeader = document.createElement('h3');
    usernameHeader.textContent = tweet.name;

    // Create the inner div with class "outcontent"
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('outcontent');

    // Create the paragraph element for the tweet content
    const contentParagraph = document.createElement('p');
    contentParagraph.textContent = tweet.description;

    // Create the span element for the date
    const dateSpan = document.createElement('span');
    const currentDate = new Date().toLocaleDateString(); // Get the current date
    dateSpan.textContent = currentDate;

    // Append elements to their respective parent elements
    innerDiv.appendChild(contentParagraph);
    innerDiv.appendChild(dateSpan);
    innerDiv.appendChild(createIcon("pen-to-square",id,toggleEdit));
    innerDiv.appendChild(createIcon("trash",id,toggleDelete));

    outerDiv.appendChild(usernameHeader);
    outerDiv.appendChild(innerDiv);

    // Append the outer div to the output container
    output.appendChild(outerDiv);

    // Clear input fields after posting
    document.querySelector('#name').value = '';
    document.querySelector('#description').value = '';
}

function createIcon(className,id,fn){
    let icon= document.createElement("i");
    icon.className= `fa-solid fa-${className} me-3`;

    icon.setAttribute("user-id",id);
    icon.addEventListener('click',fn);

    return icon;

}

function toggleDelete(){
    let id= this.getAttribute("user-id");
    let tr= this.parentNode.parentNode;
    if(tr.classList.contains('alert-danger')){
        if(confirm("The tweet can't be recovered once deleted?")){

            deleteUser();
        }else{
            tr.classList.remove('alert-danger');
        }
    }else{
        tr.classList.toggle('alert-danger');

    }

    
    
}
function toggleEdit(){
    console.log("krlo edit")
}


function deleteUser(){
    let deletedTweets= operations.delete();
    document.querySelector(".output").innerHTML='';
    if (deletedTweets.length > 0) {
    deletedTweets.forEach(tweet=> print(tweet));
    }else{
        alert("No tweets to delete.")
    }

}
