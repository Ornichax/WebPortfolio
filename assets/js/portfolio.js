/**
 * Creative Media Portfolio - Portfolio Projects JavaScript
 * Category Filtering & Dynamic Project Details Modal
 */

document.addEventListener('DOMContentLoaded', () => {
  initPortfolioFiltering();
  initPortfolioModal();
});

/**
 * 1. Filter Projects by Category
 */
function initPortfolioFiltering() {
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const projectItems = document.querySelectorAll('.portfolio-item-col');
  if (!filterBtns.length || !projectItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.9)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/**
 * 2. Dynamic Project Details Modal
 */
const portfolioData = {
  project1: {
    title: 'Lumina Brand Identity & Motion Showcase',
    category: 'Motion Graphic & Branding',
    image: 'assets/images/project-1.svg',
    date: 'มกราคม 2026',
    client: 'Lumina Creative Studio (Senior Project / Concept)',
    tools: ['Adobe After Effects', 'Photoshop', 'Illustrator', 'Cinema 4D'],
    description: `โครงการออกแบบอัตลักษณ์แบรนด์และโมชันกราฟิกแบบเต็มรูปแบบ สำหรับสตูดิโอดิจิทัลอาร์ตยุคใหม่ มุ่งเน้นการสร้าง Kinetic Typography, 3D Logo Reveal และ Design System ที่เคลื่อนไหวได้อย่างมีชีวิตชีวา สะท้อนถึงความคิดสร้างสรรค์ที่ไร้ขอบเขตของสาขาสื่อนฤมิต`,
    highlights: [
      'ออกแบบ Logo System แบบ Dynamic ที่ปรับเปลี่ยนตามบริบทของสื่อ',
      'ผลิต Motion Guidelines ความยาว 60 วินาที พร้อม Sound Design',
      'เตรียม Asset สำหรับ Social Media, Broadcast และ Outdoor LED Billboard'
    ],
    demoLink: 'https://behance.net'
  },
  project2: {
    title: 'Neon Horizon - Cinematic Short Film & Color Grading',
    category: 'Video Editing & Photography',
    image: 'assets/images/project-2.svg',
    date: 'พฤศจิกายน 2025',
    client: 'Creative Media Short Film Contest (Silver Award)',
    tools: ['DaVinci Resolve Studio', 'Premiere Pro', 'Sony FX3', 'Anamorphic Lens'],
    description: `ภาพยนตร์สั้นเชิงทดลองแนว Cyberpunk Neo-Noir ที่ถ่ายทอดเรื่องราวการค้นหาตัวตนของวัยรุ่นในมหานครยุคดิจิทัล โดดเด่นด้วยการกำกับภาพ (Cinematography) สไตล์แสงนีออนคู่สี Cyan และ Warm Amber และการเกรดสีระดับภาพยนตร์`,
    highlights: [
      'คุม Mood & Tone แสงนีออนโทน ฟ้า-เหลือง สื่ออารมณ์ความหวังและความโดดเดี่ยว',
      'ออกแบบ Sound Design แบบ Dolby Atmos Surround 5.1',
      'ได้รับรางวัล Silver Award ในเทศกาลภาพยนตร์สั้นสื่อนฤมิต'
    ],
    demoLink: 'https://youtube.com'
  },
  project3: {
    title: 'Aetheria Music Festival - Mobile App & Interactive UI/UX',
    category: 'UI/UX Design',
    image: 'assets/images/project-3.svg',
    date: 'สิงหาคม 2025',
    client: 'Interactive Media Course Showcase',
    tools: ['Figma', 'Protopie', 'Design System', 'User Testing'],
    description: `แอปพลิเคชันสำหรับเทศกาลดนตรีและสื่อดิจิทัลแบบโต้ตอบ (Interactive Festival) ช่วยให้ผู้เข้าร่วมงานสามารถดูตารางการแสดงแบบ Real-time, นำทางด้วย AR Interactive Map และมีส่วนร่วมกับ Interactive Visuals บนเวที`,
    highlights: [
      'ออกแบบ Design System สไตล์ Dark Neumorphism & Glassmorphism สวยล้ำสมัย',
      'ทำ Interactive Prototype ทดสอบกับผู้ใช้งานจริงจำนวน 30 คน (SUS Score 88/100)',
      'ฟังก์ชัน Smart Schedule แจ้งเตือนเวทีที่ชอบพร้อมโชว์สเตจเอฟเฟกต์'
    ],
    demoLink: 'https://figma.com'
  },
  project4: {
    title: 'CyberVerse 3D Interactive Web Experience',
    category: 'Web Design & Creative Dev',
    image: 'assets/images/project-4.svg',
    date: 'ตุลาคม 2025',
    client: 'Creative Web Exhibition',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Three.js', 'WebGL'],
    description: `เว็บไซต์พอร์ตโฟลิโอเชิงทดลองรูปแบบ 3D Interactive Web ที่ผู้ใช้งานสามารถหมุนสำรวจวัตถุ 3 มิติ และสัมผัสกับ Particle Effects แบบอินเทอร์แอคทีฟ ตอบสนองตามการเลื่อนเมาส์และการเลื่อนหน้าจอ`,
    highlights: [
      'สร้าง Scene 3D ด้วย Three.js ที่มี Performance 60 FPS บนทุกอุปกรณ์',
      'ออกแบบ UI แบบ Minimalist Glassmorphism ที่ใช้งานง่ายและโหลดไว',
      'ผสมผสาน Web Audio API สำหรับสร้างเสียงบรรยากาศแบบ Interactive'
    ],
    demoLink: '#'
  },
  project5: {
    title: 'Urban Odyssey - Street Photography & Visual Story',
    category: 'Photography & Visual Art',
    image: 'assets/images/project-5.svg',
    date: 'ธันวาคม 2025',
    client: 'Solo Photo Exhibition',
    tools: ['Lightroom Classic', 'Photoshop', 'Fujifilm X-T5', '35mm F1.4'],
    description: `ชุดภาพถ่ายแนว Street Photography ที่บันทึกจังหวะชีวิตของผู้คนในมุมมองแปลกตา ถ่ายทอดความงดงามของแสง Golden Hour เงาสะท้อนบนผิวน้ำ และความมีชีวิตชีวาของท้องถนนในกรุงเทพฯ`,
    highlights: [
      'รวมภาพถ่ายกว่า 40 ภาพจัดพิมพ์ในรูปแบบ Photo Zine สื่อสิ่งพิมพ์จำกัดจำนวน',
      'เทคนิคการใช้ Frame within Frame และการจับจังหวะ Decisive Moment',
      'การปรับโทนสีเฉพาะตัวที่เน้นความนุ่มนวลของแสงแดดยามเย็น'
    ],
    demoLink: '#'
  },
  project6: {
    title: 'AI-Infused Future Vision - Generative Media Project',
    category: 'AI Tools & Motion',
    image: 'assets/images/project-6.svg',
    date: 'กุมภาพันธ์ 2026',
    client: 'Advanced Media Lab Research',
    tools: ['Midjourney v6', 'Runway Gen-2', 'ComfyUI', 'After Effects'],
    description: `โครงการวิจัยและสร้างสรรค์ผลงานมีเดียร่วมสมัย ด้วยการผสาน Generative AI เข้ากับกระบวนการทำงานด้านสื่อนฤมิต โดยใช้ AI สร้างภาพ Concept Art แล้วนำมาร้อยเรียงด้วย Runway และทำ Visual Effects เสริมด้วย After Effects`,
    highlights: [
      'การออกแบบ Prompt Engineering และ ControlNet เพื่อควบคุมความต่อเนื่องของภาพ',
      'สร้างงานวิดีโอความยาว 2 นาทีที่ผสมผสาน AI และงานฝีมือมนุษย์ได้อย่างลงตัว',
      'การนำเสนอแนวทางการประยุกต์ใช้ AI อย่างสร้างสรรค์และมีจริยธรรม'
    ],
    demoLink: '#'
  }
};

function initPortfolioModal() {
  const modalEl = document.getElementById('projectModal');
  if (!modalEl) return;

  const bsModal = new bootstrap.Modal(modalEl);

  const modalImg = document.getElementById('modalProjectImg');
  const modalCategory = document.getElementById('modalProjectCategory');
  const modalTitle = document.getElementById('modalProjectTitle');
  const modalDate = document.getElementById('modalProjectDate');
  const modalClient = document.getElementById('modalProjectClient');
  const modalDesc = document.getElementById('modalProjectDesc');
  const modalTools = document.getElementById('modalProjectTools');
  const modalHighlights = document.getElementById('modalProjectHighlights');
  const modalDemoBtn = document.getElementById('modalProjectDemoBtn');

  // Trigger buttons
  const viewBtns = document.querySelectorAll('[data-project-id]');
  viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = btn.getAttribute('data-project-id');
      const data = portfolioData[projId];

      if (data) {
        modalImg.src = data.image;
        modalImg.alt = data.title;
        modalCategory.textContent = data.category;
        modalTitle.textContent = data.title;
        modalDate.textContent = data.date;
        modalClient.textContent = data.client;
        modalDesc.textContent = data.description;

        // Render Tools badges
        modalTools.innerHTML = '';
        data.tools.forEach(tool => {
          const badge = document.createElement('span');
          badge.className = 'glass-pill';
          badge.innerHTML = `<i class="fa-solid fa-check text-warning me-1"></i> ${tool}`;
          modalTools.appendChild(badge);
        });

        // Render Highlights
        modalHighlights.innerHTML = '';
        data.highlights.forEach(item => {
          const li = document.createElement('li');
          li.className = 'mb-2';
          li.innerHTML = `<i class="fa-solid fa-circle-check text-info me-2"></i> ${item}`;
          modalHighlights.appendChild(li);
        });

        if (data.demoLink && data.demoLink !== '#') {
          modalDemoBtn.href = data.demoLink;
          modalDemoBtn.style.display = 'inline-flex';
        } else {
          modalDemoBtn.style.display = 'none';
        }

        bsModal.show();
      }
    });
  });
}
