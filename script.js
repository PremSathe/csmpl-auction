/* ==========================================
   DATA & CONFIGURATION
   ========================================== */

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
    name: "Rocky Harale",
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
    name: "Raj Harale",
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
    color: "#ff0000",
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

const themeMusic = new Audio("sounds/ipl3.mp3");
const soldMusic = new Audio("sounds/ipl2.mp3");
const bidTick = new Audio("sounds/bid_tick.mp3");

/* ==========================================
   HYPE & COUNTDOWN
   ========================================== */

function checkHypeStatus() {
  const hypePage = document.getElementById("hypePage");
  const isHypeDone = sessionStorage.getItem("csmpl_hype_done");
  const soldCount = teams.reduce(
    (acc, t) => acc + (t.squad ? t.squad.length : 0),
    0,
  );

  if (!isHypeDone && soldCount === 0) {
    if (hypePage) {
      hypePage.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
  } else if (hypePage) {
    hypePage.remove();
  }
}

function startCountdown() {
  const hypeContent = document.getElementById("hypeContent");
  const countdownDisplay = document.getElementById("countdownDisplay");
  const timerNumber = document.getElementById("timerNumber");
  const hypePage = document.getElementById("hypePage");

  hypeContent.classList.add("hidden");
  countdownDisplay.classList.remove("hidden");

  let count = 10;
  themeMusic.play().catch(() => console.log("Audio blocked"));

  const interval = setInterval(() => {
    count--;
    if (count > 0) {
      timerNumber.innerText = count;
      timerNumber.classList.remove("animate-ping");
      void timerNumber.offsetWidth;
      timerNumber.classList.add("animate-ping");
    } else {
      clearInterval(interval);
      timerNumber.innerText = "GO!";
      sessionStorage.setItem("csmpl_hype_done", "true");
      setTimeout(() => {
        hypePage.style.opacity = "0";
        setTimeout(() => {
          hypePage.remove();
          document.body.style.overflow = "auto";
        }, 1000);
      }, 800);
    }
  }, 1000);
}

checkHypeStatus();

/* ==========================================
   CORE UI RENDERING
   ========================================== */

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
            <div class="team-card-wrapper" onclick="showTeamSquad(${t.id})">
                <img src="${encodeURI(t.logo)}" class="team-logo-bubble" style="border-color: ${t.color}">
                <div class="team-card-content" style="border-left: 5px solid ${t.color}">
                    <img src="${encodeURI(t.captainImg)}" class="captain-thumb" onerror="this.src='images/captain/default.png'">
                    <div class="flex-1">
                        <div class="flex justify-between items-start">
                            <span class="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">${t.name}</span>
                            <span class="text-[10px] font-black text-white">${t.squad.length}/7</span>
                        </div>
                        <div class="budget-text italic">₹${t.budget.toLocaleString()}</div>
                        <div class="flex justify-between items-center mt-1">
                            <span class="text-[8px] font-bold text-orange-500 uppercase">${t.captain.split(" ")[0]}</span>
                            ${!t.refillUsed ? `<button onclick="event.stopPropagation(); refill(${t.id})" class="text-[7px] bg-white/10 px-1 rounded border border-white/20">REFILL</button>` : ""}
                        </div>
                    </div>
                </div>
            </div>`;

    if (i < 3) left.innerHTML += teamHTML;
    else right.innerHTML += teamHTML;

    let playersList = `<div class="flex justify-between bg-white/5 p-1 rounded mb-1 text-xs"><span class="font-bold uppercase text-orange-400">${t.captain}</span><span class="captain-label">CPT</span></div>`;
    for (let j = 0; j < 7; j++) {
      const p = t.squad[j];
      let rIcon = p
        ? p.type === "Batsman"
          ? "🏏"
          : p.type === "Bowler"
            ? "⚾"
            : "🏏⚾"
        : "";
      playersList += `
                <div class="flex justify-between border-b border-white/5 text-[11px] py-1 text-gray-400">
                    <span>${p ? p.name : "---"} <span class="role-icon">${rIcon}</span></span>
                    <span class="flex items-center">
                        ${p ? "₹" + p.price : ""}
                        ${p ? `<span class="release-btn" onclick="releasePlayer(${t.id}, ${j})">−</span>` : ""}
                    </span>
                </div>`;
    }

    squad.innerHTML += `
            <div class="squad-card" style="border-top-color: ${t.color}">
                <div class="text-center border-b border-white/10 pb-3 mb-2">
                    <div class="relative w-20 h-20 mx-auto mb-2">
                        <img src="${encodeURI(t.captainImg)}" class="w-full h-full object-cover rounded-full border-4" style="border-color: ${t.color}">
                        <img src="${encodeURI(t.logo)}" class="absolute -bottom-1 -right-1 w-7 h-7 bg-slate-900 rounded-full p-1">
                    </div>
                    <div class="text-[10px] font-black uppercase tracking-tighter" style="color: ${t.color}">${t.name}</div>
                    <div class="inline-block px-4 py-1 rounded-full text-xs font-black mt-2 text-white" style="background: ${t.color}">₹${t.budget.toLocaleString()}</div>
                </div>
                <div class="flex-1 overflow-hidden">${playersList}</div>
            </div>`;

    const canAfford = t.budget >= currentBid;
    const isFull = t.squad.length >= 7;

    modal.innerHTML += `
            <button onclick="${canAfford && !isFull ? `finalizeSale(${t.id})` : ""}" 
                class="w-full p-3 rounded-xl flex justify-between font-bold text-sm border border-white/5 transition-all
                ${!canAfford || isFull ? "opacity-30 cursor-not-allowed grayscale bg-red-900/10" : "hover:bg-white/10"}" 
                style="border-left: 4px solid ${t.color}">
                ${t.name} 
                <span style="color: ${canAfford ? t.color : "#ef4444"}">
                    ₹${t.budget.toLocaleString()} ${isFull ? "(FULL)" : ""}
                </span>
            </button>`;
  });
  updateStats();
}

/* 1. UPDATED TOP BUYER MARQUEE LOGIC */
function updateStats() {
  const soldCount = teams.reduce((acc, t) => acc + t.squad.length, 0);
  let topPrice = 0;
  let topPlayers = [];

  // 1. Find the highest price and all players who have it
  teams.forEach((t) => {
    t.squad.forEach((p) => {
      let pVal = parseInt(p.price.replace(/,/g, ""));
      if (pVal > topPrice) {
        topPrice = pVal;
        topPlayers = [{ name: p.name, teamColor: t.color }];
      } else if (pVal === topPrice && topPrice > 0) {
        topPlayers.push({ name: p.name, teamColor: t.color });
      }
    });
  });

  // 2. Update basic counts
  document.getElementById("stat-sold").innerText = soldCount;
  document.getElementById("stat-rem").innerText = players.length - soldCount;

  // 3. Handle the Top Buy Display
  const topStatElement = document.getElementById("stat-top");

  if (topPlayers.length === 0) {
    topStatElement.innerHTML = `
            <div class="text-[10px] text-gray-500 uppercase font-bold">No Sales</div>
            <div class="text-xl md:text-2xl font-black text-green-400">₹0</div>
        `;
  } else if (topPlayers.length === 1) {
    // Single player: No sliding needed
    topStatElement.innerHTML = `
            <div class="text-[10px] font-bold uppercase truncate" style="color: ${topPlayers[0].teamColor}">
                ${topPlayers[0].name}
            </div>
            <div class="text-xl md:text-2xl font-black text-green-400">₹${topPrice.toLocaleString()}</div>
        `;
  } else {
    // Multiple players: Create the sliding marquee
    const namesString = topPlayers
      .map((p) => `<span style="color:${p.teamColor}">${p.name}</span>`)
      .join(" <span class='text-white/20 mx-4'>•</span> ");

    topStatElement.innerHTML = `
            <div class="marquee-container">
                <div class="marquee-content text-[10px] font-bold uppercase">
                    ${namesString} <span class='text-white/20 mx-4'>•</span> ${namesString}
                </div>
            </div>
            <div class="text-xl md:text-2xl font-black text-green-400">₹${topPrice.toLocaleString()}</div>
        `;
  }
}

/* 2. PLAYER LIST MODAL LOGIC */
function openPlayerListModal() {
  const unsoldContainer = document.getElementById("unsold-list-container");
  const soldContainer = document.getElementById("sold-list-container");
  const soldNames = teams.flatMap((t) => t.squad.map((p) => p.name));

  unsoldContainer.innerHTML = "";
  soldContainer.innerHTML = "";

  let uCount = 0;
  let sCount = 0;

  players.forEach((p) => {
    const isSold = soldNames.includes(p.name);
    const playerTeam = isSold
      ? teams.find((t) => t.squad.some((s) => s.name === p.name))
      : null;

    const row = `
            <div class="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-all">
                <div class="flex items-center gap-3">
                    <span class="text-gray-500 font-mono text-xs w-6">#${p.id}</span>
                    <span class="text-white font-bold text-sm uppercase">${p.name}</span>
                </div>
                ${
                  isSold
                    ? `<span class="text-[9px] font-black px-2 py-1 rounded text-slate-950 uppercase" style="background:${playerTeam.color}">${playerTeam.name}</span>`
                    : `<span class="text-[9px] text-gray-500 italic uppercase">In Pool</span>`
                }
            </div>
        `;

    if (isSold) {
      soldContainer.innerHTML += row;
      sCount++;
    } else {
      unsoldContainer.innerHTML += row;
      uCount++;
    }
  });

  document.getElementById("unsold-count-list").innerText = uCount;
  document.getElementById("sold-count-list").innerText = sCount;
  document.getElementById("playerListModal").classList.remove("hidden");
}

function closePlayerListModal() {
  document.getElementById("playerListModal").classList.add("hidden");
}

/* ==========================================
   AUCTION LOGIC
   ========================================== */

function loadPlayer() {
  const id = document.getElementById("searchId").value;
  const p = players.find((x) => x.id == id);
  if (p) {
    activePlayer = p;
    currentBid = 3000;
    let buyer = teams.find((t) => t.squad.some((s) => s.name === p.name));

    document.getElementById("p-name").innerText = p.name;
    document.getElementById("p-role").innerText = p.type;
    document.getElementById("p-img").src = encodeURI(p.photo);
    document.getElementById("playerSection").classList.remove("hidden");
    document.getElementById("idleText").classList.add("hidden");

    const stamp = document.getElementById("searchSoldStamp");
    const ctrl = document.getElementById("auctionControls");

    if (buyer) {
      stamp.innerHTML = `SOLD <span style="display: block; font-size: 14px; margin-top: 4px; opacity: 0.8; letter-spacing: 1px;">TO: ${buyer.name.toUpperCase()}</span>`;
      stamp.classList.remove("hidden");
      ctrl.style.visibility = "hidden";
      document.getElementById("bidDisplay").innerText = buyer.squad.find(
        (s) => s.name === p.name,
      ).price;
    } else {
      stamp.classList.add("hidden");
      ctrl.style.visibility = "visible";
      document.getElementById("bidDisplay").innerText =
        currentBid.toLocaleString();
    }
    updateUI();
  } else alert("ID not found");
}

function raiseBid() {
  // Stop if no player or if we are already at the 50k Max
  if (!activePlayer || currentBid >= 50000) return;

  bidTick.currentTime = 0;
  bidTick.play().catch(() => {});

  let inc;
  if (currentBid < 10000) {
    inc = 500;
  } else if (currentBid < 20000) {
    inc = 1000;
  } else {
    // Strictly 2000 increment for everything above 20k
    inc = 2000;
  }

  // Calculate new bid but cap it at 50,000
  currentBid = Math.min(currentBid + inc, 50000);

  document.getElementById("bidDisplay").innerText = currentBid.toLocaleString();
  updateUI();
}

function lowerBid() {
  // Floor remains at 3,000
  if (!activePlayer || currentBid <= 3000) return;

  bidTick.currentTime = 0;
  bidTick.play().catch(() => {});

  let dec;
  if (currentBid <= 10000) {
    dec = 500;
  } else if (currentBid <= 20000) {
    dec = 1000;
  } else {
    // Mirror the raise logic with 2000 decrement
    dec = 2000;
  }

  // Ensure it doesn't drop below the 3,000 minimum
  currentBid = Math.max(currentBid - dec, 3000);

  document.getElementById("bidDisplay").innerText = currentBid.toLocaleString();
  updateUI();
}

// function raiseBid() {
//   if (!activePlayer || currentBid >= 50000) return;
//   bidTick.currentTime = 0;
//   bidTick.play().catch(() => {});
//   let inc =
//     currentBid < 10000
//       ? 500
//       : currentBid < 20000
//         ? 1000
//         : currentBid < 40000
//           ? 2000
//           : 2000;
//   currentBid = Math.min(currentBid + inc, 50000);
//   document.getElementById("bidDisplay").innerText = currentBid.toLocaleString();
//   updateUI();
// }

// function lowerBid() {
//   if (!activePlayer || currentBid <= 3000) return;
//   bidTick.currentTime = 0;
//   bidTick.play().catch(() => {});
//   let dec =
//     currentBid <= 10000
//       ? 500
//       : currentBid <= 20000
//         ? 1000
//         : currentBid <= 40000
//           ? 2000
//           : 5000;
//   currentBid = Math.max(currentBid - dec, 3000);
//   document.getElementById("bidDisplay").innerText = currentBid.toLocaleString();
//   updateUI();
// }

function finalizeSale(tId) {
  const t = teams[tId];
  if (t.budget < currentBid) return alert("Low Budget!");
  if (t.squad.length >= 7) return alert("Squad Full!");

  t.budget -= currentBid;
  t.squad.push({
    name: activePlayer.name,
    price: currentBid.toLocaleString(),
    type: activePlayer.type,
  });

  showCeleb(
    activePlayer.name,
    currentBid,
    t.name,
    t.color,
    t.logo,
    activePlayer.photo,
  );
  closeModal();
  resetStage();
}

function showCeleb(name, price, team, color, logo, photo) {
  const c = document.getElementById("soldCelebration");
  document.getElementById("celeb-name").innerText = name;
  document.getElementById("celeb-price").innerText =
    "₹" + price.toLocaleString();
  document.getElementById("celeb-team").innerText = team;
  document.getElementById("celeb-team").style.color = color;
  document.getElementById("celeb-logo").src = encodeURI(logo);
  document.getElementById("celeb-player-img").src = encodeURI(photo);

  c.classList.remove("hidden");
  c.classList.add("flex");
  themeMusic.pause();
  soldMusic.currentTime = 0;
  soldMusic.play().catch(() => {});

  const totalSold = teams.reduce((acc, t) => acc + t.squad.length, 0);
  const isLast = totalSold === players.length;

  setTimeout(() => {
    c.classList.add("hidden");
    c.classList.remove("flex");
    soldMusic.pause();
    if (isLast) triggerAuctionComplete();
    else updateStats();
    ``;
  }, 4000);
}

/* ==========================================
   ELITE SUSPENSE DICE (3 SECOND VERSION)
   ========================================== */

function rollDice() {
  const soldPlayerNames = teams.flatMap((t) => t.squad.map((p) => p.name));
  const pool1 = players.filter(
    (p) => p.id <= 36 && !soldPlayerNames.includes(p.name),
  );
  const pool2 = players.filter(
    (p) => p.id > 36 && p.id <= 42 && !soldPlayerNames.includes(p.name),
  );

  let targetPool = pool1.length > 0 ? pool1 : pool2.length > 0 ? pool2 : [];
  if (targetPool.length === 0)
    return alert("AUCTION TERMINATED: ALL PLAYERS SOLD!");

  const overlay = document.createElement("div");
  overlay.id = "diceSuspense";
  overlay.className =
    "fixed inset-0 z-[500] bg-slate-950 flex flex-col items-center justify-center backdrop-blur-3xl animate-fadeIn";

  overlay.innerHTML = `
        <div class="scanline"></div>
        <div class="relative flex flex-col items-center w-full">
            <div class="absolute w-[400px] h-[400px] border border-orange-500/10 rounded-full animate-pulse"></div>
            
            <div class="dice-scene">
                <div id="cube" class="cube cube-rolling">
                    <div class="cube-face face-front">?</div>
                    <div class="cube-face face-back">?</div>
                    <div class="cube-face face-right">?</div>
                    <div class="cube-face face-left">?</div>
                    <div class="cube-face face-top">?</div>
                    <div class="cube-face face-bottom">?</div>
                </div>
            </div>

            <div class="text-center mt-8">
                <h2 id="eliteStatusText" class="text-white text-3xl md:text-5xl font-black italic tracking-tighter uppercase">
                    <span class="text-orange-500">Scanning Database...</span>
                </h2>
                <p id="poolBadge" class="mt-4 text-orange-500/50 font-bold tracking-[0.5em] text-xs">
                    POOL: ${pool1.length > 0 ? "LEGENDS" : "NEXT GEN"}
                </p>
            </div>
        </div>
    `;
  document.body.appendChild(overlay);

  if (bidTick) {
    bidTick.play();
  }

  // Randomize faces during roll
  const cubeFaces = overlay.querySelectorAll(".cube-face");
  const interval = setInterval(() => {
    cubeFaces.forEach((face) => {
      face.innerText = Math.floor(Math.random() * 42) + 1;
    });
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    const selectedPlayer =
      targetPool[Math.floor(Math.random() * targetPool.length)];
    const cube = document.getElementById("cube");
    const statusText = document.getElementById("eliteStatusText");

    // Stop Rolling and Reveal
    cube.classList.remove("cube-rolling");
    cube.style.transform = "rotateX(0deg) rotateY(0deg) scale(1.5)";

    cubeFaces.forEach((face) => {
      face.innerText = selectedPlayer.id;
      face.style.borderColor = "#22c55e";
      face.style.boxShadow = "inset 0 0 30px rgba(34, 197, 94, 0.6)";
    });

    statusText.innerHTML = `<span class="text-green-500 animate-bounce">Player Selected: #${selectedPlayer.id}</span>`;

    setTimeout(() => {
      overlay.classList.add("opacity-0");
      setTimeout(() => {
        overlay.remove();
        document.getElementById("searchId").value = selectedPlayer.id;
        loadPlayer();
      }, 500);
    }, 2000);
  }, 3000);
}

