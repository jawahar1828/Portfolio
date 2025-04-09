import React, { useEffect, useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaMoon, FaSun } from "react-icons/fa";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    });
  }, []);

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <div className="content-wrapper">
        <div className="sidebar">
          <img src="/download.jpg" alt="profile" className="profile-img-square" />
          <h2 className="name">Jawahar M</h2>
          <p className="subtitle">🎓 MCA Student|💡Innovator|💻Developer</p>
          <div className="contact-info">
            <p><FaPhone /> +91 6376979942</p>
            <p><FaEnvelope /> postboxno184@gmail.com</p>
            <p><FaMapMarkerAlt /> Hosur, Tamil Nadu</p>
          </div>
          <h3>💼 Skills</h3>
          <ul className="skills">
            <li>🌐 Web Development</li>
            <li>🧠 AI & ML</li>
            <li>🎨 UI/UX Design</li>
            <li>☁️ Cloud Deployment</li>
            <li>🕹️ 3D Modelling</li>
            <li>📊 Data Structures</li>
          </ul>
          <div className="additional-info">
            <strong>🎉 Fun Facts:</strong>
            <p>🖌️ Sketch anime characters</p>
            <p>🎬 Premiere Pro Editor</p>
          </div>
          <button className="download-btn" onClick={() => {
           const link = document.createElement('a');
           link.href = '/Resume.pdf';
          link.download = 'Jawahar_Resume.pdf';
          link.click();
          }}>
         ⬇ Download Resume
          </button>
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <div className="main-content">
          <section>
            <h2 className="section-header">📖 About Me</h2>
            <p>
            Hi, I’m Jawahar — an MCA student passionate about tech, design, and innovation. 
            I'm eager to learn, grow, and contribute to exciting projects.
            </p>
          </section>

          <section>
            <h2 className="section-header">🚀 Featured Projects</h2>
            <div className="card-container">
              <div className="card"><h3>Smart Campus App</h3><p>📱 React Native app for event management, chat & alerts.</p></div>
              <div className="card"><h3>AI Resume Builder</h3><p>🤖 GPT-powered resume builder with Flask backend.</p></div>
              <div className="card"><h3>3D College Tour</h3><p>🌍 Explore college virtually using Three.js & Blender.</p></div>
              <div className="card"><h3>Course Recommender</h3><p>📈 ML model for personalized subject suggestions.</p></div>
            </div>
          </section>

          <section>
            <h2 className="section-header">🛠️ Services</h2>
            <div className="card-container">
              <div className="card"><h3>🌐 Web Dev</h3><p>Modern websites using React, Tailwind & Node.js.</p></div>
              <div className="card"><h3>🤖 AI Automation</h3><p>Python-based AI solutions for smart applications.</p></div>
              <div className="card"><h3>🎓 Tech Tutoring</h3><p>1-on-1 or group sessions for coding & problem solving.</p></div>
              <div className="card"><h3>📱 App Prototyping</h3><p>Interactive designs using Figma + real-time feedback.</p></div>
            </div>
          </section>

          <section>
            <h2 className="section-header">🎓 Education</h2>
            <div className="card-container">
              <div className="card"><h3>MCA</h3><p>Anna University (2024–2026)</p></div>
              <div className="card"><h3>BCA</h3><p>Periyar University (2021–2024)</p></div>
              <div className="card"><h3>12th Grade</h3><p>TVHSS, Vellore (2019–2021)</p></div>
            </div>
          </section>

          <section>
            <h2 className="section-header">📜 Certifications</h2>
            <div className="card-container">
              <div className="card"><p>☁️ Google Cloud Associate</p></div>
              <div className="card"><p>💻 Meta Front-End Certificate</p></div>
              <div className="card"><p>📘 AI/ML Bootcamp - NPTEL</p></div>
              <div className="card"><p>🧱 Responsive Design - FCC</p></div>
            </div>
          </section>

          <section>
            <h2 className="section-header">🏆 Achievements</h2>
            <div className="card-container">
              <div className="card"><p>🥇 Winner - UI/UX Hackathon</p></div>
              <div className="card"><p>🎤 Speaker - DevCon 2024</p></div>
              <div className="card"><p>🏅 Hackathon Finalist</p></div>
            </div>
          </section>

          <section>
            <h2 className="section-header">🎯 Goals & Passions</h2>
            <div className="card-container">
              <div className="card"><p>🌌 Build immersive educational tools</p></div>
              <div className="card"><p>📱 Launch a startup with social impact</p></div>
              <div className="card"><p>🎮 Build my own game with Unity</p></div>
            </div>
          </section>

          <div className="footer">
            © 2025 Jawahar M | Developer
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
