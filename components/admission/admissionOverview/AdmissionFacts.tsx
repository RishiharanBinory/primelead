"use client";

const stats = [
  { number: "2500+", label: "REGISTERED\nSTUDENTS" },
  { number: "500+",  label: "COURSES\nAVAILABLE" },
  { number: "15+",   label: "PARTNERED\nINSTITUTIONS" },
  { number: "2000+", label: "STUDENTS\nENROLLED" },
];

const STYLES = `
  .af-outer {
    position: relative;
    /* White top 40%, dark bottom 60% — more dark area */
    background: linear-gradient(
      to bottom,
      #ffffff 0%,
      #ffffff 5%,
      #2a2a2a 5%,
      #2a2a2a 100%
    );
    padding-bottom: 120px;
  }

  .af-img-container {
    position: relative;
    /* Less side padding = wider image */
    padding: 0 clamp(20px, 5vw, 100px);
    z-index: 2;
  }

  .af-img {
    display: block;
    width: 100%;
    /* Taller image */
    height: clamp(320px, 40vw, 520px);
    object-fit: cover;
    object-position: center 30%;
    position: relative;
    z-index: 2;
  }

  /* FACTS sits at 40% — the white/dark boundary */
  .af-facts {
    position: absolute;
    left: 0;
    right: 0;
    top: 57%;
    transform: translateY(-50%);
    z-index: 3;
    font-family: 'Work Sans', sans-serif;
    font-weight: 900;
    color: #ffffff;
    text-align: center;
    line-height: 1em;
    margin: 0;
    letter-spacing: -0.02em;
    font-size: clamp(80px, 16vw, 190px);
  }

  /* Stats row — more padding-top = more space below FACTS */
  .af-stats {
    position: relative;
    z-index: 2;
    max-width: 960px;
    margin: 0 auto;
    padding: clamp(80px, 10vw, 140px) 20px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px 24px;
  }

  @media (min-width: 640px) {
    .af-stats {
      grid-template-columns: repeat(4, 1fr);
      gap: 0;
    }
  }

  .af-stat {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  @media (min-width: 640px) {
    .af-stat {
      padding: 0 40px;
      border-left: 1px solid rgba(255,255,255,0.15);
    }
    .af-stat:first-child {
      border-left: none;
      padding-left: 0;
    }
  }

  .af-stat-num {
    font-family: 'Work Sans', sans-serif;
    font-weight: 800;
    color: #ffffff;
    font-size: clamp(36px, 5vw, 68px);
    line-height: 1em;
    margin: 0;
  }

  .af-stat-lbl {
    font-family: 'Work Sans', sans-serif;
    font-weight: 600;
    color: rgba(255,255,255,0.6);
    font-size: clamp(10px, 1.1vw, 12px);
    letter-spacing: 0.1em;
    line-height: 1.6em;
    margin: 0;
    text-transform: uppercase;
    white-space: pre-line;
  }
`;

export default function AdmissionFacts() {
  return (
    <>
      <style>{STYLES}</style>

      <div className="af-outer">
        {/* Image */}
        <div className="af-img-container">
          <img
            src="https://www.primeleed.com/wp-content/uploads/2020/12/1544468-ID-1544468-little-groups-with-big-ideas.jpg"
            alt="Students in a group meeting"
            className="af-img"
          />
        </div>

        {/* FACTS — at the 40% boundary */}
        <h2 className="af-facts">FACTS</h2>

        {/* Stats */}
        <div className="af-stats">
          {stats.map((stat) => (
            <div key={stat.number} className="af-stat">
              <p className="af-stat-num">{stat.number}</p>
              <p className="af-stat-lbl">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
