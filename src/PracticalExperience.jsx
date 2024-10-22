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
      <div>
        <h2>Practical Experience</h2>
        {experience.map((exp, index) => (
          <div key={index}>
            <label>
              Company Name:
              <input type="text" name="company" value={exp.company || ''} onChange={(e) => handleChange(e, index)} />
            </label>
            <label>
              Position Title:
              <input type="text" name="position" value={exp.position || ''} onChange={(e) => handleChange(e, index)} />
            </label>
            <label>
              Main Responsibilities:
              <textarea name="responsibilities" value={exp.responsibilities || ''} onChange={(e) => handleChange(e, index)} />
            </label>
            <label>
              Date From:
              <input type="date" name="dateFrom" value={exp.dateFrom || ''} onChange={(e) => handleChange(e, index)} />
            </label>
            <label>
              Date To:
              <input type="date" name="dateTo" value={exp.dateTo || ''} onChange={(e) => handleChange(e, index)} />
            </label>
          </div>
        ))}
        <button onClick={addExperience}>Add Experience</button>
      </div>
    );
  }
  