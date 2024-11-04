let typingEffect = new Typed(".typedText", {
    strings: ["Emma Ferrari", "a Full Stack Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})
const projects = [
    {
        title: "Portfolio Site",
        description: "The Portfolio Site is my first project on the Full Stack Track Course at iO Academy, " +
            "designed to showcase my skills, projects, and personal brand. Built using fundamental HTML and CSS, " +
            "this site serves as a digital representation of my journey as a developer. I have since built another " +
            "portfolio site (this one you're currently on) using JavaScript.",
        imgSrc: "portfolioScreenshot.png",
        github: "https://github.com/emferrari31/portfolio",
        liveDemo: "https://emferrari31.github.io/portfolio/",
        tags: ["#html", "#css"]
    },
    {
        title: "Collection Application",
        description: "The Collection Application is a personal project inspired by my passion for photography. Built " +
            "using PHP, HTML, CSS, and a SQL database, this web application allows users to showcase and manage " +
            "their photo collections effortlessly.",
        imgSrc: "collectionAppScreenshot.png",
        github: "https://github.com/emferrari31/collection-app",
        liveDemo: "https://2024-emmaf.dev.io-academy.uk/collection-app/index.php",
        tags: ["#php", "#sql", "#html", "#css"]
    },
    {
        title: "Film Quote Quiz",
        description: "The Film Quote Quiz Game is an engaging group project developed by a team of six, " +
            "designed to test users' knowledge of iconic movie quotes. Using JavaScript, HTML, and CSS, we created an " +
            "interactive web application that combines fun and learning for film enthusiasts.",
        imgSrc: "Updated%20Film%20Game.png",
        github: "https://github.com/emferrari31/2024-jul-fst-film-quote-quiz",
        liveDemo: "https://io-academy.github.io/2024-jul-fst-film-quote-quiz/",
        tags: ["#javascript", "#html", "#css"]
    },
    {
        title: "Furniture Store API",
        description: "The Furniture Store API is a collaborative project developed by a team of three, where we were " +
            "responsible for building the backend to support a pre-existing front end for a furniture store website. " +
            "Our focus was on creating a robust API that facilitates seamless data interaction between the " +
            "frontend and backend.",
        imgSrc: "furnitureStoreApi.png",
        github: "https://github.com/iO-Academy/24-jul-hippos-furniture-store-API",
        liveDemo: "https://2024-henryt.dev.io-academy.uk/build/",
        tags: ["#oop", "#sql", "#php"]
    },
    {
        title: "Planet Age Calculator",
        description: "The Planet Age Calculator is a web application designed to help users determine their age on " +
            "different planets in our solar system. Developed as part of the iO Academy course, this solo exercise " +
            "showcases my skills in TypeScript, HTML, and CSS.",
        imgSrc: "planet.png",
        github: "https://github.com/emferrari31/planet-age-calculator",
        liveDemo: "https://emferrari31.github.io/planet-age-calculator/",
        tags: ["#typescript", "#javascript", "#html", "#css"]
    },
    {
        title: "CRUD To-do App",
        description: "A solo exercise on the iO Academy course, this project is a to-do application that " +
            "allows users to create, read, update, and delete tasks. It employs React for the front end, following the " +
            "MVC architecture for a clean separation of concerns, and Slim as the backend framework.",
        imgSrc: "todoappscreenshot.png",
        github: "https://github.com/emferrari31/todoApp",
        liveDemo: "https://todoapp.2024-emmaf.dev.io-academy.uk/",
        tags: ["#mvc", "#react", "#html", "#css", "#slim", "sql"]
    }

];

const projectContainer = document.querySelector('section.p-4.flex.flex-wrap.justify-center');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = "sm:transition sm:ease-in-out sm:delay-150 sm:hover:-translate-y-1 sm:hover:scale-110 " +
        "duration-300 projectCard bg-white sm:max-w-sm rounded overflow-hidden shadow-lg";
    projectCard.innerHTML = `
        <img class="w-full h-48 object-cover" src="${project.imgSrc}" alt="A screenshot of ${project.title}">
        <div class="px-6 py-4 flex flex-col items-center">
            <div class="font-bold text-xl text-black mb-2 text-center">${project.title}</div>
            <p class="text-gray-700 text-base text-center">${project.description}</p><br>
            <div class="iconContainer flex gap-3">
                <a href="${project.github}" target="_blank" rel="noopener noreferrer">
                <i class='bx bxl-github text-black text-xl'></i></a>
                <a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer">
                <i class='bx bx-globe text-black text-xl'></i></a>
            </div>
        </div>
        <div class="px-6 pt-4 pb-2 flex justify-center">
            ${project.tags.map(tag => `<span class="inline-block bg-gray-200 rounded-full px-3 py-1 
            text-sm font-semibold text-gray-700 mr-2 mb-2">${tag}</span>`).join('')}
        </div>
    `;
    projectContainer.appendChild(projectCard);
});
