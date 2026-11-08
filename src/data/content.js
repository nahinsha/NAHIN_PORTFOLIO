// ---------------------------------------------------------------------------
// Central content file. All real information about Md. Shahariar Nahin lives
// here so components stay presentational and easy to modify.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Md. Shahariar Nahin",
  title: "Full-Stack Developer | Python, Django & React",
  email: "nahinshahariar27@gmail.com",
  github: "https://github.com/nahinsha",
  linkedin: "https://linkedin.com/in/md-shahariar-nahin-a5b147301",
};

export const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`;
export const MAILTO_URL = `mailto:${profile.email}`;
export const RESUME_URL = "/resume.pdf";
export const PROFILE_IMAGE_URL = "/profile.jpg";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Publications", href: "#publications" },
  { label: "Education", href: "#education" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export const aboutParagraphs = [
  "I am a Computer Science & Engineering graduate focused on backend and full-stack web development, with hands-on experience in Python, Django, React, JavaScript, SQL, and REST APIs.",
  "Alongside software development, I have experience in academic research and publications, particularly in machine learning and technology-focused research.",
  "I enjoy building practical applications, understanding real-world software systems, solving problems, and continuously improving my technical skills through development projects and research.",
];

export const aboutFacts = [
  { label: "Focus", value: "Backend & Full-Stack Development" },
  { label: "Primary Stack", value: "Python • Django • React • MySQL • PostgreSQL" },
  { label: "Interests", value: "Web Applications • REST APIs • Software Engineering" },
];

export const skillGroups = [
  { title: "Programming Languages", skills: ["Python", "JavaScript", "SQL"] },
  { title: "Frontend", skills: ["HTML", "CSS", "React.js"] },
  { title: "Backend", skills: ["Django", "Django REST Framework"] },
  { title: "Databases", skills: ["MySQL", "PostgreSQL"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code"] },
  {
    title: "Core Concepts",
    skills: [
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms (DSA)",
      "REST API Design",
      "JWT Authentication",
      "CRUD Operations",
    ],
  },
];

export const projects = [
  {
    id: "basachai",
    name: "BasaChai",
    subtitle: "Rental House-Hunting Platform",
    description:
      "A full-stack platform for property discovery, shortlisting, and comparison, with role-based access and a REST API secured by JWT authentication.",
    stack: ["Django REST Framework", "React.js", "PostgreSQL", "JWT"],
    features: [
      "Property discovery",
      "Shortlisting and comparison",
      "Role-based access",
      "Property management",
      "Messaging",
      "Viewing requests",
      "REST APIs with JWT authentication",
    ],
    github: "https://github.com/nahinsha/BashaChai",
    live: "https://basha-chai-xi.vercel.app/",
  },
  {
    id: "nahinedify",
    name: "NahinEdify",
    subtitle: "Learning Management System",
    description:
      "A role-based learning management system with Admin, Teacher, and Student roles, backed by JWT authentication and REST APIs.",
    stack: ["Django REST Framework", "React.js", "Tailwind CSS", "JWT"],
    features: [
      "Role-based access for Admin, Teacher, and Student",
      "JWT authentication",
      "REST APIs for courses",
      "Assignments and submissions",
      "Grading",
    ],
    github: "https://github.com/nahinsha/NahinEdify/",
    live: null,
  },
  {
    id: "ecommerce",
    name: "E-Commerce Web Application",
    subtitle: "Django & MySQL",
    description:
      "An e-commerce web application with product, category, customer, cart, and order management, built with Django and a MySQL database.",
    stack: ["Django", "Python", "HTML", "CSS", "JavaScript", "MySQL"],
    features: [
      "Product management",
      "Category management",
      "Customer management",
      "Shopping cart",
      "Order management",
      "CRUD functionality",
      "MySQL database integration",
      "User-related features",
    ],
    github: "https://github.com/nahinsha/E-commerce/",
    live: null,
  },
];

export const experience = [
  {
    role: "Teaching Assistant",
    org: "Presidency University",
    period: "October 2024 – May 2025",
    type: "Academic experience",
    points: [
      "Assisted faculty in academic activities and course coordination.",
      "Supported students with academic and departmental activities.",
      "Assisted with research-related tasks under Prof. Dr. Hakikur Rahman.",
      "Supported academic events and departmental activities.",
      "Managed website content, documentation, and information updates.",
    ],
  },
];

export const publications = [
  {
    title: "Ethical Data Mining in Healthcare: Toward a Professionally Grounded Framework",
    authors: null,
    venue: "Academic Journal of Information Technology",
    detail: "Vol. 17, Issue 1, 2026 · DOI: 10.5824/ajite.2026.01.005.x",
    description:
      "A paper on ethical data mining in healthcare, proposing a professionally grounded framework.",
    url: "https://dergipark.org.tr/tr/pub/ajit-e/article/1796488",
  },
  {
    title:
      "A Comparative Analysis of Machine Learning Algorithms for Predicting Student Academic Performance",
    authors: "Shahariar, N. & Jui, J. A.",
    venue: "Journal of Data Analytics and Intelligence",
    detail: "Volume 2, Issue 1, January 2026",
    description:
      "A comparative analysis of Logistic Regression, Decision Tree, Random Forest, and Support Vector Machine for predicting student academic performance.",
    url: "https://journal.tekigate.com/jdai/archive/v2i1/a5.html",
  },
  {
    title:
      "Empowering Aging Communities: The Role of AI-Driven Assistive Technologies in Fostering Independent Living",
    authors: "Jui, J. A. & Shahariar, N. (2025)",
    venue:
      "Proceedings of the XIII International Scientific Conference \u201cCare of the Elderly in Contemporary Society\u201d",
    detail: "Volume II, pages 326–341 · European University Brčko District, Bosnia and Herzegovina",
    description:
      "A study on the role of AI-driven assistive technologies in supporting independent living for aging communities.",
    url: "https://eubd.edu.ba/MNS/TOM%20II%20B512.pdf",
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Science & Engineering",
    institution: "Presidency University",
    period: "2021 – 2025",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Chattogram Cantonment Public College",
    period: "2019",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Government Muslim High School, Chattogram",
    period: "2017",
  },
];

export const leadership = [
  {
    role: "Joint Secretary",
    org: "Presidency University Social Services Club",
    period: "2024 – 2025",
    description: "Supported club activities, student initiatives, and social service programs.",
  },
];
