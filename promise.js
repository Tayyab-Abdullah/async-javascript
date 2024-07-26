
//Promises in JavaScript

const p = new Promise((resolve, reject) =>{
    //Kick off some Async work....
    //....
    setTimeout(() => {
        // resolve(1);
        reject(new Error('message'));
    }, 2000)
})

p.then((result) => console.log(result)).catch(err => console.log('Error:', err.message));