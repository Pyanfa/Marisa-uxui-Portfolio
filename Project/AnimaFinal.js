const woaFinalData = [
  {
    title: 'Main Menu',
    mainImg: 'Asset/Picture/AnimaFinal/Showcase/Main Menu.png',
    tags: ['Primary CTA'],
    desc: 'Places the Play button right below the logo to serve as the main focal point, allowing players to instantly find it for a smooth start. The design embraces the Halloween theme by blending global and traditional Thai cultures through pumpkin carvings featuring traditional Thai patterns.',
  },
  {
    title: 'Stage Selection',
    mainImg: 'Asset/Picture/AnimaFinal/Showcase/Stage Selection.png',
    tags: ['Level Progression'],
    desc: 'The game consists of 6 levels, starting with a tutorial that introduces game mechanics and elements before moving into actual gameplay. Each level gradually increases in difficulty and complexity, allowing players to learn and develop their skills step by step.',
  },
  {
    title: 'Mission Briefing',
    mainImg: 'Asset/Picture/AnimaFinal/Showcase/Mission Briefing.png',
    tags: ['Mission Briefing'],
    desc: 'In the final stage, existing mechanics are adapted with increased complexity to create a fresh gameplay experience. Mission objectives are introduced through an immediate card popup upon entering the level, ensuring players understand their goals before starting.',
  },
  {
    title: 'Item Economy',
    mainImg: 'Asset/Picture/AnimaFinal/Showcase/Item Economy.png',
    tags: ['Game Balance', 'Iterative Design'],
    bullets: [
      'Based on playtests, item boxes containing specific counter-items and hazard hints are placed near enemies to increase player interaction.',
      'Tweaked the mechanics to let players carry items over to subsequent levels, capped at 5 per item type for game balance.',
    ],
  },
  {
    title: 'Environmental Navigation',
    mainImg: 'Asset/Picture/AnimaFinal/Showcase/Environmental Navigation.png',
    tags: ['Visual Focus', 'Diegetic Guidance'],
    desc: "Utilizes lighting and decorative elements, such as red threads on the floor, to guide player's eyes toward the mission area—the ceremonial courtyard—making it easier for them to spot and locate objectives.",
  },
  {
    title: 'Level Exploration & Randomization',
    mainImg: 'Asset/Picture/AnimaFinal/Showcase/Level Exploration.png',
    tags: ['Replay Value', 'Randomized', 'Player Agency'],
    desc: 'Designs multiple paths with randomized item drops and mission item locations to increase gameplay variety and encourage replayability.',
  },
  {
    title: 'Environmental Mechanics',
    mainImg: 'Asset/Picture/AnimaFinal/Showcase/Environment.png',
    tags: ['Replay Value', 'Player Agency', 'Environmental Affordance'],
    desc: 'Designs the environment to allow players to utilize spaces for unique strategies, such as circular running routes that help them outsmart enemies and freely plan their movements.',
  },
  {
    title: 'Combat Feedback',
    mainImg: 'Asset/Picture/AnimaFinal/Showcase/Feedback.png',
    tags: ['Immediate Feedback', 'Visual Juiciness'],
    desc: 'When players attack an enemy, it triggers a fear animation accompanied by visual effects to clearly communicate the impact of the attack, while enhancing the sense of gratification and player satisfaction.',
  },
  {
    title: 'Leaderboard',
    mainImg: 'Asset/Picture/AnimaFinal/Showcase/Leaderboard.png',
    tags: ['Thematic UI Integration', 'Replay Motivation'],
    bullets: [
      'Features a best-time leaderboard to foster competition and encourage players to break their own records.',
      'Styled the leaderboard with old paper textures and bloodstains to match the abandoned art school horror theme and enhance immersion.',
    ],
  },
];

function selectWoaDesign(index) {
  const data = woaFinalData[index];
  if (!data) return;

  // 1. เปลี่ยนภาพใหญ่พร้อมเอฟเฟกต์ Fade
  const mainImg = document.getElementById('woa-final-main-img');
  mainImg.style.opacity = '0';
  setTimeout(() => {
    mainImg.src = data.mainImg;
    mainImg.style.opacity = '1';
  }, 150);

  // 2. เปลี่ยนข้อความหัวข้อ
  document.getElementById('woa-final-title-text').textContent = data.title;

  // 3. เปลี่ยน Tags
  const tagsContainer = document.getElementById('woa-final-tags');
  tagsContainer.innerHTML = data.tags
    .map(
      (tag) =>
        `<span class="px-3 py-1 rounded-full text-xs font-semibold bg-white/60 text-slate-700 shadow-xs">● ${tag}</span>`
    )
    .join('');

  // 4. เปลี่ยนข้อความอธิบาย (รองรับทั้ง desc และ bullets)
  const descContainer = document.getElementById('woa-final-desc');

  if (data.bullets && Array.isArray(data.bullets)) {
    // ถ้ามี bullets ให้สร้างเป็นรายการ <ul> <li>
    descContainer.innerHTML = `
      <ul class="list-disc pl-5 space-y-1">
        ${data.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
      </ul>
    `;
  } else {
    // ถ้าเป็น desc ปกติ
    descContainer.innerHTML = data.desc || '';
  }

  // 5. ไฮไลต์เส้นขอบ Thumbnail ตัวที่เลือก
  const buttons = document.querySelectorAll('.woa-thumb-btn img');
  buttons.forEach((btn, i) => {
    if (i === index) {
      btn.classList.remove('border-transparent');
      btn.classList.add('border-slate-700/60');
    } else {
      btn.classList.remove('border-slate-700/60');
      btn.classList.add('border-transparent');
    }
  });

  // 6. อัปเดตจุด Dots ทั้ง 9 จุด
  const dots = document.querySelectorAll('#woa-final-dots span');
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.remove('bg-white/60');
      dot.classList.add('bg-slate-700');
    } else {
      dot.classList.remove('bg-slate-700');
      dot.classList.add('bg-white/60');
    }
  });

  // 7. เลื่อนตำแหน่ง Thumbnail ที่เลือกให้อยู่ตรงกลางแถวอัตโนมัติ
  const activeBtn = buttons[index]?.parentElement;
  const container = document.getElementById('woa-thumb-container');
  if (activeBtn && container) {
    const scrollLeft =
      activeBtn.offsetLeft -
      container.clientWidth / 2 +
      activeBtn.clientWidth / 2;
    container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  }
}

// ฟังก์ชันกดปุ่มลูกศรเลื่อนซ้าย-ขวา
function scrollThumbnails(direction) {
  const container = document.getElementById('woa-thumb-container');
  if (!container) return;
  const scrollAmount = 220;
  if (direction === 'left') {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}
window.selectWoaDesign = selectWoaDesign;
