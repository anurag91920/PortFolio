/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Skill.css'; // 👈 Custom CSS

function Skill() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row p-5 mt-5 nb-5 border-top' id='sa'>
                <h1 className='text-center mt-5 section-title'>SKILLS</h1>
            </div>
            <div className='row text-center'>
                <h2 className="skill-category">🎨 Design Tools I Use</h2>
                <div className="d-flex flex-wrap justify-content-center mb-4">
                    <div className="badge-custom">
                        <img src="https://img.icons8.com/color/48/000000/adobe-xd.png" />
                        <span>Adobe XD</span>
                    </div>
                    <div className="badge-custom">
                        <img src="https://img.icons8.com/color/48/000000/figma.png" />
                        <span>Figma</span>
                    </div>
                </div>

                <h2 className="skill-category">🛠 Technologies I Use</h2>
                <div className="d-flex flex-wrap justify-content-center">
                    {[
                        { img: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000", name: "HTML5" },
                        { img: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000", name: "CSS" },
                        { img: "https://img.icons8.com/?size=100&id=laVIsJnTtYoj&format=png&color=000000", name: "JavaScript" },
                        { img: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000", name: "React.js" },
                        { img: "https://img.icons8.com/?size=100&id=g9mmSxx3SwAI&format=png&color=000000", name: "Bootstrap" },
                        { img: "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000", name: "TailwindCSS" },
                        { img: "https://img.icons8.com/?size=100&id=evasjCvrqrHU&format=png&color=000000", name: "Firebase" },
                        { img: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000", name: "Next.js" },
                        { img: "https://img.icons8.com/?size=100&id=gFw7X5Tbl3ss&format=png&color=000000", name: "Material UI" },
                        { img: "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000", name: "Express.js" },
                        { img: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000", name: "Node.js" },
                        { img: "https://img.icons8.com/?size=100&id=62856&format=png&color=000000", name: "Git" },
                        { img: "https://img.icons8.com/?size=100&id=efFfwotdkiU5&format=png&color=000000", name: "GitHub" },
                        { img: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000", name: "MongoDB" },
                        { img: "https://img.icons8.com/?size=100&id=JloqPm4xGSKW&format=png&color=000000", name: "Render" },
                        { img: "https://img.icons8.com/?size=100&id=99262&format=png&color=000000", name: "Vercel" },
                        { img: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000", name: "AWS" }
                    ].map((tool, index) => (
                        <div className="badge-custom" key={index}>
                            <img src={tool.img} />
                            <span>{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skill;
