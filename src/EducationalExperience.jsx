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
      <div>
        <h2>Educational Experience</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <label>
              School Name:
              <input type="text" name="school" value={edu.school || ''} onChange={(e) => handleChange(e, index)} />
            </label>
            <label>
              Title of Study:
              <input type="text" name="titleOfStudy" value={edu.titleOfStudy || ''} onChange={(e) => handleChange(e, index)} />
            </label>
            <label>
              Date of Study:
              <input type="date" name="dateOfStudy" value={edu.dateOfStudy || ''} onChange={(e) => handleChange(e, index)} />
            </label>
          </div>
        ))}
        <button onClick={addEducation}>Add Education</button>
      </div>
    );
  }
  