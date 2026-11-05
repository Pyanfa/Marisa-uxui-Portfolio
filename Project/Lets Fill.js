const letsFillFinalData = [
  {
    title: 'Main Menu',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Main Menu.png',
    tags: ['Focal Point', "Fitts's Law"],
    bullets: [
      'ออกแบบปุ่มให้มีขนาดใหญ่เพื่อเพิ่มความสะดวกและลดความคลาดเคลื่อนในการสัมผัสบนอุปกรณ์พกพาซึ่งมีขนาดหน้าจอไม่ใหญ่มาก',
      'จัดวางปุ่มที่สำคัญและใช้งานบ่อยไว้ด้านบน เพื่อลดเวลาในการค้นหาและเข้าถึงฟังก์ชันได้ รวดเร็วขึ้น',
    ],
  },
  {
    title: 'Cut Scene',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Cut Scene.png',
    tags: ['Public Friendly', 'Storytelling', 'Quick Access'],
    bullets: [
      'นำเสนอเนื้อหาในรูปแบบหนังสือการ์ตูนสั้นเพื่อกระตุ้นความสนใจของนักศึกษาทันตแพทย์ก่อนเริ่มฝึกปฏิบัติงาน',
      'วางปุ่มข้ามและปุ่มถัดไปให้อยู่ในตำแหน่งที่เข้าถึงได้ด้วยนิ้วโป้งทั้งสองฝั่ง',
    ],
  },
  {
    title: 'Character Selection',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Choose Character.png',
    tags: ['Mental Model', 'Immediate Feedback', 'Clarity & Focus'],
    bullets: [
      'ระบบเลือกตัวละครอาจารย์และนักศึกษา เพื่อสร้างความรู้สึกมีส่วนร่วมและจำลองบรรยากาศคลินิก',
      'เน้นระยะห่างขององค์ประกอบเพื่อป้องกันการกดผิดพลาดบนหน้าจอสัมผัส',
    ],
  },
  {
    title: 'Sign In',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Sign In.png',
    tags: ['Mental Model'],
    bullets: [
      'การสร้างบัตรประจำตัวนักศึกษาจำลองเพื่อบันทึกสถิติและประวัติการทำหัตถการ',
      'จัดวางช่องป้อนข้อมูลและปุ่มยืนยันให้อยู่ตรงกลางเพื่อความสมดุลด้านสายตา',
    ],
  },
  {
    title: 'Examination',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Examination.png',
    tags: ['Immediate Feedback', 'Contrast'],
    bullets: [
      'หน้าศูนย์รวมคลินิกจำลอง แยกหมวดหมู่การรักษาและระดับความยาก-ง่ายชัดเจน',
      'ใช้สัญลักษณ์ไอคอนช่วยสื่อความหมายเพื่อลดภาระการอ่านข้อความ (Cognitive Load)',
    ],
  },
  {
    title: 'Intraoral Examination',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Intraoral Examination.png',
    tags: ['Contrast', 'Real Clinical Photos'],
    bullets: [
      'แสดงประวัติคนไข้ อาการสำคัญ และภาพถ่ายทางรังสีจำลองอย่างเป็นระบบ',
      'แบ่งส่วนข้อมูลด้วยคอนทราสต์สีสว่าง เพื่อให้นักศึกษาอ่านทำความเข้าใจได้รวดเร็ว',
    ],
  },
  {
    title: 'Tooth Examination',
    mainImg: 'Asset/Picture/DentalFinal/Showcasel/Tooth Examination.png',
    tags: ['Tool Recognition'],
    bullets: [
      'แผนภูมิช่องปากแบบโต้ตอบได้ ช่วยให้นักศึกษากำหนดตำแหน่งฟันซี่ที่จะทำการกรอได้อย่างแม่นยำ',
      'แสดงไฮไลต์ตำแหน่งรอยผูกรอยซี่ฟันด้วยสีตัดกันเพื่อการสังเกตที่ชัดเจน',
    ],
  },
  {
    title: 'Diagnosis',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Diagnosis.png',
    tags: ['Mental Model'],
    bullets: [
      'รายการลำดับขั้นตอนการรักษา ป้องกันการข้ามขั้นตอนสำคัญในคลินิกจริง',
      'ใช้ช่องติ๊กเลือกขนาดใหญ่เพื่อให้โต้ตอบได้ง่ายขณะถือเครื่องมือจำลอง',
    ],
  },
  {
    title: 'Preparation',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Preparation.png',
    tags: ['Focus-driven', 'Simulation'],
    bullets: [
      'จำลองการกรอฟันแบบเรียลไทม์ พร้อมการแสดงผลความลึกและความกว้างของโพรงฟัน',
      'จัดวางปุ่มเปลี่ยนหัวกรอและปรับความเร็วไว้ที่มุมล่างเพื่อให้เข้าถึงได้ทันที',
    ],
  },
  {
    title: 'Preparation Result',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Preparation Result.png',
    tags: ['Gamification', 'Mental Reward'],
    bullets: [
      'แสดงผลการประเมินย่อยทันทีภายใน 2 วินาทีหลังจบสเต็ป เพื่อปรับแก้ไขเทคนิคได้ทันท่วงที',
      'ใช้การแจ้งเตือนแบบ Pop-up สีสดใสเพื่อดึงดูดความสนใจโดยไม่รบกวนสมาธิ',
    ],
  },
  {
    title: 'Error Alert & Correction Guidance',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Incorrect Answer Feedback.png',
    tags: [' UI Consistency', 'UX Writing'],
    bullets: [
      'ระบบเตือนเมื่อกรอโดนเนื้อฟันส่วนดีหรือโพรงประสาทฟัน พร้อมคำแนะนำวิธีแก้ไข',
      'ใช้อิโมจิและข้อความสั้นกระชับ สื่อสารตรงประเด็นเพื่อความเข้าในการปฏิบัติ',
    ],
  },
  {
    title: 'Positive Feedbak',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Positive Feedbak.png',
    tags: ['Contrast'],
    bullets: [
      'ขั้นตอนการอุดฟันตามมาตรฐานทันตกรรม แบ่งลำดับ Etching, Bonding และอุดวัสดุชัดเจน',
      'เน้นปุ่มสลับขั้นตอนด้วยความเข้มสีที่แตกต่างกันเพื่อบอกสถานะปัจจุบัน',
    ],
  },
  {
    title: 'Dental Material Application Simulation',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Etching.png',
    tags: ['Guide', 'Interactive Simulation'],
    bullets: [
      'จำลองการใส่วัสดุอุดฟันและการขึ้นรูปทรงฟันตามหลักกายวิภาคศาสตร์',
      'แสดงแถบวัดปริมาณวัสดุช่วยให้นักศึกษาควบคุมปริมาณได้อย่างเหมาะสม',
    ],
  },
  {
    title: 'Syringe Operation Simulation',
    mainImg:
      'Asset/Picture/DentalFinal/Showcase/Syringe Operation Simulation.png',
    tags: ['Simulation'],
    bullets: [
      'จำลองการฉายแสงฉายฉายวัสดุและการขัดแต่งผิวฟันให้เรียบเนียน',
      'แสดงตัวนับเวลาถอยหลังขนาดใหญ่ ชัดเจน อ่านง่ายขณะทำหัตถการ',
    ],
  },
  {
    title: 'Light Curing',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Light Curing.png',
    tags: ['Knowledge Retention', 'Visual Feedback'],
    bullets: [
      'ระบบจำลองการดูดน้ำและน้ำลายในช่องปาก ช่วยฝึกลำดับการทำงานร่วมกับผู้ช่วย',
      'จัดตำแหน่งเครื่องมือดูดไว้มุมด้านข้างเพื่อไม่ให้บดบังพื้นที่ทำงานหลัก',
    ],
  },
  {
    title: 'Result',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Result.png',
    tags: ['Performance Evaluation', 'Feedback'],
    bullets: [
      'การ์ดสรุปคะแนนประเมินรวม รายงานจุดแข็งและจุดที่ต้องปรับปรุงแยกตามหัวข้อ',
      'มีปุ่มเรคคอร์ดสำหรับยื่นส่งผลการซ้อมให้อาจารย์ประจำวิชาตรวจเช็กได้สะดวก',
    ],
  },
];

