import Reveal from "./Reveal";

const education = [
    {
        degree: "Bachelor of Science in Software Engineering",
        school: "University of Karachi",
        date: "Feb 2021 – Mar 2025",
        score: "CGPA: 3.16 / 4.00",
        color: "var(--amber)",
        courses: [
            "Programming Fundamentals",
            "Object-Oriented Programming",
            "Data Structures & Algorithms",
            "Database Systems",
            "Software Engineering",
            "Software Quality Assurance",
            "Web Technologies",
        ],
    },
    {
        degree: "Intermediate (Pre-Engineering)",
        school: "PECHS Education Foundation College",
        date: "",
        score: "Score: 71.45%",
        color: "var(--violet)",
        courses: [],
    },
    {
        degree: "Matriculation (Biology)",
        school: "Info English Grammar School",
        date: "",
        score: "Score: 80%",
        color: "var(--rose)",
        courses: [],
    },
];

const Education = () => {
    return (
        <section id="education" className="section">
            <div className="container">
                <Reveal>
                    <div className="section-head">
                        <span className="comment"><b>06</b> education</span>
                        <h2 className="section-heading">Education</h2>
                    </div>
                </Reveal>

                <div className="edu-list">
                    {education.map((item) => (
                        <Reveal key={item.degree}>
                            <div className="glass card edu-card" style={{ borderLeft: `3px solid ${item.color}` }}>
                                <div className="edu-top">
                                    <h3>{item.degree}</h3>
                                    {item.date && <span className="edu-date">{item.date}</span>}
                                </div>
                                <p className="edu-school" style={{ color: item.color }}>{item.school}</p>
                                <p className="edu-score">{item.score}</p>

                                {item.courses.length > 0 && (
                                    <>
                                        <p className="edu-label">Relevant coursework</p>
                                        <div className="chips">
                                            {item.courses.map((course) => (
                                                <span key={course} className="chip">{course}</span>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;