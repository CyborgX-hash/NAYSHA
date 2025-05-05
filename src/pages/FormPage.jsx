import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormPage.css';


function FormPage() {
  const [formData, setFormData] = useState({ interest: '', season: '', budget: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/results', { state: formData });
  };

  return (
    <div className='form'>
      <h2>Find Your Perfect Destination</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Interest:
          <select name="interest" value={formData.interest} onChange={handleChange} required>
            <option value="">Select Your Intrest</option>
            <option value="beach">Beach</option>
            <option value="mountains">Mountains</option>
            <option value="heritage">Cities</option>
          </select>
        </label><br /><br />
        <label>
          Season:
          <select name="season" value={formData.season} onChange={handleChange} required>
            <option value="">Select Your Season</option>
            <option value="summer">summer</option>
            <option value="winter">winter</option>
            <option value="monsoon">Monsoon</option>
          </select>
        </label><br /><br />
        <label>
          Budget (in INR):
          <input type="number" name="budget" value={formData.budget} onChange={handleChange} required />
        </label><br /><br />
        <button type="submit">Find Destination</button>
      </form>
    </div>
  );
}

export default FormPage;
