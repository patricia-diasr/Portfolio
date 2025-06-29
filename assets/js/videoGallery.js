const setupVideoGallery = ({
  videoList,
  videoPlayerId = "main-video",
  playlistId = "video-playlist",
  videoPath = "../assets/videos/",
}) => {
  const video = document.getElementById(videoPlayerId);
  const videoPlaylist = document.getElementById(playlistId);

  const play = (videoSource) => {
    video.src = videoSource;
    video.play();
  };

  const clear = () => {
    videoPlaylist.querySelectorAll("li").forEach((liTag) => {
      liTag.classList.remove("currentVideo");
    });
  };

  videoList.forEach((item, index) => {
    const liTag = document.createElement("li");
    liTag.classList.add("video");
    if (index === 0) {
      liTag.classList.add("currentVideo");
    }

    liTag.onclick = () => {
      clear();
      liTag.classList.add("currentVideo");
      play(`${videoPath}${item.name}`);
    };

    liTag.innerHTML = `
            <video class="video-thumb" src="${videoPath}${item.name}" muted></video>
            <div class="video-details">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            </div>
        `;

    videoPlaylist.appendChild(liTag);
  });

  video.src = `${videoPath}${videoList[0].name}`;
};
