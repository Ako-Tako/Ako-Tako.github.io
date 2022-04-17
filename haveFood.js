function submitPost() {
    let name = document.getElementById("postNameInput").value;
    let company = document.getElementById("companyNameInput").value;
    let date = document.getElementById("dateInput").value;
    let location = document.getElementById("locationInput").value;
    let details = document.getElementById("detailsInput").value;
    // Create paragraph element for every one post
    let newPost = document.createElement("p");

    // &nbsp is a type of white space
    newPost.innerHTML += "&nbsp&nbspName: ";
    newPost.innerHTML += name;
    newPost.innerHTML += "<br>\ &nbsp&nbspCompany: ";
    newPost.innerHTML += company;
    newPost.innerHTML += "<br>\ &nbsp&nbspDate: ";
    newPost.innerHTML += date;
    newPost.innerHTML += "<br>\ &nbsp&nbspLocation: ";
    newPost.innerHTML += location;
    newPost.innerHTML += "<br>\ &nbsp&nbspDetails: ";
    newPost.innerHTML += details;
    newPost.innerHTML += "<br>";

    // APPEND new paragraph post to the div
    document.getElementById("displayPost").appendChild(newPost);

    // ADD CLAIM BUTTON ON EACH POST
    let button = document.createElement("button");
    button.innerHTML = "Claim me!";
    document.getElementById("displayPost").appendChild(button);
    
    // make each post have white box. text is already green
    newPost.style.background = 'white';
    newPost.style.borderStyle = "none";
    newPost.style.borderRadius = "25px";

    newPost.style.fontSize = "23px";
}