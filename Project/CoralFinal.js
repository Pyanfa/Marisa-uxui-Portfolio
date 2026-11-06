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
    tags: ['Contrast', 'Focused Layout', 'Icons'],
    bullets: [
      'Improved form readability using white containers against a blue background to separate input fields and maintain focus.',
      'Added national flag icons to help users quickly identify languages or country codes without reading text.',
      'Used a large orange submit button to maximize visibility and ease of interaction.',
    ],
  },
  {
    title: 'Avatar',
    mainImg: 'Asset/Picture/CoralFinal/Character.png',
    tags: ['Focused Layout', 'Tab based'],
    bullets: [
      'Features a large character display in the center for instant, real-time preview of customizations.',
      'Organizes customization categories (hairstyles, skin tone/gender, outfits) into clear tabs to reduce clutter and speed up the styling process.',
    ],
  },
  {
    title: 'Greeting',
    mainImg: 'Asset/Picture/CoralFinal/Greeting.png',
    tags: ['Friendly Dialogue', 'UX Writing'],
    desc: 'Uses casual, adventurous greetings instead of formal language to help users feel relaxed and avoid the feeling of entering a formal lesson.',
  },
  {
    title: 'Question Score',
    mainImg: 'Asset/Picture/CoralFinal/FirstResult.png',
    tags: ['Icons', 'Dual CTA'],
    bullets: [
      'Places a large score display in the center so users can instantly see their question results.',
      'ummarizes personal information in a white box with accompanying icons, allowing users to quickly and easily verify its accuracy.',
      'Clearly distinguishes the two next steps using color-coded options (Mini-game / Rewatch Video) so users can easily decide whether to continue playing or review the content, enabling quick selection.',
    ],
  },
  {
    title: 'Mini Game',
    mainImg: 'Asset/Picture/CoralFinal/MiniGame.png',
    tags: ['Gamification'],
    desc: 'Uses gamification principles to design learning experiences through active participation, making learning fun and natural without feeling like studying.',
  },
  {
    title: 'Mini Game Result',
    mainImg: 'Asset/Picture/CoralFinal/MiniGameResult.png',
    tags: ['Gamification'],
    desc: 'Displays minigame results and provides clear options for players regardless of whether they pass or fail, reducing frustration and awkwardness.',
  },
  {
    title: 'Reward',
    mainImg: 'Asset/Picture/CoralFinal/Reward.png',
    tags: ['Gamification', 'Reward'],
    desc: 'Applies gamification principles by offering post-activity rewards to motivate learning and keep players engaged through fun rather than forced studying. These digital rewards streamline the claiming process and provide immediately usable items for the users.',
  },
];

function selectFinalDesign(index) {
  const data = finalDesignData[index];
  if (!data) return;

  // 1. เปลี่ยนภาพใหญ่พร้อม Fading Effect
  const mainImg = document.getElementById('final-design-main-img');
  if (mainImg) {
    mainImg.style.opacity = '0';
    setTimeout(() => {
      mainImg.src = data.mainImg;
      mainImg.style.opacity = '1';
    }, 150);
  }

  // 2. อัปเดตชื่อ Subtitle
  const titleText = document.getElementById('final-design-title-text');
  if (titleText) {
    titleText.textContent = data.title;
  }

  // 3. อัปเดต Tags
  const tagsContainer = document.getElementById('final-design-tags');
  if (tagsContainer && data.tags) {
    tagsContainer.innerHTML = data.tags
      .map(
        (tag) =>
          `<span class="px-3 py-1 rounded-full text-xs font-semibold bg-white/60 text-slate-700 shadow-xs">● ${tag}</span>`
      )
      .join('');
  }

  // 4. อัปเดตคำอธิบาย (รองรับทั้ง bullets และ desc แบบยืดหยุ่น)
  const bulletsContainer = document.getElementById('final-design-bullets');
  if (bulletsContainer) {
    let contentHTML = '';

    // กรณีมี bullets เป็น Array หลายข้อ
    if (data.bullets && Array.isArray(data.bullets)) {
      contentHTML = data.bullets
        .map(
          (b) =>
            `<li class="flex items-start space-x-2"><span class="text-slate-900 mt-1">•</span><span>${b}</span></li>`
        )
        .join('');
    }
    // กรณีมี desc เป็นข้อความเดี่ยว
    else if (data.desc) {
      contentHTML = `<p class="text-slate-700 leading-relaxed">${data.desc}</p>`;
    }

    bulletsContainer.innerHTML = contentHTML;
  }

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
