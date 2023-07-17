import { Parallax } from 'react-scroll-parallax';

function Experience({ experience }) {
  return (
    <Parallax y={[-20, 20]}>
      <h4>{experience.position} at {experience.company}</h4>
      <p>{experience.description}</p>
    </Parallax>
  );
}

export default Experience;
