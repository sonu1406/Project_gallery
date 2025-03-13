const works = {
    "task1": {"title": "Project 1", "url": "works/task1/index.html"},
    "task2": {"title": "Project 2", "url": "works/task2/index.html"},
    "task3": {"title": "Project 3", "url": "works/task3/index.html"},
};

const iframe = document.getElementById('projectIframe');
const links = document.querySelectorAll('.nav-link');

const worksArray = Object.values(works);


links.forEach((link, index) => {
    link.addEventListener('click', (event) => {
       
        const url = worksArray[index].url; // Get URL from works object
        showProject(url);
    });
});

function showProject(url) {
    iframe.src = url;
}

