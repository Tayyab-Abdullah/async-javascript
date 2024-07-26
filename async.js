console.log('Befor');


// Callback Functions

const user = getUser(1, (user) => console.log('User', user));

function getUser(id, callback){
    setTimeout(() => {
        console.log('Reading a user from a databse...');
        callback({id: id, gitHub: 'www.github.com/tayyab-abdullah'});
    }, 2000)

}
console.log('After');