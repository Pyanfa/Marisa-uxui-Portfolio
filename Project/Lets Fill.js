const letsFillFinalData = [
  {
    title: 'Main Menu',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Main Menu.png',
    tags: ['Focal Point', "Fitts's Law"],
    bullets: [
      'Designs large buttons to improve convenience and minimize mis-taps on mobile devices with smaller screens.',
      'Places essential and frequently used buttons at the top to reduce search time and allow quicker access to key functions.',
    ],
  },
  {
    title: 'Cut Scene',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Cut Scene.png',
    tags: ['Public Friendly', 'Storytelling', 'Quick Access'],
    bullets: [
      'Utilizes short comic videos with visual symptoms instead of verbal descriptions, helping medical professionals quickly identify key issues.',
      'Omits voiceovers and narration for public-friendly usage, enabling players to enjoy the content anywhere without headphones.',
      'Distills cutscene content into concise comic panels to minimize downtime and get users into the main game faster.',
    ],
  },
  {
    title: 'Character Selection',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Choose Character.png',
    tags: ['Mental Model', 'Immediate Feedback', 'Clarity & Focus'],
    bullets: [
      'Applies a glow outline to selected characters for instant visual feedback and clear confirmation without extra text.',
      'Places characters on a single plane against a clean background to reduce distractions and help users focus on choosing.',
      'Dresses the characters in Chiang Mai University dental student uniforms to resonate directly with the primary target audience.',
    ],
  },
  {
    title: 'Sign In',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Sign In.png',
    tags: ['Mental Model'],
    bullets: [
      'Models the registration card after actual Chiang Mai University student IDs to foster a sense of immersion and engagement among learners.',
      'Positions navigation buttons (Back / Next) prominently at the bottom for easy access, allowing learners to seamlessly return for character edits or proceed to the next step.',
    ],
  },
  {
    title: 'Examination',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Examination.png',
    tags: ['Immediate Feedback', 'Contrast'],
    bullets: [
      'Adds a subtle up-and-down animation to the Click Here badge to draw attention and highlight interactive spots.',
      'Uses a high-contrast glowing outline around selected features for instant visual feedback and clear selection confirmation.',
    ],
  },
  {
    title: 'Intraoral Examination',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Intraoral Examination.png',
    tags: ['Contrast', 'Real Clinical Photos'],
    bullets: [
      'Uses real intraoral photos and diagnostic X-rays to prevent lesion identification errors and provide realistic diagnostic practice.',
      'Uses an animated yellow arrow in high contrast with the blue background to guide user focus directly to image-zoom interaction points.',
    ],
  },
  {
    title: 'Tooth Examination',
    mainImg: 'Asset/Picture/DentalFinal/Showcasel/Tooth Examination.png',
    tags: ['Tool Recognition'],
    desc: 'Pairs stylized illustrations of dental instruments with their official names to simulate real-world equipment selection, helping learners familiarize themselves with instrument names, procedures, and outcomes while avoiding confusion despite the cartoon aesthetic.',
  },
  {
    title: 'Diagnosis',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Diagnosis.png',
    tags: ['Mental Model'],
    desc: 'Simulates a patient chart format to build familiarity, transforming question-answering into a realistic clinical charting experience.',
  },
  {
    title: 'Preparation',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Preparation.png',
    tags: ['Focus-driven', 'Simulation'],
    bullets: [
      'Designs the interaction to allow dragging with a stylus tip or finger over decayed areas, simulating authentic tooth preparation and drilling.',
      'Uses distinct colors for special action buttons (e.g., light purple Restart, green Confirm) to prevent accidental mis-clicks and keep players focused on gameplay skills.',
    ],
  },
  {
    title: 'Preparation Result',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Preparation Result.png',
    tags: ['Gamification', 'Mental Reward'],
    bullets: [
      'Shows instant accuracy scores upon step completion to provide immediate feedback and help learners gauge their performance.',
      'Pairs star rewards with percentage scores to drive motivation, enhance achievement feelings, and promote repeat practice.',
    ],
  },
  {
    title: 'Error Alert & Correction Guidance',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Incorrect Answer Feedback.png',
    tags: [' UI Consistency', 'UX Writing'],
    bullets: [
      'Instantly notifies users upon selecting an incorrect answer while offering flexible choices to either retry or review the lesson.',
      'Integrates familiar home icons into large buttons to maintain semantic continuity and ensure instant comprehension.',
      'Uses friendly-toned centered pop-ups to ease user pressure and encourage learning through constructive feedback.',
    ],
  },
  {
    title: 'Positive Feedbak',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Positive Feedbak.png',
    tags: ['Contrast'],
    bullets: [
      'Provides instant positive feedback for correct answers to reinforce academic accuracy and boost confidence.',
      'Links real-world treatment procedures through guiding prompts to help learners systematically memorize clinical workflow sequences.',
    ],
  },
  {
    title: 'Dental Material Application Simulation',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Etching.png',
    tags: ['Guide', 'Interactive Simulation'],
    bullets: [
      'Displays a clear instruction box to immediately inform learners of the objective and interaction steps for the current phase.',
      'Features touch and stylus dragging for acid etchant application to simulate realistic clinical techniques and reinforce motor skills.',
    ],
  },
  {
    title: 'Syringe Operation Simulation',
    mainImg:
      'Asset/Picture/DentalFinal/Showcase/Syringe Operation Simulation.png',
    tags: ['Simulation'],
    bullets: [
      'Simulates three-way syringe controls (water vs. air) to build tool familiarity and hands-on confidence prior to clinical entry.',
      'Uses distinct illustrations and icon labels for water and air buttons to eliminate confusion and ensure precise control identification.',
    ],
  },
  {
    title: 'Light Curing',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Light Curing.png',
    tags: ['Knowledge Retention', 'Visual Feedback'],
    desc: 'Introduces a 2 second screen hold after an answer is selected, allowing learners a brief pause to process feedback, review their accuracy, and reinforce knowledge retention for practical application.',
  },
  {
    title: 'Result',
    mainImg: 'Asset/Picture/DentalFinal/Showcase/Result.png',
    tags: ['Performance Evaluation', 'Feedback'],
    desc: 'Displays detailed performance statistics and stage-by-stage results, empowering learners to analyze their progress, targetedly practice, and achieve clinical mastery.',
  },
];

