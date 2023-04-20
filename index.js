import express from "express";


const app=express();
const students =[
    {
        id:1,
        name:"ahmed",
        city:"shebin",
    },
    {
        id:2,
        name:"mohamed",
        city:"tanta",
    },
    {
        id:3,
        name:"yasser",
        city:"giza",
    },
    {
        id:4,
        name:"ziyad",
        city:"helwan",
    }
];

const studentfunction = (request,response) => {
   let output='<ul>';
   for(let i=0;i<students.length;i++){
    const student = students[i];
    output+="<li>"+student.name+"</li>"
   }
   output+='</ul>'
   response.send(output);
};

app.get('/students',studentfunction)


app.listen(5000);
 