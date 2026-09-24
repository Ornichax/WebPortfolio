# 🎨 Creative Media Student Portfolio (พอร์ตโฟลิโอนักศึกษาสาขาสื่อนฤมิต)

เว็บไซต์ Portfolio ส่วนตัวสำหรับนักศึกษาสาขาสื่อนฤมิต (Creative Media) ในรูปแบบ Landing Page สไตล์ Modern, Creative, Premium, Minimal, Glassmorphism & Gradient ผสมผสานธีมสี **ฟ้า (#0284c7, #38bdf8)** และ **เหลือง (#f59e0b, #fbbf24)** อย่างลงตัว

---

## 🌟 จุดเด่นและคุณสมบัติ (Features)

1. **Responsive Design (100%)**: รองรับการแสดงผลทุกหน้าจอ ไม่ว่าจะเป็น Desktop, Laptop, Tablet และ Mobile ผ่านโครงสร้าง Bootstrap 5.3 + Custom CSS
2. **Smooth Scrolling & Active Navigation**: เลื่อนหน้าจออย่างนุ่มนวล พร้อมระบบ ScrollSpy ไฮไลต์เมนูด้านบนตามตำแหน่งที่กำลังดูอยู่
3. **Dark / Light Mode**: สลับโหมดกลางวัน/กลางคืนได้ทันที พร้อมบันทึกสถานะลงใน `localStorage`
4. **Scroll Reveal Animation**: เอฟเฟกต์เฟดลอยเข้าอย่างนุ่มนวลเมื่อเลื่อนหน้าจอมาถึง ผ่าน IntersectionObserver API
5. **Interactive Project Modal**: คลิกดูรายละเอียดผลงานขนาดใหญ่แบบ Pop-up พร้อมโชว์ Tech Stack, จุดเด่น และปุ่มดูผลงานจริง
6. **Animated Skill Progress Bars**: แถบวัดระดับความเชี่ยวชาญแบบเคลื่อนไหวอัตโนมัติ พร้อมฟังก์ชันแยกหมวดหมู่ และ 3D Hover Tilt
7. **Interactive Contact Form & Toast**: แบบฟอร์มติดต่อที่จำลองการส่งข้อมูล พร้อม Loading State และแจ้งเตือนผ่าน Glassmorphism Toast
8. **Loading Screen (Preloader)**: แอนิเมชันเปิดตัวก่อนเข้าหน้าเว็บ เพิ่มความพรีเมียม
9. **Scroll to Top**: ปุ่มลอยเลื่อนกลับด้านบนสุดอย่างสะดวก
10. **แยกไฟล์อย่างเป็นระเบียบ**: โค้ด CSS และ JavaScript ถูกแยกตามโฟลเดอร์และส่วนการทำงาน พร้อมทั้งรองรับทั้งแบบ **Landing Page หน้าเดียว (index.html)** และ **แยกไฟล์ตามเมนู Navigation (about.html, skills.html, portfolio.html, contact.html)**

---

## 📁 โครงสร้างโปรเจกต์ (Project Directory)

```text
WebPortfolio/
├── index.html                   # Landing Page หลัก (รวมทุก Section สมบูรณ์แบบ)
├── about.html                   # หน้าแยกตาม Navigation: เกี่ยวกับฉัน (About Me)
├── skills.html                  # หน้าแยกตาม Navigation: ทักษะและความสามารถ (Skills)
├── portfolio.html               # หน้าแยกตาม Navigation: แฟ้มผลงาน (Portfolio Showcase)
├── contact.html                 # หน้าแยกตาม Navigation: ข้อมูลติดต่อและฟอร์ม (Contact)
├── README.md                    # คู่มือแนะนำการใช้งานและการแก้ไข
└── assets/
    ├── css/
    │   ├── style.css            # สไตล์หลัก ตัวแปรธีม Dark/Light รีเซ็ต และ Glassmorphism
    │   ├── navbar.css           # สไตล์ Sticky Navbar และสวิตช์ Dark/Light Mode
    │   ├── hero.css             # สไตล์ Hero Section และ Animated Mesh Gradient Blobs
    │   ├── about.css            # สไตล์ About Me, Quick Stats และ Education Timeline
    │   ├── skills.css           # สไตล์การ์ด 10 ทักษะ และ Animated Progress Bars
    │   ├── portfolio.css        # สไตล์ตารางผลงาน การซูมภาพ และ Glass Modal
    │   └── contact.css          # สไตล์ช่องทางโซเชียล แบบฟอร์มติดต่อ และ Footer
    ├── js/
    │   ├── main.js              # ควบคุม Preloader, Dark/Light Mode, Scroll-to-Top, Reveal
    │   ├── navbar.js            # ควบคุม Sticky Header, Active ScrollSpy, เมนูมือถือ
    │   ├── skills.js            # ควบคุมแถบวัดระดับทักษะ, กรองหมวดหมู่, 3D Hover Tilt
    │   ├── portfolio.js         # ควบคุมการกรองผลงาน และแสดงรายละเอียดใน Modal
    │   └── contact.js           # ควบคุมการตรวจสอบฟอร์ม, แจ้งเตือน Toast และคัดลอกอีเมล
    └── images/
        ├── favicon.svg          # โลโก้ Favicon
        ├── avatar.svg           # ภาพโปรไฟล์จำลองนักศึกษาสาย Creative Media
        ├── project-1.svg        # ภาพจำลองผลงาน 1: Lumina Brand Identity & Motion
        ├── project-2.svg        # ภาพจำลองผลงาน 2: Neon Horizon Short Film
        ├── project-3.svg        # ภาพจำลองผลงาน 3: Aetheria Festival UI/UX
        ├── project-4.svg        # ภาพจำลองผลงาน 4: CyberVerse 3D Web
        ├── project-5.svg        # ภาพจำลองผลงาน 5: Urban Odyssey Photography
        └── project-6.svg        # ภาพจำลองผลงาน 6: AI Generative Media Lab
```

---

## 🚀 วิธีการเปิดใช้งาน (How to Run)

1. ดับเบิลคลิกเปิดไฟล์ `index.html` ด้วยเว็บเบราว์เซอร์ใดก็ได้ (Chrome, Edge, Safari, Firefox)
2. หรือหากรันผ่าน XAMPP:
   - เปิด Apache ใน XAMPP Control Panel
   - ไปที่เบราว์เซอร์แล้วพิมพ์: `http://localhost/WebPortfolio/`

---

## ✏️ การปรับแต่งข้อมูลส่วนตัว (Customization Guide)

### 1. เปลี่ยนชื่อ รูปภาพ และข้อความแนะนำตัว
- เปิดไฟล์ `index.html` ค้นหาส่วน `<!-- 3. Hero Section -->`
- เปลี่ยนชื่อจาก `ชลธร ศรีสวัสดิ์` เป็นชื่อ-นามสกุลของคุณ
- เปลี่ยนรูปภาพโปรไฟล์ที่แท็ก `<img src="assets/images/avatar.svg" ...>` เป็นรูปถ่ายของคุณ เช่น `assets/images/my-photo.jpg`

### 2. แก้ไขข้อมูลผลงานและรายละเอียดใน Modal
- เปิดไฟล์ `assets/js/portfolio.js` ในส่วนตัวแปร `const portfolioData = { ... }`
- คุณสามารถแก้ไขชื่อโปรเจกต์, ลิงก์, รายละเอียด, ภาพประกอบ, และเครื่องมือที่ใช้ได้อย่างง่ายดาย

### 3. เปลี่ยนข้อมูลติดต่อ
- ใน `index.html` และ `contact.html` ค้นหาส่วน `<!-- Contact Channels -->`
- เปลี่ยน Email, ลิงก์ Facebook, Instagram, GitHub และ Behance เป็นของคุณเอง
