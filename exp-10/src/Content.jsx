import React from 'react';
const playlists = [
  {
    title: 'Top Hits',
    desc: 'The hottest tracks right now.',
    icon: 'bi bi-music-note-beamed',
    color: '#1DB954'
  },
  {
    title: 'Chill Vibes',
    desc: 'Relax and unwind with these tunes.',
    icon: 'bi bi-cloud-moon',
    color: '#1ed760'
  },
  {
    title: 'Workout',
    desc: 'Get pumped with energetic beats.',
    icon: 'bi bi-lightning-charge',
    color: '#ffa600'
  },
  {
    title: 'Focus',
    desc: 'Stay productive with instrumental playlists.',
    icon: 'bi bi-headphones',
    color: '#00b894'
  },
  {
    title: 'Party',
    desc: 'Turn up the volume and dance!',
    icon: 'bi bi-disc',
    color: '#e040fb'
  },
  {
    title: 'Throwback',
    desc: 'Classic hits from the past.',
    icon: 'bi bi-vinyl',
    color: '#ff7675'
  }
];
function Content() {
  return (
    <section id="services" className="container my-5">
      <h2 className="mb-4 text-center">Browse Playlists</h2>
      <div className="row g-4 justify-content-center">
        {playlists.map((playlist, idx) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
            <div className="card h-100 text-center p-3 border-0 shadow-sm" style={{background:'#222', borderRadius:'1.2rem'}}>
              <div className="mb-3 d-flex justify-content-center align-items-center" style={{height:'80px'}}>
                <i className={`${playlist.icon}`} style={{color: playlist.color, fontSize:'3rem'}}></i>
              </div>
              <div className="card-body">
                <h5 className="card-title mb-2" style={{color:'#fff'}}>{playlist.title}</h5>
                <p className="card-text" style={{color:'#b3b3b3'}}>{playlist.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Content;
