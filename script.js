function addStudent(){

let name=
document.getElementById("name").value;

let id=
document.getElementById("id").value;

if(name===""||id===""){

alert("Fill all fields");

return;

}

let list=
document.getElementById("students");

let item=
document.createElement("li");

item.innerHTML=
`
Student: ${name} | ID: ${id}
<button onclick="removeStudent(this)">
Delete
</button>
`;

list.appendChild(item);

updateCount();

document.getElementById("name").value="";

document.getElementById("id").value="";

}

function removeStudent(button){

button.parentElement.remove();

updateCount();

}
function updateCount(){

let total=
document.getElementById("students")
.children.length;

document.getElementById(
"count"
).textContent=total;

}

function clearStudents(){

document.getElementById(
"students"
).innerHTML="";

updateCount();

}