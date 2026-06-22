import html2pdf from "html2pdf.js";
import { personalInfo, skills, projects, experience } from "../data/portfolioData";

/**
 * Generates and downloads a professional PDF resume
 * formatted with all the user's data from portfolioData.js
 */
export const downloadResumePDF = () => {
  // Build the resume HTML content
  const resumeHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Inter', sans-serif;
          color: #1e293b;
          padding: 40px;
          max-width: 800px;
          margin: 0 auto;
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 3px solid #6366f1;
        }
        .header h1 {
          font-size: 32px;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 5px;
        }
        .header .tagline {
          font-size: 14px;
          color: #6366f1;
          font-weight: 500;
        }
        .header .contact {
          font-size: 12px;
          color: #64748b;
          margin-top: 8px;
        }
        .section {
          margin-bottom: 24px;
        }
        .section h2 {
          font-size: 18px;
          font-weight: 700;
          color: #6366f1;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 6px;
          margin-bottom: 12px;
        }
        .bio p {
          font-size: 12px;
          line-height: 1.6;
          color: #475569;
          margin-bottom: 6px;
        }
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .skill-cat {
          flex: 1 1 45%;
          margin-bottom: 8px;
        }
        .skill-cat h3 {
          font-size: 12px;
          font-weight: 600;
          color: #334155;
          margin-bottom: 4px;
        }
        .skill-cat p {
          font-size: 11px;
          color: #64748b;
        }
        .project-item, .exp-item {
          margin-bottom: 14px;
        }
        .project-item h3, .exp-item h3 {
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
        }
        .project-item .meta, .exp-item .meta {
          font-size: 11px;
          color: #6366f1;
          font-weight: 500;
          margin-bottom: 4px;
        }
        .project-item p, .exp-item p {
          font-size: 11px;
          line-height: 1.5;
          color: #475569;
        }
        .exp-item ul {
          list-style: none;
          padding: 0;
        }
        .exp-item ul li {
          font-size: 11px;
          color: #475569;
          line-height: 1.5;
          padding-left: 12px;
          position: relative;
          margin-bottom: 3px;
        }
        .exp-item ul li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: #6366f1;
        }
        .cert-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .cert-list span {
          font-size: 11px;
          background: #eef2ff;
          color: #6366f1;
          padding: 3px 10px;
          border-radius: 4px;
          font-weight: 500;
        }
        .edu-item {
          margin-bottom: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid #e2e8f0;
        }
        .edu-item:last-child { border-bottom: none; }
        .edu-item h3 {
          font-size: 13px;
          font-weight: 600;
          color: #1e293b;
        }
        .edu-item .meta {
          font-size: 11px;
          color: #64748b;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>${personalInfo.name}</h1>
        <p class="tagline">${personalInfo.tagline}</p>
        <p class="contact">${personalInfo.email} | ${personalInfo.phone} | ${personalInfo.location}</p>
        <p class="contact">LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github}</p>
      </div>

      <div class="section bio">
        <h2>Professional Summary</h2>
        ${personalInfo.bio.map(p => `<p>${p}</p>`).join('')}
      </div>

      <div class="section">
        <h2>Technical Skills</h2>
        <div class="skills-grid">
          ${skills.map(cat => `
            <div class="skill-cat">
              <h3>${cat.category}</h3>
              <p>${cat.items.map(i => i.name).join(', ')}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="section">
        <h2>Internship Experience</h2>
        ${experience.filter(e => e.type === 'work').map(exp => `
          <div class="exp-item">
            <h3>${exp.title}</h3>
            <p class="meta">${exp.company} | ${exp.period}</p>
            <ul>
              ${exp.description.map(d => `<li>${d}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <div class="section">
        <h2>Projects</h2>
        ${projects.map(proj => `
          <div class="project-item">
            <h3>${proj.title}</h3>
            <p class="meta">${proj.techStack.join(' | ')}</p>
            <p>${proj.description}</p>
          </div>
        `).join('')}
      </div>

      <div class="section">
        <h2>Education</h2>
        ${personalInfo.education.map(edu => `
          <div class="edu-item">
            <h3>${edu.degree}</h3>
            <p class="meta">${edu.institution} | ${edu.period} | ${edu.details}</p>
          </div>
        `).join('')}
      </div>

      <div class="section">
        <h2>Certifications</h2>
        <div class="cert-list">
          ${personalInfo.certifications.map(c => `<span>${c}</span>`).join('')}
        </div>
      </div>
    </body>
    </html>
  `;

  // Configure PDF options
  const opt = {
    margin:       0.5,
    filename:     `Riya_Resume.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'in', format: 'A4', orientation: 'portrait' },
    pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
  };

  // Create a temporary container
  const container = document.createElement('div');
  container.innerHTML = resumeHTML;
  container.style.position = 'absolute';
  container.style.left = '-9999px';
  container.style.top = '-9999px';
  document.body.appendChild(container);

  // Generate and download PDF
  html2pdf().set(opt).from(container).save().then(() => {
    document.body.removeChild(container);
  }).catch((err) => {
    document.body.removeChild(container);
    console.error('PDF generation failed:', err);
  });
};