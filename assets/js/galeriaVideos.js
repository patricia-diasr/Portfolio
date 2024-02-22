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
        title: 'Tela Agenda',
        description: 'Leitura, cadastro, atualização e deleção de agendamentos'
    }, 
    {
        name: 'pets.mp4',
        title: 'Tela Pet',
        description: 'Leitura, cadastro, atualização e deleção de pets atendidos, acesso aos seus pacotes e procedimentos médicos'
    }, 
    {
        name: 'pagamentos.mp4',
        title: 'Relatório de Pagamento',
        description: 'Pesquisa, leitura e atualização de pagamentos pendentes e efetuados'
    }, 
    {
        name: 'login-admin.mp4',
        title: 'Aplicativo (Administrador)',
        description: 'Login do Administrador no aplicativo, visualização de pagamentos e postagens de seus pets'
    }, 
    {
        name: 'login-tutor.mp4',
        title: 'Aplicativo (Cliente)',
        description: 'Login do cliente, visualização dos agendamentos do dia atual, e criação de postagens para pets hospedados'
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

