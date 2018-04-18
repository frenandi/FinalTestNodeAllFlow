const p = new Promise((resolve, reject) => {
    //Some async work
    setTimeout(() => {
        //resolve(1); // pending => resolved, fullfilled
        reject(new Error("no jalo pibe")); //pending => rejected
    },2000);
    
    
});

p
    .then(result => console.log("Result",result))
    .catch(err => console.log('Error',err.message));