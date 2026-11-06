/**
 * Central portfolio data for Hariharan G
 * IT Student | Full Stack Developer
 * Erode Sengunthar Engineering College (2024–2028)
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Hariharan G',
  displayName: 'Hariharan G',
  firstName: 'HARIHARAN',
  seriesTag: 'THE DEVELOPER SERIES',
  /** Cinematic studio label shown at the start of the opening sequence */
  originalLabel: 'A HARIHARAN G PRODUCTION',
  role: 'Software Developer | Java | Full Stack (MERN)',
  degree: 'B.Tech – Information Technology',
  college: 'Erode Sengunthar Engineering College',
  academicPeriod: '2024–2028',
  cgpa: '8.09 / 10',
  expectedGraduation: '2028',
  phone: '6380911912',
  careerGoal: 'Software Developer, Java Developer, and Full Stack Developer',
  tagline: ['Software Developer', 'Java Developer', 'Full Stack (MERN)'],
  intro:
    'Information Technology undergraduate with a strong interest in software engineering, Java programming, and full-stack web development. Experienced in building practical applications with the MERN stack and PHP and MySQL, including database design and website development. Built academic and independent projects, including a national hackathon website and an online examination SaaS platform in development. Seeking Software Developer, Java Developer, and Full Stack Developer internships and graduate software engineering roles.',
  location: 'Erode, Tamil Nadu, India',
  email: 'hariharanit2028@gmail.com',
  links: {
    linkedin: 'https://linkedin.com/in/hariharan-g-256713326',
    github: 'https://github.com/kuttyhari07',
    studio: 'https://gmhktechstudio.in',
  },
  resumePdf: '/assets/Hariharan_G_Resume_Updated.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Hariharan G',
  },
  interests: ['MERN Stack', 'Java Development', 'Software Engineering', 'Database Design', 'SaaS Platforms'],
};

export const education = [
  {
    school: 'Erode Sengunthar Engineering College',
    place: 'Erode, Tamil Nadu',
    degree: 'B.Tech – Information Technology',
    period: '2024–2028',
    score: 'CGPA: 8.09 / 10 · Expected Graduation: 2028',
  },
];