function selectLfDesign(index) {
  const data = letsFillFinalData[index];
  if (!data) return;

  // 1. เปลี่ยนภาพใหญ่พร้อมเอฟเฟกต์ Fade
  const mainImg = document.getElementById('lf-final-main-img');
  mainImg.style.opacity = '0';
  setTimeout(() => {
    mainImg.src = data.mainImg;
    mainImg.style.opacity = '1';
  }, 150);

  // 2. เปลี่ยนข้อความหัวข้อ
  document.getElementById('lf-final-title-text').textContent = data.title;

  // 3. เปลี่ยน Tags
  const tagsContainer = document.getElementById('lf-final-tags');
  tagsContainer.innerHTML = data.tags
    .map(
      (tag) =>
        `<span class="px-3 py-1 rounded-full text-xs font-semibold bg-white/60 text-slate-700 shadow-xs">● ${tag}</span>`
    )
    .join('');

  // 4. เปลี่ยนข้อความคำอธิบาย Bullet Points
  const bulletsContainer = document.getElementById('lf-final-bullets');
  bulletsContainer.innerHTML = data.bullets
    .map(
      (b) =>
        `<li class="flex items-start space-x-2"><span class="text-slate-900 mt-1">•</span><span>${b}</span></li>`
    )
    .join('');

  // 5. ไฮไลต์เส้นขอบ Thumbnail ตัวที่เลือก
  const buttons = document.querySelectorAll('.lf-thumb-btn img');
  buttons.forEach((btn, i) => {
    if (i === index) {
      btn.classList.remove('border-transparent');
      btn.classList.add('border-slate-700/60');
    } else {
      btn.classList.remove('border-slate-700/60');
      btn.classList.add('border-transparent');
    }
  });

  // 6. อัปเดตจุด Dots ทั้ง 16 จุด
  const dots = document.querySelectorAll('#lf-final-dots span');
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.remove('bg-white/60');
      dot.classList.add('bg-slate-700');
    } else {
      dot.classList.remove('bg-slate-700');
      dot.classList.add('bg-white/60');
    }
  });

  // 7. เลื่อนตำแหน่ง Thumbnail ที่เลือกให้อยู่ตรงกลางแถวสโครลอัตโนมัติ
  const activeBtn = buttons[index]?.parentElement;
  const container = document.getElementById('lf-thumb-container');
  if (activeBtn && container) {
    const scrollLeft =
      activeBtn.offsetLeft -
      container.clientWidth / 2 +
      activeBtn.clientWidth / 2;
    container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  }
}

// ฟังก์ชันกดปุ่มลูกศรเลื่อนซ้าย-ขวา
function scrollLfThumbnails(direction) {
  const container = document.getElementById('lf-thumb-container');
  if (!container) return;
  const scrollAmount = 220;
  if (direction === 'left') {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}
window.selectLfDesign = selectLfDesign;
