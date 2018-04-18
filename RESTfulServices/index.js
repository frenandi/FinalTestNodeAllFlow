const express = require("express");
const app = express();

app.use(express.json());

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
]

app.get("/",(req , res) => {
    res.send("Hello World!!!");
});

app.get("/api/courses", (req, res) => {
    res.send(courses);
});

app.get("/api/courses/:id", (req, res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    //const course = courses.find(function(element){
    //    return element.id === parseInt(req.params.id);
    //})
    if(!course) res.status(404).send("The course with the given id was not found");//404 -- object not found
    res.send(course);

});

app.post("/api/courses", (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});

app.delete("/api/courses", (req,res) => {
    const courseToDelete = courses.findIndex(c => c.id === parseInt(req.body.id));
    if(!courseToDelete) 
    {
        res.status(404).send("The course with the given id was not found");
    }
    else{
        courses.splice(courseToDelete,1);
        res.status(200).send("sos groso pibe");
    }    
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))
//app.post();
//app.put();
//app.delete();