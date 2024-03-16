let name = 'Tayyab';
console.log("Before");
// Callback Function Calling

getUser(1, getUser);

console.log("After");

// Solving Callback Hell or Nested Callback Function

function getUser(user){
    console.log(user);
    if(user.githubUsername === name){
        getRepo(user.githubUsername, displayRepo);
    }
    else{
        console.log("No Repo Found.");
    }   
}

function displayRepo(repos){
    console.log(repos);
}

//Creating Callback function

function getUser(id, callback){
    setTimeout(() => {
        console.log("Reading Data from a database.....");
        callback({ id: id, githubUsername: "Tayyab"});
        
    }, 2000)
}

function getRepo(username, callback){
    setTimeout(() => {
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000)
}