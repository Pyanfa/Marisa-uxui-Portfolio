const translations = {
  en: {
    name: 'Marisa Sorawangsai',
    'nav.title': 'Portfolio',
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.project': 'Project',
    'nav.contact': 'Contact me',
    'home.heroTitle': 'What if UX could feel <br>like play, not just use?',
    'home.heroDesc':
      'I solve problems through game design thinking, turning challenges into engaging experiences that spark curiosity and interaction.',
    'home.recentProjects': 'Recent Projects',
    'home.readMore': 'Click To Read More',
    'home.hello': 'Hello, I am',
    'home.graduate': 'Graduate',
    'home.bachelor.degree': 'Bachelor of Science (B.Sc.),',
    'home.bachelor.faculty': 'College of Arts, Media and Technology,',
    'home.bachelor.university': 'Chiang Mai University',
    'home.knowMe': 'Get to know me better',
  },
  th: {
    name: 'มาริสา สรวังซ้าย',
    'nav.title': 'แฟ้มสะสมผลงาน',
    'nav.home': 'หน้าแรก',
    'nav.about': 'เกี่ยวกับฉัน',
    'nav.project': 'โปรเจกต์',
    'nav.contact': 'ติดต่อฉัน',
    'home.heroTitle':
      'จะเป็นอย่างไรถ้า UX ให้ความรู้สึก <br>เหมือนการเล่น มากกว่าแค่การใช้งาน?',
    'home.heroDesc':
      'แก้ปัญหาผ่านกระบวนการคิดแบบเกมดีไซน์ แปลงความท้าทายให้กลายเป็นประสบการณ์ที่น่าติดตาม กระตุ้นความอยากรู้อยากเห็นและการมีส่วนร่วม',
    'home.recentProjects': 'ผลงาน',
    'home.readMore': 'คลิกเพื่ออ่านเพิ่มเติม',
    'home.hello': 'สวัสดีค่ะ, ดิฉัน',
    'home.graduate': 'ประวัติการศึกษา',
    'home.bachelor.degree': 'วิทยาศาสตร์บัณฑิต (ว.ทบ.),',
    'home.bachelor.faculty': 'วิทยาลัยศิลปะ สื่อ และเทคโนโลยี,',
    'home.bachelor.university': 'มหาวิทยาลัยเชียงใหม่',
    'home.knowMe': 'รู้จักฉันเพิ่มเติม',
  },
};

// ดึงค่าภาษาเดิมที่เคยเลือกไว้ ถ้าไม่มีให้เริ่มที่ en
let currentLang = localStorage.getItem('portfolio_lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);

  // เปลี่ยนข้อความบนปุ่มสลับภาษา (TH / EN)
  const langText = document.getElementById('lang-text');
  if (langText) {
    langText.innerText = lang.toUpperCase();
  }

  // วนลูปกวาดเปลี่ยนข้อความทุกแท็กที่มี attribute data-i18n
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
}

function toggleLanguage() {
  const newLang = currentLang === 'en' ? 'th' : 'en';
  setLanguage(newLang);
}
