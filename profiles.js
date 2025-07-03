let profiles = [
  {
    name: "Davina Karamoy",
    about: "Cewek gamers dan suka olahraga tennis, siap nemenin kamu sparing atau sekedar nonton pertandingan bareng biar makin seru! Enerjik, ceria, dan gampang bikin nyaman diajak ngobrol setelah main.",
    birth: "1 Mei 2002",
    dislikes: "Ga suka cowok yang lemah & noob",
    services: "Main game bareng, nge-gym, sleepcall, chat mesra sebelum bobo dll",
    city: "New York, USA",
    age: 22,
    hobby: "Main game & Tennis",
    img1: ".//assets/fotocewe/Davina1.jpg",
    img2: ".//assets/fotocewe/Davina2.jpg",
    img3: ".//assets/fotocewe/Davina3.jpg"
  },
  {
    name: "Maria Theodoree",
    about: "Model dan cewek pantai siap nemenin kamu hunting sunset, main pasir, atau sekadar healing tepi laut. Santai, fun, dan suka bikin vibes liburan jadi hangat.",
    birth: "12 Februari 2001",
    dislikes: "Ga suka cowok yang controlling, ga menjaga penampilan & perhitungan",
    services: "Travelling, bisa main apa aja di pantai (surfing, banana boat dll), request pap apa aja, bisa request jalan bareng kondangan, acara keluarga dll",
    city: "San Diego, USA",
    age: 24,
    hobby: "Fashion & Hunting sunset/sunrise",
    img1: ".//assets/fotocewe/Maria1.jpg",
    img2: ".//assets/fotocewe/Maria2.jpg",
    img3: ".//assets/fotocewe/Maria3.jpg"
  },
  {
    name: "Erica Carlina",
    about: "Queen of Party yang suka riding pagi/sore keliling kota sambil cari kopi enak, Enerjik, fun, dan bikin harimu nggak ngebosenin!",
    birth: "8 Juli 1996",
    dislikes: "Ga suka cowok suka ngatur, over jealous & mata keranjang",
    services: "Riding bareng, touring, party sampai pagi, ngecafe dll",
    city: "Los Angeles, USA",
    age: 29,
    hobby: "Touring & Party",
    img1: ".//assets/fotocewe/New Project (18).jpg",
    img2: ".//assets/fotocewe/New Project (17).jpg",
    img3: ".//assets/fotocewe/New Project (16).jpg"
  },
  {
    name: "Ariel Tatum",
    about: "Aktris dengan aura elegan dan tatapan penuh cerita yang siap nemenin kamu ke kafe buku atau baca bareng di taman sambil ngobrol hal random. Tenang, sabar, dan bisa jadi pendengar yang bikin nyaman.",
    birth: "27 September 1992",
    dislikes: "Ga suka cowok kasar & cuek",
    services: "Bisa jadi pendengar yg baik dengerin curhatmu selama apapun (privasi aman), joki live code & graded challenge dll",
    city: "Paris, France",
    age: 33,
    hobby: "Baca buku & Acting",
    img1: ".//assets/fotocewe/Ariel1.jpg",
    img2: ".//assets/fotocewe/Ariel2.jpg",
    img3: ".//assets/fotocewe/Ariel3.jpg"
  },
  {
    name: "Kame Hitori",
    about: "Cewek yang suka cosplay karakter Jepang dan anime, bisa nemenin kamu event cosplay atau sekadar hangout aesthetic bareng. Seru, fun, dan vibes kawaii.",
    birth: "30 Maret 2003",
    dislikes: "Ga suka dibandingin sama org lain & melarang tanpa alasan jelas",
    services: "Bisa cosplay apapun, hangout, buatin bekal, video call dll",
    city: "Tokyo, Japan",
    age: 22,
    hobby: "Cosplay",
    img1: ".//assets/fotocewe/cp3.jpg",
    img2: ".//assets/fotocewe/cp2.jpg",
    img3: ".//assets/fotocewe/cp1.jpg"
  }
]



function getRandomItems(array, count) {
  var copied = [];
  for (var i = 0; i < array.length; i++) {
    copied.push(array[i]);
  }

  copied.sort(function() {
    return Math.random() - 0.5;
  });

  var result = [];
  for (var j = 0; j < count; j++) {
    result.push(copied[j]);
  }

  return result;
}


// let service = ['chat mesra','semangatin setiap hari','diucapin selamat pagi, siang, sore & malam','sleepcall - tlp mesra sebelum bobo','bisa request pap','bisa request jalan bareng kondangan, acara keluarga','bisa curhat apa aja - privasi aman','bisa cosplay apa aja','bisa dibuatin bekal','video call','main game bareng','nonton bareng','olahraga bareng','joki live code dan graded challenge']
// let dislikes = [
//   "ga suka dicuekin",
//   "gak suka kalau dilarang ini itu tanpa alasan jelas",
//   "split blit",
//   "bau harus wangi pokoknya",
//   "terlalu posesif dan banyak ngatur",
//   "ga suka dibandingin sama org lain",
//   "ga suka dengan yang malu-malu meong"
// ];

// for (let i = 0; i < profiles.length; i++) {
//   profiles[i].services = getRandomItems(service, 3);
//   profiles[i].dislikes = getRandomItems(dislikes, 2);
// }



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
  document.getElementById("dislike").textContent = profile.dislikes
  document.getElementById("service").textContent = profile.services

}

document.querySelector(".btn-outline-danger").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % profiles.length;
  displayProfile(currentIndex);
});

document.querySelector(".btn-outline-success").addEventListener("click", () => {
  const profile = profiles[currentIndex];
  const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
  const buttonContainer = document.getElementById("day-buttons");

  // Hapus isi sebelumnya
  buttonContainer.innerHTML = "";

  // Tambahkan tombol hari
  for (let i = 0; i < days.length; i++) {
  let day = days[i];
  let btn = document.createElement("button");
  btn.textContent = day;
  btn.className = "btn btn-outline-danger";

  btn.onclick = function() {
    alert("Kamu janji keep " + profile.name + " di hari " + day + " 🥰");
  };

  buttonContainer.appendChild(btn);
}


  // Tampilkan popup
  document.getElementById("hariPopup").style.display = "flex";
});

function closePopup() {
  document.getElementById("hariPopup").style.display = "none";
}



// Optional: load the first profile at start
displayProfile(currentIndex);
