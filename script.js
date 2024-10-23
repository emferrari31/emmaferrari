let typingEffect = new Typed(".typedText",{
    strings : ["Emma Ferrari","a Full Stack Developer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
})
const projects = [
    {
        title: "Portfolio Project",
        description: "My first project on the Full Stack Track Course at iO Academy was to create my portfolio site using basic HTML and CSS.",
        imgSrc: "portfolioScreenshot.png",
        github: "https://github.com/emferrari31/portfolio",
        liveDemo: "https://emferrari31.github.io/portfolio/",
        tags: ["#html", "#css"]
    },
    {
        title: "Collection Application",
        description: "I built a Collection Application based on my passion for photography. This was built using PHP, HTML and CSS, with a SQL database. The purpose of this site is for the user to be able to proudly display a collection they have, and to continue to add to it as the collection grows.",
        imgSrc: "collectionAppScreenshot.png",
        github: "https://github.com/emferrari31/collection-app",
        liveDemo: "https://2024-emmaf.dev.io-academy.uk/collection-app/index.php",
        tags: ["#php", "#sql", "#html", "#css"]
    },
    {
        title: "Film Quote Quiz",
        description: "A group project within a team of 6, we were tasked to create a Film Quote Quiz Game using JavaScript, HTML and CSS",
        imgSrc: "Updated%20Film%20Game.png",
        github: "https://github.com/emferrari31/2024-jul-fst-film-quote-quiz",
        liveDemo: "https://io-academy.github.io/2024-jul-fst-film-quote-quiz/",
        tags: ["#javascript", "#html", "#css"]
    },
    {
        title: "Furniture Store API",
        description: "A group project within a team of 6, we were provided the front end of this furniture store website and were tasked with setting up the back end using an API",
        imgSrc: "furnitureStoreApi.png",
        github: "https://github.com/iO-Academy/24-jul-hippos-furniture-store-API",
        liveDemo: "https://2024-henryt.dev.io-academy.uk/build/",
        tags: ["#oop", "#sql", "#php"]
    },
];

const projectContainer = document.querySelector('section.p-4.flex.flex-wrap.justify-center');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = "sm:transition sm:ease-in-out sm:delay-150 sm:hover:-translate-y-1 sm:hover:scale-110 duration-300 projectCard bg-white sm:max-w-sm rounded overflow-hidden shadow-lg";

    projectCard.innerHTML = `
        <img class="w-full h-48 object-cover" src="${project.imgSrc}" alt="A screenshot of ${project.title}">
        <div class="px-6 py-4 flex flex-col items-center">
            <div class="font-bold text-xl text-black mb-2 text-center">${project.title}</div>
            <p class="text-gray-700 text-base text-center">${project.description}</p><br>
            <div class="iconContainer flex gap-3">
                <a href="${project.github}" target="_blank" rel="noopener noreferrer"><i class='bx bxl-github text-black text-xl'></i></a>
                <a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer"><i class='bx bx-globe text-black text-xl'></i></a>
            </div>
        </div>
        <div class="px-6 pt-4 pb-2 flex justify-center">
            ${project.tags.map(tag => `<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${tag}</span>`).join('')}
        </div>
    `;
    projectContainer.appendChild(projectCard);
});
