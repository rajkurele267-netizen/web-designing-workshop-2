const students = [
    {
        name: "aparna tiwari",
        course: "Computer Science",
        marks: 98
    },
    {
        name: "raj kurele",
        course: "Information Technology",
        marks: 90
    },
    {
        name: "sanvi chaurasiya",
        course: "Electronics",
        marks: 95
    }
];

const container = document.getElementById("studentContainer");

students.forEach(student => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="name">${student.name}</div>
        <div class="info">Course: ${student.course}</div>
        <div class="info">Marks: ${student.marks}</div>
    `;

    container.appendChild(card);
});