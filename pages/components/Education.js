import { Parallax } from 'react-scroll-parallax';

function Education({ education }) {
  return (
    <Parallax y={[-20, 20]}>
      <h4>{education.degree} in {education.field} at {education.university}</h4>
      <p>{education.description}</p>
    </Parallax>
  );
}

export default Education;
