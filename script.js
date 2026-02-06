// let players = [];
// let currentBid = 3000;
// let activePlayer = null;

// const defaultTeams = [
//   {
//     id: 0,
//     name: "Maratha Warriors",
//     captain: "Dayanand Yesade",
//     color: "#97b638",
//     budget: 80000,
//     squad: [],
//     refillUsed: false,
//   },
//   {
//     id: 1,
//     name: "Fort King",
//     captain: "Prasad Kadam",
//     color: "#86a8d6",
//     budget: 80000,
//     squad: [],
//     refillUsed: false,
//   },
//   {
//     id: 2,
//     name: "Raigad Ranger's",
//     captain: "Pandurang Dorugade",
//     color: "#d92f46",
//     budget: 80000,
//     squad: [],
//     refillUsed: false,
//   },
//   {
//     id: 3,
//     name: "Maharaj Lions",
//     captain: "Parikshit Patil",
//     color: "#841810",
//     budget: 80000,
//     squad: [],
//     refillUsed: false,
//   },
//   {
//     id: 4,
//     name: "Veer Maratha",
//     captain: "Ankush Sawant",
//     color: "#eb6b2d",
//     budget: 80000,
//     squad: [],
//     refillUsed: false,
//   },
//   {
//     id: 5,
//     name: "Panhala panthers",
//     captain: "Roshan Dorugade",
//     color: "#382566",
//     budget: 80000,
//     squad: [],
//     refillUsed: false,
//   },
// ];

// let teams = JSON.parse(localStorage.getItem("csmpl_v3_data")) || defaultTeams;

// fetch("players.json")
//   .then((r) => r.json())
//   .then((d) => (players = d));

// function updateUI() {
//   localStorage.setItem("csmpl_v3_data", JSON.stringify(teams));
//   const left = document.getElementById("leftTeams");
//   const right = document.getElementById("rightTeams");
//   const squad = document.getElementById("squadView");
//   const modal = document.getElementById("modalTeams");

//   left.innerHTML = "";
//   right.innerHTML = "";
//   squad.innerHTML = "";
//   modal.innerHTML = "";

//   teams.forEach((t, i) => {
//     // Auction Sidebar
//     const teamHTML = `
//             <div class="team-card-small" style="border-left-color: ${t.color}; background: ${t.color}15">
//                 <div class="flex justify-between text-[9px] font-bold text-gray-300 uppercase">
//                     <span>${t.name}</span><span>${t.squad.length}/7</span>
//                 </div>
//                 <div class="text-xl font-black">₹${t.budget.toLocaleString()}</div>
//                 ${!t.refillUsed ? `<button onclick="refill(${t.id})" class="bg-white/10 hover:bg-white/20 text-[8px] px-2 py-0.5 rounded mt-1 font-bold border border-white/20">REFILL +30K</button>` : '<div class="text-[8px] opacity-30 mt-1 uppercase font-bold italic">Refill Used</div>'}
//             </div>
//         `;
//     if (i < 3) left.innerHTML += teamHTML;
//     else right.innerHTML += teamHTML;

//     // Squad View
//     let squadPlayersHTML = `<div class="flex justify-between bg-white/5 p-1 rounded mb-1 text-xs">
//             <span class="font-bold uppercase text-orange-400">${t.captain}</span><span class="captain-label">CPT</span>
//         </div>`;

//     for (let j = 0; j < 7; j++) {
//       squadPlayersHTML += `
//                 <div class="flex justify-between border-b border-white/5 text-[11px] py-1 text-gray-400">
//                     <span>${t.squad[j] ? t.squad[j].name : "---"}</span>
//                     <span class="text-white/50">${t.squad[j] ? "₹" + t.squad[j].price : ""}</span>
//                 </div>
//             `;
//     }

//     squad.innerHTML += `
//             <div class="squad-card" style="border-top-color: ${t.color}">
//                 <div class="mb-2 text-center border-b border-white/10 pb-1">
//                     <div class="text-[10px] font-bold" style="color: ${t.color}">${t.name}</div>
//                     <div class="text-lg font-black italic">₹${t.budget.toLocaleString()}</div>
//                 </div>
//                 <div class="flex-1 overflow-hidden">${squadPlayersHTML}</div>
//             </div>
//         `;

