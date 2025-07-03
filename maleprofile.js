let profiles = [
  {
    name: "Jefri Nichol",
    about: "Cowok yang aktif nge-gym dan seorang model, siap nemenin kamu workout atau sekadar coffee after gym. Badan sehat, vibes positif, no ribet.",
    birth: "17 September 1996",
    dislikes: "Over jealous dan pemalas klemak-klemek",
    services: "Work out bareng, chat mesra, video call, bisa request pap dll",
    city: "Paris, France",
    age: 29,
    hobby: "Gym & Fashion",
    img1: ".//assets/fotocowo/New Project.jpg",
    img2: ".//assets/fotocowo/New Project (1).jpg",
    img3: ".//assets/fotocowo/New Project (2).jpg"
  },
  {
    name: "Angga Yunanda",
    about: "Aktor yang suka healing ke pantai dan sunsetan sambil ngobrol random. Fun, easy going, bisa bikin vibes hangat kayak drama Korea.",
    birth: "14 February 2002",
    dislikes: "Cewek pick me dan suka drama queen",
    services: "Sunsetan atau surfing bareng, bisa request jalan bareng kondangan, acara keluarga dll",
    city: "Jakarta, Indonesia",
    age: 23,
    hobby: "Surfing",
    img1: ".//assets/fotocowo/New Project (3).jpg",
    img2: ".//assets/fotocowo/New Project (4).jpg",
    img3: ".//assets/fotocowo/New Project (5).jpg"
  },
  {
    name: "Julian Jacob",
    about: "Penyanyi yang suka musik dan live acoustic, bisa nemenin kamu nongkrong sambil nyanyi pelan biar malam kamu lebih tenang. Calm, hangat, no drama.",
    birth: "25 Desember 1999",
    dislikes: "Ga suka dibandingin sama org lain dan ga suka yang cuek",
    services: "Nonton konser bareng, bisa nyanyiin kamu setiap malam, kirim vn dll",
    city: "Shanghai, Chinese",
    age: 26,
    hobby: "Music & watch a concert",
    img1: ".//assets/fotocowo/New Project (6).jpg",
    img2: ".//assets/fotocowo/New Project (7).jpg",
    img3: ".//assets/fotocowo/New Project (8).jpg"
  },
  {
    name: "Verrel Bramasta",
    about: "Pengusaha muda yang suka riding motor bareng untuk short escape. Gentleman vibes, dewasa, tapi tetap fun buat diajak ngobrol dan kopi bareng.",
    birth: "8 Oktober 1995",
    dislikes: "Terlalu posesif dan banyak ngatur",
    services: "Riding bareng, traveling, ngecafe dll",
    city: "Los Angeles, USA",
    age: 30,
    hobby: "Riding & Touring",
    img1: ".//assets/fotocowo/New Project (9).jpg",
    img2: ".//assets/fotocowo/New Project (10).jpg",
    img3: ".//assets/fotocowo/New Project (11).jpg"
  },
  {
    name: "Darius Sinathrya",
    about: "Cowok dewasa dengan daddy sugar vibes, siap nemenin kamu dinner fancy atau staycation dengan obrolan berkualitas. Tenang, sabar, dan selalu bikin kamu merasa aman.",
    birth: "30 Juni 1986",
    dislikes: "Ga suka dengan yang malu-malu meong dan bau (harus wangi pokoknya)",
    services: "Bisa semangatin setiap hari, nyiapin dinner fancy, staycation dll",
    city: "Bangkok, Thailand",
    age: 39,
    hobby: "Golf, Spa & Fine Dining",
    img1: ".//assets/fotocowo/New Project (12).jpg",
    img2: ".//assets/fotocowo/New Project (13).jpg",
    img3: ".//assets/fotocowo/New Project (14).jpg"
  }
]


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
  document.getElementById("dislikes").textContent = profile.dislikes
  document.getElementById("services").textContent = profile.services
}

document.querySelector(".btn-outline-danger").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % profiles.length;
  displayProfile(currentIndex);
});

// Optional: load the first profile at start
displayProfile(currentIndex);