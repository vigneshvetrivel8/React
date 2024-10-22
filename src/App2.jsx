import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// function EducationalExperience({ education, setEducation }) {
//   function handleChange(e, index) {
//     const { name, value } = e.target;
//     const newEducation = [...education];
//     newEducation[index] = { ...newEducation[index], [name]: value };
//     setEducation(newEducation);
//   }

//   function addEducation() {
//     setEducation([...education, { school: '', titleOfStudy: '', dateOfStudy: '' }]);
//   }

//   return (
//     <div>
//       <h2>Educational Experience</h2>
//       {education.map((edu, index) => (
//         <div key={index}>
//           <label>
//             School Name:
//             <input type="text" name="school" value={edu.school || ''} onChange={(e) => handleChange(e, index)} />
//           </label>
//           <label>
//             Title of Study:
//             <input type="text" name="titleOfStudy" value={edu.titleOfStudy || ''} onChange={(e) => handleChange(e, index)} />
//           </label>
//           <label>
//             Date of Study:
//             <input type="date" name="dateOfStudy" value={edu.dateOfStudy || ''} onChange={(e) => handleChange(e, index)} />
//           </label>
//         </div>
//       ))}
//       <button onClick={addEducation}>Add Education</button>
//     </div>
//   );
// }


function EducationalExperience({ education, setEducation }) {
  function handleChange(e, index) {
    const { name, value } = e.target;
    const newEducation = [...education];
    newEducation[index] = { ...newEducation[index], [name]: value };
    setEducation(newEducation);
  }

  function addEducation() {
    setEducation([...education, { school: '', titleOfStudy: '', dateOfStudy: '' }]);
  }

  return (
    <div className="card p-3">
      <h2>Educational Experience</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-3">
          <label>School Name:</label>
          <input className="form-control" type="text" name="school" value={edu.school || ''} onChange={(e) => handleChange(e, index)} />
          <label>Title of Study:</label>
          <input className="form-control" type="text" name="titleOfStudy" value={edu.titleOfStudy || ''} onChange={(e) => handleChange(e, index)} />
          <label>Date of Study:</label>
          <input className="form-control" type="date" name="dateOfStudy" value={edu.dateOfStudy || ''} onChange={(e) => handleChange(e, index)} />
        </div>
      ))}
      <button className="btn btn-secondary" onClick={addEducation}>Add Education</button>
    </div>
  );
}


// function PracticalExperience({ experience, setExperience }) {
//   function handleChange(e, index) {
//     const { name, value } = e.target;
//     const newExperience = [...experience];
//     newExperience[index] = { ...newExperience[index], [name]: value };
//     setExperience(newExperience);
//   }

//   function addExperience() {
//     setExperience([...experience, { company: '', position: '', responsibilities: '', dateFrom: '', dateTo: '' }]);
//   }

//   return (
//     <div>
//       <h2>Practical Experience</h2>
//       {experience.map((exp, index) => (
//         <div key={index}>
//           <label>
//             Company Name:
//             <input type="text" name="company" value={exp.company || ''} onChange={(e) => handleChange(e, index)} />
//           </label>
//           <label>
//             Position Title:
//             <input type="text" name="position" value={exp.position || ''} onChange={(e) => handleChange(e, index)} />
//           </label>
//           <label>
//             Main Responsibilities:
//             <textarea name="responsibilities" value={exp.responsibilities || ''} onChange={(e) => handleChange(e, index)} />
//           </label>
//           <label>
//             Date From:
//             <input type="date" name="dateFrom" value={exp.dateFrom || ''} onChange={(e) => handleChange(e, index)} />
//           </label>
//           <label>
//             Date To:
//             <input type="date" name="dateTo" value={exp.dateTo || ''} onChange={(e) => handleChange(e, index)} />
//           </label>
//         </div>
//       ))}
//       <button onClick={addExperience}>Add Experience</button>
//     </div>
//   );
// }

function PracticalExperience({ experience, setExperience }) {
  function handleChange(e, index) {
    const { name, value } = e.target;
    const newExperience = [...experience];
    newExperience[index] = { ...newExperience[index], [name]: value };
    setExperience(newExperience);
  }

  function addExperience() {
    setExperience([...experience, { company: '', position: '', responsibilities: '', dateFrom: '', dateTo: '' }]);
  }

  return (
    <div className="card p-3">
      <h2>Practical Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="mb-3">
          <label>Company Name:</label>
          <input className="form-control" type="text" name="company" value={exp.company || ''} onChange={(e) => handleChange(e, index)} />
          <label>Position Title:</label>
          <input className="form-control" type="text" name="position" value={exp.position || ''} onChange={(e) => handleChange(e, index)} />
          <label>Main Responsibilities:</label>
          <textarea className="form-control" name="responsibilities" value={exp.responsibilities || ''} onChange={(e) => handleChange(e, index)} />
          <label>Date From:</label>
          <input className="form-control" type="date" name="dateFrom" value={exp.dateFrom || ''} onChange={(e) => handleChange(e, index)} />
          <label>Date To:</label>
          <input className="form-control" type="date" name="dateTo" value={exp.dateTo || ''} onChange={(e) => handleChange(e, index)} />
        </div>
      ))}
      <button className="btn btn-secondary" onClick={addExperience}>Add Experience</button>
    </div>
  );
}