//     // Modal Teams
//     modal.innerHTML += `
//             <button onclick="finalizeSale(${t.id})" class="w-full hover:bg-white/10 p-3 rounded-xl flex justify-between font-bold text-sm transition border border-white/5" style="border-left: 4px solid ${t.color}">
//                 ${t.name} <span style="color: ${t.color}">₹${t.budget.toLocaleString()}</span>
//             </button>
//         `;
//   });
// }

// function loadPlayer() {
//   const id = document.getElementById("searchId").value;
//   const p = players.find((x) => x.id == id);
//   if (p) {
//     activePlayer = p;
//     currentBid = 3000;
//     document.getElementById("p-name").innerText = p.name;
//     document.getElementById("p-role").innerText = p.type;
//     document.getElementById("p-img").src = p.photo;
//     document.getElementById("bidDisplay").innerText =
//       currentBid.toLocaleString();
//     document.getElementById("playerSection").classList.remove("hidden");
//     document.getElementById("idleText").classList.add("hidden");
//   }
// }

// function raiseBid() {
//   if (currentBid < 10000) currentBid += 500;
//   else if (currentBid < 20000) currentBid += 1000;
//   else if (currentBid < 50000) currentBid += 2000;
//   document.getElementById("bidDisplay").innerText = currentBid.toLocaleString();
// }

// function finalizeSale(tId) {
//   const t = teams[tId];
//   if (t.budget < currentBid) return alert("Insufficient Budget!");
//   if (t.squad.length >= 7) return alert("Squad is Full (7 Players Max)!");

//   t.budget -= currentBid;
//   t.squad.push({ name: activePlayer.name, price: currentBid.toLocaleString() });
//   closeModal();
//   resetStage();
// }

// function refill(id) {
//   if (confirm(`Use +30,000 refill for ${teams[id].name}?`)) {
//     teams[id].budget += 30000;
//     teams[id].refillUsed = true;
//     updateUI();
//   }
// }

// function toggleView() {
//   document.getElementById("squadView").classList.toggle("hidden");
// }
// function resetStage() {
//   activePlayer = null;
//   document.getElementById("playerSection").classList.add("hidden");
//   document.getElementById("idleText").classList.remove("hidden");
//   document.getElementById("searchId").value = "";
//   updateUI();
// }

// function openSoldModal() {
//   document.getElementById("modal").classList.remove("hidden");
// }
// function closeModal() {
//   document.getElementById("modal").classList.add("hidden");
// }
// function resetTourney() {
//   if (confirm("CLEAR ALL DATA?")) {
//     localStorage.clear();
//     location.reload();
//   }
// }

// updateUI();

