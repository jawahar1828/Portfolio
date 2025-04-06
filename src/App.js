import React from "react";
import "./App.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaDownload } from "react-icons/fa";

const App = () => {
  return (
    <div className="container">
      {/* Left Sidebar */}
      <aside className="sidebar">
      <div className="profile-img">
      <img src="/download.jpg" alt="Jawahar M" className="profile-img" /></div>

        <h2>Jawahar M</h2>
        <p>MCA STUDENT | Web & AI Developer</p>

        <div className="contact-info">
          <p><FaPhone /> +91 6379679942</p>
          <p><FaEnvelope />postboxno184@gmail.com</p>
          <p><FaMapMarkerAlt /> Hosur, Tamil Nadu</p>
        </div>

        <h3>Skills</h3>
        <ul className="skills">
          <li>🔹 Web Development (React, Angular, Node.js)</li>
          <li>🔹 UI/UX Design (Figma, Adobe XD)</li>
          <li>🔹 AI & ML (Python, TensorFlow, OpenCV)</li>
          <li>🔹 3D Modeling (Blender, Unity)</li>
          <li>🔹 Databases (SQL, MongoDB, Firebase)</li>
        </ul>

        <button href="/Resume.pdf" className="download-btn">
          <FaDownload /> Download CV
        </button>
      </aside>

      {/* Right Content */}
      <main className="main-content">
        <section>
          <h2>About Me</h2>
          <p>
            I'm Jawahar, a passionate developer specializing in **AI-powered Web Development** and **3D UI/UX Design**. 
            I love solving complex problems using **machine learning and creative design**.
          </p>
        </section>

        <section>
          <h2>Services</h2>
          <div className="card-container">
            <div className="card">
              <h3>Web Development</h3>
              <p>Building scalable web apps using **React, Angular, Node.js**.</p>
            </div>
            <div className="card">
              <h3>UI/UX Design</h3>
              <p>Creating intuitive interfaces using **Figma & Adobe XD**.</p>
            </div>
            <div className="card">
              <h3>AI & Machine Learning</h3>
              <p>Developing AI-driven applications with **Python, TensorFlow**.</p>
            </div>
            <div className="card">
              <h3>3D & Game Development</h3>
              <p>3D modeling & animations using **Blender, Unity**.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Projects</h2>
          <div className="card-container">
            <div className="card">
              <h3>AI Chatbot</h3>
              <p>Built a smart chatbot using **Python & OpenAI API**.</p>
            </div>
            <div className="card">
              <h3>E-Commerce Website</h3>
              <p>Developed a full-stack store with **React & MongoDB**.</p>
            </div>
            <div className="card">
              <h3>3D Portfolio</h3>
              <p>Created an interactive 3D portfolio using **Blender & Three.js**.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Education</h2>
          <p>🎓 **BCA** - [Periyar University] (2021-2024)</p>
          <p>🎓 **MCA** - [Anna University] (2024-2026)</p>
        </section>
      </main>
    </div>
  );
};

export default App;
