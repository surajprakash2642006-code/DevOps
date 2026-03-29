import React, { useState } from 'react';

const FormComponent = () => {
  // 1. Manage form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  // 2. Manage validation errors
  const [errors, setErrors] = useState({});

  // 3. Manage the submitted data to display dynamically
  const [submittedData, setSubmittedData] = useState(null);

  // Handle input changes dynamically based on the input's 'name' attribute
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear the specific error when the user starts typing again
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Validate the form fields
  const validate = () => {
    const newErrors = {};
    
    // Check if name is empty
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Check if email is empty or invalid
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }

    return newErrors;
  };

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default page reload
    
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      // If no errors, process the data (display it)
      setSubmittedData(formData);
      setErrors({});
      // Optional: Clear the form fields after successful submission
      // setFormData({ name: '', email: '' }); 
    } else {
      // If there are errors, update the state to display them
      setErrors(validationErrors);
      setSubmittedData(null);
    }
  };

  return (
    <div style={styles.container}>
      <h2>User Information Form</h2>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.name && <span style={styles.error}>{errors.name}</span>}
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.email && <span style={styles.error}>{errors.email}</span>}
        </div>

        <button type="submit" style={styles.button}>Submit</button>
      </form>

      {/* Conditionally render the submitted data */}
      {submittedData && (
        <div style={styles.result}>
          <h3>Successfully Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

// Simple inline styles for readability
const styles = {
  container: { maxWidth: '400px', margin: '40px auto', fontFamily: 'Arial, sans-serif' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '5px' },
  input: { padding: '8px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' },
  button: { padding: '10px', fontSize: '16px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  error: { color: 'red', fontSize: '14px' },
  result: { marginTop: '30px', padding: '15px', backgroundColor: '#f8f9fa', borderLeft: '4px solid #28a745' }
};

export default FormComponent;