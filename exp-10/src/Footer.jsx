import React from 'react';
function Footer() {
  return (
    <footer className="text-center py-4 mt-5 border-top" style={{background:'#191414', color:'#b3b3b3'}}>
      <div className="mb-2">© {new Date().getFullYear()} <span className="fw-bold" style={{color:'#4CAF50'}}>Music Clone</span>. All rights reserved.</div>
      <div>
        <a href="https://twitter.com/music" className="mx-2" aria-label="Twitter"><i className="bi bi-twitter" style={{fontSize:'1.3rem', color:'#4CAF50'}}></i></a>
        <a href="https://facebook.com/music" className="mx-2" aria-label="Facebook"><i className="bi bi-facebook" style={{fontSize:'1.3rem', color:'#4CAF50'}}></i></a>
        <a href="https://instagram.com/music" className="mx-2" aria-label="Instagram"><i className="bi bi-instagram" style={{fontSize:'1.3rem', color:'#4CAF50'}}></i></a>
      </div>
    </footer>
  );
}
export default Footer;