function selectLfDesign(index) {
  const data = letsFillFinalData[index];
  if (!data) return;

  // 1. เปลี่ยนภาพใหญ่พร้อมเอฟเฟกต์ Fade
  const mainImg = document.getElementById('lf-final-main-img');
  if (mainImg) {
    mainImg.style.opacity = '0';
    setTimeout(() => {
      mainImg.src = data.mainImg;
      mainImg.style.opacity = '1';
    }, 150);
  }

  // 2. เปลี่ยนข้อความหัวข้อ
  const titleText = document.getElementById('lf-final-title-text');
  if (titleText) {
    titleText.textContent = data.title;
  }

  // 3. เปลี่ยน Tags
  const tagsContainer = document.getElementById('lf-final-tags');
  if (tagsContainer && data.tags) {
    tagsContainer.innerHTML = data.tags
      .map(
        (tag) =>
          `<span class="px-3 py-1 rounded-full text-xs font-semibold bg-white/60 text-slate-700 shadow-xs">● ${tag}</span>`
      )
      .join('');
  }

  // 4. เปลี่ยนข้อความคำอธิบาย (แยกประเภทระหว่าง bullets กับ desc อย่างชัดเจน)
  const bulletsContainer = document.getElementById('lf-final-bullets');
  if (bulletsContainer) {
    let contentHTML = '';

    // กรณีมี bullets เป็น Array หลายข้อ (ให้ใส่ Bullet ปกติ)
    if (data.bullets && Array.isArray(data.bullets)) {
      contentHTML = `
        <ul class="space-y-2">
          ${data.bullets
            .map(
              (b) =>
                `<li class="flex items-start space-x-2"><span class="text-slate-900 mt-1">•</span><span>${b}</span></li>`
            )
            .join('')}
        </ul>
      `;
    }
    // กรณีมี desc เป็น String เดี่ยว (แสดงเป็นข้อความปกติ ไม่มี Bullet)
    else if (data.desc) {
      contentHTML = `<p class="text-slate-700">${data.desc}</p>`;
    }
    // กรณีมี descs (เผื่อสะกดผิด)
    else if (data.descs) {
      contentHTML = `<p class="text-slate-700">${data.descs}</p>`;
    }

    bulletsContainer.innerHTML = contentHTML;
  }

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

  // 6. อัปเดตจุด Dots ทั้งหมด
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
    container.scrollLeft -= scrollAmount;
  } else {
    container.scrollLeft += scrollAmount;
  }
}

window.selectLfDesign = selectLfDesign;
window.scrollLfThumbnails = scrollLfThumbnails;