export const experience = [
  {
    company: 'GMHK Tech Studio',
    role: 'Founder & Full Stack Developer',
    place: 'Tamil Nadu, India',
    period: '2024 – Present',
    points: [
      'Founded and built the web development agency platform gmhktechstudio.in offering custom digital packages and modern websites.',
      'Designed and delivered business web solutions, client workflows, responsive user interfaces, and reliable deployment architectures.',
      'Managed end-to-end client requirements from conceptual wireframes to high-performance web deployment.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  demo?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants' | 'cart' | 'portal';
};

export const projects: Project[] = [
  {
    id: 'evaltech',
    title: 'EvalTech',
    year: '2025',
    genre: 'MERN • SaaS • Online Examination',
    logline: 'An end-to-end online examination SaaS platform featuring automated assessment, question bank generation, and multi-tenant institution workflows.',
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST API'],
    build: [
      'Architected a comprehensive online examination platform handling student, educator, and administrator roles with strict RBAC.',
      'Developed real-time coding assessments, automated evaluation workflows, and intuitive question creation studios.',
      'Engineered subscription-based SaaS infrastructure designed for scalable institution onboarding and secure test orchestration.',
    ],
    features: [
      'Online examination management and proctoring workflows',
      'Staff and student role management with secure authentication',
      'Question creation studio and programming assessment modules',
      'Automated scoring pipelines and performance analytics',
      'Subscription-based SaaS business model concept',
    ],
    metrics: [
      { value: 'MERN', label: 'Stack Architecture' },
      { value: '100%', label: 'Automated Evaluation' },
      { value: 'RBAC', label: 'Staff & Student Panels' },
      { value: 'SaaS', label: 'Subscription Ready' },
      { value: 'Code', label: 'Programming Assessment' },
    ],
    github: 'https://github.com/kuttyhari07',
    demo: '#',
    palette: { from: '#02182b', via: '#0052cc', to: '#030b14', accent: '#00d2ff' },
    motif: 'shield',
  },
  {
    id: 'codienych',
    title: 'CODIENYCH 1.0 – National-Level Hackathon Website',
    year: '2025',
    genre: 'Role: Website Developer • National Hackathon',
    logline: 'Official website for a 24-hour national-level hackathon conducted at Erode Sengunthar Engineering College.',
    stack: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'UPI QR'],
    build: [
      'Designed and developed the official responsive website for participants and administrators.',
      'Implemented online team registration with team-size selection and participant registration forms.',
      'Built ID document and photo upload functionality.',
      'Implemented a UPI QR-based registration payment workflow.',
      'Developed admin functionality for registration management and payment verification.',
    ],
    features: [
      'Designed and developed the official responsive website for participants and administrators.',
      'Implemented online team registration with team-size selection and participant registration forms.',
      'Built ID document and photo upload functionality.',
      'Implemented a UPI QR-based registration payment workflow.',
      'Developed admin functionality for registration management and payment verification.',
    ],
    metrics: [
      { value: '24-Hr', label: 'National Hackathon' },
      { value: 'UPI QR', label: 'Payment Workflow' },
      { value: 'Teams', label: 'Team-Size Selection' },
      { value: 'Admin', label: 'Payment Verification' },
      { value: 'Live', label: 'codienych.in' },
    ],
    github: 'https://github.com/kuttyhari07',
    demo: 'https://codienych.in',
    palette: { from: '#0f172a', via: '#0284c7', to: '#020617', accent: '#38bdf8' },
    motif: 'flow',
  },
  {
    id: 'gmhk-tech-studio',
    title: 'GMHK Tech Studio',
    year: '2025',
    genre: 'Agency Platform • Web Solutions • Production',
    logline: 'The official digital agency platform for GMHK Tech Studio, presenting web development packages, portfolio showcases, and client inquiry channels.',
    stack: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    build: [
      'Architected and published the live web presence for GMHK Tech Studio (gmhktechstudio.in) tailored for businesses seeking modern digital web solutions.',
      'Crafted interactive service package catalogs, responsive layouts, and friction-free inquiry pipelines for prospective clients.',
      'Optimized Core Web Vitals to deliver ultra-fast loading speeds across desktop and mobile devices.',
    ],
    features: [
      'Full web development agency platform',
      'Curated service packages and transparent pricing structures',
      'Business website development portfolios',
      'Direct client communication and project consultation funnel',
      'Live deployment accessible worldwide',
    ],
    metrics: [
      { value: 'Live', label: 'Production URL' },
      { value: '100%', label: 'Mobile Responsive' },
      { value: '98+', label: 'Performance Score' },
      { value: 'Agency', label: 'Client Services' },
      { value: 'Global', label: 'Worldwide Access' },
    ],
    github: 'https://github.com/kuttyhari07',
    demo: 'https://gmhktechstudio.in',
    palette: { from: '#031a29', via: '#035c82', to: '#020b12', accent: '#38bdf8' },
    motif: 'flow',
  },
  {
    id: 'fashionstore',
    title: 'FashionStore',
    year: '2025',
    genre: 'Full-Stack E-Commerce • Fintech • Security',
    logline: 'An e-commerce platform built with PHP and MySQL featuring OTP verification, UPI payment integration, automated email updates, and admin control.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
    build: [
      'Developed a dynamic e-commerce shopping experience with relational MySQL schema design for categories, items, carts, and customer accounts.',
      'Implemented secure OTP-based user authentication and integrated seamless UPI payments with real-time transaction verification.',
      'Engineered an administrative control center for real-time inventory management, order processing, and transactional email notifications.',
    ],
    features: [
      'Comprehensive Admin and Customer panels',
      'Secure OTP-based signup and login authentication',
      'UPI payment integration with checkout verification',
      'Automated email notifications upon order milestones',
      'Product catalog, inventory control, and order lifecycle tracking',
    ],
    metrics: [
      { value: 'UPI', label: 'Payment Gateway' },
      { value: 'OTP', label: 'Verified Signup' },
      { value: '2 Panels', label: 'Admin & Customer' },
      { value: 'MySQL', label: 'Relational Schema' },
      { value: 'Email', label: 'Automated Alerts' },
    ],
    github: 'https://github.com/kuttyhari07',
    demo: '#',
    palette: { from: '#150a26', via: '#481775', to: '#080310', accent: '#a855f7' },
    motif: 'cart',
  },
  {
    id: 'college-events-portal',
    title: 'College Events Portal',
    year: '2024',
    genre: 'Campus Platform • Event Management • PHP',
    logline: 'A centralized portal for college events, symposiums, and workshop registrations connecting student attendees with faculty coordinators.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    build: [
      'Designed a unified digital campus portal eliminating paper-based registrations for inter-college technical fests and academic workshops.',
      'Implemented relational student registration tracking, schedule publishing, and administrative event creation controls.',
    ],
    features: [
      'Centralized college event listing and schedule updates',
      'Automated student registration and digital ticket generation',
      'Coordinator dashboard to review attendee counts and schedules',
      'Category-based event discovery (symposiums, hackathons, workshops)',
    ],
    metrics: [
      { value: 'Campus', label: 'Event Hub' },
      { value: '1-Click', label: 'Registration' },
      { value: 'Zero', label: 'Paper Forms' },
      { value: 'PHP/SQL', label: 'Database Driven' },
    ],
    github: 'https://github.com/kuttyhari07',
    demo: '#',
    palette: { from: '#02241b', via: '#0a5c45', to: '#01120d', accent: '#34d399' },
    motif: 'portal',
  },
  {
    id: 'smart-knowledge-hub',
    title: 'Smart Student Knowledge Hub',
    year: '2024',
    genre: 'Collaborative Platform • EdTech • Resource Sharing',
    logline: 'A student-focused knowledge-sharing platform for exchanging study materials, curated subject notes, and academic solutions.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    build: [
      'Engineered an intuitive academic resource repository enabling engineering students to search, upload, and download verified study guides.',
      'Structured semester and department classifications to ensure rapid material discovery and peer knowledge collaboration.',
    ],
    features: [
      'Peer-to-peer engineering study material sharing',
      'Department and semester-wise subject taxonomy',
      'Search and filter capabilities for question banks and notes',
      'Student contribution and download counters',
    ],
    metrics: [
      { value: 'EdTech', label: 'Community Focus' },
      { value: 'Fast', label: 'Search & Filter' },
      { value: 'Secure', label: 'Material Uploads' },
      { value: 'All-Sem', label: 'Subject Taxonomy' },
    ],
    github: 'https://github.com/kuttyhari07',
    demo: '#',
    palette: { from: '#1a1403', via: '#634807', to: '#0a0802', accent: '#fbbf24' },
    motif: 'tenants',
  },
  {
    id: 'parkease',
    title: 'ParkEase',
    year: '2025',
    genre: 'Smart City • Booking Platform • Full-Stack',
    logline: 'A parking management and slot-booking platform featuring interactive parking lot mapping, advance booking, and admin occupancy oversight.',
    stack: ['React', 'Node.js', 'JavaScript', 'HTML5', 'CSS3'],
    build: [
      'Created an urban mobility tool that helps drivers discover vacant parking spots and reserve time slots before arrival.',
      'Built parking operator administrative controls for real-time slot occupancy tracking, pricing tier configuration, and reservation validation.',
    ],
    features: [
      'Interactive visual parking lot mapping',
      'Real-time parking slot availability and reservation',
      'Admin control panel for parking lot operators',
      'Booking history and receipt generation for drivers',
    ],
    metrics: [
      { value: 'Real-Time', label: 'Slot Booking' },
      { value: 'Maps', label: 'Visual Layout' },
      { value: 'Admin', label: 'Occupancy Control' },
      { value: 'Full-Stack', label: 'React + Node' },
    ],
    github: 'https://github.com/kuttyhari07',
    demo: '#',
    palette: { from: '#041d33', via: '#0b4778', to: '#030d17', accent: '#60a5fa' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  score?: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'nptel-entrepreneurship',
    title: 'Elite Certificate · Consolidated Score: 100% · Top 1% Topper',
    org: 'IIT Bombay (NPTEL)',
    detail: 'NPTEL – Foundations of Entrepreneurship (July – October 2026, 12-week course, 4 Recommended Credits). Elite Certificate, Consolidated Score: 100%, Top 1% Topper among 4,372 registered candidates. Online Assignments: 25/25, Proctored Examination: 75/75.',
    laurel: 'Top 1% Topper · 100%',
    score: '100% (Top 1%)',
  },
  {
    id: 'nptel-aca',
    title: 'Elite Certificate · Score: 70%',
    org: 'IIT Madras (NPTEL)',
    detail: 'NPTEL – Advanced Computer Architecture (January – April 2026, 12-week course). Elite Certificate, Score: 70%.',
    laurel: 'Score: 70% · Elite',
    score: '70%',
  },
  {
    id: 'hackerrank-java',
    title: 'Java Programming Certification',
    org: 'HackerRank',
    detail: 'HackerRank – Java Certification: Java Programming Certification.',
    laurel: 'Verified Certificate',
  },
  {
    id: 'springtest-hackathon',
    title: 'Secured 4th Place',
    org: 'SpringTest2K26 Hackathon',
    detail: 'SpringTest2K26 Hackathon: Secured 4th Place.',
    laurel: '4th Place',
  },
];

