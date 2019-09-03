const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
];

for (const student of students) {
    console.log("Building object for " + student.name);
    const fragment = document.createDocumentFragment();
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const section = document.createElement("section");
    const aside = document.createElement("aside");

    div.className = "student";
    section.className = "bordered dashed section--padded";
    aside.className = "pushRight";

    h1.textContent = student.name;
    section.textContent = student.subject;
    aside.textContent = student.info;

    let studentComponent = "";
    if (student.score >= 60) {
        h1.className = "xx-large passing";
    } else {
        h1.className = "xx-large failing";    
    }

    div.appendChild(h1);
    div.appendChild(section);
    div.appendChild(aside);
    fragment.appendChild(div);

    document.querySelector("#student").appendChild(fragment);
}
console.log("Report complete.");