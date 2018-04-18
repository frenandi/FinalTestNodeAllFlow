console.log("Before");
getUser(1)
    .then(user => getRepositories(user.username))
    .then(repositories => console.log(repositories))
    .catch(err => console.log("Error"),err.message);
console.log("After");


function getUser(id){
    return new Promise((resolve, reject) =>{
        //Kick off some async work
        setTimeout(() => {
            console.log("Reading a user from a database");
            resolve({ id: id, username: 'fer'});
        },2000);
    });    
}

function getRepositories(username){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("getting repositories");
            resolve(["repo1", "repo2", "repo3"]);
        },2000);
    });    
}