function GeneralInformation({ generalInfo, setGeneralInfo }) {
    function handleChange(e) {
      const { name, value } = e.target;
      setGeneralInfo({ ...generalInfo, [name]: value });
    }
  
    return (
      <div>
        <h2>General Information</h2>
        <label>
          Name:
          <input type="text" name="name" value={generalInfo.name || ''} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={generalInfo.email || ''} onChange={handleChange} />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phone" value={generalInfo.phone || ''} onChange={handleChange} />
        </label>
      </div>
    );
  }
  