export type Certification = { issuer: string; name: string; scoreOrDetail?: string; link?: string };

export const certifications: Certification[] = [
  {
    issuer: 'IIT Bombay (NPTEL)',
    name: 'NPTEL – Foundations of Entrepreneurship',
    scoreOrDetail: 'July – October 2026 · 12-week course · 4 Recommended Credits · Elite Certificate · Consolidated Score: 100% · Top 1% Topper (Online Assignments: 25/25, Proctored Examination: 75/75, 4,372 registered candidates)',
  },
  {
    issuer: 'IIT Madras (NPTEL)',
    name: 'NPTEL – Advanced Computer Architecture',
    scoreOrDetail: 'January – April 2026 · 12-week course · Elite Certificate · Score: 70%',
  },
  {
    issuer: 'HackerRank',
    name: 'HackerRank – Java Certification',
    scoreOrDetail: 'Java Programming Certification',
  },
  {
    issuer: 'SpringTest2K26 Hackathon',
    name: 'SpringTest2K26 Hackathon',
    scoreOrDetail: 'Secured 4th Place',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    subtitle: 'Core programming and object-oriented paradigms',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Certified' },
      { name: 'C', mono: 'C', note: 'Systems' },
      { name: 'PHP', mono: 'Ph', note: 'Server-side' },
      { name: 'JavaScript', mono: 'Js', note: 'ES6+' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Modern UI & component-driven architecture',
    skills: [
      { name: 'HTML5', mono: 'H5', note: 'Semantic' },
      { name: 'CSS3', mono: 'C3', note: 'Tailwind' },
      { name: 'JavaScript', mono: 'Js', note: 'Modern' },
      { name: 'React.js', mono: 'Re', note: 'Components' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server logic, APIs and backend services',
    skills: [
      { name: 'Node.js', mono: 'No', note: 'Runtime' },
      { name: 'Express.js', mono: 'Ex', note: 'REST APIs' },
      { name: 'PHP', mono: 'Ph', note: 'Server-side' },
    ],
  },
  {
    id: 'database',
    title: 'Databases',
    subtitle: 'Relational & document database design',
    skills: [
      { name: 'MySQL', mono: 'My', note: 'Relational' },
      { name: 'MongoDB', mono: 'Mg', note: 'NoSQL' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    subtitle: 'Full-stack application architecture',
    skills: [
      { name: 'MERN Stack', mono: 'Mern', note: 'Full-Stack' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Developer workflows, collaboration and testing',
    skills: [
      { name: 'Git', mono: 'Gt', note: 'Version Control' },
      { name: 'GitHub', mono: 'Gh', note: 'Open Source' },
      { name: 'VS Code', mono: 'Vs', note: 'IDE' },
      { name: 'XAMPP', mono: 'Xp', note: 'Local Server' },
      { name: 'Maven', mono: 'Mv', note: 'Build Tool' },
    ],
  },
  {
    id: 'core',
    title: 'Core Concepts',
    subtitle: 'Computer science fundamentals & engineering practices',
    skills: [
      { name: 'Object-Oriented Programming (OOP)', mono: 'OOP', note: 'Core Design' },
      { name: 'DBMS', mono: 'Db', note: 'Database Systems' },
      { name: 'Data Structures', mono: 'Ds', note: 'Algorithms' },
      { name: 'Software Development', mono: 'SD', note: 'Engineering' },
    ],
  },
];

export const strengths: string[] = [
  'Quick Learner',
  'Problem Solving',
  'Team Collaboration',
  'Communication Skills',
  'Adaptability',
];

export const languages: string[] = ['Tamil', 'English'];

/**
 * Factual cross-references shown when a skill card is hovered or tapped:
 * links each skill directly to Hariharan's actual projects and certifications.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['HackerRank Java Certificate', 'NPTEL Computer Architecture', 'OOP & Data Structures'],
  C: ['Systems Basics', 'NPTEL Advanced Computer Architecture', 'Procedural Algorithms'],
  PHP: ['College Event Management System', 'FashionStore E-Commerce', 'Smart Student Knowledge Hub'],
  JavaScript: ['EvalTech MERN', 'CODIENYCH 1.0', 'FashionStore OTP & Payment Flow', 'ParkEase'],
  HTML: ['EvalTech', 'CODIENYCH 1.0', 'GMHK Tech Studio', 'College Events Portal'],
  HTML5: ['EvalTech SaaS Platform', 'CODIENYCH 1.0 Platform', 'GMHK Tech Studio'],
  CSS: ['GMHK Tech Studio UI', 'Tailwind CSS Layouts', 'Glassmorphism & Responsive Design'],
  CSS3: ['Responsive Web Design', 'Tailwind CSS Layouts', 'Cinematic Glassmorphism UI'],
  React: ['EvalTech SaaS', 'CODIENYCH 1.0 (codienych.in)', 'GMHK Tech Studio'],
  'React.js': ['EvalTech SaaS', 'CODIENYCH 1.0 (codienych.in)', 'GMHK Tech Studio'],
  'Node.js': ['EvalTech MERN Platform', 'CODIENYCH 1.0 Backend', 'ParkEase Booking API'],
  'Express.js': ['EvalTech SaaS Endpoints', 'CODIENYCH 1.0 Endpoints', 'JWT Authentication & RBAC'],
  'MERN Stack': ['EvalTech Online Examination SaaS', 'Full-stack single page applications'],
  MongoDB: ['EvalTech SaaS Platform', 'NoSQL Document Schemas', 'User & Assessment Collections'],
  MySQL: ['College Event Management System', 'FashionStore Database', 'Relational Schemas'],
  Git: ['Version Control across all repositories', 'Commit hygiene & feature branching'],
  GitHub: ['github.com/kuttyhari07', 'Code repositories and open collaboration'],
  'VS Code': ['Primary development workspace for MERN & PHP web applications'],
  XAMPP: ['Local server environment for PHP & MySQL database execution'],
  Maven: ['Java project management, dependency builds & testing workflows'],
  'Object-Oriented Programming (OOP)': ['Object-Oriented Programming principles in Java and C'],
  OOP: ['Object-Oriented Programming principles in Java and C'],
  DBMS: ['Relational MySQL normalization and MongoDB document schemas'],
  'Data Structures': ['Algorithmic problem-solving on HackerRank & academic coursework'],
  'Software Development': ['Full-lifecycle software engineering from design to live deployment'],
  'Software Dev': ['Full-lifecycle software engineering from design to live deployment'],
  Postman: ['API route verification for EvalTech and Node.js backend services'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const electric: Palette = { from: '#02182b', via: '#0052cc', to: '#030b14', accent: '#00d2ff' };
const cyan: Palette = { from: '#031a29', via: '#035c82', to: '#020b12', accent: '#38bdf8' };
const violet: Palette = { from: '#150a26', via: '#481775', to: '#080310', accent: '#a855f7' };
const emerald: Palette = { from: '#02241b', via: '#0a5c45', to: '#01120d', accent: '#34d399' };
const amber: Palette = { from: '#1a1403', via: '#634807', to: '#0a0802', accent: '#fbbf24' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2024',
    synopsis: 'Commencing B.Tech Information Technology at Erode Sengunthar Engineering College — building computational foundations in C, Java, and database systems.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The IT Gateway',
        description: 'Began B.Tech Information Technology at Erode Sengunthar Engineering College (2024–2028), setting goals for Full Stack Development and Software Engineering.',
        tags: ['B.Tech IT', 'Erode Sengunthar', '2024–2028'],
        runtime: '2024 – Present',
        palette: electric,
      },
      {
        code: 'S01 E02',
        title: 'Core Fundamentals',
        description: 'Immersed into structured programming in C and Object-Oriented principles in Java, exploring memory models, algorithms, and relational databases.',
        tags: ['Java', 'C', 'MySQL', 'Fundamentals'],
        runtime: 'Semester 1 & 2',
        palette: cyan,
      },
      {
        code: 'S01 E03',
        title: 'College Events Portal',
        description: 'Engineered a full campus event portal with PHP and MySQL to centralize event registrations, notifications, and coordinator administration.',
        tags: ['PHP', 'MySQL', 'Campus Project'],
        runtime: 'Project Release',
        palette: emerald,
      },
    ],
  },
  {
    number: 2,
    title: 'Web Platforms & Credentials',
    period: '2024 – 2025',
    synopsis: 'Expanding from database-driven PHP platforms to full-stack applications with OTP authentication, UPI payments, and technical certifications.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Smart Student Knowledge Hub',
        description: 'Launched a student-focused knowledge-sharing platform for exchanging subject materials, question papers, and study resources across semesters.',
        tags: ['EdTech', 'PHP', 'Knowledge Hub'],
        runtime: 'Academic Project',
        palette: amber,
      },
      {
        code: 'S02 E02',
        title: 'FashionStore E-Commerce',
        description: 'Architected an e-commerce platform integrating secure OTP signup, UPI payment verification, and automated email order dispatching.',
        tags: ['PHP', 'MySQL', 'UPI Payments', 'OTP Auth'],
        runtime: 'E-Commerce Solution',
        palette: violet,
      },
      {
        code: 'S02 E03',
        title: 'Certified Excellence',
        description: 'Earned NPTEL Elite Certification in Advanced Computer Architecture (Score: 70) and HackerRank Java Certification.',
        tags: ['NPTEL Elite (70)', 'HackerRank Java'],
        runtime: 'Certifications',
        palette: electric,
      },
    ],
  },
  {
    number: 3,
    title: 'Agency & Hackathon Triumph',
    period: '2025',
    synopsis: 'Deploying the GMHK Tech Studio agency platform, building urban mobility tools, and competing in SpringTest2k26 Hackathon.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'GMHK Tech Studio',
        description: 'Published gmhktechstudio.in — an agency platform offering digital packages, business websites, and tailored web solutions.',
        tags: ['Agency Platform', 'React', 'gmhktechstudio.in'],
        runtime: 'Live Production',
        palette: cyan,
      },
      {
        code: 'S03 E02',
        title: 'ParkEase',
        description: 'Engineered ParkEase, an urban parking management and reservation platform with visual spot mapping and operator dashboards.',
        tags: ['React', 'Node.js', 'Smart City'],
        runtime: 'Application',
        palette: electric,
      },
      {
        code: 'S03 E03',
        title: 'SpringTest2k26 Hackathon',
        description: 'Competed with passion against engineering teams and clinched 4th Place at SpringTest2k26 Hackathon.',
        tags: ['4th Place', 'Hackathon Finalist'],
        runtime: 'Hackathon Award',
        palette: emerald,
      },
    ],
  },
  {
    number: 4,
    title: 'EvalTech & The SaaS Arc',
    period: '2025 – 2026',
    synopsis: 'Designing EvalTech, a comprehensive MERN online examination SaaS platform featuring automated evaluation and subscription models.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'EvalTech — The Exam SaaS',
        description: 'Engineered a modern MERN SaaS platform for online examination management, question authoring, programming tests, and staff-student management.',
        tags: ['MERN Stack', 'SaaS', 'Online Exam'],
        runtime: 'Featured Original',
        palette: electric,
      },
      {
        code: 'S04 E02',
        title: 'Full Stack Mastery',
        description: 'Consolidated end-to-end expertise across React, Node.js, Express, MongoDB, Java, and scalable cloud application workflows.',
        tags: ['React', 'Node.js', 'MongoDB', 'Java'],
        runtime: 'Stack Deep Dive',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: 'The Next Episode',
    period: '2026 – 2028',
    synopsis: 'Advancing toward graduation as an IT graduate, Software Engineer, and Full Stack Developer solving enterprise challenges.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'To Be Continued…',
        description: 'Expanding into distributed cloud architectures, scalable SaaS solutions, and high-impact software engineering roles.',
        tags: ['Software Engineer', 'Full Stack Developer', '2024–2028'],
        runtime: 'In Production',
        palette: cyan,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Featured SaaS Original', title: 'EvalTech', detail: 'MERN online examination & assessment SaaS platform', palette: electric },
  { label: 'Agency Platform', title: 'GMHK Tech Studio', detail: 'Live web production • gmhktechstudio.in', palette: cyan },
  { label: 'Hackathon Honor', title: 'SpringTest2k26', detail: '4th Place Hackathon Finalist', palette: emerald },
  { label: 'Elite Academic Credential', title: 'NPTEL Architecture', detail: 'Advanced Computer Architecture • Elite (Score: 70)', palette: violet },
  { label: 'Primary Language', title: 'Java', detail: 'HackerRank Certified • OOP & Data Structures', palette: amber },
  { label: 'Full-Stack E-Commerce', title: 'FashionStore', detail: 'PHP + MySQL • OTP verification & UPI payments', palette: violet },
  { label: 'Smart City Innovation', title: 'ParkEase', detail: 'Interactive parking management & reservation platform', palette: electric },
  { label: 'Campus Solution', title: 'College Events Portal', detail: 'Streamlined campus event management & registration', palette: emerald },
  { label: 'Community Platform', title: 'Knowledge Hub', detail: 'Smart student study material exchange platform', palette: amber },
  { label: 'Engineering Degree', title: 'B.Tech IT (2024–2028)', detail: 'Erode Sengunthar Engineering College', palette: cyan },
];

/** Slides for the "▶ Play Intro" highlight reel. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Identity',
    title: 'Hariharan G',
    lines: ['IT Student & Full Stack Developer', 'Erode Sengunthar Engineering College (2024–2028)', '“Building Digital Experiences, One Project at a Time.”'],
    chips: ['B.Tech IT', 'Full Stack', 'Software Engineer'],
  },
  {
    kicker: 'Core Stack',
    title: 'Modern & Scalable',
    lines: ['React · Node.js · Express.js · Java · PHP', 'MongoDB · MySQL · Git · GitHub · Postman'],
    chips: ['React', 'Node.js', 'Java', 'MongoDB', 'MySQL'],
  },
  {
    kicker: 'Featured SaaS',
    title: 'EvalTech',
    lines: ['Online Examination SaaS Platform built on MERN stack', 'Staff & student management · Automated programming assessments', 'Subscription-based multi-tenant design'],
    chips: ['MERN', 'SaaS', 'Online Exam'],
  },
  {
    kicker: 'Live Production',
    title: 'GMHK Tech Studio',
    lines: ['Web development agency platform at gmhktechstudio.in', 'Delivering tailored digital packages and client solutions', 'Ultra-fast responsive web engineering'],
    chips: ['gmhktechstudio.in', 'Web Studio', 'Live'],
  },
  {
    kicker: 'Honors',
    title: 'Top Moments',
    lines: ['SpringTest2k26 Hackathon — 4th Place Award', 'NPTEL Advanced Computer Architecture — Elite (Score: 70)', 'HackerRank Java Certified'],
    chips: ['Hackathon 4th', 'NPTEL Elite 70', 'HackerRank'],
  },
  {
    kicker: 'Originals',
    title: '6 Featured Originals',
    lines: ['EvalTech · GMHK Tech Studio · FashionStore', 'College Events Portal · Smart Knowledge Hub · ParkEase'],
    chips: ['6 Originals', 'MERN', 'PHP', 'React'],
  },
  {
    kicker: 'Vision',
    title: 'The Next Episode',
    lines: ['Aspiring Full Stack Developer & Software Engineer', 'Driven to engineer robust software for real-world impact'],
  },
];

export type ProfileId = 'recruiter' | 'developer' | 'explorer';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, credentials & skills first',
    color: '#00d2ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, code & tech stack first',
    color: '#38bdf8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'explorer',
    name: 'Explorer',
    blurb: 'The complete cinematic journey',
    color: '#a855f7',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & Vision', palette: electric },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • 2024–2028 Timeline`, palette: cyan },
  originals: { nav: 'Originals', card: 'Featured Originals', meta: `${projects.length} Originals • Web & SaaS`, palette: electric },
  picks: { nav: 'Top Picks', card: "Hariharan's Top Picks", meta: 'Top 10 Highlights from the Portfolio', palette: amber },
  skills: { nav: 'Skills', card: 'Skill Universe', meta: `${skillCategories.length} Categories • Verified Evidence`, palette: cyan },
  moments: { nav: 'Achievements', card: 'Achievements & Certs', meta: `${achievements.length} Verified Milestones`, palette: emerald },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & Download', palette: violet },
};
