console.log("Before");
getUser(1, (user) => {
    getRepositories(user.username,(repositories) => {
        console.log(repositories);
    });
});
console.log("After");

function getUser(id, callback){
    setTimeout(() => {
        console.log("Reading a user from a database");
        callback({ id: id, username: 'fer'});
    },2000);
}

function getRepositories(username, callback){
    setTimeout(() => {
        console.log("getting repositories");
        callback(["repo1", "repo2", "repo3"]);
    },2000);
}