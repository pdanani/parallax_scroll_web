import { useRef } from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import Experience from './components/Experience';
import Education from './components/Education';
import Project from './components/Project';
import Navigation from './Navigation';
import { SectionContainer, SectionWrapper } from './styles/SectionStyles';
import NavigationContainer from './styles/NavigationStyles';
import Section from './Section';

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
        <Navigation scrollToSection={scrollToSection} />
      </NavigationContainer>

      <SectionContainer>
        <Section sectionRef={(ref) => (sectionRefs.current['profile'] = ref)}>
          <h1>{profile.name}</h1>
          <h2>{profile.title}</h2>
          <p>{bio}</p>
        </Section>

        <Section sectionRef={(ref) => (sectionRefs.current['experiences'] = ref)}>
          {experiences.map((exp, index) => (
            <Experience key={index} experience={exp} />
          ))}
        </Section>

        <Section sectionRef={(ref) => (sectionRefs.current['education'] = ref)}>
          {education.map((edu, index) => (
            <Education key={index} education={edu} />
          ))}
        </Section>

        <Section sectionRef={(ref) => (sectionRefs.current['projects'] = ref)}>
          {projects.map((proj, index) => (
            <Project key={index} project={proj} />
          ))}
        </Section>
      </SectionContainer>
    </>
  );
};

export default HomePage;
