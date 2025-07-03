let profiles = [
  {
    name: "Lana Sinclair",
    about: "NYC girl with a killer crosscourt and a weakness for good banter. Catch me on the tennis court—or catching feelings over matcha lattes. If you're into playful smirks, spontaneous adventures, and someone who can ace both style and serve… we might just be a match.",
    birth: "1 May 2002",
    city: "New York, USA",
    age: 22,
    hobby: "tennis",
    img1: ".//assets/fotocewe/1.jpg",
    img2: ".//assets/fotocewe/2.jpg",
    img3: ".//assets/fotocewe/3.jpg"
  },
  {
    name: "Maya Hanami",
    about: "Tokyo-born, Jakarta-raised—equal parts sweet and spicy. I vibe with late-night karaoke, boba runs, and long drives with the windows down. Swipe right if you’re fluent in sarcasm and compliments.",
    birth: "12 February 2001",
    city: "Jakarta, Indonesia",
    age: 24,
    hobby: "singing",
    img1: ".//assets/fotocewe/Maria1.jpg",
    img2: ".//assets/fotocewe/Maria2.jpg",
    img3: ".//assets/fotocewe/Maria3.jpg"
  },
  {
    name: "Chloe Martinez",
    about: "Latina fire with a soft spot for rooftop sunsets and dad jokes. I’m here to steal fries, hearts, and maybe your hoodie. Let’s pretend we met at a museum, not on an app.",
    birth: "8 July 2000",
    city: "San Diego, USA",
    age: 25,
    hobby: "photography",
    img1: ".//assets/fotocewe/Davina1.jpg",
    img2: ".//assets/fotocewe/Davina2.jpg",
    img3: ".//assets/fotocewe/Davina3.jpg"
  },
  {
    name: "Sasha Beaumont",
    about: "French soul, global spirit. Fluent in three languages and flirting in all of them. I read tarot, dance barefoot, and believe good energy starts with a great playlist. Are you ready for your next adventure?",
    birth: "27 September 1999",
    city: "Paris, France",
    age: 25,
    hobby: "dancing",
    img1: ".//assets/fotocewe/Ariel1.jpg",
    img2: ".//assets/fotocewe/Ariel2.jpg",
    img3: ".//assets/fotocewe/Ariel3.jpg"
  },
  {
    name: "Kiara Ellington",
    about: "Digital daydreamer with a Polaroid heart. I live for midnight playlists, glitter eyeliner, and conversations that spiral into 3AM confessions. If you're into moodboards, moon phases, and messy giggles, let's rewrite our stars.",
    birth: "30 March 2003",
    city: "Los Angeles, USA",
    age: 22,
    hobby: "journaling",
    img1: ".//assets/fotocewe/cp1.jpg",
    img2: ".//assets/fotocewe/cp2.jpg",
    img3: ".//assets/fotocewe/cp3.jpg"
  }
]



function getRandomItems(array, count) {
  const shuffled = [...array].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
let service = ['chat mesra','semangatin setiap hari','diucapin selamat pagi, siang, sore & malam','sleepcall - tlp mesra sebelum bobo','bisa request pap','bisa request jalan bareng kondangan, acara keluarga','bisa curhat apa aja - privasi aman','bisa cosplay apa aja','bisa dibuatin bekal','video call','main game bareng','nonton bareng','olahraga bareng','joki live code dan graded challenge']
let dislikes = [
  "ga suka dicuekin",
  "gak suka kalau dilarang ini itu tanpa alasan jelas",
  "split blit",
  "bau harus wangi pokoknya",
  "terlalu posesif dan banyak ngatur",
  "ga suka dibandingin sama org lain",
  "ga suka dengan yang malu-malu meong"
];

profiles = profiles.map(profile => ({
...profile,
services: getRandomItems(service, 3),
  dislikes: getRandomItems(dislikes, 2)
}));




let currentIndex = 0;

function displayProfile(index) {
  const profile = profiles[index];
  document.getElementById("profile-name").textContent = profile.name;
  document.getElementById("profile-about").textContent = profile.about;
  document.getElementById("profile-birthday").textContent = profile.birth;
  document.getElementById("profile-city").textContent = profile.city;
  document.getElementById("profile-age").textContent = profile.age;
  document.getElementById("profile-hobby").textContent = profile.hobby;
  document.getElementById("foto1").src = profile.img1;
  document.getElementById("foto2").src = profile.img2;
  document.getElementById("foto3").src = profile.img3;
  document.getElementById("dislike").textContent = profile.dislikes.join(", ");
  document.getElementById("service").textContent = profile.services.join(", ");

}

document.querySelector(".btn-outline-danger").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % profiles.length;
  displayProfile(currentIndex);
});

// Optional: load the first profile at start
displayProfile(currentIndex);
