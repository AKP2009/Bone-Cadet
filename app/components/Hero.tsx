"use client";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="tagline">🐾 Every Walk is an Adventure 🐾</div>
      <h1>Bone Cadets</h1>
      <p>Professional dog walking and group play in San Francisco<br />Where your pup earns badges and makes memories</p>
      <button className="cta-button" onClick={scrollToContact}>
        Enlist Your Cadet Today
      </button>
    </section>
  );
}
