"use client";

export default function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Thanks for your interest! I'll reach out within 24 hours to schedule a meet-and-greet with your pup. Looking forward to meeting you both! - Brandon");
  };

  return (
    <section id="contact">
      <div className="container">
        <h2>Join the Pack</h2>
        <div className="contact-content">
          <p className="contact-intro">Ready to give your pup the adventure they deserve? Let's set up a meet-and-greet to see if we're the right fit. Your dog will thank you!</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name *</label>
              <input type="text" required placeholder="John Smith" />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input type="email" required placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label>Phone *</label>
              <input type="tel" required placeholder="(415) 555-1234" />
            </div>
            <div className="form-group">
              <label>Your Dog's Name *</label>
              <input type="text" required placeholder="Max" />
            </div>
            <div className="form-group">
              <label>Service Interested In *</label>
              <select required>
                <option value="">-- Select a service --</option>
                <option value="recruit">Recruit Walk (Solo)</option>
                <option value="cadet">Cadet Adventure (Dog Park Playgroup)</option>
                <option value="eagle">Eagle Scout Expedition (Pack Walk)</option>
                <option value="unsure">Not sure yet - let's discuss!</option>
              </select>
            </div>
            <div className="form-group">
              <label>Tell Me About Your Pup</label>
              <textarea placeholder="Age, breed, energy level, personality, any special needs or concerns..."></textarea>
            </div>
            <button type="submit" className="submit-button">Request Meet &amp; Greet</button>
          </form>
        </div>
      </div>
    </section>
  );
}
