const finalDesignData = [
  {
    title: 'Main Menu',
    mainImg: 'Asset/Picture/CoralFinal/MainMenu.png',
    tags: ['Contrast', 'Primary CTA', 'Simplified Choices'],
    bullets: [
      'Emphasized the Start button using orange against a blue background, with subtle animation to attract attention and guide users to click.',
      'Established a clear visual hierarchy by arranging the logo, language selection, and Start button in the order of actual use.',
      'Removed unnecessary options, leaving only language selection and the Start button to simplify decision-making.',
    ],
  },
  {
    title: 'Sign In',
    mainImg: 'Asset/Picture/CoralFinal/SignIn.png',
    tags: ['Accessibility', 'Multi-Language', 'Visual Cues'],
    bullets: [
      'Improved form readability using white containers against a blue background to separate input fields and maintain focus.',
      'Added national flag icons to help users quickly identify languages or country codes without reading text.',
      'Used a large orange submit button to maximize visibility and ease of interaction.',
    ],
  },
  {
    title: 'Character',
    mainImg: 'Asset/Picture/CoralFinal/Character.png',
    tags: ['Personalization', 'Interactive', 'User Engagement'],
    bullets: [
      'แบ่งพื้นที่แสดงตัวละครขนาดใหญ่ตรงกลาง ให้เห็นผลลัพธ์การปรับแต่งทันที',
      'แยกหมวดหมู่การแต่งตัว (ทรงผม, สีผิว/เพศ, เสื้อผ้า) เป็นแท็บชัดเจน ลดความสับสนและ ปรับแต่งได้รวดเร็ว',
    ],
  },
  {
    title: 'Greeting',
    mainImg: 'Asset/Picture/CoralFinal/Greeting.png',
    tags: ['Storytelling', 'Short Content', 'Visual First'],
    bullets: [
      'สรุปเนื้อหาบทนำสั้น กระชับ ไม่รบกวนเวลาท่องเที่ยวของผู้ใช้งาน',
      'ใช้อาร์ตสไตล์การ์ตูนในการเล่าเรื่องเพื่อลดความรู้สึกเหมือนเป็นบทเรียน',
      'วางปุ่มถัดไปในตำแหน่งที่เข้าถึงง่ายด้วยนิ้วโป้ง',
    ],
  },
  {
    title: 'First Result',
    mainImg: 'Asset/Picture/CoralFinal/FirstResult.png',
    tags: ['Baseline Assessment', 'Fast Interaction', 'Clear UI'],
    bullets: [
      'แบบทดสอบก่อนเรียนสั้นๆ เพื่อประเมินความรู้พื้นฐานของผู้ใช้',
      'แสดงเปอร์เซ็นต์ความคืบหน้าอย่างชัดเจนเพื่อลด Cognitive Load',
      'ตัวเลือกขนาดใหญ่ กดง่าย ตอบสนองรวดเร็ว',
    ],
  },
  {
    title: 'Mini Game',
    mainImg: 'Asset/Picture/CoralFinal/MiniGame.png',
    tags: ['Integrated Video', 'One-Stop Stream', 'Engagement'],
    bullets: [
      'รวบรวมเนื้อหาวิดีโอสั้นเข้าด้วยกันเป็นคลิปเดียวต่อเนื่องเพื่อลดระยะเวลาเรียนรู้',
      'ตัดคำถามที่ไม่จำเป็นออก เพื่อรักษาความต่อเนื่องในการรับชม',
      'มีซับไตเติิลภาษาต่างๆ ให้เลือกเปลี่ยนได้ตามต้องการ',
    ],
  },
  {
    title: 'Mini Game Result',
    mainImg: 'Asset/Picture/CoralFinal/MiniGameResult.png',
    tags: ['Knowledge Check', 'Instant Feedback', 'Gamification'],
    bullets: [
      'ทบทวนความรู้หลังรับชมสื่อด้วยคำถามสั้นๆ ประยุกต์ใช้ในสถานการณ์จริง',
      'ระบบให้ข้อเสนอแนะทันที (Instant Feedback) เมื่อตอบคำถาม',
      'ใช้โทนสีและภาพประกอบที่ช่วยกระตุ้นการจดจำ',
    ],
  },
  {
    title: 'Reward',
    mainImg: 'Asset/Picture/CoralFinal/Reward.png',
    tags: ['Reward System', 'Satisfaction', 'Completion'],
    bullets: [
      'หน้าจอแสดงความยินดีพร้อมมอบสิทธิประโยชน์/รางวัลเพื่อสร้างความพึงพอใจสูงสุด',
      'แสดงปุ่มบันทึกหรือแชร์ความสำเร็จได้ทันที',
      'ออกแบบ UI สไตล์สดใสสร้างความประทับใจส่งท้ายก่อนจบการใช้งาน',
    ],
  },
];

function selectFinalDesign(index) {
  const data = finalDesignData[index];
  if (!data) return;

  // 1. เปลี่ยนภาพใหญ่พร้อม Fading Effect
  const mainImg = document.getElementById('final-design-main-img');
  mainImg.style.opacity = '0';
  setTimeout(() => {
    mainImg.src = data.mainImg;
    mainImg.style.opacity = '1';
  }, 150);

  // 2. อัปเดตชื่อ Subtitle
  document.getElementById('final-design-title-text').textContent = data.title;

  // 3. อัปเดต Tags
  const tagsContainer = document.getElementById('final-design-tags');
  tagsContainer.innerHTML = data.tags
    .map(
      (tag) =>
        `<span class="px-3 py-1 rounded-full text-xs font-semibold bg-white/60 text-slate-700 shadow-xs">● ${tag}</span>`
    )
    .join('');

  // 4. อัปเดต Bullet Points
  const bulletsContainer = document.getElementById('final-design-bullets');
  bulletsContainer.innerHTML = data.bullets
    .map(
      (b) =>
        `<li class="flex items-start space-x-2"><span class="text-slate-900 mt-1">•</span><span>${b}</span></li>`
    )
    .join('');

  // 5. ไฮไลต์เส้นขอบของรูปเล็กที่เลือก
  const buttons = document.querySelectorAll('.fd-thumb-btn img');
  buttons.forEach((btn, i) => {
    if (i === index) {
      btn.classList.remove('border-transparent');
      btn.classList.add('border-slate-700/60');
    } else {
      btn.classList.remove('border-slate-700/60');
      btn.classList.add('border-transparent');
    }
  });

  // 6. อัปเดต Pagination Dots
  const dots = document.querySelectorAll('#final-design-dots span');
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.remove('bg-white/60');
      dot.classList.add('bg-slate-700');
    } else {
      dot.classList.remove('bg-slate-700');
      dot.classList.add('bg-white/60');
    }
  });
}
window.selectFinalDesign = selectFinalDesign;
