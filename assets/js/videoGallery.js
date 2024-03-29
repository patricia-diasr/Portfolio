const videoPlaylist = document.querySelector("#video-playlist");
const video = document.getElementById("main-video");

// Troca link do video e o inicia
const play = (videoSource) => {
    video.src = videoSource;
    video.play();
};

// Remove a classe de video atual de todos os videos
const clear = () => {
    videoPlaylist.childNodes.forEach((liTag) => {
        liTag.classList.remove("currentVideo");
    });
};

const videos = [
    {
        name: 'agenda.mp4',
        title: 'Schedule Screen',
        description: 'Reading, creation, updating, and deletion of appointments'
    }, 
    {
        name: 'pets.mp4',
        title: 'Pet Screen',
        description: 'Reading, creation, updating, and deletion of attended pets, access to their packages and medical procedures'
    }, 
    {
        name: 'pagamentos.mp4',
        title: 'Payment Report',
        description: 'Search, reading, and updating of pending and completed payments'
    }, 
    {
        name: 'login-admin.mp4',
        title: 'Application (Administrator)',
        description: 'Administrator login in the application, visualization of payments, and posts of their pets'
    }, 
    {
        name: 'login-tutor.mp4',
        title: 'Application (Client)',
        description: 'Client login, visualization of appointments for the current day, and creation of posts for hosted pets'
    }
];

for (let video = 0; video < videos.length; video++) {
    let liTag = document.createElement("li");
    liTag.classList.add("video");
    if (video == 0){
        liTag.classList.add("currentVideo");
    }

    liTag.onclick = () => {
        clear();
        liTag.classList.add("currentVideo");
        play(`../assets/videos/${videos[video].name}`);
    };

    liTag.innerHTML = `
        <video class="video-thumb" src="../assets/videos/${videos[video].name}"></video>
        <div class="video-details">
            <h4>${videos[video].title}</h4>
            <p>${videos[video].description}
        </div>
    `;

    videoPlaylist.appendChild(liTag);
}

