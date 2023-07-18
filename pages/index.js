import { useRef } from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import Experience from './components/Experience';
import Education from './components/Education';
import Project from './components/Project';
import Navigation from './components/Navigation';
// Mock data
const data = {
  profile: {
    name: 'Your Name',
    title: 'Your Title',
  },
  bio: 'Your Bio',
  experiences: [
    {
      position: 'Position',
      company: 'Company',
      description: 'Job Description',
    },
  ],
  education: [
    {
      degree: 'Degree',
      field: 'Field of Study',
      university: 'University',
      description: 'Brief description',
    },
  ],
  projects: [
    {
      name: 'Project Name',
      description: 'Brief Description',
    },
  ],
};

const SectionContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  scroll-behavior: smooth;
  overflow-anchor: none;
`;

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
`;

const HomePage = () => {
  const { profile, bio, experiences, education, projects } = data;
  const sectionRefs = useRef([]);

  const scrollToSection = (section) => {
    const sectionElement = sectionRefs.current[section];
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navigation scrollToSection={scrollToSection} />

      <SectionContainer>
        <Element name="profile">
          <Section ref={(ref) => (sectionRefs.current['profile'] = ref)}>
            <h1>{profile.name}</h1>
            <h2>{profile.title}</h2>
            <p>{bio}</p>
          </Section>
        </Element>

        <Element name="experiences">
          <Section ref={(ref) => (sectionRefs.current['experiences'] = ref)}>
            {experiences.map((exp, index) => (
              <Experience key={index} experience={exp} />
            ))}
          </Section>
        </Element>

        <Element name="education">
          <Section ref={(ref) => (sectionRefs.current['education'] = ref)}>
            {education.map((edu, index) => (
              <Education key={index} education={edu} />
            ))}
          </Section>
        </Element>

        <Element name="projects">
          <Section ref={(ref) => (sectionRefs.current['projects'] = ref)}>
            {projects.map((proj, index) => (
              <Project key={index} project={proj} />
            ))}
          </Section>
        </Element>
      </SectionContainer>
    </>
  );
};

export default HomePage;
