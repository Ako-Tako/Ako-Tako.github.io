function submitPost() {
    let name = document.getElementById("postNameInput").value;
    let company = document.getElementById("companyNameInput").value;
    let date = document.getElementById("dateInput").value;
    let location = document.getElementById("locationInput").value;
    let details = document.getElementById("detailsInput").value;
    // Create paragraph element for every one post
    let newPost = document.createElement("p");

    // &nbsp is a type of white space
    newPost.innerHTML += "<br>";
    newPost.innerHTML += "&nbsp&nbsp name: ";
    newPost.innerHTML += name;
    newPost.innerHTML += "<br>\ &nbsp&nbsp company: ";
    newPost.innerHTML += company;
    newPost.innerHTML += "<br>\ &nbsp&nbsp date: ";
    newPost.innerHTML += date;
    newPost.innerHTML += "<br>\ &nbsp&nbsp location: ";
    newPost.innerHTML += location;
    newPost.innerHTML += "<br>\ &nbsp&nbsp details: ";
    newPost.innerHTML += details;
    newPost.innerHTML += "<br>";

    // APPEND new paragraph post to the div
    document.getElementById("displayPost").appendChild(newPost);

    // ADD CLAIM BUTTON ON EACH POST
    let newButton = document.createElement("button");
    newButton.innerHTML = "claim me!";
    document.getElementById("displayPost").appendChild(newButton);
    
    // make each post have white box. text is already green
    newPost.style.background = 'white';
    newPost.style.borderStyle = "none";
    newPost.style.borderRadius = "25px";
    newPost.style.height = "200px";
    newPost.style.fontSize = "26px";
    newPost.style.lineHeight = "normal";

    newButton.style.marginLeft = "40px";
}