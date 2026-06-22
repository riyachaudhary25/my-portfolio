export const personalInfo = {
  name: "Riya",
  tagline: "MCA Student | Network Security Enthusiast | Full-Stack Developer",
  email: "chaudharyriya535@gmail.com",
  phone: "+91 7042246940",
  location: "Noida, UP",
  linkedin: "https://www.linkedin.com/in/riya-074ab934a/",
  github: "https://github.com/riyachaudhary25",
  resumeUrl: "/assets/Riya_Resume.pdf",
  bio: [
    "MCA 2nd Year student (CGPA 8.06) specializing in Cyber Security & Computer Networks at Galgotias University.",
    "Fortinet-certified Network Security Associate with hands-on experience in Java full-stack development, responsive web applications, and Power BI data analytics.",
    "Seeking a fresher role in Software Development, Cybersecurity, or Data Analytics.",
  ],
  education: [
    {
      degree: "MCA – Computer Network & Cyber Security",
      institution: "Galgotias University, Greater Noida",
      period: "2024 – 2026",
      details: "CGPA: 8.06",
    },
    {
      degree: "BCA",
      institution: "Maharaja Agrasen Himalayan Garhwal University, Uttarakhand",
      period: "2021 – 2024",
      details: "67%",
    },
    {
      degree: "Class XII – CBSE",
      institution: "Laxmi Public Sr. Sec. School, Delhi",
      period: "2021",
      details: "65%",
    },
  ],
  certifications: [
    "Network Security – Fortinet (2025)",
    "C-DAC Advanced Computing (2025)",
    "Java Full Stack Development (2023–24)",
    "Office Management (2024)",
  ],
};

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },
      { name: "C++", level: 75 },
      { name: "C", level: 75 },
      { name: "PHP", level: 70 },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "HTML5/CSS3", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "Bootstrap", level: 85 },
      { name: "React.js", level: 80 },
    ],
  },
  {
    category: "Database & Analytics",
    items: [
      { name: "SQL / MySQL", level: 85 },
      { name: "Excel (Advanced)", level: 85 },
      { name: "Power BI", level: 80 },
      { name: "Tableau", level: 70 },
      { name: "DAX", level: 70 },
    ],
  },
  {
    category: "Cyber Security",
    items: [
      { name: "Network Security", level: 85 },
      { name: "Fortinet Firewall", level: 80 },
      { name: "VPN & IPS", level: 75 },
      { name: "Vulnerability Assessment", level: 75 },
    ],
  },
  {
    category: "CS Core",
    items: [
      { name: "OOP", level: 90 },
      { name: "DSA", level: 80 },
      { name: "SDLC", level: 80 },
      { name: "Operating Systems", level: 75 },
    ],
  },
];

export const projects = [
  {
    title: "Sales Data Analysis Dashboard",
    description:
      "Analyzed multi-category sales data to identify revenue trends and regional patterns. Built interactive Power BI dashboards with KPIs and DAX measures, automating manual reporting. Applied time-series forecasting to predict seasonal demand, enabling data-driven inventory decisions.",
    techStack: ["Python", "Excel", "Power BI", "DAX"],
    liveUrl: "#",
    githubUrl: "https://github.com/riyachaudhary25/sales-dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Amazon E-Commerce Clone",
    description:
      "Built a responsive SPA replicating core Amazon features including product browse, cart, wishlist, and reviews using React.js with state management (useState, useEffect) and Bootstrap for mobile-first design.",
    techStack: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "https://github.com/riyachaudhary25/amazon-clone",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    title: "Banking Management System",
    description:
      "Developed a Java OOP-based system for account creation, deposits, withdrawals, and balance tracking with MySQL persistence, input validation, and exception handling for secure transactions.",
    techStack: ["Java", "OOP", "MySQL", "JDBC"],
    liveUrl: "#",
    githubUrl: "https://github.com/riyachaudhary25/banking-system",
    image: "https://media.istockphoto.com/id/640267784/photo/bank-building.jpg?s=612x612&w=0&k=20&c=UTtm4t6WR-MLwO6ATq5l6n3SoCc6HpaClEFZMxO1Nek=",
  },
];

export const experience = [
  {
    type: "work",
    title: "Network Security Associate Intern",
    company: "Fortinet, Inc.",
    period: "2025",
    description: [
      "Configured and monitored FortiGate firewall policies; performed vulnerability assessments and supported incident response workflows.",
      "Analyzed network traffic patterns using IPS tools, contributing to threat detection and reduction of the organization's attack surface.",
    ],
  },
  {
    type: "education",
    title: "MCA – Computer Network & Cyber Security",
    company: "Galgotias University, Greater Noida",
    period: "2024 – 2026",
    description: ["CGPA: 8.06 | Specializing in Cyber Security & Computer Networks."],
  },
  {
    type: "education",
    title: "BCA",
    company: "Maharaja Agrasen Himalayan Garhwal University, Uttarakhand",
    period: "2021 – 2024",
    description: ["Scored 67% with a strong foundation in computer applications."],
  },
  {
    type: "education",
    title: "Class XII – CBSE",
    company: "Laxmi Public Sr. Sec. School, Delhi",
    period: "2021",
    description: ["Scored 65% with focus on Science stream."],
  },
];

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];