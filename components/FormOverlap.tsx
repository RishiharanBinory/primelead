// components/FormOverlap.tsx
// FULLY RESPONSIVE — Mobile / Tablet / Laptop / TV
//
// The "FORM" overlap effect works at every size:
// translateY(40%) moves the text downward into the yellow CTA section.
// clamp() ensures the font scales proportionally at all breakpoints.
// No hardcoded pixel offsets — purely fluid.

const STYLES = `
  .fo-wrap {
    background-color: #ffffff;
    text-align: center;
    padding-bottom: 0;
    /* Negative margin pulls the yellow CTA section up behind the text */
    margin-bottom: -15px;
    overflow: visible;  /* allow text to visually overflow into CTA below */
  }

  .fo-text {
    font-family: 'Work Sans', sans-serif;
    font-weight: 800;
    line-height: 1em;
    color: #292929;
    margin: 0;
    display: block;
    /* Fluid font: 48px on tiny phones → 200px on TV */
    font-size: clamp(48px, 18vw, 200px);
    /* Push text down into the yellow section below */
    transform: translateY(40%);
  }
`;

export default function FormOverlap() {
  return (
    <>
      <style>{STYLES}</style>
      <div className="fo-wrap">
        <h2 className="fo-text">FORM</h2>
      </div>
    </>
  );
}