/* ==========================================
   UTILITIES & NAVIGATION
   ========================================== */

function triggerAuctionComplete() {
  if (document.getElementById("auctionCompleteScreen")) return;
  themeMusic.currentTime = 0;
  themeMusic.play().catch(() => {});

  const endScreen = document.createElement("div");
  endScreen.id = "auctionCompleteScreen";
  endScreen.className =
    "fixed inset-0 z-[300] flex flex-col items-center justify-center text-center p-6 bg-slate-950 animate-fadeIn";
  endScreen.innerHTML = `
        <div class="animate-bounce mb-4"><span class="bg-orange-600 text-white px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest">Season 3 Finalized</span></div>
        <h1 class="text-6xl md:text-8xl font-black italic text-white mb-2 tracking-tighter uppercase">AUCTION COMPLETE</h1>
        <div class="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md mb-12 shadow-2xl">
            <div class="launch-date text-5xl md:text-7xl font-black mb-2" style="background: linear-gradient(90deg, #f97316, #fbbf24); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">18th March 2026</div>
            <p class="text-white/60 font-bold tracking-[0.3em] uppercase">CSMPL Season 3 Launch</p>
        </div>
        <button onclick="finalizeAndShowSquads()" class="bg-orange-600 hover:bg-orange-500 text-white px-12 py-5 rounded-2xl font-black text-2xl shadow-2xl uppercase italic transition-all active:scale-95">View Final Squads</button>`;

  document.body.appendChild(endScreen);
  createConfetti();
}

