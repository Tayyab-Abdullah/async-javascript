let name = 'Tayyab';
console.log("Before");
// Callback Function Calling
getUser(1, (user) => {
    console.log(user);
    if(user.githubUsername === name){
        getRepo(user.githubUsername, (repo) =>{
            console.log(repo);
        });
    }
    else{
        console.log("No Repo Found.");
    }   
});
console.log("After");

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