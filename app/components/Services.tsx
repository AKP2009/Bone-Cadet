export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <h2>Choose Your Adventure</h2>
        <p className="section-subtitle">Every service includes photo updates - it's my specialty!</p>
        <div className="services-grid">
          <div className="service-card">
            <div className="rank-badge">⭐ RECRUIT RANK</div>
            <h3>Recruit Walk</h3>
            <p>Solo adventure tailored to your dog's pace</p>
            <div className="price">$25 / $40</div>
            <div className="price-note">30 min / 60 min</div>
            <ul>
              <li>One-on-one attention</li>
              <li>Personalized route</li>
              <li>Photo updates during walk</li>
              <li>Fresh water provided</li>
              <li>Perfect for puppies or senior dogs</li>
              <li>Flexible scheduling</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="rank-badge">⭐⭐ CADET RANK</div>
            <h3>Cadet Adventure</h3>
            <p>Supervised dog park playgroup</p>
            <div className="price">$35 / $150</div>
            <div className="price-note">Per Day / Per Week</div>
            <ul>
              <li>Socialization with other dogs</li>
              <li>Off-leash play in safe environment</li>
              <li>Multiple photo updates</li>
              <li>Energy burning & exercise</li>
              <li>Perfect for social pups</li>
              <li>Weekly packages available</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="rank-badge">⭐⭐⭐ EAGLE SCOUT</div>
            <h3>Eagle Scout Expedition</h3>
            <p>Pack walk adventure</p>
            <div className="price">$35 / $150</div>
            <div className="price-note">Per Day / Per Week</div>
            <ul>
              <li>Group walk with pack mentality</li>
              <li>Explores SF neighborhoods & trails</li>
              <li>Socialization while on leash</li>
              <li>Photo & video updates</li>
              <li>Great for all energy levels</li>
              <li>Weekly packages available</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
