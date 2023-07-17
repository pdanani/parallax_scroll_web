import { Parallax } from 'react-scroll-parallax';

function Project({ project }) {
  return (
    <Parallax y={[-20, 20]}>
      <h4>{project.name}</h4>
      <p>{project.description}</p>
    </Parallax>
  );
}

export default Project;
