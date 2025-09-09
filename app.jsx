import './App.css'
import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    linkedin: '',
    github: '',
    about: '',
    degree: '',
    college: '',
    year: '',
    job: '',
    company: '',
    experience: '',
    skill1: '',
    skill2: '',
    skill3: '',
    project: '',
    projectDesc: ''
  })

  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="app">
      
      <div className="overlay">
        <header className="header">
          <h1> 3D AI Resume Creator</h1>
          <p>Create interactive, AI-powered resumes with style.</p>
        </header>

        <main className="main">
         
          <div className="form-section">
            <h2>Enter Your Details</h2>
            <form>
              
              <input name="name" type="text" placeholder="Full Name" value={formData.name} onChange={handleChange} />
              <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
              <input name="phone" type="text" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
              <input name="address" type="text" placeholder="Address" value={formData.address} onChange={handleChange} />
              <input name="linkedin" type="text" placeholder="LinkedIn Profile" value={formData.linkedin} onChange={handleChange} />
              <input name="github" type="text" placeholder="GitHub/Portfolio Link" value={formData.github} onChange={handleChange} />

              
              <textarea name="about" placeholder="About You (Short Bio)" rows="4" value={formData.about} onChange={handleChange}></textarea>

              
              <h3>Education</h3>
              <input name="degree" type="text" placeholder="Degree / Qualification" value={formData.degree} onChange={handleChange} />
              <input name="college" type="text" placeholder="University / College" value={formData.college} onChange={handleChange} />
              <input name="year" type="text" placeholder="Year of Graduation" value={formData.year} onChange={handleChange} />

              
              <h3>Work Experience</h3>
              <input name="job" type="text" placeholder="Job Title" value={formData.job} onChange={handleChange} />
              <input name="company" type="text" placeholder="Company" value={formData.company} onChange={handleChange} />
              <textarea name="experience" placeholder="Responsibilities / Achievements" rows="3" value={formData.experience} onChange={handleChange}></textarea>

            
              <h3>Skills</h3>
              <input name="skill1" type="text" placeholder="Skill 1" value={formData.skill1} onChange={handleChange} />
              <input name="skill2" type="text" placeholder="Skill 2" value={formData.skill2} onChange={handleChange} />
              <input name="skill3" type="text" placeholder="Skill 3" value={formData.skill3} onChange={handleChange} />

              
              <h3>Projects</h3>
              <input name="project" type="text" placeholder="Project Title" value={formData.project} onChange={handleChange} />
              <textarea name="projectDesc" placeholder="Project Description" rows="3" value={formData.projectDesc} onChange={handleChange}></textarea>

              <button type="button">Generate 3D Resume</button>
            </form>
          </div>

          
          <div className="preview-section">
            <h2>Live Resume Preview</h2>
            <div className="preview-box">
              <h3>{formData.name}</h3>
              <p>{formData.email} | {formData.phone}</p>
              <p>{formData.address}</p>
              <p>LinkedIn: {formData.linkedin}</p>
              <p>GitHub: {formData.github}</p>

              <h4>About</h4>
              <p>{formData.about}</p>

              <h4>Education</h4>
              <p>{formData.degree} - {formData.college} ({formData.year})</p>

              <h4>Experience</h4>
              <p>{formData.job} @ {formData.company}</p>
              <p>{formData.experience}</p>

              <h4>Skills</h4>
              <ul>
                <li>{formData.skill1}</li>
                <li>{formData.skill2}</li>
                <li>{formData.skill3}</li>
              </ul>

              <h4>Projects</h4>
              <p>{formData.project}: {formData.projectDesc}</p>
            </div>
          </div>
        </main>

        <footer className="footer">
          <p>© 2025 3D AI Resume Creator | Designed by A18,C83</p>
        </footer>
      </div>
    </div>
  )
}

export default App