let players = [
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
    photo: "images/11.प्रेम साठे.jpeg",
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

let currentBid = 3000;
let activePlayer = null;

const defaultTeams = [
  {
    id: 0,
    name: "Maratha Warriors",
    captain: "Dayanand Yesade",
    color: "#97b638",
    budget: 80000,
    squad: [],
    refillUsed: false,
  },
  {
    id: 1,
    name: "Fort King",
    captain: "Prasad Kadam",
    color: "#86a8d6",
    budget: 80000,
    squad: [],
    refillUsed: false,
  },
  {
    id: 2,
    name: "Raigad Ranger's",
    captain: "Pandurang Dorugade",
    color: "#d92f46",
    budget: 80000,
    squad: [],
    refillUsed: false,
  },
  {
    id: 3,
    name: "Maharaj Lions",
    captain: "Parikshit Patil",
    color: "#841810",
    budget: 80000,
    squad: [],
    refillUsed: false,
  },
  {
    id: 4,
    name: "Veer Maratha",
    captain: "Ankush Sawant",
    color: "#eb6b2d",
    budget: 80000,
    squad: [],
    refillUsed: false,
  },
  {
    id: 5,
    name: "Panhala panthers",
    captain: "Roshan Dorugade",
    color: "#382566",
    budget: 80000,
    squad: [],
    refillUsed: false,
  },
];

let teams = JSON.parse(localStorage.getItem("csmpl_v3_data")) || defaultTeams;

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
      <div class="team-card-small" style="border-left-color: ${t.color}; background: ${t.color}15">
          <div class="flex justify-between text-[9px] font-bold text-gray-300 uppercase">
              <span>${t.name}</span><span>${t.squad.length}/7</span>
          </div>
          <div class="text-xl font-black">₹${t.budget.toLocaleString()}</div>
          ${!t.refillUsed ? `<button onclick="refill(${t.id})" class="bg-white/10 hover:bg-white/20 text-[8px] px-2 py-0.5 rounded mt-1 font-bold border border-white/20">REFILL +30K</button>` : '<div class="text-[8px] opacity-30 mt-1 uppercase font-bold italic">Refill Used</div>'}
      </div>`;
    if (i < 3) left.innerHTML += teamHTML;
    else right.innerHTML += teamHTML;

    let squadPlayersHTML = `<div class="flex justify-between bg-white/5 p-1 rounded mb-1 text-xs">
        <span class="font-bold uppercase text-orange-400">${t.captain}</span><span class="captain-label">CPT</span>
    </div>`;

    for (let j = 0; j < 7; j++) {
      squadPlayersHTML += `
        <div class="flex justify-between border-b border-white/5 text-[11px] py-1 text-gray-400">
            <span>${t.squad[j] ? t.squad[j].name : "---"}</span>
            <span class="text-white/50">${t.squad[j] ? "₹" + t.squad[j].price : ""}</span>
        </div>`;
    }

    squad.innerHTML += `
      <div class="squad-card" style="border-top-color: ${t.color}">
          <div class="mb-2 text-center border-b border-white/10 pb-1">
              <div class="text-[10px] font-bold" style="color: ${t.color}">${t.name}</div>
              <div class="text-lg font-black italic">₹${t.budget.toLocaleString()}</div>
          </div>
          <div class="flex-1 overflow-hidden">${squadPlayersHTML}</div>
      </div>`;

    modal.innerHTML += `
      <button onclick="finalizeSale(${t.id})" class="w-full hover:bg-white/10 p-3 rounded-xl flex justify-between font-bold text-sm transition border border-white/5" style="border-left: 4px solid ${t.color}">
          ${t.name} <span style="color: ${t.color}">₹${t.budget.toLocaleString()}</span>
      </button>`;
  });
}

function loadPlayer() {
  const id = document.getElementById("searchId").value;
  const p = players.find((x) => x.id == id);
  if (p) {
    activePlayer = p;
    currentBid = 3000;
    document.getElementById("p-name").innerText = p.name;
    document.getElementById("p-role").innerText = p.type;
    document.getElementById("p-img").src = p.photo;
    document.getElementById("bidDisplay").innerText =
      currentBid.toLocaleString();
    document.getElementById("playerSection").classList.remove("hidden");
    document.getElementById("idleText").classList.add("hidden");
  } else {
    alert("Player ID not found!");
  }
}

function raiseBid() {
  if (currentBid < 10000) currentBid += 500;
  else if (currentBid < 20000) currentBid += 1000;
  else if (currentBid < 50000) currentBid += 2000;
  document.getElementById("bidDisplay").innerText = currentBid.toLocaleString();
}

function finalizeSale(tId) {
  const t = teams[tId];
  if (t.budget < currentBid) return alert("Insufficient Budget!");
  if (t.squad.length >= 7) return alert("Squad is Full (7 Players Max)!");

  t.budget -= currentBid;
  t.squad.push({ name: activePlayer.name, price: currentBid.toLocaleString() });
  closeModal();
  resetStage();
}

function refill(id) {
  if (confirm(`Use +30,000 refill for ${teams[id].name}?`)) {
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
  document.getElementById("searchId").value = "";
  updateUI();
}

function openSoldModal() {
  document.getElementById("modal").classList.remove("hidden");
}
function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}
function resetTourney() {
  if (confirm("CLEAR ALL DATA?")) {
    localStorage.clear();
    location.reload();
  }
}

updateUI();
