console.log('Befor');

const name = 'Tayyab';
// Callback Functions

// const p = getUser(1).then(user => console.log(user)).catch(err => console.log(err.message));


// Async and Await approach

async function displayUser(){
    try{
        const user = await getUser(1);
        console.log(user);
    }
    catch(err){
        console.log("Error: ", err.message);
    }
}

displayUser();


function getUser(id){
    return new Promise((resolve, reject) => {
        //Kickoff some async work
        setTimeout(() => {
            console.log('Reading a user from a databse...');
            const user = {id: id, gitHubUsername: 'Tayyab'};
            if(user.gitHubUsername === name){
                resolve({id: id, gitHubUsername: 'Tayyab'});
            }
            else reject(new Error('User not Found....'));
        }, 2000)
    })
}
console.log('After');