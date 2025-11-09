export default function Badges() {
  return (
    <section id="badges">
      <div className="container">
        <h2>Merit Badge System</h2>
        <p className="section-subtitle">Your pup earns achievements and YOU get collectible pins!</p>
        <div className="badges-grid">
          <div className="badge-card">
            <div className="badge-icon-large">🏆</div>
            <h3>Goodest Boy/Girl</h3>
            <p>Awarded for exceptional behavior, following commands, and making their walker proud</p>
          </div>
          <div className="badge-card">
            <div className="badge-icon-large">🦮</div>
            <h3>Off-Leash Warrior</h3>
            <p>Masters recall and demonstrates trustworthy off-leash behavior in safe areas</p>
          </div>
          <div className="badge-card">
            <div className="badge-icon-large">🤝</div>
            <h3>Social Butterfly</h3>
            <p>Plays well with others and makes friends at every playgroup session</p>
          </div>
          <div className="badge-card">
            <div className="badge-icon-large">⛰️</div>
            <h3>Trail Blazer</h3>
            <p>Completes challenging routes and shows endurance on long adventures</p>
          </div>
          <div className="badge-card">
            <div className="badge-icon-large">💦</div>
            <h3>Puddle Jumper</h3>
            <p>Embraces every adventure regardless of weather - rain or shine!</p>
          </div>
          <div className="badge-card">
            <div className="badge-icon-large">🐿️</div>
            <h3>Squirrel Spotter</h3>
            <p>Maintains focus despite distractions and shows excellent impulse control</p>
          </div>
        </div>
        <div className="badge-note">🎖️ Each badge earned means a physical collectible pin for you to keep! 🎖️</div>
      </div>
    </section>
  );
}
