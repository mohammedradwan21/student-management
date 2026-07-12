function addStudent() {

    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;

    if (name === "" || id === "") {
        alert("Fill all fields");
        return;
    }

    let list = document.getElementById("students");
    let item = document.createElement("li");

    item.innerHTML = `
        <span>Student: ${name} | ID: ${id}</span>

        <div>
            <button onclick="editStudent(this)">
                Edit
            </button>

            <button onclick="removeStudent(this)">
                Delete
            </button>
        </div>
    `;

    list.appendChild(item);

    saveStudents();
    updateCount();

    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
}


function removeStudent(button) {

    button.closest("li").remove();

    updateCount();
    saveStudents();

}


function editStudent(button) {

    let item = button.closest("li");

    let text = item.querySelector("span").textContent;

    let studentName = text
        .split("Student: ")[1]
        .split(" | ID:")[0];

    let studentId = text
        .split("ID: ")[1];

    let newName = prompt("Edit Student Name:", studentName);

    let newId = prompt("Edit Student ID:", studentId);

    if (newName === null || newId === null) {
        return;
    }

    if (newName.trim() === "" || newId.trim() === "") {
        alert("Fields cannot be empty");
        return;
    }

    item.querySelector("span").textContent =
        `Student: ${newName} | ID: ${newId}`;

    saveStudents();

}


function updateCount() {

    let total =
        document.getElementById("students").children.length;

    document.getElementById("count").textContent = total;

}


function clearStudents() {

    document.getElementById("students").innerHTML = "";

    updateCount();
    saveStudents();

}


function saveStudents() {

    let students = [];

    let items =
        document.querySelectorAll("#students li");

    items.forEach(function(item) {

        students.push(item.innerHTML);

    });

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

}


function loadStudents() {

    let students =
        JSON.parse(localStorage.getItem("students")) || [];

    students.forEach(function(student) {

        let item = document.createElement("li");

        item.innerHTML = student;

        document
            .getElementById("students")
            .appendChild(item);

    });

    updateCount();

}


function searchStudent() {

    let value =
        document
            .getElementById("search")
            .value
            .toLowerCase();

    let items =
        document.querySelectorAll("#students li");

    items.forEach(function(item) {

        if (
            item.textContent
                .toLowerCase()
                .includes(value)
        ) {

            item.style.display = "flex";

        } else {

            item.style.display = "none";

        }

    });

}


loadStudents();