import CPlusPlus from '../assets/images/Cplusplus.png';
import CSharp from '../assets/images/Csharp.png';
import Python from '../assets/images/Python.png';
import JavaScript from '../assets/images/JavaScript.png';
import CSS from '../assets/images/CSS.png';
import BlackJack from '../assets/images/blackjack.png';
import Snake from '../assets/images/snake.png';

const skillList = [
    {id:1, item:CPlusPlus, name:'C++', percent:90},
    {id:2, item:CSharp, name:'C#', percent:80},
    {id:3, item:Python, name:'Python', percent:60},
    {id:4, item:JavaScript, name:'JavaScript', percent:75},
    {id:5, item:CSS, name:'CSS', percent:75}
];

const workExperience = [
    {
        title: "Software Developer Intern",
        company: "CSUDH Workforce Integration Network",
        logo: "",
        date: "February - Apirl 2023",
        points: [
            "Developed strong Communication and Interpersonal Skills through effective collaboration and Communication within the team on long distance remotely meeting",
            "Implemented projects from inception, including Project Planning, and Diagram Design",
            "Enhanced Critical-Thinking, Problem-Solving, and Analytical Skills by interacting with experienced developers to gather ideas and insights",
        ],
    },
    
];

const projects = [
    {
        title: "Blackjack",
        description: "Developed a responsive and user-friendly UI for the blackjack game.",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
        ],
        image: BlackJack,
        source_link: "https://github.com/",
    },
    {
        title: "Snake Game",
        description: "",
        tags: [
            {
                name: " C#",
                color: "blue-text-gradient",
            },
        ],
        image: Snake,
        source_link: "https://github.com/",
    }
]



export {skillList, workExperience, projects}