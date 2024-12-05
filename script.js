let progress = document.getElementById("progress");
let sing = document.getElementById("songs");
let controlIcn = document.getElementById("icn");
let play = document.getElementById("play-pause");
let song = document.getElementById("song");
let image = document.querySelector(".song-img");
let name = document.getElementById("name");
let artist = document.getElementById("artist");  
let next = document.getElementById("forward");
let before = document.getElementById("backward");
let container=document.querySelector(".container");

sing.onloadedmetadata = function () {
    progress.max = sing.duration;
    progress.value = sing.currentTime;
};

play.addEventListener("click", () => {
    if (controlIcn.classList.contains("fa-pause")) {
        sing.pause();
        controlIcn.classList.remove("fa-pause");
        controlIcn.classList.add("fa-play");
    } else {
        sing.play();
        controlIcn.classList.add("fa-pause");
        controlIcn.classList.remove("fa-play");
    }
});


sing.addEventListener("play", () => {
    setInterval(() => {
        progress.value = sing.currentTime;
    }, 500);
});


progress.onchange = function () {
    sing.play();
    sing.currentTime = progress.value;
    controlIcn.classList.add("fa-pause");
    controlIcn.classList.remove("fa-play");
};

const music = [
    { song: "musics/despacito.mp3", image: "images/despacito.jfif", name: "Despacito", artist: "Luis Fonsi" },
    { song: "musics/ekladki.mp3", image: "images/ekladki.jfif", name: "Ek Ladki Ko Dekha To", artist: "Darshan Rawal" },
    { song: "musics/Gatiya_ilidu.mp3", image: "images/gatiya_ilidu.jfif", name: "Gatiya Ilidu", artist: "Vijay Prakash and Chandan Shetty" },
    { song: "musics/gfbf.mp3", image: "images/gfbf.jfif", name: "GfBf", artist: "Neha Kakkar, Yasser Desai" },
    { song: "musics/hangover.mp3", image: "images/hangover.jfif", name: "Hangover Teri", artist: "Rahat Fateh Ali Khan" },
    { song: "musics/ishq.mp3", image: "images/ishq.jfif", name: "Ishq Wala Love", artist: "Neeti Mohan, Shekhar Ravjiani" },
    { song: "musics/janam.mp3", image: "images/janam.jfif", name: "Janam Janam", artist: "Arijit Singh and Antara Mitra" },
    { song: "musics/kabhi-kabhi.mp3", image: "images/kabhi-kabhi.jfif", name: "Kabhi-Kabhi", artist: "Rashid Ali" },
    { song: "musics/kar-gay.mp3", image: "images/kargay.jfif", name: "Kar Gayi Chull", artist: "Badshah, Fazilpuria" },
    { song: "musics/khogaye.mp3", image: "images/khogaye.jfif", name: "Kho Gaye", artist: "Jasleen Royal and Prateek Kuhad" },
    { song: "musics/letMe.mp3", image: "images/letme.jfif", name: "Let Me Love You", artist: "Alec Benjamin" },
    { song: "musics/LoveStory.mp3", image: "images/lovestory.jfif", name: "Love Story", artist: "Taylor Swift" },
    { song: "musics/shapeofyou.mp3", image: "images/shepeofyou.jfif", name: "Shape Of You", artist: "Ed Sheeran" }
];

next.addEventListener("click", () => {
    let random = Math.floor(Math.random() * music.length);

    song.src = music[random].song;
    image.src = music[random].image;
    artist.innerText = music[random].artist;
    name.innerText = music[random].name;

    sing.load();  
    sing.play(); 

    controlIcn.classList.add("fa-pause");
    controlIcn.classList.remove("fa-play");
    
});
before.addEventListener("click", () => {
    let random = Math.floor(Math.random() * music.length);

    song.src = music[random].song;
    image.src = music[random].image;
    artist.innerText = music[random].artist;
    name.innerText = music[random].name;

    sing.load(); 
    sing.play();  

    controlIcn.classList.add("fa-pause");
        controlIcn.classList.remove("fa-play");
});
