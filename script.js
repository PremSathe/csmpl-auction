const players = [
  {
    id: 1,
    name: "Abhinav Takale",
    type: "Batsman",
    photo: "images/1.अभिनव टाकळे.jpeg",
  },
  {
    id: 2,
    name: "Sahil Jadhav",
    type: "All-Rounder",
    photo: "images/2.साहिल जाधव.jpeg",
  },
  {
    id: 3,
    name: "Ritesh Dorugade",
    type: "All-Rounder",
    photo: "images/3.रितेश दारूगडे.jpeg",
  },
  {
    id: 4,
    name: "Vedant Apake",
    type: "All-Rounder",
    photo: "images/4.वेदांत आपके.jpeg",
  },
  {
    id: 5,
    name: "Vishal Malve",
    type: "Batsman",
    photo: "images/5.vishalMalve.jpeg",
  },
  {
    id: 6,
    name: "Ravi Harle",
    type: "All-Rounder",
    photo: "images/6.RockyHarle.jpeg",
  },
  {
    id: 7,
    name: "Yash Apake",
    type: "Batsman",
    photo: "images/7.यश आपके.jpeg",
  },
  {
    id: 8,
    name: "Yuvraj Kharwre",
    type: "All-Rounder",
    photo: "images/8.युवराज खवरे.png",
  },
  {
    id: 9,
    name: "Nayan Sawant",
    type: "Batsman",
    photo: "images/9.नयन सावंत.jpeg",
  },
  {
    id: 10,
    name: "Dhyaneshwar Uthale",
    type: "Batsman",
    photo: "images/10.ज्ञानेश्वर उथळे .jpeg",
  },
  {
    id: 11,
    name: "Prem Sathe",
    type: "All-Rounder",
    photo: "images/11.प्रेम साठे.png",
  },
  {
    id: 12,
    name: "Aditya Todkar",
    type: "Batsman",
    photo: "images/12.आदित्य तोडकर.jpeg",
  },
  {
    id: 13,
    name: "Roshan Belvekar",
    type: "All-Rounder",
    photo: "images/13.रोशन बेळवेकर.jpeg",
  },
  {
    id: 14,
    name: "Suraj Sapkal",
    type: "Batsman",
    photo: "images/14.सुरज सातवेकर.jpeg",
  },
  {
    id: 15,
    name: "Swapnil Satvekar",
    type: "Batsman",
    photo: "images/15.स्वप्निल सातवेकर.jpeg",
  },
  {
    id: 16,
    name: "Sandip Shinde",
    type: "All-Rounder",
    photo: "images/16.संदीप शिंदे.jpeg",
  },
  {
    id: 17,
    name: "Manthan Satvekar",
    type: "All-Rounder",
    photo: "images/17.मंथन सातवेकर.jpeg",
  },
  {
    id: 18,
    name: "Vishal Shah",
    type: "All-Rounder",
    photo: "images/18.Vishal Shah.jpeg",
  },
  {
    id: 19,
    name: "Bhairu Satvekar",
    type: "All-Rounder",
    photo: "images/19.भैरव सातवेकर.jpeg",
  },
  {
    id: 20,
    name: "Sachin Mandavkar",
    type: "All-Rounder",
    photo: "images/20.सचिन मांडवकर.png",
  },
  {
    id: 21,
    name: "Sunil Satvekar",
    type: "Bowler",
    photo: "images/21.सुनील सातवेकर.jpeg",
  },
  {
    id: 22,
    name: "Satish Chavan",
    type: "All-Rounder",
    photo: "images/22.सतीश चव्हाण.jpeg",
  },
  {
    id: 23,
    name: "Atharva Shirke",
    type: "Bowler",
    photo: "images/23.AthravShirke.jpeg",
  },
  {
    id: 24,
    name: "Shridhar Bakale",
    type: "Bowler",
    photo: "images/24.श्रीधर बाकले.jpeg",
  },
  {
    id: 25,
    name: "Om Bagwe",
    type: "All-Rounder",
    photo: "images/25.ओम बागवे.jpeg",
  },
  {
    id: 26,
    name: "Shrikant Dhure",
    type: "Batsman",
    photo: "images/26.श्रीकांत धुरे.jpeg",
  },
  {
    id: 27,
    name: "Sanil Gore",
    type: "All-Rounder",
    photo: "images/27.सनी गोरे.jpeg",
  },
  {
    id: 28,
    name: "Swapnil Kesarkar",
    type: "Bowler",
    photo: "images/28.स्वप्निल केसरकर.jpeg",
  },
  {
    id: 29,
    name: "Dayanand Nalawade",
    type: "All-Rounder",
    photo: "images/29.दयानंद नलावडे.jpeg",
  },
  {
    id: 30,
    name: "Sagar Jadhav",
    type: "All-Rounder",
    photo: "images/30.सागर जाधव.jpeg",
  },
  {
    id: 31,
    name: "Vedant Bilaskar",
    type: "Batsman",
    photo: "images/31.वेदांत बिळासकर.png",
  },
  {
    id: 32,
    name: "Ganesh Dhure",
    type: "Batsman",
    photo: "images/32.गणेश धुरे.jpeg",
  },
  {
    id: 33,
    name: "Shrikant Shegar",
    type: "All-Rounder",
    photo: "images/33.श्रीकांत शेगर.jpeg",
  },
  {
    id: 34,
    name: "Pramod Shegar",
    type: "Batsman",
    photo: "images/34.प्रमोद शेगर.jpeg",
  },
  {
    id: 35,
    name: "Raj Harle",
    type: "All-Rounder",
    photo: "images/35.राजेंद्र हारळे.jpeg",
  },
  {
    id: 36,
    name: "Aryan Kamble",
    type: "All-Rounder",
    photo: "images/36.aryan-kamble.jpg",
  },
  {
    id: 37,
    name: "Vedant Takale",
    type: "All-Rounder",
    photo: "images/37.वेदांत टाकळे.jpeg",
  },
  {
    id: 38,
    name: "Aradhya Shinde",
    type: "All-Rounder",
    photo: "images/38.आराध्य शिंदे.jpeg",
  },
  {
    id: 39,
    name: "Ayush Ingavle",
    type: "All-Rounder",
    photo: "images/39.aayush.jpg",
  },
  {
    id: 40,
    name: "Navish Mandavkar",
    type: "All-Rounder",
    photo: "images/40.navish-mandavkar.jpeg",
  },
  {
    id: 41,
    name: "Vedant Dhatombe",
    type: "All-Rounder",
    photo: "images/41.Vedant-dhatombe.jpg",
  },
  {
    id: 42,
    name: "Lokesh Mande",
    type: "All-Rounder",
    photo: "images/42.Lokesh-mande.jpg",
  },
];

