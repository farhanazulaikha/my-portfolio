import project1Img from '../assets/images/cute-duck.jpg';
import project2Img from '../assets/images/project-2.png';
import project3Img from '../assets/images/project-3.png';

const projects = [
    {
        id: 1,
        image: project1Img,
        name: "My Portfolio",
        year: "2024",
        description: "My portfolio which showcases my list of skills and projects as a web developer.",
        githubLink: "https://youtu.be/hUkPu5Pz7SY?si=Lltmbvhq6WTK4q-1",
        liveLink: "https://youtu.be/hUkPu5Pz7SY?si=Lltmbvhq6WTK4q-1"
    },
    {
        id: 2,
        image: project2Img,
        name: "University Strategic Partnership",
        year: "2022",
        description: "My final year project, built using React.js as the front-end framework, Express.js as the back-end framework, and MySQL as database. It is a web application for simplifying communication between university lecturers and industry stakeholders for collaboration purposes.",
        githubLink: "https://github.com/farhanazulaikha/university-crm-system",
        youtubeLink: "https://youtu.be/hUkPu5Pz7SY?si=Lltmbvhq6WTK4q-1"
    },
    {
        id: 3,
        image: project3Img,
        name: "Homestry Booking Application",
        year: "2021",
        description: "A project made for one of my third-year subjects. Built using MERN (MongoDB, Express, React, Node.js) stack. It is a web application for booking cleaning services.",
        githubLink: "https://github.com/farhanazulaikha/homestry",
    },
];

export default projects;