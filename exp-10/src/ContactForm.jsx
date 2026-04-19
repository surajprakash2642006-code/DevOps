import React, { useState } from 'react';
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <section id="contact" className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      {submitted ? (
        <div className="alert alert-success w-50 mx-auto text-center" style={{background:'#1DB954', color:'#191414', border:'none', borderRadius:'1rem'}}>Thank you for contacting us, {form.name}!</div>
      ) : (
        <form onSubmit={handleSubmit} className="w-50 mx-auto p-4" style={{background:'#222', borderRadius:'1.2rem', boxShadow:'0 2px 16px rgba(30,185,84,0.10)'}}>
          <div className="mb-3">
            <label className="form-label" style={{color:'#fff'}}>Name</label>
            <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} required style={{background:'#191414', color:'#fff', border:'1px solid #1DB954'}} />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{color:'#fff'}}>Email</label>
            <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required style={{background:'#191414', color:'#fff', border:'1px solid #1DB954'}} />
          </div>
          <button type="submit" className="btn btn-primary w-100" style={{background:'#1DB954', color:'#191414', border:'none', borderRadius:'2rem', fontWeight:600}}>Submit</button>
        </form>
      )}
    </section>
  );
}
export default ContactForm;