const defaultTeams = [
  {
    id: 0,
    name: "Maratha Warriors",
    captain: "Dayanand Yesade",
    color: "#97b638",
    budget: 100000,
    squad: [],
    refillUsed: false,
    logo: "images/logo/1.marathaWorriors.png",
    captainImg: "images/captain/दयानंद येसादे.png",
  },
  {
    id: 1,
    name: "Kokan-Kada Packers",
    captain: "Prasad Kadam",
    color: "#FF69B4",
    budget: 100000,
    squad: [],
    refillUsed: false,
    logo: "images/logo/2.kokanKada.png",
    captainImg: "images/captain/प्रसाद कदम.png",
  },
  {
    id: 2,
    name: "Swaraj Rakshak",
    captain: "Pandurang Dorugade",
    color: "#86a8d6",
    budget: 100000,
    squad: [],
    refillUsed: false,
    logo: "images/logo/3.swarajRakshak.png",
    captainImg: "images/captain/पांडुरंग दोरुगडे.png",
  },
  {
    id: 3,
    name: "Maharaj Lions",
    captain: "Parikshit Patil",
    color: "#eb6b2d",
    budget: 100000,
    squad: [],
    refillUsed: false,
    logo: "images/logo/4.maharajsLion.png",
    captainImg: "images/captain/परीक्षित पाटील.png",
  },
  {
    id: 4,
    name: "Veer Maratha",
    captain: "Ankush Sawant",
    color: "#841810",
    budget: 100000,
    squad: [],
    refillUsed: false,
    logo: "images/logo/5.virMaratha.png",
    captainImg: "images/captain/अंकुश सावंत.png",
  },
  {
    id: 5,
    name: "Jay-Bhavani Packers",
    captain: "Roshan Dorugade",
    color: "#382566",
    budget: 100000,
    squad: [],
    refillUsed: false,
    logo: "images/logo/6.jayBhavani.png",
    captainImg: "images/captain/Roshan-Dorugade.png",
  },
];

