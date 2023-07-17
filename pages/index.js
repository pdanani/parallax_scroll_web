import { useRef } from 'react';
import { Element, scroller } from 'react-scroll';
import styled from 'styled-components';
import Experience from './components/Experience';
import Education from './components/Education';
import Project from './components/Project';

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

const NavigationContainer = styled.nav`
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 100;
`;

const NavigationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavigationItem = styled.li`
  margin-bottom: 10px;
`;

const NavigationButton = styled.button`
  color: #333;
  text-decoration: none;
  padding: 5px 10px;
  border: 1px solid #333;
  border-radius: 3px;
  transition: background-color 0.3s;
  ${({ active }) =>
    active &&
    `
    background-color: #333;
    color: #fff;
  `}

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

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
      <NavigationContainer>
        <NavigationList>
          <NavigationItem>
            <NavigationButton
              onClick={() => scrollToSection('profile')}
            >
              Profile
            </NavigationButton>
          </NavigationItem>
          <NavigationItem>
            <NavigationButton
              onClick={() => scrollToSection('experiences')}
            >
              Experiences
            </NavigationButton>
          </NavigationItem>
          <NavigationItem>
            <NavigationButton
              onClick={() => scrollToSection('education')}
            >
              Education
            </NavigationButton>
          </NavigationItem>
          <NavigationItem>
            <NavigationButton
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </NavigationButton>
          </NavigationItem>
        </NavigationList>
      </NavigationContainer>

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
