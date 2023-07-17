import ReactFullpage from '@fullpage/react-fullpage';
import Experience from './components/Experience';
import Education from './components/Education';
import Project from './components/Project';

// Mock data
const data = {
  profile: {
    name: "Your Name",
    title: "Your Title",
  },
  bio: "Your Bio",
  experiences: [
    {
      position: "Position",
      company: "Company",
      description: "Job Description",
    }
  ],
  education: [
    {
      degree: "Degree",
      field: "Field of Study",
      university: "University",
      description: "Brief description",
    }
  ],
  projects: [
    {
      name: "Project Name",
      description: "Brief Description",
    }
  ],
};

export default function HomePage() {
  const { profile, bio, experiences, education, projects } = data;

  return (
    <ReactFullpage
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <h1>{profile.name}</h1>
              <h2>{profile.title}</h2>
              <p>{bio}</p>
            </div>
            <div className="section">
              {experiences.map((exp, index) => <Experience key={index} experience={exp} />)}
            </div>
            <div className="section">
              {education.map((edu, index) => <Education key={index} education={edu} />)}
            </div>
            <div className="section">
              {projects.map((proj, index) => <Project key={index} project={proj} />)}
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