let teams = JSON.parse(localStorage.getItem("csmpl_v3_data")) || defaultTeams;
let currentBid = 3000;
let activePlayer = null;

// --- AUDIO ASSETS ---
const iplMusic = new Audio(
  "https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=IPL+Theme+Song&filename=mt/mtu0mzi4mtczmtu0ndkz_0_2f_2fb_2f_2f_2f_2fpl_2btheme_2bsong.mp3",
);
const soldSound = new Audio("sounds/hammer.mp3"); // Your local sold sound file

function updateUI() {
  localStorage.setItem("csmpl_v3_data", JSON.stringify(teams));
  const left = document.getElementById("leftTeams");
  const right = document.getElementById("rightTeams");
  const squad = document.getElementById("squadView");
  const modal = document.getElementById("modalTeams");

  left.innerHTML = "";
  right.innerHTML = "";
  squad.innerHTML = "";
  modal.innerHTML = "";

  teams.forEach((t, i) => {
    const teamHTML = `
      <div class="team-card-small flex items-center gap-3" style="border-left-color: ${t.color}; background: ${t.color}15">
          <div class="relative shrink-0">
              <img src="${t.captainImg}" onerror="this.src='images/captain/default.png'" class="w-12 h-12 rounded-full border-2 object-cover" style="border-color: ${t.color}">
          </div>
          <div class="flex-1">
              <div class="flex justify-between text-[10px] font-bold text-gray-300 uppercase">
                  <span>${t.name}</span><span>${t.squad.length}/7</span>
              </div>
              <div class="text-lg font-black italic">₹${t.budget.toLocaleString()}</div>
              ${!t.refillUsed ? `<button onclick="refill(${t.id})" class="bg-white/10 hover:bg-white/20 text-[8px] px-2 py-0.5 rounded mt-0.5 font-bold border border-white/20 uppercase tracking-tighter">REFILL +30K</button>` : '<div class="text-[8px] opacity-30 mt-0.5 uppercase font-bold italic tracking-tighter">Refill Used</div>'}
          </div>
      </div>`;

    if (i < 3) left.innerHTML += teamHTML;
    else right.innerHTML += teamHTML;

    let playersList = `<div class="flex justify-between bg-white/5 p-1 rounded mb-1 text-xs"><span class="font-bold uppercase text-orange-400">${t.captain}</span><span class="captain-label">CPT</span></div>`;
    for (let j = 0; j < 7; j++) {
      playersList += `<div class="flex justify-between border-b border-white/5 text-[11px] py-1 text-gray-400"><span>${t.squad[j] ? t.squad[j].name : "---"}</span><span>${t.squad[j] ? "₹" + t.squad[j].price : ""}</span></div>`;
    }

    squad.innerHTML += `
      <div class="squad-card" style="border-top-color: ${t.color}">
          <div class="text-center border-b border-white/10 pb-3 mb-2">
              <div class="relative w-20 h-20 mx-auto mb-2">
                  <img src="${t.captainImg}" onerror="this.src='images/captain/default.png'" class="w-full h-full object-cover rounded-full border-4 shadow-lg" style="border-color: ${t.color}">
                  <img src="${t.logo}" class="absolute -bottom-1 -right-1 w-7 h-7 bg-slate-900 rounded-full p-1 border border-white/10">
              </div>
              <div class="text-[10px] font-black uppercase tracking-tighter" style="color: ${t.color}">${t.name}</div>
              <div class="inline-block px-4 py-1 rounded-full text-xs font-black mt-2 text-white" style="background: ${t.color}">₹${t.budget.toLocaleString()}</div>
          </div>
          <div class="flex-1 overflow-hidden">${playersList}</div>
      </div>`;

    modal.innerHTML += `<button onclick="finalizeSale(${t.id})" class="w-full hover:bg-white/10 p-3 rounded-xl flex justify-between font-bold text-sm border border-white/5" style="border-left: 4px solid ${t.color}">${t.name} <span style="color: ${t.color}">₹${t.budget.toLocaleString()}</span></button>`;
  });
  updateStats();
}

