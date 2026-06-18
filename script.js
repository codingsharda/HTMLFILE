const todo = document.getElementById("todo");
const addTaskBtn = document.getElementById("addTask");

let issues = [
{
title:"Login Page Bug",
description:"Fix login validation",
status:"todo"
},
{
title:"Create Dashboard",
description:"Develop project dashboard",
status:"progress"
}
];

function renderTasks(){

todo.innerHTML="";
progress.innerHTML="";
testing.innerHTML="";
done.innerHTML="";

issues.forEach((issue,index)=>{

let card=document.createElement("div");
card.classList.add("task");

card.innerHTML=`
<h3>${issue.title}</h3>
<p>${issue.description}</p>
`;

card.addEventListener("click",()=>{
moveTask(index);
});

if(issue.status==="todo"){
todo.appendChild(card);
}
else if(issue.status==="progress"){
progress.appendChild(card);
}
else if(issue.status==="testing"){
testing.appendChild(card);
}
else{
done.appendChild(card);
}
});
}

function moveTask(index){

if(issues[index].status==="todo"){
issues[index].status="progress";
}
else if(issues[index].status==="progress"){
issues[index].status="testing";
}
else if(issues[index].status==="testing"){
issues[index].status="done";
}

renderTasks();
}

addTaskBtn.addEventListener("click",()=>{

const title=prompt("Issue Title");
const description=prompt("Issue Description");

if(title){
issues.push({
title,
description,
status:"todo"
});
renderTasks();
}
});

renderTasks();