function finalizeAndShowSquads() {
  const endScreen = document.getElementById("auctionCompleteScreen");
  endScreen.classList.add("opacity-0", "transition-opacity", "duration-700");
  setTimeout(() => {
    endScreen.remove();
    const sv = document.getElementById("squadView");
    sv.classList.remove("hidden");
    document.getElementById("viewToggleBtn").innerText = "Auction View";
    window.scrollTo({ top: 0, behavior: "smooth" });
    themeMusic.pause();
  }, 700);
}

function createConfetti() {
  const colors = ["#f97316", "#ffffff", "#22c55e", "#3b82f6"];
  const container = document.getElementById("auctionCompleteScreen");
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const conf = document.createElement("div");
      conf.className = "absolute top-[-20px]";
      conf.style.left = Math.random() * 100 + "vw";
      conf.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      conf.style.width = "8px";
      conf.style.height = "10px";
      conf.animate(
        [
          { transform: "translateY(0) rotate(0)", opacity: 1 },
          { transform: "translateY(110vh) rotate(720deg)", opacity: 0 },
        ],
        { duration: 3000 },
      );
      container.appendChild(conf);
    }, i * 30);
  }
}

function refill(id) {
  if (confirm("Add 30k?")) {
    teams[id].budget += 30000;
    teams[id].refillUsed = true;
    updateUI();
  }
}

