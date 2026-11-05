const woaFinalData = [
  {
    title: 'Main Menu',
    mainImg: 'Asset/Picture/AnimaFinal/Showcase/Main Menu.png',
    tags: ['Primary CTA'],
    desc: 'จัดวางปุ่ม Play ไว้ใต้โลโก้ เพื่อให้เป็นจุดสนใจหลักและช่วยให้ผู้เล่นค้นหาปุ่มเริ่มเกมได้ทันที สะดวกต่อการเริ่มเล่น และออกแบบให้เข้ากับเทศกาลฮาโลวีนโดยผสมผสานกลิ่นอายวัฒนธรรมสากลและไทยดั้งเดิม โดยฟักทองแกะสลักด้วยลายแบบไทยๆ',
  },
  {
    title: 'Stage Selection',
    mainImg: 'Asset/Picture/AnimaFinal/Showcase/Stage Selection.png',
    tags: ['Level Progression'],
    desc: 'ออกแบบหน้าเลือกด่านให้อ่านง่าย ชัดเจน แสดงรายละเอียดและภารกิจของแต่ละด่านเพื่อให้ผู้เล่นเตรียมตัวก่อนเริ่มเกมได้อย่างมีประสิทธิภาพ',
  },
  {
    title: 'Mission Briefing',
    mainImg: 'Asset/Picture/AnimaFinal/Showcase/Mission Briefing.png',
    tags: ['Mission Briefing'],
    desc: 'หน้าแสดงสถานะตัวละคร และช่องจัดเก็บไอเทมที่ออกแบบมาให้ค้นหาและใช้งานง่าย ลดความซับซ้อนขณะเล่นเกม',
  },
  {
    title: 'Item Economy',
    mainImg: 'Asset/Picture/AnimaFinal/Showcase/Item Economy.png',
    tags: ['Game Balance', 'Iterative Design'],
    desc: 'มุมมองบรรยากาศขณะเล่นจริง ออกแบบอินเทอร์เฟซให้น้อยที่สุด (Minimal HUD) เพื่อไม่ให้บดบังทัศนียภาพและเพิ่มความอินกับบรรยากาศสยองขวัญ',
  },
  {
    title: 'Environmental Navigation',
    mainImg: 'Asset/Picture/AnimaFinal/Showcase/Environmental Navigation.png',
    tags: ['Visual Focus', 'Diegetic Guidance'],
    desc: 'การนำทางภายในฉากด้วยแสงสว่างและองค์ประกอบสิ่งแวดล้อม ช่วยแนะแนวทางผู้เล่นโดยไม่ต้องพึ่งพามินิแมปขนาดใหญ่',
  },
  {
    title: 'Level Exploration & Randomization',
    mainImg: 'Asset/Picture/AnimaFinal/Showcase/Level Exploration.png',
    tags: ['Replay Value', 'Randomized', 'Player Agency'],
    desc: 'องค์ประกอบที่มีปฏิสัมพันธ์ได้ในฉากจะแสดงสัญลักษณ์และเอฟเฟกต์การตอบสนองที่ชัดเจนเมื่อผู้เล่นเข้าใกล้',
  },
  {
    title: 'Environmental Mechanics',
    mainImg: 'Asset/Picture/AnimaFinal/Showcase/Environment.png',
    tags: ['Replay Value', 'Player Agency', 'Environmental Affordance'],
    desc: 'การใช้แสงสว่างเฉพาะจุดในการสร้างบรรยากาศความน่ากลัว พร้อมทั้งใช้จัดลำดับความสำคัญของสายตาผู้เล่นไปยังจุดปริศนา',
  },
  {
    title: 'Combat Feedback',
    mainImg: 'Asset/Picture/AnimaFinal/Showcase/Feedback.png',
    tags: ['Immediate Feedback', 'Visual Juiciness'],
    desc: 'ฉากเหตุการณ์สำคัญภายในเกม เพิ่มความตื่นเต้นด้วยแสงสีและการเปลี่ยนแปลงของสภาพแวดล้อมอย่างฉับพลัน',
  },
  {
    title: 'Leaderboard',
    mainImg: 'Asset/Picture/AnimaFinal/Showcase/Leaderboard.png',
    tags: ['Thematic UI Integration', 'Replay Motivation'],
    desc: 'สมุดบันทึกเบาะแสและเนื้อเรื่องจำลองสไตล์หนังสือเก่า ช่วยให้ผู้เล่นย้อนอ่านเนื้อหาและไขปริศนาได้สะดวกยิ่งขึ้น',
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

  // 4. เปลี่ยนข้อความอธิบาย
  document.getElementById('woa-final-desc').textContent = data.desc;

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