// function GeneralInformation({ generalInfo, setGeneralInfo }) {
//   function handleChange(e) {
//     const { name, value } = e.target;
//     setGeneralInfo({ ...generalInfo, [name]: value });
//   }

//   return (
//     <div>
//       <h2>General Information</h2>
//       <label>
//         Name:
//         <input type="text" name="name" value={generalInfo.name || ''} onChange={handleChange} />
//       </label>
//       <label>
//         Email:
//         <input type="email" name="email" value={generalInfo.email || ''} onChange={handleChange} />
//       </label>
//       <label>
//         Phone Number:
//         <input type="tel" name="phone" value={generalInfo.phone || ''} onChange={handleChange} />
//       </label>
//     </div>
//   );
// }

function GeneralInformation({ generalInfo, setGeneralInfo }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setGeneralInfo({ ...generalInfo, [name]: value });
  }

  return (
    <div className="card p-3">
      <h2>General Information</h2>
      <div className="mb-3">
        <label>Name:</label>
        <input className="form-control" type="text" name="name" value={generalInfo.name || ''} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Email:</label>
        <input className="form-control" type="email" name="email" value={generalInfo.email || ''} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Phone Number:</label>
        <input className="form-control" type="tel" name="phone" value={generalInfo.phone || ''} onChange={handleChange} />
      </div>
    </div>
  );
}


// function Resume({ generalInfo, education, experience }) {
//   return (
//     <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '20px' }}>
//       <h2>Resume</h2>
//       <h3>General Information</h3>
//       <p><strong>Name:</strong> {generalInfo.name}</p>
//       <p><strong>Email:</strong> {generalInfo.email}</p>
//       <p><strong>Phone Number:</strong> {generalInfo.phone}</p>

//       <h3>Educational Experience</h3>
//       <ul>
//         {education.map((edu, index) => (
//           <li key={index}>
//             <p><strong>School:</strong> {edu.school}</p>
//             <p><strong>Title of Study:</strong> {edu.titleOfStudy}</p>
//             <p><strong>Date of Study:</strong> {edu.dateOfStudy}</p>
//           </li>
//         ))}
//       </ul>

//       <h3>Practical Experience</h3>
//       <ul>
//         {experience.map((exp, index) => (
//           <li key={index}>
//             <p><strong>Company:</strong> {exp.company}</p>
//             <p><strong>Position:</strong> {exp.position}</p>
//             <p><strong>Responsibilities:</strong> {exp.responsibilities}</p>
//             <p><strong>From:</strong> {exp.dateFrom} <strong>To:</strong> {exp.dateTo}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

function Resume({ generalInfo, education, experience }) {
  return (
    <div className="card p-3 mt-4">
      <h2>Resume</h2>
      <h3>General Information</h3>
      <p><strong>Name:</strong> {generalInfo.name}</p>
      <p><strong>Email:</strong> {generalInfo.email}</p>
      <p><strong>Phone Number:</strong> {generalInfo.phone}</p>

      <h3>Educational Experience</h3>
      <ul className="list-unstyled">
        {education.map((edu, index) => (
          <li key={index} className="mb-2">
            <p><strong>School:</strong> {edu.school}</p>
            <p><strong>Title of Study:</strong> {edu.titleOfStudy}</p>
            <p><strong>Date of Study:</strong> {edu.dateOfStudy}</p>
          </li>
        ))}
      </ul>

      <h3>Practical Experience</h3>
      <ul className="list-unstyled">
        {experience.map((exp, index) => (
          <li key={index} className="mb-2">
            <p><strong>Company:</strong> {exp.company}</p>
            <p><strong>Position:</strong> {exp.position}</p>
            <p><strong>Responsibilities:</strong> {exp.responsibilities}</p>
            <p><strong>From:</strong> {exp.dateFrom} <strong>To:</strong> {exp.dateTo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


// export default function App() {
//   // You could manage the states of each section here and pass them as props
//   const [generalInfo, setGeneralInfo] = useState({});
//   const [education, setEducation] = useState([]);
//   const [experience, setExperience] = useState([]);

//   return (
//     <div>
//       <h1>Resume Builder</h1>
//       <GeneralInformation generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
//       <EducationalExperience education={education} setEducation={setEducation} />
//       <PracticalExperience experience={experience} setExperience={setExperience} />

//       {/* Button to show the resume */}
//       <button onClick={() => console.log("Show Resume")}>Show Resume</button>
      
//       {/* Display the resume based on collected data */}
//       <Resume generalInfo={generalInfo} education={education} experience={experience} />
//     </div>
//   );
// }
 // Import Bootstrap CSS

// Other component imports here...

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Resume Builder</h1>
      <div className="mb-4">
        <GeneralInformation generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      </div>
      <div className="mb-4">
        <EducationalExperience education={education} setEducation={setEducation} />
      </div>
      <div className="mb-4">
        <PracticalExperience experience={experience} setExperience={setExperience} />
      </div>

      <button className="btn btn-primary" onClick={() => console.log("Show Resume")}>Show Resume</button>

      <div className="mt-4">
        <Resume generalInfo={generalInfo} education={education} experience={experience} />
      </div>
    </div>
  );
}