function toggleView() {
  const sv = document.getElementById("squadView");
  sv.classList.toggle("hidden");
  document.getElementById("viewToggleBtn").innerText = sv.classList.contains(
    "hidden",
  )
    ? "Squad View"
    : "Auction View";
}

function resetStage() {
  activePlayer = null;
  document.getElementById("searchId").value = "";
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
  if (confirm("Reset All Data?")) {
    localStorage.clear();
    sessionStorage.clear();
    location.reload();
  }
}

function showTeamSquad(id) {
  const t = teams[id];
  document.getElementById("modalTeamLogo").src = encodeURI(t.logo);
  document.getElementById("modalTeamName").innerText = t.name;
  document.getElementById("modalTeamName").style.color = t.color;
  document.getElementById("modalTeamBudget").innerText =
    "Remaining: ₹" + t.budget.toLocaleString();
  const list = document.getElementById("modalSquadList");
  list.innerHTML = `<div class="flex justify-between bg-white/10 p-2 rounded text-sm font-bold"><span>${t.captain}</span><span class="text-orange-500">CPT</span></div>`;
  t.squad.forEach((p) => {
    list.innerHTML += `<div class="flex justify-between border-b border-white/5 py-2 text-sm"><span>${p.name}</span><span class="text-green-400 font-bold">₹${p.price}</span></div>`;
  });
  document.getElementById("teamSquadModal").classList.remove("hidden");
}

function closeTeamModal() {
  document.getElementById("teamSquadModal").classList.add("hidden");
}

function releasePlayer(tId, pIdx) {
  const t = teams[tId];
  const p = t.squad[pIdx];
  if (confirm(`Release ${p.name}?`)) {
    t.budget += parseInt(p.price.replace(/,/g, ""));
    t.squad.splice(pIdx, 1);
    updateUI();
  }
}

/* ==========================================
   KEYBOARD SHORTCUTS
   ========================================== */

document.addEventListener("keydown", (e) => {
  if (document.activeElement.id === "searchId") {
    if (e.key === "Enter") loadPlayer();
    return;
  }
  switch (e.key.toLowerCase()) {
    case "arrowup":
    case "r":
      raiseBid();
      e.preventDefault();
      break;
    case "arrowdown":
      lowerBid();
      e.preventDefault();
      break;
    case "d":
      rollDice();
      break;
    case "s":
      if (activePlayer) openSoldModal();
      break;
    case "l":
      document.getElementById("searchId").focus();
      e.preventDefault();
      break;
    case "escape":
      closeModal();
      closeTeamModal();
      break;
  }
});

updateUI();
