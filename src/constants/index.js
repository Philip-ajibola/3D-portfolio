import {
    contact,
    css,
    express,
    expense,
    connect,
    uber,
    chat,
    ecommerce,
    event,
    library,
    logistic,
    hub,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    java,
    mui,
    python,
    nodejs,
    golang,
    django,
    mySql,
    springboot,
    postgres,
    react,
    redux,
    tailwindcss,
    typescript,

} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: golang,
        name: "Golang",
        type: "Backend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl:python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: springboot,
        name: "SpringBoot",
        type: "Backend",
    },
    {
        imageUrl: mySql,
        name: "MySql",
        type: "Database",
    },
    {
        imageUrl: postgres,
        name: "Postgres",
        type: "Database",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Semicolon Africa",
        icon:"https://res.cloudinary.com/dwyiuc4ov/image/upload/v1710150205/assets/home/grpyw2ac3zst8os5omh6.svg",
        iconBg: "#fbc3bc",
        date: "September 2023 - present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with my fellow cohort members to develop user friendly web applications and  create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other cohort members.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Semicolon Africa",
        icon: "https://res.cloudinary.com/dwyiuc4ov/image/upload/v1710150205/assets/home/grpyw2ac3zst8os5omh6.svg",
        iconBg: "#fbc3bc",
        date: "September 2023 - present ",
        points: [
            "Developing and maintaining Mobile Application using React Native  and other related technologies.",
            "Collaborating with my fellow cohort members to develop user friendly mobile applications and  create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Semicolon Africa",
        icon: "https://res.cloudinary.com/dwyiuc4ov/image/upload/v1710150205/assets/home/grpyw2ac3zst8os5omh6.svg",
        iconBg: "#fbc3bc",
        date: "September 2023 - present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with my fellow cohort members to develop user friendly mobile applications and  create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Semicolon Africa",
        icon: "https://res.cloudinary.com/dwyiuc4ov/image/upload/v1710150205/assets/home/grpyw2ac3zst8os5omh6.svg",
        iconBg: "#fbc3bc",
        date: "September 2023 - Present",
        points: [
            "Developing and maintaining both the frontend and backend of an application",
            "Collaborating with my fellow cohort members to develop user friendly mobile applications and  create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Philip-ajibola',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/philip-ajibola-63772623b/',
    }
];

export const projects = [
    {
        iconUrl: expense,
        theme: 'btn-back-green',
        name: 'Expense Tracker',
        description: 'Developed an Expense Tracker that helps track how much users spend monthly and what to spend it on.',
        link: 'https://github.com/Philip-ajibola/expenseTracker',
    },
    {
        iconUrl: uber,
        theme: 'btn-back-blue',
        name: 'Full Stack Uber Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Uber" enabling users to Order ride and make payment.',
        link: ' https://github.com/Philip-ajibola/uber_clone.git',
    },
    {
        iconUrl: event,
        theme: 'btn-back-green',
        name: 'EventBookingApplication',
        description: 'Built a backend Event Booking Application where by event planner can schedule event and can also sell and retrieve reserved ticket from users .',
        link: 'https://github.com/Philip-ajibola/eventBookingRepo',
    },
    {
        iconUrl: chat,
        theme: 'btn-back-blue',
        name: 'Full Stack Instagram Clone',
        description: 'Developed a web application where by users can communicate to one another (on-going project).',
        link: 'https://github.com/Philip-ajibola/chatApplication',
    },
    {
        iconUrl: ecommerce,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'App that allows users to come to the website and purchase any product of their choice. A very responsive and User friendly Application',
        link: 'https://bobby-store-nu.vercel.app/',
    },
    {
        iconUrl: connect,
        theme: 'btn-back-blue',
        name: 'Connectivity',
        description: ' Mobile App that allows users have easy access to Service provider like Skilled Workers, Professional Doctor, Tutors and lot more ',
        link: 'https://github.com/MultiConnectWeb/multi_connect_mobile',
    },
    {
        iconUrl: library,
        theme: 'btn-back-yellow',
        name: 'Library Management System',
        description: ' Developed a web application that allow librarian keep track of books that are been borrowed from the library, it helps keeps the record of how the bok is being borrowed and when the book is returned ',
        link: 'https://github.com/MultiConnectWeb/multi_connect_mobile',
    },
    {
        iconUrl: hub,
        theme: 'btn-back-green',
        name: 'Maverick Hub',
        description: ' Developed a backend application allows user upload videos and picture ',
        link: 'https://github.com/Philip-ajibola/MavericksHub',
    },
    {
        iconUrl: logistic,
        theme: 'btn-back-yellow',
        name: 'Logistic Application',
        description: ' Developed a logistic application that allows users order a rider a to deliver their package from a place to another ',
        link: 'https://deelogistics-dee-dayos-projects.vercel.app/',
    },

];