function updateStats() {
  const sold = teams.reduce((acc, t) => acc + t.squad.length, 0);
  const top = Math.max(
    ...teams.flatMap((t) =>
      t.squad.map((s) => parseInt(s.price.replace(/,/g, "")) || 0),
    ),
    0,
  );
  document.getElementById("stat-sold").innerText = sold;
  document.getElementById("stat-rem").innerText = players.length - sold;
  document.getElementById("stat-top").innerText = "₹" + top.toLocaleString();
}

function loadPlayer() {
  const id = document.getElementById("searchId").value;
  const p = players.find((x) => x.id == id);
  if (p) {
    activePlayer = p;
    currentBid = 3000;
    document.getElementById("maxLabel").classList.add("hidden");
    document.getElementById("p-name").innerText = p.name;
    document.getElementById("p-role").innerText = p.type;
    document.getElementById("p-img").src = p.photo;
    document.getElementById("bidDisplay").innerText =
      currentBid.toLocaleString();
    document.getElementById("playerSection").classList.remove("hidden");
    document.getElementById("idleText").classList.add("hidden");
  } else {
    alert("ID not found");
  }
}

function raiseBid() {
  if (currentBid >= 50000) return;
  let inc =
    currentBid < 10000
      ? 500
      : currentBid < 20000
        ? 1000
        : currentBid < 40000
          ? 2000
          : 5000;
  currentBid = Math.min(currentBid + inc, 50000);
  if (currentBid === 50000)
    document.getElementById("maxLabel").classList.remove("hidden");
  document.getElementById("bidDisplay").innerText = currentBid.toLocaleString();
}

function finalizeSale(tId) {
  const t = teams[tId];
  if (t.budget < currentBid) return alert("Low Budget!");
  if (t.squad.length >= 7) return alert("Squad Full!");
  t.budget -= currentBid;
  t.squad.push({ name: activePlayer.name, price: currentBid.toLocaleString() });
  showCeleb(activePlayer.name, currentBid, t.name, t.color, t.logo);
  closeModal();
  resetStage();
}

function showCeleb(name, price, team, color, logo) {
  const c = document.getElementById("soldCelebration");
  document.getElementById("celeb-name").innerText = name;
  document.getElementById("celeb-price").innerText =
    "₹" + price.toLocaleString();
  document.getElementById("celeb-team").innerText = team;
  document.getElementById("celeb-team").style.color = color;
  document.getElementById("celeb-logo").src = logo;

  c.classList.remove("hidden");
  c.classList.add("flex");

  // --- PLAY SOLD SOUNDS ---
  soldSound.currentTime = 0;
  soldSound.play().catch((e) => console.log("Sold sound play failed:", e));

  // Small delay for IPL music so the sold sound is clear
  setTimeout(() => {
    iplMusic.currentTime = 0;
    iplMusic.play().catch((e) => console.log("IPL Music play failed:", e));
  }, 400);

  setTimeout(() => {
    c.classList.add("hidden");
    iplMusic.pause();
    soldSound.pause();
  }, 8000);
}

function refill(id) {
  if (confirm("Add 30k?")) {
    teams[id].budget += 30000;
    teams[id].refillUsed = true;
    updateUI();
  }
}

function toggleView() {
  document.getElementById("squadView").classList.toggle("hidden");
}
function resetStage() {
  activePlayer = null;
  document.getElementById("playerSection").classList.add("hidden");
  document.getElementById("idleText").classList.remove("hidden");
  updateUI();
}
function openSoldModal() {
  document.getElementById("modal").classList.remove("hidden");
}
function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}
function resetTourney() {
  if (confirm("Reset All?")) {
    localStorage.clear();
    location.reload();
  }
}

updateUI();
