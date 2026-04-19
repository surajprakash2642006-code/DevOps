import React from 'react';
function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark music-navbar shadow-sm" style={{background:'#1a1a1a'}}>
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#" style={{fontWeight:700, fontSize:'1.6rem', color:'#1DB954'}}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Music_note_icon.png" alt="Music Logo" height="36" style={{filter:'brightness(1.2)'}} />
        </a>
        <nav>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 flex-row gap-3">
            <li className="nav-item"><a className="nav-link" href="#hero" style={{color:'#fff'}}>Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#services" style={{color:'#fff'}}>Features</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact" style={{color:'#fff'}}>Contact</a></li>
            <li className="nav-item"><a className="nav-link" href="#" style={{color:'#1DB954', fontWeight:600}}>Sign Up</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
